function r(n,l){const t=new Cesium.ScreenSpaceEventHandler(n.canvas);return t.setInputAction(function(i){const o=n.scene.pickPosition(i.position);if(Cesium.defined(o)){const e=Cesium.Cartographic.fromCartesian(o),s=Cesium.Math.toDegrees(e.longitude),c=Cesium.Math.toDegrees(e.latitude),a=e.height;console.group("============ 点击位置 ============"),console.log("笛卡尔坐标:",o),console.log("弧度坐标(Radians):",e),console.log(`经纬度(Degrees): 
经度 longitude: ${s.toFixed(6)}
纬度 latitude: ${c.toFixed(6)}
高度: ${a.toFixed(2)}`),console.groupEnd()}},Cesium.ScreenSpaceEventType.LEFT_CLICK),function(){t.destroy()}}export{r as h};
