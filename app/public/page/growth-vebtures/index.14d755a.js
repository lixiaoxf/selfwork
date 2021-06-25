/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"page/growth-vebtures/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./page/growth-vebtures/index.js","common/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/js/app.js":
/*!**************************!*\
  !*** ./common/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_js_mousewheel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/js/mousewheel.js */ "./common/js/mousewheel.js");



jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {

    var app = {
        init: function () {
            this.steps = 5;
            this.step = 1;
            this.pageduration = 2;
            this.canProagation = false;
            this.cd = false;
            this.wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.app-page');
            this.yellowBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.yellow-arrow');
            this.initEvt();
        },
        clearStep: function () {
            for (var i = 0; i < this.steps; i++) {
                this.wrap.removeClass('step' + (i + 1));
            }
        },
        canSetStep(step) {
            if (step == 3) {
                header.show();
            }

            if (step <= 5) {
                header.changeStyle('default');
            }
            if (step == 4) {
                header.putAway();
                header.changeStyle('dark');
            }
        },
        setStep: function (step) {
            if (step <= 0 || step > this.steps || this.cd) {
                return;
            }
            this.cd = true;
            this.clearStep();
            this.wrap.addClass('step' + step);
            this.step = step;
            this.canSetStep(step);
            setTimeout(() => {
                this.cd = false;
            }, this.pageduration * 1000);
        },
        initEvt: function () {
            let _this = this;
            this.wrap.on('click', '.yellow-arrow', function () {
                _this.setStep(++_this.step);
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-section').on('mousewheel', function (e) {
                if (e.wheelDelta < -30) {
                    _this.setStep(_this.step + 1);
                }

                if (e.wheelDelta > 30) {
                    _this.setStep(_this.step - 1);
                }
            });
            var timer = null;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('[scroll-delay]').on('mousewheel', function (e) {
                var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                var scrolltop = $this.scrollTop();
                var scrollHeigth = $this[0].scrollHeight;
                var height = $this[0].offsetHeight;
                if (height + scrolltop == scrollHeigth || scrolltop == 0) {

                    if (!_this.canProagation) {
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            _this.canProagation = true;
                        }, 200);
                        e.stopPropagation();
                    }
                } else {
                    _this.canProagation = false;
                    e.stopPropagation();
                }
            });
        }
    };
    app.init();
    window.app = app;
});

/***/ }),

/***/ "./common/js/mousewheel.js":
/*!*********************************!*\
  !*** ./common/js/mousewheel.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



var isFireFox = window.navigator.userAgent.toLowerCase().indexOf('firefox') >= 0,
    oldDispatch = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.dispatch,
    special;

if (isFireFox) {
    special = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.special;

    special.mousewheel = { bindType: "DOMMouseScroll", delegateType: "DOMMouseScroll" };
}

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.dispatch = function (event) {
    var args;

    if (event.type === "DOMMouseScroll" || event.type === "mousewheel") {
        args = Array.prototype.slice.call(arguments, 1);
        event = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.fix(event);

        if (event.type === "DOMMouseScroll") {
            event.wheelDelta = event.originalEvent.detail * -40;
        } else {
            event.wheelDelta = event.originalEvent.wheelDelta;
        }

        args.unshift(event);
    }

    oldDispatch.apply(this, args || arguments);
};

/***/ }),

/***/ "./common/style/_public.scss":
/*!***********************************!*\
  !*** ./common/style/_public.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./component/header/index.js":
/*!***********************************!*\
  !*** ./component/header/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ "./component/header/js/index.js");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ "./component/header/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);



window.header = _js_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./component/header/js/index.js":
/*!**************************************!*\
  !*** ./component/header/js/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const StyleMap = {
    default: 'default',
    dark: 'dark'
};
class SiteHeader {
    constructor() {
        this.dom = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#site-header');
        this.setAct();
        this.initEvt();
    }
    initEvt() {
        var _this = this;
        this.dom.on('click', '.putawayicon', function () {

            if (_this.dom.hasClass('putAway')) {
                _this.open();
            } else {
                _this.putAway();
            }
        });
    }
    setAct() {
        var path = window.location.pathname;
        this.dom.find('.navlist a').each(function () {
            var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
            if (link.indexOf(path) > -1 || link == '/' && path == '/index') {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().addClass('cur');
            }
        });
    }
    show() {
        this.dom.removeClass('hide');
    }
    changeStyle(type) {
        Object.values(StyleMap).map(className => {
            this.dom.removeClass(className);
        });

        this.dom.addClass(StyleMap[type] || StyleMap['default']);
    }
    putAway() {
        this.dom.removeClass('open').addClass('putAway');
    }
    open() {
        this.dom.removeClass('putAway').addClass('open');
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new SiteHeader());

/***/ }),

