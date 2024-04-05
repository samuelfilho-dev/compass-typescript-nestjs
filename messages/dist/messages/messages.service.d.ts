import { MessagesRepository } from './message.repository';
export declare class MessagesService {
    messageRepo: MessagesRepository;
    constructor(messageRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
