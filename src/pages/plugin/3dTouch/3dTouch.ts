

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';
import { UtilService } from "../../../providers/UtilService";

@Component({
  selector: 'page-3dTouch',
  templateUrl: '3dTouch.html'
})
export class ThreeDeeTouchPage {

  constructor(public navCtrl: NavController, public threeDeeTouch: ThreeDeeTouch, public utilService: UtilService) {


  }
  ionViewDidLoad() {
    // this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));
    if (!this.threeDeeTouch.isAvailable()) { //检测是否适用
      this.utilService.showAlert('提示', '此设备不支持3D Touch功能');
    } else {
      // Web视图触控监测结果（至少75%的压力）
      this.threeDeeTouch.watchForceTouches().subscribe(
        (data: ThreeDeeTouchForceTouch) => {
          console.log('Force touch %' + data.force);
          console.log('Force touch timestamp: ' + data.timestamp);
          console.log('Force touch x: ' + data.x);
          console.log('Force touch y: ' + data.y);
          this.utilService.showAlert('监测结果',
            '压感触控：%' + data.force +
            '；压感触控时间戳：' + data.timestamp +
            '；压感触控x坐标：' + data.x +
            '；压感触控y坐标：' + data.y
          );
        }
      );

      // 图标3D Touch选项
      let actions: Array<ThreeDeeTouchQuickAction> = [{
        type: 'share',
        title: '分享',
        subtitle: '分享“Ionic3 Native”',
        iconType: 'Share'
      }, {
        type: 'checkin',
        title: '记录',
        subtitle: '快速记录',
        iconType: 'Compose'
      }, {
        type: 'search',
        title: '搜索',
        iconType: 'Search'
      }, {
        title: '显示收藏夹',
        iconTemplate: 'HeartTemplate'
      }];
      this.threeDeeTouch.configureQuickActions(actions);

      // 返回按压的按钮
      this.threeDeeTouch.onHomeIconPressed().subscribe(
        (payload) => {
          console.log('Pressed the ${payload.title} button')
          console.log(payload.type)
          this.utilService.showAlert('图标选项按压结果',
            '选择的按钮：' + payload.title +
            '；选择的类型：' + payload.type);
        }
      )

      // 链接预览功能
      // this.threeDeeTouch.enableLinkPreview();
      // this.threeDeeTouch.disableLinkPreview();
    }

  }
}
