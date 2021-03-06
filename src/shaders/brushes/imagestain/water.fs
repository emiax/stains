uniform sampler2D water;
uniform sampler2D wet;
uniform sampler2D dry;

uniform vec2 splatPosition;
uniform float splatWater;

uniform vec2 pixelSize;

varying vec2 textureCoordinates;

uniform sampler2D inputTexture;
uniform vec2 inputPosition;



void main() {
  float dryCoefficient = texture2D(inputTexture, vec2(inputPosition.x, 1.0 - inputPosition.y)).a;

  float d = splat();

  vec4 oldValue = texture2D(water, textureCoordinates);
  gl_FragColor = oldValue + vec4(d * splatWater / dryCoefficient, 0.0, 0.0, 1.0);
}