import { HfInference } from "@huggingface/inference";
import { Envs } from "../envs/envs.adapter";

export abstract class HuggingFace{
    public readonly hf = new HfInference(Envs.HUGGINGFACE_TOKEN)
}