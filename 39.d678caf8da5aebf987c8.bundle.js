(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ca2e:function(module,__webpack_exports__,__webpack_require__){"use strict";function open(url,windowName,windowFeatures,messageHandler,closeHandler){var windowHandleMessage=function windowHandleMessage(event){event&&event.data&&event.data.popup&&messageHandler(event.data.popup)};window.addEventListener("message",windowHandleMessage);var ref=window.open(url,windowName,windowFeatures);if(null!=ref){var loop,timer=setInterval((function(){ref.closed&&(clearInterval(timer),clearInterval(loop),window.removeEventListener("message",windowHandleMessage),"function"==typeof closeHandler&&closeHandler())}),500);return ref.addEventListener("exit",(function(){clearInterval(loop),"function"==typeof closeHandler&&closeHandler()})),ref.addEventListener("loadstop",(function(){clearInterval(timer),ref.executeScript({code:"if (!window.opener) { window.opener = {postMessage: function(msg) { localStorage.setItem('phiInternalMessage', JSON.stringify(msg)); }};  window.close = function() { localStorage.setItem('phiDoClose', true); }  }"}),ref.executeScript({code:"localStorage.setItem('phiInternalMessage', '');"}),ref.executeScript({code:"localStorage.setItem('phiDoClose', '');"}),loop=setInterval((function(){ref.executeScript({code:"localStorage.getItem('phiInternalMessage')"},(function(values){if(values[0]){ref.executeScript({code:"localStorage.setItem('phiInternalMessage', '');"});try{var msg=JSON.parse(values[0]);msg&&msg.popup&&messageHandler(msg.popup)}catch(err){}}})),ref.executeScript({code:"localStorage.getItem('phiDoClose')"},(function(values){values[0]&&(ref.executeScript({code:"localStorage.setItem('phiDoClose', '');"}),ref.close())}))}),200)})),ref}}function submit(form,windowFeatures,messageHandler,closeHandler){var windowName="formWindow"+(new Date).getTime(),ref=open("",windowName,windowFeatures,messageHandler,closeHandler);return form.setAttribute("target",windowName),form.submit(),ref}__webpack_require__.d(__webpack_exports__,"a",(function(){return open})),__webpack_require__.d(__webpack_exports__,"b",(function(){return submit}))},dff2:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"settingsSchema",(function(){return settingsSchema}));var _helpers_popupWindow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ca2e"),settingsSchema={fields:[{type:"text",label:"URL",model:"url"},{type:"text",label:"Usuario",model:"usuario"}]};__webpack_exports__.default=function(clientData){return new Promise((function(resolve,reject){var paymentPopup,form=function createForm(clientData){var form=document.createElement("form");return form.setAttribute("method","post"),form.setAttribute("action",clientData.url),["usuario","factura","valor","descripcionFactura","nombreComprador","apellidoComprador","tipoDocumentoComprador","documentoComprador","correoComprador","telefonoComprador","paisComprador","ciudadComprador","direccionComprador","celularComprador"].forEach((function(fieldName){var hiddenField=document.createElement("input");hiddenField.setAttribute("type","hidden"),hiddenField.setAttribute("name",fieldName),hiddenField.setAttribute("value",clientData[fieldName]),form.appendChild(hiddenField)})),document.body.appendChild(form),form}(clientData),isDone=!1;paymentPopup=_helpers_popupWindow_js__WEBPACK_IMPORTED_MODULE_0__.b(form,"height=700,width=800,resizable=yes,toolbar=no,status=yes",(function onMessage(data){isDone=!0,paymentPopup.close(),data&&void 0!==data.ok&&data.ok?resolve(data):reject(data)}),(function onClose(){isDone||reject()}))}))}}}]);
//# sourceMappingURL=39.d678caf8da5aebf987c8.bundle.js.map