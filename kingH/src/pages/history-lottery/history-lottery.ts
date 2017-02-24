import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the HistoryLottery page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-history-lottery',
  templateUrl: 'history-lottery.html'
})
export class HistoryLotteryPage {
  //历史开奖期数构建json数据
  historyLottery;
  //是否点开详情
  turn;
  items;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/history', JSON.stringify({
      type: 1,
      num: 100
    }), {headers: this.headers})
      .toPromise().then(response => {
      this.historyLottery = response.json().list;
      for (let i = 0; i < this.historyLottery.length; i++) {
        this.historyLottery[i]['open'] = false;
        //便利生肖
        for (let j = 0; j < this.historyLottery[i].aLists.length; j++) {
          if (this.historyLottery[i].aLists[j] == '1') {
            this.historyLottery[i].aLists[j] = '鼠';
          }
          else if (this.historyLottery[i].aLists[j] == '2') {
            this.historyLottery[i].aLists[j] = '牛';
          }
          else if (this.historyLottery[i].aLists[j] == '3') {
            this.historyLottery[i].aLists[j] = '虎';
          }
          else if (this.historyLottery[i].aLists[j] == '4') {
            this.historyLottery[i].aLists[j] = '兔';
          }
          else if (this.historyLottery[i].aLists[j] == '5') {
            this.historyLottery[i].aLists[j] = '龙';
          }
          else if (this.historyLottery[i].aLists[j] == '6') {
            this.historyLottery[i].aLists[j] = '蛇';
          }
          else if (this.historyLottery[i].aLists[j] == '7') {
            this.historyLottery[i].aLists[j] = '马';
          }
          else if (this.historyLottery[i].aLists[j] == '8') {
            this.historyLottery[i].aLists[j] = '羊';
          }
          else if (this.historyLottery[i].aLists[j] == '9') {
            this.historyLottery[i].aLists[j] = '猴';
          }
          else if (this.historyLottery[i].aLists[j] == '10') {
            this.historyLottery[i].aLists[j] = '鸡';
          }
          else if (this.historyLottery[i].aLists[j] == '11') {
            this.historyLottery[i].aLists[j] = '狗';
          }
          else {
            this.historyLottery[i].aLists[j] = '猪';
          }
        }
        //  便利五行
        for (let k = 0; k < this.historyLottery[i].eLists.length; k++) {
          if (this.historyLottery[i].eLists[k] == '1') {
            this.historyLottery[i].eLists[k] = '金';
          }
          else if (this.historyLottery[i].eLists[k] == '2') {
            this.historyLottery[i].eLists[k] = '木';
          }
          else if (this.historyLottery[i].eLists[k] == '3') {
            this.historyLottery[i].eLists[k] = '水';
          }
          else if (this.historyLottery[i].eLists[k] == '4') {
            this.historyLottery[i].eLists[k] = '火';
          }
          else {
            this.historyLottery[i].eLists[k] = '土';
          }
        }
        //  便利波色
        for (let l = 0; l < this.historyLottery[i].cLists.length; l++) {
          if (this.historyLottery[i].cLists[l] == '1') {
            this.historyLottery[i].cLists[l] = '红';
          }
          else if (this.historyLottery[i].cLists[l] == '2') {
            this.historyLottery[i].cLists[l] = '绿';
          }
          else {
            this.historyLottery[i].cLists[l] = '蓝';
          }
        }
        //  便利家禽
        for (let m = 0; m < this.historyLottery[i].wLists.length; m++) {
          if (this.historyLottery[i].wLists[m] == '1') {
            this.historyLottery[i].wLists[m] = '家';
          }
          else {
            this.historyLottery[i].wLists[m] = '野';
          }
        }
        //  便利大小
        for (let n = 0; n < this.historyLottery[i].sLists.length; n++) {
          if (this.historyLottery[i].sLists[n] == '1') {
            this.historyLottery[i].sLists[n] = '大';
          }
          else {
            this.historyLottery[i].sLists[n] = '小';
          }
        }
        //  便利单双
        for (let p = 0; p < this.historyLottery[i].dLists.length; p++) {
          if (this.historyLottery[i].dLists[p] == '1') {
            this.historyLottery[i].dLists[p] = '单';
          }
          else {
            this.historyLottery[i].dLists[p] = '双';
          }
        }
      }
    })
  }
  open(a) {
    if (a.open) {
      a.open = false;
    }
    else {
      for (let i = 0; i < this.historyLottery.length; i++) {
        this.historyLottery[i]['open'] = false;
      }
      a.open = true;
    }
  }
}
