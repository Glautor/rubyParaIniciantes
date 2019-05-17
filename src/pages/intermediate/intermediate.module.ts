import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntermediatePage } from './intermediate';
import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    IntermediatePage,
    ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(IntermediatePage),
  ],
  entryComponents: [ExpandableComponent]
})
export class IntermediatePageModule {}