/***/ "./component/header/style/index.scss":
/*!*******************************************!*\
  !*** ./component/header/style/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./component/letstalk/index.js":
/*!*************************************!*\
  !*** ./component/letstalk/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ "./component/letstalk/js/index.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ "./component/letstalk/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./component/letstalk/js/index.js":
/*!****************************************!*\
  !*** ./component/letstalk/js/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {})();

/***/ }),

/***/ "./component/letstalk/style/index.scss":
/*!*********************************************!*\
  !*** ./component/letstalk/style/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./page/growth-vebtures/index.js":
/*!***************************************!*\
  !*** ./page/growth-vebtures/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/animate.css */ "../node_modules/_animate.css@4.1.1@animate.css/animate.css");
/* harmony import */ var _modules_animate_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_animate_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_style_public_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/style/_public.scss */ "./common/style/_public.scss");
/* harmony import */ var _common_style_public_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_style_public_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_header_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/component/header/index.js */ "./component/header/index.js");
/* harmony import */ var _component_letstalk_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/letstalk/index.js */ "./component/letstalk/index.js");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./page/growth-vebtures/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_js_app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/js/app.js */ "./common/js/app.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/index.js */ "./page/growth-vebtures/js/index.js");









/***/ }),

/***/ "./page/growth-vebtures/js/index.js":
/*!******************************************!*\
  !*** ./page/growth-vebtures/js/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    header.show();
    app.canSetStep = function (step) {
        if (step == 2) {
            header.putAway();
        }
        if (step >= 2) {

            header.changeStyle('default');
        }
    };
});

/***/ }),

