<template>
  <div>
    <script type="text/javascript" src="//api.map.baidu.com/api?v=3.0&ak=AwLm0EzIUzjXdoGBTG3oUwQihdf6XrWD"></script>
    <div id="container"></div>
    <div id="pickerBox" class="info">
      <div class="input-item">
        <div class="input-item-prepend">
          <span class="input-item-text" style="width:8rem;">请输入关键字</span>
        </div>
        <input id='tipinput' type="text">
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "amapview",
  data() {
    return {
      map: null,
    }
  },
  created() {

  },
  mounted() {
    this.initAMap();
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: '7ab38f5d50d1b20030152f4b5921e4e6',
        version: "2.0",
        plugins: ['AMap.AutoComplete','AMap.PlaceSearch'],
        AMapUI: {
          version: "1.1",
          plugins: [],
        },
        Loca: {
          version: "2.0"
        },
      }).then((AMap) => {
        var map = new AMap.Map("container", {
          viewMode: "3D",
          zoom: 9,
          zooms: [2, 22],
          center: [121.460133, 37.464639],
        });
        AMap.plugin(['AMap.AutoComplete', 'AMap.PlaceSearch'], function() {
          const autoOptions = {
            // 使用联想输入的input的div的id
            input: 'tipinput'
          }
          const autocomplete = new AMap.Autocomplete(autoOptions)
          const placeSearch = new AMap.PlaceSearch({
            city: '北京', // 默认城市，一定要有，不然没有放大效果
            map: map // 地图，选中会有放大功能，绑定上面创建的地图即可
          })
          AMap.event.addListener(autocomplete, 'select', function(e) {
            console.log(e.poi.location) // 获取选中的的地址的经纬度
            placeSearch.search(e.poi.name)
          })
        })
        window.AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
          //缩放控件
          map.addControl(new BasicControl.Zoom({
            position: 'lt',
            showZoomNum: true
          }));

          map.addControl(new BasicControl.LayerSwitcher({
            position: 'rt'
          }));

          map.addControl(new BasicControl.Traffic({
            position: 'lb'
          }));
        });
        window.AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
          new SimpleMarker({
            iconLabel: '烟台',
            iconStyle: '//webapi.amap.com/theme/v1.3/markers/b/mark_r.png',
            offset: new AMap.Pixel(-19, -60),
            map: map,
            showPositionPoint: true,
            position: [121.460133, 37.464639],
            zIndex: 100
          });
        });
        window.AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {

          var poiPicker = new PoiPicker({
            input: 'pickerInput',
            city:'北京',
            placeSearchOptions: {
              map: map,
              pageSize: 10
            },
            searchResultsContainer: 'poiInfo'
          });
          console.log(poiPicker);

          //初始化poiPicker
          console.log("ready");
          // window.window.poiPicker = poiPicker;

          var marker = new AMap.Marker();
          console.log(marker);

          var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
          });
          console.log(infoWindow);

          //选取了某个POI
          poiPicker.on('poiPicked', function(poiResult) {
            console.log("picked");
            var source = poiResult.source,
                poi = poiResult.item,
                info = {
                  source: source,
                  id: poi.id,
                  name: poi.name,
                  location: poi.location.toString(),
                  address: poi.address
                };

            marker.setMap(map);
            infoWindow.setMap(map);

            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);

            infoWindow.setContent('POI信息: <pre>' + JSON.stringify(info, null, 2) + '</pre>');
            infoWindow.open(map, marker.getPosition());

            map.setCenter(marker.getPosition());
          });

          poiPicker.onCityReady(function() {
            console.log("city ready");
            poiPicker.suggest('美食');
          });
        });
      }).catch(e => {
        console.log(e);
      })
    },
  }

}

</script>
<style scoped>
.home_div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

#container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.map_title {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: rgba(27, 25, 27, 0.884);

}

h3 {
  position: absolute;
  left: 10px;
  z-index: 2;
  color: white;
}

#pickerBox {
  position: absolute;
  z-index: 9999;
  top: 50px;
  right: 30px;
  width: 300px;
}

#tipinput {
  width: 200px;
  padding: 5px 5px;
}

#poiInfo {
  background-color: antiquewhite;
}

.amap_lib_placeSearch .poibox.highlight {
  background-color: #CAE1FF;
}

.amap_lib_placeSearch .poi-more {
  display: none!important;
}

</style>