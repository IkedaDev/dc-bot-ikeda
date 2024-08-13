import { NewMessageDTO } from "../domain/dtos";
import { Message } from "../domain/entities";
import { MessageRepository } from "../domain/repository";
import { SendMessageUseCase } from "../domain/use-cases";


export class SendMessage implements SendMessageUseCase{

    constructor(
        private readonly messageRepository: MessageRepository
    ){}

    sendMessage(message: NewMessageDTO): Promise<Message> {
        try {
            return this.messageRepository.sendMessage(message)
        } catch (error) {
            throw error
        }
    }

}