import { CacheType, Interaction, Message } from "discord.js";
import { GenerateImageUseCase } from "../domain/use-cases";
import { NewRequestImage } from "../domain/dtos";

export class GenerateImageApp{

    constructor(
        private readonly generateImage: GenerateImageUseCase
    ){    }

    async sendMessage(message:Message){
        const response = await this.generateImage.generateImage( new NewRequestImage({ prompt: message.content}) )
        if(!response) return
        message.reply(response.image)
    }

    async sendMessageInteraction(interaction: Interaction<CacheType>){
        if(!interaction.isChatInputCommand()) return
        const response = await this.generateImage.generateImage( new NewRequestImage({ prompt: interaction.options.get('prompt')!.value as string}) )
        if(!response) return
        interaction.reply(response.image)
    }

    

}