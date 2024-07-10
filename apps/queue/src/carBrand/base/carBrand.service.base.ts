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
  CarBrand as PrismaCarBrand,
  Car as PrismaCar,
} from "@prisma/client";

export class CarBrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CarBrandCountArgs, "select">): Promise<number> {
    return this.prisma.carBrand.count(args);
  }

  async carBrands(
    args: Prisma.CarBrandFindManyArgs
  ): Promise<PrismaCarBrand[]> {
    return this.prisma.carBrand.findMany(args);
  }
  async carBrand(
    args: Prisma.CarBrandFindUniqueArgs
  ): Promise<PrismaCarBrand | null> {
    return this.prisma.carBrand.findUnique(args);
  }
  async createCarBrand(
    args: Prisma.CarBrandCreateArgs
  ): Promise<PrismaCarBrand> {
    return this.prisma.carBrand.create(args);
  }
  async updateCarBrand(
    args: Prisma.CarBrandUpdateArgs
  ): Promise<PrismaCarBrand> {
    return this.prisma.carBrand.update(args);
  }
  async deleteCarBrand(
    args: Prisma.CarBrandDeleteArgs
  ): Promise<PrismaCarBrand> {
    return this.prisma.carBrand.delete(args);
  }

  async findCars(
    parentId: string,
    args: Prisma.CarFindManyArgs
  ): Promise<PrismaCar[]> {
    return this.prisma.carBrand
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cars(args);
  }
}
