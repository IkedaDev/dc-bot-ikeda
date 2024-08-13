import AI from "openai"
import { Envs } from "../envs/envs.adapter"

export abstract class OpenAI{
    
    openai(){
        return new AI({
            organization: Envs.GPT_OPENAI_ORGANIZATION,
            project: Envs.GPT_OPENAI_PROJECT,
            apiKey: Envs.GPT_OPENAI_API_KEY,
        })
    }
}