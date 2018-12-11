import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { UtilService } from "../../providers/UtilService";
import { HomePage } from '../home/home';

import { AppVersionPage } from '../plugin/appVersion/appVersion';
import { BadgePage } from '../plugin/badge/badge';

import { ThreeDeeTouchPage } from '../plugin/3dTouch/3dTouch';

/**
 * Generated class for the NativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativePage {
  listDatas:any=[];
  constructor(public platform: Platform,public navCtrl: NavController,public utilService:UtilService) {
    this.initData();
  }

  initData(){
    this.listDatas=[
      {header:"通用插件",items:[
        {avatar:"assets/imgs/app-version.png",title:"App Version",detail:"平台：Android、iOS、Windows",version:"V0.1.9",platform:"all",toPage:AppVersionPage},
        {avatar:"assets/imgs/avatar-ts-barbie.png",title:"Badge",detail:"平台：Android、Browser、iOS、Windows",version:"V0.8.8",platform:"all",toPage:BadgePage},
        {avatar:"assets/imgs/avatar-ts-bopeep.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",platform:"all",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-bullseye.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",platform:"all",toPage:HomePage}
      ]},
      {header:"仅用于iOS设备",items:[
        {avatar:"assets/imgs/3d-touch.png",title:"3D Touch",detail:"只适用iOS设备",version:"V1.3.5",platform:"ios",toPage:ThreeDeeTouchPage},
        {avatar:"assets/imgs/avatar-ts-buzz.png",title:"测试1",detail:"只适用iOS设备",version:"V1.0.1",platform:"ios",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-hamm.png",title:"测试1",detail:"只适用iOS设备",version:"V1.0.1",platform:"ios",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-jessie.png",title:"测试1",detail:"只适用iOS设备",version:"V1.0.1",platform:"ios",toPage:HomePage}
      ]},
      {header:"仅用于Android设备",items:[
        {avatar:"assets/imgs/avatar-ts-rex.png",title:"测试1",detail:"只适用Android设备",version:"V1.0.1",platform:"android",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-sarge.png",title:"测试1",detail:"只适用Android设备",version:"V1.0.1",platform:"android",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-slinky.png",title:"测试1",detail:"只适用Android设备",version:"V1.0.1",platform:"android",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-woody.png",title:"测试1",detail:"只适用Android设备",version:"V1.0.1",platform:"android",toPage:HomePage}
      ]}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativePage');
  }

  onSelectItem(item) {
    if (this.platform.is('ios') && item.platform=='android') {
      this.utilService.showAlert('提示','此插件只适用于Android设备！');
    } else if (this.platform.is('android') && item.platform=='ios'){
      this.utilService.showAlert('提示','此插件只适用于iOS设备！');
    } else {
      this.navCtrl.push(item.toPage, {title:item.title});
    }
  }
}
