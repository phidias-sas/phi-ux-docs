(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mixins_MapLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/MapLine.js */ \"./packages/ui/components/UiMap/mixins/MapLine.js\");\n/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-google-maps */ \"./node_modules/vue2-google-maps/dist/main.js\");\n/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'google-line',\n  render: function render() {\n    return null;\n  },\n  mixins: [_mixins_MapLine_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n  data: function data() {\n    return {\n      features: null,\n      dataLayer: null\n    };\n  },\n  mounted: function mounted() {\n    this.initialize();\n  },\n  watch: {\n    coordinates: function coordinates() {\n      var _this = this;\n\n      this.features.forEach(function (f) {\n        return _this.dataLayer.remove(f);\n      });\n      this.features = this.dataLayer.addGeoJson(this.geoJson);\n    },\n    color: function color() {\n      this.setStyles();\n    },\n    width: function width() {\n      this.setStyles();\n    }\n  },\n  computed: {\n    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_3__[\"gmapApi\"]\n  },\n  methods: {\n    initialize: function initialize() {\n      var _this2 = this;\n\n      var mapPromise = this.$parent.$mapPromise ? this.$parent.$mapPromise : this.$parent.$parent.$mapPromise ? this.$parent.$parent.$mapPromise : null;\n\n      if (!mapPromise) {\n        return;\n      }\n\n      mapPromise.then(function (map) {\n        _this2.dataLayer = new _this2.google.maps.Data({\n          map: map\n        });\n        _this2.features = _this2.dataLayer.addGeoJson(_this2.geoJson);\n\n        _this2.setStyles();\n      });\n    },\n    setStyles: function setStyles() {\n      var _this3 = this;\n\n      this.dataLayer.setStyle(function () {\n        return {\n          strokeColor: _this3.color,\n          strokeWeight: _this3.width\n        };\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/MapLine.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

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

/***/ "./packages/ui/components/UiMap/providers/Google/MapLine.vue":
/*!*******************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Google/MapLine.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapLine.vue?vue&type=script&lang=js& */ \"./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/ui/components/UiMap/providers/Google/MapLine.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/MapLine.vue?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MapLine.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/MapLine.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/MapLine.vue?");

/***/ })

}]);