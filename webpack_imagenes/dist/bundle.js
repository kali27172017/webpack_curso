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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function RenderDom(element) {
   document.body.appendChild(element);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function createDom(men, elemt) {
    var elemento = document.createElement(elemt);
    elemento.src = men;
    return elemento;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _message = __webpack_require__(4);

var _create = __webpack_require__(1);

var _create2 = _interopRequireDefault(_create);

var _render = __webpack_require__(0);

var _render2 = _interopRequireDefault(_render);

var _leo = __webpack_require__(5);

var _leo2 = _interopRequireDefault(_leo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('HOLA MUNDO');
var imagen = (0, _create2.default)(_leo2.default, 'img');
(0, _render2.default)(imagen);
(0, _message.delayedMessage)();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(0);

var _render2 = _interopRequireDefault(_render);

var _create = __webpack_require__(1);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitTime = new Promise(function (todoOk, todoMal) {
   setTimeout(function () {
      todoOk('Han pasado tres segundos');
   }, 3000);
});

module.exports = {
   mensaje: 'HOLA MUNDO FELIZ',
   delayedMessage: async function delayedMessage() {
      var men = await waitTime;
      var ele = (0, _create2.default)(men, 'p');
      //const element = document.createElement('p')
      //element.textContent = men

      (0, _render2.default)(ele);
   }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
/******/ ]);