!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@use-it/event-listener"),require("react"),require("use-persisted-state")):"function"==typeof define&&define.amd?define(["@use-it/event-listener","react","use-persisted-state"],t):e.useDarkMode=t(e.useEventListener,e.react,e.createPersistedState)}(this,function(e,t,r){e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r;var n=function(){},a={classList:{add:n,remove:n}},u=function(e,n,u){void 0===u&&(u=global);var i=e?r(e,n):t.useState,o=u.matchMedia?u.matchMedia("(prefers-color-scheme: dark)"):{},s={addEventListener:function(e,t){return o.addListener&&o.addListener(t)},removeEventListener:function(e,t){return o.removeListener&&o.removeListener(t)}},d="(prefers-color-scheme: dark)"===o.media,c=u.document&&u.document.getElementsByTagName('html')[0]||a;return{usePersistedDarkModeState:i,getDefaultOnChange:function(e,t,r){return void 0===e&&(e=c),void 0===t&&(t="dark-mode"),void 0===r&&(r="light-mode"),function(n){e.classList.add(n?t:r),e.classList.remove(n?r:t)}},mediaQueryEventTarget:s,getInitialValue:function(e){return d?o.matches:e}}};return function(r,n){void 0===r&&(r=!1),void 0===n&&(n={});var a=n.element,i=n.classNameDark,o=n.classNameLight,s=n.onChange,d=n.storageKey;void 0===d&&(d="darkMode");var c=n.storageProvider,l=n.global,f=t.useMemo(function(){return u(d,c,l)},[d,c,l]),m=f.getDefaultOnChange,v=f.mediaQueryEventTarget,g=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(r)),h=g[0],k=g[1],p=t.useMemo(function(){return s||m(a,i,o)},[s,a,i,o,m]);return t.useEffect(function(){p(h)},[p,h]),e("change",function(e){return k(e.matches)},v),{value:h,enable:t.useCallback(function(){return k(!0)},[k]),disable:t.useCallback(function(){return k(!1)},[k]),toggle:t.useCallback(function(){return k(function(e){return!e})},[k])}}});