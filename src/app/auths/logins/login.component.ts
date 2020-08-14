import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbAuthService, NbAuthSocialLink} from '@nebular/auth';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestApiService} from '../../@core/mock/rest-api.service';
import {ToastrService} from '../../@core/mock/toastr-service';
import {Title} from '@angular/platform-browser';


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  }
}

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {

  // registerForm: FormGroup;
  // submitted = false;

  constructor(private http: RestApiService,
              private toastr: ToastrService,) {

  }

  //  private formBuilder: FormBuilder
  user1 = {
    userName: 'hieu',
    userPass: 'hieu',
  };

  ngOnInit() {
    try {
      // const token = JSON.parse(localStorage.getItem('httpHeaders'));
      // consol
    } catch {

    }
    // this.registerForm = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    //   acceptTerms: [false, Validators.requiredTrue],
    // }, {
    //   validator: MustMatch('password', 'confirmPassword'),
    // });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  onSubmit() {
    this.http.post('http://localhost:8080/test3/login', this.user1).subscribe(res => {

      if (res.status === 200) {
        window.location.href = res.body.part;
        localStorage.setItem('objects', JSON.stringify(res.body.listObjects));
        localStorage.setItem('httpHeaders', res.body.httpHeaders.Authorization);
        localStorage.setItem('users', res.body.customUserDetails);
      } else {
        console.log("dang nhap k thanh cong")
      }
    }, err => {
      console.log("dang nhap k thanh cong")
      let title = "Lỗi";
      let body: any;
      try {
        body = err.error.errorMessage;
      } catch {
        body = "";
      }
      this.toastr.showToast('danger', title, body);
      console.log(err)
    })

    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }

    // // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    // this.submitted = false;
    // this.registerForm.reset();
  }
}
