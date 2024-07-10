import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueStatusServiceBase } from "./base/queueStatus.service.base";

@Injectable()
export class QueueStatusService extends QueueStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
