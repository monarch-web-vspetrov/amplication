import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QueueStatusModuleBase } from "./base/queueStatus.module.base";
import { QueueStatusService } from "./queueStatus.service";
import { QueueStatusController } from "./queueStatus.controller";
import { QueueStatusResolver } from "./queueStatus.resolver";

@Module({
  imports: [QueueStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [QueueStatusController],
  providers: [QueueStatusService, QueueStatusResolver],
  exports: [QueueStatusService],
})
export class QueueStatusModule {}
