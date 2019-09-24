(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-agent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-side-nav></app-side-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/appliers/appliers.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/appliers/appliers.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container-fluid\" id=\"tb\">\r\n\r\n    <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <!-- <th scope=\"col\">s.no</th>\r\n\r\n                <th scope=\"col\">Title</th>\r\n\r\n                <th scope=\"col\">First-name</th>\r\n                <th scope=\"col\">Last-name</th>\r\n                <th scope=\"col\">Phone</th>\r\n                <th scope=\"col\">Email</th>\r\n                <!-- <th>Actions</th> -->\r\n<!-- </tr>\r\n</thead>\r\n<tbody *ngFor=\"let data of myData; let i=index\">\r\n    <tr>  -->\r\n<!-- <td>{{i+1 }}</td>\r\n\r\n                <td>{{data.fullname}}</td>\r\n                <td>{{data.email}}</td>\r\n                <td>{{data.contact}}</td>\r\n                <td>{{data.message}}</td>\r\n                <td>\r\n                    <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"delete(data._id)\">Delete</button> &nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-primary\"><a  class=\"text-white\" routerLink='viewUser/{{data._id}}'>View</a></button>\r\n                </td> -->\r\n\r\n\r\n<!-- <div class=\"card\" style=\"width: 18rem;\">\r\n                    <div class=\"card-header\">\r\n                        Featured\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\">\r\n                        <li class=\"list-group-item\">{{data.fullname}}</li>\r\n                        <li class=\"list-group-item\">{{data.email}}</li>\r\n                        <li class=\"list-group-item\">{{data.contact}}</li>\r\n                        <li class=\"list-group-item\">{{data.message}}</li>\r\n                        <button class=\"btn btn-secondary\">Delete</button>\r\n                    </ul>\r\n                </div>\r\n            </tr>\r\n            <br>\r\n        </tbody>\r\n    </table>\r\n</div> -->\r\n\r\n<div class=\"card-deck w-75 p-3 mx-auto\" style=\"width: 200px;\" *ngFor=\"let data of myData; let i=index\">\r\n    <div class=\"card\">\r\n\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\">Name: {{data.fullname}}</li>\r\n                <li class=\"list-group-item\">Email: {{data.email}}</li>\r\n                <li class=\"list-group-item\">Phone-no: {{data.contact}}</li>\r\n                <li class=\"list-group-item\">Message: {{data.message}}</li>\r\n                <button class=\"btn btn-info\" (click)=\"deleteApplier(data._id)\">Delete</button>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-list/customer-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-list/customer-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" id=\"tb\">\r\n\r\n    <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th scope=\"col\">s.no</th>\r\n\r\n                <th scope=\"col\">Title</th>\r\n\r\n                <th scope=\"col\">First-name</th>\r\n                <th scope=\"col\">Last-name</th>\r\n                <th scope=\"col\">Phone</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let data of myData ;let i=index\">\r\n            <tr>\r\n                <td>{{i+1 }}</td>\r\n\r\n                <td>{{data.title}}</td>\r\n                <td>{{data.firstname}}</td>\r\n                <td>{{data.lastname}}</td>\r\n                <td>{{data.phone}}</td>\r\n                <td>{{data.email}}</td>\r\n                <td>\r\n                    <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"delete(data._id)\">Delete</button> &nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-primary\"><a  class=\"text-white\" routerLink='viewUser/{{data._id}}'>View</a></button>\r\n                </td>\r\n            </tr>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-registration/customer-registration.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-registration/customer-registration.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\r\n<div class=\"container-fluid\" id=\"form\">\r\n    <div class=\"card m-3\">\r\n        <h3 class=\"card-header font\">Customer Registration</h3>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                <h5>Personal Details</h5>\r\n                <hr>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                        <label>Title</label>\r\n                        <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"Mr\">Mr</option>\r\n                            <option value=\"Mrs\">Mrs</option>\r\n                            <option value=\"Miss\">Miss</option>\r\n                            <option value=\"Ms\">Ms</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.title?.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.title?.errors.required\">Title is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>First Name</label>\r\n                        <input type=\"text\" formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" />\r\n                        <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstname.errors.required\">First Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>Last Name</label>\r\n                        <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastname.errors }\" />\r\n                        <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastname.errors.required\">Last Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Email</label>\r\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-2\">\r\n                        <label>Gender</label>\r\n                        <select formControlName=\"gender\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\r\n                            <option value=\"\" disabled selected>Select Gender</option>\r\n                            <option value=\"male\">Male</option>\r\n                            <option value=\"female\">Female</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-5\">\r\n                        <label>Phone-no</label>\r\n                        <input type=\"number\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n                        <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.phone.errors.required\">phone-no is required</div>\r\n                            <div *ngIf=\"f.phone.errors.min\">phone-no must be a valid </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-4\">\r\n                        <label for=\"birthdate\">Birthdate</label>\r\n                        <input [max]=\"maxDate\" (change)=\"dateChange($event.target.value)\" type=\"date\" formControlName=\"birthdate\" class=\"form-control\">\r\n                        <!-- [ngClass]=\"{ 'is-invalid': submitted && f.birthdate.errors }\" -->\r\n                        <!-- <div *ngIf=\"f.birthdate.errors.required\"></div> -->\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div formGroupName=\"location\">\r\n                    <div class=\"form-group\">\r\n                        <hr>\r\n                        <h5>Enter your address</h5>\r\n                        <hr>\r\n                        <label>Address</label>\r\n                        <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n                        <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.address.errors.required\">address is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-3\">\r\n                            <label>PIN Code</label>\r\n                            <input type=\"number\" formControlName=\"pin\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pin.errors }\">\r\n                            <div *ngIf=\"submitted && f.pin.errors\" class=\"invalid-feedback\"></div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-3\">\r\n                            <label>City</label>\r\n                            <input type=\"text\" formControlName=\"city\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n                            <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\"></div>\r\n                        </div>\r\n                        <div class=\"form-group col-3\">\r\n                            <label>State</label>\r\n                            <input type=\"text\" formControlName=\"state\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" />\r\n                            <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Country</label>\r\n                            <input type=\"text\" formControlName=\"country\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" />\r\n                            <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr width=\"100%\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col-5\">\r\n                        <label>Adhaar-no</label>\r\n                        <input type=\"number\" formControlName=\"adhar\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adhar.errors }\" />\r\n                        <div *ngIf=\"submitted && f.adhar.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.adhar.errors.required\">Adhar-no is required</div>\r\n                            <div *ngIf=\"f.adhar.errors.minlength\">Adhar-no must be a valid </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>PAN Card</label>\r\n                        <input type=\"text\" formControlName=\"pan\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.pan.errors }\" />\r\n                        <div *ngIf=\"submitted && f.pan.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.pan.errors.required\">PAN Card is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div formGroupName=\"policy\">\r\n                    <hr>\r\n                    <h5>Policy Details</h5>\r\n                    <hr>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Policy Name</label>\r\n                            <select formControlName=\"policyName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.policyName.errors }\">\r\n                        <option value=\"\"></option>\r\n                        <option value=\"policy1\">Policy 1</option>\r\n                        <option value=\"policy2\">Policy 2</option>\r\n                        <option value=\"policy3\">Policy 3</option>\r\n                        <option value=\"policy4\">Policy 4</option>\r\n                    </select>\r\n                            <div *ngIf=\"submitted && f.policyName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.policyName?.errors.required\">Policy Name is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Policy Amount</label>\r\n                            <select formControlName=\"policyAmount\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.policyAmount.errors }\">\r\n                        <option value=\"\"></option>\r\n                        <option value=2,00,000>2 Lakh</option>\r\n                        <option value=5,00,000>5 Lakh</option>\r\n                        <option value=10,00,000>10 Lakh</option>\r\n                    </select>\r\n                            <div *ngIf=\"submitted && f.policyAmount.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.policyAmount?.errors.required\">Policy Amount is required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Premium</label>\r\n                            <select formControlName=\"premium\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.premium.errors }\">\r\n                        <option value=\"\"></option>\r\n                        <option value=\"2,000\">2,000</option>\r\n                        <option value=\"2,500\">2,500</option>\r\n                        <option value=\"5,000\">5,000</option>\r\n                    </select>\r\n                            <div *ngIf=\"submitted && f.premium.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.premium?.errors.required\">Premium is required</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div formGroupName=\"nominie\">\r\n                    <hr>\r\n                    <h5>Nominie</h5>\r\n                    <hr>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-3\">\r\n                            <input formControlName=\"nominieName\" type=\"text\" class=\"form-control\" placeholder=\"enter name\">\r\n                        </div>\r\n                        <div class=\"form-group col-3\">\r\n                            <input formControlName=\"nominieRealtion\" type=\"text\" class=\"form-control\" placeholder=\"enter relation\">\r\n\r\n                        </div>\r\n                        <div class=\"form-group col-3\">\r\n                            <input formControlName=\"nominieNumber\" type=\"number\" class=\"form-control\" placeholder=\"enter number\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label>Nominie:</label> -->\r\n                <!-- <button class=\"btn btn-secondary btn-sm m-2\" type=\"button\" (click)=\"addAlternateEmail()\">Add Nominie</button> -->\r\n                <!-- <div class=\"input-group\">\r\n                        <input formControlName=\"nominie\" type=\"text\" class=\"form-control\" placeholder=\"enter name\">\r\n                        <span class=\"input-group-addon\">-</span>\r\n                        <input formControlName=\"relation\" type=\"text\" class=\"form-control\"\r\n                            placeholder=\"enter relationship\">\r\n                    </div> -->\r\n                <!-- <div  class=\"input-group\" formArrayName=\"alternateEmails\" *ngFor=\"let email of alternateEmails.controls; let i=index\">\r\n              <input type=\"text\" class=\"form-control my-1\" [formControlName]=\"i\"  placeholder=\"enter name\">\r\n              <span class=\"input-group-addon\">-</span>\r\n              <input type=\"text\" class=\"form-control my-1\" [formControlName]=\"i\" placeholder=\"enter relationship\">\r\n            </div> -->\r\n                <!-- <div class=\"form-group form-check\">\r\n                <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n                <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\r\n                <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\r\n            </div> -->\r\n\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-primary mr-1\">Register</button>\r\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\r\n    hey !! {{first_name}}</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/footer/footer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg   rounded\">\r\n    <a>\r\n        <img src=\"assets/img/imiclogo.png\">&nbsp;Indian Medical Insurance</a>\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n\r\n        <li class=\"nav-item dropdown\">\r\n\r\n            <button class=\"btn btn-secondary\" (click)=\"submitLogout()\">logout</button>\r\n        </li>\r\n    </ul>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 \">\r\n\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <h4>Your Profile</h4>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <form [formGroup]=\"\">\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"username\" class=\"col-4 col-form-label\">firstname </label>\r\n                                    <div class=\"col-8\">\r\n                                        <input id=\"username\" class=\"form-control here\" value={{first_name}} type=\"text\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"name\" class=\"col-4 col-form-label\">First Name</label>\r\n                                    <div class=\"col-8\">\r\n                                        <input class=\"form-control here\" value={{first_name}} type=\"text\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"lastname\" class=\"col-4 col-form-label\">Last Name</label>\r\n                                    <div class=\"col-8\">\r\n                                        <input class=\"form-control here\" value={{last_name}} type=\"text\" readonly>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"email\" class=\"col-4 col-form-label\">Email</label>\r\n                                    <div class=\"col-8\">\r\n                                        <input class=\"form-control here\" value={{email}} type=\"text\" readonly>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"website\" class=\"col-4 col-form-label\">Phone no</label>\r\n                                    <div class=\"col-8\">\r\n                                        <input class=\"form-control here\" value={{phone}} type=\"text\" readonly>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group row\">\r\n                                    <div class=\"offset-4 col-8\">\r\n                                        <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\">Update My Profile</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/side-nav/side-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/side-nav/side-nav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidenav\" [ngStyle]=\"{'width.px': isOpen?'250':'0'}\">\r\n    <a href=\" javascript:void(0) \" class=\"closebtn \" (click)=\"closeNav() \">&times;</a>\r\n    <br>\r\n    <hr>\r\n    <div id=\"abc \">\r\n\r\n\r\n        <a routerLink=\"/home\" (click)='closeNav()'>Home</a><br>\r\n        <hr>\r\n        <a routerLink=\"/agent/profile\" (click)='closeNav()'>Profile</a><br></div>\r\n    <hr>\r\n    <a routerLink=\"/agent/customer-list\" (click)='closeNav()'>Customer-list</a><br>\r\n    <hr>\r\n    <a routerLink=\"/agent/customer-registration\" (click)='closeNav()'>Add-customer</a><br>\r\n    <hr>\r\n\r\n    <a routerLink=\"/agent/appliers\" (click)='closeNav()'>Appliers</a><br>\r\n    <hr>\r\n</div>\r\n\r\n\r\n<span style=\"font-size:30px;cursor:pointer \" (click)=\"openNav() \">&#9776; </span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/view-user/view-user.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/view-user/view-user.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mx-auto\" style=\"width: 670px;\">\r\n    <div class=\"card d-flex h-100\" style=\"width: 47rem; height: 12rem;\">\r\n        <h5 class=\"card-header\">Add-Details</h5>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"\">\r\n                <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                        <label>Title</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.title}} readonly/>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.firstname}} readonly/>\r\n                    </div>\r\n                    <div class=\"form-group col-5\">\r\n                        <label>Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.lastname}} readonly/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Email</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.email}} readonly/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Phone-no</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.phone}} readonly/>\r\n\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Address</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.address}} readonly/>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Adhar-no</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.adhar}} readonly/>\r\n\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Policy</label>\r\n                        <input type=\"text\" class=\"form-control\" value={{myData.policy}} readonly/>\r\n\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Nominie:</label>\r\n                        <!-- <button class=\"btn btn-secondary btn-sm m-2\" type=\"button\" (click)=\"addAlternateEmail()\">Add Nominie</button> -->\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" value={{myData.nominie}} readonly>\r\n                            <span class=\"input-group-addon\">-</span>\r\n                            <input type=\"text\" class=\"form-control\" value={{myData.relation}} readonly>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-primary\" type=\"submit\" (click)=\"backToDash()\">Done</button>\r\n                    <!-- <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button> -->\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/agent/agent-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/agent/agent-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutingModule", function() { return AgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/agent/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/agent/profile/profile.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/agent/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-registration/customer-registration.component */ "./src/app/agent/customer-registration/customer-registration.component.ts");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/agent/view-user/view-user.component.ts");
/* harmony import */ var _agent_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agent.guard */ "./src/app/agent/agent.guard.ts");
/* harmony import */ var _appliers_appliers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appliers/appliers.component */ "./src/app/agent/appliers/appliers.component.ts");











