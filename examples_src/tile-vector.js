goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.format.GeoJSON');
goog.require('ol.layer.Vector');
goog.require('ol.proj');
goog.require('ol.source.TileVector');
goog.require('ol.style.Fill');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');
goog.require('ol.tilegrid.XYZ');

var vectorTileLayer = new ol.layer.Vector({
  source: new ol.source.TileVector({
    format: new ol.format.GeoJSON(),
    projection: 'EPSG:3857',
    tileGrid: new ol.tilegrid.XYZ({
      tileSize: 4096
    }),
    url: 'data/tiles/{z}/{x}/{y}.json'
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: '#9db9e8'
    }),
    stroke: new ol.style.Stroke({
      width: 3,
      color: '#00000'
    })
  })
});


var map = new ol.Map({
  layers: [vectorTileLayer],
  renderer: 'canvas',
  target: document.getElementById('map'),
  view: new ol.View({
    center: ol.proj.fromLonLat([-74.0064, 40.7142]),
    maxResolution: 9783.93962050256,
    zoom: 0
  })
});
