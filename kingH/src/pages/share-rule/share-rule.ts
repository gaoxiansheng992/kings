import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the ShareRule page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-share-rule',
  templateUrl: 'share-rule.html'
})
export class ShareRulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareRulePage');
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
