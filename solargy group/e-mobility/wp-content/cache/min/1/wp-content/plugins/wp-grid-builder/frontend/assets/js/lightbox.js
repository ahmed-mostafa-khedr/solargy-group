/*!
* WP Grid Builder Plugin
*
* @package   WP Grid Builder
* @author    Loïc Blascos
* @link      https://www.wpgridbuilder.com
* @copyright 2019-2023 Loïc Blascos
*
*/
!function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,i){if(e){if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=h(t);if(e){var r=h(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return p(this,i)}}var f={selector:".wpgb-lightbox",draggingClass:"wpgb-is-dragging",relAttr:"data-rel",nextLabel:"Next slide",prevLabel:"Previous slide",closeLabel:"Close lightbox",arrowShape:"M18,12 L10,20 L18,28 M10,20 L30,20",closeShape:"M10,10 L30,30 M30,10 L10,30",counterMsg:"[index] / [total]",errorMsg:"Sorry, an error occured while loading the content...",rightToLeft:!1},m=function(){function t(){o(this,t),this.listeners=new Map}return s(t,[{key:"canListen",value:function(t,e){return!("function"!=typeof e||!t)||(!("object"!==c(e)||!e[t])||(console.error('Invalid listener for event name: "'.concat(t,'"')),!1))}},{key:"exists",value:function(t,e){if(this.listeners.has(t))return this.listeners.get(t).find((function(t){return t.listener===e}))}},{key:"on",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.canListen(t,e)?(this.listeners.has(t)||this.listeners.set(t,[]),this.exists(t,e)||this.listeners.get(t).push({listener:e,once:i}),this):this}},{key:"once",value:function(t,e){return this.on(t,e,!0)}},{key:"off",value:function(t,e){var i=this.listeners.get(t)||[],n=i.findIndex((function(t){return t.listener===e}));return n>-1&&i.splice(n,1),i.length<1&&this.listeners.delete(t),this}},{key:"offAll",value:function(){return this.listeners.clear(),this}},{key:"emit",value:function(t){for(var i=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=this.listeners.get(t)||[];return e(a).forEach((function(e){var n,o;(e.once&&i.off(t,e.listener),"object"===c(e.listener))?(n=e.listener[t]).apply.apply(n,[e.listener].concat(r)):(o=e.listener).apply.apply(o,[i].concat(r))})),this}}]),t}(),y=!1;try{var g=Object.defineProperty({},"passive",{get:function(){return y=!0}});window.addEventListener("test",null,g),window.removeEventListener("test",null,g)}catch(t){}var k,b,w=function(t){l(i,t);var e=v(i);function i(){return o(this,i),e.apply(this,arguments)}return s(i,[{key:"attachPointers",value:function(t){this.pointer={},this.pointedElement=t,this.passiveListener=y,this._getEvents(),this._unifyEvents(),this._bindEvents()}},{key:"_getEvents",value:function(){this.events={down:"mousedown",move:"mousemove",up:"mouseup"},window.PointerEvent?this.events={down:"pointerdown",move:"pointermove",up:"pointerup",cancel:"pointercancel"}:"ontouchstart"in window&&(this.events={down:"touchstart",move:"touchmove",up:"touchend",cancel:"touchcancel"})}},{key:"_unifyEvents",value:function(){for(var t in this.events)this["on".concat(this.events[t])]=this._handleEvent}},{key:"_bindEvents",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["down"],i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i=i?"add":"remove",e.forEach((function(e){("down"===e?t.pointedElement:window)["".concat(i,"EventListener")](t.events[e],t,!!t.passiveListener&&{passive:!1})}))}},{key:"handleEvent",value:function(t){var e="on"+t.type;this[e]&&this[e](t)}},{key:"_handleEvent",value:function(t){if(this.isPointer(t)&&this.hasPointer(t))for(var e in this.events)if(this.events[e]===t.type)return this["_pointer".concat(e)](t)}},{key:"isPointer",value:function(t){return!t.button||t.button<1}},{key:"hasPointer",value:function(t){for(var e=t.changedTouches||[t],i=0;i<e.length;i++){var n=e[i].pointerId||e[i].identifier,r=this.pointer.pointerId||this.pointer.identifier;if(n===r||void 0===r)return this.pointer=e[i],!0}return!1}},{key:"_pointerdown",value:function(t){this._bindEvents(["move","up","cancel"]),this._callBack("pointerDown",t)}},{key:"_pointermove",value:function(t){this._callBack("pointerMove",t)}},{key:"_pointerup",value:function(t){this._callBack("pointerUp",t),this._pointerDone(t)}},{key:"_pointercancel",value:function(t){this._callBack("pointerCancel",t),this._pointerDone(t)}},{key:"_pointerDone",value:function(t){this._callBack("pointerDone",t),this._pointerReset()}},{key:"_pointerReset",value:function(){this._bindEvents(["move","up","cancel"],!1),this.pointer={}}},{key:"_callBack",value:function(t,e,i){this[t]?this[t](e,this.pointer,i):this.emit(t,[e,this.pointer,i])}}]),i}(m),E={nodes:["TEXTAREA","SELECT","OPTION","INPUT"],types:["checkbox","radio","button","submit","image","file"]},x=function(t){l(i,t);var e=v(i);function i(){return o(this,i),e.apply(this,arguments)}return s(i,[{key:"drag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:3,y:3},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.threshold=e,this.attachPointers(t),t.addEventListener("click",this),i&&window.addEventListener("touchmove",this.preventScrolling.bind(this),!!this.passiveListener&&{passive:!1})}},{key:"canDragTarget",value:function(t){var e=t.target,i=e.nodeName,n=e.type;return!(E.nodes.includes(i)||E.types.includes(n))}},{key:"canDragStart",value:function(t,e){var i=this.threshold,n=i.x,r=i.y,o=180*Math.atan2(Math.abs(e),Math.abs(t))/Math.PI,a=Math.sqrt(Math.pow(t,2)+Math.pow(e,2));return!1!==n&&a>n&&o<=45||!1!==r&&a>r&&o>=45}},{key:"canPreventDefault",value:function(t){var e=t.type,i=t.pointerType;return"touchstart"!==e&&"touch"!==i}},{key:"getPointerVector",value:function(t){return{x:t.pageX-this.pointerStart.x,y:t.pageY-this.pointerStart.y}}},{key:"pointerDown",value:function(t,e){this.preventClick=!1,this.canDragTarget(t)?(this.pointerStart={x:e.pageX,y:e.pageY},this.canPreventDefault(t)&&t.preventDefault(),this._callBack("dragDown",t)):this._pointerReset()}},{key:"pointerMove",value:function(t,e){var i=this.getPointerVector(e),n=i.x,r=i.y;this.dragging?(t.preventDefault(),this._callBack("dragMove",t,{x:n,y:r})):this.canDragStart(n,r)&&(this.pointerStart.x+=n,this.pointerStart.y+=r,this.preventClick=!0,this.dragging=!0,this._callBack("dragStart",t,this.getPointerVector(e)))}},{key:"pointerUp",value:function(t,e){this.dragging&&this._callBack("dragEnd",t,this.getPointerVector(e))}},{key:"pointerCancel",value:function(t,e){this.dragging&&this._callBack("dragCancel",t,this.getPointerVector(e))}},{key:"pointerDone",value:function(t,e){this._callBack("dragUp",t,this.getPointerVector(e)),this.dragging&&(this.dragging=!1,this._callBack("dragDone",t,this.getPointerVector(e)))}},{key:"onclick",value:function(t){this.preventClick&&t.preventDefault()}},{key:"preventScrolling",value:function(t){this.dragging&&t.preventDefault()}}]),i}(w),_=function(t){l(i,t);var e=v(i);function i(){return o(this,i),e.apply(this,arguments)}return s(i,[{key:"dragger",value:function(){this.drag(this.markup.holder,{x:3,y:3},!0)}},{key:"dragStart",value:function(t,e,i){this.markup.holder.classList.add(this.options.draggingClass),this.emit("dragStart",[t])}},{key:"dragMove",value:function(t,e,i){if(!(this.items.length<2)){var n=i.x,r=(i.y,this.markup.figure.style);r.transition="",r.transform="translate3d(".concat(n/4,"px,0,0)"),this.emit("dragMove",[t,i])}}},{key:"dragUp",value:function(t,e,i){var n=i.x,r=i.y,o=this.options.rightToLeft;this.dragging&&this.emit("dragEnd",[t]),Math.abs(n)<50||Math.abs(n)>Math.abs(r)&&this[(o?-1:1)*n>0?"previous":"next"]()}},{key:"dragDone",value:function(t,e,i){var n=this.markup.figure.style;n.transition="transform 0.3s ease",n.transform="translate3d(0,0,0)",this.markup.holder.classList.remove(this.options.draggingClass)}},{key:"dragDown",value:function(){}},{key:"dragEnd",value:function(){}},{key:"dragCancel",value:function(){}}]),i}(x),A=function(t){l(i,t);var e=v(i);function i(){return o(this,i),e.apply(this,arguments)}return s(i,[{key:"bindEvents",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t=t?"addEventListener":"removeEventListener",window[t]("keydown",this),window[t]("resize",this),window[t]("orientationchange",this),this.markup.holder[t]("transitionend",this)}},{key:"onclick",value:function(t){var e=t.target,i=this.markup,n=i.holder,r=i.close,o=i.prev,a=i.next;this.preventClick?t.preventDefault():e===o?this.previous():e===a?this.next():e!==r&&e!==n||this.close()}},{key:"onkeydown",value:function(t){var e=t.keyCode,i=this.options.rightToLeft;37===e||38===e?(t.preventDefault(),this[i?"next":"previous"]()):39===e||40===e?(t.preventDefault(),this[i?"previous":"next"]()):27===e&&this.close()}},{key:"onresize",value:function(t){this.resize()}},{key:"onorientationchange",value:function(t){this.resize()}},{key:"ontransitionend",value:function(t){t.target===this.markup.holder&&"visibility"===t.propertyName&&("hidden"===window.getComputedStyle(t.target).getPropertyValue("visibility")&&(this.bindEvents(!1),this.toggle(!1),this.remove()))}}]),i}(_),O=function(t){l(n,t);var e=v(n);function n(){var t;return o(this,n),i(d(t=e.call(this)),"createSVG",(function(t){var e="http://www.w3.org/2000/svg",i=document.createElementNS(e,"svg"),n=document.createElementNS(e,"path");return i.setAttribute("viewBox","0 0 40 40"),n.setAttribute("d",t),i.appendChild(n),i})),t.markup={},t.nodes={holder:"div",figure:"figure",caption:"figcaption",title:"div",desc:"div",counter:"div",close:"button",prev:"button",next:"button"},t}return s(n,[{key:"create",value:function(){this.createElements(),this.createButtons(),this.createMarkup()}},{key:"append",value:function(){if(this.markup.holder&&this.markup.holder.parentElement)this.removeMedia();else{var t=document.createComment(" Gridbuilder ᵂᴾ - Lightbox ");document.body.appendChild(t),document.body.appendChild(this.markup.holder)}}},{key:"remove",value:function(){this.markup.holder&&this.markup.holder.parentElement&&(this.removeMedia(),this.markup.holder.parentElement.removeChild(this.markup.holder.previousSibling),this.markup.holder.parentElement.removeChild(this.markup.holder))}},{key:"removeMedia",value:function(){var t=this.markup.figure.firstElementChild;"FIGCAPTION"!==t.tagName&&this.markup.figure.removeChild(t)}},{key:"createElements",value:function(){for(var t in this.nodes)this.markup[t]=document.createElement(this.nodes[t]),this.markup[t].className="wpgb-lightbox-".concat(t);this.markup.holder.tabIndex=-1,this.markup.holder.setAttribute("aria-hidden","true"),this.markup.holder.setAttribute("role","dialog"),this.markup.holder.setAttribute("data-rtl",this.options.rightToLeft)}},{key:"createButtons",value:function(){var t=this;["close","prev","next"].forEach((function(e){var i="close"===e?"closeShape":"arrowShape";t.markup[e].setAttribute("aria-label",t.options["".concat(e,"Label")]),t.markup[e].appendChild(t.createSVG(t.options[i]))}))}},{key:"createMarkup",value:function(){var t=this;this.markup.caption.appendChild(this.markup.title),this.markup.caption.appendChild(this.markup.desc),this.markup.figure.appendChild(this.markup.caption),["figure","counter","close","prev","next"].forEach((function(e){t.markup.holder.appendChild(t.markup[e])}))}},{key:"counter",value:function(){this.markup.counter.textContent=this.options.counterMsg.replace("[index]",this.index+1).replace("[total]",this.items.length)}},{key:"caption",value:function(){this.markup.caption.style.display=this.title||this.desc?"":"none",this.markup.title.innerHTML=this.title,this.markup.desc.innerHTML=this.desc}},{key:"error",value:function(){var t=document.createElement("div");t.textContent=this.options.errorMsg,t.className="wpgb-lightbox-error",this.markup.figure.insertBefore(t,this.markup.caption)}},{key:"prepare",value:function(){this.items.length<2?(this.markup.prev.style.display="none",this.markup.next.style.display="none"):(this.markup.prev.removeAttribute("style"),this.markup.next.removeAttribute("style"))}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.markup.holder.setAttribute("aria-hidden",String(!t))}},{key:"loading",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.markup.holder.setAttribute("data-loading",t)}}]),n}(A),P=function(){function t(e,i,n){o(this,t),this.callback=n,this.source=i,this.type=e,this.loadMedia()}return s(t,[{key:"loadMedia",value:function(){switch(this.type){case"video":this.video();break;case"iframe":this.iframe();break;default:this.image()}}},{key:"image",value:function(){var t=this;this.media=new Image;var e="decode"in this.media;e||this.bindEvents(),this.media.src=this.source,this.isComplete()?this.onload(!0):e&&this.media.decode().then((function(){return t.onload(!0)})).catch((function(){return t.onload(!1)}))}},{key:"video",value:function(){this.media=document.createElement("video"),this.media.setAttribute("controls",""),this.media.setAttribute("controlsList","nodownload"),this.bindEvents(),this.media.src=this.source}},{key:"iframe",value:function(){this.media=document.createElement("iframe"),this.media.style.display="none",this.media.src=this.source,this.media.setAttribute("frameborder",0),this.media.setAttribute("allowfullscreen",""),this.bindEvents(),document.body.appendChild(this.media)}},{key:"isComplete",value:function(){return this.media.complete&&this.media.naturalWidth}},{key:"onload",value:function(t){this.media&&(this.media.removeAttribute("style"),this.callback(this.media,t),this.destroy())}},{key:"bindEvents",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t=t?"addEventListener":"removeEventListener",this.media[t]("loadedmetadata",this),this.media[t]("load",this),this.media[t]("error",this)}},{key:"handleEvent",value:function(t){this.onload(!!t.type.match("load"))}},{key:"removeMedia",value:function(){var t=this.media.parentElement;t&&"BODY"===t.tagName&&t.removeChild(this.media)}},{key:"destroy",value:function(){this.media&&(this.bindEvents(!1),this.removeMedia(),this.callback=null,this.source=null,this.media=null,this.type=null)}}]),t}(),S=function(t){l(n,t);var i=v(n);function n(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(this,n),(t=i.call(this)).options=r(r({},f),e),t}return s(n,[{key:"init",value:function(){this.create(),this.attach(),this.dragger()}},{key:"attach",value:function(){this.onOpen=this.open.bind(this),document.addEventListener("click",this.onOpen,!0)}},{key:"queryGallery",value:function(){var t=this.options.selector;this.gallery=this.item.getAttribute(this.options.relAttr),this.gallery&&""!==this.gallery&&(t+="[".concat(this.options.relAttr,'="').concat(this.gallery,'"]'));try{this.items=e(document.querySelectorAll(t))}catch(t){console.error(t)}}},{key:"open",value:function(t){var e=this,i=t.target?t.target.closest(this.options.selector):null;i&&(t.preventDefault(),t.stopPropagation(),this.item=i,this.append(),requestAnimationFrame((function(){setTimeout((function(){e.emit("open",[e.item]),e.queryGallery(),e.prepare(),e.update(),e.toggle(),e.bindEvents()}),0)})))}},{key:"close",value:function(t){this.toggle(!1),this.emit("close",[this.item])}},{key:"next",value:function(){this.update(1)}},{key:"previous",value:function(){this.update(-1)}},{key:"modulo",value:function(t,e){return(e+t%e)%e}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t&&this.items.length<2||(this.media&&"VIDEO"===this.media.nodeName&&this.media.pause(),this.media&&"IFRAME"===this.media.nodeName&&this.media.removeAttribute("src"),this.loading(!0),this.getItem(t),this.setAttr(),this.counter(),this.load())}},{key:"getItem",value:function(t){var e=this;this.index=t?this.modulo(this.index+t,this.items.length):this.items.findIndex((function(t){return t===e.item})),this.item=this.items[this.index]}},{key:"setAttr",value:function(){this.source=this.item.href,this.title=(this.item.getAttribute("data-title")||"").trim(),this.desc=(this.item.getAttribute("data-desc")||"").trim(),this.type=(this.item.getAttribute("data-type")||"").trim(),this.emit("update",[this.item])}},{key:"load",value:function(){this.loader&&this.loader.destroy(),this.emit("load",[this.item]),this.loader=new P(this.type,this.source,this.loaded.bind(this))}},{key:"loaded",value:function(t,e){this.caption(),t.src===this.source&&(this.media=t,this.removeMedia(),e?this.markup.figure.insertBefore(this.media,this.markup.caption):this.error(),this.resize(),this.loading(!1),this.emit("loaded",[this.item]))}},{key:"resize",value:function(){var t=this.markup.holder.clientWidth,e=this.markup.holder.clientHeight-88,i=1280,n=720;"image"===this.type&&(i=this.media.naturalWidth,n=this.media.naturalHeight);var r=i/n;n=e-this.markup.caption.clientHeight,i=Math.min(i,t,r*n),this.markup.figure.style.width=i+"px",this.media.style.height=i/r+"px"}},{key:"destroy",value:function(){document.removeEventListener("click",this.onOpen),this.close()}}]),n}(O),M=function(t){l(i,t);var e=v(i);function i(){var t;return o(this,i),(t=e.call(this)).vendors={},t.instances={},t}return s(i,[{key:"get",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.instances,i=[];if(!Object.keys(e).length)return[];for(var n in e)(e[n].id||"").toString()===t.toString()&&i.push(e[n]);return i}},{key:"instance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Object.keys(this.instances).length&&this.instances[t]?this.instances[t]:{}}}]),i}(m),C=Math.sign&&Array.from&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.includes&&Element.prototype.matches&&Element.prototype.closest&&NodeList.prototype.forEach&&window.Map&&window.URLSearchParams;window.WP_Grid_Builder||(window.WP_Grid_Builder=C?new M:{get:function(){return[]},instance:function(){return[]},instances:function(){return[]},instantiate:function(){return[]},on:function(){return null},off:function(){return null},once:function(){return null},offAll:function(){return null},emit:function(){return null},vendors:{},unsupported:!0}),WP_Grid_Builder.Lightbox=function(t){return new S(t)},k="wpgb.lightbox.loaded","function"==typeof Event?b=new CustomEvent(k):(b=document.createEvent("CustomEvent")).initEvent(k,!0,!0),window.dispatchEvent(b)}()