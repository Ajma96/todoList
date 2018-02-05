import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Task } from './models/task'

@Component
({
    selector: 'task',
    templateUrl: './task.component.html' 
})

export class TaskComponent
{
    @Input()
    private task : Task

    @Output()
    private deleteEvent = new EventEmitter< Task >()

    deleteTask()
    {
        this.deleteEvent.emit( this.task )
    }
}