import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentConfigurationPage } from './component-configuration';

@NgModule({
  declarations: [
    ComponentConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(ComponentConfigurationPage),
  ],
})
export class ComponentConfigurationPageModule {}
