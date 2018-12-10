import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController) {
    this.initData();
  }

  initData(){
    this.listDatas=[
      {header:"通用插件",items:[
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage}
      ]},
      {header:"仅用于iOS设备",items:[
        {avatar:"assets/imgs/3d-touch.png",title:"3D Touch",detail:"用于iOS设备的插件",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage}
      ]},
      {header:"仅用于Android设备",items:[
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage},
        {avatar:"assets/imgs/avatar-ts-squeeze.png",title:"测试1",detail:"详细内容1",version:"V1.0.1",toPage:HomePage}
      ]}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativePage');
  }

  onSelectItem(item){
    this.navCtrl.push(item.toPage, {title:item.title});
  }
}
