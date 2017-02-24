import {Component, trigger, state, style, animate, transition, group} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {DeviceMotion} from 'ionic-native';
import {Vibration} from 'ionic-native';
/*
 Generated class for the FuxingsengColor page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-fuxingseng-color',
  templateUrl: 'fuxingseng-color.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'scale(0.5)'})),
      transition('void => *', [
        style({transform: 'scale(0.5)'}),
        group([
          animate('0.8s  ease', style({
            transform: 'translateX(0)',
          })),
          animate('0.8s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'scale(0.5)',
          })),
          animate('0.5s ease', style({
            transform: 'scale(0)',
          }))
        ])
      ])
    ])
  ]
})
export class FuxingsengColorPage {
  //摇出红包
  showMoney = false;
  //摇过的次数
  shakeNum = 1;
  private lastX: number;
  private lastY: number;
  private lastZ: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, plateform: Platform) {
  //   plateform.ready().then(() => {
  //     let subsciption = DeviceMotion.watchAcceleration({
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
  //         this.shakeNum++;
  //         if (this.shakeNum > 2) {
  //           this.presentToast();
  //         }
  //         else {
  //           this.showMoney = true;
  //           Vibration.vibrate(1000);
  //         }
  //
  //       }
  //       this.lastX = acc.x;
  //       this.lastY = acc.y;
  //       this.lastZ = acc.z;
  //     })
  //     // subsciption.unsubscribe();
  //   })
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '本期已摇，下期再来',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }

  closeMask() {
    this.showMoney = false;
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
