import {AbstractControl, FormGroup} from '@angular/forms';

export interface AllValidationErrors {
  controlName: string;
  errorName: string;
  errorValue: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function trimRequired(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control?.value.toString().trim().length;
  }
  if (value == null || value === 0) {
    return {'required': true};
  }
  return null;
}

export function notSpace(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value;
    const regex = /^.*\s+.*$/;
    if (regex.test(value)) {
      return {'space': true};
    }
  }
  return null;
}

export function email(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value;
    if (value != null && value.trim().length !== 0) {
      console.log(value.trim().length);
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        return {'email': true};
      }
    }
  }
  return null;
}

export function notSpaceLogin(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value.trim();
    const regex = /^.*\s+.*$/;
    if (regex.test(value)) {
      return {'space': true};
    }
  }
  return null;
}

export function validEmail(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value;
    if (value == null || value.trim().length === 0) {
      return {'required': true};
    }
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const regex = /^.*\s+.*$/;
    if (!regex.test(value)) {
      return {'email': true};
    }
  }
  return null;
}

export function validDate(control: AbstractControl): { [key: string]: boolean } | null {
  let d = null;
  if (control && control.value != null) {
    d = control.value;
    // const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    // // const regex = /^.*\s+.*$/;
    // if (!regex.test(value)) {
    //   return {'date': true};
    // }

    if (Object.prototype.toString.call(d) === "[object Date]") {
      // it is a date
      if (isNaN(d.getTime())) {  // d.valueOf() could also work
        // date is not valid
        return {'date': true};
      } else {
        return null;
        // date is valid
      }
    } else {
      return {'date': true};
      // not a date
    }
  }
  return null;
}

export function checkPass(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value;
    if (value == null || value.trim().length === 0) {
      return {'required': true};
    }
    if (value.trim().length > 0 && value.trim().length < 6) {
      return {'minlength': true};
    }
    if (value.trim().length > 60) {
      return {'maxlength': true};
    }
    return null;
  }
}


export function checkUser(control: AbstractControl): { [key: string]: boolean } | null {
  let value = null;
  if (control && control.value != null) {
    value = control.value;
    if (value == null || value.trim().length === 0) {
      return {'required': true};
    }
    if (value.trim().length > 50) {
      return {'usersmaxlength': true};
    }
    return null;
  }
}



export function validPassword(form: FormGroup) {
  if (form.get('newPass') && form.get('comPass')) {
    if (form.get('newPass').value === null || form.get('newPass').value === ''
      || form.get('newPass').value === undefined) {
      return null;

    }
    if (form.get('newPass').value === form.get('comPass').value) {
      form.get('comPass').setErrors(null);
      return null;
    }
    form.get('comPass').setErrors({passwordMustMatchChange: true});
  }
  return null;
}

export function passwordsMatchValidator(form: FormGroup) {
  if (form.get('passwordHash') && form.get('rePassword')) {
    if (form.get('passwordHash').value === form.get('rePassword').value) {
      form.get('rePassword').setErrors(null);
      return null;
    }
    form.get('rePassword').setErrors({notMatchPassword: true});
  }
  return null;
}

