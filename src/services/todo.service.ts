import { Injectable } from "../../node_modules/@angular/core";

@Injectable()

export class todo{
    todoItems=[];
    progressItems=[];
    completedItems=[];

    addNewTodo(newItem:string){
        this.todoItems.push(newItem);

    }
    getAllTodoItems():any{
        return this.todoItems;
    }
    removeTodoTask(index:number){
        this.todoItems.splice(index,1);
    }

    addToProgress(index:number){
        this.progressItems.push(this.todoItems[index]);
        this.removeTodoTask(index);    
    }
   
   getAllProgressItems(){
       return this.progressItems;
   }
   removeProgressTask(index:number){
        this.progressItems.splice(index,1);
   } 
   AddCompletedItems(index:number){
       this.completedItems.push(this.progressItems[index]);
       this.removeProgressTask(index);
  }
  getAllCompleted(){
      return this.completedItems
  }
}