import { NewMessageDTO } from "../dtos";
import { Message } from "../entities";

export abstract class SendMessageUseCase{
    abstract sendMessage(message: NewMessageDTO): Promise<Message>    
}