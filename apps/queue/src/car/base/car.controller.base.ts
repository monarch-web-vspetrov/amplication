/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CarService } from "../car.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CarCreateInput } from "./CarCreateInput";
import { Car } from "./Car";
import { CarFindManyArgs } from "./CarFindManyArgs";
import { CarWhereUniqueInput } from "./CarWhereUniqueInput";
import { CarUpdateInput } from "./CarUpdateInput";
import { QueueFindManyArgs } from "../../queue/base/QueueFindManyArgs";
import { Queue } from "../../queue/base/Queue";
import { QueueWhereUniqueInput } from "../../queue/base/QueueWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CarControllerBase {
  constructor(
    protected readonly service: CarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Car })
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCar(@common.Body() data: CarCreateInput): Promise<Car> {
    return await this.service.createCar({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        carBrand: data.carBrand
          ? {
              connect: data.carBrand,
            }
          : undefined,

        carType: data.carType
          ? {
              connect: data.carType,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        brandId: true,
        carTypeId: true,
        model: true,
        carNumber: true,

        user: {
          select: {
            id: true,
          },
        },

        carBrand: {
          select: {
            id: true,
          },
        },

        carType: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Car] })
  @ApiNestedQuery(CarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cars(@common.Req() request: Request): Promise<Car[]> {
    const args = plainToClass(CarFindManyArgs, request.query);
    return this.service.cars({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        brandId: true,
        carTypeId: true,
        model: true,
        carNumber: true,

        user: {
          select: {
            id: true,
          },
        },

        carBrand: {
          select: {
            id: true,
          },
        },

        carType: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async car(@common.Param() params: CarWhereUniqueInput): Promise<Car | null> {
    const result = await this.service.car({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        brandId: true,
        carTypeId: true,
        model: true,
        carNumber: true,

        user: {
          select: {
            id: true,
          },
        },

        carBrand: {
          select: {
            id: true,
          },
        },

        carType: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCar(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() data: CarUpdateInput
  ): Promise<Car | null> {
    try {
      return await this.service.updateCar({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          carBrand: data.carBrand
            ? {
                connect: data.carBrand,
              }
            : undefined,

          carType: data.carType
            ? {
                connect: data.carType,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
          brandId: true,
          carTypeId: true,
          model: true,
          carNumber: true,

          user: {
            select: {
              id: true,
            },
          },

          carBrand: {
            select: {
              id: true,
            },
          },

          carType: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Car })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCar(
    @common.Param() params: CarWhereUniqueInput
  ): Promise<Car | null> {
    try {
      return await this.service.deleteCar({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
          brandId: true,
          carTypeId: true,
          model: true,
          carNumber: true,

          user: {
            select: {
              id: true,
            },
          },

          carBrand: {
            select: {
              id: true,
            },
          },

          carType: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/queues")
  @ApiNestedQuery(QueueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Queue",
    action: "read",
    possession: "any",
  })
  async findQueues(
    @common.Req() request: Request,
    @common.Param() params: CarWhereUniqueInput
  ): Promise<Queue[]> {
    const query = plainToClass(QueueFindManyArgs, request.query);
    const results = await this.service.findQueues(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        position: true,
        box: true,
        userId: true,
        userPhone: true,
        carId: true,
        carType: true,
        joinInQueue: true,
        statusId: true,
        finished: true,
        carLeave: true,
        serviceId: true,

        user: {
          select: {
            id: true,
          },
        },

        car: {
          select: {
            id: true,
          },
        },

        queueStatus: {
          select: {
            id: true,
          },
        },

        service: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "update",
    possession: "any",
  })
  async connectQueues(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        connect: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "update",
    possession: "any",
  })
  async updateQueues(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        set: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "update",
    possession: "any",
  })
  async disconnectQueues(
    @common.Param() params: CarWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        disconnect: body,
      },
    };
    await this.service.updateCar({
      where: params,
      data,
      select: { id: true },
    });
  }
}
