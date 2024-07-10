import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { QueueStatusModule } from "./queueStatus/queueStatus.module";
import { AccountModule } from "./account/account.module";
import { VerificationTokenModule } from "./verificationToken/verificationToken.module";
import { SessionModule } from "./session/session.module";
import { QueueModule } from "./queue/queue.module";
import { CarBrandModule } from "./carBrand/carBrand.module";
import { QueueHistoryModule } from "./queueHistory/queueHistory.module";
import { CarModule } from "./car/car.module";
import { ServiceModule } from "./service/service.module";
import { CarTypeModule } from "./carType/carType.module";
import { BoxModule } from "./box/box.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    QueueStatusModule,
    AccountModule,
    VerificationTokenModule,
    SessionModule,
    QueueModule,
    CarBrandModule,
    QueueHistoryModule,
    CarModule,
    ServiceModule,
    CarTypeModule,
    BoxModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
