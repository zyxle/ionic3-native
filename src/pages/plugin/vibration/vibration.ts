import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { UtilService } from "../../../providers/UtilService";

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
  providers: [Vibration]
})
export class VibrationPage {
  constructor(public vibration: Vibration, public utilService: UtilService) {

  }

  ionViewDidLoad() {

  }
  // 设备振动
  vibrationDevice() {
    // Vibrate the device for a second
    // Duration is ignored on iOS.
    this.vibration.vibrate(1000);
  }
  // 自定义振动
  vibrationAndPauseDevice() {
    // Vibrate 0.5 seconds
    // Pause for 0.5 second
    // Vibrate for 0.5 seconds
    // Patterns work on Android and Windows only
    this.vibration.vibrate([500, 500, 500]);
  }
  // 停止振动
  stopVibration() {
    // Stop any current vibrations immediately
    // Works on Android and Windows only
    this.vibration.vibrate(0);
  }
}
