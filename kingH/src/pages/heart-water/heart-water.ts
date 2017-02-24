import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
//导入详情页
import {AsquareDetailsPage} from '../asquare-details/asquare-details'
@Component({
  selector: 'page-heart-water',
  templateUrl: 'heart-water.html'
})
export class HeartWaterPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  //对象
  items;
  //列表
  list;
  //轮播图
  slider;
  //点赞状态
  isThumbStatus;
  // 等级定义
  cashLv = ['', 'assets/grade/hv1.png',
    'assets/grade/hv2.png',
    'assets/grade/hv3.png',
    'assets/grade/hv4.png',
    'assets/grade/hv5.png',
    'assets/grade/hv6.png',
    'assets/grade/hv7.png',
    'assets/grade/hv8.png'];
  communityLv = ['', 'assets/grade/lv1.png',
    'assets/grade/lv2.png',
    'assets/grade/lv3.png',
    'assets/grade/lv4.png',
    'assets/grade/lv5.png',
    'assets/grade/lv6.png',
    'assets/grade/lv7.png',
    'assets/grade/lv8.png'];
  expertLv = ['', 'assets/grade/zv1.png',
    'assets/grade/zv2.png',
    'assets/grade/zv3.png',
    'assets/grade/zv4.png',
    'assets/grade/zv5.png',
    'assets/grade/zv6.png',
    'assets/grade/zv7.png',
    'assets/grade/zv8.png'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/community/home', JSON.stringify({
      userId: 13669282304,
      pageSize: 30,
      pageNo: 1
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.items = response.json();
      this.list = this.items.list;
      console.log(response.json())
      this.slider = this.items.carsousel;
    })
  }

  //  点赞方法
  thumbsUp(s, item) {
    console.log(item.id)
    this.http.post('http://192.168.0.198:8080/lottery/guess/thumbup', JSON.stringify({
      userId: 13669282304,
      id: item.id,
      type: 1
    }), {headers: this.headers}).toPromise().then(response => {
      this.isThumbStatus = response.json().status;
      console.log(response.json().status);
      if (this.isThumbStatus == 200) {
        this.list[s].isThumb = 2;
        this.list[s].thumbCn++;
        this.presentToast('middle', '点赞成功');
      }
    })
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
  focus(index, item) {
    this.http.post('http://192.168.0.198:8080/lottery/userInfo/follow', JSON.stringify({
      userId: 13669282304,
      followId: item.userId
    }), {headers: this.headers}).toPromise().then(response => {
      this.isThumbStatus = response.json().status;
      console.log(response.json());
      if (response.json().status == 200) {
        this.list[index].isFollow = 2;
      }
    })
  }

  //  跳转到详情页
  tosquareDetal(id) {
    this.navCtrl.push(AsquareDetailsPage, {id: id});
  }

}
