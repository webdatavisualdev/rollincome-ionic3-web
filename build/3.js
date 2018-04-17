webpackJsonp([3],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsPageModule", function() { return RequestDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_details__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestDetailsPageModule = /** @class */ (function () {
    function RequestDetailsPageModule() {
    }
    RequestDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request_details__["a" /* RequestDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_details__["a" /* RequestDetailsPage */]),
            ],
        })
    ], RequestDetailsPageModule);
    return RequestDetailsPageModule;
}());

//# sourceMappingURL=request-details.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestDetailsPage = /** @class */ (function () {
    function RequestDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = {};
        this.request = this.navParams.data;
    }
    RequestDetailsPage.prototype.ionViewDidLoad = function () {
    };
    RequestDetailsPage.prototype.rejectRequest = function () {
    };
    RequestDetailsPage.prototype.acceptRequest = function () {
    };
    RequestDetailsPage.prototype.goRequestList = function () {
        this.navCtrl.setRoot('RequestPage');
    };
    RequestDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request-details',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/request-details/request-details.html"*/'<!--\n  Generated template for the RequestDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button small (click)="goRequestList()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Back to request list\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <p>Request code: </p>\n      <p>Group: {{request.group}}</p>\n      <p>Sender: {{request.sender}}</p>\n      <p>Purpose: {{request.request_type_text}}</p>\n      <p>Amount: {{request.amount}} {{request.currency}}</p>\n      <p>Status: {{request.request_status_text}}</p>\n      <p>Date: {{request.request_date}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col>\n      <button color="danger" ion-button small (click)="rejectRequest()">Reject</button>\n    </ion-col>\n    <ion-col text-right>\n      <button color="primary" ion-button small (click)="acceptRequest()">Accept</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/request-details/request-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RequestDetailsPage);
    return RequestDetailsPage;
}());

//# sourceMappingURL=request-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map