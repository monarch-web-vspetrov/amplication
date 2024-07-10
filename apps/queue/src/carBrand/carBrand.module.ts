import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarBrandModuleBase } from "./base/carBrand.module.base";
import { CarBrandService } from "./carBrand.service";
import { CarBrandController } from "./carBrand.controller";
import { CarBrandResolver } from "./carBrand.resolver";

@Module({
  imports: [CarBrandModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarBrandController],
  providers: [CarBrandService, CarBrandResolver],
  exports: [CarBrandService],
})
export class CarBrandModule {}
