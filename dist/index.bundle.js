/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://fonts.cdnfonts.com/css/countryside);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n--primary-color : #012138;\r\n--secondary-color: #f9f9f9;\r\n--gradient-color: #024d83;\r\n\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  background: radial-gradient(\r\n    ellipse farthest-corner at center top,\r\n    var(--gradient-color) 0%,\r\n    var(--primary-color) 100%\r\n  );\r\n  min-height: 100vh;\r\n}\r\n\r\n.header {\r\n  /* display: flex; */\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  position: unset;\r\n  /* background-color: #fff; */\r\n  /* box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%); */\r\n  width: 100%;\r\n  z-index: 3;\r\n  height: 0px;\r\n  margin-bottom: 40px;\r\n  /* margin-bottom: 100px; */\r\n}\r\n\r\n.max-width-header {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  max-width: 1350px;\r\n  margin: auto;\r\n}\r\n\r\n.header .logo {\r\n  display: block;\r\n  float: left;\r\n  font-size: 27px;\r\n  padding: 10px 20px;\r\n  margin-top: 6.5px;\r\n  text-decoration: none;\r\n  color: var(--secondary-color);\r\n  font-style: normal;\r\n}\r\n\r\na {\r\n  color: #344563;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n.desktopMenu-up {\r\n  display: block;\r\n}\r\n\r\n.topnav {\r\n  width: fit-content;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav a {\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  padding: 7px 16px;\r\n}\r\n\r\n.select-tag {\r\n  appearance: none;\r\n  outline: 0;\r\n  border: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: #fff;\r\n  background-color: #0365ac;\r\n  background-image: none;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n\r\n.select {\r\n  position: relative;\r\n  display: flex;\r\n  width: 20em;\r\n  height: 3em;\r\n  border-radius: 0.25em;\r\n  overflow: hidden;\r\n  margin-right: 20px;\r\n}\r\n\r\n.select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: #024e85;\r\n  transition: 0.25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\n.select:hover::after {\r\n  color: #29a3fb;\r\n}\r\n\r\n.banner {\r\n  width: 100%;\r\n  height: 65vh;\r\n  background-image: url(\"https://www.themealdb.com/images/category/chicken.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  margin-bottom: 230px;\r\n}\r\n\r\n.banner h1 {\r\n  font-size: 45px;\r\n  color: #dbdbdb;\r\n  font-family: \"Countryside\", sans-serif;\r\n  height: 30%;\r\n  margin: 0;\r\n}\r\n\r\n.banner span {\r\n  height: 19%;\r\n  margin-top: 60px;\r\n  color: var(--secondary-color);\r\n}\r\n.innerAligment {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  max-width: 550px;\r\n  min-width: 250px;\r\n  margin: 30px;\r\n  text-align: center;\r\n  margin-bottom: -70px;\r\n  height: 140px;\r\n}\r\n\r\n.cards {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  grid-gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n.flex-card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  max-width: 100%;\r\n  transition-property: border-color, box-shadow;\r\n  transition-duration: 1.5s;\r\n}\r\n.align_images {\r\n  margin: auto;\r\n}\r\n\r\n.imagen_proyectos {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.text_child h2 {\r\n  font-weight: 700;\r\n  line-height: 25px;\r\n  line-height: 35px;\r\n  margin: 0px;\r\n      margin-top: 15px;\r\n}\r\n\r\n.text_child p {\r\n  color: #344563;\r\n  word-break: normal;\r\n\r\n  /* max-width: fit-content; */\r\n  max-width: 430px;\r\n}\r\n\r\n.text_child {\r\n  margin-left: 2%;\r\n}\r\n\r\n.flex_child {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.card {\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n  margin-left: 4%;\r\n  margin-right: 4%;\r\n  margin: 0 2% 0px 2%;\r\n  width: 300px;\r\n  border: 2px solid #dfe1e6;\r\n  border-radius: 24px;\r\n}\r\n\r\n.flex_child {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.gray_text {\r\n  color: gray;\r\n  margin-left: 13px;\r\n  margin-top: 2.9px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.SeeCommentsButton {\r\n  border: 1px solid var(--primary-color);\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  background: #fff;\r\n  height: 48px;\r\n  margin-top: 25px;\r\n  margin-bottom: 19px;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n  align-self: flex-start;\r\n}\r\n\r\n.SeeCommentsButton:hover {\r\n  background: var(--gradient-color);\r\n  color: #fff;\r\n  transition: 0.2s 0.1s;\r\n}\r\n\r\n.SeeCommentsButton:active {\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  transition: 0s 0s;\r\n}\r\n\r\n.SeeCommentsButton span {\r\n  flex: none;\r\n  order: 0;\r\n  flex-grow: 0;\r\n  margin: 0 10px;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"http://fonts.cdnfonts.com/css/countryside\");\r\n\r\n:root{\r\n--primary-color : #012138;\r\n--secondary-color: #f9f9f9;\r\n--gradient-color: #024d83;\r\n\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  background: radial-gradient(\r\n    ellipse farthest-corner at center top,\r\n    var(--gradient-color) 0%,\r\n    var(--primary-color) 100%\r\n  );\r\n  min-height: 100vh;\r\n}\r\n\r\n.header {\r\n  /* display: flex; */\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  position: unset;\r\n  /* background-color: #fff; */\r\n  /* box-shadow: 1px 1px 4px 0 rgb(0 0 0 / 10%); */\r\n  width: 100%;\r\n  z-index: 3;\r\n  height: 0px;\r\n  margin-bottom: 40px;\r\n  /* margin-bottom: 100px; */\r\n}\r\n\r\n.max-width-header {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  max-width: 1350px;\r\n  margin: auto;\r\n}\r\n\r\n.header .logo {\r\n  display: block;\r\n  float: left;\r\n  font-size: 27px;\r\n  padding: 10px 20px;\r\n  margin-top: 6.5px;\r\n  text-decoration: none;\r\n  color: var(--secondary-color);\r\n  font-style: normal;\r\n}\r\n\r\na {\r\n  color: #344563;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\n.desktopMenu-up {\r\n  display: block;\r\n}\r\n\r\n.topnav {\r\n  width: fit-content;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.topnav a {\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  padding: 7px 16px;\r\n}\r\n\r\n.select-tag {\r\n  appearance: none;\r\n  outline: 0;\r\n  border: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: #fff;\r\n  background-color: #0365ac;\r\n  background-image: none;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n\r\n.select {\r\n  position: relative;\r\n  display: flex;\r\n  width: 20em;\r\n  height: 3em;\r\n  border-radius: 0.25em;\r\n  overflow: hidden;\r\n  margin-right: 20px;\r\n}\r\n\r\n.select::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: #024e85;\r\n  transition: 0.25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\n.select:hover::after {\r\n  color: #29a3fb;\r\n}\r\n\r\n.banner {\r\n  width: 100%;\r\n  height: 65vh;\r\n  background-image: url(\"https://www.themealdb.com/images/category/chicken.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  margin-bottom: 230px;\r\n}\r\n\r\n.banner h1 {\r\n  font-size: 45px;\r\n  color: #dbdbdb;\r\n  font-family: \"Countryside\", sans-serif;\r\n  height: 30%;\r\n  margin: 0;\r\n}\r\n\r\n.banner span {\r\n  height: 19%;\r\n  margin-top: 60px;\r\n  color: var(--secondary-color);\r\n}\r\n.innerAligment {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  max-width: 550px;\r\n  min-width: 250px;\r\n  margin: 30px;\r\n  text-align: center;\r\n  margin-bottom: -70px;\r\n  height: 140px;\r\n}\r\n\r\n.cards {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  grid-gap: 1rem;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n.flex-card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  max-width: 100%;\r\n  transition-property: border-color, box-shadow;\r\n  transition-duration: 1.5s;\r\n}\r\n.align_images {\r\n  margin: auto;\r\n}\r\n\r\n.imagen_proyectos {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.text_child h2 {\r\n  font-weight: 700;\r\n  line-height: 25px;\r\n  line-height: 35px;\r\n  margin: 0px;\r\n      margin-top: 15px;\r\n}\r\n\r\n.text_child p {\r\n  color: #344563;\r\n  word-break: normal;\r\n\r\n  /* max-width: fit-content; */\r\n  max-width: 430px;\r\n}\r\n\r\n.text_child {\r\n  margin-left: 2%;\r\n}\r\n\r\n.flex_child {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.card {\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n  margin-left: 4%;\r\n  margin-right: 4%;\r\n  margin: 0 2% 0px 2%;\r\n  width: 300px;\r\n  border: 2px solid #dfe1e6;\r\n  border-radius: 24px;\r\n}\r\n\r\n.flex_child {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.gray_text {\r\n  color: gray;\r\n  margin-left: 13px;\r\n  margin-top: 2.9px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.SeeCommentsButton {\r\n  border: 1px solid var(--primary-color);\r\n  border-radius: 8px;\r\n  box-sizing: border-box;\r\n  background: #fff;\r\n  height: 48px;\r\n  margin-top: 25px;\r\n  margin-bottom: 19px;\r\n  color: var(--primary-color);\r\n  cursor: pointer;\r\n  align-self: flex-start;\r\n}\r\n\r\n.SeeCommentsButton:hover {\r\n  background: var(--gradient-color);\r\n  color: #fff;\r\n  transition: 0.2s 0.1s;\r\n}\r\n\r\n.SeeCommentsButton:active {\r\n  background: var(--primary-color);\r\n  color: #fff;\r\n  transition: 0s 0s;\r\n}\r\n\r\n.SeeCommentsButton span {\r\n  flex: none;\r\n  order: 0;\r\n  flex-grow: 0;\r\n  margin: 0 10px;\r\n  font-family: \"Poppins\", Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n  font-size: 17px;\r\n  line-height: 24px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const foodDishes = document.getElementById('foodDishes');
const arrayOfDishes = [
  {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strTags: ["Meat", "Casserole"],
     },
  {
    idMeal: '52773',
    strMeal: 'Honey Teriyaki Salmon',
    strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg",
    strTags: ["Meat", "Casserole"],
     },
  {
    idMeal: '52774',
    strMeal: 'Pad See Ew',
    strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/uuuspp1468263334.jpg",
    strTags: ["Meat", "Casserole"],
     },
  {
    idMeal: '52775',
    strMeal: 'Vegan Lasagna',
    strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/rvxxuy1468312893.jpg",
    strTags: ["Meat", "Casserole"],
     },
  {
    idMeal: '52776',
    strMeal: 'Chocolate Gateau',
    strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/tqtywx1468317395.jpg",
    strTags: ["Meat", "Casserole"],
     },
  {
    idMeal: '52777',
    strMeal: 'Mediterranean Pasta Salad',
    strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg",
    strTags: ["Meat", "Casserole"],
     },
  
  
];

for (let x = 0; x < arrayOfDishes.length; x += 1) {
    foodDishes.innerHTML += `<div class="card division flex-card">
      <div class="align_images">
        <img
          src="${arrayOfDishes[x].strMealThumb}"
          width="554"
          class="imagen_proyectos"
          alt=""
        />
      </div>
      <div class="text_child">
          <h2>${arrayOfDishes[x].strMeal}</h2>
          
        <div class="flex_child">
          <span class="gray_text">• ${arrayOfDishes[x].strTags[0]} </span>
          <span class="gray_text">• ${arrayOfDishes[x].strTags[1]}</span>
        </div>
          <button type="button" onclick="toggleModal(${x})" class="SeeCommentsButton">
            <span>Comments </span>
          </button>
        </div>
    </div>`;
  }
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map