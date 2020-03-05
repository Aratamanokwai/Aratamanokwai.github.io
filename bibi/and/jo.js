/*!
 *                                                                                                                          (邃 )
 *  # Jo | Helper for Embedding Bibi-Frames in Webpage.
 *
 *  * Copyright (c) Satoru MATSUSHIMA - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Licensed under the MIT License. - https://opensource.org/licenses/mit-license.php
 *
 */!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([,,,function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a={};function s(e,t,n){for(var i=0;i<t.length;i++){var o={css:t[i][1],media:t[i][2],sourceMap:t[i][3]};a[e][i]?a[e][i](o):a[e].push(p(o,n))}}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function b(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function p(e,t){var n,i,o;if(t.singleton){var r=m++;n=f||(f=c(t)),i=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else n=c(t),i=b.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o()),e=n.base?e+n.base:e,t=t||[],a[e]||(a[e]=[]),s(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){a[e]||(a[e]=[]),s(e,t,n);for(var i=t.length;i<a[e].length;i++)a[e][i]();a[e].length=t.length,0===a[e].length&&delete a[e]}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i=0;i<e.length;i++){var o=[].concat(e[i]);n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o)}},t}},,,,,,,,,function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";if(!window["bibi:jo"]){Array.prototype.includes||(Array.prototype.includes=function(e){for(var t=this.length,n=0;n<t;n++)if(this[n]==e)return!0;return!1});var e=window["bibi:jo"]={version:"1.0.1",CSS:n(14),Status:"",Bibis:[],Anchors:[],Holders:[],Frames:[],TrustworthyOrigins:[location.origin],Loaded:0};e.Path=function(){if(document.currentScript)return document.currentScript.src;var e=document.getElementsByTagName("script");return e[e.length-1].src}(),e.embed=function(){e.Status="Started";for(var t=document.body.querySelectorAll("a[data-bibi]"),n=function(n,i){if(!t[i].getAttribute("href")||t[i].Bibi)return"continue";var o={Index:i,Number:i+1},r=o.Anchor=t[i];/ bibi-anchor /.test(" "+r.className+" ")||(r.className="bibi-anchor"+(r.className?" "+r.className:"")),r.origin!=location.origin&&e.TrustworthyOrigins.push(r.origin),r.addEventListener("bibi:loaded",(function(e){console.log("Bibi: Loaded. - #"+e.detail.Number+": "+e.detail.Anchor.href)}),!1),e.Anchors.push(r);var a=r.getAttribute("data-bibi-class"),s=r.getAttribute("data-bibi-id"),c=r.getAttribute("data-bibi-style"),d=o.Holder=e.create("span",{className:"bibi-holder"+(a?" "+a:""),id:s||"bibi-holder-"+(i+1),title:(r.innerText?r.innerText+" ":"")+"(powered by Bibi)"});c&&d.setAttribute("style",c),e.Holders.push(d);var u=new e.Fragments;u.add("parent-title",document.title),u.add("parent-uri",location.href),u.add("parent-origin",location.origin),u.add("parent-jo-path",e.Path),u.add("parent-bibi-label",r.innerHTML),u.add("parent-holder-id",d.id),["to","nav","autostart","autostart-embedded","fix-reader-view-mode","preprocess-html-always","reader-view-mode","single-page-always","start-in-new-window","start-embedded-in-new-window","use-arrows","use-font-size-changer","use-full-height","use-keys","use-loupe","use-menubar","use-nombre"].forEach((function(e){var t=r.getAttribute("data-bibi-"+e);if(t){var n;switch(e){case"to":n=/^[1-9][\d\-\.]*$/;break;case"nav":n=/^[1-9]\d*$/;break;case"reader-view-mode":n=/^(horizontal|vertical|paged)$/;break;default:n=/^(true|false|yes|no|mobile|desktop)?$/}/^(autostart|start-in-new-window)$/.test(e)&&(e=e.replace("start","start-embedded")),n.test(t)&&u.add(e,t)}}));var l=r.getAttribute("href"),b=o.Frame=d.appendChild(e.create("iframe",{className:"bibi-frame",frameborder:"0",scrolling:"auto",allowfullscreen:"true",src:l+(/#/.test(l)?",":"#")+u.make()}));b.addEventListener("load",(function(){e.Loaded++,b.Bibi.Anchor.dispatchEvent(new CustomEvent("bibi:loaded",{detail:b.Bibi})),"TimedOut"!=e.Status&&e.Loaded==e.Bibis.length&&(e.Status="Loaded",document.dispatchEvent(new CustomEvent("bibi:loaded",{detail:e})))}),!1),e.Frames.push(b),e.Bibis.push(o),b.Bibi=d.Bibi=r.Bibi=o},i=t.length,o=0;o<i;o++)n(0,o);for(var r=function(t,n){if(e.Bibis[n].Embedded)return"continue";var i=e.Bibis[n];i.move=function(e){"number"==typeof Target&&i.Frame.contentWindow.postMessage("{'bibi:commands:move':'".concat(e,"'}"),i.Anchor.origin)},i.focus=function(e){"string"!=typeof e&&"number"!=typeof e||i.Frame.contentWindow.postMessage("{'bibi:commands:focus':'".concat(e,"'}"),i.Anchor.origin)},i.changeView=function(e){"string"==typeof Target&&i.Frame.contentWindow.postMessage("{'bibi:commands:change-view':'".concat(e,"'}"),i.Anchor.origin)},i.togglePanel=function(){i.Frame.contentWindow.postMessage("{'bibi:command:toggle-panel':''}",i.Anchor.origin)},i.Anchor.style.display="none",i.Anchor.parentNode.insertBefore(i.Holder,i.Anchor),i.Anchor.dispatchEvent(new CustomEvent("bibi:readied",{detail:i}))},a=e.Bibis.length,s=0;s<a;s++)r(0,s);return setTimeout((function(){"Loaded"!=e.Status&&(e.Status="TimedOut",document.dispatchEvent(new CustomEvent("bibi:timed-out",{detail:e})))}),12e3),e.Status="Readied",document.dispatchEvent(new CustomEvent("bibi:readied",{detail:e})),e.Bibis},e.encode=function(e){return encodeURIComponent(e).replace("(","_BibiKakkoOpen_").replace(")","_BibiKakkoClose_")},e.create=function(e,t){var n=document.createElement(e);for(var i in t)n[i]=t[i];return n},e.Fragments=function(){return this.FragmentKeys=[],this.FragmentKeysAndValues={},this.add=function(e,t){this.FragmentKeys.includes(e)||this.FragmentKeys.push(e),this.FragmentKeysAndValues[e]=t},this.make=function(){if(!this.FragmentKeys.length)return"";for(var t=[],n=this.FragmentKeys.length,i=0;i<n;i++)t.push("".concat(this.FragmentKeys[i],":").concat(e.encode(this.FragmentKeysAndValues[this.FragmentKeys[i]])));return"jo(".concat(t.join(","),")")},this},(!window.CustomEvent||"function"!=typeof window.CustomEvent&&-1===window.CustomEvent.toString().indexOf("CustomEventConstructor"))&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},window.CustomEvent.prototype=window.Event.prototype),window.addEventListener("message",(function(t){if(t&&t.data)for(var n=e.TrustworthyOrigins.length,o=0;o<n;o++)if(t.origin==e.TrustworthyOrigins[o]){var r=t.data;try{if("object"!=i(r=JSON.parse(r))||!r)return!1;for(var a in r)/^bibi:commands:/.test(a)&&document.dispatchEvent(new CustomEvent(a,{detail:r[a]}));return!0}catch(e){}return!1}}),!1),document.addEventListener("bibi:readied",(function(e){return console.log("Bibi: Readied. - ".concat(e.detail.Bibis.length," Bibi").concat(e.detail.Bibis.length>1?"s":"","."))})),document.addEventListener("bibi:loaded",(function(e){return console.log("Bibi: Loaded. - ".concat(e.detail.Bibis.length," Bibi").concat(e.detail.Bibis.length>1?"s":"","."))})),document.addEventListener("bibi:timed-out",(function(e){return console.log("Bibi: Timed Out.")})),document.addEventListener("DOMContentLoaded",e.embed,!1)}}()},function(e,t,n){var i=n(3),o=n(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},a=(i(e.i,o,r),o.locals?o.locals:{});e.exports=a},function(e,t,n){(t=n(4)(!1)).push([e.i,"span.bibi-holder,span.bibi-holder>iframe.bibi-frame{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;margin:0;padding:0;border:0 transparent;vertical-align:top;line-height:1;text-decoration:none;background:transparent}span.bibi-holder{max-width:100%;max-height:100%}span.bibi-holder>iframe.bibi-frame{border:1px solid #d8d8d8;width:100%;height:100%}",""]),e.exports=t}]);