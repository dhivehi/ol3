goog.require('ol.Attribution');
goog.require('ol.CanvasFunctionType');
goog.require('ol.Collection');
goog.require('ol.Color');
goog.require('ol.Coordinate');
goog.require('ol.CoordinateFormatType');
goog.require('ol.Extent');
goog.require('ol.Feature');
goog.require('ol.FeatureLoader');
goog.require('ol.ImageLoadFunctionType');
goog.require('ol.ImageTile');
goog.require('ol.Kinetic');
goog.require('ol.LoadingStrategy');
goog.require('ol.Map');
goog.require('ol.MapBrowserEvent');
goog.require('ol.MapBrowserPointerEvent');
goog.require('ol.MapEvent');
goog.require('ol.OverlayPositioning');
goog.require('ol.PostRenderFunction');
goog.require('ol.RendererType');
goog.require('ol.Size');
goog.require('ol.TileLoadFunctionType');
goog.require('ol.TileQueue');
goog.require('ol.TileRange');
goog.require('ol.TileState');
goog.require('ol.TileUrlFunctionType');
goog.require('ol.View');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.events.ConditionType');
goog.require('ol.format.Feature');
goog.require('ol.format.GMLBase');
goog.require('ol.format.IGCZ');
goog.require('ol.geom.GeometryLayout');
goog.require('ol.geom.GeometryType');
goog.require('ol.interaction.SelectFilterFunction');
goog.require('ol.layer.Base');
goog.require('ol.layer.Layer');
goog.require('ol.layer.LayerState');
goog.require('ol.proj.Projection');
goog.require('ol.proj.ProjectionLike');
goog.require('ol.proj.Units');
goog.require('ol.source.Image');
goog.require('ol.source.Source');
goog.require('ol.source.State');
goog.require('ol.source.Tile');
goog.require('ol.source.Vector');
goog.require('ol.source.WMTSRequestEncoding');
goog.require('ol.source.wms.ServerType');
goog.require('ol.style.AtlasManager');
goog.require('ol.style.Fill');
goog.require('ol.style.IconAnchorUnits');
goog.require('ol.style.IconOrigin');
goog.require('ol.style.Image');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');
goog.require('ol.style.Text');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.vec.Mat4.Number');


/**
 * @typedef {{html: string,
 *     tileRanges: (Object.<string, Array.<ol.TileRange>>|undefined)}}
 * @api
 */
olx.AttributionOptions;


/**
 * @typedef {{tracking: (boolean|undefined)}}
 * @api
 */
olx.DeviceOrientationOptions;


/**
 * @typedef {{tracking: (boolean|undefined),
 *     trackingOptions: (GeolocationPositionOptions|undefined),
 *     projection: ol.proj.ProjectionLike}}
 * @api
 */
olx.GeolocationOptions;


/**
 * Object literal with config options for the map logo.
 * @typedef {{href: (string), src: (string)}}
 * @api
 */
olx.LogoOptions;


/**
 * @typedef {{map: (ol.Map|undefined),
 *     maxLines: (number|undefined),
 *     strokeStyle: (ol.style.Stroke|undefined),
 *     targetSize: (number|undefined)}}
 * @api
 */
olx.GraticuleOptions;


/**
 * Object literal with config options for interactions.
 * @typedef {{handleEvent: function(ol.MapBrowserEvent):boolean}}
 * @api
 */
olx.interaction.InteractionOptions;


/**
 * Object literal with config options for the map.
 * @typedef {{controls: (ol.Collection.<ol.control.Control>|Array.<ol.control.Control>|undefined),
 *     pixelRatio: (number|undefined),
 *     interactions: (ol.Collection.<ol.interaction.Interaction>|Array.<ol.interaction.Interaction>|undefined),
 *     keyboardEventTarget: (Element|Document|string|undefined),
 *     layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined),
 *     loadTilesWhileAnimating: (boolean|undefined),
 *     loadTilesWhileInteracting: (boolean|undefined),
 *     logo: (boolean|string|olx.LogoOptions|undefined),
 *     overlays: (ol.Collection.<ol.Overlay>|Array.<ol.Overlay>|undefined),
 *     renderer: (ol.RendererType|Array.<ol.RendererType|string>|string|undefined),
 *     target: (Element|string|undefined),
 *     view: (ol.View|undefined)}}
 * @api
 */
