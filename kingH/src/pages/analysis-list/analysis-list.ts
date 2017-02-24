import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
/*
 Generated class for the AnalysisList page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-analysis-list',
  templateUrl: 'analysis-list.html'
})
export class AnalysisListPage {

  options;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.add();
  }

  type = 1;
  data = ['号码', '单双', '大小', '生肖', '一肖'];
  //负场数
  ydata1 = [1327, 1917, 2455, 2610, 1719];
  //胜场数
  ydata2 = [327, 1776, 507, 1200, 800];
  //总场数
  ydata3 = [];
  //胜率
  add() {
    for (let i = 0; i < this.ydata1.length; i++) {
      this.ydata3.push(this.ydata1[i] + this.ydata2[i]);
    }
  }

  public chartData = {
    backgroundColor: "transparent",
    "grid": {
      "borderWidth": 0,
      "top": 110,
      "bottom": 95,
      textStyle: {
        color: "#333"
      }
    },
    "legend": {
      x: '50%',
      bottom: '11%',
      textStyle: {
        color: '#333',
      },
      "data": ['总推数', '总胜率']
    },
    "calculable": false,
    "xAxis": [{
      "type": "category",
      "axisLine": {
        lineStyle: {
          color: '#333'
        },
        show: false
      },
      "splitLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitArea": {
        "show": false
      },
      "axisLabel": {
        "interval": 0,

      },
      "data": this.data,
    }],
    "yAxis": [{
      "type": "value",
      "splitLine": {
        "show": false
      },
      "axisLine": {
        lineStyle: {
          color: 'transparent'
        }
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "interval": 0,

      },
      "splitArea": {
        "show": false
      },

    }],
    "series": [{
      "name": "总胜率",
      "type": "bar",
      "stack": "总量",
      "barMaxWidth": 35,
      "barGap": "10%",
      "itemStyle": {
        "normal": {
          "color": "#edba3d",
          "label": {
            "show": true,
            "textStyle": {
              "color": "#fff"
            },
            "position": "insideTop",
            formatter: function (p) {
              let rate = ['20%', '48%', '17%', '31%', '32%'];
              return rate[p.dataIndex];
            }
          }
        }
      },
      "data": this.ydata2
    },
      {
        "name": "总推数",
        "type": "bar",
        "stack": "总量",
        "itemStyle": {
          "normal": {
            "color": "#ffedcc",
            "barBorderRadius": 0,
            "label": {
              "show": true,
              "position": "top",
              "textStyle": {
                "color": "#333"
              },
              formatter: function (p) {
                let ydata3 = [1654, 3693, 2962, 3810, 2519];
                return p.value > 0 ? (ydata3[p.dataIndex]) + '期' : '';
              }
            }
          }
        },
        "data": this.ydata1
      }
    ]
  }
//  标签页切换
  to1() {
    this.type = 1;
  }

  to2() {
    this.type = 2;
  }

  to3() {
    this.type = 3;
  }
}
