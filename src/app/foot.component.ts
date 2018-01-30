import { Component } from '@angular/core'
import { state } from '@angular/core/src/animation/dsl';

@Component
({
    selector: 'foot',
    templateUrl: './foot.component.html',
    styleUrls: ['./foot.component.css']
})

export class FootComponent
{
    color : string  = 'red'
    state : boolean = false

    changeColor( color : string )
    {
        this.color = color
    }
}