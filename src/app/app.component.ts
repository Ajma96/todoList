import { Component } from '@angular/core';
import { Task } from './models/task';

@Component
({
  selector: 'task-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  task_list : Array <Task> = new Array()
  lastId    : number

  constructor()
  {
    let task : Task
    this.lastId = 0
    let active : boolean = false

    task = new Task( this.lastId,  "1Kg Tomatoes", active )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "250g Seitan", active )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "1Kg Potatoes", !active )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Some pistachios", active )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Buy a light bulb for the kitchen", active )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Morirse que ya va tocando", active )
    this.lastId ++
    this.task_list.push( task ) 
  }

  task_text : string

  addTask()
  {
    let task : Task = new Task ( this.lastId, this.task_text, false )
    this.lastId ++
    this.task_list.push( task )
  }


  deleteTask( id : number )
  {
    for ( let i = 0; i < this.task_list.length; i ++ )
    {
      if ( this.task_list[ i ].getId() == id )
      {
        this.task_list.splice( i, 1 )
        break // ID única. Una vez lo encuentra lo borra. No tiene sentido seguir iterando.
      }
    }
  }

}
