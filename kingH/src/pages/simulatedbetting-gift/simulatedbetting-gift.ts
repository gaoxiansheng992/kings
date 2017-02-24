import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SimulatedDetailPage} from '../simulated-detail/simulated-detail'
@Component({
  selector: 'page-simulatedbetting-gift',
  templateUrl: 'simulatedbetting-gift.html'
})
export class SimulatedbettingGiftPage {
  slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = ['assets/simulate-slider.png', 'assets/simulate-slider.png', 'assets/simulate-slider.png']
  }
  //返回按钮
  back() {
    this.navCtrl.pop();
  }

//  跳转到详情页
  toDetails() {
    this.navCtrl.push(SimulatedDetailPage);
  }
}
