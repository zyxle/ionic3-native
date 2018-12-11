import { Injectable } from '@angular/core';
import { LoadingController, ToastController,AlertController } from "ionic-angular";

/*
  Generated class for the UtilServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilService {

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController,public alertCtrl:AlertController) {
    console.log('Hello UtilServiceProvider Provider');
  }

  showAlert(title,subTitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['确定'],
    });
    alert.present();
  }

  showAlertHandler(title,subTitle,handler){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{
        text:'确定',
        handler:()=>{
          handler
        }}]
    });
    alert.present();
  }

}
