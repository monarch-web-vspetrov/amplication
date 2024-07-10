import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarBrandService } from "./carBrand.service";
import { CarBrandControllerBase } from "./base/carBrand.controller.base";

@swagger.ApiTags("carBrands")
@common.Controller("carBrands")
export class CarBrandController extends CarBrandControllerBase {
  constructor(
    protected readonly service: CarBrandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
