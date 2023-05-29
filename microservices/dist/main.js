"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: process.env.KAFKA_BROKERS.split(','),
            },
            consumer: {
                groupId: `microservices-${Math.floor(Math.random() * 100)}`,
            },
        },
    });
    app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map