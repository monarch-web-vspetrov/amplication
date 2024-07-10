import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarTypeModuleBase } from "./base/carType.module.base";
import { CarTypeService } from "./carType.service";
import { CarTypeController } from "./carType.controller";
import { CarTypeResolver } from "./carType.resolver";

@Module({
  imports: [CarTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarTypeController],
  providers: [CarTypeService, CarTypeResolver],
  exports: [CarTypeService],
})
export class CarTypeModule {}
