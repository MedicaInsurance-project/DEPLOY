(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-us/about-us.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-us/about-us.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- First Container -->\r\n<div class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Who Am I?</h3>\r\n    <img src=\"assets/img/health-slider.jpg\" class=\"img-responsive img-circle margin\" alt=\"Bird\">\r\n    <h3>I'm an adventurer</h3>\r\n</div>\r\n\r\n<!-- Second Container -->\r\n<div class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">What Am I?</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\r\n        <span class=\"glyphicon glyphicon-search\"></span> Search\r\n    </a>\r\n</div>\r\n\r\n<!-- Third Container (Grid) -->\r\n<div class=\"container-fluid bg-3 text-center\">\r\n    <h3 class=\"margin\">Where To Find Me?</h3><br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n            <img src=\"birds1.jpg\" class=\"img-responsive margin\" style=\"width:100%\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n            <img src=\"birds2.jpg\" class=\"img-responsive margin\" style=\"width:100%\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n            <img src=\"birds3.jpg\" class=\"img-responsive margin\" style=\"width:100%\" alt=\"Image\">\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-login/admin-login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-login/admin-login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<section class=\"cmspage mtb-40\">\r\n    <div class=\"container\">\r\n      <div class=\"page-desc\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-8\">\r\n            <h1>Agent Login</h1>\r\n            <form  [formGroup]= \"login\" (ngSubmit)=\"onAdminSubmit()\">\r\n              <div class=\"form-group col-sm-12\">\r\n                <label>\r\n                    Userame:\r\n                    <input type=\"text\" class=\"form-control seviceUsername\" formControlName=\"seviceUsername\">\r\n                </label>\r\n            </div>\r\n            \r\n            <div class=\"form-group col-sm-12\">\r\n                <label>\r\n                    Password:\r\n                    <input type=\"password\" class=\"form-control sevicePassword\" formControlName=\"sevicePassword\">\r\n                </label>\r\n            </div> \r\n        \r\n            <div >\r\n            \r\n                <button class=\"btn btn-primary\">Submit</button>\r\n            </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/agent-login/agent-login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/agent-login/agent-login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n                <h5 class=\"card-title align-self-center\"><strong>Agent Log In</strong></h5>\r\n                <div class=\"card-body row justify-content-center align-self-center\">\r\n\r\n                    <form [formGroup]=\"login\" (ngSubmit)=\"onAgentSubmit()\">\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n    Userame: \r\n    <input type=\"text\" class=\"form-control agentUsername\" formControlName=\"agentUsername\" >\r\n    </label>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n    Password:\r\n    <input type=\"password\" class=\"form-control agentPassword\" formControlName=\"agentPassword\">\r\n    </label>\r\n                        </div>\r\n                        <div>\r\n                            <a href=\"\"> Forgotten Password ?</a>\r\n                        </div>\r\n\r\n                        <div class=\"text-center\">\r\n\r\n                            <button class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/confirm-password/confirm-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/confirm-password/confirm-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section class=\"cmspage mtb-40\">\r\n    <div class=\"container\">\r\n        <div class=\"page-desc\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-md-8\">\r\n                    <h3><i class=\"fa fa-lock fa-4x\"></i></h3>\r\n                    <h1>Reset your Password</h1>\r\n                    <form [formGroup]=\"login\" (ngSubmit)=\"submitOTP()\">\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n                    Enter OTP:\r\n                    <input type=\"number\" class=\"form-control newOTP\" formControlName=\"newOTP\">\r\n                </label>\r\n                        </div>\r\n                        <label>\r\n                            Enter New Password:\r\n                            <input type=\"password\" class=\"form-control newPassword\" formControlName=\"newPassword\">\r\n                        </label>\r\n\r\n\r\n                        <div>\r\n\r\n                            <button class=\"btn btn-primary\">Send OTP</button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container contact-form\">\r\n    <form [formGroup]=\"contact\" (ngSubmit)=\"submit()\">\r\n        <h3>Drop Us a Message</h3>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control fullname\" formControlName=\"fullname\" placeholder=\"Your Name *\" required>\r\n                    <div *ngIf=\"submitted && fullname\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fullname.required\">Name is required</div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control Email\" formControlName=\"email\" placeholder=\"Your Email *\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control Phone\" formControlName=\"contact\" placeholder=\"Your Phone *\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btnContact\">Submit</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <textarea name=\"txtMsg\" class=\"form-control Message\" formControlName=\"message\" placeholder=\"Your Message \" style=\"width: 100%; height: 150px;\" required></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/email-verify/email-verify.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/email-verify/email-verify.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cmspage mtb-40\">\r\n    <div class=\"container\">\r\n        <div class=\"page-desc\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-md-8\">\r\n                    <h3><i class=\"fa fa-lock fa-4x\"></i></h3>\r\n                    <h1>Reset your Password</h1>\r\n                    <form [formGroup]=\"login\" (ngSubmit)=\"submitOTP()\">\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n                    Enter Your Email:\r\n                    <input type=\"email\" class=\"form-control email\" formControlName=\"email\">\r\n                </label>\r\n                        </div>\r\n\r\n\r\n                        <div>\r\n\r\n                            <button class=\"btn btn-primary\">Send OTP</button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <p  class=\"text-xs-center\">© Copyright 2019. All rights reserved.</p>\r\n  </footer>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pos-f-t\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id=\"nav_bar\">\r\n        <a class=\"navbar-brand\" href=\"/home\">\r\n            <img src=\"assets/img/imiclogo.png\" alt=\"...\" class=\" img-fluid  \"> &nbsp;Indian Medical Insurance</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n        <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <!-- <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Features</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n            </li> -->\r\n\r\n            </ul>\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/home/about-us\">About-us</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/home/contact-us\">Contact-us</a>\r\n                </li>\r\n\r\n                <li class=\"nav-item dropdown\" *ngIf=\"!_authService.agentLoggedIn()\">\r\n\r\n                    <a class=\"nav-link dropdown-toggle\" *ngIf=\"!_authService.agentLoggedIn()\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    login\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" *ngIf=\"!_authService.agentLoggedIn()\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" *ngIf=\"!_authService.userLoggedIn()\" routerLink=\"/home/user-login\">User-Login</a>\r\n                        <a class=\"dropdown-item \" *ngIf=\"!_authService.agentLoggedIn()\" routerLink=\"/home/agent-login\">Agent-Login</a>\r\n\r\n                    </div>\r\n\r\n                </li>\r\n                <li class=\"nav-item dropdown\" *ngIf=\"_authService.agentLoggedIn()\">\r\n                    <a class=\"nav-link dropdown-toggle\" *ngIf=\"_authService.agentLoggedIn()\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    {{first_name}}\r\n                    </a>\r\n\r\n                    <div class=\"dropdown-menu\" *ngIf=\"_authService.agentLoggedIn()\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" *ngIf=\"_authService.agentLoggedIn()\" routerLink=\"/agent/dashboard\">My Profile</a>\r\n                    </div>\r\n\r\n\r\n\r\n                </li>\r\n                <!-- <li class=\"nav-item \">\r\n                <a class=\"nav-link \" href=\" \">Login</a>\r\n            </li>\r\n            <li class=\"nav-item \">\r\n                <a class=\"nav-link \" href=\" \">Register</a>\r\n            </li> -->\r\n            </ul>\r\n        </div>\r\n    </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<!-- <app-team-member></app-team-member> -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-team-member *ngIf=\"router.link == '/'\"></app-team-member> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/team-member/team-member.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/team-member/team-member.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"https://www.cholainsurance.com/portals/0/family-new.jpg\" alt=\"...\" class=\" img-fluid  \">\r\n<div class=\"w-auto p-2\" id=\"container\">\r\n    <p class=\"text-center\">Health Insurance today and secure your happiness starting at just ₹11.8/day*</p>\r\n</div>\r\n\r\n<div id=\"container-2\">\r\n    <div class=\"w-auto p-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <i style='font-size:24px' class='fa'>&#xf0fe;\r\n\r\n               Health Insurance online, in three easy steps.</i>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <i style=\"font-size:24px\" class=\"fa\">&#xf0a4; &nbsp; Fill Details</i>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <i style=\"font-size:24px\" class=\"fa\">&#xf0a4; &nbsp; Make Payments</i>\r\n\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <i style='font-size:24px' class='fa'>&#xf0a4; &nbsp; Make Payments</i>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"container-3\" class=\"w-auto p-4 text-center\">\r\n    <p>When It comes to your health, choose a brand trusted by 1 Crore+* Happy Customers</p>\r\n</div>\r\n<h4>&nbsp; Our Policies &nbsp; </h4>\r\n\r\n<br>\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <!--team-1-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"https://previews.123rf.com/images/grebeshkovmaxim/grebeshkovmaxim1812/grebeshkovmaxim181200362/113458774-heart-in-hand-help-and-protect-icon.jpg\" class=\"img-fluid\" />\r\n                    <h3>Active Assure Diamond Plan</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        Active Assure Diamond Plan from Aditya Birla comes at an affordable premium. This health insurance plan offers a range of benefits as well as extensive coverage. \r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-1-->\r\n\r\n        <!--team-2-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"http://www.stlawrence.org/uploads/7/1/7/8/71783827/natural-family-planning.jpg\" class=\"img-fluid\" />\r\n                    <h3>LifeSmart Health Insurance Plan</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        LifeSmart Health Insurance Plan from SBI General offers extensive coverage and benefits. Find out some of the major features of the policy below.\r\n\r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-2-->\r\n\r\n        <!--team-3-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"https://www.centerforhealthjournalism.org/files/title_images/FP%20logo.jpg\" class=\"img-fluid\" />\r\n                    <h3>Star Family Health Optima</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        Family Health Optima health insurance plan from Star Health Insurance has been formulated to offer protection for the entire family in exchange of a single premium payment under a floater Sum Insured. \r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-3-->\r\n\r\n        <!--team-4-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZdL-tWjBvOL09HhKznk24jc_LXk0BI96ZRhqPef7uMOZU793\" class=\"img-fluid\" />\r\n                    <h3>Max Bupa Health Companion</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        Sometimes an unforeseen illness can consume your hard earned lifelong savings, and force you in debts. Max Bupa Health Companion plan has been formulated to deal with all such health contingencies by securing you and your loved ones with a reliable health insurance policy\r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-4-->\r\n\r\n        <!--team-5-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejEY8vYZNCmeO99NKgPkaSFCEu1boBaa6n5S3h25vnbfadIET4g\" class=\"img-fluid\" />\r\n                    <h3> ERGO Health Suraksha</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        Health Suraksha plan from HDFC ERGO comes with a number of special features and benefits. Find them out below.\r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-5-->\r\n\r\n        <!--team-6-->\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"our-team-main\">\r\n\r\n                <div class=\"team-front\">\r\n                    <img src=\"https://conceptdraw.com/a3208c3/p16/preview/640/pict--family-hr-workflow-vector-stencils-library\" class=\"img-fluid\" />\r\n                    <h3>Happy Family Floater Policy</h3>\r\n\r\n                </div>\r\n\r\n                <div class=\"team-back\">\r\n                    <span>\r\n                        Oriental Insurance Company being one of the public sector general insurance companies offers effective health insurance plans. Happy Family Floater health insurance plan from Oriental Insurance Company offers extensive coverage and benefits.\r\n        </span>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--team-6-->\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- Team -->\r\n<section id=\"team\" class=\"pb-5\">\r\n    <div class=\"container\">\r\n        <h5 class=\"section-title h1\">OUR TEAM</h5>\r\n        <div class=\"row\">\r\n            <!-- Team member -->\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\r\n                    <div class=\"mainflip\">\r\n                        <div class=\"frontside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center\">\r\n                                    <p><img class=\" img-fluid\" src=\"https://avatars2.githubusercontent.com/u/32372993?s=400&v=4\" alt=\"card image\"></p>\r\n                                    <h4 class=\"card-title\">Kanhaiya Kumar</h4>\r\n                                    <p class=\"card-text\">Diaspark CLAD Team.</p>\r\n                                    <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"backside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center mt-4\">\r\n                                    <h4 class=\"card-title\">Kanhaiya Kumar</h4>\r\n                                    <p class=\"card-text\">Diaspark CLAD Team.</p>\r\n                                    <ul class=\"list-inline\">\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-facebook\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-twitter\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-skype\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-google\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- ./Team member -->\r\n            <!-- Team member -->\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\r\n                    <div class=\"mainflip\">\r\n                        <div class=\"frontside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center\">\r\n                                    <p><img class=\" img-fluid\" src=\"https://lh3.googleusercontent.com/-PJFtXOk96MY/XIIYRsAMlXI/AAAAAAAAAlw/dtKO7BGAUAUFuEVtxiYpESDO4OIFUhcGgCEwYBhgL/w139-h140-p/IMG_20180220_192352954.jpg\" alt=\"card image\"></p>\r\n                                    <h4 class=\"card-title\">Akshita Panchal</h4>\r\n                                    <p class=\"card-text\">Diaspark CLAD Team </p>\r\n                                    <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"backside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center mt-4\">\r\n                                    <h4 class=\"card-title\">>Akshita Panchal</h4>\r\n                                    <p class=\"card-text\">Diaspark CLAD Team</p>\r\n                                    <ul class=\"list-inline\">\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-facebook\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-twitter\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-skype\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-google\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- ./Team member -->\r\n            <!-- Team member -->\r\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\r\n                    <div class=\"mainflip\">\r\n                        <div class=\"frontside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center\">\r\n                                    <p><img class=\" img-fluid\" src=\"https://scontent-sin2-1.xx.fbcdn.net/v/t1.0-9/25396162_1419912071468091_3620373340622339296_n.jpg?_nc_cat=102&_nc_oc=AQkIIdqaIr87iZklIT6-1NmA0SLXd6x9GFNqN7VDelsDX-sDxlGEVz3BZnSmd2LZOMg&_nc_ht=scontent-sin2-1.xx&oh=b155765ec59108b20740d2c0cc4fc96a&oe=5E062679\"\r\n                                            alt=\"card image\"></p>\r\n                                    <h4 class=\"card-title\">Harsh Khare</h4>\r\n                                    <p class=\"card-text\">\r\n                                        <p>Diaspark CLAD Team</p>\r\n                                        <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"backside\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body text-center mt-4\">\r\n                                    <h4 class=\"card-title\">Harsh Khare</h4>\r\n                                    <p class=\"card-text\">Diaspark CLAD Team</p>\r\n                                    <ul class=\"list-inline\">\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-facebook\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-twitter\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-skype\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item\">\r\n                                            <a class=\"social-icon text-xs-center\" target=\"_blank\" href=\"#\">\r\n                                                <i class=\"fa fa-google\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- ./Team member -->\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Team -->\r\n\r\n<!-- Footer -->\r\n<footer class=\"page-footer font-small blue pt-4 bg-dark \">\r\n\r\n    <!-- Footer Links -->\r\n    <div class=\"container-fluid text-center text-md-left\">\r\n\r\n        <!-- Grid row -->\r\n        <div class=\"row\">\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-6 mt-md-0 mt-3\">\r\n\r\n                <!-- Content -->\r\n                <h5 class=\"text-uppercase\">Footer Content</h5>\r\n                <p>Here you can use rows and columns to organize your footer content.</p>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n            <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n                <!-- Links -->\r\n                <h5 class=\"text-uppercase\">Links</h5>\r\n\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <a href=\"#!\">Link 1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 4</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n                <!-- Links -->\r\n                <h5 class=\"text-uppercase\">Links</h5>\r\n\r\n                <ul class=\"list-unstyled\">\r\n                    <li>\r\n                        <a href=\"#!\">Link 1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#!\">Link 4</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n        </div>\r\n        <!-- Grid row -->\r\n\r\n    </div>\r\n    <!-- Footer Links -->\r\n\r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n\r\n    </div>\r\n    <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-login/user-login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-login/user-login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n                <h5 class=\"card-title align-self-center\"><strong>User Log In</strong></h5>\r\n                <div class=\"card-body row justify-content-center align-self-center\">\r\n\r\n                    <form [formGroup]=\"login\" (ngSubmit)=\"onUserSubmit()\">\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n                    Phone:\r\n                    <input type=\"text\" class=\"form-control phone\" formControlName=\"phone\">\r\n                </label>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-sm-12\">\r\n                            <label>\r\n                    Password:\r\n                    <input type=\"password\" class=\"form-control password\" formControlName=\"password\">\r\n                </label>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"text-center\">\r\n\r\n                            <button class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/home/about-us/about-us.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/about-us/about-us.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\n\r\np {\r\n    font-size: 16px;\r\n}\r\n\r\n.margin {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n.bg-1 {\r\n    background-color: #d0e0dd;\r\n    /* Green */\r\n    color: black;\r\n}\r\n\r\n.bg-2 {\r\n    background-color: #474e5d;\r\n    /* Dark Blue */\r\n    color: #ffffff;\r\n}\r\n\r\n.bg-3 {\r\n    background-color: #ffffff;\r\n    /* White */\r\n    color: #555555;\r\n}\r\n\r\n.bg-4 {\r\n    background-color: #2f2f2f;\r\n    /* Black Gray */\r\n    color: #fff;\r\n}\r\n\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n\r\n.navbar-nav li a:hover {\r\n    color: #1abc9c !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udDogMjBweCBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjZjVmNmY3O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uYmctMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlMGRkO1xyXG4gICAgLyogR3JlZW4gKi9cclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJnLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDtcclxuICAgIC8qIERhcmsgQmx1ZSAqL1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5iZy0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvKiBXaGl0ZSAqL1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuXHJcbi5iZy00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBCbGFjayBHcmF5ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/about-us/about-us.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/about-us/about-us.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/home/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/home/admin-login/admin-login.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/admin-login/admin-login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/admin-login/admin-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/admin-login/admin-login.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");




// import { AdminserviceService } from './adminservice.service';

let AdminLoginComponent = class AdminLoginComponent {
    constructor(formBuilder, routes, _authService) {
        this.formBuilder = formBuilder;
        this.routes = routes;
        this._authService = _authService;
    }
    ngOnInit() {
        this.login = this.formBuilder.group({
            seviceUsername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sevicePassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onAdminSubmit() {
        this._authService.adminlogin(this.login.value)
            .subscribe(res => {
            this.routes.navigate(['admin/dashboard'], { replaceUrl: true });
        });
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin-login/admin-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-login.component.css */ "./src/app/home/admin-login/admin-login.component.css")).default]
    })
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/home/agent-login/agent-login.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/agent-login/agent-login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-signin {\r\n    font-family: 'Acme', sans-serif;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n    }\r\n    \r\n    .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    }\r\n    \r\n    .card-signin .card-body {\r\n    padding: 2rem;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9hZ2VudC1sb2dpbi9hZ2VudC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDOztJQUVBO0lBQ0EsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7O0lBRUE7SUFDQSxhQUFhO0lBQ2IiLCJmaWxlIjoiLi4vc3JjL2FwcC9ob21lL2FnZW50LWxvZ2luL2FnZW50LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaWduaW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/home/agent-login/agent-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/agent-login/agent-login.component.ts ***!
  \***********************************************************/
/*! exports provided: AgentLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentLoginComponent", function() { return AgentLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/home/data.service.ts");






let AgentLoginComponent = class AgentLoginComponent {
    constructor(formBuilder, routes, _authService, dataService) {
        this.formBuilder = formBuilder;
        this.routes = routes;
        this._authService = _authService;
        this.dataService = dataService;
    }
    sendMessage() {
        // send message to subscribers via observable subject
        this.dataService.sendMessage('Message from Home Component to App Component!');
    }
    clearMessages() {
        // clear messages
        this.dataService.clearMessages();
    }
    ngOnInit() {
        if (this._authService.agentLoggedIn())
            this.routes.navigate(['agent/dashboard']);
        this.login = this.formBuilder.group({
            agentUsername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            agentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onAgentSubmit() {
        console.log(this.login.value);
        this._authService.agentlogin(this.login.value)
            .subscribe(res => {
            localStorage.setItem('token', res.token);
            this.dataService.sendMessage(res.agent);
            localStorage.setItem('ID', res.agent._id);
            this.routes.navigate(['agent/dashboard']);
        }, err => console.log("error", err));
        // this.routes.navigate(['admin/dashboard'], { replaceUrl: true });
    }
};
AgentLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
AgentLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agent-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/agent-login/agent-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-login.component.css */ "./src/app/home/agent-login/agent-login.component.css")).default]
    })
], AgentLoginComponent);



