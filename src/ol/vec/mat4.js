goog.provide('ol.vec.Mat4');

goog.require('goog.vec.Mat4');
goog.require('goog.vec.Vec4');


/**
 * @param {!goog.vec.Mat4.Number} mat Matrix.
 * @param {number} translateX1 Translate X1.
 * @param {number} translateY1 Translate Y1.
 * @param {number} scaleX Scale X.
 * @param {number} scaleY Scale Y.
 * @param {number} rotation Rotation.
 * @param {number} translateX2 Translate X2.
 * @param {number} translateY2 Translate Y2.
 * @return {!goog.vec.Mat4.Number} Matrix.
 */
ol.vec.Mat4.makeTransform2D = function(mat, translateX1, translateY1,
    scaleX, scaleY, rotation, translateX2, translateY2) {
  goog.vec.Mat4.makeIdentity(mat);
  if (translateX1 !== 0 || translateY1 !== 0) {
    goog.vec.Mat4.translate(mat, translateX1, translateY1, 0);
  }
  if (scaleX != 1 || scaleY != 1) {
    goog.vec.Mat4.scale(mat, scaleX, scaleY, 1);
  }
  if (rotation !== 0) {
    goog.vec.Mat4.rotateZ(mat, rotation);
  }
  if (translateX2 !== 0 || translateY2 !== 0) {
    goog.vec.Mat4.translate(mat, translateX2, translateY2, 0);
  }
  return mat;
};


/**
 * Returns true if mat1 and mat2 represent the same 2D transformation.
 * @param {goog.vec.Mat4.Number} mat1 Matrix 1.
 * @param {goog.vec.Mat4.Number} mat2 Matrix 2.
 * @return {boolean} Equal 2D.
 */
ol.vec.Mat4.equals2D = function(mat1, mat2) {
  return (
      goog.vec.Mat4.getElement(mat1, 0, 0) ==
      goog.vec.Mat4.getElement(mat2, 0, 0) &&
      goog.vec.Mat4.getElement(mat1, 1, 0) ==
      goog.vec.Mat4.getElement(mat2, 1, 0) &&
      goog.vec.Mat4.getElement(mat1, 0, 1) ==
      goog.vec.Mat4.getElement(mat2, 0, 1) &&
      goog.vec.Mat4.getElement(mat1, 1, 1) ==
      goog.vec.Mat4.getElement(mat2, 1, 1) &&
      goog.vec.Mat4.getElement(mat1, 0, 3) ==
      goog.vec.Mat4.getElement(mat2, 0, 3) &&
      goog.vec.Mat4.getElement(mat1, 1, 3) ==
      goog.vec.Mat4.getElement(mat2, 1, 3));
};


/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec. The input vector is multiplied against the
 * upper 2x4 matrix omitting the projective component.
 *
 * @param {goog.vec.Mat4.Number} mat The matrix supplying the transformation.
 * @param {Array.<number>} vec The 3 element vector to transform.
 * @param {Array.<number>} resultVec The 3 element vector to receive the results
 *     (may be vec).
 * @return {Array.<number>} return resultVec so that operations can be
 *     chained together.
 */
ol.vec.Mat4.multVec2 = function(mat, vec, resultVec) {
  var m00 = goog.vec.Mat4.getElement(mat, 0, 0);
  var m10 = goog.vec.Mat4.getElement(mat, 1, 0);
  var m01 = goog.vec.Mat4.getElement(mat, 0, 1);
  var m11 = goog.vec.Mat4.getElement(mat, 1, 1);
  var m03 = goog.vec.Mat4.getElement(mat, 0, 3);
  var m13 = goog.vec.Mat4.getElement(mat, 1, 3);
  var x = vec[0], y = vec[1];
  resultVec[0] = m00 * x + m01 * y + m03;
  resultVec[1] = m10 * x + m11 * y + m13;
  return resultVec;
};


/**
 * @param {number} x0 The x coordinate of the bottom-left corner.
 * @param {number} y0 The y coordinate of the bottom-left corner.
 * @param {number} x1 The x coordinate of the bottom-right corner.
 * @param {number} y1 The y coordinate of the bottom-right corner.
 * @param {number} x2 The x coordinate of the top-right corner.
 * @param {number} y2 The y coordinate of the top-right corner.
 * @param {number} x3 The x coordinate of the top-left corner.
 * @param {number} y3 The y coordinate of the top-left corner.
 * @param {goog.vec.Mat4.Number=} opt_mat The matrix to receive the results.
 * @return {goog.vec.Mat4.Number} The result matrix.
 */
ol.vec.Mat4.makeSquareToQuad =
    function(x0, y0, x1, y1, x2, y2, x3, y3, opt_mat) {
  if (!goog.isDef(opt_mat)) {
    opt_mat = goog.vec.Mat4.createNumber();
  }
  var dx1 = x1 - x2;
  var dy1 = y1 - y2;
  var dx2 = x3 - x2;
  var dy2 = y3 - y2;
  var dx3 = x0 - x1 + x2 - x3;
  var dy3 = y0 - y1 + y2 - y3;
  var det = dx1 * dy2 - dx2 * dy1;
  var a = (dx3 * dy2 - dx2 * dy3) / det;
  var b = (dx1 * dy3 - dx3 * dy1) / det;
  goog.vec.Mat4.setFromValues(opt_mat,
      x1 - x0 + a * x1, y1 - y0 + a * y1, 0, a,
      x3 - x0 + b * x3, y3 - y0 + b * y3, 0, b,
      0, 0, 1, 0,
      x0, y0, 0, 1);
  return opt_mat;
};


