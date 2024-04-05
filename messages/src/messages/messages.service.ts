import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './message.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}

  public findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  public findAll() {
    return this.messageRepo.findAll();
  }

  public create(content: string) {
    return this.messageRepo.create(content);
  }
}
