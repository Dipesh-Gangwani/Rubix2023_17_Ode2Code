/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("var navbtn = document.getElementById('nav-btn');\nnavbtn.addEventListener('click', button);\n\nfunction button() {\n  document.getElementById(\"nav\").classList.toggle(\"active\");\n}\n\nvar slideIndex = 0;\nshowSlides();\n\nfunction showSlides() {\n  var i;\n  var slides = document.getElementsByClassName(\"slides\");\n  var dots = document.getElementsByClassName(\"dot\");\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  slideIndex++;\n\n  if (slideIndex > slides.length) {\n    slideIndex = 1;\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\n  }\n\n  slides[slideIndex - 1].style.display = \"block\";\n  dots[slideIndex - 1].className += \" active\";\n  setTimeout(showSlides, 2000);\n}\n\n//# sourceURL=webpack://babel-webpack/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;