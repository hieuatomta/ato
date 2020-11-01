(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "J7gg":
    /*!***************************************************!*\
      !*** ./src/app/@core/services/objects.service.ts ***!
      \***************************************************/

    /*! exports provided: ObjectsService */

    /***/
    function J7gg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObjectsService", function () {
        return ObjectsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shares/utils/request-util */
      "VvIO");

      var ObjectsService = /*#__PURE__*/function () {
        function ObjectsService(http) {
          _classCallCheck(this, ObjectsService);

          this.http = http;
        }

        _createClass(ObjectsService, [{
          key: "query",
          value: function query() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/getAll"), {
              observe: 'response'
            });
          }
        }, {
          key: "getAllObjRoleAction",
          value: function getAllObjRoleAction(id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/getAllObjRoleAction/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "updateObjRoleAction",
          value: function updateObjRoleAction(data) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/updateObjRoleAction"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "doSearch",
          value: function doSearch(data, req) {
            var options = Object(_shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__["createRequestOption"])(req);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/doSearch"), data, {
              params: options,
              observe: 'response'
            });
          }
        }, {
          key: "update",
          value: function update(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/update"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "insert",
          value: function insert(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/insert"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/delete"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "getParent",
          value: function getParent() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/getParent"), {
              observe: 'response'
            });
          }
        }, {
          key: "getTreeParent",
          value: function getTreeParent() {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/object/getTreeParent"), {}, {
              observe: 'response'
            });
          }
        }]);

        return ObjectsService;
      }();

      ObjectsService.ɵfac = function ObjectsService_Factory(t) {
        return new (t || ObjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ObjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ObjectsService,
        factory: ObjectsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VvIO":
    /*!**********************************************!*\
      !*** ./src/app/shares/utils/request-util.ts ***!
      \**********************************************/

    /*! exports provided: createRequestOption */

    /***/
    function VvIO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createRequestOption", function () {
        return createRequestOption;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var createRequestOption = function createRequestOption(req) {
        var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();

        if (req) {
          Object.keys(req).forEach(function (key) {
            if (key !== 'sort' && req[key] !== null && req[key] !== undefined) {
              options = options.set(key, req[key]);
            }
          });

          if (req.sort) {
            req.sort.forEach(function (val) {
              options = options.append('sort', val);
            });
          }
        }

        return options;
      };
      /***/

    },

    /***/
    "bRc+":
    /*!*************************************************!*\
      !*** ./src/app/@core/services/login.service.ts ***!
      \*************************************************/

    /*! exports provided: LoginService */

    /***/
    function bRc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(_login) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/login"), _login, {
              observe: 'response'
            });
          }
        }, {
          key: "authenticationcate",
          value: function authenticationcate(_authenticationcate) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/authenticationcate"), _authenticationcate, {
              observe: 'response'
            });
          }
        }, {
          key: "changePass",
          value: function changePass(_changePass) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/changePass"), _changePass, {
              observe: 'response'
            });
          }
        }, {
          key: "sendSimpleEmail",
          value: function sendSimpleEmail(_sendSimpleEmail) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/sendSimpleEmail"), _sendSimpleEmail, {
              observe: 'response'
            });
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "e7jG":
    /*!**************************************************!*\
      !*** ./src/app/@core/services/action.service.ts ***!
      \**************************************************/

    /*! exports provided: ActionService */

    /***/
    function e7jG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionService", function () {
        return ActionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shares/utils/request-util */
      "VvIO");

      var ActionService = /*#__PURE__*/function () {
        function ActionService(http) {
          _classCallCheck(this, ActionService);

          this.http = http;
        }

        _createClass(ActionService, [{
          key: "query",
          value: function query() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/action/getAll"), {
              observe: 'response'
            });
          }
        }, {
          key: "doSearch",
          value: function doSearch(req, body) {
            var options = Object(_shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__["createRequestOption"])(req);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/action/doSearch"), body, {
              params: options,
              observe: 'response'
            });
          }
        }, {
          key: "update",
          value: function update(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/action/update"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "insert",
          value: function insert(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/action/insert"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/action/").concat(id));
          }
        }]);

        return ActionService;
      }();

      ActionService.ɵfac = function ActionService_Factory(t) {
        return new (t || ActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ActionService,
        factory: ActionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jFf0":
    /*!*************************************************!*\
      !*** ./src/app/@core/services/roles.service.ts ***!
      \*************************************************/

    /*! exports provided: RolesService */

    /***/
    function jFf0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesService", function () {
        return RolesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shares/utils/request-util */
      "VvIO");

      var RolesService = /*#__PURE__*/function () {
        function RolesService(http) {
          _classCallCheck(this, RolesService);

          this.http = http;
        }

        _createClass(RolesService, [{
          key: "query",
          value: function query() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/roles/getAll"), {
              observe: 'response'
            });
          }
        }, {
          key: "doSearch",
          value: function doSearch(req, body) {
            var options = Object(_shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__["createRequestOption"])(req);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/roles/doSearch"), body, {
              params: options,
              observe: 'response'
            });
          }
        }, {
          key: "update",
          value: function update(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/roles/update"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "insert",
          value: function insert(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/roles/insert"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/roles/").concat(id));
          }
        }]);

        return RolesService;
      }();

      RolesService.ɵfac = function RolesService_Factory(t) {
        return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RolesService,
        factory: RolesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "s26F":
    /*!******************************!*\
      !*** ./src/app/validator.ts ***!
      \******************************/

    /*! exports provided: notSpace, email, notSpaceLogin, validEmail, validDate1, validDate, checkPass, checkUser, validPassword, passwordsMatchValidator */

    /***/
    function s26F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notSpace", function () {
        return notSpace;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "email", function () {
        return email;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notSpaceLogin", function () {
        return notSpaceLogin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validEmail", function () {
        return validEmail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validDate1", function () {
        return validDate1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validDate", function () {
        return validDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkPass", function () {
        return checkPass;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkUser", function () {
        return checkUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validPassword", function () {
        return validPassword;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "passwordsMatchValidator", function () {
        return passwordsMatchValidator;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function notSpace(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value;
          var regex = /^.*\s+.*$/;

          if (regex.test(value)) {
            return {
              'space': true
            };
          }
        }

        return null;
      }

      function email(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value;

          if (value != null && value.trim().length !== 0) {
            console.log(value.trim().length);
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regex.test(value)) {
              return {
                'email': true
              };
            }
          }
        }

        return null;
      }

      function notSpaceLogin(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value.trim();
          var regex = /^.*\s+.*$/;

          if (regex.test(value)) {
            return {
              'space': true
            };
          }
        }

        return null;
      }

      function validEmail(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value;

          if (value == null || value.trim().length === 0) {
            return {
              'required': true
            };
          }

          var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!regex.test(value)) {
            return {
              'email': true
            };
          }
        }

        return null;
      }

      function validDate1(control) {
        var _a, _b;

        console.log((_b = (_a = control.errors) === null || _a === void 0 ? void 0 : _a.nbDatepickerParse) === null || _b === void 0 ? void 0 : _b.value);
        var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

        if (regex.test(control.value)) {
          return {
            'date': true
          };
        }

        return null;
      }

      function validDate(control) {
        var d = null;

        if (control && control.value != null) {
          d = control.value; // const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
          // if (!regex.test(value)) {
          //   return {'date': true};
          // }

          if (Object.prototype.toString.call(d) === '[object Date]') {
            // it is a date
            if (isNaN(d.getTime())) {
              // d.valueOf() could also work
              // date is not valid
              return {
                'date': true
              };
            } else {
              return null; // date is valid
            }
          } else {
            return {
              'date': true
            }; // not a date
          }
        }

        return null;
      }

      function checkPass(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value;

          if (value == null || value.trim().length === 0) {
            return {
              'required': true
            };
          }

          if (value.trim().length > 0 && value.trim().length < 6) {
            return {
              'minlength': true
            };
          }

          if (value.trim().length > 60) {
            return {
              'maxlength': true
            };
          }

          return null;
        }
      }

      function checkUser(control) {
        var value = null;

        if (control && control.value != null) {
          value = control.value;

          if (value == null || value.trim().length === 0) {
            return {
              'required': true
            };
          }

          if (value.trim().length > 50) {
            return {
              'usersmaxlength': true
            };
          }

          return null;
        }
      }

      function validPassword(form) {
        if (form.get('newPass') && form.get('comPass')) {
          if (form.get('newPass').value === null || form.get('newPass').value === '' || form.get('newPass').value === undefined) {
            return null;
          }

          if (form.get('newPass').value === form.get('comPass').value) {
            form.get('comPass').setErrors(null);
            return null;
          }

          form.get('comPass').setErrors({
            passwordMustMatchChange: true
          });
        }

        return null;
      }

      function passwordsMatchValidator(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

        if (form.get('pass') || form.get('rePassword')) {
          var regex = /^.*\s+.*$/;

          if (((_a = form.get('pass').value) === null || _a === void 0 ? void 0 : _a.length) === 0 && ((_b = form.get('rePassword').value) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            form.get('pass').setValue(null);
            form.get('rePassword').setValue(null);
            form.get('pass').setErrors(null);
            form.get('rePassword').setErrors(null);
            return null;
          }

          if (((_c = form.get('pass').value) === null || _c === void 0 ? void 0 : _c.length) === 0) {
            form.get('pass').setValue(null);
            form.get('pass').setErrors(null);
            return null;
          }

          if (((_d = form.get('rePassword').value) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            form.get('rePassword').setValue(null);
            form.get('rePassword').setErrors(null);
            return null;
          }

          if (regex.test(form.get('pass').value)) {
            form.get('pass').setErrors({
              space: true
            });
            return null;
          }

          if (regex.test(form.get('rePassword').value)) {
            form.get('rePassword').setErrors({
              space: true
            });
            return null;
          }

          if (((_e = form.get('pass').value) === null || _e === void 0 ? void 0 : _e.length) < 6 && ((_f = form.get('pass').value) === null || _f === void 0 ? void 0 : _f.length) > 0) {
            form.get('pass').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6));
            return null;
          }

          if (((_g = form.get('pass').value) === null || _g === void 0 ? void 0 : _g.length) > 60) {
            form.get('pass').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(60));
            return null;
          }

          if (((_h = form.get('rePassword').value) === null || _h === void 0 ? void 0 : _h.length) < 6 && ((_j = form.get('rePassword').value) === null || _j === void 0 ? void 0 : _j.length) > 0) {
            form.get('rePassword').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6));
            return null;
          }

          if (((_l = (_k = form.get('pass')) === null || _k === void 0 ? void 0 : _k.value) === null || _l === void 0 ? void 0 : _l.length) > 60) {
            form.get('rePassword').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(60));
            return null;
          }

          if (form.get('pass').value === null || form.get('pass').value === '' || form.get('pass').value === undefined) {
            return null;
          }

          if (form.get('pass').value === form.get('rePassword').value) {
            form.get('rePassword').setErrors(null);
            return null;
          }

          if (form.get('rePassword').value === null) {
            return null;
          }

          form.get('rePassword').setErrors({
            passwordMustMatchChange: true
          });
        }

        return null;
      }
      /***/

    },

    /***/
    "vqVJ":
    /*!*************************************************!*\
      !*** ./src/app/@core/services/users.service.ts ***!
      \*************************************************/

    /*! exports provided: UsersService */

    /***/
    function vqVJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shares/utils/request-util */
      "VvIO");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(http) {
          _classCallCheck(this, UsersService);

          this.http = http;
        }

        _createClass(UsersService, [{
          key: "doSearch",
          value: function doSearch(req, body) {
            var options = Object(_shares_utils_request_util__WEBPACK_IMPORTED_MODULE_3__["createRequestOption"])(req);
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/doSearch"), body, {
              params: options,
              observe: 'response'
            });
          }
        }, {
          key: "update",
          value: function update(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/update"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "insert",
          value: function insert(data) {
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/insert"), data, {
              observe: 'response'
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/users/").concat(id));
          }
        }]);

        return UsersService;
      }();

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map