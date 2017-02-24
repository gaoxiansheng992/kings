import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShareRulePage} from '../share-rule/share-rule'

/*
 Generated class for the InviteList page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-invite-list',
  templateUrl: 'invite-list.html'
})
export class InviteListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteListPage');
  }

  share() {
    this.navCtrl.push(ShareRulePage, {
      item1: 'newPage'
    });
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

}
