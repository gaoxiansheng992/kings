import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
//导入动画所需模块
//弹出框导入
import {AlertController} from 'ionic-angular';
import {SimulatedbettingGiftPage} from '../simulatedbetting-gift/simulatedbetting-gift'

/*
 Generated class for the SimulatedDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-simulated-detail',
  templateUrl: 'simulated-detail.html'
})
export class SimulatedDetailPage {
//字数统计变量；
  textNum = 0;
  name = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  //字数统计方法
  count(ev) {
    let val = ev.target.value.length;
    this.textNum = val;
  }

//  减法
  reduce() {
    this.name--;
    if (this.name <= 0) {
      this.name = 1;
    }
  }

//  加法
  add() {
    this.name++;
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

//  用户兑换数量输入未空时，失去焦点自动设置兑换数量未1；
  first(ev) {
    let val = ev.target.value;
    if (val == 0) {
      this.name = 1;
    }
  }

//  点击提交按钮
  doAlert() {
    let alert = this.alerCtrl.create({
      title: '兑换申请提交成功!',
      message: '请在我的信息中查看申请进度',
      buttons: [
        {
          text: '确定',
          handler: data => {
            this.navCtrl.push(SimulatedbettingGiftPage);
          }
        }
      ]
    });
    alert.present();
  }

}
