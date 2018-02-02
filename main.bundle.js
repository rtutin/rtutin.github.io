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
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  padding: 10px;\n  color: #505050;\n}\n\narticle {\n  width: 100%;\n  border: solid 1px #eee;\n  border-radius: 3px;\n  padding: 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  border-bottom: solid 1px #eee;\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\napp-fullscreen {\n  display: none;\n}\n\n.code {\n  border: solid 1px #eee;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.code header {\n  padding: 10px;\n  background: #eeeeee;\n}\n\n.code pre {\n  padding: 10px;\n  margin: 0;\n}\n\n@media screen and (max-width: 767px) {\n  app-fullscreen {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>sandbox</h1>\n</header>\n\n<article>\n  <h2>ngx-popup</h2>\n  <!-------------------------------------------------------------------------->\n  <h3>install</h3>\n  <pre>npm install --save ngx-popup</pre>\n  <!-------------------------------------------------------------------------->\n  <h3>import</h3>\n  <div class=\"code\">\n    <header>src/app/app.module.ts</header>\n    <pre>import {{ '{' }} PopupModule {{ '}' }} from 'ngx-popup';\n\n@NgModule({{ '{' }}\n  imports: [\n    PopupModule\n  ]\n})\nexport class AppModule {{ '{' }} {{ '}' }}</pre>\n  </div>\n  <!-------------------------------------------------------------------------->\n  <h3>fullscreen popup</h3>\n  <div class=\"code\">\n    <header>src/app/app.component.html</header>\n    <pre>&lt;app-fullscreen background=\"/assets/img/bg.png\"&gt;\n  &lt;p&gt;Для вашего устройства следует скачать приложение&lt;/p&gt;\n  &lt;img src=\"/assets/img/google-play-badge.png\" alt=\"\"&gt; &lt;br&gt;\n  &lt;img src=\"/assets/img/app-store-badge.png\" alt=\"\"&gt;\n&lt;/app-fullscreen&gt;</pre>\n  </div>\n  <div class=\"code\">\n    <header>src/app/app.component.css</header>\n    <pre>app-fullscreen {{ '{' }}\n  display: none;\n{{ '}' }}\n\n@media screen and (max-width: 767px) {{ '{' }}\n  app-fullscreen {{ '{' }}\n    display: flex;\n  {{ '}' }}\n{{ '}' }}</pre>\n  </div>\n  <div class=\"code\">\n    <header>example</header>\n    <pre>minimize window less than 768px</pre>\n  </div>\n  <!-------------------------------------------------------------------------->\n  <h3>toast</h3>\n  <div class=\"code\">\n    <header>src/app/app.module.ts</header>\n    <pre>import {{ '{' }} ToastService {{ '}' }} from 'ngx-popup';\n\n@NgModule( {{ '{' }}\n  providers: [ToastService]\n})\nexport class AppModule {{ '{' }} {{ '}' }}\n</pre>\n  </div>\n  <div class=\"code\">\n    <header>src/app/app.component.ts</header>\n    <pre>import {{ '{' }} ToastService {{ '}' }} from 'ngx-popup';\n\nexport class AppComponent {{ '{' }}\n  constructor(private toastService: ToastService) {{ '{' }}{{ '}' }}\n\n  public showToast() {{ '{' }}\n    this.toastService.show();\n  {{ '}' }}\n{{ '}' }}</pre>\n  </div>\n  <div class=\"code\">\n    <header>src/app/app.component.html</header>\n    <pre>&lt;button (click)=\"showToast()\"&gt;Show toast&lt;/button&gt;\n&lt;app-toast&gt;toast inner&lt;/app-toast&gt;</pre>\n  </div>\n  <div class=\"code\">\n    <header>example</header>\n    <pre>TODO: set position: fixed for toasts\n<button (click)=\"showToast()\">Show toast</button></pre>\n  </div>\n  <!-------------------------------------------------------------------------->\n  <h3>reference</h3>\n  <div class=\"code\">\n    <header>src/app/app.module.ts</header>\n    <pre>import {{ '{' }} ReferenceService {{ '}' }} from 'ngx-popup';\n\n@NgModule( {{ '{' }}\n  providers: [ReferenceService]\n})\nexport class AppModule {{ '{' }} {{ '}' }}\n</pre>\n  </div>\n  <div class=\"code\">\n    <header>src/assets/json/reference.json</header>\n    <pre>[\n  {{ '{' }}\n    \"route\": \"/\",\n    \"title\": \"Title\",\n    \"body\": \"it's root\"\n  {{ '}' }}\n]\n</pre>\n  </div>\n  <div class=\"code\">\n    <header>src/app/app.component.html</header>\n    <pre>&lt;app-reference&gt;&lt;/app-reference&gt;</pre>\n  </div>\n  <div class=\"code\">\n    <header>example</header>\n    <pre>clear local storage, reload page and look to top-right</pre>\n  </div>\n  <!-------------------------------------------------------------------------->\n</article>\n\n<app-fullscreen background=\"/assets/img/bg.png\">\n  <p>Для вашего устройства следует скачать приложение</p>\n  <img src=\"/assets/img/google-play-badge.png\" alt=\"\"> <br>\n  <img src=\"/assets/img/app-store-badge.png\" alt=\"\">\n</app-fullscreen>\n<app-toast>toast inner</app-toast>\n<app-reference></app-reference>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_popup__ = __webpack_require__("../../../../ngx-popup/ngx-popup.es5.js");
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
    }
    AppComponent.prototype.showToast = function () {
        this.toastService.show();
    };
    AppComponent.prototype.allowReference = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_popup__["c" /* ToastService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_popup__ = __webpack_require__("../../../../ngx-popup/ngx-popup.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([{ path: '', component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] }]),
                __WEBPACK_IMPORTED_MODULE_2_ngx_popup__["a" /* PopupModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_popup__["c" /* ToastService */], __WEBPACK_IMPORTED_MODULE_2_ngx_popup__["b" /* ReferenceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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