const routes = [
    {
        path: '', component: _agent_component__WEBPACK_IMPORTED_MODULE_7__["AgentComponent"],
        children: [
            // {
            // path : '' , redirectTo: 'dashboard' , pathMatch : 'full'
            // },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] },
            { path: 'customer-list', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] },
            { path: 'customer-registration', component: _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__["CustomerRegistrationComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] },
            { path: 'customer-list/viewUser/:id', component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_8__["ViewUserComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] },
            { path: 'appliers', component: _appliers_appliers_component__WEBPACK_IMPORTED_MODULE_10__["AppliersComponent"], canActivate: [_agent_guard__WEBPACK_IMPORTED_MODULE_9__["AgentGuard"]] }
        ]
    }
];
let AgentRoutingModule = class AgentRoutingModule {
};
AgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AgentRoutingModule);



/***/ }),

/***/ "./src/app/agent/agent.component.css":
/*!*******************************************!*\
  !*** ./src/app/agent/agent.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgentComponent = class AgentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent.component.css */ "./src/app/agent/agent.component.css")).default]
    })
], AgentComponent);



/***/ }),

/***/ "./src/app/agent/agent.guard.ts":
/*!**************************************!*\
  !*** ./src/app/agent/agent.guard.ts ***!
  \**************************************/
