import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QueueModuleBase } from "./base/queue.module.base";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";
import { QueueResolver } from "./queue.resolver";

@Module({
  imports: [QueueModuleBase, forwardRef(() => AuthModule)],
  controllers: [QueueController],
  providers: [QueueService, QueueResolver],
  exports: [QueueService],
})
export class QueueModule {}
