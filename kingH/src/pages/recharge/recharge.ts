import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html'
})
export class RechargePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
