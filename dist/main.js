(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  background: #f5f3ed;\r\n}\r\n\r\nul li {\r\n  list-style: none;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nh5,\r\np,\r\ninput {\r\n  font-size: 18px;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 65%;\r\n  margin-top: 30px;\r\n}\r\n\r\n.container .title,\r\n.container .add,\r\n.container ul li {\r\n  width: 100%;\r\n  height: 55px;\r\n  border: 1px solid #d3d3d3;\r\n  box-shadow: 1px 1px 15px #d3d3d3;\r\n  margin-bottom: 2px;\r\n  padding: 5px 15px;\r\n  background: #fff;\r\n}\r\n\r\n.container ul {\r\n  width: 100%;\r\n}\r\n\r\n.container ul li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.container ul li div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.container ul li input {\r\n  margin-right: 15px;\r\n  border: 2px solid #a8a7a2;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.container ul li img {\r\n  transform: rotate(90deg);\r\n  opacity: 0.5;\r\n  cursor: all-scroll;\r\n}\r\n\r\n.container .title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.container .title img {\r\n  height: 27px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.container .add form {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.container .add form input {\r\n  border: none;\r\n  flex-grow: 1;\r\n  font-style: italic;\r\n}\r\n\r\n.container .add form button img {\r\n  height: 18px;\r\n}\r\n\r\n.container .add form button {\r\n  border: none;\r\n}\r\n\r\n#clear {\r\n  background: #f5f3ed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 55px;\r\n  border: 1px solid #d3d3d3;\r\n  box-shadow: 1px 1px 15px #d3d3d3;\r\n  margin-bottom: 2px;\r\n  padding: 5px 15px;\r\n}\r\n\r\n#clear button {\r\n  color: #a8a7a2;\r\n  border: none;\r\n  font-style: italic;\r\n  background: #f5f3ed;\r\n  font-size: 18px;\r\n}\r\n\r\n#clear button:hover {\r\n  font-size: 21px;\r\n  text-decoration: underline;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),d=e(216),l=e.n(d),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(){return null}storeItems(n){localStorage.setItem("items",JSON.stringify(n))}fetchItems(){return JSON.parse(localStorage.getItem("items"))||[]}addItem(n,r=!1,e=null){if(n){const r={description:"",completed:!1,index:0},e=this.constructor.fetchItems(),t=e.length;r.description=n,r.index=t+1,e.push(r),storage.storeItems(e),setTimeout("location.reload(true);",0)}}}(()=>{const n=h.fetchItems();n.sort(((n,r)=>n.index-r.index)),n.forEach((n=>{var r;document.querySelector(".todos").innerHTML+=`\n      <li>\n        <div>\n          <input type="checkbox" value="${n.index}" ${r=n,!0===r.completed?"Checked":null}>\n          <p>${n.description}</p>\n        </div>\n        <img src="http://nduatikagiri.co.ke/icons/more.png" alt="">\n      </li>\n    `}))})(),document.getElementById("form").addEventListener("submit",(n=>{n.preventDefault();let r=document.getElementById("description").value;""!==r.trim()&&(h.addItems(r),r="")}))})()})();