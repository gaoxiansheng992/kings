import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-hispost',
  templateUrl: 'hispost.html'
})
export class HispostPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  //帖子列表
  public list;
  //帖子总数
  public bbsCn;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http) {
    this.bbsCn = 36;
    // this.http.post('http://192.168.0.198:8080/lottery/userInfo/myPost', JSON.stringify({
    //   userId: '13669282304'
    // }), {headers: this.headers})
    //   .toPromise().then(response => response.json())
    this.list = [
      {
        id: "123456",
        createDate: "2017-2-2",
        summary: "这是第一个帖子这是第一个帖子这是第一个帖子111这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子",
        forwardCn: 2,
        thumbCn: 2,
        thumbCntype: 1,
        replyCn: 2,
        url: ["assets/hispost1.png", "assets/hispost2.png", "assets/hispost3.png"]
      },
      {
        id: "123456",
        createDate: "2017-2-2",
        summary: "这是第一个帖子这是第一个帖子这是第一个帖子111这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子",
        forwardCn: 332,
        thumbCn: 543,
        thumbCntype: 2,
        replyCn: 5345,
        url: ["assets/hispost1.png", "assets/hispost2.png", "assets/hispost3.png"]
      }, {
        id: "123456",
        createDate: "2017-2-2",
        summary: "这是第一个帖子这是第一个帖子这是第一个帖子111这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子这是第一个帖子",
        forwardCn: 5345,
        thumbCn: 44,
        thumbCntype: 2,
        replyCn: 435,
        url: ["assets/hispost1.png", "assets/hispost2.png", "assets/hispost3.png"]
      }
    ]
  }

  //  点赞方法
  thumbsUp(index) {
    if (this.list[index].thumbCntype == 1) {
      this.list[index].thumbCntype = 2;
      this.presentToast('middle', '点赞成功');
    }
    else {
      this.list[index].thumbCntype = 1;
      this.presentToast('middle', '取消点赞');
    }
  }

//  点赞成功提示；
  presentToast(position: string, message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

}
