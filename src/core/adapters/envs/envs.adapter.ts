import { get } from "env-var";
import 'dotenv/config';
 

export class Envs {
    static BOT_PREFIX: string = get("BOT_PREFIX").required().asString()
    
    static DISCORD_TOKEN: string = get('DISCORD_TOKEN').required().asString()
    static DISCORD_ID: string = get('DISCORD_ID').required().asString()

    static HUGGINGFACE_TOKEN: string = get("HUGGINGFACE_TOKEN").required().asString()
    static HUGGINGFACE_TEXT_MODEL: string = get("HUGGINGFACE_TEXT_MODEL").required().asString()

    static GPT_OPENAI_API_KEY: string = get("GPT_OPENAI_API_KEY").required().asString()
    static GPT_OPENAI_PROJECT: string = get("GPT_OPENAI_PROJECT").required().asString()
    static GPT_OPENAI_ORGANIZATION: string = get("GPT_OPENAI_ORGANIZATION").required().asString()
    static GPT_OPENAI_MODEL: string = get("GPT_OPENAI_MODEL").required().asString()

    static COMMAND_GPT: string = get("COMMAND_GPT").default("gpt").asString()
}