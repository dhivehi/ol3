goog.provide('ol.math');

goog.require('goog.asserts');


/**
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
ol.math.cosh = function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
};


/**
 * @param {number} x X.
 * @return {number} Hyperbolic cotangent of x.
 */
ol.math.coth = function(x) {
  var expMinusTwoX = Math.exp(-2 * x);
  return (1 + expMinusTwoX) / (1 - expMinusTwoX);
};


/**
 * @param {number} x X.
 * @return {number} Hyperbolic cosecant of x.
 */
ol.math.csch = function(x) {
  return 2 / (Math.exp(x) - Math.exp(-x));
};


/**
 * @param {number} x X.
 * @return {number} The smallest power of two greater than or equal to x.
 */
ol.math.roundUpToPowerOfTwo = function(x) {
  goog.asserts.assert(0 < x);
  return Math.pow(2, Math.ceil(Math.log(x) / Math.LN2));
};


/**
 * @param {number} x X.
 * @return {number} Hyperbolic secant of x.
 */
ol.math.sech = function(x) {
  return 2 / (Math.exp(x) + Math.exp(-x));
};


/**
 * @param {number} x11 Start point x coordinate of segment 1.
 * @param {number} y11 Start point y coordinate of segment 1.
 * @param {number} x12 End point x coordinate of segment 1.
 * @param {number} y12 End point y coordinate of segment 1.
 * @param {number} x21 Start point x coordinate of segment 2.
 * @param {number} y21 Start point y coordinate of segment 2.
 * @param {number} x22 End point x coordinate of segment 2.
 * @param {number} y22 End point y coordinate of segment 2.
 * @return {Array.<number>} The intersection point. `[]` if there is no
 *     intersection. `[Infinity]` if the segments are coincident.
 */
ol.math.segmentSegmentIntersection =
    function(x11, y11, x12, y12, x21, y21, x22, y22) {
  var x11_21 = x11 - x21;
  var y11_21 = y11 - y21;
  var x12_11 = x12 - x11;
  var y12_11 = y12 - y11;
  var x22_21 = x22 - x21;
  var y22_21 = y22 - y21;
  var d = (y22_21 * x12_11) - (x22_21 * y12_11);
  var n1 = (x22_21 * y11_21) - (y22_21 * x11_21);
  var n2 = (x12_11 * y11_21) - (y12_11 * x11_21);
  if (d === 0) {
    // parallel
    if (n1 === 0 && n2 === 0) {
      // coincident
      return [Infinity];
    }
  } else {
    var along1 = n1 / d;
    var along2 = n2 / d;
    if (along1 >= 0 && along1 <= 1 && along2 >= 0 && along2 <= 1) {
      var x = x11 + (along1 * x12_11);
      var y = y11 + (along1 * y12_11);
      return [x, y];
    }
  }
  return [];
};


/**
 * @param {number} x X.
 * @return {number} Hyperbolic sine of x.
 */
ol.math.sinh = function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
};


/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
ol.math.squaredSegmentDistance = function(x, y, x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return ol.math.squaredDistance(x, y, x1, y1);
};


/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
ol.math.squaredDistance = function(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return dx * dx + dy * dy;
};


/**
 * @param {number} x X.
 * @return {number} Hyperbolic tangent of x.
 */
ol.math.tanh = function(x) {
  var expMinusTwoX = Math.exp(-2 * x);
  return (1 - expMinusTwoX) / (1 + expMinusTwoX);
};
