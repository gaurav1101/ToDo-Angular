import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
title:string;
desc:string;
@Output() toAdd: EventEmitter <ToDo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      sno:6,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.toAdd.emit(todo);
  }

}
