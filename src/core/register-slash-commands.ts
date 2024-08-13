import { ApplicationCommandOptionType, REST, Routes } from "discord.js"
import { Envs } from "./adapters"

interface Props{
    token: string
}

export class RegisterSlashCommands {

    private readonly rest = new REST({version:'10'})

    private readonly commands = [
        {
            name: Envs.COMMAND_GPT,
            description: 'Chat GPT',
            options: [
                { name:'prompt', description:'¿Que quieres decir?', type: ApplicationCommandOptionType.String, required: true }
            ]
        },{
            name: 'image',
            description: 'Generar imagen',
            options: [
                { name:'prompt', description:'¿Que quieres decir?', type: ApplicationCommandOptionType.String, required: true }
            ]
        }
    ]

    constructor({token}: Props){
        this.rest.setToken(token)
    }

    async start(){
        try {
            console.log('Registering slash commands')
            await this.rest.put(
                Routes.applicationGuildCommands(Envs.DISCORD_ID,"1078115357363032094"),
                {body: this.commands }
            )
            console.log('Slash commands were registered succesfully')
        } catch (error) {
            console.log('Register Commands Error: ', error)
        }
    }

}