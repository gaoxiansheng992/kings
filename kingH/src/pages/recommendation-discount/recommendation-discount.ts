import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the RecommendationDiscount page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-recommendation-discount',
  templateUrl: 'recommendation-discount.html'
})
export class RecommendationDiscountPage {
  items;
  count;
  //判断是否有数据
  status;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/viewTuiJian', JSON.stringify({
      type: 2,
      userId: 13669282304,
      date: 1,//近几月1，2,3,0，
      pageSize: 3,//每一页显示的数据条数
      pageNo: 1//当前页数，默认为1
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json().list;
      console.log(this.items)
      this.count = this.items[0].sum;
      this.status=response.json().status;
      console.log(this.status);
    })
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

}
