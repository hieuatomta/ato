import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  // soluong(e) {
  //   let soLuong = this.inputForm.get('amount').value;
  //   if (e === 0) {
  //     if (this.inputForm.get('amount').value === 0) {
  //       this.inputForm.get('amount').setValue(0);
  //       return;
  //     }
  //     soLuong = soLuong - 1;
  //   } else {
  //     soLuong = soLuong + 1;
  //   }
  //   this.inputForm.get('amount').setValue(soLuong);
  //   return soLuong;
  // }

  obj = null;
  size = null;
  acount = null;
  totalPrice = null;
  // inputForm = null;
  lsProduct = [];
  order = {
    productsId: null,
    amount: null,
    sizesId: null
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      totalPrice: new FormControl(null, []),
      customOrderDTO: new FormControl(null, []),
    });
    const data1 = JSON.parse(localStorage.getItem('list_order'));
    this.obj = data1?.data;
    // this.obj = JSON.parse(localStorage.getItem('list_order'));
    console.log(this.obj);
    if (this.obj === null || this.obj === undefined) {
      this.obj = [];
    }
    this.inputForm.get('totalPrice').setValue(data1.totalPrice)
    this.totalPrice = data1.totalPrice.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
    this.size = this.obj?.length;

    this.lsProduct = [];
    for (let i = 0; i < this.obj?.length; i++) {
      this.order.productsId = this.obj[i].id;
      this.order.sizesId = this.obj[i].size;
      this.order.amount = this.obj[i].amount;
      this.lsProduct.push(this.order);
      const total = (Number(this.obj[i].amount * (this.obj[i].cost.trim().slice(0, this.obj[i].cost.search('đ') - 1))) * 1000).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
      });
      this.obj[i].totalPrice1 = total;
    }
  }

  thanhToan() {
    console.log(this.lsProduct);
    this.inputForm.get('customOrderDTO').setValue(this.lsProduct);
    console.log(this.inputForm.value);
    this.orderService.insert(this.inputForm.value).subscribe(res => {
        if (res.body.data.returncode === 1) {
          console.log(res.body.data.orderurl);
          // window.location = res.body.data.orderurl;
        } else {
          console.log('That bai');
        }
      }, (error) => {
        // this.isLoad = false;
      },
    );
  }
}
