import { OpenAIError } from "openai";
import { Envs, OpenAI } from "../../../core/adapters";
import { NewMessageDTO } from "../../domain/dtos";
import { Message } from "../../domain/entities";
import { MessageRepository } from "../../domain/repository";

export class MessageOpenAIRepository
  extends OpenAI
  implements MessageRepository
{
  private errorMessages: string[] = [
    "Lo lamento, no me encuentro en horario laboral actualmente. ",
    "Zzz... 💤😴",
    "Si.",
    "Estoy viendo una película, lo lamento...",
    "Estoy viendo una serie de magia, más tarde te atiendo...",
  ];

  async sendMessage(message: NewMessageDTO): Promise<Message> {
    try {
      const completion = await this.openai().chat.completions.create({
        model: Envs.GPT_OPENAI_MODEL,
        messages: [{ role: "user", content: message.prompt }],
        max_tokens: 1000,
        temperature: 0.3,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        top_p: 1.0,
      });
      return new Message({
        prompt: message.prompt,
        response: completion.choices[0].message.content || "Si",
      });
    } catch (error) {
      if (error instanceof OpenAIError) {
        console.log(error);
      }
      return new Message({
        prompt: message.prompt,
        response: this.randomMessage(),
      });
    }
  }

  private randomMessage(): string {
    return this.errorMessages[
      Math.floor(Math.random() * this.errorMessages.length)
    ];
  }
}
