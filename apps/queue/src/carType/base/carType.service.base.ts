/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CarType as PrismaCarType,
  Car as PrismaCar,
} from "@prisma/client";

export class CarTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CarTypeCountArgs, "select">): Promise<number> {
    return this.prisma.carType.count(args);
  }

  async carTypes(args: Prisma.CarTypeFindManyArgs): Promise<PrismaCarType[]> {
    return this.prisma.carType.findMany(args);
  }
  async carType(
    args: Prisma.CarTypeFindUniqueArgs
  ): Promise<PrismaCarType | null> {
    return this.prisma.carType.findUnique(args);
  }
  async createCarType(args: Prisma.CarTypeCreateArgs): Promise<PrismaCarType> {
    return this.prisma.carType.create(args);
  }
  async updateCarType(args: Prisma.CarTypeUpdateArgs): Promise<PrismaCarType> {
    return this.prisma.carType.update(args);
  }
  async deleteCarType(args: Prisma.CarTypeDeleteArgs): Promise<PrismaCarType> {
    return this.prisma.carType.delete(args);
  }

  async findCars(
    parentId: string,
    args: Prisma.CarFindManyArgs
  ): Promise<PrismaCar[]> {
    return this.prisma.carType
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cars(args);
  }
}
