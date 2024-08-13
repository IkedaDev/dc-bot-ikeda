
interface Props{
    image: string
    prompt: string
}

export class RequestImage {
    public readonly image: string
    public readonly prompt: string

    constructor({ image, prompt }: Props){
        this.image = image
        this.prompt = prompt
    }
}