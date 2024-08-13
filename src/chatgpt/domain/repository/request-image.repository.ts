import { NewRequestImage } from "../dtos";
import { RequestImage } from "../entities";

export abstract class RequestImageRepository {  
    abstract generateImage(requestImage: NewRequestImage): Promise<RequestImage>
}