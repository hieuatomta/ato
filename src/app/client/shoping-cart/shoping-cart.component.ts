import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../@core/services/order.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-shoping-cart',
  styleUrls: ['./shoping-cart.component.scss'],
  templateUrl: './shoping-cart.component.html',
})
export class ShopingCartComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  inputForm: any;

  constructor(private orderService: OrderService) {
  }

  soluong(e) {
    let soLuong = this.inputForm.get('amount').value;
    if (e === 0) {
      if (this.inputForm.get('amount').value === 0) {
        this.inputForm.get('amount').setValue(0);
        return;
      }
      soLuong = soLuong - 1;
    } else {
      soLuong = soLuong + 1;
    }
    this.inputForm.get('amount').setValue(soLuong);
    return soLuong;
  }

  obj = null;
  size = null;

  ngOnInit(): void {
    this.obj = JSON.parse(localStorage.getItem('list_order'));
    if (this.obj === null || this.obj === undefined) {
      this.obj = [];
    }
    this.size = this.obj?.length;
    this.inputForm = new FormGroup({
      color: new FormControl(null, []),
      size: new FormControl(null, []),
      amount: new FormControl(1, []),
      status: new FormControl(null, []),
      id: new FormControl(null, []),
      cost: new FormControl(null, []),
      name: new FormControl(null, [])
    });
  }

  thanhToan() {
    this.orderService.insert(null).subscribe(res => {
        if (res.body.data.returncode === 1) {
          console.log(res.body.data.orderurl);
          window.location = res.body.data.orderurl;
        } else {
          console.log('That bai');
        }
      }, (error) => {
        // this.isLoad = false;
      },
    );
  }
}
