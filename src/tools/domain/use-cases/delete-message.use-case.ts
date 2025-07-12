import { DeleteMessageRequest } from "../dtos/delete-message-request.dto";

export abstract class DeleteMessageUseCase {
  abstract execute(deleteMessage: DeleteMessageRequest): Promise<boolean>;
}
