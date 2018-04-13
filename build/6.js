webpackJsonp([6],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRequestPageModule", function() { return PaymentRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_request__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentRequestPageModule = /** @class */ (function () {
    function PaymentRequestPageModule() {
    }
    PaymentRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_request__["a" /* PaymentRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_request__["a" /* PaymentRequestPage */]),
            ],
        })
    ], PaymentRequestPageModule);
    return PaymentRequestPageModule;
}());

//# sourceMappingURL=payment-request.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentRequestPage; });
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


/**
 * Generated class for the PaymentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentRequestPage = /** @class */ (function () {
    function PaymentRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paymentDetail = {};
        this.paymentDetail = this.navParams.data;
    }
    PaymentRequestPage.prototype.ionViewDidLoad = function () {
    };
    PaymentRequestPage.prototype.goPaymentDetails = function () {
        this.navCtrl.setRoot('PaymentDetailsPage', this.paymentDetail);
    };
    PaymentRequestPage.prototype.sendRequest = function () {
    };
    PaymentRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-request',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/payment-request/payment-request.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button small (click)="goPaymentDetails()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Back to payment {{paymentDetail.ocode}}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <p>Payment code: {{paymentDetail.ocode}}</p>\n      <p>Group: {{paymentDetail.group}}</p>\n      <p>Receiver: {{paymentDetail.to}}</p>\n      <p>Purpose: {{paymentDetail.p_type_text}}</p>\n      <p>Amount: {{paymentDetail.amount_due}} {{paymentDetail.currency}}</p>\n      <p>Status: {{paymentDetail.status}}</p>\n      <p>Date: {{paymentDetail.projected_payment_due_date}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <p>Send the request to validate a payment</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col>\n      <button color="primary" ion-button small (click)="goPaymentDetails()">Previous</button>\n    </ion-col>\n    <ion-col text-right>\n      <button color="primary" ion-button small (click)="sendRequest()">Send request</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/payment-request/payment-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PaymentRequestPage);
    return PaymentRequestPage;
}());

//# sourceMappingURL=payment-request.js.map

/***/ })

});
//# sourceMappingURL=6.js.map