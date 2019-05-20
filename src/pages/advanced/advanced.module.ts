import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvancedPage } from './advanced';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdvancedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdvancedPage),
  ],
  entryComponents: [
  ]
})
export class AdvancedPageModule {}