/*! exports provided: AgentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentGuard", function() { return AgentGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/auth.service */ "./src/app/home/auth.service.ts");




let AgentGuard = class AgentGuard {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    canActivate() {
        if (this._authService.agentLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['home/agent-login']);
            return false;
        }
    }
};
AgentGuard.ctorParameters = () => [
    { type: _home_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AgentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentGuard);



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/*!***************************************!*\
  !*** ./src/app/agent/agent.module.ts ***!
  \***************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _agent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent-routing.module */ "./src/app/agent/agent-routing.module.ts");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/agent/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-registration/customer-registration.component */ "./src/app/agent/customer-registration/customer-registration.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/agent/dashboard/dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/agent/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/agent/header/header.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/agent/profile/profile.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/agent/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-user/view-user.component */ "./src/app/agent/view-user/view-user.component.ts");
/* harmony import */ var _appliers_appliers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appliers/appliers.component */ "./src/app/agent/appliers/appliers.component.ts");















let AgentModule = class AgentModule {
};
AgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_agent_component__WEBPACK_IMPORTED_MODULE_4__["AgentComponent"],
            _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"],
            _customer_registration_customer_registration_component__WEBPACK_IMPORTED_MODULE_6__["CustomerRegistrationComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"],
            _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_13__["ViewUserComponent"],
            _appliers_appliers_component__WEBPACK_IMPORTED_MODULE_14__["AppliersComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _agent_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgentRoutingModule"]
        ]
    })
], AgentModule);



