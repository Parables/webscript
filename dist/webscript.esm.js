function r(){return(r=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function t(r,t){var n;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,void 0):void 0}}(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var o=0;return function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=r[Symbol.iterator]()).next.bind(n)}function n(r){for(var e,n=r[0],o=r.slice(1),i=[],a=t(n.entries());!(e=a()).done;){var c=e.value,u=c[0],l=c[1];""!==l&&i.push(l);var f=o[u];void 0!==f&&i.push(f)}return i}var o=new RegExp("·","g"),i=function(r,e){return r.__webscript_enhancer=e,r};function a(e,t){return function i(a,c){var u=new Proxy(function(){},{apply:function(r,o,i){if("function"==typeof r.__webscript_enhancer){var c=r.__webscript_enhancer;delete r.__webscript_enhancer;var l=c(u,i);return r.__webscript_enhancer=c,l}var f,p=i[0];Array.isArray(p)&&Object.isFrozen(p)&&(i=n(i)),Array.isArray(a.children)&&((f=a.children).push.apply(f,i),i=a.children,delete a.children);for(var s=0;s<i.length;s++){var v=i[s];"function"==typeof v&&!0===v.__is_webscript_element&&(i[s]=v())}return e.apply(void 0,[t,a].concat(i))},get:function(e,t){if("string"==typeof t){var u=function(){var e,t=[].slice.call(arguments),o=t[0];if(void 0===o){if("props"===c&&"[object Object]"===Object.prototype.toString.call(o))return i({},null);var u=r({},a);return delete u[c],i(u,null)}if(Array.isArray(o)&&Object.isFrozen(o))o=n(t).join("");else if(t.length>1)o=t;else if("props"===c&&"[object Object]"===Object.prototype.toString.call(o))return i(r({},a,o),null);var l=r({},a,((e={})[c]=o,e));return i(l,null)};return"__is_webscript_element"===t||("__webscript_enhancer"===t?e[t]:(-1!==t.indexOf("·")&&(t=t.replace(o,"-")),u.value="props"===t?a:a[t],c=t,u))}}});return u}({},null)}export default function(r,e){if(void 0===e&&(e=[]),"function"!=typeof r)throw Error("elementConstructor argument must be present and it must be a function.");if(e.length>0){for(var n,o=[],i=t(e);!(n=i()).done;)o.push(a(r,n.value));return o}return new Proxy(function(){},{get:function(e,t){var n=e[t];return void 0!==n?n:(e[t]=a(r,t),e[t])}})}export{i as enhanceBuilder};
//# sourceMappingURL=webscript.esm.js.map
