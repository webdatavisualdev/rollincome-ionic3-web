webpackJsonp([37],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagesPageModule", function() { return ChatMessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_messages__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatMessagesPageModule = /** @class */ (function () {
    function ChatMessagesPageModule() {
    }
    ChatMessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_messages__["a" /* ChatMessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_messages__["a" /* ChatMessagesPage */]),
            ],
        })
    ], ChatMessagesPageModule);
    return ChatMessagesPageModule;
}());

//# sourceMappingURL=chat-messages.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatMessagesPage = /** @class */ (function () {
    function ChatMessagesPage(navCtrl, navParams, api, loading, chat) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loading = loading;
        this.chat = chat;
        this.message = '';
        this.messages = [];
        this.receiver_id = '';
        this.email = '';
        this.receiver_id = this.navParams.data.id;
        this.email = localStorage.getItem('email');
        this.loading.show('getMessages');
        this.api.getMessages(this.receiver_id).subscribe(function (res) {
            _this.messages = res.data.reverse();
            console.log(_this.messages);
            _this.loading.dismiss('getMessages');
        });
        this.chat.message.subscribe(function (res) {
            _this.messages.push(JSON.parse(res.json_msg)[0]);
        });
    }
    ChatMessagesPage.prototype.ionViewDidLoad = function () {
    };
    ChatMessagesPage.prototype.goRoomList = function () {
        this.navCtrl.setRoot('ChatPage');
    };
    ChatMessagesPage.prototype.send = function () {
        if (this.message !== '') {
            this.chat.sendMessage({
                message: this.message,
                receiver_id: this.receiver_id,
                token: localStorage.getItem('token'),
            });
            this.message = '';
        }
    };
    ChatMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-messages',template:/*ion-inline-start:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/chat-messages/chat-messages.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons start>\n      <button ion-button small (click)="goRoomList()">\n        <ion-icon name="arrow-back"></ion-icon>\n        Back to list\n      </button>\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item class="one-message-box" [class.received]="m.sender.indexOf(email) < 0" [class.sent]="m.sender.indexOf(email) > -1" *ngFor="let m of messages">\n      <div class="message-content">\n        <p class="message-sender" *ngIf="m.sender.indexOf(email) < 0">{{m.sender}}</p>\n        <p class="message-text">{{m.message}}</p>\n        <p class="message-time">{{m.creation_date}}</p>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-input item-start [(ngModel)]="message"  placeholder="Enter your message" type="text" value=""></ion-input>\n    <button item-end ion-button color="primary" small (click)="send()">Send</button>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Volumes/data/git-projects/rollincome-ionic3/src/pages/chat-messages/chat-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */]])
    ], ChatMessagesPage);
    return ChatMessagesPage;
}());

//# sourceMappingURL=chat-messages.js.map

/***/ })

});
//# sourceMappingURL=37.js.map