import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'ComponentConfigurationPage';

  pages: Array<{title: string, iconName: string, subMenus: Array<{ name: string, component: string}>}>;
  selectedMainMenu: {title: string, iconName: string, subMenus: Array<{ name: string, component: string}>}
  selectedMainMenuIndex: any;
  selectedSubMenuIndex: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Menu1', iconName: 'nex-graduation-cap', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu2', iconName: 'nex-user', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu3', iconName: 'nex-calendar', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Curriculum', iconName: 'nex-book', subMenus: [{ name: 'Mark entry', component: 'UnderDevelopmentPage'},
      { name: 'Rule Setup', component: 'UnderDevelopmentPage'}, { name: 'Component Configuration', component: 'ComponentConfigurationPage'},
      { name: 'Copy Template', component: 'UnderDevelopmentPage'}, { name: 'Mark Upload', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu4', iconName: 'nex-clock2', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu5', iconName: 'nex-equalizer   ', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu6', iconName: 'nex-clock2', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
      { title: 'Menu7', iconName: 'nex-loop2 ', subMenus: [{ name: 'Under Development', component: 'UnderDevelopmentPage'}] },
    ];
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page, { parentName: this.selectedMainMenu.title, pageName: this.selectedMainMenu.subMenus[this.selectedSubMenuIndex].name});
  }
}
