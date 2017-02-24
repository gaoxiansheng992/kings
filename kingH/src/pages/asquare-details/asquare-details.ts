import {Component} from '@angular/core';
import {NavController, NavParams, ToastController, ActionSheetController} from 'ionic-angular';
import {ReportProblemsPage} from '../report-problems/report-problems'
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the AsquareDetails page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-asquare-details',
  templateUrl: 'asquare-details.html'
})
export class AsquareDetailsPage {
  private headers = new Headers({'Content-Type': 'application/json'});
//  当前帖子的id
  currentId;
//  当前帖子的用户id
  currentUserId;
//评论列表
  list;
  list1;
  //二级评论
  secondList;
  secondList1;
//点击一级评论弹出窗状态
  replyState: boolean;
  isMe: number;
  //点击回复底部回复窗口；
  inputstate: boolean;
  //拉黑弹出框
  pullState: boolean;
  //当前帖子详情
  detail: Object[] = [];
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public actionsheetCtrl: ActionSheetController, public http: Http) {
    this.currentId = navParams.data.id;
    if (this.currentId) {
      this.http.post('http://192.168.0.198:8080/lottery/community/postDetail', JSON.stringify({
        userId: 13669282304,
        id: this.currentId
      }), {headers: this.headers})
        .toPromise().then(response => {
        this.detail.push(response.json().picInfo)
        this.currentUserId = response.json().picInfo.userId;
        this.list1 = response.json().list;
      })
    }
    else{
      this.http.post('http://192.168.0.198:8080/lottery/community/postDetail', JSON.stringify({
        userId: 13669282304,
        id: navParams.data.reportId
      }), {headers: this.headers})
        .toPromise().then(response => {
        this.detail.push(response.json().picInfo)
        this.currentUserId = response.json().picInfo.userId;
        this.list1 = response.json().list;
      })
    }
    this.pullState = false;
    this.list = [
      {
        'id': '13669282304',
        'usePic': 'assets/photo.png',
        'userId': '13669282304',
        'nickName': '彩资讯小秘书',
        'fansCn': 223,
        'followCn': 666,
        'expertLv': 'assets/v1.png',
        'communityLv': 'assets/v2.png',
        'cashLv': 'assets/v4.png',
        'createDate': '9:19',
        'isFollow': 1,
        'summary': '[新手上路]133期龙马精神公式①码、3中3（准到你自己不敢信）只看楼主',
        'url': ['assets/squareList.png', 'assets/squareList.png', 'assets/squareList.png'],
        'forwardCn': 543,
        'thumbCn': 323,
        'thumbCntype': 1,
        'replyCn': 543
      }
    ];
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
      }
    ];
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
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

//  分享方法
  postShare(index) {
    console.log(index);
    if (index != '13669282304') {
      let actionSheet = this.actionsheetCtrl.create({
        buttons: [
          {
            text: '举报',
            handler: () => {
              this.report();
            }
          }, {
            text: '拉黑',
            handler: () => {
              console.log('Archive clicked');
              this.pullFunction();
            }
          }, {
            text: '分享',
            handler: () => {
              console.log('Archive clicked');
            }
          }, {
            text: '取消',
            role: '取消',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
    else {
      let actionSheettwo = this.actionsheetCtrl.create({
        buttons: [
          {
            text: '分享',
            handler: () => {
              console.log('Destructive clicked');
            }
          }, {
            text: '删除',
            handler: () => {
              console.log('Archive clicked');
            }
          }, {
            text: '取消',
            role: '取消',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheettwo.present();
    }
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
    this.navCtrl.push(ReportProblemsPage, {id: this.currentId});
  }

//  取消
  qx() {
    this.replyState = false;
  }

  // 拉黑取消
  pullresit() {
    this.pullState = false;
  }

  pullsubmit() {
    this.pullState = false;
  }

//  拉黑方法
  pullFunction() {
    this.pullState = true;
  }

//  删除
  delete() {
    this.replyState = false;
  }
}
