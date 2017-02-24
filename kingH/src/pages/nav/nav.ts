import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RegistrationProtocolPage} from '../registration-protocol/registration-protocol'
import {AnalysisListPage} from '../analysis-list/analysis-list'
import {FuxingsengColorPage} from '../fuxingseng-color/fuxingseng-color'
import {FreePage} from '../free/free'
import {HelpPage} from '../help/help'
import {HotPage} from '../hot/hot'
import {AllPage} from '../all/all'
import {InviteListPage} from '../invite-list/invite-list'
import {AsquarePage} from '../asquare/asquare'
import {AsquareImgPage} from '../asquare-img/asquare-img'
import {HistoryLotteryPage} from '../history-lottery/history-lottery'
import {CodeStatisticsPage} from '../code-statistics/code-statistics'
import {HispostPage} from '../hispost/hispost'
import {NowinvitePage} from '../nowinvite/nowinvite'
import {CashAdvancePage} from '../cash-advance/cash-advance'
import {SimulatedbettingGiftPage} from '../simulatedbetting-gift/simulatedbetting-gift'
import {NowProfitRankPage} from '../now-profit-rank/now-profit-rank'
import {DetailsPage} from '../details/details'
import {TestPage} from '../test/test'
import {HeartWaterPage} from '../../pages/heart-water/heart-water'
import {ForumPage} from '../../pages/forum/forum'
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html'
})
export class NavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  go1() {
    this.navCtrl.push(RegistrationProtocolPage)
  }

  go2() {
    this.navCtrl.push(AnalysisListPage)
  }

  go3() {
    this.navCtrl.push(FuxingsengColorPage)
  }

  go4() {
    this.navCtrl.push(FreePage)
  }

  go5() {
    this.navCtrl.push(HelpPage)
  }

  go6() {
    this.navCtrl.push(HotPage)
  }

  go7() {
    this.navCtrl.push(AllPage)
  }

  go8() {
    this.navCtrl.push(InviteListPage)
  }

  go9() {
    this.navCtrl.push(HeartWaterPage)
  }

  go10() {
    this.navCtrl.push(AsquareImgPage)
  }

  go11() {
    this.navCtrl.push(HistoryLotteryPage)
  }

  go12() {
    this.navCtrl.push(CodeStatisticsPage)
  }

  go13() {
    this.navCtrl.push(HispostPage)
  }
  go14() {
    this.navCtrl.push(NowinvitePage)
  }
  go15() {
    this.navCtrl.push(CashAdvancePage)
  }
  go16() {
    this.navCtrl.push(SimulatedbettingGiftPage)
  }
  go17() {
    this.navCtrl.push(NowProfitRankPage)
  }
  go18() {
    this.navCtrl.push(DetailsPage)
  }
  go19() {
    this.navCtrl.push(TestPage)
  }
  go20() {
    this.navCtrl.push(ForumPage)
  }
}
