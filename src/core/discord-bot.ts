import { CacheType, Interaction, Message } from "discord.js"
import { Discord } from "./adapters/discord/discord.adapter"

interface Props{
    discordToken:string
    prefix: string
}

export class DiscordBot extends Discord{

    private prefix: string
    private commands: Map<string, Function> 
    private slashCommands: Map<string, Function> 

    constructor({discordToken, prefix} : Props){
        super(discordToken)
        this.commands = new Map()
        this.slashCommands = new Map()
        this.prefix = prefix
    }

    async start(){
        await this.login()
        this.onReady(() => console.log('Ikeda bot is working !!!'))
        this.onMessageCreate( (message) => this.handleMessage(message) )
        this.onInteractionCreate( (interaction) => this.handleInteraction(interaction) )
    }

    registerCommand(command: string, callback: Function ) {
        this.commands.set(command, callback);
    }

    registerSlashCommand(command: string, callback: Function) {
        this.slashCommands.set(command, callback);
    }

    private handleMessage(message: Message){ 
        if (message.author.bot) return;
        const [command, ...args] = message.content.slice(this.prefix.length).trim().split(/ +/);
        const commandFunction = this.commands.get(command);
        message.content = args.join(' ')
        if (commandFunction) commandFunction(message, args)
    }

    private async handleInteraction(interaction: Interaction<CacheType>) {
        if (!interaction.isCommand()) return;

        const commandFunction = this.slashCommands.get(interaction.commandName);
        if (commandFunction) await commandFunction(interaction);
    }

    
}

