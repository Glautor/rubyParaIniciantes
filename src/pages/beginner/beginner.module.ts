import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeginnerPage } from './beginner';
import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    BeginnerPage,
    ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(BeginnerPage),
  ],
  entryComponents: [
    ExpandableComponent
  ]
})
export class BeginnerPageModule {}
