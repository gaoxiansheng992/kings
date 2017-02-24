import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
//导入弹出框
import {AlertController} from 'ionic-angular';
/*
 Generated class for the GuessDetials page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-guess-detials',
  templateUrl: 'guess-detials.html'
})
export class GuessDetialsPage {

  item;
  //二级评论
  secondList;
  //点击一级评论弹出窗状态
  replyState: boolean;
  //点击回复底部回复窗口；
  inputstate: boolean;
  //判断是否是自己帖子

  constructor(public navCtrl: NavController, public params: NavParams, public alertCtrl: AlertController) {
    this.item = params.data.item;
    this.replyState = false;
    this.inputstate = false;
    //secondList中的type代表评论时回传的值
    this.secondList = [
      {
        'nikeName': '奥巴马',
        'mNikeName': '',
        'content': '你说的很对',
        'type': 2
      },
      {
        'nikeName': '今日头条',
        'mNikeName': '金克斯',
        'content': '金条金条金条金条金条金条金条金条金条金条金条金条',
        'type': 3
      },
      {
        'nikeName': '奥巴马',
        'mNikeName': '卡特',
        'content': '你说的很对',
        'type': 3
      },
      {
        'nikeName': '奥巴马',
        'mNikeName': '金克斯',
        'content': '你说的很对',
        'type': 3
      },
      {
        'nikeName': '奥巴马',
        'mNikeName': '金克斯',
        'content': '你说的很对',
        'type': 3
      },
      {
        'nikeName': '奥巴马',
        'mNikeName': '金克斯',
        'content': '你说的很对',
        'type': 3
      },
      {
        'nikeName': '奥巴马',
        'mNikeName': '金克斯',
        'content': '你说的很对',
        'type': 3
      }
    ];
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

  replyMask() {
    this.replyState = true;
  }

//  一级评论回复
  replay() {
    this.replyState = false;
    this.inputstate = true;
  }

//  举报
  report() {
    this.replyState = false;
  }

//  取消
  qx() {
    this.replyState = false;
  }

}
