(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"07ed":function(module,exports,__webpack_require__){},"4a9c":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("ac6a");var Tabs_Tabvue_type_script_lang_js_={name:"ui-tab",components:{PhiIcon:__webpack_require__("2d43").a},data:function data(){return{tabsParent:null}},props:{value:{required:!0,default:null},label:{type:String,required:!1},icon:{type:String,required:!1},badgeContent:{required:!1,default:""}},computed:{isSelectedTab:function isSelectedTab(){return null!==this.tabsParent&&this.value===this.tabsParent.value},isFixedTab:function isFixedTab(){return null!==this.tabsParent&&"fixed"===this.tabsParent.type},gIcon:function gIcon(){return"g:"+this.icon}},methods:{initialize:function initialize(){for(var parent=this.$parent;!parent.$el.classList.contains("ui-tabs");)parent=parent.$parent;this.tabsParent=parent,this.icon&&this.$el.style.setProperty("--element-height","72px")},selectTab:function selectTab(){var _this=this,select=!0;!this.tabsParent.allowReSelection&&this.isSelectedTab&&(select=!1);var tabIndex=0,currentIndex=0,newIndex=0;this.tabsParent.$slots.default.forEach((function(vnode){vnode.componentInstance&&(tabIndex+=1,vnode.elm.__vue__.value==_this.value?newIndex=tabIndex:vnode.elm.__vue__.value==_this.tabsParent.value&&(currentIndex=tabIndex))})),this.setAnimationDirection(newIndex-currentIndex),select&&this.tabsParent.$emit("tabClicked",this.value,this.$el)},setAnimationDirection:function setAnimationDirection(direction){direction<0?(this.$el.style.setProperty("--border-side","left"),this.$el.style.setProperty("--border-side-selected","right")):(this.$el.style.setProperty("--border-side","right"),this.$el.style.setProperty("--border-side-selected","left"))}},mounted:function mounted(){this.initialize()}},componentNormalizer=(__webpack_require__("ce8b"),__webpack_require__("2877")),component=Object(componentNormalizer.a)(Tabs_Tabvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"ui-tab",class:{flexible:_vm.isFixedTab}},[_c("div",{staticClass:"ui-tab-item",class:{selected:_vm.isSelectedTab},on:{click:_vm.selectTab}},[_vm.icon?_c("phi-icon",{attrs:{value:_vm.gIcon,size:"24"}}):_vm._e(),_vm.label?_c("label",{attrs:{badge:_vm.badgeContent}},[_vm._v(_vm._s(_vm.label))]):_vm._e()],1)])}),[],!1,null,null,null);__webpack_exports__.default=component.exports},ce8b:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("07ed");__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__).a}}]);
//# sourceMappingURL=34.d678caf8da5aebf987c8.bundle.js.map