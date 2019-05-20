import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeginnerPage } from './beginner';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BeginnerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BeginnerPage),
  ],
  entryComponents: [
  ]
})
export class BeginnerPageModule {}