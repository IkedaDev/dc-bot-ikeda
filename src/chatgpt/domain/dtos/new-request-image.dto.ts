interface Props{
    prompt: string
}

export class NewRequestImage{

    public readonly prompt: string
        
    constructor({prompt}: Props){
        this.prompt = prompt
    }

}