(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"991a":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("ac6a");var components=__webpack_require__("f1ea"),Form_Generatorvue_type_script_lang_js_={name:"ui-form-generator",components:{UiField:components.UiField,UiSelect:components.UiSelect},props:{schema:{type:Object,required:!0},value:{required:!1,default:null}},data:function data(){return{innerValue:{}}},watch:{value:{immediate:!0,handler:function handler(newValue){var _this=this;this.innerValue=JSON.parse(JSON.stringify(newValue)),this.innerValue||(this.innerValue={},this.schema.fields.forEach((function(field){return _this.$set(_this.innerValue,field.model,null)})))}}}},componentNormalizer=__webpack_require__("2877"),component=Object(componentNormalizer.a)(Form_Generatorvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"ui-form-generator"},[_c("div",_vm._l(_vm.schema.fields,(function(field,i){return _c("ui-field",{key:i,attrs:{label:field.label}},["select"==field.type?[_c("ui-select",{attrs:{options:field.options},on:{input:function($event){return _vm.$emit("input",_vm.innerValue)}},model:{value:_vm.innerValue[field.model],callback:function($$v){_vm.$set(_vm.innerValue,field.model,$$v)},expression:"innerValue[field.model]"}})]:["checkbox"===field.type?_c("input",_vm._b({directives:[{name:"model",rawName:"v-model",value:_vm.innerValue[field.model],expression:"innerValue[field.model]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.innerValue[field.model])?_vm._i(_vm.innerValue[field.model],null)>-1:_vm.innerValue[field.model]},on:{input:function($event){return _vm.$emit("input",_vm.innerValue)},change:function($event){var $$a=_vm.innerValue[field.model],$$el=$event.target,$$c=!!$$el.checked;if(Array.isArray($$a)){var $$i=_vm._i($$a,null);$$el.checked?$$i<0&&_vm.$set(_vm.innerValue,field.model,$$a.concat([null])):$$i>-1&&_vm.$set(_vm.innerValue,field.model,$$a.slice(0,$$i).concat($$a.slice($$i+1)))}else _vm.$set(_vm.innerValue,field.model,$$c)}}},"input",field.props,!1)):"radio"===field.type?_c("input",_vm._b({directives:[{name:"model",rawName:"v-model",value:_vm.innerValue[field.model],expression:"innerValue[field.model]"}],attrs:{type:"radio"},domProps:{checked:_vm._q(_vm.innerValue[field.model],null)},on:{input:function($event){return _vm.$emit("input",_vm.innerValue)},change:function($event){return _vm.$set(_vm.innerValue,field.model,null)}}},"input",field.props,!1)):_c("input",_vm._b({directives:[{name:"model",rawName:"v-model",value:_vm.innerValue[field.model],expression:"innerValue[field.model]"}],attrs:{type:field.type},domProps:{value:_vm.innerValue[field.model]},on:{input:[function($event){$event.target.composing||_vm.$set(_vm.innerValue,field.model,$event.target.value)},function($event){return _vm.$emit("input",_vm.innerValue)}]}},"input",field.props,!1))]],2)})),1)])}),[],!1,null,null,null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=48.d678caf8da5aebf987c8.bundle.js.map