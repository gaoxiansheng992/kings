import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the Myprofit page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-myprofit',
  templateUrl: 'myprofit.html'
})
export class MyprofitPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  //对象
  items;
  //总额
  amount;
  //列表
  list;
  //判断是否有数据
  status;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/recordGift', JSON.stringify({
      userId: 18264384334,
      date: 1,//近几月1，2,3,0，
      pageSize: 3,//每一页显示的数据条数
      pageNo: 1//当前页数，默认为1
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json();
      this.amount = this.items.amount;
      this.list = this.items.list;
       this.status=response.json().status;
       console.log(this.status)
    })

  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

}