/***/ }),

/***/ "./src/app/agent/agentservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/agent/agentservice.service.ts ***!
  \***********************************************/
/*! exports provided: AgentserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentserviceService", function() { return AgentserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// import {Observable} from 'rxjs/Rx';
let AgentserviceService = class AgentserviceService {
    constructor(http) {
        this.http = http;
        // tslint:disable-next-line:variable-name
        this._url = 'http://localhost:8080/users/createNew';
        this._urlgetall = 'http://localhost:8080/users';
        this._urlDeleteRow = ' http://localhost:8080/users/delete';
        this._urlView = 'http://localhost:8080/users/show';
        this._urlcontactus = 'http://localhost:8080/contactus/';
        this._urlDeleteApplier = 'http://localhost:8080/contactus/delete';
    }
    registeration(reg) {
        return this.http.post(this._url, reg);
    }
    get_Users() {
        return this.http.get(this._urlgetall);
    }
    delete_row(_id) {
        return this.http.delete(this._urlDeleteRow + `/${_id}`);
    }
    view_User(_id) {
        return this.http.get(this._urlView + `/${_id}`);
    }
    get_Contact() {
        return this.http.get(this._urlcontactus);
    }
    delete_applier(_id) {
        return this.http.delete(this._urlDeleteApplier + `/${_id}`);
    }
};
AgentserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AgentserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgentserviceService);



/***/ }),

