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
/******/ 		"page/about-us/index": 0
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
/******/ 	deferredModules.push(["./page/about-us/index.js","common/vendors"]);
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

/***/ "./page/about-us/index.js":
/*!********************************!*\
  !*** ./page/about-us/index.js ***!
  \********************************/
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
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./page/about-us/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_js_app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/js/app.js */ "./common/js/app.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/index.js */ "./page/about-us/js/index.js");








/***/ }),

/***/ "./page/about-us/js/index.js":
/*!***********************************!*\
  !*** ./page/about-us/js/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    var advisorlist = {
        'init': function () {
            this.listdom = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.advisor-card-list');
            this.max = this.listdom.find('.advisor-card').length;
            this.leftBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section4').find('[blackArrow=left]');
            this.rightBtn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section4').find('[blackArrow=right]');
            this.curStep = 0;
            this.setStep(0);
            this.initEvt();
        },
        setStep(step) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.black-arrow-wrap').removeClass('hide');
            if (step <= 0) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.black-arrow-wrap.left').addClass('hide');
            }
            if (step >= this.max - 1) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.black-arrow-wrap.right').addClass('hide');
            }
            if (step > this.max - 1 || step < 0) {
                return;
            }
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section4 [blackArrow]').show();
            this.curStep = step;
            this.listdom.css('transform', 'translateX(-' + step * 100 + '%)');
        },
        initEvt: function () {
            let _this = this;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section4').on('click', '[blackArrow]', function () {
                let type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('blackArrow');
                if (type == 'left') {
                    _this.setStep(_this.curStep - 1);
                } else {
                    _this.setStep(_this.curStep + 1);
                }
            });
        }
    };
    header.show();
    advisorlist.init();
    app.canSetStep = function (step) {
        if (step == 3) {
            header.putAway();
        }
        if (step >= 3) {

            header.changeStyle('default');
        }
    };
});

/***/ }),

