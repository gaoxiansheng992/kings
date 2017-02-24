import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http}  from '@angular/http';
/*
 Generated class for the RegistrationProtocol page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-registration-protocol',
  templateUrl: 'registration-protocol.html'
})
export class RegistrationProtocolPage {

  items;
  sliders;

  onShow(index) {
    if (this.items[index].show) {
      this.items[index].show = false;
    }
    else {
      this.items[index].show = true;
    }

  }

  constructor(public navCtrl: NavController, public http: Http) {
    //定义数据；
    // http.get('http://192.168.0.102:8100/api').subscribe(response=>this.items=response.json());
    // http.get('assets/people.json').subscribe(response=>this.items=response.json());
    this.sliders = ['assets/slider.png', 'assets/slider.png', 'assets/slider.png', 'assets/slider.png'];
    console.log(document.getElementById("target"))
  }

  // ngOnInit(){
  //   setInterval(()=>{
  //     this.slider.sliderNext(1000,true)
  //   },2000)
  // }
  //返回按钮
  back() {
    this.navCtrl.pop();
  }
}
