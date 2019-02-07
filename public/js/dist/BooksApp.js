(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        BooksApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/index.js", "vendors~BooksApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/AllBooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBooks; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass AllBooks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "all-books"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "book-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "book",\n      style: {\n        backgroundImage: `url(\'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/X-Men_v1_141.jpg/220px-X-Men_v1_141.jpg\')`\n      }\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/AllBooks.js?');
    },
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AllBooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllBooks.js */ "./assets/js/components/AllBooks.js");\n/* harmony import */ var _MyList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyList.js */ "./assets/js/components/MyList.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "approot"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "open-list"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-bars"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBooks_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyList_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Modal.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "modal"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-modal"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-times"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-grid"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "images"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cover",\n      style: {\n        backgroundImage: `url(\'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/X-Men_v1_141.jpg/220px-X-Men_v1_141.jpg\')`\n      }\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Author:"), "Chris Claremont"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Category:"), "Graphic Novel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Published:"), "1981"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n      className: "review"\n    }, "\\"Days of Future Past\\" is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141\\u2013142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps.")))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Modal.js?');
    },
    "./assets/js/components/MyList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass MyList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "myList"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My List of Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Harry Potter ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "delete-btn"\n    }, "Delete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-list"\n    }, "Close List"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/MyList.js?');
    },
    "./assets/js/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.js */ "./assets/js/components/App.js");\n/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal.js */ "./assets/js/components/Modal.js");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), document.getElementById(\'app\'));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), document.getElementById(\'modalroot\'));\n\n//# sourceURL=webpack:///./assets/js/index.js?');
    }
});