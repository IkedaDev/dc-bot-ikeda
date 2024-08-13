import { HuggingFace } from "../../../core/adapters";
import { NewRequestImage } from "../../domain/dtos";
import { RequestImage } from "../../domain/entities";
import { RequestImageRepository } from "../../domain/repository";

export class RequestImageHuggingfaceRepository extends HuggingFace implements RequestImageRepository{

    async generateImage(requestImage: NewRequestImage): Promise<RequestImage> {
        try {
            const response = await this.hf.textToImage({
                model: 'ZB-Tech/Text-to-Image',
                inputs: requestImage.prompt,
              })

            return new RequestImage({ prompt: requestImage.prompt, image: 'IMAGEN' })
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}