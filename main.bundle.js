webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ":host {\n  font-family: Roboto;\n}\n\napp-fullscreen {\n  display: none;\n}\n\n@media screen and (max-width: 767px) {\n  app-fullscreen {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"showToast()\">Show toast</button>\n\n<app-fullscreen background=\"/assets/img/bg.png\">\n  <p>Для вашего устройства следует скачать приложение</p>\n  <img src=\"/assets/img/google-play-badge.png\" alt=\"\"> <br>\n  <img src=\"/assets/img/app-store-badge.png\" alt=\"\">\n</app-fullscreen>\n<app-toast>111</app-toast>\n<app-reference></app-reference>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_toast_toast_service__ = __webpack_require__("../../../../../src/app/popup/toast/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastService) {
        this.toastService = toastService;
        this.toast = false;
    }
    AppComponent.prototype.showToast = function () {
        this.toastService.show();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__popup_toast_toast_service__["a" /* ToastService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popup_popup_module__ = __webpack_require__("../../../../../src/app/popup/popup.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([{ path: '', component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] }]),
                __WEBPACK_IMPORTED_MODULE_5__popup_popup_module__["a" /* PopupModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/popup/fullscreen/fullscreen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullscreen {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9000;\n  background-size: cover;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/fullscreen/fullscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fullscreen\" [ngStyle]=\"{'background-image': 'url(' + background + ')'}\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/popup/fullscreen/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullscreenComponent = (function () {
    function FullscreenComponent() {
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FullscreenComponent.prototype, "background", void 0);
    FullscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fullscreen',
            template: __webpack_require__("../../../../../src/app/popup/fullscreen/fullscreen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popup/fullscreen/fullscreen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popup/popup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fullscreen_fullscreen_component__ = __webpack_require__("../../../../../src/app/popup/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_toast_component__ = __webpack_require__("../../../../../src/app/popup/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reference_reference_component__ = __webpack_require__("../../../../../src/app/popup/reference/reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast_service__ = __webpack_require__("../../../../../src/app/popup/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reference_reference_service__ = __webpack_require__("../../../../../src/app/popup/reference/reference.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PopupModule = (function () {
    function PopupModule() {
    }
    PopupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fullscreen_fullscreen_component__["a" /* FullscreenComponent */], __WEBPACK_IMPORTED_MODULE_3__toast_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_4__reference_reference_component__["a" /* ReferenceComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fullscreen_fullscreen_component__["a" /* FullscreenComponent */], __WEBPACK_IMPORTED_MODULE_3__toast_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_4__reference_reference_component__["a" /* ReferenceComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__toast_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_6__reference_reference_service__["a" /* ReferenceService */]]
        })
    ], PopupModule);
    return PopupModule;
}());



/***/ }),

