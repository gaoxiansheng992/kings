import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the MyrecommendationAcer page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-myrecommendation-acer',
  templateUrl: 'myrecommendation-acer.html'
})
export class MyrecommendationAcerPage {
  items;
  count;
  //判断是否有数据
  status;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/myRecommend', JSON.stringify({
      type: 1,
      userId: 13669282304,
      pageSize: 3,
      pageNo: 1,
      date: 1
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json().list;
      this.count = this.items[0].sum;
      this.status=response.json().status;
    })
  }

  //返回按钮

  back() {
    this.navCtrl.pop();
  }

}