/***/ }),

/***/ "./src/app/home/confirm-password/confirm-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/confirm-password/confirm-password.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvY29uZmlybS1wYXNzd29yZC9jb25maXJtLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/home/confirm-password/confirm-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/confirm-password/confirm-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordComponent", function() { return ConfirmPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmPasswordComponent = class ConfirmPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/confirm-password/confirm-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-password.component.css */ "./src/app/home/confirm-password/confirm-password.component.css")).default]
    })
], ConfirmPasswordComponent);



/***/ }),

/***/ "./src/app/home/contact-us/contact-us.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/contact-us/contact-us.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\r\n}\r\n.contact-form{\r\n    background: #fff;\r\n    margin-top: 0;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}\r\n.contact-form .form-control{\r\n    border-radius:1rem;\r\n}\r\n.contact-image{\r\n    text-align: center;\r\n}\r\n.contact-image img{\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    transform: rotate(29deg);\r\n}\r\n.contact-form form{\r\n    padding: 14%;\r\n}\r\n.contact-form form .row{\r\n    margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n    margin-bottom: 8%;\r\n    margin-top: -10%;\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n    width: 50%;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #dc3545;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtBQUMvRDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNzJmZiwgIzAwYzZmZik7XHJcbn1cclxuLmNvbnRhY3QtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5jb250YWN0LWZvcm0gLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1yYWRpdXM6MXJlbTtcclxufVxyXG4uY29udGFjdC1pbWFnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFjdC1pbWFnZSBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cmVtO1xyXG4gICAgd2lkdGg6IDExJTtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI5ZGVnKTtcclxufVxyXG4uY29udGFjdC1mb3JtIGZvcm17XHJcbiAgICBwYWRkaW5nOiAxNCU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBmb3JtIC5yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNyU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBoM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG59XHJcbi5jb250YWN0LWZvcm0gLmJ0bkNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnRuQ29udGFjdFN1Ym1pdFxyXG57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/contact-us/contact-us.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/contact-us/contact-us.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");





