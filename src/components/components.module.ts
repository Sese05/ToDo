import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
import { CompletedComponent } from './completed/completed';
@NgModule({
	declarations: [DoingListComponent,
    CompletedComponent],
	imports: [IonicModule],
	exports: [DoingListComponent, CompletedComponent]
   																							
})
export class ComponentsModule {}
