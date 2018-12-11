

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

@Component({
  selector: 'page-3dTouch',
  templateUrl: '3dTouch.html'
})
export class ThreeDeeTouchPage {

  constructor(public navCtrl: NavController, public threeDeeTouch: ThreeDeeTouch) {


  }
  ionViewDidLoad() {
    this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));

    this.threeDeeTouch.watchForceTouches()
      .subscribe(
        (data: ThreeDeeTouchForceTouch) => {
          console.log('Force touch %' + data.force);
          console.log('Force touch timestamp: ' + data.timestamp);
          console.log('Force touch x: ' + data.x);
          console.log('Force touch y: ' + data.y);
        }
      );


    let actions: Array<ThreeDeeTouchQuickAction> = [
      {
        type: 'share',
        title: '分享',
        subtitle: '分享“Ionic3 Native”',
        iconType: 'Share'
      },
      {
        type: 'checkin',
        title: '记录',
        subtitle: '快速记录',
        iconType: 'Compose'
      },
      {
        type: 'search',
        title: '搜索',
        iconType: 'Search'
      },
      {
        title: '显示收藏夹',
        iconTemplate: 'HeartTemplate'
      }
    ];

    this.threeDeeTouch.configureQuickActions(actions);

    this.threeDeeTouch.onHomeIconPressed().subscribe(
      (payload) => {
        // returns an object that is the button you presed
        console.log('Pressed the ${payload.title} button')
        console.log(payload.type)
      }
    )
  }
}