olx.MapOptions;


/**
 * Object literal with config options for the overlay.
 * @typedef {{element: (Element|undefined),
 *     offset: (Array.<number>|undefined),
 *     position: (ol.Coordinate|undefined),
 *     positioning: (ol.OverlayPositioning|string|undefined),
 *     stopEvent: (boolean|undefined),
 *     insertFirst: (boolean|undefined),
 *     autoPan: (boolean|undefined),
 *     autoPanAnimation: (olx.animation.PanOptions|undefined),
 *     autoPanMargin: (number|undefined)}}
 * @api stable
 */
olx.OverlayOptions;


/**
 * Object literal with config options for the projection.
 * @typedef {{code: string,
 *     units: (ol.proj.Units|string|undefined),
 *     extent: (ol.Extent|undefined),
 *     axisOrientation: (string|undefined),
 *     global: (boolean|undefined),
 *     worldExtent: (ol.Extent|undefined),
 *     getPointResolution: (function(number, ol.Coordinate):number|undefined) }}
 * @api
 */
olx.ProjectionOptions;


/**
 * Object literal with config options for the view.
 * @typedef {{center: (ol.Coordinate|undefined),
 *     constrainRotation: (boolean|number|undefined),
 *     enableRotation: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     minZoom: (number|undefined),
 *     maxZoom: (number|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     resolution: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     rotation: (number|undefined),
 *     zoom: (number|undefined),
 *     zoomFactor: (number|undefined)}}
 * @api
 */
olx.ViewOptions;


/**
 * @typedef {{resolution: number,
 *     start: (number|undefined),
 *     duration: (number|undefined),
 *     easing: (function(number):number|undefined)}}
 * @api
 */
olx.animation.BounceOptions;


/**
 * @typedef {{source: ol.Coordinate,
 *     start: (number|undefined),
 *     duration: (number|undefined),
 *     easing: (function(number):number|undefined)}}
 * @api
 */
olx.animation.PanOptions;


/**
 * @typedef {{rotation: (number|undefined),
 *     anchor: (ol.Coordinate|undefined),
 *     start: (number|undefined),
 *     duration: (number|undefined),
 *     easing: (function(number):number|undefined)}}
 * @api
 */
olx.animation.RotateOptions;


/**
 * @typedef {{resolution: number,
 *     start: (number|undefined),
 *     duration: (number|undefined),
 *     easing: (function(number):number|undefined)}}
 * @api
 */
olx.animation.ZoomOptions;


/**
 * @typedef {{className: (string|undefined),
 *     collapsible: (boolean|undefined),
 *     collapsed: (boolean|undefined),
 *     tipLabel: (string|undefined),
 *     label: (string|Node|undefined),
 *     collapseLabel: (string|Node|undefined),
 *     render: (function(ol.MapEvent)|undefined),
 *     target: (Element|undefined)}}
 * @api
 */
olx.control.AttributionOptions;


/**
 * @typedef {{element: (Element|undefined),
 *     render: (function(ol.MapEvent)|undefined),
 *     target: (Element|string|undefined)}}
 * @api stable
 */
olx.control.ControlOptions;


/**
 * @typedef {{attribution: (boolean|undefined),
 *     attributionOptions: (olx.control.AttributionOptions|undefined),
 *     rotate: (boolean|undefined),
 *     rotateOptions: (olx.control.RotateOptions|undefined),
 *     zoom: (boolean|undefined),
 *     zoomOptions: (olx.control.ZoomOptions|undefined)}}
 * @api
 */
