import { State } from '../utils/utils.state'

export class Task
{
    constructor
    (
        private id    : number,
        private text  : string,
        private state : State
    ) {}

    public getId()
    {
        return this.id
    }

    public getText()
    {
        return this.text
    }

    public getState()
    {
        return this.state
    }

    private setState( state : State )
    {
        this.state = state
    }

    public setNextState()
    {
        switch ( this.getState() )
        {
            case State.toDo:
              this.setState( State.onGoing )
  
              break
  
            case State.onGoing:
              this.setState( State.done )
        }
    }

    public setPreviousState()
    {
        switch ( this.getState() )
        {
            case State.onGoing:
              this.setState( State.toDo )
  
              break
  
            case State.done:
              this.setState( State.onGoing )
        }
    }

}
