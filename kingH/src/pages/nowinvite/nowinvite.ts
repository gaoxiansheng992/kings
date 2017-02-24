import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the Nowinvite page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-nowinvite',
  templateUrl: 'nowinvite.html'
})
export class NowinvitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
