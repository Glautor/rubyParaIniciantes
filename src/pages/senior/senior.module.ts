import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeniorPage } from './senior';

@NgModule({
  declarations: [
    SeniorPage,
  ],
  imports: [
    IonicPageModule.forChild(SeniorPage),
  ],
})
export class SeniorPageModule {}
