import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';

import {UserData} from '../../../@core/data/users';
import {LayoutService} from '../../../@core/utils';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {RestApiService} from '../../../@core/mock/rest-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];


  currentTheme = 'cosmic';

  menuClick(e) {
    console.log(e);
    if (e.menuId === 3) {
      localStorage.clear();
      this.router.navigate(['auths/login']);
    }
    if (e.menuId === 2) {
      console.log('Thực hiện mở popup đổi mật khẩu');
    }
    if (e.menuId === 1) {
      console.log('Thực hiện mở popup thông tin cá nhân');
    }
  }

  userMenu = [
    {menuId: 1, title: 'Thông tin cá nhân'},
    {menuId: 2, title: 'Đổi mật khẩu'},
    {menuId: 3, title: 'Đăng xuất'},
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private http: RestApiService,
              private router: Router) {

    this.http.post('http://localhost:8080/test3/login1', {}).subscribe(res => {
      console.log(res.headers.get('Authorization'));
      if (res.status === 200) {
        // console.log(res.status);
        localStorage.setItem('httpHeaders', res.headers.get('Authorization'));
      }
      // localStorage.setItem('httpHeaders', res.headers.get('Authorization'));
    }, err => {
      console.log(err);
      if (err.status === 400) {
        // console.log(res.status);
        window.location.href = err.error.data;
        localStorage.setItem('httpHeaders', '');
      }
    });
  }


  ngOnInit() {
    this.user = localStorage.getItem('users');
    this.currentTheme = this.themeService.currentTheme;
    const {xl} = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
    this.menuService.onItemClick().subscribe((event) => {
      this.menuClick(event.item);
    });
    this.themeService.onThemeChange()
      .pipe(
        map(({name}) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
