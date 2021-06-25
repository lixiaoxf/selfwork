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
/******/ 		"page/home/index": 0
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
/******/ 	deferredModules.push(["./page/home/index.js","common/vendors"]);
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

/***/ "./page/home/index.js":
/*!****************************!*\
  !*** ./page/home/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/component/header */ "./component/header/index.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index.js */ "./page/home/js/index.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/animate.css */ "../node_modules/_animate.css@4.1.1@animate.css/animate.css");
/* harmony import */ var _modules_animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_animate_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_style_public_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/style/_public.scss */ "./common/style/_public.scss");
/* harmony import */ var _common_style_public_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_style_public_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_letstalk_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/component/letstalk/index.js */ "./component/letstalk/index.js");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.scss */ "./page/home/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_js_app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/js/app.js */ "./common/js/app.js");











/***/ }),

/***/ "./page/home/js/index.js":
/*!*******************************!*\
  !*** ./page/home/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./page/home/style/index.scss":
/*!************************************!*\
  !*** ./page/home/style/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vanMvbW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vc3R5bGUvX3B1YmxpYy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2hlYWRlci9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xldHN0YWxrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sZXRzdGFsay9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGV0c3RhbGsvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9ob21lL3N0eWxlL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJzdGVwcyIsInN0ZXAiLCJwYWdlZHVyYXRpb24iLCJjYW5Qcm9hZ2F0aW9uIiwiY2QiLCJ3cmFwIiwieWVsbG93QnRuIiwiaW5pdEV2dCIsImNsZWFyU3RlcCIsImkiLCJyZW1vdmVDbGFzcyIsImNhblNldFN0ZXAiLCJoZWFkZXIiLCJzaG93IiwiY2hhbmdlU3R5bGUiLCJwdXRBd2F5Iiwic2V0U3RlcCIsImFkZENsYXNzIiwic2V0VGltZW91dCIsIl90aGlzIiwib24iLCJlIiwid2hlZWxEZWx0YSIsInRpbWVyIiwiJHRoaXMiLCJzY3JvbGx0b3AiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlndGgiLCJzY3JvbGxIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGVhclRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJpc0ZpcmVGb3giLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJvbGREaXNwYXRjaCIsImV2ZW50IiwiZGlzcGF0Y2giLCJzcGVjaWFsIiwibW91c2V3aGVlbCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiYXJncyIsInR5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZpeCIsIm9yaWdpbmFsRXZlbnQiLCJkZXRhaWwiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJTdHlsZU1hcCIsImRlZmF1bHQiLCJkYXJrIiwiU2l0ZUhlYWRlciIsImNvbnN0cnVjdG9yIiwiZG9tIiwic2V0QWN0IiwiaGFzQ2xhc3MiLCJvcGVuIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmaW5kIiwiZWFjaCIsImxpbmsiLCJhdHRyIiwicGFyZW50IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFF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O0FBSUEsYUFBS2YsR0FBTCxDQUFTOUMsUUFBVCxDQUFrQnlDLFNBQVNYLElBQVQsS0FBa0JXLFNBQVMsU0FBVCxDQUFwQztBQUNIO0FBQ0QzQyxjQUFTO0FBQ0wsYUFBS2dELEdBQUwsQ0FBU3JELFdBQVQsQ0FBcUIsTUFBckIsRUFBNkJPLFFBQTdCLENBQXNDLFNBQXRDO0FBQ0g7QUFDRGlELFdBQU07QUFDRixhQUFLSCxHQUFMLENBQVNyRCxXQUFULENBQXFCLFNBQXJCLEVBQWdDTyxRQUFoQyxDQUF5QyxNQUF6QztBQUNIO0FBMUNZO0FBNENGLG1FQUFJNEMsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBVSxDQUVWLENBRkQsSTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEseUMiLCJmaWxlIjoicGFnZS9ob21lL2luZGV4LjhlZjVlMmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZS9ob21lL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vcGFnZS9ob21lL2luZGV4LmpzXCIsXCJjb21tb24vdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnQC9jb21tb24vanMvbW91c2V3aGVlbC5qcydcbiQoZnVuY3Rpb24oKXtcblxuXG4gICAgdmFyIGFwcCA9IHtcbiAgICAgICAgaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5zdGVwcyA9IDVcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkdXJhdGlvbiA9IDI7XG4gICAgICAgICAgICB0aGlzLmNhblByb2FnYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMud3JhcCA9ICQoJy5hcHAtcGFnZScpXG4gICAgICAgICAgICB0aGlzLnllbGxvd0J0biA9ICQoJy55ZWxsb3ctYXJyb3cnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEV2dCgpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclN0ZXA6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTx0aGlzLnN0ZXBzO2krKyl7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwLnJlbW92ZUNsYXNzKCdzdGVwJysoaSsxKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuU2V0U3RlcChzdGVwKXtcbiAgICAgICAgICAgIGlmKHN0ZXA9PTMpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5zaG93KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoc3RlcDw9NSl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNoYW5nZVN0eWxlKCdkZWZhdWx0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHN0ZXA9PTQpe1xuICAgICAgICAgICAgICAgIGhlYWRlci5wdXRBd2F5KClcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RhcmsnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRTdGVwOmZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICAgICAgaWYoc3RlcDw9MCB8fCBzdGVwPiB0aGlzLnN0ZXBzIHx8IHRoaXMuY2Qpe1xuICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGVwKClcbiAgICAgICAgICAgIHRoaXMud3JhcC5hZGRDbGFzcygnc3RlcCcrc3RlcClcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICB0aGlzLmNhblNldFN0ZXAoc3RlcClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNkID0gZmFsc2VcbiAgICAgICAgICAgIH0sdGhpcy5wYWdlZHVyYXRpb24gKiAxMDAwKVxuXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRFdnQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLndyYXAub24oJ2NsaWNrJywnLnllbGxvdy1hcnJvdycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKCsrX3RoaXMuc3RlcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgJCgnLnBhZ2Utc2VjdGlvbicpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmKGUud2hlZWxEZWx0YSA8IC0zMCl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuc3RlcCArIDEpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZS53aGVlbERlbHRhID4gMzApe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGVwKF90aGlzLnN0ZXAgLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgJCgnW3Njcm9sbC1kZWxheV0nKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsdG9wID0gJHRoaXMuc2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSGVpZ3RoID0gJHRoaXNbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9ICR0aGlzWzBdLm9mZnNldEhlaWdodFxuICAgICAgICAgICAgICAgIGlmKGhlaWdodCtzY3JvbGx0b3AgPT0gc2Nyb2xsSGVpZ3RoIHx8IHNjcm9sbHRvcCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKCFfdGhpcy5jYW5Qcm9hZ2F0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhblByb2FnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FuUHJvYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHAuaW5pdCgpO1xuICAgIHdpbmRvdy5hcHAgPSBhcHA7XG59KSIsIlxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIGlzRmlyZUZveCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID49IDBcbiAgICAsIG9sZERpc3BhdGNoID0gJC5ldmVudC5kaXNwYXRjaFxuICAgICwgc3BlY2lhbDtcblxuaWYgKGlzRmlyZUZveCkge1xuICAgIHNwZWNpYWwgPSAkLmV2ZW50LnNwZWNpYWw7XG5cbiAgICBzcGVjaWFsLm1vdXNld2hlZWwgPSB7YmluZFR5cGU6IFwiRE9NTW91c2VTY3JvbGxcIiwgZGVsZWdhdGVUeXBlOiBcIkRPTU1vdXNlU2Nyb2xsXCJ9O1xufVxuXG4kLmV2ZW50LmRpc3BhdGNoID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgYXJncztcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIgfHwgZXZlbnQudHlwZSA9PT0gXCJtb3VzZXdoZWVsXCIpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBldmVudCA9ICQuZXZlbnQuZml4KGV2ZW50KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSBcIkRPTU1vdXNlU2Nyb2xsXCIpIHtcbiAgICAgICAgZXZlbnQud2hlZWxEZWx0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGV0YWlsICogLTQwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoZWVsRGVsdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XG4gICAgfVxuICAgIFxuICAgIGFyZ3MudW5zaGlmdChldmVudCk7XG5cbiAgICB9XG4gICAgXG4gICAgb2xkRGlzcGF0Y2guYXBwbHkodGhpcywgYXJncyB8fCBhcmd1bWVudHMpXG59ICAgICIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbndpbmRvdy5oZWFkZXIgPSBoZWFkZXIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBTdHlsZU1hcCA9IHtcbiAgICBkZWZhdWx0OidkZWZhdWx0JyxcbiAgICBkYXJrOidkYXJrJ1xufVxuY2xhc3MgU2l0ZUhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kb20gPSAkKCcjc2l0ZS1oZWFkZXInKVxuICAgICAgICB0aGlzLnNldEFjdCgpO1xuICAgICAgICB0aGlzLmluaXRFdnQoKVxuICAgIH1cbiAgICBpbml0RXZ0KCl7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9tLm9uKCdjbGljaycsJy5wdXRhd2F5aWNvbicsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoX3RoaXMuZG9tLmhhc0NsYXNzKCdwdXRBd2F5Jykpe1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW4oKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgX3RoaXMucHV0QXdheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldEFjdCgpe1xuICAgICAgICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdGhpcy5kb20uZmluZCgnLm5hdmxpc3QgYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZihsaW5rLmluZGV4T2YoIHBhdGgpPi0xfHwobGluaz09Jy8nJiZwYXRoPT0nL2luZGV4Jykpe1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgfVxuICAgIGNoYW5nZVN0eWxlKHR5cGUpe1xuICAgICAgICBPYmplY3QudmFsdWVzKFN0eWxlTWFwKS5tYXAoY2xhc3NOYW1lPT57XG4gICAgICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kb20uYWRkQ2xhc3MoU3R5bGVNYXBbdHlwZV0gfHwgU3R5bGVNYXBbJ2RlZmF1bHQnXSlcbiAgICB9XG4gICAgcHV0QXdheSgpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnb3BlbicpLmFkZENsYXNzKCdwdXRBd2F5JylcbiAgICB9XG4gICAgb3Blbigpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygncHV0QXdheScpLmFkZENsYXNzKCdvcGVuJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2l0ZUhlYWRlcigpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbiIsIihmdW5jdGlvbigpe1xuICAgIFxufSkoKSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgJ0AvY29tcG9uZW50L2hlYWRlcidcbmltcG9ydCAnLi9qcy9pbmRleC5qcydcbmltcG9ydCBcIkBtb2R1bGVzL2FuaW1hdGUuY3NzXCI7XG5pbXBvcnQgJ0AvY29tbW9uL3N0eWxlL19wdWJsaWMuc2Nzcyc7XG5pbXBvcnQgJ0AvY29tcG9uZW50L2hlYWRlci9pbmRleC5qcyc7XG5pbXBvcnQgJ0AvY29tcG9uZW50L2xldHN0YWxrL2luZGV4LmpzJztcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJztcbmltcG9ydCAnQC9jb21tb24vanMvYXBwLmpzJ1xuaW1wb3J0ICcuL2pzL2luZGV4LmpzJztcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==