olx.control.DefaultsOptions;


/**
 * @typedef {{className: (string|undefined),
 *     label: (string|Node|undefined),
 *     labelActive: (string|Node|undefined),
 *     tipLabel: (string|undefined),
 *     keys: (boolean|undefined),
 *     target: (Element|undefined)}}
 * @api
 */
olx.control.FullScreenOptions;


/**
 * @typedef {{className: (string|undefined),
 *     coordinateFormat: (ol.CoordinateFormatType|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     render: (function(ol.MapEvent)|undefined),
 *     target: (Element|undefined),
 *     undefinedHTML: (string|undefined)}}
 * @api stable
 */
olx.control.MousePositionOptions;


/**
 * @typedef {{collapsed: (boolean|undefined),
 *     collapseLabel: (string|Node|undefined),
 *     collapsible: (boolean|undefined),
 *     label: (string|Node|undefined),
 *     layers: (Array.<ol.layer.Layer>|ol.Collection|undefined),
 *     render: (function(ol.MapEvent)|undefined),
 *     target: (Element|undefined),
 *     tipLabel: (string|undefined)}}
 * @api
 */
olx.control.OverviewMapOptions;


/**
 * @typedef {{className: (string|undefined),
 *     minWidth: (number|undefined),
 *     render: (function(ol.MapEvent)|undefined),
 *     target: (Element|undefined),
 *     units: (ol.control.ScaleLineUnits|string|undefined)}}
 * @api stable
 */
olx.control.ScaleLineOptions;


/**
 * @typedef {{duration: (number|undefined),
 *     className: (string|undefined),
 *     label: (string|Node|undefined),
 *     tipLabel: (string|undefined),
 *     target: (Element|undefined),
 *     render: (function(ol.MapEvent)|undefined),
 *     autoHide: (boolean|undefined)}}
 * @api stable
 */
olx.control.RotateOptions;


/**
 * @typedef {{duration: (number|undefined),
 *     className: (string|undefined),
 *     zoomInLabel: (string|Node|undefined),
 *     zoomOutLabel: (string|Node|undefined),
 *     zoomInTipLabel: (string|undefined),
 *     zoomOutTipLabel: (string|undefined),
 *     delta: (number|undefined),
 *     target: (Element|undefined)}}
 * @api stable
 */
olx.control.ZoomOptions;


/**
 * @typedef {{className: (string|undefined),
 *     maxResolution: (number|undefined),
 *     minResolution: (number|undefined),
 *     render: (function(ol.MapEvent)|undefined)}}
 * @api
 */
olx.control.ZoomSliderOptions;


/**
 * @typedef {{className: (string|undefined),
 *     target: (Element|undefined),
 *     label: (string|Node|undefined),
 *     tipLabel: (string|undefined),
 *     extent: (ol.Extent|undefined)}}
 * @api stable
 */
olx.control.ZoomToExtentOptions;


/**
 * @typedef {{dataProjection: ol.proj.ProjectionLike,
 *     featureProjection: ol.proj.ProjectionLike,
 *     rightHanded: (boolean|undefined)}}
 * @api
 */
olx.format.ReadOptions;


/**
 * @typedef {{dataProjection: ol.proj.ProjectionLike,
 *     featureProjection: ol.proj.ProjectionLike,
 *     rightHanded: (boolean|undefined)}}
 * @api
 */
olx.format.WriteOptions;


/**
 * @typedef {{defaultDataProjection: ol.proj.ProjectionLike,
 *     geometryName: (string|undefined)}}
 * @api
 */
olx.format.GeoJSONOptions;


/**
 * @typedef {{geometryName: (string|undefined)}}
 * @api
 */
olx.format.EsriJSONOptions;


/**
 * @typedef {{factor: (number|undefined),
 *     geometryLayout: (ol.geom.GeometryLayout|undefined)}}
 * @api
 */