let ContactUsComponent = class ContactUsComponent {
    // tslint:disable-next-line:variable-name
    constructor(formBuilder, routes, _authService) {
        this.formBuilder = formBuilder;
        this.routes = routes;
        this._authService = _authService;
    }
    ngOnInit() {
        this.contact = this.formBuilder.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: [''],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submit() {
        this._authService.contactlogin(this.contact.value)
            .subscribe(res => {
            console.log(res);
            alert('Data Submitted !! Our agent will get in touch with you ');
        });
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/home/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/home/email-verify/email-verify.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/email-verify/email-verify.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvZW1haWwtdmVyaWZ5L2VtYWlsLXZlcmlmeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/email-verify/email-verify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/email-verify/email-verify.component.ts ***!
  \*************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");





let EmailVerifyComponent = class EmailVerifyComponent {
    constructor(formBuilder, routes, _authService) {
        this.formBuilder = formBuilder;
        this.routes = routes;
        this._authService = _authService;
    }
    ngOnInit() {
        this.login = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submitOTP() {
        this._authService.verifyEmail(this.login.value)
            .subscribe(res => {
            this.verifyStatus = res.message;
            alert(this.verifyStatus);
            this.routes.navigate(['home/confirm-password']);
        }, err => console.log(err));
        console.log(this.login.value);
    }
};
EmailVerifyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
EmailVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-verify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/email-verify/email-verify.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-verify.component.css */ "./src/app/home/email-verify/email-verify.component.css")).default]
    })
], EmailVerifyComponent);



