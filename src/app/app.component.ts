import { Component } from '@angular/core';
import { Task } from './models/task';

@Component
({
  selector: 'task-list',
  templateUrl: './app.component.html',
})

export class AppComponent
{
  task_list : Array <Task> = new Array()
  lastId    : number

  constructor()
  {
    let task : Task
    this.lastId = 0

    task = new Task( this.lastId,  "1Kg Tomatoes" )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "250g Seitan" )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "1Kg Potatoes" )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Some pistachios" )
    this.lastId ++
    this.task_list.push( task )
  }

  task_text : string

  addTask()
  {
    let task : Task = new Task ( this.lastId, this.task_text )
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
        break // ID única. Una vez lo encuentra y lo borra. No tiene sentido seguir iterando.
      }
    }
  }

}
