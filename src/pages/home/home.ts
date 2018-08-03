import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { todo } from '../../services/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
newItem:string;
todoItems=[];
ProgressItems=[];
CompletedItems=[];

  constructor(public navCtrl: NavController,private toDo:todo) {

  }
  addNewTodo(){
    if(this.newItem !==''){
      // this.todoItems.push(this.newItem);
      this.toDo.addNewTodo(this.newItem);
      this.newItem='';
      this.getAllTodoItems();

    }

  }

  getAllTodoItems(){
    this.todoItems=this.toDo.getAllTodoItems();

  }

  addToProgress(index:number){
   this.toDo.addToProgress(index);

   }
   getAllProgressItems(){
  this.ProgressItems = this.toDo.getAllProgressItems();
}

  }
 



