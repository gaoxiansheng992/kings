import {Component} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {PhotoViewer} from 'ionic-native';
import * as Hammer from 'hammerjs'; // 导入手势库
/*
 Generated class for the AsquareImg page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-asquare-img',
  templateUrl: 'asquare-img.html'
})
export class AsquareImgPage {
  @ViewChild(Slides) slides: Slides;
  //当前页；
  currentIndex = 0;
  // 总页码；
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    if (this.currentIndex >= 5) {
      this.currentIndex = 4;
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(Hammer)
    console.dir(Hammer.Pinch)
  }

//返回按钮
  back() {
    this.navCtrl.pop();
  }

  pinch(ev) {
    alert(ev.target)
    let mc = new Hammer.Manager(ev.target);
    console.log(mc)
    var pinch = new Hammer.Pinch();
    mc.add(pinch);
    alert(pinch);
    mc.on("pinch", function (ev) {
      ev.target.textContent += ev.type + " ";
    });
  }
}
