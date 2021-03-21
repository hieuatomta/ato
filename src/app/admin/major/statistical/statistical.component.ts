import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NbColorHelper, NbDialogService, NbThemeService, NbToastrService} from '@nebular/theme';
import {ToastrService} from '../../../@core/mock/toastr-service';
import {FormControl, FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {UsersService} from '../../../@core/services/users.service';
import {HttpHeaders} from '@angular/common/http';
import {ConfirmDialogComponent} from '../../../shares/directives/confirm-dialog/confirm-dialog.component';
import {StatisticalUpdateComponent} from './statistical-update/statistical-update.component';
import {SuppliersService} from '../../../@core/services/suppliers.service';
import {StatisticalService} from '../../../@core/services/statistical.service';
import {formatDate} from '@angular/common';
import {checkVaidDate} from '../../../validator';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-users',
  styleUrls: ['./statistical.component.scss'],
  templateUrl: './statistical.component.html',
})
export class StatisticalComponent implements OnInit {
  ngOnInit(): void {
    this.inputForm = new FormGroup({
      fromTime: new FormControl(null, []),
      toTime: new FormControl(new Date(), []),
    });
    this.search(0);


  }

  constructor(
    private toastr: ToastrService,
    private theme: NbThemeService,
    private translate: TranslateService,
    private toastrService: NbToastrService,
    private userService: UsersService,
    private suppliersService: SuppliersService,
    private statisticalService: StatisticalService,
    private dialogService: NbDialogService) {
  }

  options: any;
  optionsPie: any;
  data: any;
  themeSubscription: any;

  protected showChart(statistic_time: String[], sum_send: number[], sum_receive: number[]) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.data = {
        labels: statistic_time,
        datasets: [{
          data: sum_send,
          label: this.translate.instant('statistic.barchart.send'),
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        },
          {
            data: sum_receive,
            label: this.translate.instant('statistic.barchart.receive'),
            backgroundColor: NbColorHelper.hexToRgbA('#444444', 0.8),
          }],
      };
      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  protected showChartPie() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.optionsPie = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Countries',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {value: 1, name: 'Germany'},
              {value: 310, name: 'France'},
              {value: 234, name: 'Canada'},
              {value: 135, name: 'Russia'},
              {value: 1548, name: 'USA'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  nowYear = formatDate(new Date(), 'dd/MM/yyyy', 'en-us');
  lastYear = formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), 'dd/MM/yyyy', 'en-us');

  changeValueEndDate(event) {
    const value = event.target.value;
    if (!checkVaidDate(value)) {
      return this.inputForm.get('toTime').setErrors({date: true});
    }

  }


  changeValueStartDate(event) {
    const value = event.target.value;
    if (!checkVaidDate(value)) {
      return this.inputForm.get('fromTime').setErrors({date: true});
    }

  }

  isLoad: boolean;
  listStatus = [
    {name: 'common.status.1', code: 1},
    {name: 'common.status.0', code: 0}
  ];
  rows: Object[];
  page = {
    limit: 5,
    count: 0,
    offset: 0,
  };
  columns = [
    {name: 'common.table.item_number', prop: 'index', flexGrow: 0.3},
    {name: 'common.table.item_suppliers_code', prop: 'code', flexGrow: 1},
    {name: 'common.table.item_suppliers_name', prop: 'name', flexGrow: 1.5},
    {name: 'common.table.item_description', prop: 'description', flexGrow: 1.5},
    {name: 'common.table.item_status', prop: 'status', flexGrow: 1},
    {name: 'common.table.item_update_time', prop: 'updateTime', flexGrow: 1},
    {name: 'common.table.item_action', prop: 'action_btn', flexGrow: 1}
  ];

  inputForm: any;

  pageCallback(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.page.offset = pageInfo.offset;
    this.search(pageInfo.offset);
  }

  editUsers(data) {
    let title;
    if (data == null) {
      title = this.translate.instant('suppliers.title_add');
    } else {
      title = this.translate.instant('suppliers.title_edit');
    }
    this.dialogService.open(StatisticalUpdateComponent, {
      context: {
        title: title,
        data: data,
      },
      dialogClass: 'modal-full',
    }).onClose.subscribe(
      value => {
        if (value) {
          if (data == null) {
            this.toastrService.success(this.translate.instant('suppliers.content_add_success'),
              this.translate.instant('common.title_notification'));
          } else {
            this.toastrService.success(this.translate.instant('suppliers.content_edit_success'),
              this.translate.instant('common.title_notification'));
          }
          this.search(0);
        }
      }
    );
  }

  protected onSuccess(data: any | null, headers: HttpHeaders, page: number): void {
    this.page.count = data.count;
    this.page.offset = page || 0;
    this.rows = data.list || [];
  }

  formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  search(pageToLoad: number) {
    this.isLoad = true;
    // this.page.offset = pageToLoad;
    console.log(this.formatDate(this.inputForm.get('fromTime').value));
    this.inputForm.get('fromTime').setValue(this.formatDate(this.inputForm.get('fromTime').value));
    this.inputForm.get('toTime').setValue(this.formatDate(this.inputForm.get('toTime').value));
    console.log(this.inputForm.value);
    this.statisticalService.getSendCount(this.inputForm.value
    ).subscribe(
      (res) => {
        const a = [];
        const b = [];
        console.log(res);
        for (let i = 0; i < res.body.length; i++) {
          a.push(res.body[i].updateTime);
          b.push(res.body[i].totalImport);
        }
        this.statisticalService.getOrdersCount(this.inputForm.value
        ).subscribe(
          (res1) => {
            const c = [];
            console.log(res1);
            for (let i = 0; i < res.body.length; i++) {
              c.push(res1.body[i].totalImport);
            }
            this.showChart(a, b, c);
            this.isLoad = false;
          },
          (error) => {
            this.isLoad = false;
          },
          () => this.isLoad = false,
        );

      },
      (error) => {
        this.toastrService.danger(this.translate.instant('statistic.dateError'), this.translate.instant('statistic.error.title'));
        // this.loading = false;
      },
    );
    // this.suppliersService.doSearch({
    //   page: this.page.offset,
    //   page_size: this.page.limit,
    //   fromTime: this.formatDate(this.inputForm.get('fromTime').value),
    //   toTime: this.formatDate(this.inputForm.get('toTime').value),
    // }).subscribe(
    //   (res) => {
    //     this.onSuccess(res.body.data, res.headers, pageToLoad);
    //   },
    //   (error) => {
    //     this.isLoad = false;
    //   },
    //   () => this.isLoad = false,
    // );
  }


  deleteUsers(data) {
    this.dialogService.open(ConfirmDialogComponent, {
      context: {
        title: this.translate.instant('common.title_notification'),
        message: this.translate.instant('suppliers.title_delete') + ' ' + data.name
      },
    }).onClose.subscribe(res => {
      if (res) {
        this.isLoad = true;
        this.suppliersService.delete(data.id).subscribe(() => {
          this.toastrService.success(this.translate.instant('suppliers.delete_success'),
            this.translate.instant('common.title_notification'));
          this.search(0);
          this.isLoad = false;
        }, (err) => {
          this.toastrService.success(err.message),
            this.translate.instant('common.title_notification');
          this.isLoad = false;
        });
      }
    });

  }
}