/**
 * @param {ol.Extent} extent Image extent.
 * @param {ol.Size} size Size in pixels.
 * @param {ol.Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {number} tilt Tilt.
 * @param {number} fov Field of view.
 * @param {goog.vec.Mat4.Number} mat The matrix to receive the results.
 */
ol.vec.Mat4.makeTransformImage =
    function(extent, size, center, resolution, rotation, tilt, fov, mat) {
  var fovOver2 = fov / 2;
  var tanFovOver2 = Math.tan(fovOver2);
  var w = size[0];
  var h = size[1];
  var cosTilt = Math.cos(tilt);
  var sinTilt = Math.sin(tilt);
  var tanTilt = sinTilt / cosTilt;
  var extentW = extent[2] - extent[0];
  var extentH = extent[3] - extent[1];
  var sx = w * resolution / extentW;
  var sy = h * resolution / extentH;
  var dx = (center[0] - extent[0]) / extentW;
  var dy = (center[1] - extent[1]) / extentH;

  var x0, x1, x2, x3, y0, y1, y2, y3;
  x0 = -0.5 * sx;
  x1 = 0.5 * sx;
  x2 = 0.5 * sx;
  x3 = -0.5 * sx;
  y0 = -0.5 * sy;
  y1 = -0.5 * sy;
  y2 = 0.5 * sy;
  y3 = 0.5 * sy;

  if (tilt !== 0) {
    // z = -0.5 sy / (1 / tan tilt + tan fov/2)
    // x = -tan fov/2 * z - 0.5 sx
    x0 += tanFovOver2 * 0.5 * sy / ((1 / tanTilt) + tanFovOver2);
    // z = -0.5 sy / (1 / tan tilt + tan fov/2)
    // x = tan fov/2 * z + 0.5 sx
    x1 += -tanFovOver2 * 0.5 * sy / ((1 / tanTilt) + tanFovOver2);
    // z = 0.5 sy / (1/tan tilt - tan fov/2)
    // x = tan fov/2 * z + 0.5 sx
    x2 += tanFovOver2 * 0.5 * sy / ((1 / tanTilt) - tanFovOver2);
    // z = 0.5 sy / (1/tan tilt - tan fov/2)
    // x = -tan fov/2 * z - 0.5 sx
    x3 += -tanFovOver2 * 0.5 * sy / ((1 / tanTilt) - tanFovOver2);
    y0 *= 1 / (cosTilt + tanFovOver2 * sinTilt);
    y1 *= 1 / (cosTilt + tanFovOver2 * sinTilt);
    y2 *= 1 / (cosTilt - tanFovOver2 * sinTilt);
    y3 *= 1 / (cosTilt - tanFovOver2 * sinTilt);
    // determine where the center goes after projective interpolation
    ol.vec.Mat4.makeSquareToQuad(x0, y0, x1, y1, x2, y2, x3, y3, mat);
    var vec = goog.vec.Vec4.createNumber();
    goog.vec.Vec4.setFromValues(vec, 0.5, 0.5, 0.0, 1.0);
    goog.vec.Mat4.multVec4(mat, vec, vec);
    dy += -vec[1] / vec[3];
  }

  x0 += dx;
  x1 += dx;
  x2 += dx;
  x3 += dx;

  y0 += dy;
  y1 += dy;
  y2 += dy;
  y3 += dy;

  ol.vec.Mat4.makeSquareToQuad(x0, y0, x1, y1, x2, y2, x3, y3, mat);

  //var x0 = -0.5 * (sx * cosRotation + sy * sinRotation) + dx;
  //var x0 = 0.5 * sy * tanFovOver2 * sinTilt - 0.5 * sx + dx;
  //var y0 = -0.5 * (sy * cosRotation - sx * sinRotation) + dy;
  //var y0 = -0.5 * sy / (cosTilt + tanFovOver2 * sinTilt) + dy;
  //var x1 = 0.5 * (sx * cosRotation - sy * sinRotation) + dx;
  //var x1 = -0.5 * sy * tanFovOver2 * sinTilt + 0.5 * sx + dx;
  //var y1 = -0.5 * (sy * cosRotation + sx * sinRotation) + dy;
  //var y1 = -0.5 * sy / (cosTilt + tanFovOver2 * sinTilt) + dy;
  //var x2 = 0.5 * (sx * cosRotation + sy * sinRotation) + dx;
  //var x2 = 0.5 * sy * tanFovOver2 * sinTilt + 0.5 * sx + dx;
  //var y2 = 0.5 * (sy * cosRotation - sx * sinRotation) + dy;
  //var y2 = 0.5 * sy / (cosTilt - tanFovOver2 * sinTilt) + dy;
  //var x3 = -0.5 * (sx * cosRotation - sy * sinRotation) + dx;
  //var x3 = -0.5 * sy * tanFovOver2 * sinTilt - 0.5 * sx + dx;
  //var y3 = 0.5 * (sy * cosRotation + sx * sinRotation) + dy;
  //var y3 = 0.5 * sy / (cosTilt - tanFovOver2 * sinTilt) + dy;
};
