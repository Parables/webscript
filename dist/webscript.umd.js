!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).webscript={})}(this,function(e){function r(){return(r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function t(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return n(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,void 0):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function o(e){for(var r,n=e[0],o=e.slice(1),i=[],a=t(n.entries());!(r=a()).done;){var c=r.value,u=c[0],l=c[1];""!==l&&i.push(l);var f=o[u];void 0!==f&&i.push(f)}return i}var i=new RegExp("·","g");function a(e,n){return function t(a,c){var u=new Proxy(function(){},{apply:function(r,t,i){if("function"==typeof r.__webscript_enhancer){var c=r.__webscript_enhancer;delete r.__webscript_enhancer;var l=c(u,i);return r.__webscript_enhancer=c,l}var f,p=i[0];Array.isArray(p)&&Object.isFrozen(p)&&(i=o(i)),Array.isArray(a.children)&&((f=a.children).push.apply(f,i),i=a.children,delete a.children);for(var s=0;s<i.length;s++){var y=i[s];"function"==typeof y&&!0===y.__is_webscript_element&&(i[s]=y())}return e.apply(void 0,[n,a].concat(i))},get:function(e,n){if("string"==typeof n){var u=function(){var e,n=[].slice.call(arguments),i=n[0];if(void 0===i){if("props"===c&&"[object Object]"===Object.prototype.toString.call(i))return t({},null);var u=r({},a);return delete u[c],t(u,null)}if(Array.isArray(i)&&Object.isFrozen(i))i=o(n).join("");else if(n.length>1)i=n;else if("props"===c&&"[object Object]"===Object.prototype.toString.call(i))return t(r({},a,i),null);var l=r({},a,((e={})[c]=i,e));return t(l,null)};return"__is_webscript_element"===n||("__webscript_enhancer"===n?e[n]:(-1!==n.indexOf("·")&&(n=n.replace(i,"-")),u.value="props"===n?a:a[n],c=n,u))}}});return u}({},null)}e.default=function(e,r){if(void 0===r&&(r=[]),"function"!=typeof e)throw Error("elementConstructor argument must be present and it must be a function.");if(r.length>0){for(var n,o=[],i=t(r);!(n=i()).done;)o.push(a(e,n.value));return o}return new Proxy(function(){},{get:function(r,n){var t=r[n];return void 0!==t?t:(r[n]=a(e,n),r[n])}})},e.enhanceBuilder=function(e,r){return e.__webscript_enhancer=r,e}});
//# sourceMappingURL=webscript.umd.js.map
