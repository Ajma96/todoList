export class Task
{
    constructor
    (
        private id     : number,
        private text   : string,
        private active : boolean
    ) {}

    public getId()
    {
        return this.id
    }

    public getText()
    {
        return this.text
    }

    public getActivity()
    {
        return this.active
    }
}