(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_MapMarker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/MapMarker.js */ \"./packages/ui/components/UiMap/mixins/MapMarker.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'mapbox-marker',\n  render: function render() {\n    return null;\n  },\n  mixins: [_mixins_MapMarker_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  inject: ['getMap', 'mapboxgl'],\n  data: function data() {\n    return {\n      marker: null\n    };\n  },\n  watch: {\n    coordinates: {\n      deep: true,\n      handler: function handler(newValue) {\n        this.marker.setLngLat(newValue);\n      }\n    },\n    icon: function icon() {\n      this.buildMarker();\n    }\n  },\n  methods: {\n    initialize: function initialize() {\n      this.buildMarker();\n    },\n    buildMarker: function buildMarker() {\n      if (this.marker) {\n        this.marker.remove();\n      }\n\n      var markerElement = null;\n\n      if (this.icon) {\n        markerElement = document.createElement('img');\n        markerElement.src = this.icon;\n      }\n\n      this.marker = new this.mapboxgl.Marker(markerElement).setLngLat(this.coordinates).addTo(this.getMap());\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.$nextTick(function () {\n      return _this.initialize();\n    });\n  },\n  destroyed: function destroyed() {\n    if (this.marker) {\n      this.marker.remove();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./packages/ui/components/UiMap/mixins/MapMarker.js":
/*!**********************************************************!*\
  !*** ./packages/ui/components/UiMap/mixins/MapMarker.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    icon: {\n      required: false,\n      default: null\n    },\n\n    /*\r\n    GeoJson coordinates array: [lng, lat]\r\n    */\n    coordinates: {\n      type: Array,\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/mixins/MapMarker.js?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue":
/*!*********************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapMarker.vue?vue&type=script&lang=js& */ \"./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _MapMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapMarker.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapMarker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Mapbox/MapMarker.vue?");

/***/ })

}]);