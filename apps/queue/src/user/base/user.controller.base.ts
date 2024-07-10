/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { VerificationTokenFindManyArgs } from "../../verificationToken/base/VerificationTokenFindManyArgs";
import { VerificationToken } from "../../verificationToken/base/VerificationToken";
import { VerificationTokenWhereUniqueInput } from "../../verificationToken/base/VerificationTokenWhereUniqueInput";
import { CarFindManyArgs } from "../../car/base/CarFindManyArgs";
import { Car } from "../../car/base/Car";
import { CarWhereUniqueInput } from "../../car/base/CarWhereUniqueInput";
import { QueueFindManyArgs } from "../../queue/base/QueueFindManyArgs";
import { Queue } from "../../queue/base/Queue";
import { QueueWhereUniqueInput } from "../../queue/base/QueueWhereUniqueInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/verificationTokens")
  @ApiNestedQuery(VerificationTokenFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VerificationToken",
    action: "read",
    possession: "any",
  })
  async findVerificationTokens(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<VerificationToken[]> {
    const query = plainToClass(VerificationTokenFindManyArgs, request.query);
    const results = await this.service.findVerificationTokens(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        identifier: true,
        token: true,
        expires: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/verificationTokens")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectVerificationTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verificationTokens: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/verificationTokens")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateVerificationTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verificationTokens: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/verificationTokens")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectVerificationTokens(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: VerificationTokenWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      verificationTokens: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/cars")
  @ApiNestedQuery(CarFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Car",
    action: "read",
    possession: "any",
  })
  async findCars(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Car[]> {
    const query = plainToClass(CarFindManyArgs, request.query);
    const results = await this.service.findCars(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        brandId: true,
        carTypeId: true,
        model: true,
        carNumber: true,

        user: {
          select: {
            id: true,
          },
        },

        carBrand: {
          select: {
            id: true,
          },
        },

        carType: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cars")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectCars(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cars")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateCars(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cars")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectCars(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cars: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/queues")
  @ApiNestedQuery(QueueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Queue",
    action: "read",
    possession: "any",
  })
  async findQueues(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Queue[]> {
    const query = plainToClass(QueueFindManyArgs, request.query);
    const results = await this.service.findQueues(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        position: true,
        box: true,
        userId: true,
        userPhone: true,
        carId: true,
        carType: true,
        joinInQueue: true,
        statusId: true,
        finished: true,
        carLeave: true,
        serviceId: true,

        user: {
          select: {
            id: true,
          },
        },

        car: {
          select: {
            id: true,
          },
        },

        queueStatus: {
          select: {
            id: true,
          },
        },

        service: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectQueues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateQueues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queues")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectQueues(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queues: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async findSessions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sessionToken: true,
        userId: true,
        expires: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectSessions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async findAccounts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        refreshToken: true,
        accessToken: true,
        expiresAt: true,
        tokenType: true,
        scope: true,
        idToken: true,
        sessionState: true,
        refreshTokenExpiresIn: true,
        userId: true,
        typeField: true,
        provider: true,
        providerAccountId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectAccounts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}