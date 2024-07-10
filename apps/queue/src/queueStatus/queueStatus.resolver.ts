import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QueueStatusResolverBase } from "./base/queueStatus.resolver.base";
import { QueueStatus } from "./base/QueueStatus";
import { QueueStatusService } from "./queueStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QueueStatus)
export class QueueStatusResolver extends QueueStatusResolverBase {
  constructor(
    protected readonly service: QueueStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
