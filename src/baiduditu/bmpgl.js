export default function BMPGL(ak) {
    return new Promise((resolve, reject) => {
        window.init = function () {
            // eslint-disable-next-line
            resolve(BMapGL)
        };
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}