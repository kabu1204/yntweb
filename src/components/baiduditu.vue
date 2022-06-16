<template>
  <div>
  <div class="baidumap" id="map-container"></div>
<!--  <div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="百度" style="width:150px;" /></div>-->
  <div id="searchResultPanel" style="z-index: 9997; border:1px solid #C0C0C0;width:150px;height:auto; display:none;">{{Msg}}</div>
    <v-row>
      <v-col cols="8">
      </v-col>>
    <v-col cols="3">
      <v-text-field
          label="搜索地点（优先展示位于烟台的结果）"
          id="suggestId"
          prepend-icon="mdi-magnify"
      ></v-text-field>
    </v-col>
    </v-row>
<!--  <div id="r-result" class="info">-->
<!--    <div class="input-item">-->
<!--      <div class="input-item-prepend">-->
<!--        <span class="input-item-text" style="width:8rem;">请输入关键字</span>-->
<!--      </div>-->
<!--      <input id='suggestId' type="text">-->
<!--    </div>-->
<!--  </div>-->
  </div>
</template>

<script>
import loadBMap from "../baiduditu/loadMap";
import BMPGL from "../baiduditu/bmpgl";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "baiduditu",
  data() {
    return {
      mapAK: "AwLm0EzIUzjXdoGBTG3oUwQihdf6XrWD",
      longitude: 121.460133,
      latitude: 37.464639,
      map: null,
      Msg: ""
    };
  },
  mounted() {
    const p = loadBMap(this.mapAK); // 加载引入BMap
    p.then(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      const that = this;
      var map = new window.BMap.Map("map-container", {
        enableMapClick: false
      }); // 新建地图实例，enableMapClick:false ：禁用地图默认点击弹框
      // 初始化位置
      const point = new window.BMap.Point(
          this.longitude,
          this.latitude
      );
      map.centerAndZoom(point, 12);
      this.mk = new window.BMap.Marker(point, { enableDragging: true }); // 创建一个图像标注实例，enableDragging：是否启用拖拽，默认为false
      map.addOverlay(this.mk); // 将覆盖物添加到地图中
      this.mk.addEventListener("dragend", (e) => {
        that.getAddrByPoint(e.point, true); // 拖拽结束后调用逆地址解析函数，e.point为拖拽后的地理坐标
      });
      const navigationControl = new window.BMap.NavigationControl({
        // 创建一个特定样式的地图平移缩放控件
        anchor: window.BMAP_ANCHOR_TOP_RIGHT, // 靠右上角位置
        type: window.BMAP_NAVIGATION_CONTROL_LARGE // LARGE控件类型
      });
      map.addControl(navigationControl); // 将控件添加到地图
      if (this.unloadLocation) {
        // 如果未加载位置信息，则定位到当前位置
        this.geolocation();
      }

      // function G(id) {
      //   return document.getElementById(id);
      // }

      var ac = new window.BMap.Autocomplete(    //建立一个自动完成的对象
          {"input" : "suggestId"
            ,"location" : map
          });

      ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        // G("searchResultPanel").innerHTML = str;
        this.Msg = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        // G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        this.Msg = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
      });

      function setPlace(){
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
          var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          map.centerAndZoom(pp, 18);
          map.addOverlay(new window.BMap.Marker(pp));    //添加标注
        }
        var local = new window.BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
      }
      this.map = map;
    },
    /**
     * 逆地址解析函数（根据坐标点获取详细地址）
     * @param {Object} point   百度地图坐标点，必传
     */
    getAddrByPoint(point, movePoint = false) {
      // 设置手动定位的坐标
      if (this.unloadLocation || movePoint) {
        this.unloadLocation = false;
        // 逆地理地址解析
        this.getGeocoding(point); // 调用百度web服务api接口进行逆地理地址解析
        this.longitude = point.lng; // 记录当前选中地址经度
        this.latitude = point.lat; // 记录当前选中地址纬度
        this.mk.setPosition(point); // 重新设置标注的地理坐标
        this.map.panTo(point); // 将地图的中心点更改为给定的点
      }
    },
    geolocation() {
      BMPGL(this.mapAK).then((BMapGL) => {
        const geolocation = new BMapGL.Geolocation();
        geolocation.getCurrentPosition(function(r) {
          if (this.getStatus() === window.BMAP_STATUS_SUCCESS) {
            this.longitude = r.lng;
            this.latitude = r.lat;
          } else {
            alert(`failed${this.getStatus()}`);
          }
        });
      });
    },
  }
}
</script>

<style scoped>

#map-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

#r-result {
  position: absolute;
  z-index: 9999;
  top: 10px;
  right: 30px;
  width: 10px;
}

#suggestId {
  width: 20px;
  padding: 5px 5px;
}

/*.baidumap {*/
/*  width: 1000px;*/
/*  height: 500px;*/
/*  border: 1px solid red;*/
/*  position: absolute;*/
/*  left: 0;*/
/*  top: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  margin: auto;*/
/*}*/
/*!* 去除百度地图版权那行字 和 百度logo *!*/
/*.baidumap > .BMap_cpyCtrl {*/
/*  display: none !important;*/
/*}*/
/*.BMap_noprint{*/
/*  display: block !important;*/
/*}*/
/*.anchorBL{*/
/*  display: none;*/
/*}*/
/*.BMap_scaleCtrl{*/
/* display: none !important;*/
/*}*/

#r-result{width:100%;}
</style>