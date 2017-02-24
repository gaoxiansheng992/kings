import {Component, trigger, state, style, animate, transition} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
  animations: [//动画的内容
    trigger('visibilityChanged', [
      //  state控制不同状态下对应的不同的样式
      state('right', style({transform: 'rotate(0deg)'})),
      state('down', style({transform: 'rotate(90deg)'})),
      transition('right=>down', animate('300ms')),
      transition('down=>right', animate('200ms')),
    ])
  ]
})
export class HelpPage {
  items;
  dre;
  show(index) {
    //点击时如果当前项展开，则收起；
    if (this.items[index].show) {
      this.items[index].show = false;
      this.items[index].visibility = 'right';
    }
    // 否则，展开，同时其余项目收起；
    else {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].show = false;
        this.items[i].visibility = 'right';
      }
      this.items[index].show = true;
      this.items[index].visibility = 'down';
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dre = true;
    this.items = [
      {
        'visibility': 'right',
        'show': false,
        'question': '什么是元宝？',
        'anwsers': '元宝是彩资讯的一种虚拟货币，通过买家消费元宝查看专家发布的推荐号码等，消费的元宝会转化成专家的收入，专家的收入叫做元宝，元宝可以用于兑现金。'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '心水广场是做什么的？',
        'anwsers': '心水广场是彩民沟通以及发表个人文章，与社区其他彩民沟通交流同时也申请成为心水社区大师（每一名彩民都可以升级为心水社区大师但必须有丰富的经验和判断力）来推荐牛人号码与彩民分享，分享时：有免费与收取一定元宝俩种展现方式来分享，从中获得推荐号码所得到的一定利润回馈。'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '如何提款?',
        'anwsers': '您可以在个人中心的提款页面申请提款（银行卡和支付宝提款）。申请提款后需要一定审核时间，请您耐心等候！审核通过时提款状态会显示成成功；相反如果审核不通过，提款状态就会显示为提款失败，这时您可以通过点击申请进度进入提现进度页面查看订单状态，点击回复按钮可以与客服在沟通，解决问题。'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '如何充值?',
        'anwsers': '您可以在个人中心页面，点击充值进入充值页面，可以通过支付宝、微信、ApplePay（IOS）进行充值。还可以通过人工在线方式完成充值。元宝的比例？1元人民币=1元宝'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '走势统计有哪些？',
        'anwsers': ' 走势统计里包含多种数据（查询助手、六合统计、特码统计、号码走势、号码遗漏、号码冷热、五行分布、生肖分布、波色分布、五行冷热、生肖冷热、波色冷热、走势头、走势尾、属性对照）参考，以表格、折线图、柱状图、饼状图等多种方式呈现，供大家分析研究提高中奖率。'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '我是新手如何成为专家赚取元宝？',
        'anwsers': '用户注册成功后，在心水推荐页，点击推荐进入我要推荐，通过推荐号码、生肖、大小、单双、一肖等，之前推荐期数共计达到12期，就成功升级为专家。升级为专家就可以通过连胜来提高推荐码的价值，专家将获得专属的紫色图标；'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '如何查询账户消费？',
        'anwsers': '您可以在我的个人中心，点击账户明细，查看收支情况。账户明细内分为4类：1>元宝  2>金币  3>优惠券  4>贡献值'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '等级是什么，都有哪些，怎么升级呢？',
        'anwsers': '用户在使用本软件过程中产生对数据的积累，会获取等级图标，等级最高8级。目前等级图标分为3类：专家等级、社区等级、消费等级；专家等级：通过连胜次数、推荐、胜场、查看数等获取经验值，经验值总计达到一定量就会升级；社区等级：通过登录软件、点赞（双向100次）、分享（双向）、阅览帖子、发帖等获取经验值，经验值总计达到一定量就会升级；消费等级：用户每笔消费都能获取到相应的经验值,经验值总计达到一定量就会升级；'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '优惠券怎么获得，怎么使用？',
        'anwsers': '您可以在用户中心，点击领取优惠券，进入邀请好友页面，点击邀请好友分享软件，您的好友成功注册您分享到的软件，您即可获取到优惠券。优惠券可以替代元宝，在心水推荐内查看大神推荐的号，优惠券可以在个人中心内查看余额；'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '贡献值怎么获得？',
        'anwsers': '您通过专家推荐的号，用户通过使用优惠券查看了您的推荐，您将获得到相应的贡献值；'
      },
      {
        'visibility': 'right',
        'show': false,
        'question': '模拟投注怎么玩？',
        'anwsers': '如果您没有金币，首先通过福星送财或者兑换金币，可以获取到金币。点击模拟投注，选择玩法类型、玩法位置、筹码比率，点击自己选择的码号，提交确认结果，完成投注。'
      }
    ]
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

}
