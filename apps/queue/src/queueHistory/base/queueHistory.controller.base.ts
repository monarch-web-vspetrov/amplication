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
import { QueueHistoryService } from "../queueHistory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QueueHistoryCreateInput } from "./QueueHistoryCreateInput";
import { QueueHistory } from "./QueueHistory";
import { QueueHistoryFindManyArgs } from "./QueueHistoryFindManyArgs";
import { QueueHistoryWhereUniqueInput } from "./QueueHistoryWhereUniqueInput";
import { QueueHistoryUpdateInput } from "./QueueHistoryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QueueHistoryControllerBase {
  constructor(
    protected readonly service: QueueHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QueueHistory })
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQueueHistory(
    @common.Body() data: QueueHistoryCreateInput
  ): Promise<QueueHistory> {
    return await this.service.createQueueHistory({
      data: {
        ...data,

        queue: data.queue
          ? {
              connect: data.queue,
            }
          : undefined,

        queueStatus: data.queueStatus
          ? {
              connect: data.queueStatus,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        queueId: true,
        oldStatusId: true,
        newStatusId: true,
        changedAt: true,

        queue: {
          select: {
            id: true,
          },
        },

        queueStatus: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QueueHistory] })
  @ApiNestedQuery(QueueHistoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async queueHistories(
    @common.Req() request: Request
  ): Promise<QueueHistory[]> {
    const args = plainToClass(QueueHistoryFindManyArgs, request.query);
    return this.service.queueHistories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        queueId: true,
        oldStatusId: true,
        newStatusId: true,
        changedAt: true,

        queue: {
          select: {
            id: true,
          },
        },

        queueStatus: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QueueHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async queueHistory(
    @common.Param() params: QueueHistoryWhereUniqueInput
  ): Promise<QueueHistory | null> {
    const result = await this.service.queueHistory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        queueId: true,
        oldStatusId: true,
        newStatusId: true,
        changedAt: true,

        queue: {
          select: {
            id: true,
          },
        },

        queueStatus: {
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
  @swagger.ApiOkResponse({ type: QueueHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQueueHistory(
    @common.Param() params: QueueHistoryWhereUniqueInput,
    @common.Body() data: QueueHistoryUpdateInput
  ): Promise<QueueHistory | null> {
    try {
      return await this.service.updateQueueHistory({
        where: params,
        data: {
          ...data,

          queue: data.queue
            ? {
                connect: data.queue,
              }
            : undefined,

          queueStatus: data.queueStatus
            ? {
                connect: data.queueStatus,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          queueId: true,
          oldStatusId: true,
          newStatusId: true,
          changedAt: true,

          queue: {
            select: {
              id: true,
            },
          },

          queueStatus: {
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
  @swagger.ApiOkResponse({ type: QueueHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQueueHistory(
    @common.Param() params: QueueHistoryWhereUniqueInput
  ): Promise<QueueHistory | null> {
    try {
      return await this.service.deleteQueueHistory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          queueId: true,
          oldStatusId: true,
          newStatusId: true,
          changedAt: true,

          queue: {
            select: {
              id: true,
            },
          },

          queueStatus: {
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
}
