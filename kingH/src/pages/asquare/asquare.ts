import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
// //导入详情页模块
import {AsquareDetailsPage} from '../asquare-details/asquare-details'
// //图片浏览模块
import {AsquareImgPage} from '../asquare-img/asquare-img'
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-asquare',
  templateUrl: 'asquare.html'
})
export class AsquarePage {
  //轮播图；
  carousel = [];
  //帖子列表
  list;
  items;
  count;
  //状态
  status;
  //post请求头
   private headers = new Headers({'Content-Type': 'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/inviteFriend', JSON.stringify({
      userId: 18264384334,
      type:0
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json();
      this.status=this.items.status;
      console.log(this.status)
    })
  }

  //  点赞方法
  thumbsUp(index) {
    if (this.list[index].thumbCntype == 1) {
      this.list[index].thumbCntype = 2;
      this.presentToast('middle', '点赞成功');
    }
  }

//  点赞成功提示；
  presentToast(position: string, message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: position
    });
    toast.present(toast);
  }

//点击关注的方法
  focus(index) {
    this.list[index].isFollow = 2;
  }

// //  跳转到详情页
  tosquareDetal() {
    this.navCtrl.push(AsquareDetailsPage);
  }

//
// //  显示大图
  showImg() {
    this.navCtrl.push(AsquareImgPage);
  }

}
