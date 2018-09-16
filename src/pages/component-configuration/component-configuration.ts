import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform } from 'ionic-angular';

/**
 * Generated class for the ComponentConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-component-configuration',
  templateUrl: 'component-configuration.html',
})
export class ComponentConfigurationPage implements OnInit {
  mainMenuOpened = false;
  isOnAndroid = false;
  isOnDesktop = false;
  isOnMobileWeb = false;
  page: { parentName: string, pageName: string };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public platform: Platform) {
    this.isOnAndroid = platform.is('android');
    this.isOnDesktop = platform.is('core');
    this.isOnMobileWeb = platform.is('mobileweb');
  }

  ngOnInit(): void {
    this.page = {
      parentName: this.navParams.get('parentName'),
      pageName: this.navParams.get('pageName')
    }
  }

    ionViewDidLoad() {
      console.log(this.isOnAndroid + '  android   ' +
        this.isOnDesktop + '   core   ' +
        this.isOnMobileWeb + '   mobileweb')
    }


  }
