(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["major-image-management-image-management-module"],{

/***/ "GD1I":
/*!****************************************************************************!*\
  !*** ./src/app/admin/major/image-management/product-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManagementComponent", function() { return ImageManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_services_UploadFileService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services/UploadFileService.service */ "JRlb");





class RequestOptions {
    constructor(param) {
    }
}
class ImageManagementComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.title = 'File-Upload-Save';
        this.progress = { percentage: 0 };
        this.selectedFile = null;
        this.changeImage = false;
    }
    downloadFile() {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', '_File_Saved_Path');
        link.setAttribute('download', 'file_name.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    change($event) {
        this.changeImage = true;
    }
    changedImage(event) {
        this.selectedFile = event.target.files[0];
    }
    upload() {
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                alert('File Successfully Uploaded');
            }
            this.selectedFiles = undefined;
        });
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
}
ImageManagementComponent.ɵfac = function ImageManagementComponent_Factory(t) { return new (t || ImageManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_UploadFileService_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"])); };
ImageManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageManagementComponent, selectors: [["ngx-image-management"]], decls: 7, vars: 1, consts: [["type", "file", "id", "customFile", 3, "change"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", 2, "margin-left", "10px", 3, "click"]], template: function ImageManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload and Download File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageManagementComponent_Template_input_change_2_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageManagementComponent_Template_button_click_3_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageManagementComponent_Template_button_click_5_listener() { return ctx.downloadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21ham9yL2ltYWdlLW1hbmFnZW1lbnQvaW1hZ2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'ngx-image-management',
                styleUrls: ['./product-management.component.scss'],
                templateUrl: './product-management.component.html',
            }]
    }], function () { return [{ type: _core_services_UploadFileService_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"] }]; }, null); })();


/***/ }),

/***/ "JRlb":
/*!*************************************************************!*\
  !*** ./src/app/@core/services/UploadFileService.service.ts ***!
  \*************************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UploadFileService {
    constructor(https) {
        this.https = https;
    }
    pushFileToStorage(file) {
        const data = new FormData();
        data.append('file', file);
        console.log(data);
        const newRequest = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'http://localhost:8081/api/savefile', data, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.https.request(newRequest);
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NTsE":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/major/image-management/product-management-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductManagementRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManagementRoutingModule", function() { return ImageManagementRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _image_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-management.component */ "GD1I");





const routes = [{
        path: '',
        component: _image_management_component__WEBPACK_IMPORTED_MODULE_2__["ImageManagementComponent"],
    }];
class ImageManagementRoutingModule {
}
ImageManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageManagementRoutingModule });
ImageManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageManagementRoutingModule_Factory(t) { return new (t || ImageManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
const routedComponents = [
    _image_management_component__WEBPACK_IMPORTED_MODULE_2__["ImageManagementComponent"],
];


/***/ }),

/***/ "ycRK":
/*!*************************************************************************!*\
  !*** ./src/app/admin/major/image-management/product-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageManagementModule", function() { return ImageManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _image_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-management-routing.module */ "NTsE");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _shares_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shares/shared.module */ "urQ3");
/* harmony import */ var _image_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-management.component */ "GD1I");












class ImageManagementModule {
}
ImageManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageManagementModule });
ImageManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageManagementModule_Factory(t) { return new (t || ImageManagementModule)(); }, imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _image_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImageManagementRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], _shares_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageManagementModule, { declarations: [_image_management_component__WEBPACK_IMPORTED_MODULE_10__["ImageManagementComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
        _image_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImageManagementRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], _shares_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                    _image_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImageManagementRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], _shares_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleModule"],
                ],
                entryComponents: [],
                declarations: [_image_management_component__WEBPACK_IMPORTED_MODULE_10__["ImageManagementComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=major-image-management-image-management-module-es2015.js.map
