(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"78ac":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("20d6");var esm_typeof=__webpack_require__("7618"),ViewerGrid=__webpack_require__("0193"),FileUploader=__webpack_require__("a230"),File_FilePickervue_type_script_lang_js_={name:"filesystem-file-picker",components:{ViewerGrid:ViewerGrid.a,FileUploader:FileUploader.a},props:{value:{type:Array,required:!1,default:function _default(){return[]}},endpoint:{type:String,required:!1,default:null}},data:function data(){return{files:[]}},watch:{value:{immediate:!0,handler:function handler(incomingFiles){this.files=incomingFiles.concat()}}},methods:{addFiles:function addFiles(files){Array.isArray(files)&&files.length&&(this.files=this.files.concat(files),this.$emit("input",JSON.parse(JSON.stringify(this.files))))},removeFile:function removeFile(file){var index=file;"object"==Object(esm_typeof.a)(file)&&(index=this.files.findIndex((function(f){return f.endpoint==file.endpoint}))),index>=0&&(this.files.splice(index,1),this.$emit("input",JSON.parse(JSON.stringify(this.files))))}}},componentNormalizer=__webpack_require__("2877"),component=Object(componentNormalizer.a)(File_FilePickervue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("viewer-grid",{staticClass:"filesystem-file-picker",attrs:{files:_vm.files},on:{"delete-file":_vm.removeFile},scopedSlots:_vm._u([_vm.endpoint?{key:"uploader",fn:function(){return[_c("file-uploader",{attrs:{path:_vm.endpoint},on:{success:_vm.addFiles}})]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);__webpack_exports__.default=component.exports}}]);
//# sourceMappingURL=45.d678caf8da5aebf987c8.bundle.js.map