(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-side-nav></app-side-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-list/customer-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-list/customer-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container-fluid\" id=\"tb\">\r\n  <table class=\"table\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">s.no</th>\r\n        <th scope=\"col\">Title</th>\r\n\r\n        <th scope=\"col\">First-name</th>\r\n        <th scope=\"col\">Last-name</th>\r\n        <th scope=\"col\">Phone</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Address</th>\r\n        <th scope=\"col\">Adhaar</th>\r\n        <th scope=\"col\">Policy</th>\r\n        <th scope=\"col\">Nominie</th> \r\n        <th scope=\"col\">Relation</th>\r\n\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let data of myData ;let i=index\">\r\n      <tr>\r\n        <td>{{i+1 }}</td>\r\n        <td>{{data.title}}</td>\r\n        <td>{{data.firstname}}</td>\r\n        <td>{{data.lastname}}</td>\r\n        <td>{{data.phone}}</td>\r\n        <td>{{data.email}}</td>\r\n        <td>{{data.address}}</td>\r\n        <td>{{data.adhar}}</td>\r\n        <td>{{data.policy}}</td>\r\n        <td>{{data.nominie}}</td>\r\n        <td>{{data.relation}}</td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-registration/customer-registration.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-registration/customer-registration.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\r\n<div class=\"container-fluid\" id=\"form\">\r\n    <div class=\"card m-3\">\r\n        <h5 class=\"card-header\">Add-Details</h5>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                        <label>Title</label>\r\n                        <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                        <option value=\"\"></option>\r\n                        <option value=\"Mr\">Mr</option>\r\n                        <option value=\"Mrs\">Mrs</option>\r\n                        <option value=\"Miss\">Miss</option>\r\n                        <option value=\"Ms\">Ms</option>\r\n                    </select>\r\n                        <div *ngIf=\"submitted && f.title?.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.title?.errors.required\">Title is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>First Name</label>\r\n                        <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" />\r\n                        <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstname.errors.required\">First Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>Last Name</label>\r\n                        <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\" />\r\n                        <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastname.errors.required\">Last Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Email</label>\r\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Phone-no</label>\r\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n                    <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.phone.errors.required\">phone-no is required</div>\r\n                        <div *ngIf=\"f.phone.errors.minlength\">phone-no must be a valid </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Address</label>\r\n                    <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.address.errors.required\">address is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Adhar-no</label>\r\n                    <input type=\"text\" formControlName=\"adhar\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adhar.errors }\" />\r\n                    <div *ngIf=\"submitted && f.adhar.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.adhar.errors.required\">Adhar-no is required</div>\r\n                        <div *ngIf=\"f.adhar.errors.minlength\">Adhar-no must be a valid </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-5\">\r\n                    <label for=\"birthdate\">Birthdate</label>\r\n                    <input [max]=\"maxDate\" (change)=\"dateChange($event.target.value)\" type=\"date\" formControlName=\"birthdate\" class=\"form-control\">\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Policy</label>\r\n                    <select formControlName=\"policy\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.policy.errors }\">\r\n                    <option value=\"\"></option>\r\n                    <option value=\"Mr\">fljrb</option>\r\n                    <option value=\"Mrs\">sfnj</option>\r\n                    <option value=\"Miss\">nef j</option>\r\n                    <option value=\"Ms\">fkgkm</option>\r\n                </select>\r\n                    <div *ngIf=\"submitted && f.policy.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.policy?.errors.required\">Title is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Nominie:</label>\r\n                    <!-- <button class=\"btn btn-secondary btn-sm m-2\" type=\"button\" (click)=\"addAlternateEmail()\">Add Nominie</button> -->\r\n                    <div class=\"input-group\">\r\n                        <input formControlName=\"nominie\" type=\"text\" class=\"form-control\" placeholder=\"enter name\">\r\n                        <span class=\"input-group-addon\">-</span>\r\n                        <input formControlName=\"relation\" type=\"text\" class=\"form-control\" placeholder=\"enter relationship\">\r\n                    </div>\r\n                    <!-- <div  class=\"input-group\" formArrayName=\"alternateEmails\" *ngFor=\"let email of alternateEmails.controls; let i=index\">\r\n              <input type=\"text\" class=\"form-control my-1\" [formControlName]=\"i\"  placeholder=\"enter name\">\r\n              <span class=\"input-group-addon\">-</span>\r\n              <input type=\"text\" class=\"form-control my-1\" [formControlName]=\"i\" placeholder=\"enter relationship\">\r\n            </div> -->\r\n                </div>\r\n                <!-- <div class=\"form-group form-check\">\r\n                <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n                <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\r\n                <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\r\n            </div> -->\r\n\r\n                <div class=\"text-center\">\r\n                    <!-- <button class=\"btn btn-primary mr-1\" [disabled]=\"!registerForm.valid\">Register</button>\r\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button> -->\r\n                    <button type=\"submit\" [disabled]=\"!profileForm.valid\">Submit</button>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container\" style=\"position:absolute\"></div>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"nav_bar\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\r\n       \r\n         <ul>\r\n             <li></li>\r\n         </ul>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/side-nav/side-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/side-nav/side-nav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidenav\" [ngStyle]=\"{'width.px': isOpen?'250':'0'}\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n    <br>\r\n    <a routerLink=\"/admin/profile\" (click)='closeNav()'>Profile</a><br>\r\n    <a routerLink=\"/admin/customer-list\" (click)='closeNav()'>Customer-list</a><br>\r\n    <a routerLink=\"/admin/customer-registration\" (click)='closeNav()'>Add-customer</a>\r\n    <a href=\"#\"></a>\r\n</div>\r\n\r\n\r\n<span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776; </span>");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/admin/profile/profile.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/admin/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-registration/customer-registration.component */ "./src/app/admin/customer-registration/customer-registration.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");








