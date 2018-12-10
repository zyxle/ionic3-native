import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public appVersion: AppVersion) {

  }
  ionViewDidLoad() {
    // alert('name');
    // this.appVersion.getVersionNumber().then(function(versionNumber) {
    //   alert(versionNumber);
    // });
    // alert(' getAppName:'+this.appVersion.getAppName()+
    // ' getPackageName:'+JSON.stringify(this.appVersion.getAppName())+
    // ' getPackageName:'+this.appVersion.getPackageName()+
    // ' getVersionCode:'+this.appVersion.getVersionCode()+
    // ' getVersionNumber:'+JSON.stringify(this.appVersion.getVersionNumber()));
  }

}
