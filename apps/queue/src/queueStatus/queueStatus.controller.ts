import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QueueStatusService } from "./queueStatus.service";
import { QueueStatusControllerBase } from "./base/queueStatus.controller.base";

@swagger.ApiTags("queueStatuses")
@common.Controller("queueStatuses")
export class QueueStatusController extends QueueStatusControllerBase {
  constructor(
    protected readonly service: QueueStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
