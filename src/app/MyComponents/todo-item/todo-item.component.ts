import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:ToDo;
@Output() todoDelete: EventEmitter<ToDo>=new EventEmitter();
@Output() todocheckbox: EventEmitter<ToDo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
   
  }
  onclick(todo:ToDo){
this.todoDelete.emit(todo);
    console.log("on click has been triggred");
  }
  onCheckboxClick(todo:ToDo){
this.todocheckbox.emit(todo);
  }
}
