import { todo } from './../../services/todo.service';
import { Component } from '@angular/core';

/**
 * Generated class for the CompletedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'completed',
  templateUrl: 'completed.html'
})
export class CompletedComponent {

  text: string;
  completedItems=[];

  constructor(private toDo:todo) {
   
    this.completedItems = this.toDo.getAllCompleted();
    console.log(this.completedItems);
  }
AddCompletedItems(index:number){
  this.toDo.AddCompletedItems(index);
}

}
