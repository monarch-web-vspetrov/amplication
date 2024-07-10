import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QueueHistoryService } from "./queueHistory.service";
import { QueueHistoryControllerBase } from "./base/queueHistory.controller.base";

@swagger.ApiTags("queueHistories")
@common.Controller("queueHistories")
export class QueueHistoryController extends QueueHistoryControllerBase {
  constructor(
    protected readonly service: QueueHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
