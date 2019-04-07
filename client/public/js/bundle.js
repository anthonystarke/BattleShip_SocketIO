/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const LoadingView = __webpack_require__(/*! ./views/loading_view.js */ \"./client/src/views/loading_view.js\");\nconst MasterView = __webpack_require__(/*! ./views/master_view.js */ \"./client/src/views/master_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const masterDiv = document.querySelector('.gameWrapper');\n  const masterView = new MasterView(masterDiv);\n  masterView.bindEvents();\n\n  const loadingDiv = document.querySelector('.loadingMessage');\n  const loadingView = new LoadingView(loadingDiv);\n  loadingView.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/views/loading_view.js":
/*!******************************************!*\
  !*** ./client/src/views/loading_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const LoadingView = function(loadingDiv) {\n  this.loadingDiv = loadingDiv;\n}\n\nLoadingView.prototype.bindEvents = function () {\n  socket.on('game-ready',() => {\n    this.hideDiv();\n  })\n};\n\nLoadingView.prototype.hideDiv = function () {\n  this.loadingDiv.classList.add('hide');\n};\n\nmodule.exports = LoadingView;;\n\n\n//# sourceURL=webpack:///./client/src/views/loading_view.js?");

/***/ }),

/***/ "./client/src/views/master_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/master_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MasterView = function(masterDiv) {\n  this.masterDiv = masterDiv;\n}\n\nMasterView.prototype.bindEvents = function () {\n  socket.on('game-ready', () => {\n    this.removeHide();\n  })\n};\n\nMasterView.prototype.removeHide = function () {\n  this.masterDiv.classList.remove('hide')\n};\n\nmodule.exports = MasterView;\n\n\n//# sourceURL=webpack:///./client/src/views/master_view.js?");

/***/ })

/******/ });