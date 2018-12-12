import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NativePage } from '../pages/native/native';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version'
import { UtilService } from '../providers/UtilService';

import { AppVersionPage } from '../pages/plugin/appVersion/appVersion';
import { BadgePage } from '../pages/plugin/badge/badge';
import { BarcodeScannerPage } from '../pages/plugin/barcodeScanner/barcodeScanner';
import { SimPage } from '../pages/plugin/sim/sim';
import { VibrationPage } from '../pages/plugin/vibration/vibration';

import { ThreeDeeTouchPage } from '../pages/plugin/3dTouch/3dTouch';
import { TouchIDPage } from '../pages/plugin/touchId/touchId';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NativePage,
    ThreeDeeTouchPage,
    AppVersionPage,
    BadgePage,
    BarcodeScannerPage,
    TouchIDPage,
    SimPage,
    VibrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      // mode: 'ios',
      backButtonText: '返回'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NativePage,
    ThreeDeeTouchPage,
    AppVersionPage,
    BadgePage,
    BarcodeScannerPage,
    TouchIDPage,
    SimPage,
    VibrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilService
  ]
})
export class AppModule {}
