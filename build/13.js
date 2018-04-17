webpackJsonp([13],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupItemsPageModule", function() { return GroupItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_items__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupItemsPageModule = /** @class */ (function () {
    function GroupItemsPageModule() {
    }
    GroupItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__group_items__["a" /* GroupItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__group_items__["a" /* GroupItemsPage */]),
            ],
        })
    ], GroupItemsPageModule);
    return GroupItemsPageModule;
}());

//# sourceMappingURL=group-items.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupItemsPage = /** @class */ (function () {
    function GroupItemsPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.group = this.navParams.data;
        console.log(this.group, this.auth.user);
    }
    GroupItemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupItemsPage');
    };
    GroupItemsPage.prototype.goGroupMembers = function () {
        this.navCtrl.setRoot('GroupMembersPage', this.group);
    };
    GroupItemsPage.prototype.goGroupAccount = function () {
        this.navCtrl.setRoot('GroupAccountPage', this.group);
    };
    GroupItemsPage.prototype.goGroupPayment = function () {
        this.navCtrl.setRoot('GroupPaymentPage', this.group);
    };
    GroupItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-items',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/group-items/group-items.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-buttons start>\n      <button ion-button small (click)="goRoomList()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Back to group\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-title>Group: {{group.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item detail-push (click)="goGroupMembers()">\n      <span>Members</span>\n      <span *ngIf="group.nb_members">{{group.nb_members}}</span>\n    </ion-item>\n    <ion-item detail-push (click)="goGroupAccount()">\n      <span>Account</span>\n    </ion-item>\n    <ion-item detail-push (click)="goGroupPayment()">\n      <span>Payment means</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/group-items/group-items.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object])
    ], GroupItemsPage);
    return GroupItemsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=group-items.js.map

/***/ })

});
//# sourceMappingURL=13.js.map