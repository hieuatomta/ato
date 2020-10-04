import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '../../@core/mock/toastr-service';
import {checkUser, notSpaceLogin} from '../../validator';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../@core/services/login.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
  ngOnInit() {
    this.initForm();
  }

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private translateService: TranslateService,
              private toastr: ToastrService) {

  }


  captchaError: boolean = false;
  inputUser: FormGroup;
  data: any;
  isLoad: boolean;
  submitted = false;
  showPassword = false;

  initForm() {
    this.inputUser = new FormGroup({
      userName: new FormControl(this.getCookie('userName'), [checkUser, Validators.maxLength(50), Validators.required]),
      passwordHash: new FormControl(this.getCookie('passwordHash'), [notSpaceLogin, Validators.minLength(6), Validators.maxLength(60), Validators.required]),
      remember: new FormControl(this.getCookie('remember'), []),
      recaptchaReactive: new FormControl(null, [Validators.required])
    });
  }

  hideLogin = () => {
    document.querySelector('.modal').classList.add('is-open');
    document.querySelector('body').style.overflow = 'hidden';
  };

  trimValue(event) {
    event.target.value = event.target.value.trim();
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.isLoad = true;
    this.submitted = true;
    this.captchaError = true;
    if (this.inputUser.valid) {
      if (this.inputUser.value.remember) {
        document.cookie = 'userName=' + this.inputUser.value.userName;
        document.cookie = 'passwordHash=' + this.inputUser.value.passwordHash;
        document.cookie = 'remember=' + true;
      } else {
        document.cookie = 'userName=' + '';
        document.cookie = 'passwordHash=' + '';
        document.cookie = 'remember=' + false;
      }
      this.loginService.login(this.inputUser.value).subscribe(res => {
        this.submitted = false;
        if (res.status === 200) {
          this.router.navigate(['/admin/home']);
          localStorage.setItem('objects', JSON.stringify(res.body.listObjects));
          localStorage.setItem('httpHeaders', res.body.httpHeaders.Authorization);
          localStorage.setItem('users', res.body.customUserDetails.fullName);
          localStorage.setItem('userDetails', JSON.stringify(res.body.customUserDetails));
          this.isLoad = false;
          this.captchaError = false;

        }
      }, err => {
        const title = this.translateService.instant('login.error');
        let body1: any;
        try {
          body1 = err.error.detail;
        } catch {
          body1 = '';
        } finally {
          this.isLoad = false;
          this.captchaError = false;
          this.toastr.showToast('danger', title, body1);
          grecaptcha.reset();
        }
      });
    } else {
      this.isLoad = false;
    }
  }

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}
