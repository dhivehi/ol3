// create the WMTS tile grid in the google projection
var projection = ol.proj.get('EPSG:3857');
var tileSizePixels = 256;
var tileSizeMtrs = ol.extent.getWidth(projection.getExtent()) / tileSizePixels;
var matrixIds = [];
var resolutions = [];
var attributions = [
  new ol.Attribution({
    html: '<a href="http://scalgo.com">SCALGO</a>'
  }),
  new ol.Attribution({
    html: '<a href="http://www.cgiar-csi.org/data/' +
        'srtm-90m-digital-elevation-database-v4-1">CGIAR-CSI SRTM</a>'
  })
];

for (var i = 0; i <= 14; i++) {
  matrixIds[i] = i;
  resolutions[i] = tileSizeMtrs / Math.pow(2, i);
}
var tileGrid = new ol.tilegrid.WMTS({
  origin: ol.extent.getTopLeft(projection.getExtent()),
  resolutions: resolutions,
  matrixIds: matrixIds
});

var scalgoToken = 'CC5BF28A7D96B320C7DFBFD1236B5BEB';

// In this source the "threshold" dimension is specified as a "dynamic"
// dimension. This means that when updateDimensions is called to change the
// value of this dimension the "old" tiles are not invalidated, instead they're
// used as "interim" tiles while the new tiles are loading.
var dynamicSource = new ol.source.WMTS({
  url: 'http://ts2.scalgo.com/global/wmts?token=' + scalgoToken,
  layer: 'hydrosheds:sea-levels',
  format: 'image/png',
  matrixSet: 'EPSG:3857',
  attributions: attributions,
  tileGrid: tileGrid,
  style: 'default',
  dimensions: {
    'threshold': 100
  },
  dynamicDimensions: ['threshold']
});

// In this source "threshold" is not marked as a "dynamic" dimension.
var staticSource = new ol.source.WMTS({
  url: 'http://ts2.scalgo.com/global/wmts?token=' + scalgoToken,
  layer: 'hydrosheds:sea-levels',
  format: 'image/png',
  matrixSet: 'EPSG:3857',
  attributions: attributions,
  tileGrid: tileGrid,
  style: 'default',
  dimensions: {
    'threshold': 100
  }
});

var mapSmooth = new ol.Map({
  target: 'map_smooth',
  view: new ol.View({
    projection: projection,
    center: [-3052589, 3541786],
    zoom: 3
  }),
  controls: [
    new ol.control.Zoom(),
    new ol.control.Attribution()
  ],
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    new ol.layer.Tile({
      opacity: 0.5,
      source: dynamicSource
    })
  ]
});

var map = new ol.Map({
  target: 'map',
  view: mapSmooth.getView(),
  controls: [
    new ol.control.Zoom(),
    new ol.control.Attribution()
  ],
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    new ol.layer.Tile({
      opacity: 0.5,
      source: staticSource
    })
  ]
});

var updateSourceDimension = function(source, sliderVal) {
  source.updateDimensions({'threshold': sliderVal});
  document.getElementById('theinfo').innerHTML = sliderVal + ' meters.';
};

updateSourceDimension(staticSource, 10);
updateSourceDimension(dynamicSource, 10);

document.getElementById('slider').addEventListener('input', function() {
  updateSourceDimension(staticSource, this.value);
  updateSourceDimension(dynamicSource, this.value);
});
