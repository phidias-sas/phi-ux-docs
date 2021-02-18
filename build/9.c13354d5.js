(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_MapLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/MapLine.js */ \"./packages/ui/components/UiMap/mixins/MapLine.js\");\n\nvar someCounter = 1;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'mapbox-line',\n  render: function render() {\n    return null;\n  },\n  mixins: [_mixins_MapLine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  inject: ['getMap'],\n  data: function data() {\n    return {\n      sourceName: null,\n      layerName: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$nextTick(function () {\n      return _this.initialize();\n    });\n  },\n  watch: {\n    coordinates: function coordinates() {\n      var map = this.getMap();\n\n      if (!this.sourceName || !map) {\n        return;\n      }\n\n      var source = map.getSource(this.sourceName);\n\n      if (!source) {\n        return;\n      }\n\n      source.setData(this.geoJson);\n    },\n    color: function color() {\n      if (!this.layerName) {\n        return;\n      }\n\n      this.getMap().setPaintProperty(this.layerName, 'line-color', this.color);\n    },\n    width: function width() {\n      if (!this.layerName) {\n        return;\n      }\n\n      this.getMap().setPaintProperty(this.layerName, 'line-width', this.width);\n    }\n  },\n  methods: {\n    initialize: function initialize() {\n      var _this2 = this;\n\n      var map = this.getMap();\n\n      if (!map) {\n        console.warn('no map :(');\n        return;\n      }\n\n      this.sourceName = \"line\".concat(someCounter++);\n      this.layerName = \"\".concat(this.sourceName, \"_layer\");\n      map.on('load', function () {\n        map.addSource(_this2.sourceName, {\n          type: 'geojson',\n          data: _this2.geoJson\n        });\n        map.addLayer({\n          id: _this2.layerName,\n          source: _this2.sourceName,\n          type: 'line',\n          paint: {\n            'line-color': _this2.color,\n            'line-width': _this2.width,\n            'line-opacity': 1\n          }\n        });\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./packages/ui/components/UiMap/mixins/MapLine.js":
/*!********************************************************!*\
  !*** ./packages/ui/components/UiMap/mixins/MapLine.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    coordinates: {\n      required: true\n    },\n    color: {\n      required: false,\n      default: 'rgba(0,0,255, 0.2)'\n    },\n    width: {\n      required: false,\n      default: 5\n    }\n  },\n  computed: {\n    geoJson: function geoJson() {\n      return {\n        \"type\": \"Feature\",\n        \"geometry\": {\n          \"type\": \"LineString\",\n          \"coordinates\": this.coordinates\n        }\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/mixins/MapLine.js?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue":
/*!*******************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapLine.vue?vue&type=script&lang=js& */ \"./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/ui/components/UiMap/providers/Mapbox/MapLine.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLine.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapLine.vue?");

/***/ })

}]);