webpackJsonp([7],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_details__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentDetailsPageModule = /** @class */ (function () {
    function PaymentDetailsPageModule() {
    }
    PaymentDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_details__["a" /* PaymentDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_details__["a" /* PaymentDetailsPage */]),
            ],
        })
    ], PaymentDetailsPageModule);
    return PaymentDetailsPageModule;
}());

//# sourceMappingURL=payment-details.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.paymentDetail = {};
        this.paymentMethod = 'By Hand';
        this.paymentDetail = this.navParams.data;
    }
    PaymentDetailsPage.prototype.ionViewDidLoad = function () {
    };
    PaymentDetailsPage.prototype.goRoomList = function () {
        this.navCtrl.setRoot('PaymentPage');
    };
    PaymentDetailsPage.prototype.goPaymentRequest = function () {
        this.navCtrl.setRoot('PaymentRequestPage', __assign({}, this.paymentDetail, { paymentMethod: this.paymentMethod }));
    };
    PaymentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-details',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/payment-details/payment-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button small (click)="goRoomList()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Back to payment list\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <p>Payment code: {{paymentDetail.ocode}}</p>\n      <p>Group: {{paymentDetail.group}}</p>\n      <p>Receiver: {{paymentDetail.to}}</p>\n      <p>Purpose: {{paymentDetail.p_type_text}}</p>\n      <p>Amount: {{paymentDetail.amount_due}} {{paymentDetail.currency}}</p>\n      <p>Status: {{paymentDetail.status}}</p>\n      <p>Date: {{paymentDetail.projected_payment_due_date}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content radio-group [(ngModel)]="paymentMethod">\n      <ion-item>\n        <ion-label>By Hand</ion-label>\n        <ion-radio value="By Hand"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bank transfer to member</ion-label>\n        <ion-radio value="Bank transfer to member"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bank transfer to group</ion-label>\n        <ion-radio value="Bank transfer to group"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Credit/Debit Card</ion-label>\n        <ion-radio value="Credit/Debit Card"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kori</ion-label>\n        <ion-radio value="Kori"></ion-radio>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row>\n    <ion-col text-right>\n      <button color="primary" ion-button small (click)="goPaymentRequest()">Next</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/payment-details/payment-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());

//# sourceMappingURL=payment-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map