/***/ }),

/***/ "./src/app/home/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/footer/footer.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nfooter {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/home/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/header/header.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.nav-item {\r\n    padding: 2px;\r\n    margin-left: 7px;\r\n    color: black;\r\n}\r\n#nav_bar {\r\n    font-family: 'Gayathri', sans-serif;\r\n    font-size: 20px;\r\n    padding: 15px 70px;\r\n    color: rgb(241, 210, 210);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiLi4vc3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiNuYXZfYmFyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2F5YXRocmknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA3MHB4O1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDIxMCwgMjEwKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/home/data.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(_authService, dataService) {
        this._authService = _authService;
        this.dataService = dataService;
        this.messages = [];
        this.myData = {};
        this.subscription = this.dataService.getMessage().subscribe(message => {
            if (message) {
                this.messages.push(message);
                console.log(message);
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
HeaderComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/home/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/home/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/home/contact-us/contact-us.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/home/user-login/user-login.component.ts");
/* harmony import */ var _agent_login_agent_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent-login/agent-login.component */ "./src/app/home/agent-login/agent-login.component.ts");
/* harmony import */ var _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team-member/team-member.component */ "./src/app/home/team-member/team-member.component.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/home/email-verify/email-verify.component.ts");
/* harmony import */ var _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-password/confirm-password.component */ "./src/app/home/confirm-password/confirm-password.component.ts");











