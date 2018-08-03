import { todo } from './../../services/todo.service';
import { Component } from '@angular/core';

/**
 * Generated class for the DoingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {

  text:string;
  ProgressItems=[];
  CompletedItems=[];

  constructor(private toDo:todo) {

    this.ProgressItems = this.toDo.getAllProgressItems();
    console.log(this.ProgressItems);
  }
AddCompletedItems(index:number){
  this.toDo.AddCompletedItems(index);
}

}