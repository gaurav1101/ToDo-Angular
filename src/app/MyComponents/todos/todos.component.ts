import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
localItem:ToDo[];
  todos:ToDo[];
  constructor() { 
   
   this.localItem = JSON.parse(localStorage.getItem('todos') || "null" );
   if(this.localItem==null){
    this.todos=[];
   }
      else{
        this.todos=this.localItem;
      }
    }
  

  ngOnInit(): void {
  }

  deleteval(todo:ToDo){
console.log("deleting the todolist");
var index=this.todos.indexOf(todo);
this.todos.splice(index,1);
localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  AddVal(todo:ToDo){
    console.log("deleting the todolist");
    var index=this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
      }

      toggleclick(todo:ToDo){
        console.log("toggle click");
        const index=this.todos.indexOf(todo);
        this.todos[index].active=!this.todos[index].active;
        console.log(this.todos);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
}
