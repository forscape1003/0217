/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// var a = require('./demo');\n// console.log(a);\n\n// for(let i=0;i<3;i++){\n//     console.log(i);\n// }\n\n// let [a,b,c] = [8910];\n// console.log(a,b,c);\n\n// let res ={\n//     a:2,\n//     b:4,\n//     c:6\n// }\n//\n// let {a,b} = res;\n// console.log(a,b);\n\n// let a = (x) => x+5;\n// console.log(a(5));\n\n// var a = (name,age) =>({name:name,age:age});\n// console.log(a('tian',18)); //返回一个对象 用括号包裹起来 区别于多条语句\n//\n// var b = () => {  //执行多条语句，如果有返回值，必须手写return\n//     console.log('aaaa');\n//     alert('bbbb');\n//     return 3\n// }\n// console.log(b());\n\n// function a(name,age){\n//     return {\n//         name:name;\n//         age:age;\n//     }\n// }\n\n//对对象写法的一个优化\n\n// let a = 3;\n// let b = 5;\n// let obj ={\n//     a,\n//     say(){\n//         console.log('我是ES6的写法')\n//     }\n// }\n// console.log(obj);\n\n// function add(x=5,y=10){\n//     return x+y;\n// }\n// console.log(add(5,5,3));\n//\n// let add1=(x=5,y=10) =>x+y;\n// console.log(add(10,10));\n\n//纯字符串用反引号包裹，其中有变量用${}包裹起来\n// let age = 11;\n// let name ='tian';\n// console.log('姓名是'+name+'的年龄是'+age+'岁');\n// console.log(`姓名是${name}的年龄是${age}岁`);\n\n//数组\n// function restFunc(a,...rest){\n//     console.log(a);\n//     console.log(rest);\n// }\n// restFunc(2,3,4);\n\n// let restFunc=(a,...rest)=>console.log(rest);\n// restFunc(5,6,7,8)\n\n//ruduce 工作原理\n// function add(...x){\n//     return x.reduce((m,n)=>m+n);\n// }\n// console.log(add(1,2,3));\n//\n// let addd=(...rest)=>rest.reduce((m,n)=>m+n);\n// console.log(addd(3,4,5));\n\n//回调函数\n// function a(cb){\n//     cb(\"aaa\");\n// }\n// a(\n//     function(str){\n//         alert(str)\n//     }\n// )\n\n//spread 扩展操作\n// var people =['tian','dong','xue'];\n// function sayHello(people1,people2,people3){\n//     console.log(`hello ${people1},${people2},${people3}`);\n// }\n// sayHello(...people);\n\n//map方法\n// let arr = [5,6,7];\n// let newArr = arr.map(function(m,n,q){\n//     return m+1;\n// })\n// console.log(newArr);\n// console.log(arr);\n\n// let [arr,newArr] = [[7,7,8]];\n// newArr = arr.map( (m) =>m+1);\n// console.log(newArr);\n\n//forEach方法\n// let arr = [7,8,9];\n// arr.forEach(function(m){\n//      console.log(m+1);\n//  });\n\n//filter方法\n// let arr = [5,6,7,8];\n// let results = arr.filter(function(m,n,q){\n//     return m>6;\n// });\n// console.log('results======'+results);\n\nvar _ref = [[9, 10, 13, 45]],\n    arr = _ref[0],\n    results = _ref[1];\n\nresults = arr.filter(function (m) {\n  return m > 10;\n});\nconsole.log('results======' + results);\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?");

/***/ })
/******/ ]);