const routes = [
    {
        path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            // {
            // path : '' , redirectTo: 'dashboard' , pathMatch : 'full'
            // },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: 'customer-list', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"] },
            { path: 'customer-registration', component: _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__["CustomerRegistrationComponent"] }
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/admin/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/admin/footer/footer.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/admin/profile/profile.component.ts");
/* harmony import */ var _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-registration/customer-registration.component */ "./src/app/admin/customer-registration/customer-registration.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/admin/customer-list/customer-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/admin/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_8__["CustomerRegistrationComponent"],
            _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_9__["CustomerListComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/customer-list/customer-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/customer-list/customer-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/customer-list/customer-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/customer-list/customer-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/admin/agentservice.service.ts");



let CustomerListComponent = class CustomerListComponent {
    constructor(_agentService) {
        this._agentService = _agentService;
    }
    ngOnInit() {
        this._agentService.get_Users()
            .subscribe(res => this.myData = res, error => console.error(error));
    }
};
CustomerListComponent.ctorParameters = () => [
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_2__["AgentserviceService"] }
];
CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-list/customer-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-list.component.css */ "./src/app/admin/customer-list/customer-list.component.css")).default]
    })
], CustomerListComponent);



/***/ }),

/***/ "./src/app/admin/customer-registration/customer-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/customer-registration/customer-registration.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2N1c3RvbWVyLXJlZ2lzdHJhdGlvbi9jdXN0b21lci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/customer-registration/customer-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/customer-registration/customer-registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRegistrationComponent", function() { return CustomerRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/admin/agentservice.service.ts");





let CustomerRegistrationComponent = class CustomerRegistrationComponent {
    constructor(fb, 
    // tslint:disable-next-line:variable-name
    routes, 
    // tslint:disable-next-line:variable-name
    _agentService) {
        this.fb = fb;
        this.routes = routes;
        this._agentService = _agentService;
        this.submitted = false;
        this.date = new Date();
        this.maxDate = (new Date().getFullYear()).toString() + "-0" + (new Date().getMonth() + 1).toString() + "-" + (new Date().getDate()).toString();
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adhar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)]],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            policy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nominie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            relation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {});
        // tslint:disable-next-line:align
    }
    // get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this._agentService.registeration(this.registerForm.value)
            .subscribe(data => console.log(data), error => console.error(error));
    }
    dateChange(event) {
        console.log(event);
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
CustomerRegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_4__["AgentserviceService"] }
];
CustomerRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/customer-registration/customer-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-registration.component.css */ "./src/app/admin/customer-registration/customer-registration.component.css")).default]
    })
], CustomerRegistrationComponent);



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/admin/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/footer/footer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/footer/footer.component.ts ***!
  \**************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/admin/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/admin/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.nav-item{\r\n    padding:2px;\r\n    margin-left: 7px;\r\n}\r\n#nav_bar{\r\n    padding: 15px 70px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYWRtaW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2LWl0ZW17XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuI25hdl9iYXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDcwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/admin/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/admin/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FkbWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/admin/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/admin/side-nav/admin-nav.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/side-nav/admin-nav.service.ts ***!
  \*****************************************************/
/*! exports provided: AdminNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavService", function() { return AdminNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AdminNavService = class AdminNavService {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._isSideNavOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    get isSideNavOpen() {
        return this._isSideNavOpen.asObservable();
    }
    openNav() {
        // document.getElementById('mySidenav').style.width = '250px';
        this._isSideNavOpen.next(true);
    }
    closeNav() {
        // document.getElementById('mySidenav').style.width = '0';
        this._isSideNavOpen.next(false);
    }
};
AdminNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminNavService);



/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #dee2e6;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n#sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n#sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n#sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    #sidenav {\r\n        padding-top: 15px;\r\n    }\r\n    #sidenav a {\r\n        font-size: 18px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYWRtaW4vc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6Ii4uL3NyYy9hcHAvYWRtaW4vc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4jc2lkZW5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuI3NpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuI3NpZGVuYXYgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgI3NpZGVuYXYge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGVuYXYgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/side-nav/side-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/side-nav/side-nav.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _side_nav_admin_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav/admin-nav.service */ "./src/app/admin/side-nav/admin-nav.service.ts");



let SideNavComponent = class SideNavComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.adminService.isSideNavOpen.subscribe((isSideNavOpen) => {
            return this.isOpen = isSideNavOpen;
        });
    }
    ngOnInit() {
    }
    closeNav() {
        this.adminService.closeNav();
    }
    openNav() {
        this.adminService.openNav();
    }
};
SideNavComponent.ctorParameters = () => [
    { type: _side_nav_admin_nav_service__WEBPACK_IMPORTED_MODULE_2__["AdminNavService"] }
];
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.css */ "./src/app/admin/side-nav/side-nav.component.css")).default]
    })
], SideNavComponent);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map