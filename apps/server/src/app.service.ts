import { Injectable } from '@nestjs/common';
import prisma from '@db';

@Injectable()
export class AppService {
  getUsers() {
    return prisma.user.findMany();
  }
}
