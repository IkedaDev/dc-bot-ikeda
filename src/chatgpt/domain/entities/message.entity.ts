
interface Props{
    prompt: string
    response: string
}

export class Message {
    public readonly prompt: string
    public readonly response: string

    constructor({ prompt, response }: Props){
        this.prompt = prompt
        this.response = response
    }
}