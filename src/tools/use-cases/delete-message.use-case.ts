import { Client, TextChannel } from "discord.js";
import { DeleteMessageRequest } from "../domain/dtos/delete-message-request.dto";
import { DeleteMessageUseCase } from "../domain/use-cases/delete-message.use-case";

export class DeleteMessage implements DeleteMessageUseCase {
  constructor(private readonly client: Client) {}

  async execute({
    channelId,
    messageId,
  }: DeleteMessageRequest): Promise<boolean> {
    try {
      const channel = await this.client.channels.fetch(channelId);
      if (!channel || !channel.isTextBased()) {
        console.log("Canal no encontrado o no es de texto");
        return false;
      }
      const textChannel = channel as TextChannel;
      const message = await textChannel.messages.fetch(messageId);
      if (!message) {
        console.log("Mensaje no encontrado");
        return false;
      }

      await message.delete();
      return true;
    } catch (error) {
      console.log(`Error eliminando mensaje ${error}`);
      return false;
    }
  }
}
