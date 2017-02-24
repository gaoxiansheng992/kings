import {Component} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import * as Hammer from 'hammerjs'; // 导入手势库
@Component({
  selector: 'page-free',
  templateUrl: 'free.html'
})
export class FreePage {
  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};
  avatars = [
    {
      name: 'kristy',
      image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
      visible: true
    },
    {
      name: 'matthew',
      image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
      visible: false
    },
    {
      name: 'chris',
      image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: false
    },
    {
      name: 'jenny',
      image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: false
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

}
