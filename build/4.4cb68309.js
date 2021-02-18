(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_Map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/Map.js */ \"./packages/ui/components/UiMap/mixins/Map.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-google-maps */ \"./node_modules/vue2-google-maps/dist/main.js\");\n/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__, {\n  load: {\n    key: 'AIzaSyCpSKazmH7T7ArBkdcPiRYaYG_QKhj7rRM',\n    libraries: 'geometry'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'google-map',\n  mixins: [_mixins_Map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n  props: {\n    settings: {\n      required: false,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  computed: {\n    gCenter: function gCenter() {\n      return this.center ? {\n        lng: this.center[0],\n        lat: this.center[1]\n      } : {\n        lng: 0,\n        lat: 0\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/Map.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"424be988-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"424be988-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"gmap-map\",\n    {\n      staticStyle: { width: \"100%\", height: \"100%\", \"min-height\": \"600px\" },\n      attrs: { center: _vm.gCenter, zoom: _vm.zoom, settings: _vm.settings }\n    },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/Map.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22424be988-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./packages/ui/components/UiMap/mixins/Map.js":
/*!****************************************************!*\
  !*** ./packages/ui/components/UiMap/mixins/Map.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    /*\r\n    GeoJson coordinates array: [lng, lat]\r\n    */\n    center: {\n      type: Array,\n      required: false,\n      default: function _default() {\n        return [-3.8012663, 40.4284048];\n      }\n    },\n    zoom: {\n      required: false,\n      default: 15\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/mixins/Map.js?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Google/Map.vue":
/*!***************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Google/Map.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.vue?vue&type=template&id=62dea948& */ \"./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948&\");\n/* harmony import */ var _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.vue?vue&type=script&lang=js& */ \"./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/ui/components/UiMap/providers/Google/Map.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/Map.vue?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/Map.vue?");

/***/ }),

/***/ "./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948&":
/*!**********************************************************************************************!*\
  !*** ./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_424be988_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"424be988-vue-loader-template\"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Map.vue?vue&type=template&id=62dea948& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"424be988-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/ui/components/UiMap/providers/Google/Map.vue?vue&type=template&id=62dea948&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_424be988_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_424be988_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_template_id_62dea948___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./packages/ui/components/UiMap/providers/Google/Map.vue?");

/***/ })

}]);