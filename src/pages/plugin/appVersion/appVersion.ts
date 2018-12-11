import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'page-appVersion',
  templateUrl: 'appVersion.html',
  providers: [AppVersion]
})
export class AppVersionPage {
  appInfo = {'appName':'','packageName':'','versionCode':'','versionNumber':''};
  constructor(public appVersion: AppVersion) {
    this.initDatas();
  }

  initDatas() {
    let appInfo = this.appInfo;
    this.appVersion.getAppName().then(function(appName:string) {
      appInfo.appName = appName;
    });
    this.appVersion.getPackageName().then(function(packageName:string) {
      appInfo.packageName = packageName;
    });
    this.appVersion.getVersionCode().then(function(versionCode:string) {
      appInfo.versionCode = versionCode;
    });
    this.appVersion.getVersionNumber().then(function(versionNumber:string) {
      appInfo.versionNumber = versionNumber;
    });
    this.appInfo = appInfo;
  }

  ionViewDidLoad() {
    
  }
}
