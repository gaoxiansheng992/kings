import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Location} from '@angular/common';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-all',
  templateUrl: 'all.html'
})
export class AllPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  //全部项内容
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public location: Location, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/guess/allInterface', {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json().list;
    })
  }

  // //搜索
  getItems(ev) {
    console.log(this.items)
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
