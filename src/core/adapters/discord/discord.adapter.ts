import { CacheType, Client, Interaction, Message } from "discord.js";

export abstract class Discord {

    private client: Client = new Client({ intents: [3276799] })
    private token: string

    constructor(token:string){
        this.token = token
    }

    login(): Promise<string>{
        return this.client.login(this.token)
    }

    onReady( callback: (message: Client<boolean>) => void): Client<boolean>{
        return this.client.on("ready", callback);
    }

    onMessageCreate( callback: (message: Message<boolean>) => void): Client<boolean>{
        return this.client.on("messageCreate", callback);
    }

    onInteractionCreate( callback: (interaction: Interaction<CacheType>) => void){
        return this.client.on('interactionCreate', callback)
    }

}