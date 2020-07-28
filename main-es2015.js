(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (toggleSideBarForMe)=\"sideBarToggler()\"></app-header>\r\n\r\n<mat-drawer-container>\r\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\r\n        <app-sidebar></app-sidebar>\r\n    </mat-drawer>\r\n    <mat-drawer-content>\r\n        <router-outlet></router-outlet>\r\n    </mat-drawer-content>\r\n</mat-drawer-container>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input type=\"text\"\r\n                 placeholder=\"Pick one\"\r\n                 aria-label=\"Number\"\r\n                 matInput\r\n                 [formControl]=\"myControl\"\r\n                 [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </form>\r\n\r\n<div>\r\n    <app-widget-area [data]=\"bigChart\"></app-widget-area>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<br>\r\n\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\" class=\"stats-cards\">\r\n    <mat-card fxFlex=\"25\">\r\n        <app-widget-card label=\"New Users\" total=\"12k\" percentage=\"50\" [data]=\"cards\"></app-widget-card>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n        <app-widget-card label=\"Users retention\" total=\"10k\" percentage=\"40\" [data]=\"cards\"></app-widget-card>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n        <app-widget-card label=\"Users engagement\" total=\"8k\" percentage=\"30\" [data]=\"cards\"></app-widget-card>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n        <app-widget-card label=\"Referral\" total=\"6k\" percentage=\"20\" [data]=\"cards\"></app-widget-card>\r\n    </mat-card>\r\n</div>\r\n\r\n<br>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<br>\r\n\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n    <div fxFlex=\"60\">\r\n        <div class=\"mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                <!-- Position Column -->\r\n                <ng-container matColumnDef=\"position\">\r\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Name Column -->\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Weight Column -->\r\n                <ng-container matColumnDef=\"weight\">\r\n                    <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Symbol Column -->\r\n                <ng-container matColumnDef=\"symbol\">\r\n                    <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"40\">\r\n        <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/posts/posts.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>posts works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\r\n<footer>\r\n    &copy; All rights reserved 2019\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <button mat-icon-button (click)=\"toggleSideBar()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <span> APP LOGO </span>\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\r\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n                <li>\r\n                    <button mat-icon-button>\r\n                        <mat-icon>settings</mat-icon>\r\n                    </button>\r\n                </li>\r\n                <li>\r\n                    <button mat-icon-button>\r\n                        <mat-icon>help_outline</mat-icon>\r\n                    </button>\r\n                </li>\r\n                <li>\r\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\r\n                        <mat-icon>person_outline</mat-icon>\r\n                    </button>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                        <button mat-menu-item>\r\n                            <mat-icon>exit_to_app</mat-icon>\r\n                            Sign out\r\n                        </button>\r\n                    </mat-menu>\r\n\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n    <div class=\"profile-card\">\r\n        <div class=\"header\">\r\n            <h2>COVID-19</h2>\r\n        </div>\r\n        <img src=\"../../../../assets/1200px-SARS-CoV-2_without_background.png\" alt=\"India\">\r\n        \r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <h2 matSubheader>Pages</h2>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/\">Dashboard</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/posts\">Posts</a>\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/articles\">Articles</a>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <h2 matSubheader>Tools</h2>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\r\n        <mat-icon>import_contacts</mat-icon>\r\n        Contacts\r\n    </a>\r\n\r\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/contacts\">\r\n        <mat-icon>contact_phone</mat-icon>\r\n        Leads\r\n    </a>\r\n\r\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/area/area.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/card/card.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\r\n    <h4>{{ label }}</h4>\r\n\r\n    <span class=\"total\">{{ total }}</span>\r\n\r\n    <span>\r\n        <mat-icon color=\"primary\">trending_up</mat-icon>\r\n    </span>\r\n\r\n    <span class=\"description\">\r\n        {{ percentage }}%\r\n    </span>\r\n\r\n    <span> of target</span>\r\n</div>\r\n<div class=\"widget\">\r\n    <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\r\n        style=\"width: 100%; height: 60px; display: block;\">\r\n    </highcharts-chart>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; display: block;\">\r\n</highcharts-chart>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");