olx.format.PolylineOptions;


/**
 * @typedef {{defaultDataProjection: ol.proj.ProjectionLike}}
 * @api
 */
olx.format.TopoJSONOptions;


/**
 * @typedef {{altitudeMode: (ol.format.IGCZ|undefined)}}
 * @api
 */
olx.format.IGCOptions;


/**
 * @typedef {{extractStyles: (boolean|undefined),
 *     defaultStyle: (Array.<ol.style.Style>|undefined)}}
 * @api
 */
olx.format.KMLOptions;


/**
 * @typedef {{featureNS: (Object.<string, string>|string|undefined),
 *     featureType: (Array.<string>|string|undefined),
 *     srsName: string,
 *     surface: (boolean|undefined),
 *     curve: (boolean|undefined),
 *     multiCurve: (boolean|undefined),
 *     multiSurface: (boolean|undefined),
 *     schemaLocation: (string|undefined)}}
 * @api
 */
olx.format.GMLOptions;


/**
 * @typedef {{readExtensions: (function(ol.Feature, Node)|undefined)}}
 * @api
 */
olx.format.GPXOptions;


/**
 * @typedef {{featureNS: (Object.<string, string>|string|undefined),
 *     featureType: (Array.<string>|string|undefined),
 *     gmlFormat: (ol.format.GMLBase|undefined),
 *     schemaLocation: (string|undefined)}}
 * @api
 */
olx.format.WFSOptions;


/**
 * @typedef {{featureNS: string,
 *     featurePrefix: string,
 *     featureTypes: Array.<string>,
 *     srsName: (string|undefined),
 *     handle: (string|undefined),
 *     outputFormat: (string|undefined),
 *     maxFeatures: (number|undefined),
 *     geometryName: (string|undefined),
 *     bbox: (ol.Extent|undefined)}}
 * @api
 */
olx.format.WFSWriteGetFeatureOptions;


/**
 * @typedef {{featureNS: string,
 *     featurePrefix: string,
 *     featureType: string,
 *     srsName: (string|undefined),
 *     handle: (string|undefined),
 *     nativeElements: Array.<Object>,
 *     gmlOptions: (olx.format.GMLOptions|undefined)}}
 * @api stable
 */
olx.format.WFSWriteTransactionOptions;


/**
 * @typedef {{splitCollection: (boolean|undefined)}}
 * @api
 */
olx.format.WKTOptions;


/**
 * Interactions for the map. Default is `true` for all options.
 * @typedef {{altShiftDragRotate: (boolean|undefined),
 *     doubleClickZoom: (boolean|undefined),
 *     keyboard: (boolean|undefined),
 *     mouseWheelZoom: (boolean|undefined),
 *     shiftDragZoom: (boolean|undefined),
 *     dragPan: (boolean|undefined),
 *     pinchRotate: (boolean|undefined),
 *     pinchZoom: (boolean|undefined),
 *     zoomDelta: (number|undefined),
 *     zoomDuration: (number|undefined)}}
 * @api
 */
olx.interaction.DefaultsOptions;


/**
 * @typedef {{duration: (number|undefined),
 *     delta: (number|undefined)}}
 * @api
 */
olx.interaction.DoubleClickZoomOptions;


/**
 * @typedef {{formatConstructors: (Array.<function(new: ol.format.Feature)>|undefined),
 *     projection: ol.proj.ProjectionLike}}
 * @api
 */
olx.interaction.DragAndDropOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined),
 *     style: ol.style.Style}}
 * @api
 */
olx.interaction.DragBoxOptions;


/**
 * @typedef {{kinetic: (ol.Kinetic|undefined)}}
 * @api
 */
olx.interaction.DragPanOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined)}}
 * @api
 */
olx.interaction.DragRotateAndZoomOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined)}}
 * @api
 */
olx.interaction.DragRotateOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined),
 *     style: ol.style.Style}}
 * @api
 */
