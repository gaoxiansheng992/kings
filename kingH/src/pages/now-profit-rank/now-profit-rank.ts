import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-now-profit-rank',
  templateUrl: 'now-profit-rank.html'
})
export class NowProfitRankPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  items;
  status;
  // 等级定义
  cashLv = ['','assets/grade/hv1.png',
    'assets/grade/hv2.png',
    'assets/grade/hv3.png',
    'assets/grade/hv4.png',
    'assets/grade/hv5.png',
    'assets/grade/hv6.png',
    'assets/grade/hv7.png',
    'assets/grade/hv8.png'];
  communityLv = ['','assets/grade/lv1.png',
    'assets/grade/lv2.png',
    'assets/grade/lv3.png',
    'assets/grade/lv4.png',
    'assets/grade/lv5.png',
    'assets/grade/lv6.png',
    'assets/grade/lv7.png',
    'assets/grade/lv8.png'];
  expertLv = ['','assets/grade/zv1.png',
    'assets/grade/zv2.png',
    'assets/grade/zv3.png',
    'assets/grade/zv4.png',
    'assets/grade/zv5.png',
    'assets/grade/zv6.png',
    'assets/grade/zv7.png',
    'assets/grade/zv8.png'
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/simulate/profitList', {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json().list;
      console.log(response.json())
      this.status=response.json().status;
      console.log(this.status);
    })
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