const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: '', component: _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_8__["TeamMemberComponent"] },
            { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
            { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
            { path: 'user-login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"] },
            { path: 'agent-login', component: _agent_login_agent_login_component__WEBPACK_IMPORTED_MODULE_7__["AgentLoginComponent"] },
            { path: 'email-verify', component: _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_9__["EmailVerifyComponent"] },
            { path: 'confirm-password', component: _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmPasswordComponent"] }
        ]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#c {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 40px;\r\n}\r\n\r\n#container {\r\n    background: #3a3f39;\r\n    margin-top: 0px;\r\n    color: whitesmoke;\r\n    font-size: 23px;\r\n    margin-left: 63px;\r\n    margin-right: 67px;\r\n}\r\n\r\n#container-2 {\r\n    background: #e9ecef;\r\n}\r\n\r\n#container-3 {\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 25px;\r\n    color: #429c0c;\r\n}\r\n\r\nbody {\r\n    text-align: center;\r\n    background: #fcfcfa;\r\n    color: #818078;\r\n    font-family: Futura, sans-serif;\r\n}\r\n\r\n.container {\r\n    max-width: 50%;\r\n    margin: 40px auto;\r\n}\r\n\r\nh4 {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\nh4:before,\r\nh4:after {\r\n    content: \"\";\r\n    flex: 1 1;\r\n    border-bottom: 2px solid #e6dede;\r\n    margin: auto;\r\n}\r\n\r\n/* FontAwesome for working BootSnippet :> */\r\n\r\n/* options */\r\n\r\nbody {\r\n    background: #00bcd4;\r\n}\r\n\r\nh1 {\r\n    color: #fff;\r\n    margin: 40px 0 60px 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.our-team-main {\r\n    width: 100%;\r\n    height: auto;\r\n    border-bottom: 5px #323233 solid;\r\n    background: #fff;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: 0.5s;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n.our-team-main img {\r\n    border-radius: 50%;\r\n    margin-bottom: 20px;\r\n    width: 90px;\r\n}\r\n\r\n.our-team-main h3 {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n.our-team-main p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.team-back {\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 5px 15px 0 15px;\r\n    text-align: left;\r\n    background: #fff;\r\n}\r\n\r\n.team-front {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 10;\r\n    background: #fff;\r\n    padding: 15px;\r\n    bottom: 0px;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.our-team-main:hover .team-front {\r\n    bottom: -200px;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.our-team-main:hover {\r\n    border-color: #777;\r\n    transition: 0.5s;\r\n}\r\n\r\n/*our-team-main*/\r\n\r\n/* team members */\r\n\r\n#team {\r\n    background: #eee !important;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\n\r\nsection {\r\n    padding: 60px 0;\r\n}\r\n\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#team .card {\r\n    border: none;\r\n    background: #ffffff;\r\n}\r\n\r\n.image-flip:hover .backside,\r\n.image-flip.hover .backside {\r\n    transform: rotateY(0deg);\r\n    border-radius: .25rem;\r\n}\r\n\r\n.image-flip:hover .frontside,\r\n.image-flip.hover .frontside {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.mainflip {\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -moz-transition: 1s;\r\n    -moz-transform: perspective(1000px);\r\n    -moz-transform-style: preserve-3d;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n    position: relative;\r\n}\r\n\r\n.frontside {\r\n    position: relative;\r\n    -webkit-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    z-index: 2;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.backside {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: white;\r\n    transform: rotateY(-180deg);\r\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n}\r\n\r\n.frontside,\r\n.backside {\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz-transition: 1s;\r\n    -moz-transform-style: preserve-3d;\r\n    -o-transition: 1s;\r\n    -o-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.frontside .card,\r\n.backside .card {\r\n    min-height: 312px;\r\n}\r\n\r\n.backside .card a {\r\n    font-size: 18px;\r\n    color: #007b5e !important;\r\n}\r\n\r\n.frontside .card .card-title,\r\n.backside .card .card-title {\r\n    color: #007b5e !important;\r\n}\r\n\r\n.frontside .card .card-body img {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsU0FBUztJQUNULGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUdBLDJDQUEyQzs7QUFHM0MsWUFBWTs7QUFFWjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFHQSxnQkFBZ0I7O0FBR2hCLGlCQUFpQjs7QUFFakI7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBTUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFLSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsaUJBQWlCO0lBS2pCLDJCQUEyQjtJQUczQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7O0lBRUksbUNBQW1DO0lBR25DLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2EzZjM5O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjdweDtcclxufVxyXG5cclxuI2NvbnRhaW5lci0yIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbn1cclxuXHJcbiNjb250YWluZXItMyB7XHJcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM0MjljMGM7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZmNmYTtcclxuICAgIGNvbG9yOiAjODE4MDc4O1xyXG4gICAgZm9udC1mYW1pbHk6IEZ1dHVyYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuaDQ6YmVmb3JlLFxyXG5oNDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNmRlZGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKiBGb250QXdlc29tZSBmb3Igd29ya2luZyBCb290U25pcHBldCA6PiAqL1xyXG5cclxuXHJcbi8qIG9wdGlvbnMgKi9cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzAwYmNkNDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDQwcHggMCA2MHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ub3VyLXRlYW0tbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDVweCAjMzIzMjMzIHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRlYW0tYmFjayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweCAwIDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnRlYW0tZnJvbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4ub3VyLXRlYW0tbWFpbjpob3ZlciAudGVhbS1mcm9udCB7XHJcbiAgICBib3R0b206IC0yMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzc3NztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcblxyXG4vKm91ci10ZWFtLW1haW4qL1xyXG5cclxuXHJcbi8qIHRlYW0gbWVtYmVycyAqL1xyXG5cclxuI3RlYW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA4ZDZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTA4ZDZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiNWU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiNWU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA3YjVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiN0ZWFtIC5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pbWFnZS1mbGlwOmhvdmVyIC5iYWNrc2lkZSxcclxuLmltYWdlLWZsaXAuaG92ZXIgLmJhY2tzaWRlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtZmxpcDpob3ZlciAuZnJvbnRzaWRlLFxyXG4uaW1hZ2UtZmxpcC5ob3ZlciAuZnJvbnRzaWRlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLm1haW5mbGlwIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDFzO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZyb250c2lkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJhY2tzaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxufVxyXG5cclxuLmZyb250c2lkZSxcclxuLmJhY2tzaWRlIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtby10cmFuc2l0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmZyb250c2lkZSAuY2FyZCxcclxuLmJhY2tzaWRlIC5jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDMxMnB4O1xyXG59XHJcblxyXG4uYmFja3NpZGUgLmNhcmQgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLXRpdGxlLFxyXG4uYmFja3NpZGUgLmNhcmQgLmNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    onSlide(slideEvent) {
        console.log(slideEvent.source);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT);
        console.log(slideEvent.paused);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR);
        console.log(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/home/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/home/contact-us/contact-us.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/home/user-login/user-login.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/home/admin-login/admin-login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _agent_login_agent_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agent-login/agent-login.component */ "./src/app/home/agent-login/agent-login.component.ts");
/* harmony import */ var _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./team-member/team-member.component */ "./src/app/home/team-member/team-member.component.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/home/email-verify/email-verify.component.ts");
/* harmony import */ var _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./confirm-password/confirm-password.component */ "./src/app/home/confirm-password/confirm-password.component.ts");
















