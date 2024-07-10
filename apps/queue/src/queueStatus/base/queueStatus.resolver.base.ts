/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { QueueStatus } from "./QueueStatus";
import { QueueStatusCountArgs } from "./QueueStatusCountArgs";
import { QueueStatusFindManyArgs } from "./QueueStatusFindManyArgs";
import { QueueStatusFindUniqueArgs } from "./QueueStatusFindUniqueArgs";
import { CreateQueueStatusArgs } from "./CreateQueueStatusArgs";
import { UpdateQueueStatusArgs } from "./UpdateQueueStatusArgs";
import { DeleteQueueStatusArgs } from "./DeleteQueueStatusArgs";
import { QueueFindManyArgs } from "../../queue/base/QueueFindManyArgs";
import { Queue } from "../../queue/base/Queue";
import { QueueHistoryFindManyArgs } from "../../queueHistory/base/QueueHistoryFindManyArgs";
import { QueueHistory } from "../../queueHistory/base/QueueHistory";
import { QueueStatusService } from "../queueStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QueueStatus)
export class QueueStatusResolverBase {
  constructor(
    protected readonly service: QueueStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "read",
    possession: "any",
  })
  async _queueStatusesMeta(
    @graphql.Args() args: QueueStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [QueueStatus])
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "read",
    possession: "any",
  })
  async queueStatuses(
    @graphql.Args() args: QueueStatusFindManyArgs
  ): Promise<QueueStatus[]> {
    return this.service.queueStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => QueueStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "read",
    possession: "own",
  })
  async queueStatus(
    @graphql.Args() args: QueueStatusFindUniqueArgs
  ): Promise<QueueStatus | null> {
    const result = await this.service.queueStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QueueStatus)
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "create",
    possession: "any",
  })
  async createQueueStatus(
    @graphql.Args() args: CreateQueueStatusArgs
  ): Promise<QueueStatus> {
    return await this.service.createQueueStatus({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => QueueStatus)
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "update",
    possession: "any",
  })
  async updateQueueStatus(
    @graphql.Args() args: UpdateQueueStatusArgs
  ): Promise<QueueStatus | null> {
    try {
      return await this.service.updateQueueStatus({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => QueueStatus)
  @nestAccessControl.UseRoles({
    resource: "QueueStatus",
    action: "delete",
    possession: "any",
  })
  async deleteQueueStatus(
    @graphql.Args() args: DeleteQueueStatusArgs
  ): Promise<QueueStatus | null> {
    try {
      return await this.service.deleteQueueStatus(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Queue], { name: "queues" })
  @nestAccessControl.UseRoles({
    resource: "Queue",
    action: "read",
    possession: "any",
  })
  async findQueues(
    @graphql.Parent() parent: QueueStatus,
    @graphql.Args() args: QueueFindManyArgs
  ): Promise<Queue[]> {
    const results = await this.service.findQueues(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [QueueHistory], { name: "queueHistories" })
  @nestAccessControl.UseRoles({
    resource: "QueueHistory",
    action: "read",
    possession: "any",
  })
  async findQueueHistories(
    @graphql.Parent() parent: QueueStatus,
    @graphql.Args() args: QueueHistoryFindManyArgs
  ): Promise<QueueHistory[]> {
    const results = await this.service.findQueueHistories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