/***/ "./src/app/agent/appliers/appliers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/agent/appliers/appliers.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2FwcGxpZXJzL2FwcGxpZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/agent/appliers/appliers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/appliers/appliers.component.ts ***!
  \******************************************************/
/*! exports provided: AppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliersComponent", function() { return AppliersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/agent/agentservice.service.ts");



let AppliersComponent = class AppliersComponent {
    constructor(_agentService) {
        this._agentService = _agentService;
        this.myData = {};
    }
    ngOnInit() {
        this._agentService.get_Contact()
            .subscribe(res => {
            this.myData = res;
            console.log(res);
        }, error => console.error(error));
    }
    refreshUsersList() {
        this._agentService.get_Contact().subscribe((res) => {
            this.myData = res;
        });
    }
    deleteApplier(_id) {
        console.log(_id);
        this._agentService.delete_applier(_id)
            .subscribe(data => {
            console.log(_id);
            Array.prototype.slice.call(data, 1);
            this.refreshUsersList();
        }, error => console.error("errorbv,jv", error));
    }
};
AppliersComponent.ctorParameters = () => [
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_2__["AgentserviceService"] }
];
AppliersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appliers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appliers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/appliers/appliers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appliers.component.css */ "./src/app/agent/appliers/appliers.component.css")).default]
    })
], AppliersComponent);



