import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {NavPage} from '../pages/nav/nav'
import {RegistrationProtocolPage} from '../pages/registration-protocol/registration-protocol'
import {AnalysisListPage} from '../pages/analysis-list/analysis-list'
import {FuxingsengColorPage} from '../pages/fuxingseng-color/fuxingseng-color'
//导入图表库
import {Ng2Echarts} from 'ng2-echarts';
import {FreePage} from '../pages/free/free'
import {HelpPage} from '../pages/help/help'
import {HotPage} from '../pages/hot/hot'
import {AllPage} from '../pages/all/all'
import {InviteListPage} from '../pages/invite-list/invite-list'
import {ShareRulePage} from '../pages/share-rule/share-rule'
//心水广场
import {AsquarePage} from '../pages/asquare/asquare'
import {AsquareDetailsPage} from '../pages/asquare-details/asquare-details'
import {AsquareImgPage} from '../pages/asquare-img/asquare-img'
import {ReportProblemsPage} from '../pages/report-problems/report-problems'
import {GuessDetialsPage} from '../pages/guess-detials/guess-detials'
import {HistoryLotteryPage} from '../pages/history-lottery/history-lottery'
//特码统计
import {CodeStatisticsPage} from '../pages/code-statistics/code-statistics'
import {HispostPage} from '../pages/hispost/hispost'
import {NowinvitePage} from '../pages/nowinvite/nowinvite'
//提现进度
import {CashAdvancePage} from '../pages/cash-advance/cash-advance'
import {SimulatedbettingGiftPage} from '../pages/simulatedbetting-gift/simulatedbetting-gift'
import {SimulatedDetailPage} from '../pages/simulated-detail/simulated-detail'
import {NowProfitRankPage} from '../pages/now-profit-rank/now-profit-rank'
import {SendPage} from '../pages/send/send'
import {RechargePage} from '../pages/recharge/recharge'
import {RecommendationAcerPage} from '../pages/recommendation-acer/recommendation-acer'
import {MyrecommendationAcerPage} from '../pages/myrecommendation-acer/myrecommendation-acer'
import {GoldeXchangePage} from '../pages/golde-xchange/golde-xchange'
import {TreePage} from '../pages/tree/tree'
import {MoneyexchangePage} from '../pages/moneyexchange/moneyexchange'
import {MyprofitPage} from '../pages/myprofit/myprofit'
import {GiftexchangePage} from '../pages/giftexchange/giftexchange'
import {InvitefriendsDetailsPage} from '../pages/invitefriends-details/invitefriends-details'
import {RecommendationDiscountPage} from '../pages/recommendation-discount/recommendation-discount'
import {MyrecommendationDiscountPage} from '../pages/myrecommendation-discount/myrecommendation-discount'
import {DetailsPage} from '../pages/details/details'
import {TestPage} from '../pages/test/test'
//心水论坛
import {ForumPage} from '../pages/forum/forum'
//心水广场－－
import {HeartWaterPage} from '../pages/heart-water/heart-water'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NavPage,
    RegistrationProtocolPage,
    AnalysisListPage,
    Ng2Echarts,
    FuxingsengColorPage,
    FreePage,
    HelpPage,
    HotPage,
    AllPage,
    InviteListPage,
    ShareRulePage,
    AsquarePage,
    AsquareDetailsPage,
    AsquareImgPage,
    ReportProblemsPage,
    GuessDetialsPage,
    HistoryLotteryPage,
    CodeStatisticsPage,
    HispostPage,
    NowinvitePage,
    CashAdvancePage,
    SimulatedbettingGiftPage,
    SimulatedDetailPage,
    NowProfitRankPage,
    SendPage,
    RechargePage,
    RecommendationAcerPage,
    MyrecommendationAcerPage,
    GoldeXchangePage,
    TreePage,
    MoneyexchangePage,
    MyprofitPage,
    GiftexchangePage,
    InvitefriendsDetailsPage,
    RecommendationDiscountPage,
    MyrecommendationDiscountPage,
    DetailsPage,
    TestPage,
    ForumPage,
    HeartWaterPage

  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [{component: HomePage, name: 'Home', segment: 'home'},
        {component: NavPage, name: 'Nav', segment: 'nav'},
        {component: RegistrationProtocolPage, name: 'RegistrationProtocol', segment: 'registration'},
        {component: AnalysisListPage, name: 'AnalysisList', segment: 'analysisList'},
        {component: FuxingsengColorPage, name: 'FuxingsengColor', segment: 'fuxingsengColor'},
        {component: FreePage, name: 'free', segment: 'free'},
        {component: HelpPage, name: 'Help', segment: 'help'},
        {component: HotPage, name: 'Hot', segment: 'hot'},
        {component: AllPage, name: 'All', segment: 'all'},
        {component: InviteListPage, name: 'InviteList', segment: 'inviteList'},
        {component: ShareRulePage, name: 'ShareRule', segment: 'shareRule'},
        {component: AsquarePage, name: 'Asquare', segment: 'asquare'},
        {component: AsquareDetailsPage, name: 'AsquareDetails', segment: 'asquareDetails'},
        {component: AsquareImgPage, name: 'AsquareImg', segment: 'asquareImg'},
        {component: ReportProblemsPage, name: 'ReportProblems', segment: 'reportProblems'},
        {component: GuessDetialsPage, name: 'GuessDetials', segment: 'guessDetials'},
        {component: HistoryLotteryPage, name: 'HistoryLottery', segment: 'historyLottery'},
        {component: CodeStatisticsPage, name: 'CodeStatistics', segment: 'codeStatistics'},
        {component: HispostPage, name: 'Hispost', segment: 'hispost'},
        {component: NowinvitePage, name: 'Nowinvite', segment: 'nowinvite'},
        {component: CashAdvancePage, name: 'CashAdvance', segment: 'cashAdvance'},
        {component: SimulatedbettingGiftPage, name: 'SimulatedbettingGift', segment: 'simulatedbetting'},
        {component: SimulatedDetailPage, name: 'SimulatedDetail', segment: 'simulatedDetail'},
        {component: NowProfitRankPage, name: 'NowProfitRank', segment: 'nowProfitRank'},
        {component: SendPage, name: 'Send', segment: 'send'},
        {component: RechargePage, name: 'Recharge', segment: 'recharge'},
        {component: RecommendationAcerPage, name: 'RecommendationAcer', segment: 'recommendationAcer'},
        {component: MyrecommendationAcerPage, name: 'MyrecommendationAcer', segment: 'myrecommendationAcer'},
        {component: GoldeXchangePage, name: 'GoldeXchange', segment: 'goldeXchange'},
        {component: TreePage, name: 'Tree', segment: 'tree'},
        {component: MoneyexchangePage, name: 'Moneyexchange', segment: 'moneyexchange'},
        {component: MyprofitPage, name: 'Myprofit', segment: 'myprofit'},
        {component: GiftexchangePage, name: 'Giftexchange', segment: 'giftexchange'},
        {component: InvitefriendsDetailsPage, name: 'InvitefriendsDetails', segment: 'invitefriendsDetails'},
        {component: RecommendationDiscountPage, name: 'RecommendationDiscount', segment: 'recommendationDiscount'},
        {
          component: MyrecommendationDiscountPage,
          name: 'MyrecommendationDiscount',
          segment: 'myrecommendationDiscount'
        },
        {component: DetailsPage, name: 'Details', segment: 'details'},
        {component: TestPage, name: 'Test', segment: 'test'},
        {component: ForumPage, name: 'Forum', segment: 'forum'},
        {component: HeartWaterPage, name: 'HeartWater', segment: 'heartWater'},
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NavPage,
    RegistrationProtocolPage,
    AnalysisListPage,
    FuxingsengColorPage,
    FreePage,
    HelpPage,
    HotPage,
    AllPage,
    InviteListPage,
    ShareRulePage,
    AsquarePage,
    AsquareDetailsPage,
    AsquareImgPage,
    ReportProblemsPage,
    GuessDetialsPage,
    HistoryLotteryPage,
    CodeStatisticsPage,
    HispostPage,
    NowinvitePage,
    CashAdvancePage,
    SimulatedbettingGiftPage,
    SimulatedDetailPage,
    NowProfitRankPage,
    SendPage,
    RechargePage,
    RecommendationAcerPage,
    MyrecommendationAcerPage,
    GoldeXchangePage,
    TreePage,
    MoneyexchangePage,
    MyprofitPage,
    GiftexchangePage,
    InvitefriendsDetailsPage,
    RecommendationDiscountPage,
    MyrecommendationDiscountPage,
    DetailsPage,
    TestPage,
    ForumPage,
    HeartWaterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