let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"],
            _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
            _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_9__["AdminLoginComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _agent_login_agent_login_component__WEBPACK_IMPORTED_MODULE_12__["AgentLoginComponent"],
            _team_member_team_member_component__WEBPACK_IMPORTED_MODULE_13__["TeamMemberComponent"],
            _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_14__["EmailVerifyComponent"],
            _confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/team-member/team-member.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/team-member/team-member.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#c {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 40px;\r\n}\r\n\r\n#container {\r\n    background: #3a3f39;\r\n    margin-top: 0px;\r\n    color: whitesmoke;\r\n    font-size: 23px;\r\n    margin-left: 63px;\r\n    margin-right: 67px;\r\n}\r\n\r\n#container-2 {\r\n    background: #e9ecef;\r\n}\r\n\r\n#container-3 {\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 25px;\r\n    color: #429c0c;\r\n}\r\n\r\nbody {\r\n    text-align: center;\r\n    background: #fcfcfa;\r\n    color: #818078;\r\n    font-family: Futura, sans-serif;\r\n}\r\n\r\n.container {\r\n    max-width: 50%;\r\n    margin: 40px auto;\r\n}\r\n\r\nh4 {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\nh4:before,\r\nh4:after {\r\n    content: \"\";\r\n    flex: 1 1;\r\n    border-bottom: 2px solid #e6dede;\r\n    margin: auto;\r\n}\r\n\r\n/* FontAwesome for working BootSnippet :> */\r\n\r\n/* options */\r\n\r\nbody {\r\n    background: #00bcd4;\r\n}\r\n\r\nh1 {\r\n    color: #fff;\r\n    margin: 40px 0 60px 0;\r\n    font-weight: 300;\r\n}\r\n\r\n.our-team-main {\r\n    width: 100%;\r\n    height: auto;\r\n    border-bottom: 5px #323233 solid;\r\n    background: #fff;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: 0.5s;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n.our-team-main img {\r\n    border-radius: 50%;\r\n    margin-bottom: 20px;\r\n    width: 90px;\r\n}\r\n\r\n.our-team-main h3 {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n}\r\n\r\n.our-team-main p {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.team-back {\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 5px 15px 0 15px;\r\n    text-align: left;\r\n    background: #fff;\r\n}\r\n\r\n.team-front {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 10;\r\n    background: #fff;\r\n    padding: 15px;\r\n    bottom: 0px;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.our-team-main:hover .team-front {\r\n    bottom: -200px;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.our-team-main:hover {\r\n    border-color: #777;\r\n    transition: 0.5s;\r\n}\r\n\r\n/*our-team-main*/\r\n\r\n/* team members */\r\n\r\n#team {\r\n    background: #eee !important;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\n\r\nsection {\r\n    padding: 60px 0;\r\n}\r\n\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#team .card {\r\n    border: none;\r\n    background: #ffffff;\r\n}\r\n\r\n.image-flip:hover .backside,\r\n.image-flip.hover .backside {\r\n    transform: rotateY(0deg);\r\n    border-radius: .25rem;\r\n}\r\n\r\n.image-flip:hover .frontside,\r\n.image-flip.hover .frontside {\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.mainflip {\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -moz-transition: 1s;\r\n    -moz-transform: perspective(1000px);\r\n    -moz-transform-style: preserve-3d;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n    position: relative;\r\n}\r\n\r\n.frontside {\r\n    position: relative;\r\n    -webkit-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    z-index: 2;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.backside {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: white;\r\n    transform: rotateY(-180deg);\r\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n}\r\n\r\n.frontside,\r\n.backside {\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz-transition: 1s;\r\n    -moz-transform-style: preserve-3d;\r\n    -o-transition: 1s;\r\n    -o-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.frontside .card,\r\n.backside .card {\r\n    min-height: 312px;\r\n}\r\n\r\n.backside .card a {\r\n    font-size: 18px;\r\n    color: #007b5e !important;\r\n}\r\n\r\n.frontside .card .card-title,\r\n.backside .card .card-title {\r\n    color: #007b5e !important;\r\n}\r\n\r\n.frontside .card .card-body img {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS90ZWFtLW1lbWJlci90ZWFtLW1lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFHQSwyQ0FBMkM7O0FBRzNDLFlBQVk7O0FBRVo7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBR0EsZ0JBQWdCOztBQUdoQixpQkFBaUI7O0FBRWpCO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQU1JLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7O0lBS0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGlCQUFpQjtJQUtqQiwyQkFBMkI7SUFHM0IsK0NBQStDO0FBQ25EOztBQUVBOztJQUVJLG1DQUFtQztJQUduQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9ob21lL3RlYW0tbWVtYmVyL3RlYW0tbWVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYTNmMzk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2M3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2N3B4O1xyXG59XHJcblxyXG4jY29udGFpbmVyLTIge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxufVxyXG5cclxuI2NvbnRhaW5lci0zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzQyOWMwYztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZhO1xyXG4gICAgY29sb3I6ICM4MTgwNzg7XHJcbiAgICBmb250LWZhbWlseTogRnV0dXJhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5oNDpiZWZvcmUsXHJcbmg0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBmbGV4OiAxIDE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2ZGVkZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi8qIEZvbnRBd2Vzb21lIGZvciB3b3JraW5nIEJvb3RTbmlwcGV0IDo+ICovXHJcblxyXG5cclxuLyogb3B0aW9ucyAqL1xyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogNDBweCAwIDYwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4ICMzMjMyMzMgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLm91ci10ZWFtLW1haW4gaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm91ci10ZWFtLW1haW4gaDMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm91ci10ZWFtLW1haW4gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGVhbS1iYWNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDAgMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4udGVhbS1mcm9udCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5vdXItdGVhbS1tYWluOmhvdmVyIC50ZWFtLWZyb250IHtcclxuICAgIGJvdHRvbTogLTIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLm91ci10ZWFtLW1haW46aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzc3O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuXHJcbi8qb3VyLXRlYW0tbWFpbiovXHJcblxyXG5cclxuLyogdGVhbSBtZW1iZXJzICovXHJcblxyXG4jdGVhbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlcixcclxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDhkNmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMxMDhkNmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2I1ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2I1ZTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDdiNWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI3RlYW0gLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmltYWdlLWZsaXA6aG92ZXIgLmJhY2tzaWRlLFxyXG4uaW1hZ2UtZmxpcC5ob3ZlciAuYmFja3NpZGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuXHJcbi5pbWFnZS1mbGlwOmhvdmVyIC5mcm9udHNpZGUsXHJcbi5pbWFnZS1mbGlwLmhvdmVyIC5mcm9udHNpZGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4ubWFpbmZsaXAge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZnJvbnRzaWRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYmFja3NpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG59XHJcblxyXG4uZnJvbnRzaWRlLFxyXG4uYmFja3NpZGUge1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1vLXRyYW5zaXRpb246IDFzO1xyXG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAxcztcclxuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uZnJvbnRzaWRlIC5jYXJkLFxyXG4uYmFja3NpZGUgLmNhcmQge1xyXG4gICAgbWluLWhlaWdodDogMzEycHg7XHJcbn1cclxuXHJcbi5iYWNrc2lkZSAuY2FyZCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDA3YjVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtdGl0bGUsXHJcbi5iYWNrc2lkZSAuY2FyZCAuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/team-member/team-member.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/team-member/team-member.component.ts ***!
  \***********************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamMemberComponent = class TeamMemberComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-member',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-member.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/team-member/team-member.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-member.component.css */ "./src/app/home/team-member/team-member.component.css")).default]
    })
], TeamMemberComponent);



