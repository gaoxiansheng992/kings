import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {DeviceMotion} from 'ionic-native'
/*
 Generated class for the Test page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  private lastX: number;
  private lastY: number;
  private lastZ: number;
  shake = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, plateform: Platform) {
  //   plateform.ready().then(() => {
  //     DeviceMotion.watchAcceleration({
  //       frequency: 1000
  //     }).subscribe(acc => {
  //       if (!this.lastX) {
  //         this.lastX = acc.x;
  //         this.lastY = acc.y;
  //         this.lastZ = acc.z;
  //         return;
  //       }
  //       let deltaX: number, deltaY: number, deltaZ: number;
  //       deltaX = Math.abs(acc.x - this.lastX);
  //       deltaY = Math.abs(acc.y - this.lastY);
  //       deltaZ = Math.abs(acc.z - this.lastZ);
  //       if (deltaX > 10 || deltaY > 10 || deltaX > 10) {
  //         this.shake = true;
  //         alert('yao')
  //       }
  //       this.lastX = acc.x;
  //       this.lastY = acc.y;
  //       this.lastZ = acc.z;
  //     })
  //   })
  }

}
