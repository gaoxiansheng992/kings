import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-send',
  templateUrl: 'send.html'
})
export class SendPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  gender: string = "f";
  musicAlertOpts: {title: string};
  items;
  //总额
  count;
//判断是否有数据
  status;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/recharge', JSON.stringify({
      userId: 13669282304,
      pageSize: 3,
      pageNo: 1,
      date: 1
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json().list;
      this.count = response.json().list[0].sum;
      this.status=response.json().status;
    })
    this.musicAlertOpts = {
      title: '请选择',
    };
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
