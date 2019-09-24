(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/agentservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/agentservice.service.ts ***!
  \***********************************************/
/*! exports provided: AgentserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentserviceService", function() { return AgentserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AgentserviceService = class AgentserviceService {
    constructor(http) {
        this.http = http;
        this._url = 'http://localhost:8080/users/save';
        this._urlgetall = 'http://localhost:8080/users';
        this.getAgent = `http://localhost:8080/agent/viewAgent`;
    }
    registeration(reg) {
        return this.http.post(this._url, reg);
    }
    get_Users() {
        return this.http.get(this._urlgetall);
    }
    getAgentDetail() {
        return this.http.get(this.getAgent);
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



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map