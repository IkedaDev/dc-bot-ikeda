import { CacheType, Interaction, Message } from "discord.js";
import { SendMessageUseCase } from "../domain/use-cases";
import { NewMessageDTO } from "../domain/dtos";

export class MessageApp{

    constructor(
        private readonly sendMessageUseCase: SendMessageUseCase
    ){    }

    async sendMessage(message:Message){
        const response = await this.sendMessageUseCase.sendMessage( new NewMessageDTO({ prompt: message.content}) )
        if(!response) return
        message.reply(response.response)
    }

    async sendMessageInteraction(interaction: Interaction<CacheType>){
        if(!interaction.isChatInputCommand()) return
        const response = await this.sendMessageUseCase.sendMessage( new NewMessageDTO({ prompt: interaction.options.get('prompt')!.value as string}) )
        if(!response) return
        interaction.reply(response.response)
    }

    

}