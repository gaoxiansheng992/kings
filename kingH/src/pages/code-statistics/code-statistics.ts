import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
/*
 Generated class for the CodeStatistics page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-code-statistics',
  templateUrl: 'code-statistics.html'
})
export class CodeStatisticsPage {
  private headers = new Headers({'Content-Type': 'application/json'});
  codeItems;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.post('http://192.168.0.198:8080/lottery/recommend/specialStatistic', JSON.stringify({
      type: 1,
      num: 2017
    }), {headers: this.headers})
      .toPromise().then(response => {
      console.log(response.json().list);
      this.codeItems = response.json().list;
      for (let i = 0; i < this.codeItems.length; i++) {
        //生肖
        if (this.codeItems[i].animal == '1') {
          this.codeItems[i].animal = '鼠';
        }
        else if (this.codeItems[i].animal == '2') {
          this.codeItems[i].animal = '牛';
        }
        else if (this.codeItems[i].animal == '3') {
          this.codeItems[i].animal = '虎';
        }
        else if (this.codeItems[i].animal == '4') {
          this.codeItems[i].animal = '兔';
        }
        else if (this.codeItems[i].animal == '5') {
          this.codeItems[i].animal = '龙';
        }
        else if (this.codeItems[i].animal == '6') {
          this.codeItems[i].animal = '蛇';
        }
        else if (this.codeItems[i].animal == '7') {
          this.codeItems[i].animal = '马';
        }
        else if (this.codeItems[i].animal == '8') {
          this.codeItems[i].animal = '羊';
        }
        else if (this.codeItems[i].animal == '9') {
          this.codeItems[i].animal = '猴';
        }
        else if (this.codeItems[i].animal == '10') {
          this.codeItems[i].animal = '鸡';
        }
        else if (this.codeItems[i].animal == '11') {
          this.codeItems[i].animal = '狗';
        }
        else {
          this.codeItems[i].animal = '猪';
        }
        // 波色
        if (this.codeItems[i].col == '1') {
          this.codeItems[i].col = '红';
        }
        else if (this.codeItems[i].col == '2') {
          this.codeItems[i].col = '绿';
        }
        else {
          this.codeItems[i].col = '蓝';
        }
        // 单双
        if (this.codeItems[i].doubles == '1') {
          this.codeItems[i].doubles = '单';
        }

        else {
          this.codeItems[i].doubles = '双';
        }
        // 五行
        if (this.codeItems[i].element == '1') {
          this.codeItems[i].element = '金';
        }
        else if (this.codeItems[i].element == '2') {
          this.codeItems[i].element = '木';
        }
        else if (this.codeItems[i].element == '3') {
          this.codeItems[i].element = '水';
        }
        else if (this.codeItems[i].element == '4') {
          this.codeItems[i].element = '火';
        }
        else {
          this.codeItems[i].element = '土';
        }
        // 家禽
        if (this.codeItems[i].wild == '1') {
          this.codeItems[i].wild = '家禽';
        }

        else {
          this.codeItems[i].wild = '野兽';
        }
        // 大小
        if (this.codeItems[i].size == '1') {
          this.codeItems[i].size = '大';
        }

        else {
          this.codeItems[i].size = '小';
        }
        // 合单／合双
        if (this.codeItems[i].compositeDouble % 2 == 0) {
          this.codeItems[i].compositeDouble = '合雙';
        }

        else {
          this.codeItems[i].compositeDouble = '合单';
        }
      }
    })
  }
}
