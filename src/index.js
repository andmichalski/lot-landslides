var map = L.map('mapid', {maxZoom: 22, maxNativeZoom: 20}).setView([49.940216, 20.862494], 13);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

var wmsLandslides = L.tileLayer.wms('http://cbdgmapa.pgi.gov.pl/arcgis/services/geozagrozenia/sopo_obszary/MapServer/WMSServer', {layers: "0,2", opacity: 0.5, minZoom: 0, maxZoom: 20, minNativeZoom: 0, maxNativeZoom: 14, updateWhenZooming: false}).addTo(map);
var wmsLots= L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer', {layers: "Dzialki,NumeryDzialek", opacity: 0.5, minZoom: 0, maxZoom: 100, maxNativeZoom: 100}).addTo(map);

function onChangeZoom(e) {
    console.log(e.target.getZoom());
};

map.on('zoom', onChangeZoom);
