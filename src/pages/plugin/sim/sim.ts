import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim';

@Component({
  selector: 'page-sim',
  templateUrl: 'sim.html',
  providers: [Sim]
})
export class SimPage {
  simInfo = '尚未获取';
  hasPermission = '尚未测试';
  requestPermission = '尚未请求';
  constructor(public sim: Sim) {

  }

  ionViewDidLoad() {

  }
  
  getSimInfo() {
    this.sim.getSimInfo().then(
      (info) => {
        console.log('Sim info: ', info);
        this.simInfo = JSON.stringify(info);
      },
      (err) => {
        console.log('Unable to get sim info: ', err);
        this.simInfo = '不能获取sim卡信息：'+JSON.stringify(err);
      }
    );
  }
  
  hasReadPermission() {
    this.sim.hasReadPermission().then(
      (info) => {
        console.log('获取权限情况: ', info);
        this.hasPermission = JSON.stringify(info);
      }
    );
  }
  
  requestReadPermission() {
    this.sim.requestReadPermission().then(
      () => {
        console.log('获取权限成功');
        this.requestPermission = '获取权限成功';
      },
      () => {
        console.log('获取权限被拒绝');
        this.requestPermission = '获取权限被拒绝';
      }
    );
  }
}
