import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvancedPage } from './advanced';

@NgModule({
  declarations: [
    AdvancedPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvancedPage),
  ],
})
export class AdvancedPageModule {}
