import { NewMessageDTO } from "../dtos";
import { Message } from "../entities";

export abstract class MessageRepository{
    abstract sendMessage(message: NewMessageDTO): Promise<Message>
}