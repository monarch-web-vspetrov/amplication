import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarTypeServiceBase } from "./base/carType.service.base";

@Injectable()
export class CarTypeService extends CarTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
