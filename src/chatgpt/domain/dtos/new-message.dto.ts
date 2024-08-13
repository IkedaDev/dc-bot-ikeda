interface Props{
    prompt: string
}

export class NewMessageDTO{

    public readonly prompt: string
        
    constructor({prompt}: Props){
        this.prompt = prompt
    }

}