/***/ }),

/***/ "./src/app/agent/customer-list/customer-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/agent/customer-list/customer-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/agent/customer-list/customer-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/agent/customer-list/customer-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/agent/agentservice.service.ts");



let CustomerListComponent = class CustomerListComponent {
    constructor(_agentService) {
        this._agentService = _agentService;
    }
    ngOnInit() {
        this._agentService.get_Users()
            .subscribe(res => this.myData = res, error => console.error(error));
    }
    refreshUsersList() {
        this._agentService.get_Users().subscribe((res) => {
            this.myData = res;
        });
    }
    delete(_id) {
        this._agentService.delete_row(_id)
            .subscribe(data => {
            console.log(_id);
            Array.prototype.slice.call(data, 1);
            this.refreshUsersList();
        }, error => console.error(error));
    }
};
CustomerListComponent.ctorParameters = () => [
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_2__["AgentserviceService"] }
];
CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-list/customer-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-list.component.css */ "./src/app/agent/customer-list/customer-list.component.css")).default]
    })
], CustomerListComponent);



/***/ }),

/***/ "./src/app/agent/customer-registration/customer-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/agent/customer-registration/customer-registration.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2N1c3RvbWVyLXJlZ2lzdHJhdGlvbi9jdXN0b21lci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/agent/customer-registration/customer-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/agent/customer-registration/customer-registration.component.ts ***!
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
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/agent/agentservice.service.ts");





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
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10)]],
            location: this.fb.group({
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            policy: this.fb.group({
                policyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                policyAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                premium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adhar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(12)]],
            birthdate: [''],
            nominie: this.fb.group({
                nominieName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                nominieRealtion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                nominieNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
        }, {});
        // tslint:disable-next-line:align
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        console.log(JSON.stringify(this.registerForm.value));
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this._agentService.registeration(this.registerForm.value)
            .subscribe(data => {
            console.log(this.registerForm.value);
            this.submitted = false;
            if (this.submitted == false)
                this.registerForm.reset();
        }, error => console.error(error));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    dateChange(event) {
        console.log(event);
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/customer-registration/customer-registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-registration.component.css */ "./src/app/agent/customer-registration/customer-registration.component.css")).default]
    })
], CustomerRegistrationComponent);



/***/ }),

