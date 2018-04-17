webpackJsonp([35],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckEmailPageModule", function() { return CheckEmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_email__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckEmailPageModule = /** @class */ (function () {
    function CheckEmailPageModule() {
    }
    CheckEmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_email__["a" /* CheckEmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_email__["a" /* CheckEmailPage */]),
            ],
        })
    ], CheckEmailPageModule);
    return CheckEmailPageModule;
}());

//# sourceMappingURL=check-email.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckEmailPage = /** @class */ (function () {
    function CheckEmailPage(navCtrl, navParams, auth, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loading = loading;
        this.code = '';
    }
    CheckEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckEmailPage');
    };
    CheckEmailPage.prototype.validate = function () {
        var _this = this;
        this.loading.show('validate');
        this.auth.validate({
            email: this.navParams.data.email,
            validation_code: this.code
        }).subscribe(function (res) {
            _this.loading.dismiss('validate');
            if (res.email_validated === 'yes') {
                _this.navCtrl.setRoot('LoginPage');
            }
        });
    };
    CheckEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-check-email',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/check-email/check-email.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Check Email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list inset>\n    <p>Please check your email and enter code here.</p>\n    <ion-item>\n      <ion-icon name="ios-lock" item-start></ion-icon>\n      <ion-input [(ngModel)]="code"  placeholder="Enter code" type="text" value="" autocapitalize="off"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button [disabled]="code == \'\'" type="button" ion-button color="secondary" block (click)="validate()">Validate Code</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/check-email/check-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */]])
    ], CheckEmailPage);
    return CheckEmailPage;
}());

//# sourceMappingURL=check-email.js.map

/***/ })

});
//# sourceMappingURL=35.js.map