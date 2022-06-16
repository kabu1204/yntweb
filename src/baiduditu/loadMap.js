/**
 * 动态加载百度地图api函数
 * @param {String} ak  百度地图AK，必传
 */
export default function loadBMap(ak) {
    return new Promise((resolve, reject) => {
        if (typeof window.BMap !== "undefined") {
            resolve(window.BMap);
            return true;
        }
        window.onBMapCallback = function () {
            resolve(window.BMap);
            return true;
        };
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=onBMapCallback&s=1`;
        script.onerror = reject;
        document.head.appendChild(script);
        return true;
    });
}