import { NewRequestImage } from "../dtos";
import { RequestImage } from "../entities";

export abstract class GenerateImageUseCase{
    abstract generateImage(request: NewRequestImage): Promise<RequestImage>    
}