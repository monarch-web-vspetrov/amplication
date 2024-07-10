import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { QueueController } from "../queue.controller";
import { QueueService } from "../queue.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  position: 42,
  box: 42,
  userId: "exampleUserId",
  userPhone: "exampleUserPhone",
  carId: 42,
  carType: 42,
  joinInQueue: new Date(),
  statusId: 42,
  finished: new Date(),
  carLeave: "true",
  serviceId: 42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  position: 42,
  box: 42,
  userId: "exampleUserId",
  userPhone: "exampleUserPhone",
  carId: 42,
  carType: 42,
  joinInQueue: new Date(),
  statusId: 42,
  finished: new Date(),
  carLeave: "true",
  serviceId: 42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    position: 42,
    box: 42,
    userId: "exampleUserId",
    userPhone: "exampleUserPhone",
    carId: 42,
    carType: 42,
    joinInQueue: new Date(),
    statusId: 42,
    finished: new Date(),
    carLeave: "true",
    serviceId: 42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  position: 42,
  box: 42,
  userId: "exampleUserId",
  userPhone: "exampleUserPhone",
  carId: 42,
  carType: 42,
  joinInQueue: new Date(),
  statusId: 42,
  finished: new Date(),
  carLeave: "true",
  serviceId: 42,
};

const service = {
  createQueue() {
    return CREATE_RESULT;
  },
  queues: () => FIND_MANY_RESULT,
  queue: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Queue", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QueueService,
          useValue: service,
        },
      ],
      controllers: [QueueController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /queues", async () => {
    await request(app.getHttpServer())
      .post("/queues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        joinInQueue: CREATE_RESULT.joinInQueue.toISOString(),
        finished: CREATE_RESULT.finished.toISOString(),
      });
  });

  test("GET /queues", async () => {
    await request(app.getHttpServer())
      .get("/queues")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          joinInQueue: FIND_MANY_RESULT[0].joinInQueue.toISOString(),
          finished: FIND_MANY_RESULT[0].finished.toISOString(),
        },
      ]);
  });

  test("GET /queues/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queues"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /queues/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queues"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        joinInQueue: FIND_ONE_RESULT.joinInQueue.toISOString(),
        finished: FIND_ONE_RESULT.finished.toISOString(),
      });
  });

  test("POST /queues existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/queues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        joinInQueue: CREATE_RESULT.joinInQueue.toISOString(),
        finished: CREATE_RESULT.finished.toISOString(),
      })
      .then(function () {
        agent
          .post("/queues")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
