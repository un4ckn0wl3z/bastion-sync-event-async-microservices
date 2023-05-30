"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
let ServicesService = class ServicesService {
    constructor(kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }
    create(createServiceDto) {
        const id = Math.floor(Math.random() * 100);
        this.sendKafkaEvent(`${id}`, Object.assign({ eventType: 'ServiceCreated', id }, createServiceDto));
        return 'This action adds a new service';
    }
    findAll() {
        return `This action returns all services`;
    }
    findOne(id) {
        return `This action returns a #${id} service`;
    }
    update(id, updateServiceDto) {
        updateServiceDto.id = id;
        this.sendKafkaEvent(`${id}`, Object.assign({ eventType: 'ServiceUpdated' }, updateServiceDto));
        return `This action updates a #${id} service`;
    }
    remove(id) {
        this.sendKafkaEvent(`${id}`, { eventType: 'ServiceDeleted', id });
        return `This action removes a #${id} service`;
    }
    sendKafkaEvent(key, value) {
        const data = {
            value
        };
        this.kafkaProducer.send({
            topic: 'services',
            messages: [{ key, value: JSON.stringify(data) }],
        });
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KAFKA_PRODUCER')),
    __metadata("design:paramtypes", [Object])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map