/***/ "../../../../../src/app/popup/reference/reference.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"models.open\">\n  <div class=\"reference__backdrop\" (click)=\"close()\"></div>\n  <div class=\"reference__body\">\n    <h3>{{ models.reference.title }}</h3>\n    <p [innerHtml]=\"models.reference.body\"></p>\n    <div class=\"reference__input-group\">\n      <input id=\"dontShowThisReference\" type=\"checkbox\" (change)=\"dontShowThisReference()\">\n      <label for=\"dontShowThisReference\">Не показывать это сообщение</label>\n    </div>\n    <div class=\"reference__input-group\">\n      <input id=\"dontShowAnyReference\" type=\"checkbox\" (change)=\"dontShowAnyReference()\">\n      <label for=\"dontShowAnyReference\">Не показывать все сообщения</label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/popup/reference/reference.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .reference__backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9001; }\n\n:host .reference__body {\n  position: fixed;\n  width: 420px;\n  max-height: 630px;\n  background: #fafafa;\n  z-index: 9001;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  border: none;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  color: #4d0095; }\n  :host .reference__body:after, :host .reference__body:before {\n    bottom: 100%;\n    right: 0;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none; }\n  :host .reference__body:after {\n    border-color: rgba(250, 250, 250, 0);\n    border-bottom-color: #fafafa;\n    border-width: 30px;\n    margin-left: -30px; }\n  :host .reference__body:before {\n    border-color: rgba(190, 190, 190, 0);\n    border-bottom-color: #bebebe;\n    border-width: 33px;\n    margin-left: -33px;\n    right: -3px; }\n  :host .reference__body .reference__input-group {\n    width: 100%;\n    float: left; }\n    :host .reference__body .reference__input-group label {\n      float: left; }\n    :host .reference__body .reference__input-group input {\n      float: left;\n      width: auto;\n      margin-right: 10px; }\n  :host .reference__body h3 {\n    font-size: 20px;\n    font-weight: normal;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n    margin: 0 0 15px 0;\n    padding: 20px; }\n  :host .reference__body p {\n    font-size: 16px;\n    padding: 20px; }\n  :host .reference__body .reference__input-group {\n    padding: 0 20px; }\n  :host .reference__body .reference__input-group:last-child {\n    padding-bottom: 20px; }\n  :host .reference__body label {\n    position: relative;\n    padding-left: 24px; }\n    :host .reference__body label:before {\n      content: \"\";\n      border: 3px solid #d8d8d8;\n      border-radius: 3px;\n      background: #fff;\n      font-size: 12px;\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      left: 0;\n      top: -2px; }\n  :host .reference__body input {\n    display: none; }\n  :host .reference__body input:checked + label:after {\n    content: \"\\2714\";\n    color: #4d0095;\n    font-size: 23px;\n    position: absolute;\n    top: -8px;\n    left: 4px; }\n  :host .reference__body:after, :host .reference__body:before {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/reference/reference.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reference_service__ = __webpack_require__("../../../../../src/app/popup/reference/reference.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReferenceComponent = (function () {
    function ReferenceComponent(service) {
        this.service = service;
    }
    ReferenceComponent.prototype.ngOnInit = function () {
        this.service.init();
        this.models = this.service.models;
    };
    ReferenceComponent.prototype.dontShowAnyReference = function () {
        this.service.dontShowAnyReference();
    };
    ReferenceComponent.prototype.dontShowThisReference = function () {
        this.service.dontShowThisReference();
    };
    ReferenceComponent.prototype.close = function () {
        this.service.close();
    };
    ReferenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reference',
            template: __webpack_require__("../../../../../src/app/popup/reference/reference.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popup/reference/reference.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__reference_service__["a" /* ReferenceService */]])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popup/reference/reference.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReferenceService = (function () {
    function ReferenceService(router, http, sanitizer) {
        this.router = router;
        this.http = http;
        this.sanitizer = sanitizer;
        this.models = {
            first: true,
            showThis: true,
            showAny: true,
            open: false,
            reference: {},
            references: []
        };
    }
    ReferenceService.prototype.init = function () {
        var _this = this;
        if (this.models.first) {
            this.http.get('/assets/json/reference.json').subscribe(function (r) {
                _this.models.references = r;
                _this.show(_this.find());
            });
            this.router.events.subscribe(function (e) {
                if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                    _this.show(_this.find());
                }
            });
            this.models.first = false;
        }
    };
    ReferenceService.prototype.dontShowThisReference = function () {
        var references = JSON.parse(localStorage.getItem('references'));
        this.models.showThis = !this.models.showThis;
        if (references === null) {
            references = [];
        }
        if (this.find()) {
            references.push(this.router.url);
        }
        if (!this.find()) {
            var nextReferences = [];
            for (var i in references) {
                if (references[i] !== this.router.url) {
                    nextReferences.push(references[i]);
                }
            }
            references = nextReferences;
        }
        localStorage.setItem('references', JSON.stringify(references));
    };
    ReferenceService.prototype.dontShowAnyReference = function () {
        var references = [];
        this.models.showAny = !this.models.showAny;
        if (this.models.showAny) {
            references = [];
        }
        if (!this.models.showAny) {
            references = ['*'];
        }
        localStorage.setItem('references', JSON.stringify(references));
    };
    ReferenceService.prototype.close = function () {
        this.models.open = false;
    };
    ReferenceService.prototype.find = function () {
        var references = JSON.parse(localStorage.getItem('references'));
        var result = false;
        var reference = null;
        if (references == null) {
            references = [];
        }
        for (var _i = 0, _a = this.models.references; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.route === this.router.url) {
                result = true;
                reference = item;
            }
        }
        for (var _b = 0, references_1 = references; _b < references_1.length; _b++) {
            var item = references_1[_b];
            if (item === this.router.url) {
                result = false;
            }
            if (item === '*') {
                result = false;
            }
        }
        if (result) {
            result = reference;
        }
        return result;
    };
    ReferenceService.prototype.show = function (reference) {
        if (reference) {
            this.models.reference = {
                title: reference.title,
                body: this.sanitizer.bypassSecurityTrustHtml(reference.body)
            };
            this.models.open = true;
        }
    };
    ReferenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ReferenceService);
    return ReferenceService;
}());



/***/ }),

/***/ "../../../../../src/app/popup/toast/toast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  display: block;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  width: 320px;\n  height: 35px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n  z-index: 2;\n  opacity: 0;\n  transition: all 1s;\n  color: #fff;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\np.show {\n   opacity: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<p [ngClass]=\"{show: models.show}\"><ng-content></ng-content></p>\n"

/***/ }),

/***/ "../../../../../src/app/popup/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__("../../../../../src/app/popup/toast/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastComponent = (function () {
    function ToastComponent(service) {
        this.service = service;
    }
    ToastComponent.prototype.ngOnInit = function () {
        this.models = this.service.models;
    };
    ToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toast',
            template: __webpack_require__("../../../../../src/app/popup/toast/toast.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popup/toast/toast.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "../../../../../src/app/popup/toast/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastService = (function () {
    function ToastService() {
        this.models = {
            show: false
        };
    }
    ToastService.prototype.show = function () {
        var _this = this;
        this.models.show = true;
        setTimeout(function () {
            _this.models.show = false;
        }, 5000);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map