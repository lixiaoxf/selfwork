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
/******/ 		"page/news/index": 0
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
/******/ 	deferredModules.push(["./page/news/index.js","common/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./page/news/index.js":
/*!****************************!*\
  !*** ./page/news/index.js ***!
  \****************************/
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
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./page/news/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/index.js */ "./page/news/js/index.js");








/***/ }),

/***/ "./page/news/js/index.js":
/*!*******************************!*\
  !*** ./page/news/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/_jquery@3.6.0@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    header.show();
});

/***/ }),

/***/ "./page/news/style/index.scss":
/*!************************************!*\
  !*** ./page/news/style/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL3N0eWxlL19wdWJsaWMuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9oZWFkZXIvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2hlYWRlci9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9sZXRzdGFsay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbGV0c3RhbGsvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L2xldHN0YWxrL3N0eWxlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZS9uZXdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2UvbmV3cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlL25ld3Mvc3R5bGUvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJoZWFkZXIiLCJTdHlsZU1hcCIsImRlZmF1bHQiLCJkYXJrIiwiU2l0ZUhlYWRlciIsImNvbnN0cnVjdG9yIiwiZG9tIiwiJCIsInNldEFjdCIsImluaXRFdnQiLCJfdGhpcyIsIm9uIiwiaGFzQ2xhc3MiLCJvcGVuIiwicHV0QXdheSIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZmluZCIsImVhY2giLCJsaW5rIiwiYXR0ciIsImluZGV4T2YiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInNob3ciLCJyZW1vdmVDbGFzcyIsImNoYW5nZVN0eWxlIiwidHlwZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBSUEsYUFBSzFCLEdBQUwsQ0FBU2tCLFFBQVQsQ0FBa0J2QixTQUFTMkIsSUFBVCxLQUFrQjNCLFNBQVMsU0FBVCxDQUFwQztBQUNIO0FBQ0RhLGNBQVM7QUFDTCxhQUFLUixHQUFMLENBQVNvQixXQUFULENBQXFCLE1BQXJCLEVBQTZCRixRQUE3QixDQUFzQyxTQUF0QztBQUNIO0FBQ0RYLFdBQU07QUFDRixhQUFLUCxHQUFMLENBQVNvQixXQUFULENBQXFCLFNBQXJCLEVBQWdDRixRQUFoQyxDQUF5QyxNQUF6QztBQUNIO0FBMUNZO0FBNENGLG1FQUFJcEIsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsWUFBVSxDQUVWLENBRkQsSTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7O0FBRUFHLDZDQUFDQSxDQUFDLFlBQVU7QUFDUlAsV0FBT3lCLElBQVA7QUFDSCxDQUZELEU7Ozs7Ozs7Ozs7O0FDRkEseUMiLCJmaWxlIjoicGFnZS9uZXdzL2luZGV4LjY1Zjg1MzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZS9uZXdzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vcGFnZS9uZXdzL2luZGV4LmpzXCIsXCJjb21tb24vdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbndpbmRvdy5oZWFkZXIgPSBoZWFkZXIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBTdHlsZU1hcCA9IHtcbiAgICBkZWZhdWx0OidkZWZhdWx0JyxcbiAgICBkYXJrOidkYXJrJ1xufVxuY2xhc3MgU2l0ZUhlYWRlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5kb20gPSAkKCcjc2l0ZS1oZWFkZXInKVxuICAgICAgICB0aGlzLnNldEFjdCgpO1xuICAgICAgICB0aGlzLmluaXRFdnQoKVxuICAgIH1cbiAgICBpbml0RXZ0KCl7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9tLm9uKCdjbGljaycsJy5wdXRhd2F5aWNvbicsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoX3RoaXMuZG9tLmhhc0NsYXNzKCdwdXRBd2F5Jykpe1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW4oKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgX3RoaXMucHV0QXdheSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldEFjdCgpe1xuICAgICAgICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdGhpcy5kb20uZmluZCgnLm5hdmxpc3QgYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZihsaW5rLmluZGV4T2YoIHBhdGgpPi0xfHwobGluaz09Jy8nJiZwYXRoPT0nL2luZGV4Jykpe1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2N1cicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgfVxuICAgIGNoYW5nZVN0eWxlKHR5cGUpe1xuICAgICAgICBPYmplY3QudmFsdWVzKFN0eWxlTWFwKS5tYXAoY2xhc3NOYW1lPT57XG4gICAgICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kb20uYWRkQ2xhc3MoU3R5bGVNYXBbdHlwZV0gfHwgU3R5bGVNYXBbJ2RlZmF1bHQnXSlcbiAgICB9XG4gICAgcHV0QXdheSgpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygnb3BlbicpLmFkZENsYXNzKCdwdXRBd2F5JylcbiAgICB9XG4gICAgb3Blbigpe1xuICAgICAgICB0aGlzLmRvbS5yZW1vdmVDbGFzcygncHV0QXdheScpLmFkZENsYXNzKCdvcGVuJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2l0ZUhlYWRlcigpIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vanMvaW5kZXguanMnXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2NzcydcbiIsIihmdW5jdGlvbigpe1xuICAgIFxufSkoKSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiXG5pbXBvcnQgXCJAbW9kdWxlcy9hbmltYXRlLmNzc1wiO1xuaW1wb3J0ICdAL2NvbW1vbi9zdHlsZS9fcHVibGljLnNjc3MnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9oZWFkZXIvaW5kZXguanMnO1xuaW1wb3J0ICdAL2NvbXBvbmVudC9sZXRzdGFsay9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vanMvaW5kZXguanMnO1xuXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4kKGZ1bmN0aW9uKCl7XG4gICAgaGVhZGVyLnNob3coKVxufSkiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=