/***/ "./src/app/agent/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/agent/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/agent/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_home_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/data.service */ "./src/app/home/data.service.ts");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/agent/agentservice.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(routes, _agentService, dataService) {
        this.routes = routes;
        this._agentService = _agentService;
        this.dataService = dataService;
        this.messages = [];
        this.myData = {};
        this.subscription = this.dataService.getMessage().subscribe(message => {
            if (message) {
                this.messages.push(message);
                console.log(message);
                console.log("Message", message.text.email);
                this.first_name = message.text.first_name;
                console.log(this.first_name);
            }
            else {
                // clear messages when empty message received
                this.messages = [];
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_4__["AgentserviceService"] },
    { type: src_app_home_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/agent/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/agent/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/agent/footer/footer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/agent/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/agent/footer/footer.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/agent/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/agent/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/agent/header/header.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Stackoverflow preview fix, please ignore */\r\n\r\n.navbar {\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.nav_txt {\r\n    color: black;\r\n}\r\n\r\n.navbar-nav {\r\n    flex-direction: row;\r\n}\r\n\r\n.nav-link {\r\n    padding-right: .5rem !important;\r\n    padding-left: .5rem !important;\r\n}\r\n\r\n/* Fixes dropdown menus placed on the right side */\r\n\r\n.ml-auto .dropdown-menu {\r\n    left: auto !important;\r\n    right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYWdlbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2Qzs7QUFFN0M7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFHQSxrREFBa0Q7O0FBRWxEO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZCIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0YWNrb3ZlcmZsb3cgcHJldmlldyBmaXgsIHBsZWFzZSBpZ25vcmUgKi9cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm5hdl90eHQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIEZpeGVzIGRyb3Bkb3duIG1lbnVzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG5cclxuLm1sLWF1dG8gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/agent/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/agent/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(routes) {
        this.routes = routes;
    }
    ngOnInit() {
    }
    submitLogout() {
        localStorage.removeItem('token');
        this.routes.navigate(['home/agent-login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/agent/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/agent/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/agent/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/agent/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/agent/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_admin_agentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/agentservice.service */ "./src/app/admin/agentservice.service.ts");
/* harmony import */ var src_app_home_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/data.service */ "./src/app/home/data.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(_agentService, dataService) {
        this._agentService = _agentService;
        this.dataService = dataService;
        this.messages = [];
        this.myData = {};
        this.subscription = this.dataService.getMessage().subscribe(message => {
            if (message) {
                this.messages.push(message);
                console.log(message);
                console.log("Message", message.text.email);
                this.email = message.text.email;
                this.first_name = message.text.first_name;
                this.last_name = message.text.last_name;
                this.phone = message.text.phone;
            }
            else {
                // clear messages when empty message received
                this.messages = [];
            }
        });
    }
    ngOnInit() {
        // this._agentService.getAgentDetail()
        //   .subscribe(
        //     res => {
        //       this.myData = res.message
        //       console.log(this.myData);
        //     },
        //     error => console.error(error)
        //   );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_admin_agentservice_service__WEBPACK_IMPORTED_MODULE_2__["AgentserviceService"] },
    { type: src_app_home_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/agent/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/agent/side-nav/admin-nav.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/agent/side-nav/admin-nav.service.ts ***!
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

/***/ "./src/app/agent/side-nav/side-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/agent/side-nav/side-nav.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 90px;\r\n    left: 0;\r\n    background-color: #adb5bd;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 1px 1px 1px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: black;\r\n    display: block;\r\n    transition: 0.3s;\r\n    font-family: 'Gayathri', sans-serif;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n    background: #383d41;\r\n    padding: 10px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav a {\r\n        font-size: 18px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYWdlbnQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6Ii4uL3NyYy9hcHAvYWdlbnQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogOTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhIHtcclxuICAgIHBhZGRpbmc6IDFweCAxcHggMXB4IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LWZhbWlseTogJ0dheWF0aHJpJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQ6ICMzODNkNDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/agent/side-nav/side-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/side-nav/side-nav.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _side_nav_admin_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav/admin-nav.service */ "./src/app/agent/side-nav/admin-nav.service.ts");



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.css */ "./src/app/agent/side-nav/side-nav.component.css")).default]
    })
], SideNavComponent);



/***/ }),

/***/ "./src/app/agent/view-user/view-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/agent/view-user/view-user.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FnZW50L3ZpZXctdXNlci92aWV3LXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/agent/view-user/view-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/agent/view-user/view-user.component.ts ***!
  \********************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agentservice.service */ "./src/app/agent/agentservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ViewUserComponent = class ViewUserComponent {
    constructor(fb, _agentService, routes, activateRouter) {
        this.fb = fb;
        this._agentService = _agentService;
        this.routes = routes;
        this.activateRouter = activateRouter;
        this.myData = [];
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(data => {
            // console.log(data.id)
            this._agentService.view_User(data.id)
                .subscribe((res) => this.myData = res, error => console.error(error));
        });
    }
    backToDash() {
        this.routes.navigate(['agent/customer-list']);
    }
};
ViewUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _agentservice_service__WEBPACK_IMPORTED_MODULE_2__["AgentserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ViewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/view-user/view-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-user.component.css */ "./src/app/agent/view-user/view-user.component.css")).default]
    })
], ViewUserComponent);



/***/ })

}]);
//# sourceMappingURL=agent-agent-module-es2015.js.map