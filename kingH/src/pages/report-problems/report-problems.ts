import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import {AsquareDetailsPage} from '../asquare-details/asquare-details'

/*
 Generated class for the ReportProblems page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-report-problems',
  templateUrl: 'report-problems.html'
})
export class ReportProblemsPage {
  langs;
  langForm;
  binding;
  //当前举报帖子id
  reportId;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reportId=navParams.data.id;
    this.langForm = new FormGroup({
      'langs': new FormControl({value: 'golong', disabled: false})
    })
  }

  //返回按钮
  back() {
    this.navCtrl.pop();
  }

  doSubmit(event) {
    console.log('submitting', this.langForm.value);
    event.preventDefault();
    // this.navCtrl.push(AsquareDetailsPage,{reportId:this.reportId});
  }

}
