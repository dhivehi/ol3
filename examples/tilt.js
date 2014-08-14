goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.control');
goog.require('ol.layer.Tile');
goog.require('ol.source.OSM');

var center = [3130860.6785608195, 626172.1357121654];

var view = new ol.View({
  center: center,
  zoom: 5
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  renderer: 'webgl',
  target: 'map',
  view: view
});

var increase = document.getElementById('increase');
var reset = document.getElementById('reset');
var decrease = document.getElementById('decrease');

function setResetButtonHTML() {
  var tiltDegrees = view.getTilt() * 180 / Math.PI;
  reset.innerHTML = 'Tilt (' + tiltDegrees.toFixed(2) + ')';
}

function setViewTilt(tilt) {
  tilt = Math.max(Math.min(tilt, Math.PI / 4), 0);
  view.setTilt(tilt);
}

setResetButtonHTML();

decrease.addEventListener('click', function() {
  setViewTilt(view.getTilt() - (5 * Math.PI / 180));
  setResetButtonHTML();
}, false);
reset.addEventListener('click', function() {
  setViewTilt(0);
  setResetButtonHTML();
}, false);
increase.addEventListener('click', function() {
  setViewTilt(view.getTilt() + (5 * Math.PI / 180));
  setResetButtonHTML();
}, false);