olx.interaction.DragZoomOptions;


/**
 * @typedef {{features: (ol.Collection.<ol.Feature>|undefined),
 *     source: (ol.source.Vector|undefined),
 *     snapTolerance: (number|undefined),
 *     type: ol.geom.GeometryType,
 *     minPointsPerRing: (number|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
 *     geometryName: (string|undefined),
 *     condition: (ol.events.ConditionType|undefined)}}
 * @api
 */
olx.interaction.DrawOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined),
 *     pixelDelta: (number|undefined)}}
 * @api
 */
olx.interaction.KeyboardPanOptions;


/**
 * @typedef {{duration: (number|undefined),
 *     condition: (ol.events.ConditionType|undefined),
 *     delta: (number|undefined)}}
 * @api
 */
olx.interaction.KeyboardZoomOptions;


/**
 * @typedef {{deleteCondition: (ol.events.ConditionType|undefined),
 *     pixelTolerance: (number|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
 *     features: ol.Collection.<ol.Feature>}}
 * @api
 */
olx.interaction.ModifyOptions;


/**
 * @typedef {{duration: (number|undefined)}}
 * @api
 */
olx.interaction.MouseWheelZoomOptions;


/**
 * @typedef {{threshold: (number|undefined)}}
 * @api
 */
olx.interaction.PinchRotateOptions;


/**
 * @typedef {{duration: (number|undefined)}}
 * @api
 */
olx.interaction.PinchZoomOptions;


/**
 * @typedef {{handleDownEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined),
 *     handleDragEvent: (function(ol.MapBrowserPointerEvent)|undefined),
 *     handleEvent: (function(ol.MapBrowserEvent):boolean|undefined),
 *     handleMoveEvent: (function(ol.MapBrowserPointerEvent)|undefined),
 *     handleUpEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined)}}
 * @api
 */
olx.interaction.PointerOptions;


/**
 * @typedef {{addCondition: (ol.events.ConditionType|undefined),
 *     condition: (ol.events.ConditionType|undefined),
 *     layers: (Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
 *     removeCondition: (ol.events.ConditionType|undefined),
 *     toggleCondition: (ol.events.ConditionType|undefined),
 *     multi: (boolean|undefined),
 *     filter: (ol.interaction.SelectFilterFunction|undefined)}}
 * @api
 */
olx.interaction.SelectOptions;


/**
 * Options for snap
 * @typedef {{
 *     features: (ol.Collection.<ol.Feature>|undefined),
 *     pixelTolerance: (number|undefined),
 *     source: (ol.source.Vector|undefined)
 * }}
 * @api
 */
olx.interaction.SnapOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     opacity: (number|undefined),
 *     saturation: (number|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined)}}
 * @api
 */
olx.layer.BaseOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     opacity: (number|undefined),
 *     saturation: (number|undefined),
 *     source: (ol.source.Source|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined)}}
 * @api
 */
olx.layer.LayerOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     opacity: (number|undefined),
 *     saturation: (number|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
 * @api
 */
olx.layer.GroupOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     gradient: (Array.<string>|undefined),
 *     radius: (number|undefined),
 *     blur: (number|undefined),
 *     shadow: (number|undefined),
 *     weight: (string|function(ol.Feature):number|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     opacity: (number|undefined),
 *     saturation: (number|undefined),
 *     source: (ol.source.Vector|undefined),
 *     visible: (boolean|undefined)}}
 * @api
 */
olx.layer.HeatmapOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     opacity: (number|undefined),
 *     saturation: (number|undefined),
 *     source: (ol.source.Image|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined)}}
 * @api
 */
olx.layer.ImageOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     hue: (number|undefined),
 *     opacity: (number|undefined),
 *     preload: (number|undefined),
 *     saturation: (number|undefined),
 *     source: (ol.source.Tile|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     useInterimTilesOnError: (boolean|undefined)}}
 * @api
 */
olx.layer.TileOptions;