const routes = [{
        path: '',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        children: [{
                path: '',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            }, {
                path: 'posts',
                component: _modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"]
            }]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n\nmat-drawer-content {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxVc2Vyc1xcbWttYW5cXERlc2t0b3BcXFdPUktcXFBST0pFQ1RTXFxEYXNoQm9hcmQvc3JjXFxhcHBcXGxheW91dHNcXGRlZmF1bHRcXGRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtZHJhd2VyIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");



let DefaultComponent = class DefaultComponent {
    constructor(geoservice) {
        this.geoservice = geoservice;
        this.sideBarOpen = true;
    }
    ngOnInit() {
        this.geoservice.getLocation();
    }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
};
DefaultComponent.ctorParameters = () => [
    { type: src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"] }
];
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/default/default.component.html"),
        styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/posts/posts.component */ "./src/app/modules/posts/posts.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "./src/app/modules/dashboard.service.ts");
/* harmony import */ var src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
            src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            src_app_modules_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]
        ],
        providers: [
            src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"],
            src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_11__["GeolocationService"]
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/modules/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardService = class DashboardService {
    constructor() { }
    bigChart() {
        return [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }];
    }
    cards() {
        return [71, 78, 39, 66];
    }
    pieChart() {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    }
};
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stats-cards .mat-card {\n  overflow: hidden;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxta21hblxcRGVza3RvcFxcV09SS1xcUFJPSkVDVFNcXERhc2hCb2FyZC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FDQUo7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLWNhcmRzIHtcclxuICAubWF0LWNhcmQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufSIsIi5zdGF0cy1jYXJkcyAubWF0LWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/modules/dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/geolocation.service */ "./src/app/shared/geolocation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
let DashboardComponent = class DashboardComponent {
    constructor(dashboardService, geoservice) {
        this.dashboardService = dashboardService;
        this.geoservice = geoservice;
        //charts variables
        this.bigChart = [];
        this.cards = [];
        this.pieChart = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        //search bar variables
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => this._filter(value)));
        this.geolocationPosition = this.geoservice.getGeoLocation();
        this.bigChart = this.dashboardService.bigChart();
        this.cards = this.dashboardService.cards();
        this.pieChart = this.dashboardService.pieChart();
        this.dataSource.paginator = this.paginator;
        console.log(this.geolocationPosition);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: src_app_shared_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeolocationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], DashboardComponent.prototype, "paginator", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/posts/posts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/posts/posts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/posts/posts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/posts/posts.component.ts ***!
  \**************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostsComponent = class PostsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/modules/posts/posts.component.scss")]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcbWttYW5cXERlc2t0b3BcXFdPUktcXFBST0pFQ1RTXFxEYXNoQm9hcmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcbWttYW5cXERlc2t0b3BcXFdPUktcXFBST0pFQ1RTXFxEYXNoQm9hcmQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiIsInVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n:host .profile-card img {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXG1rbWFuXFxEZXNrdG9wXFxXT1JLXFxQUk9KRUNUU1xcRGFzaEJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbjpob3N0IC5wcm9maWxlLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG46aG9zdCAucHJvZmlsZS1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/geolocation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/geolocation.service.ts ***!
  \***********************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GeolocationService = class GeolocationService {
    constructor(http) {
        this.http = http;
        this.geolocationPosition = "India";
    }
    getLocation() {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(position => {
                this.callApi(position.coords.latitude, position.coords.longitude)
                    .then((data) => {
                    this.geolocationPosition = data.address.state;
                }, (err) => {
                    console.log("error with https://geocode.xyz : " + err);
                });
            }, error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
        return this.geolocationPosition;
    }
    callApi(Latitude, Longitude) {
        //https://nominatim.openstreetmap.org/reverse?format=json&lat=${Latitude}&lon=${Longitude}&zoom=18&addressdetails=1
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Latitude}&lon=${Longitude}&zoom=18&addressdetails=1`;
        //Call API
        return this.http.get(url).toPromise();
    }
    getGeoLocation() {
        return this.geolocationPosition;
    }
};
GeolocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeolocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeolocationService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/area/area.component */ "./src/app/shared/widgets/area/area.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/card/card.component */ "./src/app/shared/widgets/card/card.component.ts");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");













let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/themes/dark-unica */ "./node_modules/highcharts/themes/dark-unica.js");
/* harmony import */ var highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_4__);




//require('highcharts/themes/dark-unica')(Highcharts);

highcharts_themes_dark_unica__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let AreaComponent = class AreaComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaComponent.prototype, "data", void 0);
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-area',
        template: __webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/area/area.component.html"),
        styles: [__webpack_require__(/*! ./area.component.scss */ "./src/app/shared/widgets/area/area.component.scss")]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total {\n  font-size: 3em;\n}\n\n.mat-icon,\n.description {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dpZGdldHMvY2FyZC9DOlxcVXNlcnNcXG1rbWFuXFxEZXNrdG9wXFxXT1JLXFxQUk9KRUNUU1xcRGFzaEJvYXJkL3NyY1xcYXBwXFxzaGFyZWRcXHdpZGdldHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5tYXQtaWNvbixcclxuLmRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICB0b3A6IDVweDtcclxufVxyXG4iLCJoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tYXQtaWNvbixcbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CardComponent = class CardComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "percentage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "data", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/card/card.component.html"),
        styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/widgets/card/card.component.scss")]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let PieComponent = class PieComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'RANDOM DATA'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieComponent.prototype, "data", void 0);
PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-pie',
        template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/widgets/pie/pie.component.html"),
        styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/shared/widgets/pie/pie.component.scss")]
    })
], PieComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mkman\Desktop\WORK\PROJECTS\DashBoard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map