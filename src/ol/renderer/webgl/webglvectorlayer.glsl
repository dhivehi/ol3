//! NAMESPACE=ol.renderer.webgl.vectorlayer.shader
//! CLASS=ol.renderer.webgl.vectorlayer.shader.


//! COMMON


//! VERTEX
attribute vec2 a_position;

uniform mat4 u_projectionMatrix;

void main(void) {
  gl_PointSize = 3.0;
  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.);
}


//! FRAGMENT

void main(void) {
  gl_FragColor = vec4(0.2, 0.6, 0.8, 1.0);
}
