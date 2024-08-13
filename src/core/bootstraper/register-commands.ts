import { CacheType, Message, Interaction } from "discord.js";
import { SendMessage, GenerateImage } from "../../chatgpt/use-cases";
import { Envs } from "../adapters";
import { DiscordBot } from "../discord-bot";
import { MessageOpenAIRepository } from "../../chatgpt/infrastructure/openai/message-openai.repository";
import { RequestImageHuggingfaceRepository } from "../../chatgpt/infrastructure/huggingface/request-image-huggingface.repository";
import { GenerateImageApp, MessageApp } from "../../chatgpt/application";


export class RegisterCommands{

    static load(app: DiscordBot){

        const sendMessage = new SendMessage(new MessageOpenAIRepository())
        app.registerCommand(Envs.COMMAND_GPT, (message: Message) => new MessageApp(sendMessage).sendMessage(message))
        app.registerSlashCommand(Envs.COMMAND_GPT, (interaction: Interaction<CacheType>) => new MessageApp(sendMessage).sendMessageInteraction(interaction))
        
        const generateImage = new GenerateImage(new RequestImageHuggingfaceRepository())
        app.registerCommand('image', (message: Message) => new GenerateImageApp(generateImage).sendMessage(message))
        app.registerSlashCommand('image', (interaction: Interaction<CacheType>) => new GenerateImageApp(generateImage).sendMessageInteraction(interaction))
    }

}