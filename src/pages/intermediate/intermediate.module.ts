import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntermediatePage } from './intermediate';

@NgModule({
  declarations: [
    IntermediatePage,
  ],
  imports: [
    IonicPageModule.forChild(IntermediatePage),
  ],
})
export class IntermediatePageModule {}
