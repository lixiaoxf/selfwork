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
/******/ 		"page/hedge-funds/index": 0
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
/******/ 	deferredModules.push(["./page/hedge-funds/index.js","common/vendors"]);
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

/***/ "./page/hedge-funds/index.js":
/*!***********************************!*\
  !*** ./page/hedge-funds/index.js ***!
  \***********************************/
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
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./page/hedge-funds/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_js_app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/js/app.js */ "./common/js/app.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/index.js */ "./page/hedge-funds/js/index.js");








/***/ }),

/***/ "./page/hedge-funds/js/index.js":
/*!**************************************!*\
  !*** ./page/hedge-funds/js/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    header.show();
    app.steps = 3;
    app.canSetStep = function (step) {
        if (step == 1) {
            header.changeStyle('default');
        }

        if (step == 2) {
            header.putAway();
            header.changeStyle('dark');
        }
        if (step == 3) {
            header.putAway();
            header.changeStyle('default');
        }
    };
});

/***/ }),

/***/ "./page/hedge-funds/style/index.scss":
/*!*******************************************!*\
  !*** ./page/hedge-funds/style/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vanMvbW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vc3R5bGUvX3B1YmxpYy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2hlYWRlci9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xldHN0YWxrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sZXRzdGFsay9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGV0c3RhbGsvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2hlZGdlLWZ1bmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2UvaGVkZ2UtZnVuZHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9oZWRnZS1mdW5kcy9zdHlsZS9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwic3RlcHMiLCJzdGVwIiwicGFnZWR1cmF0aW9uIiwiY2FuUHJvYWdhdGlvbiIsImNkIiwid3JhcCIsInllbGxvd0J0biIsImluaXRFdnQiLCJjbGVhclN0ZXAiLCJpIiwicmVtb3ZlQ2xhc3MiLCJjYW5TZXRTdGVwIiwiaGVhZGVyIiwic2hvdyIsImNoYW5nZVN0eWxlIiwicHV0QXdheSIsInNldFN0ZXAiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJfdGhpcyIsIm9uIiwiZSIsIndoZWVsRGVsdGEiLCJ0aW1lciIsIiR0aGlzIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ3RoIiwic2Nyb2xsSGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xlYXJUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiaXNGaXJlRm94IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib2xkRGlzcGF0Y2giLCJldmVudCIsImRpc3BhdGNoIiwic3BlY2lhbCIsIm1vdXNld2hlZWwiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImFyZ3MiLCJ0eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmaXgiLCJvcmlnaW5hbEV2ZW50IiwiZGV0YWlsIiwidW5zaGlmdCIsImFwcGx5IiwiU3R5bGVNYXAiLCJkZWZhdWx0IiwiZGFyayIsIlNpdGVIZWFkZXIiLCJjb25zdHJ1Y3RvciIsImRvbSIsInNldEFjdCIsImhhc0NsYXNzIiwib3BlbiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZmluZCIsImVhY2giLCJsaW5rIiwiYXR0ciIsInBhcmVudCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUNIO0FBQ0osS0FiRDtBQWVILENBbEJELEU7Ozs7Ozs7Ozs7O0FDRkEseUMiLCJmaWxlIjoicGFnZS9oZWRnZS1mdW5kcy9pbmRleC5mYTZhMzEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2UvaGVkZ2UtZnVuZHMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9wYWdlL2hlZGdlLWZ1bmRzL2luZGV4LmpzXCIsXCJjb21tb24vdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnQC9jb21tb24vanMvbW91c2V3aGVlbC5qcydcbiQoZnVuY3Rpb24oKXtcblxuXG4gICAgdmFyIGFwcCA9IHtcbiAgICAgICAgaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5zdGVwcyA9IDVcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkdXJhdGlvbiA9IDI7XG4gICAgICAgICAgICB0aGlzLmNhblByb2FnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud3JhcCA9ICQoJy5hcHAtcGFnZScpXG4gICAgICAgICAgICB0aGlzLnllbGxvd0J0biA9ICQoJy55ZWxsb3ctYXJyb3cnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2dCgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclN0ZXA6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTx0aGlzLnN0ZXBzO2krKyl7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwLnJlbW92ZUNsYXNzKCdzdGVwJysoaSsxKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuU2V0U3RlcChzdGVwKXtcbiAgICAgICAgICAgIGlmKHN0ZXA9PTMpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5zaG93KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc3RlcDw9NSl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNoYW5nZVN0eWxlKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHN0ZXA9PTQpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5wdXRBd2F5KClcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RhcmsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRTdGVwOmZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICAgICAgaWYoc3RlcDw9MCB8fCBzdGVwPiB0aGlzLnN0ZXBzIHx8IHRoaXMuY2Qpe1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGVwKClcbiAgICAgICAgICAgIHRoaXMud3JhcC5hZGRDbGFzcygnc3RlcCcrc3RlcClcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICB0aGlzLmNhblNldFN0ZXAoc3RlcClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNkID0gZmFsc2VcbiAgICAgICAgICAgIH0sdGhpcy5wYWdlZHVyYXRpb24gKiAxMDAwKVxuXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRFdnQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLndyYXAub24oJ2NsaWNrJywnLnllbGxvdy1hcnJvdycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKCsrX3RoaXMuc3RlcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJCgnLnBhZ2Utc2VjdGlvbicpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmKGUud2hlZWxEZWx0YSA8IC0zMCl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuc3RlcCArIDEpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZS53aGVlbERlbHRhID4gMzApe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKF90aGlzLnN0ZXAgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgJCgnW3Njcm9sbC1kZWxheV0nKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsdG9wID0gJHRoaXMuc2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ3RoID0gJHRoaXNbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9ICR0aGlzWzBdLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmKGhlaWdodCtzY3JvbGx0b3AgPT0gc2Nyb2xsSGVpZ3RoIHx8IHNjcm9sbHRvcCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFfdGhpcy5jYW5Qcm9hZ2F0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhblByb2FnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FuUHJvYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHAuaW5pdCgpO1xuICAgIHdpbmRvdy5hcHAgPSBhcHA7XG59KSIsIlxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIGlzRmlyZUZveCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID49IDBcbiAgICAsIG9sZERpc3BhdGNoID0gJC5ldmVudC5kaXNwYXRjaFxuICAgICwgc3BlY2lhbDtcblxuaWYgKGlzRmlyZUZveCkge1xuICAgIHNwZWNpYWwgPSAkLmV2ZW50LnNwZWNpYWw7XG5cbiAgICBzcGVjaWFsLm1vdXNld2hlZWwgPSB7YmluZFR5cGU6IFwiRE9NTW91c2VTY3JvbGxcIiwgZGVsZWdhdGVUeXBlOiBcIkRPTU1vdXNlU2Nyb2xsXCJ9O1xufVxuXG4kLmV2ZW50LmRpc3BhdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgYXJncztcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIgfHwgZXZlbnQudHlwZSA9PT0gXCJtb3VzZXdoZWVsXCIpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBldmVudCA9ICQuZXZlbnQuZml4KGV2ZW50KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIpIHtcbiAgICAgICAgZXZlbnQud2hlZWxEZWx0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGV0YWlsICogLTQwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoZWVsRGVsdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XG4gICAgfVxuICAgIFxuICAgIGFyZ3MudW5zaGlmdChldmVudCk7XG5cbiAgICB9XG4gICAgXG4gICAgb2xkRGlzcGF0Y2guYXBwbHkodGhpcywgYXJncyB8fCBhcmd1bWVudHMpXG59ICAgICIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbndpbmRvdy5oZWFkZXIgPSBoZWFkZXIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBTdHlsZU1hcCA9IHtcbiAgICBkZWZhdWx0OidkZWZhdWx0JyxcbiAgICBkYXJrOidkYXJrJ1xufVxuY2xhc3MgU2l0ZUhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kb20gPSAkKCcjc2l0ZS1oZWFkZXInKVxuICAgICAgICB0aGlzLnNldEFjdCgpO1xuICAgICAgICB0aGlzLmluaXRFdnQoKVxuICAgIH1cbiAgICBpbml0RXZ0KCl7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9tLm9uKCdjbGljaycsJy5wdXRhd2F5aWNvbicsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoX3RoaXMuZG9tLmhhc0NsYXNzKCdwdXRBd2F5Jykpe1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW4oKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgX3RoaXMucHV0QXdheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldEFjdCgpe1xuICAgICAgICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdGhpcy5kb20uZmluZCgnLm5hdmxpc3QgYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZihsaW5rLmluZGV4T2YoIHBhdGgpPi0xfHwobGluaz09Jy8nJiZwYXRoPT0nL2luZGV4Jykpe1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgfVxuICAgIGNoYW5nZVN0eWxlKHR5cGUpe1xuICAgICAgICBPYmplY3QudmFsdWVzKFN0eWxlTWFwKS5tYXAoY2xhc3NOYW1lPT57XG4gICAgICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kb20uYWRkQ2xhc3MoU3R5bGVNYXBbdHlwZV0gfHwgU3R5bGVNYXBbJ2RlZmF1bHQnXSlcbiAgICB9XG4gICAgcHV0QXdheSgpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnb3BlbicpLmFkZENsYXNzKCdwdXRBd2F5JylcbiAgICB9XG4gICAgb3Blbigpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygncHV0QXdheScpLmFkZENsYXNzKCdvcGVuJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2l0ZUhlYWRlcigpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbiIsIihmdW5jdGlvbigpe1xuICAgIFxufSkoKSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IFwiQG1vZHVsZXMvYW5pbWF0ZS5jc3NcIjtcbmltcG9ydCAnQC9jb21tb24vc3R5bGUvX3B1YmxpYy5zY3NzJztcbmltcG9ydCAnQC9jb21wb25lbnQvaGVhZGVyL2luZGV4LmpzJztcbmltcG9ydCAnQC9jb21wb25lbnQvbGV0c3RhbGsvaW5kZXguanMnO1xuaW1wb3J0ICcuL3N0eWxlL2luZGV4LnNjc3MnO1xuaW1wb3J0ICdAL2NvbW1vbi9qcy9hcHAuanMnXG5pbXBvcnQgJy4vanMvaW5kZXguanMnO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuJChmdW5jdGlvbigpe1xuICAgIGhlYWRlci5zaG93KClcbiAgICBhcHAuc3RlcHMgPSAzO1xuICAgIGFwcC5jYW5TZXRTdGVwID0gZnVuY3Rpb24oc3RlcCl7XG4gICAgICAgIGlmKHN0ZXAgPT0gMSl7XG4gICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RlZmF1bHQnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3RlcD09Mil7XG4gICAgICAgICAgICBoZWFkZXIucHV0QXdheSgpXG4gICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RhcmsnKVxuICAgICAgICB9XG4gICAgICAgIGlmKHN0ZXA9PTMpe1xuICAgICAgICAgICAgaGVhZGVyLnB1dEF3YXkoKVxuICAgICAgICAgICAgaGVhZGVyLmNoYW5nZVN0eWxlKCdkZWZhdWx0JylcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG59KSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==