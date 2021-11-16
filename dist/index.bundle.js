/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/common.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/common.css ***!
  \**************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dflex-row {\n  display: flex;\n}\n\n.dflex-flexend-center {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.dflex-column-alignCenter-justifyCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.dflex-row-wrap-center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n", "",{"version":3,"sources":["webpack://./src/common.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB","sourcesContent":[".dflex-row {\n  display: flex;\n}\n\n.dflex-flexend-center {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.dflex-column-alignCenter-justifyCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.dflex-row-wrap-center {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #012138;\n  --secondary-color: #f9f9f9;\n  --gradient-color: #024d83;\n  --light-color: #fff;\n  --main-font: \"Poppins\", arial, helvetica, sans-serif;\n  --title-font: \"Countryside\", sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: var(--main-font);\n  background:\n    radial-gradient(\n      ellipse farthest-corner at center top,\n      var(--gradient-color) 0%,\n      var(--primary-color) 100%\n    );\n  min-height: 100vh;\n}\n\n.header {\n  align-items: center;\n  justify-content: space-between;\n  position: unset;\n  width: 100%;\n  z-index: 3;\n  height: 0;\n  margin-bottom: 40px;\n}\n\n.max-width-header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  max-width: 1350px;\n  margin: auto;\n}\n\n.header .logo {\n  display: block;\n  float: left;\n  font-size: 27px;\n  padding: 10px 20px;\n  margin-top: 6.5px;\n  text-decoration: none;\n  color: var(--secondary-color);\n  font-style: normal;\n}\n\na {\n  color: #344563;\n  font-family: var(--main-font);\n  font-weight: 400;\n}\n\n.desktopMenu-up {\n  display: block;\n}\n\n.topnav {\n  width: fit-content;\n  font-family: var(--main-font);\n}\n\n.topnav a {\n  text-decoration: none;\n  font-size: 16px;\n  padding: 7px 16px;\n}\n\n.select-tag {\n  appearance: none;\n  outline: 0;\n  border: 0;\n  box-shadow: none;\n  flex: 1;\n  padding: 0 1em;\n  color: var(--light-color);\n  background-color: #0365ac;\n  background-image: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.select {\n  position: relative;\n  width: 20em;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n  margin-right: 20px;\n}\n\n.select::after {\n  content: \"\\25BC\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 1em;\n  background-color: #024e85;\n  transition: 0.25s all ease;\n  pointer-events: none;\n}\n\n/* Transition */\n.select:hover::after {\n  color: #29a3fb;\n}\n\n.banner {\n  width: 100%;\n  height: 65vh;\n  background-image: url(\"https://www.themealdb.com/images/category/chicken.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 230px;\n}\n\n.banner h1 {\n  font-size: 45px;\n  color: #dbdbdb;\n  font-family: var(--title-font);\n  height: 30%;\n  margin: 0;\n}\n\n.banner span {\n  height: 19%;\n  margin-top: 60px;\n  color: var(--secondary-color);\n}\n\n.innerAligment {\n  max-width: 550px;\n  min-width: 250px;\n  margin: 30px 30px -70px 30px;\n  text-align: center;\n  height: 140px;\n}\n\n.cards {\n  width: 100%;\n  margin: 0 auto;\n  grid-gap: 1rem;\n}\n\n.flex-card {\n  flex-wrap: wrap;\n  max-width: 100%;\n  transition-property: border-color, box-shadow;\n  transition-duration: 1.5s;\n}\n\n.align_images {\n  margin: auto;\n}\n\n.imagen_proyectos {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.text_child h2 {\n  font-weight: 700;\n  line-height: 35px;\n  margin: 15px 0 0 0;\n}\n\n.text_child p {\n  color: #344563;\n  word-break: normal;\n  max-width: 430px;\n}\n\n.text_child {\n  margin-left: 2%;\n}\n\n.card {\n  background-color: var(--light-color);\n  padding: 1rem;\n  margin: 0 2% 2% 2%;\n  width: 300px;\n  border: 2px solid #dfe1e6;\n  border-radius: 24px;\n}\n\n.gray_text {\n  color: gray;\n  margin-left: 13px;\n  font-size: 0.8rem;\n}\n\n.SeeCommentsButton {\n  border: 1px solid var(--primary-color);\n  border-radius: 8px;\n  box-sizing: border-box;\n  background: var(--light-color);\n  height: 48px;\n  margin-top: 25px;\n  margin-bottom: 19px;\n  color: var(--primary-color);\n  cursor: pointer;\n  align-self: flex-start;\n}\n\n.SeeCommentsButton:hover {\n  background: var(--gradient-color);\n  color: var(--light-color);\n  transition: 0.2s 0.1s;\n}\n\n.SeeCommentsButton:active {\n  background: var(--primary-color);\n  color: var(--light-color);\n  transition: 0s 0s;\n}\n\n.SeeCommentsButton span {\n  margin: 0 10px;\n  font-family: var(--main-font);\n  font-weight: 200;\n  font-size: 17px;\n  line-height: 24px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB;EACnB,oDAAoD;EACpD,uCAAuC;AACzC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,6BAA6B;EAC7B;;;;;KAKG;EACH,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,WAAW;EACX,UAAU;EACV,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,OAAO;EACP,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,0BAA0B;EAC1B,oBAAoB;AACtB;;AAEA,eAAe;AACf;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,8EAA8E;EAC9E,4BAA4B;EAC5B,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,8BAA8B;EAC9B,WAAW;EACX,SAAS;AACX;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,4BAA4B;EAC5B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,6CAA6C;EAC7C,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;EACtC,kBAAkB;EAClB,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["@import url(\"http://fonts.cdnfonts.com/css/countryside\");\n\n:root {\n  --primary-color: #012138;\n  --secondary-color: #f9f9f9;\n  --gradient-color: #024d83;\n  --light-color: #fff;\n  --main-font: \"Poppins\", arial, helvetica, sans-serif;\n  --title-font: \"Countryside\", sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  font-family: var(--main-font);\n  background:\n    radial-gradient(\n      ellipse farthest-corner at center top,\n      var(--gradient-color) 0%,\n      var(--primary-color) 100%\n    );\n  min-height: 100vh;\n}\n\n.header {\n  align-items: center;\n  justify-content: space-between;\n  position: unset;\n  width: 100%;\n  z-index: 3;\n  height: 0;\n  margin-bottom: 40px;\n}\n\n.max-width-header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  max-width: 1350px;\n  margin: auto;\n}\n\n.header .logo {\n  display: block;\n  float: left;\n  font-size: 27px;\n  padding: 10px 20px;\n  margin-top: 6.5px;\n  text-decoration: none;\n  color: var(--secondary-color);\n  font-style: normal;\n}\n\na {\n  color: #344563;\n  font-family: var(--main-font);\n  font-weight: 400;\n}\n\n.desktopMenu-up {\n  display: block;\n}\n\n.topnav {\n  width: fit-content;\n  font-family: var(--main-font);\n}\n\n.topnav a {\n  text-decoration: none;\n  font-size: 16px;\n  padding: 7px 16px;\n}\n\n.select-tag {\n  appearance: none;\n  outline: 0;\n  border: 0;\n  box-shadow: none;\n  flex: 1;\n  padding: 0 1em;\n  color: var(--light-color);\n  background-color: #0365ac;\n  background-image: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.select {\n  position: relative;\n  width: 20em;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n  margin-right: 20px;\n}\n\n.select::after {\n  content: \"\\25BC\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 1em;\n  background-color: #024e85;\n  transition: 0.25s all ease;\n  pointer-events: none;\n}\n\n/* Transition */\n.select:hover::after {\n  color: #29a3fb;\n}\n\n.banner {\n  width: 100%;\n  height: 65vh;\n  background-image: url(\"https://www.themealdb.com/images/category/chicken.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 230px;\n}\n\n.banner h1 {\n  font-size: 45px;\n  color: #dbdbdb;\n  font-family: var(--title-font);\n  height: 30%;\n  margin: 0;\n}\n\n.banner span {\n  height: 19%;\n  margin-top: 60px;\n  color: var(--secondary-color);\n}\n\n.innerAligment {\n  max-width: 550px;\n  min-width: 250px;\n  margin: 30px 30px -70px 30px;\n  text-align: center;\n  height: 140px;\n}\n\n.cards {\n  width: 100%;\n  margin: 0 auto;\n  grid-gap: 1rem;\n}\n\n.flex-card {\n  flex-wrap: wrap;\n  max-width: 100%;\n  transition-property: border-color, box-shadow;\n  transition-duration: 1.5s;\n}\n\n.align_images {\n  margin: auto;\n}\n\n.imagen_proyectos {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.text_child h2 {\n  font-weight: 700;\n  line-height: 35px;\n  margin: 15px 0 0 0;\n}\n\n.text_child p {\n  color: #344563;\n  word-break: normal;\n  max-width: 430px;\n}\n\n.text_child {\n  margin-left: 2%;\n}\n\n.card {\n  background-color: var(--light-color);\n  padding: 1rem;\n  margin: 0 2% 2% 2%;\n  width: 300px;\n  border: 2px solid #dfe1e6;\n  border-radius: 24px;\n}\n\n.gray_text {\n  color: gray;\n  margin-left: 13px;\n  font-size: 0.8rem;\n}\n\n.SeeCommentsButton {\n  border: 1px solid var(--primary-color);\n  border-radius: 8px;\n  box-sizing: border-box;\n  background: var(--light-color);\n  height: 48px;\n  margin-top: 25px;\n  margin-bottom: 19px;\n  color: var(--primary-color);\n  cursor: pointer;\n  align-self: flex-start;\n}\n\n.SeeCommentsButton:hover {\n  background: var(--gradient-color);\n  color: var(--light-color);\n  transition: 0.2s 0.1s;\n}\n\n.SeeCommentsButton:active {\n  background: var(--primary-color);\n  color: var(--light-color);\n  transition: 0s 0s;\n}\n\n.SeeCommentsButton span {\n  margin: 0 10px;\n  font-family: var(--main-font);\n  font-weight: 200;\n  font-size: 17px;\n  line-height: 24px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/common.css":
/*!************************!*\
  !*** ./src/common.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ "./node_modules/css-loader/dist/cjs.js!./src/common.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.css */ "./src/common.css");



const foodDishes = document.getElementById('foodDishes');
const arrayOfDishes = [
  {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52773',
    strMeal: 'Honey Teriyaki Salmon',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//xxyupu1468262513.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52774',
    strMeal: 'Pad See Ew',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//uuuspp1468263334.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52775',
    strMeal: 'Vegan Lasagna',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//rvxxuy1468312893.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52776',
    strMeal: 'Chocolate Gateau',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//tqtywx1468317395.jpg',
    strTags: ['Meat', 'Casserole'],
  },
  {
    idMeal: '52777',
    strMeal: 'Mediterranean Pasta Salad',
    strMealThumb: 'https://www.themealdb.com//images//media//meals//wvqpwt1468339226.jpg',
    strTags: ['Meat', 'Casserole'],
  },

];

for (let x = 0; x < arrayOfDishes.length; x += 1) {
  foodDishes.innerHTML += `<div class="card division flex-card dflex-row">
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
          
        <div class="dflex-row">
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