/***/ }),

/***/ "./src/app/home/user-login/user-login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/user-login/user-login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-signin {\r\n    font-family: 'Acme', sans-serif;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n    padding: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiIuLi9zcmMvYXBwL2hvbWUvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaWduaW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/user-login/user-login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/user-login/user-login.component.ts ***!
  \*********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/home/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/home/data.service.ts");




// import {UserServiceService} from './user-service.service';


let UserLoginComponent = class UserLoginComponent {
    constructor(formBuilder, routes, _authService, dataService) {
        this.formBuilder = formBuilder;
        this.routes = routes;
        this._authService = _authService;
        this.dataService = dataService;
    }
    sendMessage() {
        // send message to subscribers via observable subject
        this.dataService.sendMessage('Message from Home Component to App Component!');
    }
    clearMessages() {
        // clear messages
        this.dataService.clearMessages();
    }
    ngOnInit() {
        this.login = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onUserSubmit() {
        this._authService.userlogin(this.login.value)
            .subscribe(res => {
            localStorage.setItem('userToken', res.token);
            console.log("details of user", res.userDetails);
            this.dataService.sendMessage(res.userDetails);
            this.routes.navigate(['user/dashboard'], { replaceUrl: true });
        });
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-login/user-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.css */ "./src/app/home/user-login/user-login.component.css")).default]
    })
], UserLoginComponent);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map