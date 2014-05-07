goog.require('ol.Graticule');
goog.require('ol.Map');
goog.require('ol.View2D');
goog.require('ol.coordinate');
goog.require('ol.geom.Point');
goog.require('ol.geom.flat.interpolate');
goog.require('ol.geom.flat.intersection');
goog.require('ol.layer.Tile');
goog.require('ol.proj');
goog.require('ol.source.OSM');
goog.require('ol.style.Fill');
goog.require('ol.style.Stroke');
goog.require('ol.style.Text');


var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  renderer: 'canvas',
  target: 'map',
  view: new ol.View2D({
    center: ol.proj.transform([4.8, 47.75], 'EPSG:4326', 'EPSG:3857'),
    zoom: 5
  })
});

// Create the graticule component
var graticule = new ol.Graticule({
  projection: map.getView().getProjection()
});
graticule.setMap(map);


// Use a postcompose listener to draw labels for the graticule.
//
// Note: we use global variables to avoid creating garbage on each
// frame (in the postcompose listener).


function getTextStyle(degrees, offsetX, offsetY, hemispheres) {
  return new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#000'
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: 3
    }),
    offsetY: offsetY,
    offsetX: offsetX,
    text: ol.coordinate.degreesToStringHDMS(degrees, hemispheres)
  });
}


/** @type {ol.Pixel} */
var pixel = [];


/** @type {ol.Coordinate} */
var lonLat = [];


/** @type {ol.TransformFunction} */
var transform = ol.proj.getTransform('EPSG:3857', 'EPSG:4326');


/** @type {Array.<number>} */
var intersectionPoint = [];


// Display labels at the intersection points between the graticule's
// meridians and the map's top edge, and at the intersection points
// between the graticule's parallels and the map's left edge.
map.on('postcompose', function(e) {
  var frameState = e.frameState;
  var mapSize = frameState.size;
  var vectorContext = e.vectorContext;

  pixel[0] = 0;
  pixel[1] = 0;
  var topLeft = map.getCoordinateFromPixel(pixel);
  pixel[0] = mapSize[0];
  pixel[1] = 0;
  var topRight = map.getCoordinateFromPixel(pixel);
  pixel[0] = mapSize[0];
  pixel[1] = mapSize[1];
  var bottomRight = map.getCoordinateFromPixel(pixel);

  var i, l, flatCoordinates, point, textStyle;
  var lineString, lineStrings;

  lineStrings = graticule.getMeridians();
  for (i = 0, l = lineStrings.length; i < l; ++i) {
    lineString = lineStrings[i];
    flatCoordinates = lineString.getFlatCoordinates();
    intersectionPoint.length = 0;
    ol.geom.flat.intersection.lineStringSegmentIntersection(
        flatCoordinates, 0, flatCoordinates.length, lineString.getStride(),
        topLeft[0], topLeft[1], topRight[0], topRight[1],
        intersectionPoint);
    if (intersectionPoint.length <= 0) {
      ol.geom.flat.interpolate.lineString(
          flatCoordinates, 0, flatCoordinates.length, lineString.getStride(),
          1, intersectionPoint);
    }
    point = new ol.geom.Point(null);
    point.setFlatCoordinates('XY', intersectionPoint);
    transform(intersectionPoint, lonLat);
    textStyle = getTextStyle(lonLat[0], 0, 10, 'EW');
    vectorContext.setTextStyle(textStyle);
    vectorContext.drawPointGeometry(point, null);
  }

  lineStrings = graticule.getParallels();
  for (i = 0, l = lineStrings.length; i < l; ++i) {
    lineString = lineStrings[i];
    flatCoordinates = lineString.getFlatCoordinates();
    intersectionPoint.length = 0;
    ol.geom.flat.intersection.lineStringSegmentIntersection(
        flatCoordinates, 0, flatCoordinates.length, lineString.getStride(),
        topRight[0], topRight[1], bottomRight[0], bottomRight[1],
        intersectionPoint);
    if (intersectionPoint.length <= 0) {
      intersectionPoint = ol.geom.flat.interpolate.lineString(
          flatCoordinates, 0, flatCoordinates.length, lineString.getStride(),
          1, intersectionPoint);
    }
    point = new ol.geom.Point(null);
    point.setFlatCoordinates('XY', intersectionPoint);
    transform(intersectionPoint, lonLat);
    textStyle = getTextStyle(lonLat[1], -30, 0, 'NS');
    vectorContext.setTextStyle(textStyle);
    vectorContext.drawPointGeometry(point, null);
  }
});
