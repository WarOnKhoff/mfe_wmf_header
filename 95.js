/*! For license information please see 95.js.LICENSE.txt */
"use strict";(self.webpackChunkheader=self.webpackChunkheader||[]).push([[95],{95:(n,e,t)=>{function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.r(e),t.d(e,{default:()=>k});var o=t(416),i=t(379),a=t.n(i),c=t(795),l=t.n(c),s=t(569),u=t.n(s),d=t(565),p=t.n(d),f=t(216),h=t.n(f),m=t(589),g=t.n(m),y=t(383),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=h(),a()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var b=t(699),x=t(893),_=function(n){return"light"===n?"https://img.icons8.com/ios-filled/50/null/moon-symbol.png":"https://img.icons8.com/material-outlined/48/null/sun--v3.png"},w=function(n){return"light"===n?"Dark":"Light"};const k=function(){var n,e,t=(n=(0,o.useState)(""),e=2,function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(n){s=!0,o=n}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(n,e)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[0],a=t[1],c=(0,b.useAppContext)(),l=c.toggleTheme,s=c.theme,u=c.addCity;return(0,x.jsxs)("div",{className:"header_container header_container_".concat(s," "),children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{className:"city_input city_input_".concat(s),placeholder:"City",value:i,onChange:function(n){return a(n.target.value)}}),(0,x.jsx)("button",{className:"default_button",onClick:function(){u(i),a("")},children:"Add City"})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("button",{className:"default_button toggle_btn",onClick:l,children:[(0,x.jsx)("img",{className:"toggle_btn_icon",src:_(s),alt:"moon icon"}),w(s)," theme"]})})]})}},383:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'.header_container {\n  width: 100%;\n  height: 15vh;\n  border-bottom: 2px solid #eee;\n  display: flex;\n  align-items: center;\n  padding: 10px 40px;\n  justify-content: space-between;\n}\n.header_container_light {\n  background-color: #FFF;\n  border-bottom: 2px solid #eee;\n}\n.header_container_dark {\n  background-color: #333;\n  border-bottom: 2px solid #000000;\n}\n\n.city_input {\nfont-family: inherit;\nwidth: 180px;\nborder: 0;\nborder-bottom: 2px solid #a8aeff;\noutline: 0;\nfont-size: 1.5rem;\ncolor: #333;\npadding: 7px 0;\nbackground: transparent;\ntransition: border-color 0.2s;\nmargin-right: 40px;\n}\n.city_input_dark {\ncolor: #FFF;\nborder-bottom: 2px solid #FFF;\n}\n.city_input_light {\ncolor: #333;\nborder-bottom: 2px solid #333;\n}\n\n\n.default_button {\nbackground-color: #eee;\nborder-radius: 8px;\nborder-width: 0;\ncolor: #333333;\ncursor: pointer;\ndisplay: inline-block;\nfont-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;\nfont-size: 14px;\nfont-weight: 500;\nline-height: 20px;\nlist-style: none;\nmargin: 0;\npadding: 10px 12px;\ntext-align: center;\ntransition: all 200ms;\nvertical-align: baseline;\nwhite-space: nowrap;\nuser-select: none;\n-webkit-user-select: none;\ntouch-action: manipulation;\nwidth: 150px;\n}\n\n.toggle_btn {\nheight: 60px;\ndisplay: flex;\nalign-items: center;\n}\n.toggle_btn {\nheight: 60px;\ndisplay: flex;\nalign-items: center;\nbackground-color: #eee;\n}\n.toggle_btn_icon {\nheight: 30px;\nwidth: 30px;\nmargin-right: 15px;\n\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},251:(n,e,t)=>{var r=t(416),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var r,l={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,r)&&!c.hasOwnProperty(r)&&(l[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===l[r]&&(l[r]=e[r]);return{$$typeof:o,type:n,key:s,ref:u,props:l,_owner:a.current}}e.jsx=l,e.jsxs=l},893:(n,e,t)=>{n.exports=t(251)},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],u=i[s]||0,d="".concat(s," ").concat(u);i[s]=u+1;var p=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=r(n,o),s=0;s<i.length;s++){var u=t(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);