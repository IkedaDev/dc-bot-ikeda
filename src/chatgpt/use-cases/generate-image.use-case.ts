import { NewRequestImage } from "../domain/dtos";
import { RequestImage } from "../domain/entities";
import { RequestImageRepository } from "../domain/repository";
import { GenerateImageUseCase } from "../domain/use-cases/generate-image.use-case";


export class GenerateImage implements GenerateImageUseCase{

    constructor(
        private readonly requestImageRepository: RequestImageRepository
    ){}

    generateImage(request: NewRequestImage): Promise<RequestImage> {
        try {
            return this.requestImageRepository.generateImage(request)
        } catch (error) {
            throw error
        }
    }

}