import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarTypeService } from "./carType.service";
import { CarTypeControllerBase } from "./base/carType.controller.base";

@swagger.ApiTags("carTypes")
@common.Controller("carTypes")
export class CarTypeController extends CarTypeControllerBase {
  constructor(
    protected readonly service: CarTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