/**
 * @typedef {{brightness: (number|undefined),
 *     contrast: (number|undefined),
 *     renderOrder: (function(ol.Feature, ol.Feature):number|null|undefined),
 *     hue: (number|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     opacity: (number|undefined),
 *     renderBuffer: (number|undefined),
 *     saturation: (number|undefined),
 *     source: (ol.source.Vector|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined),
 *     updateWhileAnimating: (boolean|undefined),
 *     updateWhileInteracting: (boolean|undefined),
 *     visible: (boolean|undefined)}}
 * @api
 */
olx.layer.VectorOptions;


/**
 * @typedef {{features: (Array.<ol.Feature>|ol.Collection.<ol.Feature>|undefined),
 *     map: (ol.Map|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
 * @api
 */
olx.FeatureOverlayOptions;


/**
 * @typedef {{culture: (string|undefined),
 *     key: string,
 *     imagerySet: string,
 *     maxZoom: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.BingMapsOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     distance: (number|undefined),
 *     extent: (ol.Extent|undefined),
 *     format: (ol.format.Feature|undefined),
 *     logo: (string|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     source: ol.source.Vector}}
 * @api
 */
olx.source.ClusterOptions;


/**
 * @typedef {{preemptive: (boolean|undefined),
 *            url: string}}
 * @api
 */
olx.source.TileUTFGridOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *            crossOrigin: (null|string|undefined),
 *            logo: (string|olx.LogoOptions|undefined),
 *            opaque: (boolean|undefined),
 *            projection: ol.proj.ProjectionLike,
 *            state: (ol.source.State|string|undefined),
 *            tileClass: (function(new: ol.ImageTile, ol.TileCoord,
 *                                 ol.TileState, string, ?string,
 *                                 ol.TileLoadFunctionType)|undefined),
 *            tileGrid: (ol.tilegrid.TileGrid|undefined),
 *            tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *            tilePixelRatio: (number|undefined),
 *            tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *            wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.TileImageOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     format: ol.format.Feature,
 *     logo: (string|olx.LogoOptions|undefined),
 *     tileGrid: ol.tilegrid.TileGrid,
 *     tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined)}}
 * @api
 */
olx.source.TileVectorOptions;


/**
 * @typedef {{url: (string|undefined),
 *     displayDpi: (number|undefined),
 *     metersPerUnit: (number|undefined),
 *     hidpi: (boolean|undefined),
 *     useOverlay: (boolean|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     params: (Object|undefined)}}
 * @api
 */
olx.source.ImageMapGuideOptions;


/**
 * @typedef {{layer: string,
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined)}}
 * @api
 */
olx.source.MapQuestOptions;


/**
 * @typedef {{projection: ol.proj.ProjectionLike,
 *     tileGrid: (ol.tilegrid.TileGrid|undefined)}}
 * @api
 */
olx.source.TileDebugOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     maxZoom: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.OSMOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     canvasFunction: ol.CanvasFunctionType,
 *     logo: (string|olx.LogoOptions|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     state: (ol.source.State|string|undefined)}}
 * @api
 */
olx.source.ImageCanvasOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     source: ol.source.Vector,
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
 * @api
 */
olx.source.ImageVectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     hidpi: (boolean|undefined),
 *     serverType: (ol.source.wms.ServerType|string|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     params: Object.<string,*>,
 *     projection: ol.proj.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     url: (string|undefined)}}
 * @api
 */
olx.source.ImageWMSOptions;


/**
 * @typedef {{layer: string,
 *     minZoom: (number|undefined),
 *     maxZoom: (number|undefined),
 *     opaque: (boolean|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined)}}
 * @api
 */
olx.source.StamenOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     imageExtent: (ol.Extent),
 *     imageSize: (ol.Size|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     url: string}}
 * @api
 */