/***/ "./page/growth-vebtures/style/index.scss":
/*!***********************************************!*\
  !*** ./page/growth-vebtures/style/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vanMvbW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vc3R5bGUvX3B1YmxpYy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2hlYWRlci9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xldHN0YWxrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sZXRzdGFsay9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGV0c3RhbGsvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2dyb3d0aC12ZWJ0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2dyb3d0aC12ZWJ0dXJlcy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2dyb3d0aC12ZWJ0dXJlcy9zdHlsZS9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwic3RlcHMiLCJzdGVwIiwicGFnZWR1cmF0aW9uIiwiY2FuUHJvYWdhdGlvbiIsImNkIiwid3JhcCIsInllbGxvd0J0biIsImluaXRFdnQiLCJjbGVhclN0ZXAiLCJpIiwicmVtb3ZlQ2xhc3MiLCJjYW5TZXRTdGVwIiwiaGVhZGVyIiwic2hvdyIsImNoYW5nZVN0eWxlIiwicHV0QXdheSIsInNldFN0ZXAiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJfdGhpcyIsIm9uIiwiZSIsIndoZWVsRGVsdGEiLCJ0aW1lciIsIiR0aGlzIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ3RoIiwic2Nyb2xsSGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xlYXJUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiaXNGaXJlRm94IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib2xkRGlzcGF0Y2giLCJldmVudCIsImRpc3BhdGNoIiwic3BlY2lhbCIsIm1vdXNld2hlZWwiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImFyZ3MiLCJ0eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmaXgiLCJvcmlnaW5hbEV2ZW50IiwiZGV0YWlsIiwidW5zaGlmdCIsImFwcGx5IiwiU3R5bGVNYXAiLCJkZWZhdWx0IiwiZGFyayIsIlNpdGVIZWFkZXIiLCJjb25zdHJ1Y3RvciIsImRvbSIsInNldEFjdCIsImhhc0NsYXNzIiwib3BlbiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZmluZCIsImVhY2giLCJsaW5rIiwiYXR0ciIsInBhcmVudCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QXhCLENBQTRCQyxhQUFXO0FBQ25DLGlCQUFLZixHQUFMLENBQVNyRCxXQUFULENBQXFCb0UsU0FBckI7QUFDSCxTQUZEOztBQUlBLGFBQUtmLEdBQUwsQ0FBUzlDLFFBQVQsQ0FBa0J5QyxTQUFTWCxJQUFULEtBQWtCVyxTQUFTLFNBQVQsQ0FBcEM7QUFDSDtBQUNEM0MsY0FBUztBQUNMLGFBQUtnRCxHQUFMLENBQVNyRCxXQUFULENBQXFCLE1BQXJCLEVBQTZCTyxRQUE3QixDQUFzQyxTQUF0QztBQUNIO0FBQ0RpRCxXQUFNO0FBQ0YsYUFBS0gsR0FBTCxDQUFTckQsV0FBVCxDQUFxQixTQUFyQixFQUFnQ08sUUFBaEMsQ0FBeUMsTUFBekM7QUFDSDtBQTFDWTtBQTRDRixtRUFBSTRDLFVBQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pEQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxDQUFDLFlBQVUsQ0FFVixDQUZELEk7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBOztBQUVBaEUsNkNBQUNBLENBQUMsWUFBVTtBQUNSZSxXQUFPQyxJQUFQO0FBQ0FmLFFBQUlhLFVBQUosR0FBaUIsVUFBU1YsSUFBVCxFQUFjO0FBQzNCLFlBQUdBLFFBQU0sQ0FBVCxFQUFXO0FBQ1BXLG1CQUFPRyxPQUFQO0FBQ0g7QUFDRCxZQUFHZCxRQUFNLENBQVQsRUFBVzs7QUFFUFcsbUJBQU9FLFdBQVAsQ0FBbUIsU0FBbkI7QUFDSDtBQUNKLEtBUkQ7QUFTSCxDQVhELEU7Ozs7Ozs7Ozs7O0FDRkEseUMiLCJmaWxlIjoicGFnZS9ncm93dGgtdmVidHVyZXMvaW5kZXguMTRkNzU1YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlL2dyb3d0aC12ZWJ0dXJlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3BhZ2UvZ3Jvd3RoLXZlYnR1cmVzL2luZGV4LmpzXCIsXCJjb21tb24vdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnQC9jb21tb24vanMvbW91c2V3aGVlbC5qcydcbiQoZnVuY3Rpb24oKXtcblxuXG4gICAgdmFyIGFwcCA9IHtcbiAgICAgICAgaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5zdGVwcyA9IDVcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkdXJhdGlvbiA9IDI7XG4gICAgICAgICAgICB0aGlzLmNhblByb2FnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud3JhcCA9ICQoJy5hcHAtcGFnZScpXG4gICAgICAgICAgICB0aGlzLnllbGxvd0J0biA9ICQoJy55ZWxsb3ctYXJyb3cnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2dCgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclN0ZXA6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTx0aGlzLnN0ZXBzO2krKyl7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwLnJlbW92ZUNsYXNzKCdzdGVwJysoaSsxKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuU2V0U3RlcChzdGVwKXtcbiAgICAgICAgICAgIGlmKHN0ZXA9PTMpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5zaG93KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc3RlcDw9NSl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNoYW5nZVN0eWxlKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHN0ZXA9PTQpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5wdXRBd2F5KClcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RhcmsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRTdGVwOmZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICAgICAgaWYoc3RlcDw9MCB8fCBzdGVwPiB0aGlzLnN0ZXBzIHx8IHRoaXMuY2Qpe1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGVwKClcbiAgICAgICAgICAgIHRoaXMud3JhcC5hZGRDbGFzcygnc3RlcCcrc3RlcClcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICB0aGlzLmNhblNldFN0ZXAoc3RlcClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNkID0gZmFsc2VcbiAgICAgICAgICAgIH0sdGhpcy5wYWdlZHVyYXRpb24gKiAxMDAwKVxuXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRFdnQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLndyYXAub24oJ2NsaWNrJywnLnllbGxvdy1hcnJvdycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKCsrX3RoaXMuc3RlcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJCgnLnBhZ2Utc2VjdGlvbicpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmKGUud2hlZWxEZWx0YSA8IC0zMCl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuc3RlcCArIDEpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZS53aGVlbERlbHRhID4gMzApe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKF90aGlzLnN0ZXAgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgJCgnW3Njcm9sbC1kZWxheV0nKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsdG9wID0gJHRoaXMuc2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ3RoID0gJHRoaXNbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9ICR0aGlzWzBdLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmKGhlaWdodCtzY3JvbGx0b3AgPT0gc2Nyb2xsSGVpZ3RoIHx8IHNjcm9sbHRvcCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFfdGhpcy5jYW5Qcm9hZ2F0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhblByb2FnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FuUHJvYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHAuaW5pdCgpO1xuICAgIHdpbmRvdy5hcHAgPSBhcHA7XG59KSIsIlxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIGlzRmlyZUZveCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID49IDBcbiAgICAsIG9sZERpc3BhdGNoID0gJC5ldmVudC5kaXNwYXRjaFxuICAgICwgc3BlY2lhbDtcblxuaWYgKGlzRmlyZUZveCkge1xuICAgIHNwZWNpYWwgPSAkLmV2ZW50LnNwZWNpYWw7XG5cbiAgICBzcGVjaWFsLm1vdXNld2hlZWwgPSB7YmluZFR5cGU6IFwiRE9NTW91c2VTY3JvbGxcIiwgZGVsZWdhdGVUeXBlOiBcIkRPTU1vdXNlU2Nyb2xsXCJ9O1xufVxuXG4kLmV2ZW50LmRpc3BhdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgYXJncztcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIgfHwgZXZlbnQudHlwZSA9PT0gXCJtb3VzZXdoZWVsXCIpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBldmVudCA9ICQuZXZlbnQuZml4KGV2ZW50KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIpIHtcbiAgICAgICAgZXZlbnQud2hlZWxEZWx0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGV0YWlsICogLTQwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoZWVsRGVsdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XG4gICAgfVxuICAgIFxuICAgIGFyZ3MudW5zaGlmdChldmVudCk7XG5cbiAgICB9XG4gICAgXG4gICAgb2xkRGlzcGF0Y2guYXBwbHkodGhpcywgYXJncyB8fCBhcmd1bWVudHMpXG59ICAgICIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbndpbmRvdy5oZWFkZXIgPSBoZWFkZXIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBTdHlsZU1hcCA9IHtcbiAgICBkZWZhdWx0OidkZWZhdWx0JyxcbiAgICBkYXJrOidkYXJrJ1xufVxuY2xhc3MgU2l0ZUhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kb20gPSAkKCcjc2l0ZS1oZWFkZXInKVxuICAgICAgICB0aGlzLnNldEFjdCgpO1xuICAgICAgICB0aGlzLmluaXRFdnQoKVxuICAgIH1cbiAgICBpbml0RXZ0KCl7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9tLm9uKCdjbGljaycsJy5wdXRhd2F5aWNvbicsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoX3RoaXMuZG9tLmhhc0NsYXNzKCdwdXRBd2F5Jykpe1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW4oKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgX3RoaXMucHV0QXdheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldEFjdCgpe1xuICAgICAgICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdGhpcy5kb20uZmluZCgnLm5hdmxpc3QgYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZihsaW5rLmluZGV4T2YoIHBhdGgpPi0xfHwobGluaz09Jy8nJiZwYXRoPT0nL2luZGV4Jykpe1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgfVxuICAgIGNoYW5nZVN0eWxlKHR5cGUpe1xuICAgICAgICBPYmplY3QudmFsdWVzKFN0eWxlTWFwKS5tYXAoY2xhc3NOYW1lPT57XG4gICAgICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kb20uYWRkQ2xhc3MoU3R5bGVNYXBbdHlwZV0gfHwgU3R5bGVNYXBbJ2RlZmF1bHQnXSlcbiAgICB9XG4gICAgcHV0QXdheSgpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnb3BlbicpLmFkZENsYXNzKCdwdXRBd2F5JylcbiAgICB9XG4gICAgb3Blbigpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygncHV0QXdheScpLmFkZENsYXNzKCdvcGVuJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2l0ZUhlYWRlcigpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbiIsIihmdW5jdGlvbigpe1xuICAgIFxufSkoKSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgXCJAbW9kdWxlcy9hbmltYXRlLmNzc1wiO1xuaW1wb3J0ICdAL2NvbW1vbi9zdHlsZS9fcHVibGljLnNjc3MnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9sZXRzdGFsay9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJ0AvY29tbW9uL2pzL2FwcC5qcydcbmltcG9ydCAnLi9qcy9pbmRleC5qcyc7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGZ1bmN0aW9uKCl7XG4gICAgaGVhZGVyLnNob3coKVxuICAgIGFwcC5jYW5TZXRTdGVwID0gZnVuY3Rpb24oc3RlcCl7XG4gICAgICAgIGlmKHN0ZXA9PTIpe1xuICAgICAgICAgICAgaGVhZGVyLnB1dEF3YXkoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHN0ZXA+PTIpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RlZmF1bHQnKVxuICAgICAgICB9XG4gICAgfSBcbn0pIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9