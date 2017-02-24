import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the Forum page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class ForumPage {
//轮播图；
  carousel;
  //心水论坛分类
   tabs;
  // 当前项
  currentItem=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carousel = [
      {
        url: 'assets/squaresSider.png',
        type: 0,
        clickUrl: 'www.baidu.com'
      },
      {
        url: 'assets/squaresSider.png',
        type: 0,
        clickUrl: 'www.baidu.com'
      }, {
        url: 'assets/squaresSider.png',
        type: 0,
        clickUrl: 'www.baidu.com'
      }
    ]
  //  心水论坛
    this.tabs=['新手上路','技术达人','牛人推荐','图解八卦'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }
  toNext(index){
    console.log(index);
    this.currentItem=index;

  }

}
