import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'page-cash-advance',
  templateUrl: 'cash-advance.html'
})
export class CashAdvancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
