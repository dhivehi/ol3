goog.provide('ol.geom.flat.intersection');

goog.require('ol.math');


/**
 * @param {Array.<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} segX1 Segment start point x coordinate.
 * @param {number} segY1 Segment start point x coordinate.
 * @param {number} segX2 Segment end point x coordinate.
 * @param {number} segY2 Segment end point x coordinate.
 * @param {Array.<number>=} opt_dest Destination.
 * @return {Array.<number>} Intersection points.
 * @todo api
 */
ol.geom.flat.intersection.lineStringSegmentIntersection = function(
    flatCoordinates, offset, end, stride,
    segX1, segY1, segX2, segY2, opt_dest) {
  /** @type {Array.<number>} */
  var intersections = goog.isDefAndNotNull(opt_dest) ? opt_dest : [];
  var x1 = flatCoordinates[offset];
  var y1 = flatCoordinates[offset + 1];
  for (offset += stride; offset < end; offset += stride) {
    var x2 = flatCoordinates[offset];
    var y2 = flatCoordinates[offset + 1];
    var point = ol.math.segmentSegmentIntersection(
        x1, y1, x2, y2, segX1, segY1, segX2, segY2);
    if (point.length > 1) {
      var lastX = intersections[intersections.length - 2];
      var lastY = intersections[intersections.length - 1];
      // FIXME ol.geom.SimpleGeometry#equals?
      if (!goog.isDef(lastX) || lastX != point[0] || lastY != point[1]) {
        Array.prototype.push.apply(intersections, point);
      }
    }
    x1 = x2;
    y1 = y2;
  }
  return intersections;
};
