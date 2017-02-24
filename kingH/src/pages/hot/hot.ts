import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {GuessDetialsPage} from '../guess-detials/guess-detials'
import {Http, Response, RequestOptions, URLSearchParams}  from '@angular/http';

@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html'
})
export class HotPage {

  isAndroid: boolean = false;
  //全部项内容
  items: string[];
  //热门中列表项；
  indexItems = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public http: Http) {
    this.isAndroid = platform.is('android');
    this.initializeItems();
    //热门中列表项；
    http.get('assets/guess.json').subscribe(response => this.indexItems = response.json());
  }

  onLike(index) {
    // 已经点赞
    this.indexItems[index].likeState = 2;
  }

  //点击回复
  onRecommend(item) {
    this.navCtrl.push(GuessDetialsPage, {item: item});
  }

  initializeItems() {
    this.items = [
      '败家',
      '今日头条',
      '败家讲台',
      '新闻',
      '时评',
      '微信',
      '预警',
      'eeee',
      'ght'
    ]
  }

//  下拉刷新
  doRefresh(refresher) {
    console.log('下拉刷新开始', refresher);
    setTimeout(() => {
      console.log('下拉刷新end');
      //参数传递
      let params = new URLSearchParams();
      params.set('name', 'gyy');
      let options = new RequestOptions({search: params})
      this.http.get('assets/guess_index.json', options).subscribe(response => this.indexItems = response.json());
      refresher.complete();
    }, 2000)
  }

  //加载更多
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 9; i > 5; i--) {
        this.indexItems.push({
          "titleNumber": "第13" + i + "期",
          "titleContent": "是否喜欢",
          "bigImg": "assets/pic_large.png",
          "like": 29,
          "likeState": 1,
          "commond": 400
        })
      }
      infiniteScroll.complete();
    }, 2000);
  }
}
