import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SendPage} from '../send/send'
import {RechargePage} from '../recharge/recharge'
import {RecommendationAcerPage} from '../recommendation-acer/recommendation-acer'
import {MyrecommendationAcerPage} from '../myrecommendation-acer/myrecommendation-acer'
import {GoldeXchangePage} from '../golde-xchange/golde-xchange'
import {TreePage} from '../tree/tree'
import {MoneyexchangePage} from '../moneyexchange/moneyexchange'
import {MyprofitPage} from '../myprofit/myprofit'
import {GiftexchangePage} from '../giftexchange/giftexchange'
import {InvitefriendsDetailsPage} from '../invitefriends-details/invitefriends-details'
import {RecommendationDiscountPage} from '../recommendation-discount/recommendation-discount'
import {MyrecommendationDiscountPage} from '../myrecommendation-discount/myrecommendation-discount'
/*
 Generated class for the Details page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//  提现明细
  recharge() {
    this.navCtrl.push(RechargePage);
  }

//  查看推荐-元宝
  recommendationAcer() {
    this.navCtrl.push(RecommendationAcerPage);
  }

//我的推荐－元宝
  myrecommendationAcer() {
    this.navCtrl.push(MyrecommendationAcerPage)
  }

//  元宝兑换
  goldexchange() {
    this.navCtrl.push(GoldeXchangePage);
  }

//  摇钱树
  tree() {
    this.navCtrl.push(TreePage);
  }

// 金币兑换
  moneyexchange() {
    this.navCtrl.push(MoneyexchangePage);
  }

//  礼品兑换
  giftexchange() {
    this.navCtrl.push(GiftexchangePage);
  }

//  邀请好友
  invitefriends() {
    this.navCtrl.push(InvitefriendsDetailsPage);
  }

//  查看推荐－优惠券
  recommendationDiscount() {
    this.navCtrl.push(RecommendationDiscountPage);
  }

//  贡献值
  myrecommendationDiscount() {
    this.navCtrl.push(MyrecommendationDiscountPage);
  }

//  充值
  send() {
    this.navCtrl.push(SendPage);
  }

//  我的盈利
  pofit() {
    this.navCtrl.push(MyprofitPage);
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
