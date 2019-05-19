import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntermediatePage } from './intermediate';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IntermediatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IntermediatePage),
  ],
})
export class IntermediatePageModule {}
