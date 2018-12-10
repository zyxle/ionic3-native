import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { NativePage } from '../native/native';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NativePage;
  tab3Root = AboutPage;

  constructor() {

  }
}
