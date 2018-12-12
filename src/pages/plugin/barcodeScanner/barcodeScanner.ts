import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-barcodeScanner',
  templateUrl: 'barcodeScanner.html',
  providers: [BarcodeScanner]
})
export class BarcodeScannerPage {
  scanData = '暂无内容';
  scanError = '暂无错误';
  constructor(public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanData = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
      this.scanError = JSON.stringify(err);
    });
  }
  // 前置摄像头扫码
  preferFrontCamera() {
    this.barcodeScanner.scan({
      preferFrontCamera: true
    }).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanData = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
      this.scanError = JSON.stringify(err);
    });
  }
  // 显示翻转按钮扫码
  showFlipCameraButton() {
    this.barcodeScanner.scan({
      showFlipCameraButton: true
    }).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanData = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
      this.scanError = JSON.stringify(err);
    });
  }
  // 显示手电筒按钮扫码
  showTorchButton() {
    this.barcodeScanner.scan({
      showTorchButton: true
    }).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scanData = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
      this.scanError = JSON.stringify(err);
    });
  }
}
