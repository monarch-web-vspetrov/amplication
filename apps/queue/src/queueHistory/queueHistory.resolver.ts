import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QueueHistoryResolverBase } from "./base/queueHistory.resolver.base";
import { QueueHistory } from "./base/QueueHistory";
import { QueueHistoryService } from "./queueHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QueueHistory)
export class QueueHistoryResolver extends QueueHistoryResolverBase {
  constructor(
    protected readonly service: QueueHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