/***/ "./page/about-us/style/index.scss":
/*!****************************************!*\
  !*** ./page/about-us/style/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vanMvbW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vc3R5bGUvX3B1YmxpYy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2hlYWRlci9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xldHN0YWxrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sZXRzdGFsay9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGV0c3RhbGsvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlL2Fib3V0LXVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2UvYWJvdXQtdXMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9hYm91dC11cy9zdHlsZS9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0Iiwic3RlcHMiLCJzdGVwIiwicGFnZWR1cmF0aW9uIiwiY2FuUHJvYWdhdGlvbiIsImNkIiwid3JhcCIsInllbGxvd0J0biIsImluaXRFdnQiLCJjbGVhclN0ZXAiLCJpIiwicmVtb3ZlQ2xhc3MiLCJjYW5TZXRTdGVwIiwiaGVhZGVyIiwic2hvdyIsImNoYW5nZVN0eWxlIiwicHV0QXdheSIsInNldFN0ZXAiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJfdGhpcyIsIm9uIiwiZSIsIndoZWVsRGVsdGEiLCJ0aW1lciIsIiR0aGlzIiwic2Nyb2xsdG9wIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ3RoIiwic2Nyb2xsSGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xlYXJUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93IiwiaXNGaXJlRm94IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwib2xkRGlzcGF0Y2giLCJldmVudCIsImRpc3BhdGNoIiwic3BlY2lhbCIsIm1vdXNld2hlZWwiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImFyZ3MiLCJ0eXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmaXgiLCJvcmlnaW5hbEV2ZW50IiwiZGV0YWlsIiwidW5zaGlmdCIsImFwcGx5IiwiU3R5bGVNYXAiLCJkZWZhdWx0IiwiZGFyayIsIlNpdGVIZWFkZXIiLCJjb25zdHJ1Y3RvciIsImRvbSIsInNldEFjdCIsImhhc0NsYXNzIiwib3BlbiIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZmluZCIsImVhY2giLCJsaW5rIiwiYXR0ciIsInBhcmVudCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImNsYXNzTmFtZSIsImFkdmlzb3JsaXN0IiwibGlzdGRvbSIsIm1heCIsImxlbmd0aCIsImxlZnRCdG4iLCJyaWdodEJ0biIsImN1clN0ZXAiLCJjc3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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TUFFSztBQUNEbEUsMEJBQU1ILE9BQU4sQ0FBY0csTUFBTWtFLE9BQU4sR0FBZ0IsQ0FBOUI7QUFDSDtBQUVKLGFBUkQ7QUFTSDtBQXBDYSxLQUFsQjtBQXNDQXpFLFdBQU9DLElBQVA7QUFDQWtFLGdCQUFZaEYsSUFBWjtBQUNBRCxRQUFJYSxVQUFKLEdBQWlCLFVBQVNWLElBQVQsRUFBYztBQUMzQixZQUFHQSxRQUFNLENBQVQsRUFBVztBQUNQVyxtQkFBT0csT0FBUDtBQUNIO0FBQ0QsWUFBR2QsUUFBTSxDQUFULEVBQVc7O0FBRVBXLG1CQUFPRSxXQUFQLENBQW1CLFNBQW5CO0FBQ0g7QUFDSixLQVJEO0FBVUgsQ0FuREQsRTs7Ozs7Ozs7Ozs7QUNGQSx5QyIsImZpbGUiOiJwYWdlL2Fib3V0LXVzL2luZGV4LjlmNDEzNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZS9hYm91dC11cy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3BhZ2UvYWJvdXQtdXMvaW5kZXguanNcIixcImNvbW1vbi92ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdAL2NvbW1vbi9qcy9tb3VzZXdoZWVsLmpzJ1xuJChmdW5jdGlvbigpe1xuXG5cbiAgICB2YXIgYXBwID0ge1xuICAgICAgICBpbml0OmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnN0ZXBzID0gNVxuICAgICAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgICAgIHRoaXMucGFnZWR1cmF0aW9uID0gMjtcbiAgICAgICAgICAgIHRoaXMuY2FuUHJvYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy53cmFwID0gJCgnLmFwcC1wYWdlJylcbiAgICAgICAgICAgIHRoaXMueWVsbG93QnRuID0gJCgnLnllbGxvdy1hcnJvdycpO1xuICAgICAgICAgICAgdGhpcy5pbml0RXZ0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyU3RlcDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDtpPHRoaXMuc3RlcHM7aSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXAucmVtb3ZlQ2xhc3MoJ3N0ZXAnKyhpKzEpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5TZXRTdGVwKHN0ZXApe1xuICAgICAgICAgICAgaWYoc3RlcD09Myl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnNob3coKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzdGVwPD01KXtcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc3RlcD09NCl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnB1dEF3YXkoKVxuICAgICAgICAgICAgICAgIGhlYWRlci5jaGFuZ2VTdHlsZSgnZGFyaycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldFN0ZXA6ZnVuY3Rpb24oc3RlcCl7XG4gICAgICAgICAgICBpZihzdGVwPD0wIHx8IHN0ZXA+IHRoaXMuc3RlcHMgfHwgdGhpcy5jZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2QgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0ZXAoKVxuICAgICAgICAgICAgdGhpcy53cmFwLmFkZENsYXNzKCdzdGVwJytzdGVwKVxuICAgICAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICAgICAgICAgIHRoaXMuY2FuU2V0U3RlcChzdGVwKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY2QgPSBmYWxzZVxuICAgICAgICAgICAgfSx0aGlzLnBhZ2VkdXJhdGlvbiAqIDEwMDApXG5cbiAgICAgICAgfSxcbiAgICAgICAgaW5pdEV2dDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMud3JhcC5vbignY2xpY2snLCcueWVsbG93LWFycm93JyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoKytfdGhpcy5zdGVwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkKCcucGFnZS1zZWN0aW9uJykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYoZS53aGVlbERlbHRhIDwgLTMwKXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RlcChfdGhpcy5zdGVwICsgMSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihlLndoZWVsRGVsdGEgPiAzMCl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuc3RlcCAtIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAkKCdbc2Nyb2xsLWRlbGF5XScpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGx0b3AgPSAkdGhpcy5zY3JvbGxUb3AoKVxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxIZWlndGggPSAkdGhpc1swXS5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJHRoaXNbMF0ub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgaWYoaGVpZ2h0K3Njcm9sbHRvcCA9PSBzY3JvbGxIZWlndGggfHwgc2Nyb2xsdG9wID09IDApe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoIV90aGlzLmNhblByb2FnYXRpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FuUHJvYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYW5Qcm9hZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcC5pbml0KCk7XG4gICAgd2luZG93LmFwcCA9IGFwcDtcbn0pIiwiXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG52YXIgaXNGaXJlRm94ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPj0gMFxuICAgICwgb2xkRGlzcGF0Y2ggPSAkLmV2ZW50LmRpc3BhdGNoXG4gICAgLCBzcGVjaWFsO1xuXG5pZiAoaXNGaXJlRm94KSB7XG4gICAgc3BlY2lhbCA9ICQuZXZlbnQuc3BlY2lhbDtcblxuICAgIHNwZWNpYWwubW91c2V3aGVlbCA9IHtiaW5kVHlwZTogXCJET01Nb3VzZVNjcm9sbFwiLCBkZWxlZ2F0ZVR5cGU6IFwiRE9NTW91c2VTY3JvbGxcIn07XG59XG5cbiQuZXZlbnQuZGlzcGF0Y2ggPSBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBhcmdzO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiRE9NTW91c2VTY3JvbGxcIiB8fCBldmVudC50eXBlID09PSBcIm1vdXNld2hlZWxcIikge1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGV2ZW50ID0gJC5ldmVudC5maXgoZXZlbnQpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiRE9NTW91c2VTY3JvbGxcIikge1xuICAgICAgICBldmVudC53aGVlbERlbHRhID0gZXZlbnQub3JpZ2luYWxFdmVudC5kZXRhaWwgKiAtNDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQud2hlZWxEZWx0YSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcbiAgICB9XG4gICAgXG4gICAgYXJncy51bnNoaWZ0KGV2ZW50KTtcblxuICAgIH1cbiAgICBcbiAgICBvbGREaXNwYXRjaC5hcHBseSh0aGlzLCBhcmdzIHx8IGFyZ3VtZW50cylcbn0gICAgIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9qcy9pbmRleC5qcydcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJ1xud2luZG93LmhlYWRlciA9IGhlYWRlciIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmNvbnN0IFN0eWxlTWFwID0ge1xuICAgIGRlZmF1bHQ6J2RlZmF1bHQnLFxuICAgIGRhcms6J2RhcmsnXG59XG5jbGFzcyBTaXRlSGVhZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmRvbSA9ICQoJyNzaXRlLWhlYWRlcicpXG4gICAgICAgIHRoaXMuc2V0QWN0KCk7XG4gICAgICAgIHRoaXMuaW5pdEV2dCgpXG4gICAgfVxuICAgIGluaXRFdnQoKXtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kb20ub24oJ2NsaWNrJywnLnB1dGF3YXlpY29uJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihfdGhpcy5kb20uaGFzQ2xhc3MoJ3B1dEF3YXknKSl7XG4gICAgICAgICAgICAgICAgX3RoaXMub3BlbigpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBfdGhpcy5wdXRBd2F5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2V0QWN0KCl7XG4gICAgICAgIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICB0aGlzLmRvbS5maW5kKCcubmF2bGlzdCBhJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGxpbmsgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmKGxpbmsuaW5kZXhPZiggcGF0aCk+LTF8fChsaW5rPT0nLycmJnBhdGg9PScvaW5kZXgnKSl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnY3VyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBzaG93KCl7XG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICB9XG4gICAgY2hhbmdlU3R5bGUodHlwZSl7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoU3R5bGVNYXApLm1hcChjbGFzc05hbWU9PntcbiAgICAgICAgICAgIHRoaXMuZG9tLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmRvbS5hZGRDbGFzcyhTdHlsZU1hcFt0eXBlXSB8fCBTdHlsZU1hcFsnZGVmYXVsdCddKVxuICAgIH1cbiAgICBwdXRBd2F5KCl7XG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZUNsYXNzKCdvcGVuJykuYWRkQ2xhc3MoJ3B1dEF3YXknKVxuICAgIH1cbiAgICBvcGVuKCl7XG4gICAgICAgIHRoaXMuZG9tLnJlbW92ZUNsYXNzKCdwdXRBd2F5JykuYWRkQ2xhc3MoJ29wZW4nKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBTaXRlSGVhZGVyKCkiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAnLi9qcy9pbmRleC5qcydcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJ1xuIiwiKGZ1bmN0aW9uKCl7XG4gICAgXG59KSgpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgXCJAbW9kdWxlcy9hbmltYXRlLmNzc1wiO1xuaW1wb3J0ICdAL2NvbW1vbi9zdHlsZS9fcHVibGljLnNjc3MnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9sZXRzdGFsay9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJ0AvY29tbW9uL2pzL2FwcC5qcydcbmltcG9ydCAnLi9qcy9pbmRleC5qcyc7XG5cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbiQoZnVuY3Rpb24oKXtcbiAgICB2YXIgYWR2aXNvcmxpc3QgPSB7XG4gICAgICAgICdpbml0JzpmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5saXN0ZG9tID0gJCgnLmFkdmlzb3ItY2FyZC1saXN0JylcbiAgICAgICAgICAgIHRoaXMubWF4ID0gdGhpcy5saXN0ZG9tLmZpbmQoJy5hZHZpc29yLWNhcmQnKS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmxlZnRCdG4gPSAkKCcuc2VjdGlvbjQnKS5maW5kKCdbYmxhY2tBcnJvdz1sZWZ0XScpO1xuICAgICAgICAgICAgdGhpcy5yaWdodEJ0biA9ICQoJy5zZWN0aW9uNCcpLmZpbmQoJ1tibGFja0Fycm93PXJpZ2h0XScpO1xuICAgICAgICAgICAgdGhpcy5jdXJTdGVwID0gMFxuICAgICAgICAgICAgdGhpcy5zZXRTdGVwKDApXG4gICAgICAgICAgICB0aGlzLmluaXRFdnQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3RlcChzdGVwKXtcbiAgICAgICAgICAgICQoJy5ibGFjay1hcnJvdy13cmFwJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgICAgaWYoc3RlcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJsYWNrLWFycm93LXdyYXAubGVmdCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzdGVwID49IHRoaXMubWF4LTEpe1xuICAgICAgICAgICAgICAgICQoJy5ibGFjay1hcnJvdy13cmFwLnJpZ2h0JykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHN0ZXAgPiB0aGlzLm1heC0xIHx8IHN0ZXAgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLnNlY3Rpb240IFtibGFja0Fycm93XScpLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuY3VyU3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICB0aGlzLmxpc3Rkb20uY3NzKCd0cmFuc2Zvcm0nLCd0cmFuc2xhdGVYKC0nK3N0ZXAqMTAwKyclKScpXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRFdnQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAkKCcuc2VjdGlvbjQnKS5vbignY2xpY2snLCdbYmxhY2tBcnJvd10nLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAkKHRoaXMpLmF0dHIoJ2JsYWNrQXJyb3cnKVxuICAgICAgICAgICAgICAgIGlmKHR5cGU9PSdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuY3VyU3RlcCAtIDEpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0ZXAoX3RoaXMuY3VyU3RlcCArIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXIuc2hvdygpXG4gICAgYWR2aXNvcmxpc3QuaW5pdCgpO1xuICAgIGFwcC5jYW5TZXRTdGVwID0gZnVuY3Rpb24oc3RlcCl7XG4gICAgICAgIGlmKHN0ZXA9PTMpe1xuICAgICAgICAgICAgaGVhZGVyLnB1dEF3YXkoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHN0ZXA+PTMpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoZWFkZXIuY2hhbmdlU3R5bGUoJ2RlZmF1bHQnKVxuICAgICAgICB9XG4gICAgfSBcbiAgICBcbn0pIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9