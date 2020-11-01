(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~homes-tables-tables-module~major-image-management-image-management-module~sys_config-actions~a086e64d"], {
    /***/
    "RS3s":
    /*!*******************************************************************************!*\
      !*** ./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js ***!
      \*******************************************************************************/

    /*! exports provided: Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableComponent, Ng2SmartTableModule, ServerDataSource, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

    /***/
    function RS3s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cell", function () {
        return Cell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultEditor", function () {
        return DefaultEditor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultFilter", function () {
        return DefaultFilter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDataSource", function () {
        return LocalDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SmartTableComponent", function () {
        return Ng2SmartTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SmartTableModule", function () {
        return Ng2SmartTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerDataSource", function () {
        return ServerDataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CellModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return CellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵba", function () {
        return TbodyEditDeleteComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
        return TbodyCustomComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
        return Ng2SmartTableTbodyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
        return THeadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
        return ActionsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
        return ActionsTitleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
        return AddButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
        return CheckboxSelectAllComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
        return ColumnTitleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
        return TitleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
        return TheadFitlersRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
        return TheadFormRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
        return TheadTitlesRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
        return Ng2SmartTableTheadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
        return Row;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
        return DataSet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
        return DataSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return EditCellDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return CustomEditComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return DefaultEditComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return EditCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return CheckboxEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return CompleterEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return InputEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return SelectEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return TextareaEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return CustomViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return ViewCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return FilterModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return FilterDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return FilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return DefaultFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return CustomFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return CheckboxFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵt", function () {
        return CompleterFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵu", function () {
        return InputFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵv", function () {
        return SelectFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵw", function () {
        return PagerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵx", function () {
        return PagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵy", function () {
        return TBodyModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵz", function () {
        return TbodyCreateCancelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @akveo/ng2-completer */
      "hPRF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /**
       * Extending object that entered in first argument.
       *
       * Returns extended object or false if have no target object or incorrect type.
       *
       * If you wish to clone source object (without modify it), just use empty new
       * object as first argument, like this:
       *   deepExtend({}, yourObj_1, [yourObj_N]);
       */


      function CellComponent_table_cell_view_mode_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "table-cell-view-mode", 2);
        }

        if (rf & 2) {
          var ctx_r540 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r540.cell);
        }
      }

      function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r543 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table-cell-edit-mode", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r543);

            var ctx_r542 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r542.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r541.cell)("inputClass", ctx_r541.inputClass);
        }
      }

      var _c0 = ["dynamicTarget"];

      function CustomEditComponent_ng_template_0_Template(rf, ctx) {}

      function DefaultEditComponent_select_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r552 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r552);

            var ctx_r551 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r551.onClick($event);
          })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r552);

            var ctx_r553 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r553.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r552);

            var ctx_r554 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r554.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r546.cell)("inputClass", ctx_r546.inputClass);
        }
      }

      function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r556 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "textarea-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r556);

            var ctx_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r555.onClick($event);
          })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r556);

            var ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r557.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r556);

            var ctx_r558 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r558.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r547 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r547.cell)("inputClass", ctx_r547.inputClass);
        }
      }

      function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r560 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "checkbox-editor", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r560);

            var ctx_r559 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r559.onClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r548.cell)("inputClass", ctx_r548.inputClass);
        }
      }

      function DefaultEditComponent_completer_editor_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "completer-editor", 7);
        }

        if (rf & 2) {
          var ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r549.cell);
        }
      }

      function DefaultEditComponent_input_editor_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r562 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input-editor", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r562);

            var ctx_r561 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r561.onClick($event);
          })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r562);

            var ctx_r563 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r563.onEdited($event);
          })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r562);

            var ctx_r564 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r564.onStopEditing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r550.cell)("inputClass", ctx_r550.inputClass);
        }
      }

      function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r568 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table-cell-custom-editor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r568);

            var ctx_r567 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r567.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r565.cell)("inputClass", ctx_r565.inputClass);
        }
      }

      function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r570 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table-cell-default-editor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r570);

            var ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r569.onEdited($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r566 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r566.cell)("inputClass", ctx_r566.inputClass);
        }
      }

      function SelectEditorComponent_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r572 = ctx.$implicit;

          var ctx_r571 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r572.value)("selected", option_r572.value === ctx_r571.cell.getValue());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r572.title, " ");
        }
      }

      function CustomViewComponent_ng_template_0_Template(rf, ctx) {}

      function ViewCellComponent_custom_view_component_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "custom-view-component", 4);
        }

        if (rf & 2) {
          var ctx_r575 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", ctx_r575.cell);
        }
      }

      function ViewCellComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 5);
        }

        if (rf & 2) {
          var ctx_r576 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r576.cell.getValue(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function ViewCellComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r577.cell.getValue());
        }
      }

      function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r582 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "custom-table-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r582);

            var ctx_r581 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r581.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r579 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r579.query)("column", ctx_r579.column)("source", ctx_r579.source)("inputClass", ctx_r579.inputClass);
        }
      }

      function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r584 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "default-table-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r584);

            var ctx_r583 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r583.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r580 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r580.query)("column", ctx_r580.column)("source", ctx_r580.source)("inputClass", ctx_r580.inputClass);
        }
      }

      function FilterComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r578 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r578.column.getFilterType());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "custom");
        }
      }

      function DefaultFilterComponent_select_filter_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r590 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r590);

            var ctx_r589 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r589.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r585 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r585.query)("ngClass", ctx_r585.inputClass)("column", ctx_r585.column);
        }
      }

      function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r592 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "checkbox-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r592);

            var ctx_r591 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r591.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r586 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r586.query)("ngClass", ctx_r586.inputClass)("column", ctx_r586.column);
        }
      }

      function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r594 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "completer-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r594);

            var ctx_r593 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r593.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r587 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r587.query)("ngClass", ctx_r587.inputClass)("column", ctx_r587.column);
        }
      }

      function DefaultFilterComponent_input_filter_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r596 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r596);

            var ctx_r595 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r595.onFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r588 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("query", ctx_r588.query)("ngClass", ctx_r588.inputClass)("column", ctx_r588.column);
        }
      }

      function CustomFilterComponent_ng_template_0_Template(rf, ctx) {}

      function CheckboxFilterComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r601 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r601);

            var ctx_r600 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r600.resetFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r599 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r599.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
        }
      }

      var _c1 = ["inputControl"];

      function SelectFilterComponent_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r604 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r604.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r604.title, " ");
        }
      }

      function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", page_r608, " ");
        }
      }

      function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r614 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r614);

            var page_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r612 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r612.paginate(page_r608);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r608 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r608);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          active: a0
        };
      };

      function PagerComponent_nav_0_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r608 = ctx.$implicit;

          var ctx_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, ctx_r607.getPage() == page_r608));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r607.getPage() == page_r608);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r607.getPage() != page_r608);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          disabled: a0
        };
      };

      function PagerComponent_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r617 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r617);

            var ctx_r616 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r616.getPage() == 1 ? false : ctx_r616.paginate(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "First");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r617);

            var ctx_r618 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r618.getPage() == 1 ? false : ctx_r618.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r617);

            var ctx_r619 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r619.getPage() == ctx_r619.getLast() ? false : ctx_r619.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r617);

            var ctx_r620 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r620.getPage() == ctx_r620.getLast() ? false : ctx_r620.paginate(ctx_r620.getLast());
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Last");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r605 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c3, ctx_r605.getPage() == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, ctx_r605.getPage() == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r605.getPages());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c3, ctx_r605.getPage() == ctx_r605.getLast()));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c3, ctx_r605.getPage() == ctx_r605.getLast()));
        }
      }

      function PagerComponent_nav_1_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r622 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r622);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r622);
        }
      }

      function PagerComponent_nav_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r624 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Per Page: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

            var ctx_r623 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r623.onChangePerPage($event);
          })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r624);

            var ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r625.currentPerPage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r606 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r606.currentPerPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r606.perPageSelect);
        }
      }

      var _c4 = ["ng2-st-tbody", ""];

      function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r637 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r637);

            var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r635 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r635.multipleSelectRow.emit(row_r628);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r628.isSelected);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r640 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r640);

            var ctx_r639 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r639.custom.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r640);

            var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r641 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r641.edit.emit(row_r628);
          })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r640);

            var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r643["delete"].emit(row_r628);
          })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r640);

            var ctx_r645 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r645.editRowSelect.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r630.grid)("row", row_r628)("source", ctx_r630.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r630.grid)("deleteConfirm", ctx_r630.deleteConfirm)("editConfirm", ctx_r630.editConfirm)("row", row_r628)("source", ctx_r630.source);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r631 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r631.grid)("row", row_r628)("editConfirm", ctx_r631.editConfirm);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng2-smart-table-cell", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r648 = ctx.$implicit;

          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", cell_r648)("grid", ctx_r632.grid)("row", row_r628)("isNew", false)("mode", ctx_r632.mode)("editConfirm", ctx_r632.editConfirm)("inputClass", ctx_r632.editInputClass)("isInEditing", row_r628.isInEditing);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r633 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r633.grid)("row", row_r628)("editConfirm", ctx_r633.editConfirm);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r652 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r652);

            var ctx_r651 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r651.custom.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r652);

            var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r653 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r653.edit.emit(row_r628);
          })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r652);

            var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r655 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r655["delete"].emit(row_r628);
          })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r652);

            var ctx_r657 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r657.editRowSelect.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r634 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r634.grid)("row", row_r628)("source", ctx_r634.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r634.grid)("deleteConfirm", ctx_r634.deleteConfirm)("editConfirm", ctx_r634.editConfirm)("row", row_r628)("source", ctx_r634.source);
        }
      }

      var _c5 = function _c5(a0) {
        return {
          selected: a0
        };
      };

      function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r660 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r660);

            var row_r628 = ctx.$implicit;

            var ctx_r659 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r659.userSelectRow.emit(row_r628);
          })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r660);

            var row_r628 = ctx.$implicit;

            var ctx_r661 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r661.rowHover.emit(row_r628);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r628 = ctx.$implicit;

          var ctx_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r626.rowClassFunction(row_r628));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c5, row_r628.isSelected));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r626.isMultiSelectVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !row_r628.isInEditing && ctx_r626.showActionColumnLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r628.isInEditing && ctx_r626.showActionColumnLeft);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r628.cells);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r628.isInEditing && ctx_r626.showActionColumnRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !row_r628.isInEditing && ctx_r626.showActionColumnRight);
        }
      }

      function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r627.tableColumnsCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r627.noDataMessage, " ");
        }
      }

      function TbodyEditDeleteComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r665 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r665);

            var ctx_r664 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r664.onEdit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r662 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r662.editRowButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function TbodyEditDeleteComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r667 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r667);

            var ctx_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r666.onDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r663.deleteRowButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function TbodyCustomComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r671 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r671);

            var action_r669 = ctx.$implicit;

            var ctx_r670 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r670.onCustom(action_r669, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r669 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", action_r669.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      var _c6 = ["ng2-st-thead", ""];

      function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r676 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r676);

            var ctx_r675 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r675.sort.emit($event);
          })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r676);

            var ctx_r677 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r677.selectAllRows.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r672 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r672.grid)("isAllSelected", ctx_r672.isAllSelected)("source", ctx_r672.source);
        }
      }

      function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r679 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r679);

            var ctx_r678 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r678.create.emit($event);
          })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r679);

            var ctx_r680 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r680.filter.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r673 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r673.grid)("source", ctx_r673.source);
        }
      }

      function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 5);
        }

        if (rf & 2) {
          var ctx_r674 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r674.grid)("createConfirm", ctx_r674.createConfirm);
        }
      }

      var _c7 = ["ng2-st-actions-title", ""];
      var _c8 = ["ng2-st-add-button", ""];

      function AddButtonComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r683 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r683);

            var ctx_r682 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r682.onAdd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r681 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r681.addNewButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      var _c9 = ["ng2-st-checkbox-select-all", ""];

      function TitleComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r687 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TitleComponent_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r687);

            var ctx_r686 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r686._sort($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r684 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r684.currentDirection);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r684.column.title, " ");
        }
      }

      function TitleComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r685 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r685.column.title);
        }
      }

      var _c10 = ["ng2-st-thead-filters-row", ""];

      function TheadFitlersRowComponent_th_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th");
        }
      }

      function TheadFitlersRowComponent_th_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r693 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r693);

            var ctx_r692 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r692.create.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r689 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r689.grid);
        }
      }

      function TheadFitlersRowComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r696 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-smart-table-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r696);

            var ctx_r695 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r695.filter.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r694 = ctx.$implicit;

          var ctx_r690 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r694.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx_r690.source)("column", column_r694)("inputClass", ctx_r690.filterInputClass);
        }
      }

      function TheadFitlersRowComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r698 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r698);

            var ctx_r697 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r697.create.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r691 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r691.grid)("source", ctx_r691.source);
        }
      }

      var _c11 = ["ng2-st-thead-form-row", ""];

      function TheadFormRowComponent_td_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td");
        }
      }

      function TheadFormRowComponent_td_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r704 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-st-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r704);

            var ctx_r703 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r703.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r700 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r700.grid);
        }
      }

      function TheadFormRowComponent_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r707 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-smart-table-cell", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r707);

            var ctx_r706 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r706.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r705 = ctx.$implicit;

          var ctx_r701 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cell", cell_r705)("grid", ctx_r701.grid)("isNew", true)("createConfirm", ctx_r701.createConfirm)("inputClass", ctx_r701.addInputClass)("isInEditing", ctx_r701.grid.getNewRow().isInEditing);
        }
      }

      function TheadFormRowComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r709 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-st-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r709);

            var ctx_r708 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r708.onCreate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r702 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r702.grid);
        }
      }

      var _c12 = ["ng2-st-thead-titles-row", ""];

      function TheadTitlesRowComponent_th_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r715 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r715);

            var ctx_r714 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r714.selectAllRows.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r710 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r710.grid)("source", ctx_r710.source)("isAllSelected", ctx_r710.isAllSelected);
        }
      }

      function TheadTitlesRowComponent_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 4);
        }

        if (rf & 2) {
          var ctx_r711 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r711.grid);
        }
      }

      function TheadTitlesRowComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r718 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-st-column-title", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r718);

            var ctx_r717 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r717.sort.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r716 = ctx.$implicit;

          var ctx_r712 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r716.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", column_r716.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", column_r716["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx_r712.source)("column", column_r716);
        }
      }

      function TheadTitlesRowComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 4);
        }

        if (rf & 2) {
          var ctx_r713 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r713.grid);
        }
      }

      function Ng2SmartTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r722 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r722);

            var ctx_r721 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r721.create.emit($event);
          })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r722);

            var ctx_r723 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r723.onSelectAllRows($event);
          })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r722);

            var ctx_r724 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r724.sort($event);
          })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r722);

            var ctx_r725 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r725.filter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r719 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx_r719.grid)("isAllSelected", ctx_r719.isAllSelected)("source", ctx_r719.source)("createConfirm", ctx_r719.createConfirm);
        }
      }

      function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r727 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-smart-table-pager", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r727);

            var ctx_r726 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r726.changePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r720 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx_r720.source)("perPageSelect", ctx_r720.perPageSelect);
        }
      }

      var deepExtend = function deepExtend() {
        for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
          objects[_key] = arguments[_key];
        }

        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
          return false;
        }

        if (arguments.length < 2) {
          return arguments[0];
        }

        var target = arguments[0]; // convert arguments to array and cut off target object

        var args = Array.prototype.slice.call(arguments, 1);
        var val, src;
        args.forEach(function (obj) {
          // skip argument if it is array or isn't object
          if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
          }

          Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value

            val = obj[key]; // new value
            // recursion prevention

            if (val === target) {
              return;
              /**
               * if new value isn't object then just overwrite by new value
               * instead of extending.
               */
            } else if (typeof val !== 'object' || val === null) {
              target[key] = val;
              return; // just clone arrays (and recursive clone objects inside)
            } else if (Array.isArray(val)) {
              target[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(val);
              return; // overwrite by new value if source isn't object or array
            } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
              target[key] = deepExtend({}, val);
              return; // source value and new value is objects both, extending...
            } else {
              target[key] = deepExtend(src, val);
              return;
            }
          });
        });
        return target;
      };

      var Deferred = function Deferred() {
        var _this = this;

        _classCallCheck(this, Deferred);

        this.promise = new Promise(function (resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
      }; // getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1


      function getDeepFromObject() {
        var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var name = arguments.length > 1 ? arguments[1] : undefined;
        var defaultValue = arguments.length > 2 ? arguments[2] : undefined;
        var keys = name.split('.'); // clone the object

        var level = deepExtend({}, object);
        keys.forEach(function (k) {
          if (level && typeof level[k] !== 'undefined') {
            level = level[k];
          }
        });
        return typeof level === 'undefined' ? defaultValue : level;
      }

      function prepareValue(value) {
        return value;
      }

      var Cell = /*#__PURE__*/function () {
        function Cell(value, row, column, dataSet) {
          _classCallCheck(this, Cell);

          this.value = value;
          this.row = row;
          this.column = column;
          this.dataSet = dataSet;
          this.newValue = '';
          this.newValue = value;
        }

        _createClass(Cell, [{
          key: "getColumn",
          value: function getColumn() {
            return this.column;
          }
        }, {
          key: "getRow",
          value: function getRow() {
            return this.row;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            var valid = this.column.getValuePrepareFunction() instanceof Function;
            var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
            return prepare.call(null, this.value, this.row.getData(), this);
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.newValue = value;
          }
        }, {
          key: "getId",
          value: function getId() {
            return this.getColumn().id;
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            return this.getColumn().title;
          }
        }, {
          key: "isEditable",
          value: function isEditable() {
            if (this.getRow().index === -1) {
              return this.getColumn().isAddable;
            } else {
              return this.getColumn().isEditable;
            }
          }
        }]);

        return Cell;
      }();

      Cell.PREPARE = prepareValue;

      var Row = /*#__PURE__*/function () {
        function Row(index, data, _dataSet) {
          _classCallCheck(this, Row);

          this.index = index;
          this.data = data;
          this._dataSet = _dataSet;
          this.isSelected = false;
          this.isInEditing = false;
          this.cells = [];
          this.process();
        }

        _createClass(Row, [{
          key: "getCell",
          value: function getCell(column) {
            return this.cells.find(function (el) {
              return el.getColumn() === column;
            });
          }
        }, {
          key: "getCells",
          value: function getCells() {
            return this.cells;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "getIsSelected",
          value: function getIsSelected() {
            return this.isSelected;
          }
        }, {
          key: "getNewData",
          value: function getNewData() {
            var values = Object.assign({}, this.data);
            this.getCells().forEach(function (cell) {
              return values[cell.getColumn().id] = cell.newValue;
            });
            return values;
          }
        }, {
          key: "setData",
          value: function setData(data) {
            this.data = data;
            this.process();
          }
        }, {
          key: "process",
          value: function process() {
            var _this2 = this;

            this.cells = [];

            this._dataSet.getColumns().forEach(function (column) {
              var cell = _this2.createCell(column);

              _this2.cells.push(cell);
            });
          }
        }, {
          key: "createCell",
          value: function createCell(column) {
            var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
            var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
            return new Cell(value, this, column, this._dataSet);
          }
        }]);

        return Row;
      }();

      var Column = /*#__PURE__*/function () {
        function Column(id, settings, dataSet) {
          _classCallCheck(this, Column);

          this.id = id;
          this.settings = settings;
          this.dataSet = dataSet;
          this.title = '';
          this.type = '';
          this["class"] = '';
          this.width = '';
          this.isSortable = false;
          this.isEditable = true;
          this.isAddable = true;
          this.isFilterable = false;
          this.sortDirection = '';
          this.defaultSortDirection = '';
          this.editor = {
            type: '',
            config: {},
            component: null
          };
          this.filter = {
            type: '',
            config: {},
            component: null
          };
          this.renderComponent = null;
          this.process();
        }

        _createClass(Column, [{
          key: "getOnComponentInitFunction",
          value: function getOnComponentInitFunction() {
            return this.onComponentInitFunction;
          }
        }, {
          key: "getCompareFunction",
          value: function getCompareFunction() {
            return this.compareFunction;
          }
        }, {
          key: "getValuePrepareFunction",
          value: function getValuePrepareFunction() {
            return this.valuePrepareFunction;
          }
        }, {
          key: "getFilterFunction",
          value: function getFilterFunction() {
            return this.filterFunction;
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            return this.editor && this.editor.config;
          }
        }, {
          key: "getFilterType",
          value: function getFilterType() {
            return this.filter && this.filter.type;
          }
        }, {
          key: "getFilterConfig",
          value: function getFilterConfig() {
            return this.filter && this.filter.config;
          }
        }, {
          key: "process",
          value: function process() {
            this.title = this.settings['title'];
            this["class"] = this.settings['class'];
            this.width = this.settings['width'];
            this.type = this.prepareType();
            this.editor = this.settings['editor'];
            this.filter = this.settings['filter'];
            this.renderComponent = this.settings['renderComponent'];
            this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
            this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
            this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
            this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
            this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
            this.sortDirection = this.prepareSortDirection();
            this.compareFunction = this.settings['compareFunction'];
            this.valuePrepareFunction = this.settings['valuePrepareFunction'];
            this.filterFunction = this.settings['filterFunction'];
            this.onComponentInitFunction = this.settings['onComponentInitFunction'];
          }
        }, {
          key: "prepareType",
          value: function prepareType() {
            return this.settings['type'] || this.determineType();
          }
        }, {
          key: "prepareSortDirection",
          value: function prepareSortDirection() {
            return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
          }
        }, {
          key: "determineType",
          value: function determineType() {
            // TODO: determine type by data
            return 'text';
          }
        }]);

        return Column;
      }();

      var DataSet = /*#__PURE__*/function () {
        function DataSet() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var columnSettings = arguments.length > 1 ? arguments[1] : undefined;

          _classCallCheck(this, DataSet);

          this.columnSettings = columnSettings;
          this.data = [];
          this.columns = [];
          this.rows = [];
          this.willSelect = 'first';
          this.createColumns(columnSettings);
          this.setData(data);
          this.createNewRow();
        }

        _createClass(DataSet, [{
          key: "setData",
          value: function setData(data) {
            this.data = data;
            this.createRows();
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            return this.columns;
          }
        }, {
          key: "getRows",
          value: function getRows() {
            return this.rows;
          }
        }, {
          key: "getFirstRow",
          value: function getFirstRow() {
            return this.rows[0];
          }
        }, {
          key: "getLastRow",
          value: function getLastRow() {
            return this.rows[this.rows.length - 1];
          }
        }, {
          key: "findRowByData",
          value: function findRowByData(data) {
            return this.rows.find(function (row) {
              return row.getData() === data;
            });
          }
        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this.rows.forEach(function (row) {
              row.isSelected = false;
            });
          }
        }, {
          key: "selectRow",
          value: function selectRow(row) {
            var previousIsSelected = row.isSelected;
            this.deselectAll();
            row.isSelected = !previousIsSelected;
            this.selectedRow = row;
            return this.selectedRow;
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            row.isSelected = !row.isSelected;
            this.selectedRow = row;
            return this.selectedRow;
          }
        }, {
          key: "selectPreviousRow",
          value: function selectPreviousRow() {
            if (this.rows.length > 0) {
              var index = this.selectedRow ? this.selectedRow.index : 0;

              if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
              }

              this.selectRow(this.rows[index]);
              return this.selectedRow;
            }
          }
        }, {
          key: "selectFirstRow",
          value: function selectFirstRow() {
            if (this.rows.length > 0) {
              this.selectRow(this.rows[0]);
              return this.selectedRow;
            }
          }
        }, {
          key: "selectLastRow",
          value: function selectLastRow() {
            if (this.rows.length > 0) {
              this.selectRow(this.rows[this.rows.length - 1]);
              return this.selectedRow;
            }
          }
        }, {
          key: "willSelectFirstRow",
          value: function willSelectFirstRow() {
            this.willSelect = 'first';
          }
        }, {
          key: "willSelectLastRow",
          value: function willSelectLastRow() {
            this.willSelect = 'last';
          }
        }, {
          key: "select",
          value: function select() {
            if (this.getRows().length === 0) {
              return;
            }

            if (this.willSelect) {
              if (this.willSelect === 'first') {
                this.selectFirstRow();
              }

              if (this.willSelect === 'last') {
                this.selectLastRow();
              }

              this.willSelect = '';
            } else {
              this.selectFirstRow();
            }

            return this.selectedRow;
          }
        }, {
          key: "createNewRow",
          value: function createNewRow() {
            this.newRow = new Row(-1, {}, this);
            this.newRow.isInEditing = true;
          }
          /**
           * Create columns by mapping from the settings
           * @param settings
           * @private
           */

        }, {
          key: "createColumns",
          value: function createColumns(settings) {
            for (var id in settings) {
              if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
              }
            }
          }
          /**
           * Create rows based on current data prepared in data source
           * @private
           */

        }, {
          key: "createRows",
          value: function createRows() {
            var _this3 = this;

            this.rows = [];
            this.data.forEach(function (el, index) {
              _this3.rows.push(new Row(index, el, _this3));
            });
          }
        }]);

        return DataSet;
      }();

      var Grid = /*#__PURE__*/function () {
        function Grid(source, settings) {
          _classCallCheck(this, Grid);

          this.createFormShown = false;
          this.onSelectRowSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.setSettings(settings);
          this.setSource(source);
        }

        _createClass(Grid, [{
          key: "showActionColumn",
          value: function showActionColumn(position) {
            return this.isCurrentActionsPosition(position) && this.isActionsVisible();
          }
        }, {
          key: "isCurrentActionsPosition",
          value: function isCurrentActionsPosition(position) {
            return position == this.getSetting('actions.position');
          }
        }, {
          key: "isActionsVisible",
          value: function isActionsVisible() {
            return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
          }
        }, {
          key: "isMultiSelectVisible",
          value: function isMultiSelectVisible() {
            return this.getSetting('selectMode') === 'multi';
          }
        }, {
          key: "getNewRow",
          value: function getNewRow() {
            return this.dataSet.newRow;
          }
        }, {
          key: "setSettings",
          value: function setSettings(settings) {
            this.settings = settings;
            this.dataSet = new DataSet([], this.getSetting('columns'));

            if (this.source) {
              this.source.refresh();
            }
          }
        }, {
          key: "getDataSet",
          value: function getDataSet() {
            return this.dataSet;
          }
        }, {
          key: "setSource",
          value: function setSource(source) {
            var _this4 = this;

            this.source = this.prepareSource(source);
            this.source.onChanged().subscribe(function (changes) {
              return _this4.processDataChange(changes);
            });
            this.source.onUpdated().subscribe(function (data) {
              var changedRow = _this4.dataSet.findRowByData(data);

              changedRow.setData(data);
            });
          }
        }, {
          key: "getSetting",
          value: function getSetting(name, defaultValue) {
            return getDeepFromObject(this.settings, name, defaultValue);
          }
        }, {
          key: "getColumns",
          value: function getColumns() {
            return this.dataSet.getColumns();
          }
        }, {
          key: "getRows",
          value: function getRows() {
            return this.dataSet.getRows();
          }
        }, {
          key: "selectRow",
          value: function selectRow(row) {
            this.dataSet.selectRow(row);
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            this.dataSet.multipleSelectRow(row);
          }
        }, {
          key: "onSelectRow",
          value: function onSelectRow() {
            return this.onSelectRowSource.asObservable();
          }
        }, {
          key: "edit",
          value: function edit(row) {
            row.isInEditing = true;
          }
        }, {
          key: "create",
          value: function create(row, confirmEmitter) {
            var _this5 = this;

            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
              newData = newData ? newData : row.getNewData();

              if (deferred.resolve.skipAdd) {
                _this5.createFormShown = false;
              } else {
                _this5.source.prepend(newData).then(function () {
                  _this5.createFormShown = false;

                  _this5.dataSet.createNewRow();
                });
              }
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('add.confirmCreate')) {
              confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "save",
          value: function save(row, confirmEmitter) {
            var _this6 = this;

            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
              newData = newData ? newData : row.getNewData();

              if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
              } else {
                _this6.source.update(row.getData(), newData).then(function () {
                  row.isInEditing = false;
                });
              }
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('edit.confirmSave')) {
              confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "delete",
          value: function _delete(row, confirmEmitter) {
            var _this7 = this;

            var deferred = new Deferred();
            deferred.promise.then(function () {
              _this7.source.remove(row.getData());
            })["catch"](function (err) {// doing nothing
            });

            if (this.getSetting('delete.confirmDelete')) {
              confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred
              });
            } else {
              deferred.resolve();
            }
          }
        }, {
          key: "processDataChange",
          value: function processDataChange(changes) {
            if (this.shouldProcessChange(changes)) {
              this.dataSet.setData(changes['elements']);

              if (this.getSetting('selectMode') !== 'multi') {
                var row = this.determineRowToSelect(changes);

                if (row) {
                  this.onSelectRowSource.next(row);
                }
              }
            }
          }
        }, {
          key: "shouldProcessChange",
          value: function shouldProcessChange(changes) {
            if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
              return true;
            } else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
              return true;
            }

            return false;
          } // TODO: move to selectable? Separate directive

        }, {
          key: "determineRowToSelect",
          value: function determineRowToSelect(changes) {
            if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
              return this.dataSet.select();
            }

            if (changes['action'] === 'remove') {
              if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
              } else {
                return this.dataSet.selectPreviousRow();
              }
            }

            if (changes['action'] === 'append') {
              // we have to store which one to select as the data will be reloaded
              this.dataSet.willSelectLastRow();
            }

            if (changes['action'] === 'add') {
              return this.dataSet.selectFirstRow();
            }

            if (changes['action'] === 'update') {
              return this.dataSet.selectFirstRow();
            }

            if (changes['action'] === 'prepend') {
              // we have to store which one to select as the data will be reloaded
              this.dataSet.willSelectFirstRow();
            }

            return null;
          }
        }, {
          key: "prepareSource",
          value: function prepareSource(source) {
            var initialSource = this.getInitialSort();

            if (initialSource && initialSource['field'] && initialSource['direction']) {
              source.setSort([initialSource], false);
            }

            if (this.getSetting('pager.display') === true) {
              source.setPaging(1, this.getSetting('pager.perPage'), false);
            }

            source.refresh();
            return source;
          }
        }, {
          key: "getInitialSort",
          value: function getInitialSort() {
            var sortConf = {};
            this.getColumns().forEach(function (column) {
              if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
              }
            });
            return sortConf;
          }
        }, {
          key: "getSelectedRows",
          value: function getSelectedRows() {
            return this.dataSet.getRows().filter(function (r) {
              return r.isSelected;
            });
          }
        }, {
          key: "selectAllRows",
          value: function selectAllRows(status) {
            this.dataSet.getRows().forEach(function (r) {
              return r.isSelected = status;
            });
          }
        }, {
          key: "getFirstRow",
          value: function getFirstRow() {
            return this.dataSet.getFirstRow();
          }
        }, {
          key: "getLastRow",
          value: function getLastRow() {
            return this.dataSet.getLastRow();
          }
        }]);

        return Grid;
      }();

      var CellComponent = /*#__PURE__*/function () {
        function CellComponent() {
          _classCallCheck(this, CellComponent);

          this.inputClass = '';
          this.mode = 'inline';
          this.isInEditing = false;
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CellComponent, [{
          key: "onEdited",
          value: function onEdited(event) {
            if (this.isNew) {
              this.grid.create(this.grid.getNewRow(), this.createConfirm);
            } else {
              this.grid.save(this.row, this.editConfirm);
            }
          }
        }]);

        return CellComponent;
      }();

      CellComponent.ɵfac = function CellComponent_Factory(t) {
        return new (t || CellComponent)();
      };

      CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CellComponent,
        selectors: [["ng2-smart-table-cell"]],
        inputs: {
          inputClass: "inputClass",
          mode: "mode",
          isInEditing: "isInEditing",
          grid: "grid",
          row: "row",
          editConfirm: "editConfirm",
          createConfirm: "createConfirm",
          isNew: "isNew",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]],
        template: function CellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isInEditing);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isInEditing);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ViewCellComponent, EditCellComponent];
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], CellComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)], CellComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CellComponent.prototype, "editConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CellComponent.prototype, "createConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CellComponent.prototype, "isNew", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], CellComponent.prototype, "cell", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CellComponent.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CellComponent.prototype, "mode", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CellComponent.prototype, "isInEditing", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CellComponent.prototype, "edited", void 0);

      var EditCellDefault = /*#__PURE__*/function () {
        function EditCellDefault() {
          _classCallCheck(this, EditCellDefault);

          this.inputClass = '';
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(EditCellDefault, [{
          key: "onEdited",
          value: function onEdited(event) {
            this.edited.next(event);
            return false;
          }
        }, {
          key: "onStopEditing",
          value: function onStopEditing() {
            this.cell.getRow().isInEditing = false;
            return false;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            event.stopPropagation();
          }
        }]);

        return EditCellDefault;
      }();

      EditCellDefault.ɵfac = function EditCellDefault_Factory(t) {
        return new (t || EditCellDefault)();
      };

      EditCellDefault.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditCellDefault,
        selectors: [["ng-component"]],
        inputs: {
          inputClass: "inputClass",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 0,
        vars: 0,
        template: function EditCellDefault_Template(rf, ctx) {},
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], EditCellDefault.prototype, "cell", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditCellDefault.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditCellDefault.prototype, "edited", void 0);

      var CustomEditComponent = /*#__PURE__*/function (_EditCellDefault) {
        _inherits(CustomEditComponent, _EditCellDefault);

        var _super = _createSuper(CustomEditComponent);

        function CustomEditComponent(resolver) {
          var _this8;

          _classCallCheck(this, CustomEditComponent);

          _this8 = _super.call(this);
          _this8.resolver = resolver;
          return _this8;
        }

        _createClass(CustomEditComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this9 = this;

            if (this.cell && !this.customComponent) {
              var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
              this.customComponent = this.dynamicTarget.createComponent(componentFactory); // set @Inputs and @Outputs of custom component

              this.customComponent.instance.cell = this.cell;
              this.customComponent.instance.inputClass = this.inputClass;
              this.customComponent.instance.onStopEditing.subscribe(function () {
                return _this9.onStopEditing();
              });
              this.customComponent.instance.onEdited.subscribe(function (event) {
                return _this9.onEdited(event);
              });
              this.customComponent.instance.onClick.subscribe(function (event) {
                return _this9.onClick(event);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }]);

        return CustomEditComponent;
      }(EditCellDefault);

      CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) {
        return new (t || CustomEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]));
      };

      CustomEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomEditComponent,
        selectors: [["table-cell-custom-editor"]],
        viewQuery: function CustomEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomEditComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CustomEditComponent.prototype, "dynamicTarget", void 0);
      CustomEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])], CustomEditComponent);

      var DefaultEditComponent = /*#__PURE__*/function (_EditCellDefault2) {
        _inherits(DefaultEditComponent, _EditCellDefault2);

        var _super2 = _createSuper(DefaultEditComponent);

        function DefaultEditComponent() {
          _classCallCheck(this, DefaultEditComponent);

          return _super2.call(this);
        }

        _createClass(DefaultEditComponent, [{
          key: "getEditorType",
          value: function getEditorType() {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
          }
        }]);

        return DefaultEditComponent;
      }(EditCellDefault);

      DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) {
        return new (t || DefaultEditComponent)();
      };

      DefaultEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DefaultEditComponent,
        selectors: [["table-cell-default-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 5,
        consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]],
        template: function DefaultEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.getEditorType());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "completer");
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent];
        },
        encapsulation: 2
      });
      DefaultEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DefaultEditComponent);

      var EditCellComponent = /*#__PURE__*/function () {
        function EditCellComponent() {
          _classCallCheck(this, EditCellComponent);

          this.inputClass = '';
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(EditCellComponent, [{
          key: "onEdited",
          value: function onEdited(event) {
            this.edited.next(event);
            return false;
          }
        }, {
          key: "getEditorType",
          value: function getEditorType() {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
          }
        }]);

        return EditCellComponent;
      }();

      EditCellComponent.ɵfac = function EditCellComponent_Factory(t) {
        return new (t || EditCellComponent)();
      };

      EditCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditCellComponent,
        selectors: [["table-cell-edit-mode"]],
        inputs: {
          inputClass: "inputClass",
          cell: "cell"
        },
        outputs: {
          edited: "edited"
        },
        decls: 3,
        vars: 2,
        consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]],
        template: function EditCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.getEditorType());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "custom");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], CustomEditComponent, DefaultEditComponent],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], EditCellComponent.prototype, "cell", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], EditCellComponent.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EditCellComponent.prototype, "edited", void 0);

      var DefaultEditor = function DefaultEditor() {
        _classCallCheck(this, DefaultEditor);

        this.onStopEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      };

      DefaultEditor.ɵfac = function DefaultEditor_Factory(t) {
        return new (t || DefaultEditor)();
      };

      DefaultEditor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DefaultEditor,
        selectors: [["ng-component"]],
        inputs: {
          cell: "cell",
          inputClass: "inputClass"
        },
        outputs: {
          onStopEditing: "onStopEditing",
          onEdited: "onEdited",
          onClick: "onClick"
        },
        decls: 0,
        vars: 0,
        template: function DefaultEditor_Template(rf, ctx) {},
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], DefaultEditor.prototype, "cell", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DefaultEditor.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DefaultEditor.prototype, "onStopEditing", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DefaultEditor.prototype, "onEdited", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DefaultEditor.prototype, "onClick", void 0);

      var CheckboxEditorComponent = /*#__PURE__*/function (_DefaultEditor) {
        _inherits(CheckboxEditorComponent, _DefaultEditor);

        var _super3 = _createSuper(CheckboxEditorComponent);

        function CheckboxEditorComponent() {
          _classCallCheck(this, CheckboxEditorComponent);

          return _super3.call(this);
        }

        _createClass(CheckboxEditorComponent, [{
          key: "onChange",
          value: function onChange(event) {
            var trueVal = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig()["true"] || true;
            var falseVal = this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig()["false"] || false;
            this.cell.newValue = event.target.checked ? trueVal : falseVal;
          }
        }]);

        return CheckboxEditorComponent;
      }(DefaultEditor);

      CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) {
        return new (t || CheckboxEditorComponent)();
      };

      CheckboxEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxEditorComponent,
        selectors: [["checkbox-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 4,
        consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]],
        template: function CheckboxEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_3_0 = null;
            var currVal_3 = ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0["true"]) || true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", currVal_3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"]
      });
      CheckboxEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CheckboxEditorComponent);

      var CompleterEditorComponent = /*#__PURE__*/function (_DefaultEditor2) {
        _inherits(CompleterEditorComponent, _DefaultEditor2);

        var _super4 = _createSuper(CompleterEditorComponent);

        function CompleterEditorComponent(completerService) {
          var _this10;

          _classCallCheck(this, CompleterEditorComponent);

          _this10 = _super4.call(this);
          _this10.completerService = completerService;
          _this10.completerStr = '';
          return _this10;
        }

        _createClass(CompleterEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
              var config = this.cell.getColumn().getConfig().completer;
              config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
              config.dataService.descriptionField(config.descriptionField);
            }
          }
        }, {
          key: "onEditedCompleter",
          value: function onEditedCompleter(event) {
            this.cell.newValue = event.title;
            return false;
          }
        }]);

        return CompleterEditorComponent;
      }(DefaultEditor);

      CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) {
        return new (t || CompleterEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]));
      };

      CompleterEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CompleterEditorComponent,
        selectors: [["completer-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]],
        template: function CompleterEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-completer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.completerStr = $event;
            })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) {
              return ctx.onEditedCompleter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
          }
        },
        directives: [_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterCmp"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        encapsulation: 2
      });

      CompleterEditorComponent.ctorParameters = function () {
        return [{
          type: _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]
        }];
      };

      CompleterEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])], CompleterEditorComponent);

      var InputEditorComponent = /*#__PURE__*/function (_DefaultEditor3) {
        _inherits(InputEditorComponent, _DefaultEditor3);

        var _super5 = _createSuper(InputEditorComponent);

        function InputEditorComponent() {
          _classCallCheck(this, InputEditorComponent);

          return _super5.call(this);
        }

        return InputEditorComponent;
      }(DefaultEditor);

      InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) {
        return new (t || InputEditorComponent)();
      };

      InputEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InputEditorComponent,
        selectors: [["input-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]],
        template: function InputEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function InputEditorComponent_Template_input_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"]
      });
      InputEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InputEditorComponent);

      var SelectEditorComponent = /*#__PURE__*/function (_DefaultEditor4) {
        _inherits(SelectEditorComponent, _DefaultEditor4);

        var _super6 = _createSuper(SelectEditorComponent);

        function SelectEditorComponent() {
          _classCallCheck(this, SelectEditorComponent);

          return _super6.call(this);
        }

        return SelectEditorComponent;
      }(DefaultEditor);

      SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) {
        return new (t || SelectEditorComponent)();
      };

      SelectEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SelectEditorComponent,
        selectors: [["select-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
        template: function SelectEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function SelectEditorComponent_Template_select_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_4_0 = null;
            var currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", currVal_4);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        encapsulation: 2
      });
      SelectEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SelectEditorComponent);

      var TextareaEditorComponent = /*#__PURE__*/function (_DefaultEditor5) {
        _inherits(TextareaEditorComponent, _DefaultEditor5);

        var _super7 = _createSuper(TextareaEditorComponent);

        function TextareaEditorComponent() {
          _classCallCheck(this, TextareaEditorComponent);

          return _super7.call(this);
        }

        return TextareaEditorComponent;
      }(DefaultEditor);

      TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) {
        return new (t || TextareaEditorComponent)();
      };

      TextareaEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TextareaEditorComponent,
        selectors: [["textarea-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 5,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]],
        template: function TextareaEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "textarea", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) {
              return ctx.cell.newValue = $event;
            })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) {
              return ctx.onClick.emit($event);
            })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) {
              return ctx.onEdited.emit($event);
            })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() {
              return ctx.onStopEditing.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"]
      });
      TextareaEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TextareaEditorComponent);

      var CustomViewComponent = /*#__PURE__*/function () {
        function CustomViewComponent(resolver) {
          _classCallCheck(this, CustomViewComponent);

          this.resolver = resolver;
        }

        _createClass(CustomViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.cell && !this.customComponent) {
              this.createCustomComponent();
              this.callOnComponentInit();
              this.patchInstance();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }, {
          key: "createCustomComponent",
          value: function createCustomComponent() {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
          }
        }, {
          key: "callOnComponentInit",
          value: function callOnComponentInit() {
            var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
            onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
          }
        }, {
          key: "patchInstance",
          value: function patchInstance() {
            Object.assign(this.customComponent.instance, this.getPatch());
          }
        }, {
          key: "getPatch",
          value: function getPatch() {
            return {
              value: this.cell.getValue(),
              rowData: this.cell.getRow().getData()
            };
          }
        }]);

        return CustomViewComponent;
      }();

      CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) {
        return new (t || CustomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]));
      };

      CustomViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomViewComponent,
        selectors: [["custom-view-component"]],
        viewQuery: function CustomViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          cell: "cell"
        },
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], CustomViewComponent.prototype, "cell", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CustomViewComponent.prototype, "dynamicTarget", void 0);
      CustomViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])], CustomViewComponent);

      var ViewCellComponent = function ViewCellComponent() {
        _classCallCheck(this, ViewCellComponent);
      };

      ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) {
        return new (t || ViewCellComponent)();
      };

      ViewCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ViewCellComponent,
        selectors: [["table-cell-view-mode"]],
        inputs: {
          cell: "cell"
        },
        decls: 4,
        vars: 3,
        consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]],
        template: function ViewCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.cell.getColumn().type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "html");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], CustomViewComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Cell)], ViewCellComponent.prototype, "cell", void 0);
      var CELL_COMPONENTS = [CellComponent, EditCellDefault, DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];

      var CellModule = function CellModule() {
        _classCallCheck(this, CellModule);
      };

      CellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CellModule
      });
      CellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CellModule_Factory(t) {
          return new (t || CellModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]]]
      });

      var DataSource = /*#__PURE__*/function () {
        function DataSource() {
          _classCallCheck(this, DataSource);

          this.onChangedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.onAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.onUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.onRemovedSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }

        _createClass(DataSource, [{
          key: "refresh",
          value: function refresh() {
            this.emitOnChanged('refresh');
          }
        }, {
          key: "load",
          value: function load(data) {
            this.emitOnChanged('load');
            return Promise.resolve();
          }
        }, {
          key: "onChanged",
          value: function onChanged() {
            return this.onChangedSource.asObservable();
          }
        }, {
          key: "onAdded",
          value: function onAdded() {
            return this.onAddedSource.asObservable();
          }
        }, {
          key: "onUpdated",
          value: function onUpdated() {
            return this.onUpdatedSource.asObservable();
          }
        }, {
          key: "onRemoved",
          value: function onRemoved() {
            return this.onRemovedSource.asObservable();
          }
        }, {
          key: "prepend",
          value: function prepend(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('prepend');
            return Promise.resolve();
          }
        }, {
          key: "append",
          value: function append(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('append');
            return Promise.resolve();
          }
        }, {
          key: "add",
          value: function add(element) {
            this.emitOnAdded(element);
            this.emitOnChanged('add');
            return Promise.resolve();
          }
        }, {
          key: "remove",
          value: function remove(element) {
            this.emitOnRemoved(element);
            this.emitOnChanged('remove');
            return Promise.resolve();
          }
        }, {
          key: "update",
          value: function update(element, values) {
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            return Promise.resolve();
          }
        }, {
          key: "empty",
          value: function empty() {
            this.emitOnChanged('empty');
            return Promise.resolve();
          }
        }, {
          key: "setSort",
          value: function setSort(conf, doEmit) {
            if (doEmit) {
              this.emitOnChanged('sort');
            }
          }
        }, {
          key: "setFilter",
          value: function setFilter(conf, andOperator, doEmit) {
            if (doEmit) {
              this.emitOnChanged('filter');
            }
          }
        }, {
          key: "addFilter",
          value: function addFilter(fieldConf, andOperator, doEmit) {
            if (doEmit) {
              this.emitOnChanged('filter');
            }
          }
        }, {
          key: "setPaging",
          value: function setPaging(page, perPage, doEmit) {
            if (doEmit) {
              this.emitOnChanged('paging');
            }
          }
        }, {
          key: "setPage",
          value: function setPage(page, doEmit) {
            if (doEmit) {
              this.emitOnChanged('page');
            }
          }
        }, {
          key: "emitOnRemoved",
          value: function emitOnRemoved(element) {
            this.onRemovedSource.next(element);
          }
        }, {
          key: "emitOnUpdated",
          value: function emitOnUpdated(element) {
            this.onUpdatedSource.next(element);
          }
        }, {
          key: "emitOnAdded",
          value: function emitOnAdded(element) {
            this.onAddedSource.next(element);
          }
        }, {
          key: "emitOnChanged",
          value: function emitOnChanged(action) {
            var _this11 = this;

            this.getElements().then(function (elements) {
              return _this11.onChangedSource.next({
                action: action,
                elements: elements,
                paging: _this11.getPaging(),
                filter: _this11.getFilter(),
                sort: _this11.getSort()
              });
            });
          }
        }]);

        return DataSource;
      }();

      var FilterDefault = /*#__PURE__*/function () {
        function FilterDefault() {
          _classCallCheck(this, FilterDefault);

          this.inputClass = '';
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.query = '';
        }

        _createClass(FilterDefault, [{
          key: "onFilter",
          value: function onFilter(query) {
            this.source.addFilter({
              field: this.column.id,
              search: query,
              filter: this.column.getFilterFunction()
            });
          }
        }]);

        return FilterDefault;
      }();

      FilterDefault.ɵfac = function FilterDefault_Factory(t) {
        return new (t || FilterDefault)();
      };

      FilterDefault.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FilterDefault,
        selectors: [["ng-component"]],
        inputs: {
          inputClass: "inputClass",
          column: "column",
          source: "source"
        },
        outputs: {
          filter: "filter"
        },
        decls: 0,
        vars: 0,
        template: function FilterDefault_Template(rf, ctx) {},
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)], FilterDefault.prototype, "column", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], FilterDefault.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], FilterDefault.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FilterDefault.prototype, "filter", void 0);

      var FilterComponent = /*#__PURE__*/function (_FilterDefault) {
        _inherits(FilterComponent, _FilterDefault);

        var _super8 = _createSuper(FilterComponent);

        function FilterComponent() {
          var _this12;

          _classCallCheck(this, FilterComponent);

          _this12 = _super8.apply(this, arguments);
          _this12.query = '';
          return _this12;
        }

        _createClass(FilterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this13 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this13.source.getFilter();

                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                  _this13.query = ''; // add a check for existing filters an set the query if one exists for this column
                  // this covers instances where the filter is set by user code while maintaining existing functionality
                } else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                  filterConf.filters.forEach(function (k, v) {
                    if (k.field == _this13.column.id) {
                      _this13.query = k.search;
                    }
                  });
                }
              });
            }
          }
        }]);

        return FilterComponent;
      }(FilterDefault);

      FilterComponent.ɵfac = function FilterComponent_Factory(t) {
        return ɵFilterComponent_BaseFactory(t || FilterComponent);
      };

      FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FilterComponent,
        selectors: [["ng2-smart-table-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 1,
        vars: 1,
        consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]],
        template: function FilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FilterComponent_div_0_Template, 3, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isFilterable);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], CustomFilterComponent, DefaultFilterComponent];
        },
        styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"]
      });

      var DefaultFilterComponent = /*#__PURE__*/function (_FilterDefault2) {
        _inherits(DefaultFilterComponent, _FilterDefault2);

        var _super9 = _createSuper(DefaultFilterComponent);

        function DefaultFilterComponent() {
          _classCallCheck(this, DefaultFilterComponent);

          return _super9.apply(this, arguments);
        }

        return DefaultFilterComponent;
      }(FilterDefault);

      DefaultFilterComponent.ɵfac = function DefaultFilterComponent_Factory(t) {
        return ɵDefaultFilterComponent_BaseFactory(t || DefaultFilterComponent);
      };

      DefaultFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DefaultFilterComponent,
        selectors: [["default-table-filter"]],
        inputs: {
          query: "query"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 4,
        consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]],
        template: function DefaultFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.column.getFilterType());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "completer");
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], SelectFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent];
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DefaultFilterComponent.prototype, "query", void 0);

      var CustomFilterComponent = /*#__PURE__*/function (_FilterDefault3) {
        _inherits(CustomFilterComponent, _FilterDefault3);

        var _super10 = _createSuper(CustomFilterComponent);

        function CustomFilterComponent(resolver) {
          var _this14;

          _classCallCheck(this, CustomFilterComponent);

          _this14 = _super10.call(this);
          _this14.resolver = resolver;
          return _this14;
        }

        _createClass(CustomFilterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this15 = this;

            if (this.column && !this.customComponent) {
              var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
              this.customComponent = this.dynamicTarget.createComponent(componentFactory); // set @Inputs and @Outputs of custom component

              this.customComponent.instance.query = this.query;
              this.customComponent.instance.column = this.column;
              this.customComponent.instance.source = this.source;
              this.customComponent.instance.inputClass = this.inputClass;
              this.customComponent.instance.filter.subscribe(function (event) {
                return _this15.onFilter(event);
              });
            }

            if (this.customComponent) {
              this.customComponent.instance.ngOnChanges(changes);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.customComponent) {
              this.customComponent.destroy();
            }
          }
        }]);

        return CustomFilterComponent;
      }(FilterDefault);

      CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) {
        return new (t || CustomFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]));
      };

      CustomFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomFilterComponent,
        selectors: [["custom-table-filter"]],
        viewQuery: function CustomFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          query: "query"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2
      });

      CustomFilterComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CustomFilterComponent.prototype, "query", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicTarget', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CustomFilterComponent.prototype, "dynamicTarget", void 0);
      CustomFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])], CustomFilterComponent);

      var DefaultFilter = /*#__PURE__*/function () {
        function DefaultFilter() {
          _classCallCheck(this, DefaultFilter);

          this.delay = 300;
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DefaultFilter, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.changesSubscription) {
              this.changesSubscription.unsubscribe();
            }
          }
        }, {
          key: "setFilter",
          value: function setFilter() {
            this.filter.emit(this.query);
          }
        }]);

        return DefaultFilter;
      }();

      DefaultFilter.ɵfac = function DefaultFilter_Factory(t) {
        return new (t || DefaultFilter)();
      };

      DefaultFilter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DefaultFilter,
        selectors: [["ng-component"]],
        inputs: {
          query: "query",
          inputClass: "inputClass",
          column: "column"
        },
        outputs: {
          filter: "filter"
        },
        decls: 0,
        vars: 0,
        template: function DefaultFilter_Template(rf, ctx) {},
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DefaultFilter.prototype, "query", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DefaultFilter.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)], DefaultFilter.prototype, "column", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DefaultFilter.prototype, "filter", void 0);

      var CheckboxFilterComponent = /*#__PURE__*/function (_DefaultFilter) {
        _inherits(CheckboxFilterComponent, _DefaultFilter);

        var _super11 = _createSuper(CheckboxFilterComponent);

        function CheckboxFilterComponent() {
          var _this16;

          _classCallCheck(this, CheckboxFilterComponent);

          _this16 = _super11.call(this);
          _this16.filterActive = false;
          _this16.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
          return _this16;
        }

        _createClass(CheckboxFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.changesSubscription = this.inputControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay)).subscribe(function (checked) {
              _this17.filterActive = true;
              var trueVal = _this17.column.getFilterConfig() && _this17.column.getFilterConfig()["true"] || true;
              var falseVal = _this17.column.getFilterConfig() && _this17.column.getFilterConfig()["false"] || false;
              _this17.query = checked ? trueVal : falseVal;

              _this17.setFilter();
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter(event) {
            event.preventDefault();
            this.query = '';
            this.inputControl.setValue(false, {
              emitEvent: false
            });
            this.filterActive = false;
            this.setFilter();
          }
        }]);

        return CheckboxFilterComponent;
      }(DefaultFilter);

      CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) {
        return new (t || CheckboxFilterComponent)();
      };

      CheckboxFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxFilterComponent,
        selectors: [["checkbox-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 3,
        consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]],
        template: function CheckboxFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.inputControl)("ngClass", ctx.inputClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filterActive);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      CheckboxFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CheckboxFilterComponent);

      var CompleterFilterComponent = /*#__PURE__*/function (_DefaultFilter2) {
        _inherits(CompleterFilterComponent, _DefaultFilter2);

        var _super12 = _createSuper(CompleterFilterComponent);

        function CompleterFilterComponent(completerService) {
          var _this18;

          _classCallCheck(this, CompleterFilterComponent);

          _this18 = _super12.call(this);
          _this18.completerService = completerService;
          _this18.completerContent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          return _this18;
        }

        _createClass(CompleterFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var config = this.column.getFilterConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
            this.changesSubscription = this.completerContent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (ev) {
              return ev && ev.title || ev || '';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay)).subscribe(function (search) {
              _this19.query = search;

              _this19.setFilter();
            });
          }
        }, {
          key: "inputTextChanged",
          value: function inputTextChanged(event) {
            // workaround to trigger the search event when the home/end buttons are clicked
            // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
            // so here it gets called manually
            if (event === '') {
              this.completerContent.next(event);
            }
          }
        }]);

        return CompleterFilterComponent;
      }(DefaultFilter);

      CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) {
        return new (t || CompleterFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]));
      };

      CompleterFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CompleterFilterComponent,
        selectors: [["completer-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 5,
        consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]],
        template: function CompleterFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-completer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.query = $event;
            })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) {
              return ctx.inputTextChanged($event);
            })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) {
              return ctx.completerContent.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
          }
        },
        directives: [_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterCmp"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        encapsulation: 2
      });

      CompleterFilterComponent.ctorParameters = function () {
        return [{
          type: _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]
        }];
      };

      CompleterFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]])], CompleterFilterComponent);

      var InputFilterComponent = /*#__PURE__*/function (_DefaultFilter3) {
        _inherits(InputFilterComponent, _DefaultFilter3);

        var _super13 = _createSuper(InputFilterComponent);

        function InputFilterComponent() {
          var _this20;

          _classCallCheck(this, InputFilterComponent);

          _this20 = _super13.call(this);
          _this20.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
          return _this20;
        }

        _createClass(InputFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            if (this.query) {
              this.inputControl.setValue(this.query);
            }

            this.inputControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay)).subscribe(function (value) {
              _this21.query = _this21.inputControl.value;

              _this21.setFilter();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.query) {
              this.inputControl.setValue(this.query);
            }
          }
        }]);

        return InputFilterComponent;
      }(DefaultFilter);

      InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) {
        return new (t || InputFilterComponent)();
      };

      InputFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InputFilterComponent,
        selectors: [["input-filter"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 1,
        vars: 3,
        consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]],
        template: function InputFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.column.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]],
        encapsulation: 2
      });
      InputFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InputFilterComponent);

      var SelectFilterComponent = /*#__PURE__*/function (_DefaultFilter4) {
        _inherits(SelectFilterComponent, _DefaultFilter4);

        var _super14 = _createSuper(SelectFilterComponent);

        function SelectFilterComponent() {
          _classCallCheck(this, SelectFilterComponent);

          return _super14.call(this);
        }

        _createClass(SelectFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.inputControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(this.delay)).subscribe(function (value) {
              return _this22.setFilter();
            });
          }
        }]);

        return SelectFilterComponent;
      }(DefaultFilter);

      SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) {
        return new (t || SelectFilterComponent)();
      };

      SelectFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SelectFilterComponent,
        selectors: [["select-filter"]],
        viewQuery: function SelectFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputControl = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 4,
        consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function SelectFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) {
              return ctx.query = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.query);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.column.getFilterConfig().selectText);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.column.getFilterConfig().list);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputControl', {
        read: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"])], SelectFilterComponent.prototype, "inputControl", void 0);
      SelectFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SelectFilterComponent);
      var FILTER_COMPONENTS = [FilterDefault, DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];

      var FilterModule = function FilterModule() {
        _classCallCheck(this, FilterModule);
      };

      FilterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FilterModule
      });
      FilterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function FilterModule_Factory(t) {
          return new (t || FilterModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]]]
      });

      var PagerComponent = /*#__PURE__*/function () {
        function PagerComponent() {
          _classCallCheck(this, PagerComponent);

          this.perPageSelect = [];
          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.count = 0;
        }

        _createClass(PagerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this23 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this23.page = _this23.source.getPaging().page;
                _this23.perPage = _this23.source.getPaging().perPage;
                _this23.currentPerPage = _this23.perPage;
                _this23.count = _this23.source.count();

                if (_this23.isPageOutOfBounce()) {
                  _this23.source.setPage(--_this23.page);
                }

                _this23.processPageChange(dataChanges);

                _this23.initPages();
              });
            }
          }
          /**
           * We change the page here depending on the action performed against data source
           * if a new element was added to the end of the table - then change the page to the last
           * if a new element was added to the beginning of the table - then to the first page
           * @param changes
           */

        }, {
          key: "processPageChange",
          value: function processPageChange(changes) {
            if (changes['action'] === 'prepend') {
              this.source.setPage(1);
            }

            if (changes['action'] === 'append') {
              this.source.setPage(this.getLast());
            }
          }
        }, {
          key: "shouldShow",
          value: function shouldShow() {
            return this.source.count() > this.perPage;
          }
        }, {
          key: "paginate",
          value: function paginate(page) {
            this.source.setPage(page);
            this.page = page;
            this.changePage.emit({
              page: page
            });
            return false;
          }
        }, {
          key: "next",
          value: function next() {
            return this.paginate(this.getPage() + 1);
          }
        }, {
          key: "prev",
          value: function prev() {
            return this.paginate(this.getPage() - 1);
          }
        }, {
          key: "getPage",
          value: function getPage() {
            return this.page;
          }
        }, {
          key: "getPages",
          value: function getPages() {
            return this.pages;
          }
        }, {
          key: "getLast",
          value: function getLast() {
            return Math.ceil(this.count / this.perPage);
          }
        }, {
          key: "isPageOutOfBounce",
          value: function isPageOutOfBounce() {
            return this.page * this.perPage >= this.count + this.perPage && this.page > 1;
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var pagesCount = this.getLast();
            var showPagesCount = 4;
            showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
            this.pages = [];

            if (this.shouldShow()) {
              var middleOne = Math.ceil(showPagesCount / 2);
              middleOne = this.page >= middleOne ? this.page : middleOne;
              var lastOne = middleOne + Math.floor(showPagesCount / 2);
              lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
              var firstOne = lastOne - showPagesCount + 1;

              for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
              }
            }
          }
        }, {
          key: "onChangePerPage",
          value: function onChangePerPage(event) {
            if (this.currentPerPage) {
              if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
              } else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
              }

              this.initPages();
            }
          }
        }]);

        return PagerComponent;
      }();

      PagerComponent.ɵfac = function PagerComponent_Factory(t) {
        return new (t || PagerComponent)();
      };

      PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PagerComponent,
        selectors: [["ng2-smart-table-pager"]],
        inputs: {
          perPageSelect: "perPageSelect",
          source: "source"
        },
        outputs: {
          changePage: "changePage"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 2,
        consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function PagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shouldShow());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], PagerComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], PagerComponent.prototype, "perPageSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PagerComponent.prototype, "changePage", void 0);

      var PagerModule = function PagerModule() {
        _classCallCheck(this, PagerModule);
      };

      PagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PagerModule
      });
      PagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PagerModule_Factory(t) {
          return new (t || PagerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      var Ng2SmartTableTbodyComponent = /*#__PURE__*/function () {
        function Ng2SmartTableTbodyComponent() {
          _classCallCheck(this, Ng2SmartTableTbodyComponent);

          this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.userSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.multipleSelectRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(Ng2SmartTableTbodyComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.mode = this.grid.getSetting('mode');
            this.editInputClass = this.grid.getSetting('edit.inputClass');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.noDataMessage = this.grid.getSetting('noDataMessage');
          }
        }, {
          key: "tableColumnsCount",
          get: function get() {
            var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
            return this.grid.getColumns().length + actionColumns;
          }
        }]);

        return Ng2SmartTableTbodyComponent;
      }();

      Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) {
        return new (t || Ng2SmartTableTbodyComponent)();
      };

      Ng2SmartTableTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2SmartTableTbodyComponent,
        selectors: [["", "ng2-st-tbody", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm",
          rowClassFunction: "rowClassFunction"
        },
        outputs: {
          save: "save",
          cancel: "cancel",
          edit: "edit",
          "delete": "delete",
          custom: "custom",
          edited: "edited",
          userSelectRow: "userSelectRow",
          editRowSelect: "editRowSelect",
          multipleSelectRow: "multipleSelectRow",
          rowHover: "rowHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c4,
        decls: 2,
        vars: 2,
        consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]],
        template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 11, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.getRows());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.grid.getRows().length == 0);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], TbodyCustomComponent, TbodyEditDeleteComponent, TbodyCreateCancelComponent, CellComponent];
        },
        styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);

      var TbodyCreateCancelComponent = /*#__PURE__*/function () {
        function TbodyCreateCancelComponent() {
          _classCallCheck(this, TbodyCreateCancelComponent);
        }

        _createClass(TbodyCreateCancelComponent, [{
          key: "onSave",
          value: function onSave(event) {
            event.preventDefault();
            event.stopPropagation();
            this.grid.save(this.row, this.editConfirm);
          }
        }, {
          key: "onCancelEdit",
          value: function onCancelEdit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.row.isInEditing = false;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
            this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
          }
        }]);

        return TbodyCreateCancelComponent;
      }();

      TbodyCreateCancelComponent.ɵfac = function TbodyCreateCancelComponent_Factory(t) {
        return new (t || TbodyCreateCancelComponent)();
      };

      TbodyCreateCancelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TbodyCreateCancelComponent,
        selectors: [["ng2-st-tbody-create-cancel"]],
        inputs: {
          grid: "grid",
          row: "row",
          editConfirm: "editConfirm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 2,
        consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]],
        template: function TbodyCreateCancelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) {
              return ctx.onSave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) {
              return ctx.onCancelEdit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.saveButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TbodyCreateCancelComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)], TbodyCreateCancelComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);

      var TbodyEditDeleteComponent = /*#__PURE__*/function () {
        function TbodyEditDeleteComponent() {
          _classCallCheck(this, TbodyEditDeleteComponent);

          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.editRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TbodyEditDeleteComponent, [{
          key: "onEdit",
          value: function onEdit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.editRowSelect.emit(this.row);

            if (this.grid.getSetting('mode') === 'external') {
              this.edit.emit({
                data: this.row.getData(),
                source: this.source
              });
            } else {
              this.grid.edit(this.row);
            }
          }
        }, {
          key: "onDelete",
          value: function onDelete(event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.grid.getSetting('mode') === 'external') {
              this["delete"].emit({
                data: this.row.getData(),
                source: this.source
              });
            } else {
              this.grid["delete"](this.row, this.deleteConfirm);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
            this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
          }
        }]);

        return TbodyEditDeleteComponent;
      }();

      TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) {
        return new (t || TbodyEditDeleteComponent)();
      };

      TbodyEditDeleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TbodyEditDeleteComponent,
        selectors: [["ng2-st-tbody-edit-delete"]],
        inputs: {
          grid: "grid",
          row: "row",
          source: "source",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm"
        },
        outputs: {
          edit: "edit",
          "delete": "delete",
          editRowSelect: "editRowSelect"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 2,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]],
        template: function TbodyEditDeleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActionEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActionDelete);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TbodyEditDeleteComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)], TbodyEditDeleteComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], TbodyEditDeleteComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TbodyEditDeleteComponent.prototype, "edit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TbodyEditDeleteComponent.prototype, "delete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);

      var TbodyCustomComponent = /*#__PURE__*/function () {
        function TbodyCustomComponent() {
          _classCallCheck(this, TbodyCustomComponent);

          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TbodyCustomComponent, [{
          key: "onCustom",
          value: function onCustom(action, event) {
            event.preventDefault();
            event.stopPropagation();
            this.custom.emit({
              action: action.name,
              data: this.row.getData(),
              source: this.source
            });
          }
        }]);

        return TbodyCustomComponent;
      }();

      TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) {
        return new (t || TbodyCustomComponent)();
      };

      TbodyCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TbodyCustomComponent,
        selectors: [["ng2-st-tbody-custom"]],
        inputs: {
          grid: "grid",
          row: "row",
          source: "source"
        },
        outputs: {
          custom: "custom"
        },
        decls: 1,
        vars: 1,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]],
        template: function TbodyCustomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.getSetting("actions.custom"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TbodyCustomComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)], TbodyCustomComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TbodyCustomComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TbodyCustomComponent.prototype, "custom", void 0);
      var TBODY_COMPONENTS = [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];

      var TBodyModule = function TBodyModule() {
        _classCallCheck(this, TBodyModule);
      };

      TBodyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TBodyModule
      });
      TBodyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TBodyModule_Factory(t) {
          return new (t || TBodyModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], CellModule]]
      });

      var Ng2SmartTableTheadComponent = /*#__PURE__*/function () {
        function Ng2SmartTableTheadComponent() {
          _classCallCheck(this, Ng2SmartTableTheadComponent);

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(Ng2SmartTableTheadComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
          }
        }]);

        return Ng2SmartTableTheadComponent;
      }();

      Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) {
        return new (t || Ng2SmartTableTheadComponent)();
      };

      Ng2SmartTableTheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2SmartTableTheadComponent,
        selectors: [["", "ng2-st-thead", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          isAllSelected: "isAllSelected",
          createConfirm: "createConfirm"
        },
        outputs: {
          sort: "sort",
          selectAllRows: "selectAllRows",
          create: "create",
          filter: "filter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c6,
        decls: 3,
        vars: 3,
        consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]],
        template: function Ng2SmartTableTheadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHideHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHideSubHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.grid.createFormShown);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent];
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], Ng2SmartTableTheadComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTheadComponent.prototype, "create", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableTheadComponent.prototype, "filter", void 0);

      var ActionsComponent = /*#__PURE__*/function () {
        function ActionsComponent() {
          _classCallCheck(this, ActionsComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ActionsComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.createButtonContent = this.grid.getSetting('add.createButtonContent');
            this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
          }
        }]);

        return ActionsComponent;
      }();

      ActionsComponent.ɵfac = function ActionsComponent_Factory(t) {
        return new (t || ActionsComponent)();
      };

      ActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ActionsComponent,
        selectors: [["ng2-st-actions"]],
        inputs: {
          grid: "grid"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 2,
        consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]],
        template: function ActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_0_listener($event) {
              $event.preventDefault();
              return ctx.create.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_1_listener($event) {
              $event.preventDefault();
              return ctx.grid.createFormShown = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.createButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], ActionsComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ActionsComponent.prototype, "create", void 0);

      var ActionsTitleComponent = /*#__PURE__*/function () {
        function ActionsTitleComponent(ref) {
          _classCallCheck(this, ActionsTitleComponent);

          this.ref = ref;
        }

        _createClass(ActionsTitleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.ref.nativeElement.classList.add('ng2-smart-actions');
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
          }
        }]);

        return ActionsTitleComponent;
      }();

      ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) {
        return new (t || ActionsTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      ActionsTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ActionsTitleComponent,
        selectors: [["", "ng2-st-actions-title", ""]],
        inputs: {
          grid: "grid"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c7,
        decls: 2,
        vars: 1,
        consts: [[1, "ng2-smart-title"]],
        template: function ActionsTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.actionsColumnTitle);
          }
        },
        encapsulation: 2
      });

      ActionsTitleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], ActionsTitleComponent.prototype, "grid", void 0);
      ActionsTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ActionsTitleComponent);

      var AddButtonComponent = /*#__PURE__*/function () {
        function AddButtonComponent(ref) {
          _classCallCheck(this, AddButtonComponent);

          this.ref = ref;
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AddButtonComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
          }
        }, {
          key: "onAdd",
          value: function onAdd(event) {
            event.preventDefault();
            event.stopPropagation();

            if (this.grid.getSetting('mode') === 'external') {
              this.create.emit({
                source: this.source
              });
            } else {
              this.grid.createFormShown = true;
            }
          }
        }]);

        return AddButtonComponent;
      }();

      AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) {
        return new (t || AddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      AddButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddButtonComponent,
        selectors: [["", "ng2-st-add-button", ""]],
        inputs: {
          grid: "grid",
          source: "source"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c8,
        decls: 1,
        vars: 1,
        consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]],
        template: function AddButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActionAdd);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });

      AddButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], AddButtonComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], AddButtonComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddButtonComponent.prototype, "create", void 0);
      AddButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AddButtonComponent);

      var CheckboxSelectAllComponent = function CheckboxSelectAllComponent() {
        _classCallCheck(this, CheckboxSelectAllComponent);
      };

      CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) {
        return new (t || CheckboxSelectAllComponent)();
      };

      CheckboxSelectAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxSelectAllComponent,
        selectors: [["", "ng2-st-checkbox-select-all", ""]],
        inputs: {
          grid: "grid",
          source: "source",
          isAllSelected: "isAllSelected"
        },
        attrs: _c9,
        decls: 1,
        vars: 1,
        consts: [["type", "checkbox", 3, "ngModel"]],
        template: function CheckboxSelectAllComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isAllSelected);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], CheckboxSelectAllComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], CheckboxSelectAllComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);

      var ColumnTitleComponent = function ColumnTitleComponent() {
        _classCallCheck(this, ColumnTitleComponent);

        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      };

      ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) {
        return new (t || ColumnTitleComponent)();
      };

      ColumnTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ColumnTitleComponent,
        selectors: [["ng2-st-column-title"]],
        inputs: {
          column: "column",
          source: "source"
        },
        outputs: {
          sort: "sort"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]],
        template: function ColumnTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-smart-table-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) {
              return ctx.sort.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("source", ctx.source)("column", ctx.column);
          }
        },
        directives: function directives() {
          return [TitleComponent];
        },
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)], ColumnTitleComponent.prototype, "column", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], ColumnTitleComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ColumnTitleComponent.prototype, "sort", void 0);

      var TitleComponent = /*#__PURE__*/function () {
        function TitleComponent() {
          _classCallCheck(this, TitleComponent);

          this.currentDirection = '';
          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TitleComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this24 = this;

            if (changes.source) {
              if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
              }

              this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this24.source.getSort();

                if (sortConf.length > 0 && sortConf[0]['field'] === _this24.column.id) {
                  _this24.currentDirection = sortConf[0]['direction'];
                } else {
                  _this24.currentDirection = '';
                }

                sortConf.forEach(function (fieldConf) {});
              });
            }
          }
        }, {
          key: "_sort",
          value: function _sort(event) {
            event.preventDefault();
            this.changeSortDirection();
            this.source.setSort([{
              field: this.column.id,
              direction: this.currentDirection,
              compare: this.column.getCompareFunction()
            }]);
            this.sort.emit(null);
          }
        }, {
          key: "changeSortDirection",
          value: function changeSortDirection() {
            if (this.currentDirection) {
              var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
              this.currentDirection = newDirection;
            } else {
              this.currentDirection = this.column.sortDirection;
            }

            return this.currentDirection;
          }
        }]);

        return TitleComponent;
      }();

      TitleComponent.ɵfac = function TitleComponent_Factory(t) {
        return new (t || TitleComponent)();
      };

      TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TitleComponent,
        selectors: [["ng2-smart-table-title"]],
        inputs: {
          column: "column",
          source: "source"
        },
        outputs: {
          sort: "sort"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 2,
        vars: 2,
        consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]],
        template: function TitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TitleComponent_a_0_Template, 2, 2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TitleComponent_span_1_Template, 2, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isSortable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.isSortable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Column)], TitleComponent.prototype, "column", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], TitleComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TitleComponent.prototype, "sort", void 0);

      var TheadFitlersRowComponent = /*#__PURE__*/function () {
        function TheadFitlersRowComponent() {
          _classCallCheck(this, TheadFitlersRowComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TheadFitlersRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.filterInputClass = this.grid.getSetting('filter.inputClass');
          }
        }]);

        return TheadFitlersRowComponent;
      }();

      TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) {
        return new (t || TheadFitlersRowComponent)();
      };

      TheadFitlersRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TheadFitlersRowComponent,
        selectors: [["", "ng2-st-thead-filters-row", ""]],
        inputs: {
          grid: "grid",
          source: "source"
        },
        outputs: {
          create: "create",
          filter: "filter"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c10,
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]],
        template: function TheadFitlersRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.getColumns());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], AddButtonComponent, FilterComponent],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TheadFitlersRowComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], TheadFitlersRowComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TheadFitlersRowComponent.prototype, "create", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TheadFitlersRowComponent.prototype, "filter", void 0);

      var TheadFormRowComponent = /*#__PURE__*/function () {
        function TheadFormRowComponent() {
          _classCallCheck(this, TheadFormRowComponent);

          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TheadFormRowComponent, [{
          key: "onCreate",
          value: function onCreate(event) {
            event.stopPropagation();
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.addInputClass = this.grid.getSetting('add.inputClass');
          }
        }]);

        return TheadFormRowComponent;
      }();

      TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) {
        return new (t || TheadFormRowComponent)();
      };

      TheadFormRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TheadFormRowComponent,
        selectors: [["", "ng2-st-thead-form-row", ""]],
        inputs: {
          grid: "grid",
          row: "row",
          createConfirm: "createConfirm"
        },
        outputs: {
          create: "create"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c11,
        decls: 4,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]],
        template: function TheadFormRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.getNewRow().getCells());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ActionsComponent, CellComponent],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TheadFormRowComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Row)], TheadFormRowComponent.prototype, "row", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], TheadFormRowComponent.prototype, "createConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TheadFormRowComponent.prototype, "create", void 0);

      var TheadTitlesRowComponent = /*#__PURE__*/function () {
        function TheadTitlesRowComponent() {
          _classCallCheck(this, TheadTitlesRowComponent);

          this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.selectAllRows = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(TheadTitlesRowComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
          }
        }]);

        return TheadTitlesRowComponent;
      }();

      TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) {
        return new (t || TheadTitlesRowComponent)();
      };

      TheadTitlesRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TheadTitlesRowComponent,
        selectors: [["", "ng2-st-thead-titles-row", ""]],
        inputs: {
          grid: "grid",
          isAllSelected: "isAllSelected",
          source: "source"
        },
        outputs: {
          sort: "sort",
          selectAllRows: "selectAllRows"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        attrs: _c12,
        decls: 4,
        vars: 4,
        consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]],
        template: function TheadTitlesRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.getColumns());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], CheckboxSelectAllComponent, ActionsTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ColumnTitleComponent],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Grid)], TheadTitlesRowComponent.prototype, "grid", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", DataSource)], TheadTitlesRowComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TheadTitlesRowComponent.prototype, "sort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
      var THEAD_COMPONENTS = [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];

      var THeadModule = function THeadModule() {
        _classCallCheck(this, THeadModule);
      };

      THeadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: THeadModule
      });
      THeadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function THeadModule_Factory(t) {
          return new (t || THeadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], FilterModule, CellModule]]
      });

      function compareValues(direction, a, b) {
        if (a < b) {
          return -1 * direction;
        }

        if (a > b) {
          return direction;
        }

        return 0;
      }

      var LocalSorter = /*#__PURE__*/function () {
        function LocalSorter() {
          _classCallCheck(this, LocalSorter);
        }

        _createClass(LocalSorter, null, [{
          key: "sort",
          value: function sort(data, field, direction, customCompare) {
            var dir = direction === 'asc' ? 1 : -1;
            var compare = customCompare ? customCompare : compareValues;
            return data.sort(function (a, b) {
              return compare.call(null, dir, a[field], b[field]);
            });
          }
        }]);

        return LocalSorter;
      }();

      function filterValues(value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
      }

      var LocalFilter = /*#__PURE__*/function () {
        function LocalFilter() {
          _classCallCheck(this, LocalFilter);
        }

        _createClass(LocalFilter, null, [{
          key: "filter",
          value: function filter(data, field, search, customFilter) {
            var filter = customFilter ? customFilter : filterValues;
            return data.filter(function (el) {
              var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
              return filter.call(null, value, search);
            });
          }
        }]);

        return LocalFilter;
      }();

      var LocalPager = /*#__PURE__*/function () {
        function LocalPager() {
          _classCallCheck(this, LocalPager);
        }

        _createClass(LocalPager, null, [{
          key: "paginate",
          value: function paginate(data, page, perPage) {
            return data.slice(perPage * (page - 1), perPage * page);
          }
        }]);

        return LocalPager;
      }();

      var LocalDataSource = /*#__PURE__*/function (_DataSource) {
        _inherits(LocalDataSource, _DataSource);

        var _super15 = _createSuper(LocalDataSource);

        function LocalDataSource() {
          var _this25;

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, LocalDataSource);

          _this25 = _super15.call(this);
          _this25.data = [];
          _this25.filteredAndSorted = [];
          _this25.sortConf = [];
          _this25.filterConf = {
            filters: [],
            andOperator: true
          };
          _this25.pagingConf = {};
          _this25.data = data;
          return _this25;
        }

        _createClass(LocalDataSource, [{
          key: "load",
          value: function load(data) {
            this.data = data;
            return _get(_getPrototypeOf(LocalDataSource.prototype), "load", this).call(this, data);
          }
        }, {
          key: "prepend",
          value: function prepend(element) {
            this.reset(true);
            this.data.unshift(element);
            return _get(_getPrototypeOf(LocalDataSource.prototype), "prepend", this).call(this, element);
          }
        }, {
          key: "append",
          value: function append(element) {
            this.reset(true);
            this.data.push(element);
            return _get(_getPrototypeOf(LocalDataSource.prototype), "append", this).call(this, element);
          }
        }, {
          key: "add",
          value: function add(element) {
            this.data.push(element);
            return _get(_getPrototypeOf(LocalDataSource.prototype), "add", this).call(this, element);
          }
        }, {
          key: "remove",
          value: function remove(element) {
            this.data = this.data.filter(function (el) {
              return el !== element;
            });
            return _get(_getPrototypeOf(LocalDataSource.prototype), "remove", this).call(this, element);
          }
        }, {
          key: "update",
          value: function update(element, values) {
            var _this26 = this;

            return new Promise(function (resolve, reject) {
              _this26.find(element).then(function (found) {
                found = deepExtend(found, values);

                _get(_getPrototypeOf(LocalDataSource.prototype), "update", _this26).call(_this26, found, values).then(resolve)["catch"](reject);
              })["catch"](reject);
            });
          }
        }, {
          key: "find",
          value: function find(element) {
            var found = this.data.find(function (el) {
              return el === element;
            });

            if (found) {
              return Promise.resolve(found);
            }

            return Promise.reject(new Error('Element was not found in the dataset'));
          }
        }, {
          key: "getElements",
          value: function getElements() {
            var data = this.data.slice(0);
            return Promise.resolve(this.prepareData(data));
          }
        }, {
          key: "getFilteredAndSorted",
          value: function getFilteredAndSorted() {
            var data = this.data.slice(0);
            this.prepareData(data);
            return Promise.resolve(this.filteredAndSorted);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var data = this.data.slice(0);
            return Promise.resolve(data);
          }
        }, {
          key: "reset",
          value: function reset() {
            var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (silent) {
              this.filterConf = {
                filters: [],
                andOperator: true
              };
              this.sortConf = [];
              this.pagingConf['page'] = 1;
            } else {
              this.setFilter([], true, false);
              this.setSort([], false);
              this.setPage(1);
            }
          }
        }, {
          key: "empty",
          value: function empty() {
            this.data = [];
            return _get(_getPrototypeOf(LocalDataSource.prototype), "empty", this).call(this);
          }
        }, {
          key: "count",
          value: function count() {
            return this.filteredAndSorted.length;
          }
          /**
           *
           * Array of conf objects
           * [
           *  {field: string, direction: asc|desc|null, compare: Function|null},
           * ]
           * @param conf
           * @param doEmit
           * @returns {LocalDataSource}
           */

        }, {
          key: "setSort",
          value: function setSort(conf) {
            var doEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (conf !== null) {
              conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                  throw new Error('Sort configuration object is not valid');
                }
              });
              this.sortConf = conf;
            }

            _get(_getPrototypeOf(LocalDataSource.prototype), "setSort", this).call(this, conf, doEmit);

            return this;
          }
          /**
           *
           * Array of conf objects
           * [
           *  {field: string, search: string, filter: Function|null},
           * ]
           * @param conf
           * @param andOperator
           * @param doEmit
           * @returns {LocalDataSource}
           */

        }, {
          key: "setFilter",
          value: function setFilter(conf) {
            var _this27 = this;

            var andOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (conf && conf.length > 0) {
              conf.forEach(function (fieldConf) {
                _this27.addFilter(fieldConf, andOperator, false);
              });
            } else {
              this.filterConf = {
                filters: [],
                andOperator: true
              };
            }

            this.filterConf.andOperator = andOperator;
            this.pagingConf['page'] = 1;

            _get(_getPrototypeOf(LocalDataSource.prototype), "setFilter", this).call(this, conf, andOperator, doEmit);

            return this;
          }
        }, {
          key: "addFilter",
          value: function addFilter(fieldConf) {
            var _this28 = this;

            var andOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
              throw new Error('Filter configuration object is not valid');
            }

            var found = false;
            this.filterConf.filters.forEach(function (currentFieldConf, index) {
              if (currentFieldConf['field'] === fieldConf['field']) {
                _this28.filterConf.filters[index] = fieldConf;
                found = true;
              }
            });

            if (!found) {
              this.filterConf.filters.push(fieldConf);
            }

            this.filterConf.andOperator = andOperator;

            _get(_getPrototypeOf(LocalDataSource.prototype), "addFilter", this).call(this, fieldConf, andOperator, doEmit);

            return this;
          }
        }, {
          key: "setPaging",
          value: function setPaging(page, perPage) {
            var doEmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            this.pagingConf['page'] = page;
            this.pagingConf['perPage'] = perPage;

            _get(_getPrototypeOf(LocalDataSource.prototype), "setPaging", this).call(this, page, perPage, doEmit);

            return this;
          }
        }, {
          key: "setPage",
          value: function setPage(page) {
            var doEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.pagingConf['page'] = page;

            _get(_getPrototypeOf(LocalDataSource.prototype), "setPage", this).call(this, page, doEmit);

            return this;
          }
        }, {
          key: "getSort",
          value: function getSort() {
            return this.sortConf;
          }
        }, {
          key: "getFilter",
          value: function getFilter() {
            return this.filterConf;
          }
        }, {
          key: "getPaging",
          value: function getPaging() {
            return this.pagingConf;
          }
        }, {
          key: "prepareData",
          value: function prepareData(data) {
            data = this.filter(data);
            data = this.sort(data);
            this.filteredAndSorted = data.slice(0);
            return this.paginate(data);
          }
        }, {
          key: "sort",
          value: function sort(data) {
            if (this.sortConf) {
              this.sortConf.forEach(function (fieldConf) {
                data = LocalSorter.sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
              });
            }

            return data;
          } // TODO: refactor?

        }, {
          key: "filter",
          value: function filter(data) {
            if (this.filterConf.filters) {
              if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                  if (fieldConf['search'].length > 0) {
                    data = LocalFilter.filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                  }
                });
              } else {
                var mergedData = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                  if (fieldConf['search'].length > 0) {
                    mergedData = mergedData.concat(LocalFilter.filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                  }
                }); // remove non unique items

                data = mergedData.filter(function (elem, pos, arr) {
                  return arr.indexOf(elem) === pos;
                });
              }
            }

            return data;
          }
        }, {
          key: "paginate",
          value: function paginate(data) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
              data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
            }

            return data;
          }
        }]);

        return LocalDataSource;
      }(DataSource);

      var Ng2SmartTableComponent = /*#__PURE__*/function () {
        function Ng2SmartTableComponent() {
          _classCallCheck(this, Ng2SmartTableComponent);

          this.settings = {};
          this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.userRowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.custom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.deleteConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.editConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.createConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.rowHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
              columnTitle: 'Actions',
              add: true,
              edit: true,
              "delete": true,
              custom: [],
              position: 'left'
            },
            filter: {
              inputClass: ''
            },
            edit: {
              inputClass: '',
              editButtonContent: 'Edit',
              saveButtonContent: 'Update',
              cancelButtonContent: 'Cancel',
              confirmSave: false
            },
            add: {
              inputClass: '',
              addButtonContent: 'Add New',
              createButtonContent: 'Create',
              cancelButtonContent: 'Cancel',
              confirmCreate: false
            },
            "delete": {
              deleteButtonContent: 'Delete',
              confirmDelete: false
            },
            attr: {
              id: '',
              "class": ''
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
              display: true,
              perPage: 10
            },
            rowClassFunction: function rowClassFunction() {
              return "";
            }
          };
          this.isAllSelected = false;
        }

        _createClass(Ng2SmartTableComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.grid) {
              if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
              }

              if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
              }
            } else {
              this.initGrid();
            }

            this.tableId = this.grid.getSetting('attr.id');
            this.tableClass = this.grid.getSetting('attr.class');
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
            this.rowClassFunction = this.grid.getSetting('rowClassFunction');
          }
        }, {
          key: "editRowSelect",
          value: function editRowSelect(row) {
            if (this.grid.getSetting('selectMode') === 'multi') {
              this.onMultipleSelectRow(row);
            } else {
              this.onSelectRow(row);
            }
          }
        }, {
          key: "onUserSelectRow",
          value: function onUserSelectRow(row) {
            if (this.grid.getSetting('selectMode') !== 'multi') {
              this.grid.selectRow(row);
              this.emitUserSelectRow(row);
              this.emitSelectRow(row);
            }
          }
        }, {
          key: "onRowHover",
          value: function onRowHover(row) {
            this.rowHover.emit(row);
          }
        }, {
          key: "multipleSelectRow",
          value: function multipleSelectRow(row) {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
          }
        }, {
          key: "onSelectAllRows",
          value: function onSelectAllRows($event) {
            this.isAllSelected = !this.isAllSelected;
            this.grid.selectAllRows(this.isAllSelected);
            this.emitUserSelectRow(null);
            this.emitSelectRow(null);
          }
        }, {
          key: "onSelectRow",
          value: function onSelectRow(row) {
            this.grid.selectRow(row);
            this.emitSelectRow(row);
          }
        }, {
          key: "onMultipleSelectRow",
          value: function onMultipleSelectRow(row) {
            this.emitSelectRow(row);
          }
        }, {
          key: "initGrid",
          value: function initGrid() {
            var _this29 = this;

            this.source = this.prepareSource();
            this.grid = new Grid(this.source, this.prepareSettings());
            this.grid.onSelectRow().subscribe(function (row) {
              return _this29.emitSelectRow(row);
            });
          }
        }, {
          key: "prepareSource",
          value: function prepareSource() {
            if (this.source instanceof DataSource) {
              return this.source;
            } else if (this.source instanceof Array) {
              return new LocalDataSource(this.source);
            }

            return new LocalDataSource();
          }
        }, {
          key: "prepareSettings",
          value: function prepareSettings() {
            return deepExtend({}, this.defaultSettings, this.settings);
          }
        }, {
          key: "changePage",
          value: function changePage($event) {
            this.resetAllSelector();
          }
        }, {
          key: "sort",
          value: function sort($event) {
            this.resetAllSelector();
          }
        }, {
          key: "filter",
          value: function filter($event) {
            this.resetAllSelector();
          }
        }, {
          key: "resetAllSelector",
          value: function resetAllSelector() {
            this.isAllSelected = false;
          }
        }, {
          key: "emitUserSelectRow",
          value: function emitUserSelectRow(row) {
            var selectedRows = this.grid.getSelectedRows();
            this.userRowSelect.emit({
              data: row ? row.getData() : null,
              isSelected: row ? row.getIsSelected() : null,
              source: this.source,
              selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) {
                return r.getData();
              }) : []
            });
          }
        }, {
          key: "emitSelectRow",
          value: function emitSelectRow(row) {
            this.rowSelect.emit({
              data: row ? row.getData() : null,
              isSelected: row ? row.getIsSelected() : null,
              source: this.source
            });
          }
        }]);

        return Ng2SmartTableComponent;
      }();

      Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) {
        return new (t || Ng2SmartTableComponent)();
      };

      Ng2SmartTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: Ng2SmartTableComponent,
        selectors: [["ng2-smart-table"]],
        inputs: {
          settings: "settings",
          source: "source"
        },
        outputs: {
          rowSelect: "rowSelect",
          userRowSelect: "userRowSelect",
          "delete": "delete",
          edit: "edit",
          create: "create",
          custom: "custom",
          deleteConfirm: "deleteConfirm",
          editConfirm: "editConfirm",
          createConfirm: "createConfirm",
          rowHover: "rowHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()],
        decls: 4,
        vars: 9,
        consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]],
        template: function Ng2SmartTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) {
              return ctx.edit.emit($event);
            })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) {
              return ctx["delete"].emit($event);
            })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) {
              return ctx.custom.emit($event);
            })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) {
              return ctx.onUserSelectRow($event);
            })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) {
              return ctx.editRowSelect($event);
            })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) {
              return ctx.multipleSelectRow($event);
            })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) {
              return ctx.onRowHover($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.tableId)("ngClass", ctx.tableClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPagerDisplay);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent, PagerComponent],
        styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "source", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "settings", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "delete", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "edit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "create", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "custom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], Ng2SmartTableComponent.prototype, "rowHover", void 0);

      var Ng2SmartTableModule = function Ng2SmartTableModule() {
        _classCallCheck(this, Ng2SmartTableModule);
      };

      Ng2SmartTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: Ng2SmartTableModule
      });
      Ng2SmartTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function Ng2SmartTableModule_Factory(t) {
          return new (t || Ng2SmartTableModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], CellModule, FilterModule, PagerModule, TBodyModule, THeadModule]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-smart-table-cell',
            template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  "
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isInEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isNew: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditCellDefault, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'table-cell-custom-editor',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }];
        }, {
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'table-cell-default-editor',
            template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'table-cell-edit-mode',
            template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultEditor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          onStopEditing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'checkbox-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompleterEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'completer-editor',
            template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
          }]
        }], function () {
          return [{
            type: _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'input-editor',
            template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'select-editor',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextareaEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'textarea-editor',
            template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'custom-view-component',
            template: "\n    <ng-template #dynamicTarget></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }];
        }, {
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'table-cell-view-mode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
          }]
        }], null, {
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CellModule, {
          declarations: function declarations() {
            return [CellComponent, EditCellDefault, DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]];
          },
          exports: function exports() {
            return [CellComponent, EditCellDefault, DefaultEditor, CustomEditComponent, DefaultEditComponent, EditCellComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent, CustomViewComponent, ViewCellComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CellModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]],
            declarations: [].concat(CELL_COMPONENTS),
            exports: [].concat(CELL_COMPONENTS)
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterDefault, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var ɵFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FilterComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-smart-table-filter',
            template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}"]
          }]
        }], null, null);
      })();

      var ɵDefaultFilterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFilterComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'default-table-filter',
            template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  "
          }]
        }], null, {
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'custom-table-filter',
            template: "<ng-template #dynamicTarget></ng-template>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
          }];
        }, {
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dynamicTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dynamicTarget', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFilter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            template: ''
          }]
        }], function () {
          return [];
        }, {
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'checkbox-filter',
            template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompleterFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'completer-filter',
            template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
          }]
        }], function () {
          return [{
            type: _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["CompleterService"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'input-filter',
            template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'select-filter',
            template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
          }]
        }], function () {
          return [];
        }, {
          inputControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputControl', {
              read: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"],
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FilterModule, {
          declarations: function declarations() {
            return [FilterDefault, DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]];
          },
          exports: function exports() {
            return [FilterDefault, DefaultFilter, FilterComponent, DefaultFilterComponent, CustomFilterComponent, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _akveo_ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"]],
            declarations: [].concat(FILTER_COMPONENTS),
            exports: [].concat(FILTER_COMPONENTS)
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-smart-table-pager',
            template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            styles: [".ng2-smart-pagination{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}"]
          }]
        }], function () {
          return [];
        }, {
          perPageSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagerModule, {
          declarations: function declarations() {
            return [PagerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
          },
          exports: function exports() {
            return [PagerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [PagerComponent],
            exports: [PagerComponent]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2SmartTableTbodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-tbody]',
            template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of row.cells\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n",
            styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-create-cancel a:first-child,:host ::ng-deep ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"]
          }]
        }], function () {
          return [];
        }, {
          save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          userSelectRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          editRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multipleSelectRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rowHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowClassFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TbodyCreateCancelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-st-tbody-create-cancel',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  "
          }]
        }], null, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TbodyEditDeleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-st-tbody-edit-delete',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  "
          }]
        }], function () {
          return [];
        }, {
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          editRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TbodyCustomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-st-tbody-custom',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
          }]
        }], function () {
          return [];
        }, {
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TBodyModule, {
          declarations: function declarations() {
            return [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], CellModule];
          },
          exports: function exports() {
            return [TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent, Ng2SmartTableTbodyComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TBodyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], CellModule],
            declarations: [].concat(TBODY_COMPONENTS),
            exports: [].concat(TBODY_COMPONENTS)
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2SmartTableTheadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-thead]',
            template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [isAllSelected]=\"isAllSelected\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n"
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selectAllRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-st-actions',
            template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionsTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-actions-title]',
            template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-add-button]',
            template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxSelectAllComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-checkbox-select-all]',
            template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
          }]
        }], null, {
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColumnTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-st-column-title',
            template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-smart-table-title',
            template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"]
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TheadFitlersRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-thead-filters-row]',
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TheadFormRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-thead-form-row]',
            template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  "
          }]
        }], function () {
          return [];
        }, {
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TheadTitlesRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: '[ng2-st-thead-titles-row]',
            template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
          }]
        }], function () {
          return [];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selectAllRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          isAllSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](THeadModule, {
          declarations: function declarations() {
            return [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], FilterModule, CellModule];
          },
          exports: function exports() {
            return [ActionsComponent, ActionsTitleComponent, AddButtonComponent, CheckboxSelectAllComponent, ColumnTitleComponent, TitleComponent, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent, Ng2SmartTableTheadComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](THeadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], FilterModule, CellModule],
            declarations: [].concat(THEAD_COMPONENTS),
            exports: [].concat(THEAD_COMPONENTS)
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2SmartTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ng2-smart-table',
            template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [isAllSelected]=\"isAllSelected\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows($event)\"\n                      (sort)=\"sort($event)\"\n                      (filter)=\"filter($event)\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userSelectRow)=\"onUserSelectRow($event)\"\n                      (editRowSelect)=\"editRowSelect($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\"\n                        (changePage)=\"changePage($event)\">\n</ng2-smart-table-pager>\n",
            styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}"]
          }]
        }], function () {
          return [];
        }, {
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          userRowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          edit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          custom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          deleteConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          editConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          createConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rowHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2SmartTableModule, {
          declarations: function declarations() {
            return [Ng2SmartTableComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], CellModule, FilterModule, PagerModule, TBodyModule, THeadModule];
          },
          exports: function exports() {
            return [Ng2SmartTableComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2SmartTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], CellModule, FilterModule, PagerModule, TBodyModule, THeadModule],
            declarations: [Ng2SmartTableComponent],
            exports: [Ng2SmartTableComponent]
          }]
        }], null, null);
      })();

      var ServerSourceConf = function ServerSourceConf() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$endPoint = _ref.endPoint,
            endPoint = _ref$endPoint === void 0 ? '' : _ref$endPoint,
            _ref$sortFieldKey = _ref.sortFieldKey,
            sortFieldKey = _ref$sortFieldKey === void 0 ? '' : _ref$sortFieldKey,
            _ref$sortDirKey = _ref.sortDirKey,
            sortDirKey = _ref$sortDirKey === void 0 ? '' : _ref$sortDirKey,
            _ref$pagerPageKey = _ref.pagerPageKey,
            pagerPageKey = _ref$pagerPageKey === void 0 ? '' : _ref$pagerPageKey,
            _ref$pagerLimitKey = _ref.pagerLimitKey,
            pagerLimitKey = _ref$pagerLimitKey === void 0 ? '' : _ref$pagerLimitKey,
            _ref$filterFieldKey = _ref.filterFieldKey,
            filterFieldKey = _ref$filterFieldKey === void 0 ? '' : _ref$filterFieldKey,
            _ref$totalKey = _ref.totalKey,
            totalKey = _ref$totalKey === void 0 ? '' : _ref$totalKey,
            _ref$dataKey = _ref.dataKey,
            dataKey = _ref$dataKey === void 0 ? '' : _ref$dataKey;

        _classCallCheck(this, ServerSourceConf);

        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      };

      ServerSourceConf.SORT_FIELD_KEY = '_sort';
      ServerSourceConf.SORT_DIR_KEY = '_order';
      ServerSourceConf.PAGER_PAGE_KEY = '_page';
      ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
      ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
      ServerSourceConf.TOTAL_KEY = 'x-total-count';
      ServerSourceConf.DATA_KEY = '';

      var ServerDataSource = /*#__PURE__*/function (_LocalDataSource) {
        _inherits(ServerDataSource, _LocalDataSource);

        var _super16 = _createSuper(ServerDataSource);

        function ServerDataSource(http) {
          var _this30;

          var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, ServerDataSource);

          _this30 = _super16.call(this);
          _this30.http = http;
          _this30.lastRequestCount = 0;
          _this30.conf = new ServerSourceConf(conf);

          if (!_this30.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
          }

          return _this30;
        }

        _createClass(ServerDataSource, [{
          key: "count",
          value: function count() {
            return this.lastRequestCount;
          }
        }, {
          key: "getElements",
          value: function getElements() {
            var _this31 = this;

            return this.requestElements().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
              _this31.lastRequestCount = _this31.extractTotalFromResponse(res);
              _this31.data = _this31.extractDataFromResponse(res);
              return _this31.data;
            })).toPromise();
          }
          /**
           * Extracts array of data from server response
           * @param res
           * @returns {any}
           */

        }, {
          key: "extractDataFromResponse",
          value: function extractDataFromResponse(res) {
            var rawData = res.body;
            var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

            if (data instanceof Array) {
              return data;
            }

            throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '".concat(this.conf.dataKey, "' exists and is array."));
          }
          /**
           * Extracts total rows count from the server response
           * Looks for the count in the heders first, then in the response body
           * @param res
           * @returns {any}
           */

        }, {
          key: "extractTotalFromResponse",
          value: function extractTotalFromResponse(res) {
            if (res.headers.has(this.conf.totalKey)) {
              return +res.headers.get(this.conf.totalKey);
            } else {
              var rawData = res.body;
              return getDeepFromObject(rawData, this.conf.totalKey, 0);
            }
          }
        }, {
          key: "requestElements",
          value: function requestElements() {
            var httpParams = this.createRequesParams();
            return this.http.get(this.conf.endPoint, {
              params: httpParams,
              observe: 'response'
            });
          }
        }, {
          key: "createRequesParams",
          value: function createRequesParams() {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
          }
        }, {
          key: "addSortRequestParams",
          value: function addSortRequestParams(httpParams) {
            var _this32 = this;

            if (this.sortConf) {
              this.sortConf.forEach(function (fieldConf) {
                httpParams = httpParams.set(_this32.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(_this32.conf.sortDirKey, fieldConf.direction.toUpperCase());
              });
            }

            return httpParams;
          }
        }, {
          key: "addFilterRequestParams",
          value: function addFilterRequestParams(httpParams) {
            var _this33 = this;

            if (this.filterConf.filters) {
              this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                  httpParams = httpParams.set(_this33.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
              });
            }

            return httpParams;
          }
        }, {
          key: "addPagerRequestParams",
          value: function addPagerRequestParams(httpParams) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
              httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
              httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
            }

            return httpParams;
          }
        }]);

        return ServerDataSource;
      }(LocalDataSource);
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-smart-table.js.map

      /***/

    },

    /***/
    "hPRF":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@akveo/ng2-completer/__ivy_ngcc__/esm2015/ng2-completer.js ***!
      \*********************************************************************************/

    /*! exports provided: CompleterCmp, CompleterListItemCmp, CompleterService, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, LocalData, LocalDataFactory, Ng2CompleterModule, RemoteData, RemoteDataFactory, ɵa, ɵb */

    /***/
    function hPRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleterCmp", function () {
        return CompleterCmp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleterListItemCmp", function () {
        return CompleterListItemCmp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompleterService", function () {
        return CompleterService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CtrCompleter", function () {
        return CtrCompleter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CtrDropdown", function () {
        return CtrDropdown;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CtrInput", function () {
        return CtrInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CtrList", function () {
        return CtrList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CtrRow", function () {
        return CtrRow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalData", function () {
        return LocalData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDataFactory", function () {
        return LocalDataFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function () {
        return Ng2CompleterModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteData", function () {
        return RemoteData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoteDataFactory", function () {
        return RemoteDataFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CtrListContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return CompleterBaseData;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license ng2-completer
       * MIT license
       */


      function CompleterListItemCmp_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", part_r1.isMatch ? ctx_r0.matchClass : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r1.text);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "completer-title": a0,
          "completer-description": a1
        };
      };

      var _c1 = ["ctrInput"];

      function CompleterCmp_div_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9._textSearching);
        }
      }

      function CompleterCmp_div_3_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10._textNoResults);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
        }
      }

      function CompleterCmp_div_3_div_1_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_div_3_div_2_img_1_Template, 1, 1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_3_div_2_div_2_Template, 1, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.image != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.image === "");
        }
      }

      function CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "completer-list-item", 23);
        }

        if (rf & 2) {
          var item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r12.description)("matchClass", ctx_r15.matchClass)("searchStr", ctx_r15.searchStr)("type", "description");
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "completer-item-text-image": a0
        };
      };

      function CompleterCmp_div_3_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_3_div_2_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "completer-list-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompleterCmp_div_3_div_1_div_3_completer_list_item_5_Template, 1, 4, "completer-list-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;
          var rowIndex_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ctrRow", rowIndex_r13)("dataItem", item_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.image || item_r12.image === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, item_r12.image || item_r12.image === ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", item_r12.title)("matchClass", ctx_r11.matchClass)("searchStr", ctx_r11.searchStr)("type", "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.description && item_r12.description != "");
        }
      }

      function CompleterCmp_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CompleterCmp_div_3_div_1_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleterCmp_div_3_div_1_div_3_Template, 6, 11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var searchActive_r5 = ctx_r21.searching;
          var items_r4 = ctx_r21.results;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", searchActive_r5 && ctx_r8.displaySearching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !searchActive_r5 && (!items_r4 || (items_r4 == null ? null : items_r4.length) === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r4);
        }
      }

      function CompleterCmp_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterCmp_div_3_div_1_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r4 = ctx.results;
          var searchActive_r5 = ctx.searching;
          var isInitialized_r6 = ctx.searchInitialized;
          var isOpen_r7 = ctx.isOpen;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isInitialized_r6 && isOpen_r7 && ((items_r4 == null ? null : items_r4.length) > 0 || ctx_r3.displayNoResults && !searchActive_r5 || searchActive_r5 && ctx_r3.displaySearching));
        }
      }

      var MAX_CHARS = 524288; // the default max length per the html maxlength attribute

      var MIN_SEARCH_LENGTH = 3;
      var PAUSE = 10;
      var TEXT_SEARCHING = "Searching...";
      var TEXT_NO_RESULTS = "No results found";
      var CLEAR_TIMEOUT = 50;

      function isNil(value) {
        return typeof value === "undefined" || value === null;
      }

      var CompleterBaseData = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(CompleterBaseData, _rxjs__WEBPACK_IMPORT);

        var _super17 = _createSuper(CompleterBaseData);

        function CompleterBaseData() {
          var _this34;

          _classCallCheck(this, CompleterBaseData);

          _this34 = _super17.call(this);
          _this34._searchFields = null;
          _this34._titleField = null;
          _this34._descriptionField = undefined;
          _this34._imageField = undefined;
          return _this34;
        }

        _createClass(CompleterBaseData, [{
          key: "cancel",
          value: function cancel() {
            return;
          }
        }, {
          key: "searchFields",
          value: function searchFields(_searchFields) {
            this._searchFields = _searchFields;
            return this;
          }
        }, {
          key: "titleField",
          value: function titleField(_titleField) {
            this._titleField = _titleField;
            return this;
          }
        }, {
          key: "descriptionField",
          value: function descriptionField(_descriptionField) {
            this._descriptionField = _descriptionField;
            return this;
          }
        }, {
          key: "imageField",
          value: function imageField(_imageField) {
            this._imageField = _imageField;
            return this;
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            var image = null;
            var formattedText;
            var formattedDesc = null;

            if (this._titleField) {
              formattedText = this.extractTitle(data);
            } else {
              formattedText = data;
            }

            if (typeof formattedText !== "string") {
              formattedText = JSON.stringify(formattedText);
            }

            if (this._descriptionField) {
              formattedDesc = this.extractValue(data, this._descriptionField);
            }

            if (this._imageField) {
              image = this.extractValue(data, this._imageField);
            }

            if (isNil(formattedText)) {
              return null;
            }

            return {
              description: formattedDesc,
              image: image,
              originalObject: data,
              title: formattedText
            };
          }
        }, {
          key: "extractMatches",
          value: function extractMatches(data, term) {
            var _this35 = this;

            var matches = [];
            var searchFields = this._searchFields ? this._searchFields.split(",") : null;

            if (this._searchFields !== null && this._searchFields !== undefined && term !== "") {
              matches = data.filter(function (item) {
                var values = searchFields ? _this35.extractBySearchFields(searchFields, item) : [item];
                return values.some(function (value) {
                  return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0;
                });
              });
            } else {
              matches = data;
            }

            return matches;
          }
        }, {
          key: "extractTitle",
          value: function extractTitle(item) {
            var _this36 = this;

            // split title fields and run extractValue for each and join with ' '
            if (!this._titleField) {
              return "";
            }

            return this._titleField.split(",").map(function (field) {
              return _this36.extractValue(item, field);
            }).reduce(function (acc, titlePart) {
              return acc ? "".concat(acc, " ").concat(titlePart) : titlePart;
            });
          }
        }, {
          key: "extractValue",
          value: function extractValue(obj, key) {
            var keys;
            var result;

            if (key) {
              keys = key.split(".");
              result = obj;

              var _iterator = _createForOfIteratorHelper(keys),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  key = _step.value;

                  if (result) {
                    result = result[key];
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              result = obj;
            }

            return result;
          }
        }, {
          key: "processResults",
          value: function processResults(matches) {
            var i;
            var results = [];

            if (matches && matches.length > 0) {
              for (i = 0; i < matches.length; i++) {
                var item = this.convertToItem(matches[i]);

                if (item) {
                  results.push(item);
                }
              }
            }

            return results;
          }
        }, {
          key: "extractBySearchFields",
          value: function extractBySearchFields(searchFields, item) {
            var _this37 = this;

            return searchFields.map(function (searchField) {
              return _this37.extractValue(item, searchField);
            }).filter(function (value) {
              return !!value;
            });
          }
        }]);

        return CompleterBaseData;
      }(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]);

      var LocalData = /*#__PURE__*/function (_CompleterBaseData) {
        _inherits(LocalData, _CompleterBaseData);

        var _super18 = _createSuper(LocalData);

        function LocalData() {
          var _this38;

          _classCallCheck(this, LocalData);

          _this38 = _super18.call(this);
          _this38.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this38._data = [];
          _this38.savedTerm = null;
          return _this38;
        }

        _createClass(LocalData, [{
          key: "data",
          value: function data(_data) {
            var _this39 = this;

            if (_data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
              var data$ = _data;
              data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
                return [];
              })).subscribe(function (res) {
                _this39._data = res;

                if (_this39.savedTerm) {
                  _this39.search(_this39.savedTerm);
                }

                _this39.dataSourceChange.emit();
              });
            } else {
              this._data = _data;
            }

            this.dataSourceChange.emit();
            return this;
          }
        }, {
          key: "search",
          value: function search(term) {
            if (!this._data) {
              this.savedTerm = term;
            } else {
              this.savedTerm = null;
              var matches = this.extractMatches(this._data, term);
              this.next(this.processResults(matches));
            }
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            return _get(_getPrototypeOf(LocalData.prototype), "convertToItem", this).call(this, data);
          }
        }]);

        return LocalData;
      }(CompleterBaseData);

      var RemoteData = /*#__PURE__*/function (_CompleterBaseData2) {
        _inherits(RemoteData, _CompleterBaseData2);

        var _super19 = _createSuper(RemoteData);

        function RemoteData(http) {
          var _this40;

          _classCallCheck(this, RemoteData);

          _this40 = _super19.call(this);
          _this40.http = http;
          _this40.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this40._remoteUrl = null;
          _this40.remoteSearch = null;
          _this40._urlFormater = null;
          _this40._dataField = null;
          return _this40;
        }

        _createClass(RemoteData, [{
          key: "remoteUrl",
          value: function remoteUrl(_remoteUrl) {
            this._remoteUrl = _remoteUrl;
            this.dataSourceChange.emit();
            return this;
          }
        }, {
          key: "urlFormater",
          value: function urlFormater(_urlFormater) {
            this._urlFormater = _urlFormater;
          }
        }, {
          key: "dataField",
          value: function dataField(_dataField) {
            this._dataField = _dataField;
          }
        }, {
          key: "requestOptions",
          value: function requestOptions(_requestOptions) {
            this._requestOptions = _requestOptions;
          }
        }, {
          key: "search",
          value: function search(term) {
            var _this41 = this;

            this.cancel(); // let params = {};

            var url = "";

            if (this._urlFormater) {
              url = this._urlFormater(term);
            } else {
              url = this._remoteUrl + encodeURIComponent(term);
            }

            this.remoteSearch = this.http.get(url, Object.assign({}, this._requestOptions)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              var matches = _this41.extractValue(data, _this41._dataField);

              return _this41.extractMatches(matches, term);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              return [];
            })).subscribe(function (matches) {
              var results = _this41.processResults(matches);

              _this41.next(results);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            if (this.remoteSearch) {
              this.remoteSearch.unsubscribe();
            }
          }
        }, {
          key: "convertToItem",
          value: function convertToItem(data) {
            return _get(_getPrototypeOf(RemoteData.prototype), "convertToItem", this).call(this, data);
          }
        }]);

        return RemoteData;
      }(CompleterBaseData);

      var LocalDataFactory = /*#__PURE__*/function () {
        function LocalDataFactory() {
          _classCallCheck(this, LocalDataFactory);
        }

        _createClass(LocalDataFactory, [{
          key: "create",
          value: function create() {
            return new LocalData();
          }
        }]);

        return LocalDataFactory;
      }();

      LocalDataFactory.ɵfac = function LocalDataFactory_Factory(t) {
        return new (t || LocalDataFactory)();
      };

      LocalDataFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalDataFactory,
        factory: LocalDataFactory.ɵfac
      });

      var RemoteDataFactory = /*#__PURE__*/function () {
        function RemoteDataFactory(http) {
          _classCallCheck(this, RemoteDataFactory);

          this.http = http;
        }

        _createClass(RemoteDataFactory, [{
          key: "create",
          value: function create() {
            return new RemoteData(this.http);
          }
        }]);

        return RemoteDataFactory;
      }();

      RemoteDataFactory.ɵfac = function RemoteDataFactory_Factory(t) {
        return new (t || RemoteDataFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      RemoteDataFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RemoteDataFactory,
        factory: RemoteDataFactory.ɵfac
      });
      RemoteDataFactory = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], RemoteDataFactory);

      var CompleterService = /*#__PURE__*/function () {
        function CompleterService(localDataFactory, // Using any instead of () => LocalData because of AoT errors
        remoteDataFactory // Using any instead of () => LocalData because of AoT errors
        ) {
          _classCallCheck(this, CompleterService);

          this.localDataFactory = localDataFactory;
          this.remoteDataFactory = remoteDataFactory;
        }

        _createClass(CompleterService, [{
          key: "local",
          value: function local(data) {
            var searchFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var titleField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var localData = this.localDataFactory.create();
            return localData.data(data).searchFields(searchFields).titleField(titleField);
          }
        }, {
          key: "remote",
          value: function remote(url) {
            var searchFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var titleField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            var remoteData = this.remoteDataFactory.create();
            return remoteData.remoteUrl(url).searchFields(searchFields).titleField(titleField);
          }
        }]);

        return CompleterService;
      }();

      CompleterService.ɵfac = function CompleterService_Factory(t) {
        return new (t || CompleterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LocalDataFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
        ));
      };

      CompleterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CompleterService,
        factory: CompleterService.ɵfac
      });
      CompleterService = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [LocalDataFactory, RemoteDataFactory // Using any instead of () => LocalData because of AoT errors
      ])], CompleterService);

      var CtrCompleter = /*#__PURE__*/function () {
        function CtrCompleter() {
          _classCallCheck(this, CtrCompleter);

          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dataSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.list = null;
          this.dropdown = null;
          this._hasHighlighted = false;
          this._hasSelected = false;
          this._cancelBlur = false;
          this._isOpen = false;
          this._autoHighlightIndex = null;
        }

        _createClass(CtrCompleter, [{
          key: "registerList",
          value: function registerList(list) {
            this.list = list;
          }
        }, {
          key: "registerDropdown",
          value: function registerDropdown(dropdown) {
            this.dropdown = dropdown;
          }
        }, {
          key: "onHighlighted",
          value: function onHighlighted(item) {
            this.highlighted.emit(item);
            this._hasHighlighted = !!item;
          }
        }, {
          key: "onSelected",
          value: function onSelected(item) {
            var clearList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            this.selected.emit(item);

            if (item) {
              this._hasSelected = true;
            }

            if (clearList) {
              this.clear();
            }
          }
        }, {
          key: "onDataSourceChange",
          value: function onDataSourceChange() {
            if (this.hasSelected) {
              this.selected.emit(null);
              this._hasSelected = false;
            }

            this.dataSourceChange.emit();
          }
        }, {
          key: "search",
          value: function search(term) {
            if (this._hasSelected) {
              this.selected.emit(null);
              this._hasSelected = false;
            }

            if (this.list) {
              this.list.search(term);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this._hasHighlighted = false;
            this.isOpen = false;

            if (this.dropdown) {
              this.dropdown.clear();
            }

            if (this.list) {
              this.list.clear();
            }
          }
        }, {
          key: "selectCurrent",
          value: function selectCurrent() {
            if (this.dropdown) {
              this.dropdown.selectCurrent();
            }
          }
        }, {
          key: "nextRow",
          value: function nextRow() {
            if (this.dropdown) {
              this.dropdown.nextRow();
            }
          }
        }, {
          key: "prevRow",
          value: function prevRow() {
            if (this.dropdown) {
              this.dropdown.prevRow();
            }
          }
        }, {
          key: "hasHighlighted",
          value: function hasHighlighted() {
            return this._hasHighlighted;
          }
        }, {
          key: "cancelBlur",
          value: function cancelBlur(cancel) {
            this._cancelBlur = cancel;
          }
        }, {
          key: "isCancelBlur",
          value: function isCancelBlur() {
            return this._cancelBlur;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this._isOpen && !!this.list) {
              this.isOpen = true;
              this.list.open();
            }
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen;
          },
          set: function set(open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);

            if (this.list) {
              this.list.isOpen(open);
            }
          }
        }, {
          key: "autoHighlightIndex",
          get: function get() {
            return this._autoHighlightIndex;
          },
          set: function set(index) {
            this._autoHighlightIndex = index;

            if (this.dropdown) {
              this.dropdown.highlightRow(this._autoHighlightIndex);
            }
          }
        }, {
          key: "hasSelected",
          get: function get() {
            return this._hasSelected;
          }
        }]);

        return CtrCompleter;
      }();

      CtrCompleter.ɵfac = function CtrCompleter_Factory(t) {
        return new (t || CtrCompleter)();
      };

      CtrCompleter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CtrCompleter,
        selectors: [["", "ctrCompleter", ""]],
        outputs: {
          selected: "selected",
          highlighted: "highlighted",
          opened: "opened",
          dataSourceChange: "dataSourceChange"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrCompleter.prototype, "selected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrCompleter.prototype, "highlighted", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrCompleter.prototype, "opened", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrCompleter.prototype, "dataSourceChange", void 0);

      var CtrRowItem = function CtrRowItem(row, index) {
        _classCallCheck(this, CtrRowItem);

        this.row = row;
        this.index = index;
      };

      var CtrDropdown = /*#__PURE__*/function () {
        function CtrDropdown(completer, el, zone) {
          _classCallCheck(this, CtrDropdown);

          this.completer = completer;
          this.el = el;
          this.zone = zone;
          this.rows = [];
          this.isScrollOn = false;
          this._rowMouseDown = false;
          this.completer.registerDropdown(this);
        }

        _createClass(CtrDropdown, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.completer.registerDropdown(null);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this42 = this;

            var css = getComputedStyle(this.el.nativeElement);
            var autoHighlightIndex = this.completer.autoHighlightIndex;
            this.isScrollOn = !!css.maxHeight && css.overflowY === "auto";

            if (autoHighlightIndex) {
              this.zone.run(function () {
                _this42.highlightRow(autoHighlightIndex);
              });
            }
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this43 = this;

            // Support for canceling blur on IE (issue #158)
            if (!this._rowMouseDown) {
              this.completer.cancelBlur(true);
              this.zone.run(function () {
                _this43.completer.cancelBlur(false);
              });
            } else {
              this._rowMouseDown = false;
            }
          }
        }, {
          key: "registerRow",
          value: function registerRow(row) {
            var arrIndex = this.rows.findIndex(function (_row) {
              return _row.index === row.index;
            });

            if (arrIndex >= 0) {
              this.rows[arrIndex] = row;
            } else {
              this.rows.push(row);
            }
          }
        }, {
          key: "unregisterRow",
          value: function unregisterRow(rowIndex) {
            var arrIndex = this.rows.findIndex(function (_row) {
              return _row.index === rowIndex;
            });
            this.rows.splice(arrIndex, 1);

            if (this.currHighlighted && rowIndex === this.currHighlighted.index) {
              this.highlightRow(null);
            }
          }
        }, {
          key: "highlightRow",
          value: function highlightRow(index) {
            var highlighted = this.rows.find(function (row) {
              return row.index === index;
            });

            if (isNil(index) || index < 0) {
              if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
              }

              this.currHighlighted = undefined;
              this.completer.onHighlighted(null);
              return;
            }

            if (!highlighted) {
              return;
            }

            if (this.currHighlighted) {
              this.currHighlighted.row.setHighlighted(false);
            }

            this.currHighlighted = highlighted;
            this.currHighlighted.row.setHighlighted(true);
            this.completer.onHighlighted(this.currHighlighted.row.getDataItem());

            if (this.isScrollOn && this.currHighlighted) {
              var rowTop = this.dropdownRowTop();

              if (!rowTop) {
                return;
              }

              if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
              } else {
                var row = this.currHighlighted.row.getNativeElement();

                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                  this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));

                  if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row) < row.getBoundingClientRect().top) {
                    this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                  }
                }
              }
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.rows = [];
          }
        }, {
          key: "onSelected",
          value: function onSelected(item) {
            this.completer.onSelected(item);
          }
        }, {
          key: "rowMouseDown",
          value: function rowMouseDown() {
            this._rowMouseDown = true;
          }
        }, {
          key: "selectCurrent",
          value: function selectCurrent() {
            if (!!this.currHighlighted && !!this.currHighlighted.row) {
              this.onSelected(this.currHighlighted.row.getDataItem());
            } else if (this.rows.length > 0) {
              this.onSelected(this.rows[0].row.getDataItem());
            }
          }
        }, {
          key: "nextRow",
          value: function nextRow() {
            var nextRowIndex = 0;

            if (this.currHighlighted) {
              nextRowIndex = this.currHighlighted.index + 1;
            }

            this.highlightRow(nextRowIndex);
          }
        }, {
          key: "prevRow",
          value: function prevRow() {
            var nextRowIndex = -1;

            if (this.currHighlighted) {
              nextRowIndex = this.currHighlighted.index - 1;
            }

            this.highlightRow(nextRowIndex);
          }
        }, {
          key: "dropdownScrollTopTo",
          value: function dropdownScrollTopTo(offset) {
            this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
          }
        }, {
          key: "dropdownRowTop",
          value: function dropdownRowTop() {
            if (!this.currHighlighted) {
              return;
            }

            return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
          }
        }, {
          key: "dropdownHeight",
          value: function dropdownHeight() {
            return this.el.nativeElement.getBoundingClientRect().top + parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
          }
        }, {
          key: "dropdownRowOffsetHeight",
          value: function dropdownRowOffsetHeight(row) {
            var css = getComputedStyle(row.parentElement);
            return row.parentElement.offsetHeight + parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
          }
        }]);

        return CtrDropdown;
      }();

      CtrDropdown.ɵfac = function CtrDropdown_Factory(t) {
        return new (t || CtrDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CtrDropdown.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CtrDropdown,
        selectors: [["", "ctrDropdown", ""]],
        hostBindings: function CtrDropdown_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function CtrDropdown_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mousedown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrDropdown.prototype, "onMouseDown", null);
      CtrDropdown = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], CtrDropdown); // keyboard events

      var KEY_DW = 40;
      var KEY_RT = 39;
      var KEY_UP = 38;
      var KEY_LF = 37;
      var KEY_ES = 27;
      var KEY_EN = 13;
      var KEY_TAB = 9;
      var KEY_BK = 8;
      var KEY_SH = 16;
      var KEY_CL = 20;
      var KEY_F1 = 112;
      var KEY_F12 = 123;

      var CtrInput = /*#__PURE__*/function () {
        function CtrInput(completer, ngModel, el) {
          var _this44 = this;

          _classCallCheck(this, CtrInput);

          this.completer = completer;
          this.ngModel = ngModel;
          this.el = el;
          this.clearSelected = false;
          this.clearUnselected = false;
          this.overrideSuggested = false;
          this.fillHighlighted = true;
          this.openOnFocus = false;
          this.openOnClick = false;
          this.selectOnClick = false;
          this.selectOnFocus = false;
          this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._searchStr = "";
          this._displayStr = "";
          this.blurTimer = null;
          this.completer.selected.subscribe(function (item) {
            if (!item) {
              return;
            }

            if (_this44.clearSelected) {
              _this44.searchStr = "";
            } else {
              _this44.searchStr = item.title;
            }

            _this44.ngModelChange.emit(_this44.searchStr);
          });
          this.completer.highlighted.subscribe(function (item) {
            if (_this44.fillHighlighted) {
              if (item) {
                _this44._displayStr = item.title;

                _this44.ngModelChange.emit(item.title);
              } else {
                _this44._displayStr = _this44.searchStr;

                _this44.ngModelChange.emit(_this44.searchStr);
              }
            }
          });
          this.completer.dataSourceChange.subscribe(function () {
            _this44.completer.search(_this44.searchStr);
          });

          if (this.ngModel.valueChanges) {
            this.ngModel.valueChanges.subscribe(function (value) {
              if (!isNil(value) && _this44._displayStr !== value) {
                if (_this44.searchStr !== value) {
                  _this44.completer.search(value);
                }

                _this44.searchStr = value;
              }
            });
          }
        }

        _createClass(CtrInput, [{
          key: "keyupHandler",
          value: function keyupHandler(event) {
            if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
              // do nothing
              return;
            }

            if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
              event.preventDefault();
            } else if (event.keyCode === KEY_DW) {
              event.preventDefault();
              this.completer.search(this.searchStr);
            } else if (event.keyCode === KEY_ES) {
              if (this.completer.isOpen) {
                this.restoreSearchValue();
                this.completer.clear();
                event.stopPropagation();
                event.preventDefault();
              }
            }
          }
        }, {
          key: "pasteHandler",
          value: function pasteHandler(event) {
            this.completer.open();
          }
        }, {
          key: "keydownHandler",
          value: function keydownHandler(event) {
            var keyCode = event.keyCode || event.which;

            if (keyCode === KEY_EN) {
              if (this.completer.hasHighlighted()) {
                event.preventDefault();
              }

              this.handleSelection();
            } else if (keyCode === KEY_DW) {
              event.preventDefault();
              this.completer.open();
              this.completer.nextRow();
            } else if (keyCode === KEY_UP) {
              event.preventDefault();
              this.completer.prevRow();
            } else if (keyCode === KEY_TAB) {
              this.handleSelection();
            } else if (keyCode === KEY_BK) {
              this.completer.open();
            } else if (keyCode === KEY_ES) {
              // This is very specific to IE10/11 #272
              // without this, IE clears the input text
              event.preventDefault();

              if (this.completer.isOpen) {
                event.stopPropagation();
              }
            } else {
              if (keyCode !== 0 && keyCode !== KEY_SH && keyCode !== KEY_CL && (keyCode <= KEY_F1 || keyCode >= KEY_F12) && !event.ctrlKey && !event.metaKey && !event.altKey) {
                this.completer.open();
              }
            }
          }
        }, {
          key: "onBlur",
          value: function onBlur(event) {
            var _this45 = this;

            // Check if we need to cancel Blur for IE
            if (this.completer.isCancelBlur()) {
              setTimeout(function () {
                // get the focus back
                _this45.el.nativeElement.focus();
              }, 0);
              return;
            }

            if (this.completer.isOpen) {
              this.blurTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                return _this45.doBlur();
              });
            }
          }
        }, {
          key: "onfocus",
          value: function onfocus() {
            if (this.blurTimer) {
              this.blurTimer.unsubscribe();
              this.blurTimer = null;
            }

            if (this.selectOnFocus) {
              this.el.nativeElement.select();
            }

            if (this.openOnFocus) {
              this.completer.open();
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (this.selectOnClick) {
              this.el.nativeElement.select();
            }

            if (this.openOnClick) {
              if (this.completer.isOpen) {
                this.completer.clear();
              } else {
                this.completer.open();
              }
            }
          }
        }, {
          key: "handleSelection",
          value: function handleSelection() {
            if (this.completer.hasHighlighted()) {
              this._searchStr = "";
              this.completer.selectCurrent();
            } else if (this.overrideSuggested) {
              this.completer.onSelected({
                title: this.searchStr,
                originalObject: null
              });
            } else {
              if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
              }

              this.completer.clear();
            }
          }
        }, {
          key: "restoreSearchValue",
          value: function restoreSearchValue() {
            if (this.fillHighlighted) {
              if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
              }
            }
          }
        }, {
          key: "doBlur",
          value: function doBlur() {
            if (this.blurTimer) {
              this.blurTimer.unsubscribe();
              this.blurTimer = null;
            }

            if (this.overrideSuggested) {
              this.completer.onSelected({
                title: this.searchStr,
                originalObject: null
              });
            } else {
              if (this.clearUnselected && !this.completer.hasSelected) {
                this.searchStr = "";
                this.ngModelChange.emit(this.searchStr);
              } else {
                this.restoreSearchValue();
              }
            }

            this.completer.clear();
          }
        }, {
          key: "searchStr",
          get: function get() {
            return this._searchStr;
          },
          set: function set(term) {
            this._searchStr = term;
            this._displayStr = term;
          }
        }]);

        return CtrInput;
      }();

      CtrInput.ɵfac = function CtrInput_Factory(t) {
        return new (t || CtrInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CtrInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CtrInput,
        selectors: [["", "ctrInput", ""]],
        hostBindings: function CtrInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CtrInput_keyup_HostBindingHandler($event) {
              return ctx.keyupHandler($event);
            })("paste", function CtrInput_paste_HostBindingHandler($event) {
              return ctx.pasteHandler($event);
            })("keydown", function CtrInput_keydown_HostBindingHandler($event) {
              return ctx.keydownHandler($event);
            })("blur", function CtrInput_blur_HostBindingHandler($event) {
              return ctx.onBlur($event);
            })("focus", function CtrInput_focus_HostBindingHandler() {
              return ctx.onfocus();
            })("click", function CtrInput_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          clearSelected: "clearSelected",
          clearUnselected: "clearUnselected",
          overrideSuggested: "overrideSuggested",
          fillHighlighted: "fillHighlighted",
          openOnFocus: "openOnFocus",
          openOnClick: "openOnClick",
          selectOnClick: "selectOnClick",
          selectOnFocus: "selectOnFocus"
        },
        outputs: {
          ngModelChange: "ngModelChange"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("clearSelected"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "clearSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("clearUnselected"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "clearUnselected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("overrideSuggested"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "overrideSuggested", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("fillHighlighted"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "fillHighlighted", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("openOnFocus"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "openOnFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("openOnClick"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "openOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("selectOnClick"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "selectOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("selectOnFocus"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrInput.prototype, "selectOnFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CtrInput.prototype, "ngModelChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keyup", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "keyupHandler", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("paste", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "pasteHandler", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "keydownHandler", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("blur", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "onBlur", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focus", []), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "onfocus", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrInput.prototype, "onClick", null);
      CtrInput = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [CtrCompleter, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], CtrInput);

      var CtrListContext = function CtrListContext(results, searching, searchInitialized, isOpen) {
        _classCallCheck(this, CtrListContext);

        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
      };

      var CtrList = /*#__PURE__*/function () {
        function CtrList(completer, templateRef, viewContainer, cd, zone) {
          _classCallCheck(this, CtrList);

          this.completer = completer;
          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.cd = cd;
          this.zone = zone;
          this.ctrListMinSearchLength = MIN_SEARCH_LENGTH;
          this.ctrListPause = PAUSE;
          this.ctrListAutoMatch = false;
          this.ctrListAutoHighlight = false;
          this.ctrListDisplaySearching = true;
          this._dataService = null; // private results: CompleterItem[] = [];

          this.term = null; // private searching = false;

          this.searchTimer = null;
          this.clearTimer = null;
          this.ctx = new CtrListContext([], false, false, false);
          this._initialValue = null;
          this.viewRef = null;
        }

        _createClass(CtrList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.completer.registerList(this);
            this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
          }
        }, {
          key: "search",
          value: function search(term) {
            var _this46 = this;

            if (!isNil(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
              if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
              }

              if (!this.ctx.searching) {
                if (this.ctrListDisplaySearching) {
                  this.ctx.results = [];
                }

                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
              }

              if (this.clearTimer) {
                this.clearTimer.unsubscribe();
              }

              this.searchTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.ctrListPause).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                _this46.searchTimerComplete(term);
              });
            } else if (!isNil(term) && term.length < this.ctrListMinSearchLength) {
              this.clear();
              this.term = "";
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            var _this47 = this;

            if (this.searchTimer) {
              this.searchTimer.unsubscribe();
            }

            this.clearTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(CLEAR_TIMEOUT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
              _this47._clear();
            });
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.ctx.searchInitialized) {
              this.search("");
            }

            this.refreshTemplate();
          }
        }, {
          key: "isOpen",
          value: function isOpen(open) {
            this.ctx.isOpen = open;
          }
        }, {
          key: "_clear",
          value: function _clear() {
            if (this.searchTimer) {
              this.searchTimer.unsubscribe();
              this.searchTimer = null;
            }

            if (this.dataService) {
              this.dataService.cancel();
            }

            this.viewContainer.clear();
            this.viewRef = null;
          }
        }, {
          key: "searchTimerComplete",
          value: function searchTimerComplete(term) {
            // Begin the search
            if (isNil(term) || term.length < this.ctrListMinSearchLength) {
              this.ctx.searching = false;
              return;
            }

            this.term = term;

            if (this._dataService) {
              this._dataService.search(term);
            }
          }
        }, {
          key: "refreshTemplate",
          value: function refreshTemplate() {
            // create the template if it doesn't exist
            if (!this.viewRef) {
              this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
            } else if (!this.viewRef.destroyed) {
              // refresh the template
              this.viewRef.context.isOpen = this.ctx.isOpen;
              this.viewRef.context.results = this.ctx.results;
              this.viewRef.context.searching = this.ctx.searching;
              this.viewRef.context.searchInitialized = this.ctx.searchInitialized;
              this.viewRef.detectChanges();
            }

            this.cd.markForCheck();
          }
        }, {
          key: "getBestMatchIndex",
          value: function getBestMatchIndex() {
            var _this48 = this;

            if (!this.ctx.results || !this.term) {
              return null;
            } // First try to find the exact term


            var bestMatch = this.ctx.results.findIndex(function (item) {
              return item.title.toLowerCase() === _this48.term.toLocaleLowerCase();
            }); // If not try to find the first item that starts with the term

            if (bestMatch < 0) {
              bestMatch = this.ctx.results.findIndex(function (item) {
                return item.title.toLowerCase().startsWith(_this48.term.toLocaleLowerCase());
              });
            } // If not try to find the first item that includes the term


            if (bestMatch < 0) {
              bestMatch = this.ctx.results.findIndex(function (item) {
                return item.title.toLowerCase().includes(_this48.term.toLocaleLowerCase());
              });
            }

            return bestMatch < 0 ? null : bestMatch;
          }
        }, {
          key: "dataServiceSubscribe",
          value: function dataServiceSubscribe() {
            var _this49 = this;

            if (this._dataService) {
              this._dataService.subscribe(function (results) {
                _this49.ctx.searchInitialized = true;
                _this49.ctx.searching = false;
                _this49.ctx.results = results;

                if (_this49.ctrListAutoMatch && results && results.length === 1 && results[0].title && !isNil(_this49.term) && results[0].title.toLocaleLowerCase() === _this49.term.toLocaleLowerCase()) {
                  // Do automatch
                  _this49.completer.onSelected(results[0]);

                  return;
                }

                _this49.refreshTemplate();

                if (_this49.ctrListAutoHighlight) {
                  _this49.completer.autoHighlightIndex = _this49.getBestMatchIndex();
                }
              }, function (error) {
                console.error(error);
                console.error("Unexpected error in dataService: errors should be handled by the dataService Observable");
                return [];
              });

              if (this._dataService.dataSourceChange) {
                this._dataService.dataSourceChange.subscribe(function () {
                  _this49.term = null;
                  _this49.ctx.searchInitialized = false;
                  _this49.ctx.searching = false;
                  _this49.ctx.results = [];

                  _this49.refreshTemplate();

                  _this49.completer.onDataSourceChange();
                });
              }
            }
          }
        }, {
          key: "dataService",
          set: function set(newService) {
            this._dataService = newService;
            this.dataServiceSubscribe();
          }
        }, {
          key: "initialValue",
          set: function set(value) {
            var _this50 = this;

            if (this._dataService && typeof this._dataService.convertToItem === "function") {
              this.zone.run(function () {
                var initialItem = _this50._dataService && _this50._dataService.convertToItem(value);

                if (initialItem) {
                  _this50.completer.onSelected(initialItem, false);
                }
              });
            } else if (!this._dataService) {
              this._initialValue = value;
            }
          }
        }]);

        return CtrList;
      }();

      CtrList.ɵfac = function CtrList_Factory(t) {
        return new (t || CtrList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CtrCompleter, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CtrList.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CtrList,
        selectors: [["", "ctrList", ""]],
        inputs: {
          ctrListMinSearchLength: "ctrListMinSearchLength",
          ctrListPause: "ctrListPause",
          ctrListAutoMatch: "ctrListAutoMatch",
          ctrListAutoHighlight: "ctrListAutoHighlight",
          ctrListDisplaySearching: "ctrListDisplaySearching",
          dataService: ["ctrList", "dataService"],
          initialValue: ["ctrListInitialValue", "initialValue"]
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrList.prototype, "ctrListMinSearchLength", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrList.prototype, "ctrListPause", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrList.prototype, "ctrListAutoMatch", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrList.prototype, "ctrListAutoHighlight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CtrList.prototype, "ctrListDisplaySearching", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("ctrList"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object])], CtrList.prototype, "dataService", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("ctrListInitialValue"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object])], CtrList.prototype, "initialValue", null);
      CtrList = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [CtrCompleter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], CtrList);

      var CtrRow = /*#__PURE__*/function () {
        function CtrRow(el, renderer, dropdown) {
          _classCallCheck(this, CtrRow);

          this.el = el;
          this.renderer = renderer;
          this.dropdown = dropdown;
          this.selected = false;
          this._rowIndex = 0;
          this._item = null;
        }

        _createClass(CtrRow, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._rowIndex) {
              this.dropdown.unregisterRow(this._rowIndex);
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.dropdown.onSelected(this._item);
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(event) {
            this.dropdown.highlightRow(this._rowIndex);
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            this.dropdown.rowMouseDown();
          }
        }, {
          key: "setHighlighted",
          value: function setHighlighted(selected) {
            this.selected = selected;

            if (this.selected) {
              this.renderer.addClass(this.el.nativeElement, "completer-selected-row");
            } else {
              this.renderer.removeClass(this.el.nativeElement, "completer-selected-row");
            }
          }
        }, {
          key: "getNativeElement",
          value: function getNativeElement() {
            return this.el.nativeElement;
          }
        }, {
          key: "getDataItem",
          value: function getDataItem() {
            return this._item;
          }
        }, {
          key: "ctrRow",
          set: function set(index) {
            this._rowIndex = index;
            this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
          }
        }, {
          key: "dataItem",
          set: function set(item) {
            this._item = item;
          }
        }]);

        return CtrRow;
      }();

      CtrRow.ɵfac = function CtrRow_Factory(t) {
        return new (t || CtrRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CtrDropdown, 1));
      };

      CtrRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CtrRow,
        selectors: [["", "ctrRow", ""]],
        hostBindings: function CtrRow_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtrRow_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("mouseenter", function CtrRow_mouseenter_HostBindingHandler($event) {
              return ctx.onMouseEnter($event);
            })("mousedown", function CtrRow_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            });
          }
        },
        inputs: {
          ctrRow: "ctrRow",
          dataItem: "dataItem"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Number])], CtrRow.prototype, "ctrRow", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object])], CtrRow.prototype, "dataItem", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrRow.prototype, "onClick", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseenter", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrRow.prototype, "onMouseEnter", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mousedown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", void 0)], CtrRow.prototype, "onMouseDown", null);
      CtrRow = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], CtrDropdown])], CtrRow);

      var CompleterListItemCmp = /*#__PURE__*/function () {
        function CompleterListItemCmp() {
          _classCallCheck(this, CompleterListItemCmp);

          this.text = "";
          this.searchStr = "";
          this.matchClass = "";
          this.type = "";
          this.parts = [];
        }

        _createClass(CompleterListItemCmp, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.searchStr) {
              this.parts.push({
                isMatch: false,
                text: this.text
              });
              return;
            }

            var matchStr = this.text.toLowerCase();
            var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
            var startIndex = 0;

            while (matchPos >= 0) {
              var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);

              if (matchPos === 0) {
                this.parts.push({
                  isMatch: true,
                  text: matchText
                });
                startIndex += this.searchStr.length;
              } else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({
                  isMatch: false,
                  text: matchPart
                });
                this.parts.push({
                  isMatch: true,
                  text: matchText
                });
                startIndex += this.searchStr.length + matchPart.length;
              }

              matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
            }

            if (startIndex < this.text.length) {
              this.parts.push({
                isMatch: false,
                text: this.text.slice(startIndex, this.text.length)
              });
            }
          }
        }]);

        return CompleterListItemCmp;
      }();

      CompleterListItemCmp.ɵfac = function CompleterListItemCmp_Factory(t) {
        return new (t || CompleterListItemCmp)();
      };

      CompleterListItemCmp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompleterListItemCmp,
        selectors: [["completer-list-item"]],
        inputs: {
          text: "text",
          searchStr: "searchStr",
          matchClass: "matchClass",
          type: "type"
        },
        decls: 2,
        vars: 5,
        consts: [[1, "completer-list-item-holder", 3, "ngClass"], ["class", "completer-list-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "completer-list-item", 3, "ngClass"]],
        template: function CompleterListItemCmp_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompleterListItemCmp_span_1_Template, 2, 2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.type === "title", ctx.type === "description"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], CompleterListItemCmp.prototype, "text", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], CompleterListItemCmp.prototype, "searchStr", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], CompleterListItemCmp.prototype, "matchClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], CompleterListItemCmp.prototype, "type", void 0);

      var noop = function noop() {
        return;
      };

      var COMPLETER_CONTROL_VALUE_ACCESSOR = {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CompleterCmp;
        })
      };

      var CompleterCmp = /*#__PURE__*/function () {
        function CompleterCmp(completerService, cdr) {
          _classCallCheck(this, CompleterCmp);

          this.completerService = completerService;
          this.cdr = cdr;
          this.inputName = "";
          this.inputId = "";
          this.pause = PAUSE;
          this.minSearchLength = MIN_SEARCH_LENGTH;
          this.maxChars = MAX_CHARS;
          this.overrideSuggested = false;
          this.clearSelected = false;
          this.clearUnselected = false;
          this.fillHighlighted = true;
          this.placeholder = "";
          this.autoMatch = false;
          this.disableInput = false;
          this.autofocus = false;
          this.openOnFocus = false;
          this.openOnClick = false;
          this.selectOnClick = false;
          this.selectOnFocus = false;
          this.autoHighlight = false;
          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.keyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("");
          this.displaySearching = true;
          this.displayNoResults = true;
          this._textNoResults = TEXT_NO_RESULTS;
          this._textSearching = TEXT_SEARCHING;
          this._onTouchedCallback = noop;
          this._onChangeCallback = noop;
          this._focus = false;
          this._open = false;
          this._searchStr = "";
        }

        _createClass(CompleterCmp, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.autofocus) {
              this._focus = true;
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this51 = this;

            if (this._focus) {
              setTimeout(function () {
                if (!!_this51.ctrInput) {
                  _this51.ctrInput.nativeElement.focus();

                  _this51._focus = false;
                }
              }, 0);
            }
          }
        }, {
          key: "onTouched",
          value: function onTouched() {
            this._onTouchedCallback();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.searchStr = value;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disableInput = isDisabled;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this52 = this;

            if (!this.completer) {
              return;
            }

            this.completer.selected.subscribe(function (item) {
              _this52.selected.emit(item);
            });
            this.completer.highlighted.subscribe(function (item) {
              _this52.highlighted.emit(item);
            });
            this.completer.opened.subscribe(function (isOpen) {
              _this52._open = isOpen;

              _this52.opened.emit(isOpen);
            });
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.blurEvent.emit();
            this.onTouched();
            this.cdr.detectChanges();
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.focusEvent.emit();
            this.onTouched();
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            this.click.emit(event);
            this.onTouched();
          }
        }, {
          key: "onKeyup",
          value: function onKeyup(event) {
            this.keyup.emit(event);
            event.stopPropagation();
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            this.keydown.emit(event);
            event.stopPropagation();
          }
        }, {
          key: "onChange",
          value: function onChange(value) {
            this.value = value;
          }
        }, {
          key: "open",
          value: function open() {
            if (!this.completer) {
              return;
            }

            this.completer.open();
          }
        }, {
          key: "close",
          value: function close() {
            if (!this.completer) {
              return;
            }

            this.completer.clear();
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.ctrInput) {
              this.ctrInput.nativeElement.focus();
            } else {
              this._focus = true;
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            if (this.ctrInput) {
              this.ctrInput.nativeElement.blur();
            } else {
              this._focus = false;
            }
          }
        }, {
          key: "isOpen",
          value: function isOpen() {
            return this._open;
          }
        }, {
          key: "value",
          get: function get() {
            return this.searchStr;
          },
          set: function set(v) {
            if (v !== this.searchStr) {
              this.searchStr = v;
            } // Propagate the change in any case


            this._onChangeCallback(v);
          }
        }, {
          key: "searchStr",
          get: function get() {
            return this._searchStr;
          },
          set: function set(value) {
            if (typeof value === "string" || isNil(value)) {
              this._searchStr = value;
            } else {
              this._searchStr = JSON.stringify(value);
            }
          }
        }, {
          key: "datasource",
          set: function set(source) {
            if (source) {
              if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
              } else if (typeof source === "string") {
                this.dataService = this.completerService.remote(source);
              } else {
                this.dataService = source;
              }
            }
          }
        }, {
          key: "textNoResults",
          set: function set(text) {
            if (this._textNoResults !== text) {
              this._textNoResults = text;
              this.displayNoResults = !!this._textNoResults && this._textNoResults !== "false";
            }
          }
        }, {
          key: "textSearching",
          set: function set(text) {
            if (this._textSearching !== text) {
              this._textSearching = text;
              this.displaySearching = !!this._textSearching && this._textSearching !== "false";
            }
          }
        }]);

        return CompleterCmp;
      }();

      CompleterCmp.ɵfac = function CompleterCmp_Factory(t) {
        return new (t || CompleterCmp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CompleterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CompleterCmp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CompleterCmp,
        selectors: [["ng2-completer"]],
        viewQuery: function CompleterCmp_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CtrCompleter, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.completer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ctrInput = _t.first);
          }
        },
        inputs: {
          inputName: "inputName",
          inputId: "inputId",
          pause: "pause",
          minSearchLength: "minSearchLength",
          maxChars: "maxChars",
          overrideSuggested: "overrideSuggested",
          clearSelected: "clearSelected",
          clearUnselected: "clearUnselected",
          fillHighlighted: "fillHighlighted",
          placeholder: "placeholder",
          autoMatch: "autoMatch",
          disableInput: "disableInput",
          autofocus: "autofocus",
          openOnFocus: "openOnFocus",
          openOnClick: "openOnClick",
          selectOnClick: "selectOnClick",
          selectOnFocus: "selectOnFocus",
          autoHighlight: "autoHighlight",
          datasource: "datasource",
          dataService: "dataService",
          textNoResults: "textNoResults",
          textSearching: "textSearching",
          matchClass: "matchClass",
          fieldTabindex: "fieldTabindex",
          inputClass: "inputClass",
          initialValue: "initialValue"
        },
        outputs: {
          selected: "selected",
          highlighted: "highlighted",
          blurEvent: "blur",
          click: "click",
          focusEvent: "focus",
          opened: "opened",
          keyup: "keyup",
          keydown: "keydown"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([COMPLETER_CONTROL_VALUE_ACCESSOR])],
        decls: 4,
        vars: 23,
        consts: [["ctrCompleter", "", 1, "completer-holder"], ["type", "search", "ctrInput", "", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", 1, "completer-input", 3, "ngClass", "ngModel", "placeholder", "tabindex", "disabled", "clearSelected", "clearUnselected", "overrideSuggested", "openOnFocus", "fillHighlighted", "openOnClick", "selectOnClick", "selectOnFocus", "ngModelChange", "blur", "focus", "keyup", "keydown", "click"], ["ctrInput", ""], ["class", "completer-dropdown-holder", 4, "ctrList", "ctrListMinSearchLength", "ctrListPause", "ctrListAutoMatch", "ctrListInitialValue", "ctrListAutoHighlight", "ctrListDisplaySearching"], [1, "completer-dropdown-holder"], ["class", "completer-dropdown", "ctrDropdown", "", 4, "ngIf"], ["ctrDropdown", "", 1, "completer-dropdown"], ["class", "completer-searching", 4, "ngIf"], ["class", "completer-no-results", 4, "ngIf"], ["class", "completer-row-wrapper", 4, "ngFor", "ngForOf"], [1, "completer-searching"], [1, "completer-no-results"], [1, "completer-row-wrapper"], [1, "completer-row", 3, "ctrRow", "dataItem"], ["class", "completer-image-holder", 4, "ngIf"], [1, "completer-item-text", 3, "ngClass"], [1, "completer-title", 3, "text", "matchClass", "searchStr", "type"], ["class", "completer-description", 3, "text", "matchClass", "searchStr", "type", 4, "ngIf"], [1, "completer-image-holder"], ["class", "completer-image", 3, "src", 4, "ngIf"], ["class", "completer-image-default", 4, "ngIf"], [1, "completer-image", 3, "src"], [1, "completer-image-default"], [1, "completer-description", 3, "text", "matchClass", "searchStr", "type"]],
        template: function CompleterCmp_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) {
              return ctx.searchStr = $event;
            })("ngModelChange", function CompleterCmp_Template_input_ngModelChange_1_listener($event) {
              return ctx.onChange($event);
            })("blur", function CompleterCmp_Template_input_blur_1_listener() {
              return ctx.onBlur();
            })("focus", function CompleterCmp_Template_input_focus_1_listener() {
              return ctx.onFocus();
            })("keyup", function CompleterCmp_Template_input_keyup_1_listener($event) {
              return ctx.onKeyup($event);
            })("keydown", function CompleterCmp_Template_input_keydown_1_listener($event) {
              return ctx.onKeydown($event);
            })("click", function CompleterCmp_Template_input_click_1_listener($event) {
              return ctx.onClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CompleterCmp_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.searchStr)("placeholder", ctx.placeholder)("tabindex", ctx.fieldTabindex)("disabled", ctx.disableInput)("clearSelected", ctx.clearSelected)("clearUnselected", ctx.clearUnselected)("overrideSuggested", ctx.overrideSuggested)("openOnFocus", ctx.openOnFocus)("fillHighlighted", ctx.fillHighlighted)("openOnClick", ctx.openOnClick)("selectOnClick", ctx.selectOnClick)("selectOnFocus", ctx.selectOnFocus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId.length > 0 ? ctx.inputId : null)("name", ctx.inputName)("maxlength", ctx.maxChars);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ctrList", ctx.dataService)("ctrListMinSearchLength", ctx.minSearchLength)("ctrListPause", ctx.pause)("ctrListAutoMatch", ctx.autoMatch)("ctrListInitialValue", ctx.initialValue)("ctrListAutoHighlight", ctx.autoHighlight)("ctrListDisplaySearching", ctx.displaySearching);
          }
        },
        directives: [CtrCompleter, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], CtrInput, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], CtrList, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], CtrDropdown, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], CtrRow, CompleterListItemCmp],
        styles: [".completer-dropdown[_ngcontent-%COMP%] {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row[_ngcontent-%COMP%] {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row[_ngcontent-%COMP%] {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .completer-image-default[_ngcontent-%COMP%] {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder[_ngcontent-%COMP%] {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image[_ngcontent-%COMP%] {\n        float: right;\n        width: 90%;\n    }"]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "dataService", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "inputName", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)], CompleterCmp.prototype, "inputId", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "pause", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "minSearchLength", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "maxChars", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "overrideSuggested", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "clearSelected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "clearUnselected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "fillHighlighted", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "placeholder", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "matchClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "fieldTabindex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "autoMatch", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "disableInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "inputClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "autofocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "openOnFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "openOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "selectOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "selectOnFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "initialValue", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "autoHighlight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "selected", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "highlighted", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("blur"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "blurEvent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "click", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("focus"), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "focusEvent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "opened", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CompleterCmp.prototype, "keyup", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], CompleterCmp.prototype, "keydown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(CtrCompleter, {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "completer", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ctrInput", {
        "static": false
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], CompleterCmp.prototype, "ctrInput", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object])], CompleterCmp.prototype, "datasource", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [String])], CompleterCmp.prototype, "textNoResults", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [String])], CompleterCmp.prototype, "textSearching", null);
      CompleterCmp = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [CompleterService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], CompleterCmp);
      var Ng2CompleterModule_1;
      var providers = [CompleterService, LocalDataFactory, RemoteDataFactory];

      var Ng2CompleterModule = Ng2CompleterModule_1 = /*#__PURE__*/function () {
        function Ng2CompleterModule() {
          _classCallCheck(this, Ng2CompleterModule);
        }

        _createClass(Ng2CompleterModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: Ng2CompleterModule_1,
              providers: providers
            };
          }
        }, {
          key: "forChild",
          value: function forChild() {
            return {
              ngModule: Ng2CompleterModule_1,
              providers: providers
            };
          }
        }]);

        return Ng2CompleterModule;
      }();

      Ng2CompleterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Ng2CompleterModule
      });
      Ng2CompleterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function Ng2CompleterModule_Factory(t) {
          return new (t || Ng2CompleterModule)();
        },
        providers: providers,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDataFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteDataFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: LocalDataFactory
          }, {
            type: RemoteDataFactory // Using any instead of () => LocalData because of AoT errors

          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrCompleter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[ctrCompleter]"
          }]
        }], function () {
          return [];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dataSourceChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrDropdown, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[ctrDropdown]"
          }]
        }], function () {
          return [{
            type: CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mousedown", ["$event"]]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[ctrInput]"
          }]
        }], function () {
          return [{
            type: CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          clearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["clearSelected"]
          }],
          clearUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["clearUnselected"]
          }],
          overrideSuggested: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["overrideSuggested"]
          }],
          fillHighlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["fillHighlighted"]
          }],
          openOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["openOnFocus"]
          }],
          openOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["openOnClick"]
          }],
          selectOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["selectOnClick"]
          }],
          selectOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["selectOnFocus"]
          }],
          ngModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          keyupHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keyup", ["$event"]]
          }],
          pasteHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["paste", ["$event"]]
          }],
          keydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["blur", ["$event"]]
          }],
          onfocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["focus", []]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[ctrList]"
          }]
        }], function () {
          return [{
            type: CtrCompleter,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          ctrListMinSearchLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ctrListPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ctrListAutoMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ctrListAutoHighlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ctrListDisplaySearching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ctrList"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ctrListInitialValue"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[ctrRow]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: CtrDropdown,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ctrRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
          }],
          onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter", ["$event"]]
          }],
          onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mousedown", ["$event"]]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleterListItemCmp, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "completer-list-item",
            template: "<span class=\"completer-list-item-holder\" [ngClass]= \"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]= \"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>"
          }]
        }], function () {
          return [];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchStr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          matchClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleterCmp, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "ng2-completer",
            template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input #ctrInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\"\n                class=\"completer-input\" ctrInput [ngClass]=\"inputClass\"\n                [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\"\n                [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n                [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n                [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\"\n                [openOnClick]=\"openOnClick\" [selectOnClick]=\"selectOnClick\" [selectOnFocus]=\"selectOnFocus\"\n                (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\"\n                (keydown)=\"onKeydown($event)\" (click)=\"onClick($event)\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\"\n                *ctrList=\"dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;\">\n                <div class=\"completer-dropdown\" ctrDropdown\n                    *ngIf=\"isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{ _textSearching }}</div>\n                    <div *ngIf=\"!searchActive && (!items || items?.length === 0)\"\n                    class=\"completer-no-results\">{{ _textNoResults }}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\"\n                            [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item\n                                class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\"\n                                [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\"\n                                class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
            providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: CompleterService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          inputName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minSearchLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxChars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          overrideSuggested: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clearUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fillHighlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          openOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          openOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHighlight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["blur"]
          }],
          click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["focus"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          keyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          datasource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textNoResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textSearching: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          matchClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fieldTabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          completer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [CtrCompleter, {
              "static": false
            }]
          }],
          ctrInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["ctrInput", {
              "static": false
            }]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2CompleterModule, {
          declarations: function declarations() {
            return [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]];
          },
          exports: function exports() {
            return [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2CompleterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp],
            exports: [CompleterListItemCmp, CtrCompleter, CtrDropdown, CtrInput, CtrList, CtrRow, CompleterCmp],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            providers: providers
          }]
        }], null, null);
      })(); //# sourceMappingURL=ng2-completer.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~homes-tables-tables-module~major-image-management-image-management-module~sys_config-actions~a086e64d-es5.js.map