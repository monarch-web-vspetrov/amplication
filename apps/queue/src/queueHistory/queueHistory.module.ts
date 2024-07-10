import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QueueHistoryModuleBase } from "./base/queueHistory.module.base";
import { QueueHistoryService } from "./queueHistory.service";
import { QueueHistoryController } from "./queueHistory.controller";
import { QueueHistoryResolver } from "./queueHistory.resolver";

@Module({
  imports: [QueueHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [QueueHistoryController],
  providers: [QueueHistoryService, QueueHistoryResolver],
  exports: [QueueHistoryService],
})
export class QueueHistoryModule {}
