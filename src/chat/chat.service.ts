import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  update(id: any, updateChatDto: UpdateChatDto) {
    throw new Error('Method not implemented.');
  }
  findOne(id: number) {
    throw new Error('Method not implemented.');
  }
  remove(id: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  create(createChatDto: CreateChatDto) {
    throw new Error('Method not implemented.');
  }
}
