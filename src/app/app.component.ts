import { Component, state } from '@angular/core'
import { Task } from './models/task'
import { State } from './utils/utils.state'

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
  task_text : string

  constructor()
  {
    let task : Task
    this.lastId = 0

    // Some mock
    task = new Task( this.lastId, "AAA", State.toDo )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "1Kg Tomatoes", State.toDo )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "250g Seitan", State.onGoing )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "1Kg Potatoes", State.done )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Some pistachios", State.done )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "Buy a light bulb for the kitchen", State.onGoing )
    this.lastId ++
    this.task_list.push( task )

    task = new Task( this.lastId, "1.000L Beer", State.toDo )
    this.lastId ++
    this.task_list.push( task ) 
  }

  addTask()
  {
    let task : Task = new Task ( this.lastId, this.task_text, State.toDo )
    this.lastId ++
    this.task_list.push( task )
  }

  deleteTask( task : Task )
  {
    for ( let i = 0; i < this.task_list.length; i ++ )
    {
      if ( this.task_list[ i ].getId() === task.getId() )
      {
        this.task_list.splice( i, 1 )
        break // Unique ID, so seek and destroy. No reason to keep iterating the loop.
      }
    }
  }

}