olx.source.ImageStaticOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     params: (Object.<string, *>|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.TileArcGISRestOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: string,
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.TileJSONOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     params: Object.<string,*>,
 *     crossOrigin: (null|string|undefined),
 *     gutter: (number|undefined),
 *     hidpi: (boolean|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     maxZoom: (number|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     serverType: (ol.source.wms.ServerType|string|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.TileWMSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     features: (Array.<ol.Feature>|undefined),
 *     format: (ol.format.Feature|undefined),
 *     loader: (ol.FeatureLoader|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     strategy: (ol.LoadingStrategy|undefined),
 *     url: (string|undefined)}}
 * @api
 */
olx.source.VectorOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (string|null|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     tileGrid: ol.tilegrid.WMTS,
 *     projection: ol.proj.ProjectionLike,
 *     requestEncoding: (ol.source.WMTSRequestEncoding|string|undefined),
 *     layer: string,
 *     style: string,
 *     tilePixelRatio: (number|undefined),
 *     version: (string|undefined),
 *     format: (string|undefined),
 *     matrixSet: string,
 *     dimensions: (Object|undefined),
 *     url: (string|undefined),
 *     maxZoom: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     urls: (Array.<string>|undefined),
 *     tileClass: (function(new: ol.ImageTile, ol.TileCoord,
 *                          ol.TileState, string, ?string,
 *                          ol.TileLoadFunctionType)|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.WMTSOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     projection: ol.proj.ProjectionLike,
 *     maxZoom: (number|undefined),
 *     minZoom: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     tilePixelRatio: (number|undefined),
 *     tileSize: (number|ol.Size|undefined),
 *     tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.source.XYZOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
 *     crossOrigin: (null|string|undefined),
 *     logo: (string|olx.LogoOptions|undefined),
 *     url: !string,
 *     tierSizeCalculation: (string|undefined),
 *     size: ol.Size}}
 * @api
 */
olx.source.ZoomifyOptions;


/**
 * @typedef {{fill: (ol.style.Fill|undefined),
 *     radius: number,
 *     snapToPixel: (boolean|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     atlasManager: (ol.style.AtlasManager|undefined)}}
 * @api
 */
olx.style.CircleOptions;


/**
 * @typedef {{color: (ol.Color|string|undefined)}}
 * @api
 */
olx.style.FillOptions;


/**
 * @typedef {{anchor: (Array.<number>|undefined),
 *     anchorOrigin: (ol.style.IconOrigin|undefined),
 *     anchorXUnits: (ol.style.IconAnchorUnits|undefined),
 *     anchorYUnits: (ol.style.IconAnchorUnits|undefined),
 *     crossOrigin: (null|string|undefined),
 *     img: (Image|undefined),
 *     offset: (Array.<number>|undefined),
 *     offsetOrigin: (ol.style.IconOrigin|undefined),
 *     opacity: (number|undefined),
 *     scale: (number|undefined),
 *     snapToPixel: (boolean|undefined),
 *     rotateWithView: (boolean|undefined),
 *     rotation: (number|undefined),
 *     size: (ol.Size|undefined),
 *     imgSize: (ol.Size|undefined),
 *     src: (string|undefined)}}
 * @api
 */
olx.style.IconOptions;


/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {{fill: (ol.style.Fill|undefined),
 *     points: number,
 *     radius: (number|undefined),
 *     radius1: (number|undefined),
 *     radius2: (number|undefined),
 *     angle: (number|undefined),
 *     snapToPixel: (boolean|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     rotation: (number|undefined),
 *     atlasManager: (ol.style.AtlasManager|undefined)}}
 * @api
 */
olx.style.RegularShapeOptions;


/**
 * @typedef {{color: (ol.Color|string|undefined),
 *     lineCap: (string|undefined),
 *     lineJoin: (string|undefined),
 *     lineDash: (Array.<number>|undefined),
 *     miterLimit: (number|undefined),
 *     width: (number|undefined)}}
 * @api
 */
olx.style.StrokeOptions;


/**
 * @typedef {{font: (string|undefined),
 *     offsetX: (number|undefined),
 *     offsetY: (number|undefined),
 *     scale: (number|undefined),
 *     rotation: (number|undefined),
 *     text: (string|undefined),
 *     textAlign: (string|undefined),
 *     textBaseline: (string|undefined),
 *     fill: (ol.style.Fill|undefined),
 *     stroke: (ol.style.Stroke|undefined)}}
 * @api
 */
olx.style.TextOptions;


/**
 * @typedef {{geometry: (undefined|string|ol.geom.Geometry|ol.style.GeometryFunction),
 *     fill: (ol.style.Fill|undefined),
 *     image: (ol.style.Image|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     text: (ol.style.Text|undefined),
 *     zIndex: (number|undefined)}}
 * @api
 */
olx.style.StyleOptions;


/**
 * @typedef {{minZoom: (number|undefined),
 *     origin: (ol.Coordinate|undefined),
 *     origins: (Array.<ol.Coordinate>|undefined),
 *     resolutions: !Array.<number>,
 *     tileSize: (number|ol.Size|undefined),
 *     tileSizes: (Array.<number|ol.Size>|undefined),
 *     widths: (Array.<number>|undefined)}}
 * @api
 */
olx.tilegrid.TileGridOptions;


/**
 * @typedef {{origin: (ol.Coordinate|undefined),
 *     origins: (Array.<ol.Coordinate>|undefined),
 *     resolutions: !Array.<number>,
 *     matrixIds: !Array.<string>,
 *     tileSize: (number|ol.Size|undefined),
 *     tileSizes: (Array.<number|ol.Size>|undefined),
 *     widths: (Array.<number>|undefined)}}
 * @api
 */
olx.tilegrid.WMTSOptions;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     maxZoom: (number|undefined),
 *     minZoom: (number|undefined),
 *     tileSize: (number|ol.Size|undefined)}}
 * @api
 */
olx.tilegrid.XYZOptions;


/**
 * @typedef {{resolutions: !Array.<number>}}
 * @api
 */
olx.tilegrid.ZoomifyOptions;


/**
 * @typedef {{padding: !Array.<number>,
 *     constrainResolution: (boolean|undefined),
 *     nearest: (boolean|undefined),
 *     maxZoom: (number|undefined),
 *     minResolution: (number|undefined)}}
 * @api
 */
olx.view.FitGeometryOptions;


/**
 * @typedef {{animate: boolean,
 *     attributions: Object.<string, ol.Attribution>,
 *     coordinateToPixelMatrix: ol.vec.Mat4.Number,
 *     extent: (null|ol.Extent),
 *     focus: ol.Coordinate,
 *     index: number,
 *     layerStates: Object.<number, ol.layer.LayerState>,
 *     layerStatesArray: Array.<ol.layer.LayerState>,
 *     logos: Object.<string, string>,
 *     pixelRatio: number,
 *     pixelToCoordinateMatrix: ol.vec.Mat4.Number,
 *     postRenderFunctions: Array.<ol.PostRenderFunction>,
 *     size: ol.Size,
 *     skippedFeatureUids: Object.<string, boolean>,
 *     tileQueue: ol.TileQueue,
 *     time: number,
 *     usedTiles: Object.<string, Object.<string, ol.TileRange>>,
 *     viewState: olx.ViewState,
 *     viewHints: Array.<number>,
 *     wantedTiles: Object.<string, Object.<string, boolean>>}}
 * @api
 */
olx.FrameState;


/**
 * @typedef {{center: ol.Coordinate,
 *     projection: ol.proj.Projection,
 *     resolution: number,
 *     rotation: number}}
 * @api
 */
olx.ViewState;


/**
 * @typedef {{initialSize: (number|undefined),
 *     maxSize: (number|undefined),
 *     space: (number|undefined)}}
 * @api
 */
olx.style.AtlasManagerOptions;
