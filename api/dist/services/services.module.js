"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const services_controller_1 = require("./services.controller");
const microservices_1 = require("@nestjs/microservices");
let ServicesModule = class ServicesModule {
};
ServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'CLIENT_KAFKA',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'services',
                            brokers: ['host.docker.internal:9092'],
                        },
                        consumer: {
                            groupId: 'services',
                        },
                    },
                },
            ]),
        ],
        controllers: [services_controller_1.ServicesController],
        providers: [
            services_service_1.ServicesService,
            {
                provide: 'KAFKA_PRODUCER',
                useFactory: async (kafkaClient) => {
                    return kafkaClient.connect();
                },
                inject: ['CLIENT_KAFKA'],
            },
        ],
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map