import { Component } from '@angular/core';
import { TouchID } from '@ionic-native/touch-id';

/**
 * Generated class for the TouchIDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-touchId',
  templateUrl: 'touchId.html',
  providers: [TouchID]
})
export class TouchIDPage {
  isAvailable = '尚未验证';
  didChange = '尚未验证';
  verifyState = '尚未验证';
  constructor(public touchId: TouchID) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouchIDPage');
    this.touchId.isAvailable().then(
      res => {
        console.log('TouchID is available!');
        this.isAvailable = '设备可用';
      },
      err => {
        console.error('TouchID is not available', err);
        this.isAvailable = '设备不可用';
      }
    );
    this.touchId.didFingerprintDatabaseChange().then(
      res => {
        if (res) {
          this.didChange = 'Touch ID 已变更';
        } else {
          this.didChange = 'Touch ID 未变更';
        }
      },
      err => {
        console.error('TouchID is not available', err);
        this.didChange = '检测出错';
      }
    );
  }

  verify() {
    this.touchId.verifyFingerprint('按Home指纹解锁').then(
      res => {
        console.log('Ok', res);
        this.verifyState = '验证成功';
      },
      err => {
        console.error('Error', err);
        this.verifyState = '验证失败，code：' + JSON.stringify(err);
      }
    );
  }

  verifyPassword() {
    this.touchId.verifyFingerprintWithCustomPasswordFallback('按Home指纹解锁').then(
      res => {
        console.log('Ok', res);
        this.verifyState = '验证成功';
      },
      err => {
        console.error('Error', err);
        this.verifyState = '验证失败，code：' + JSON.stringify(err);
      }
    );
  }

  verifyPasswordAndLabel() {
    this.touchId.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel('按Home指纹解锁', '验证登录密码').then(
      res => {
        console.log('Ok', res);
        this.verifyState = '验证成功';
      },
      err => {
        console.error('Error', err);
        this.verifyState = '验证失败，code：' + JSON.stringify(err);
      }
    );
  }

}
