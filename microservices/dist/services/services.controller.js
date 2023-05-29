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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const kafka_service_dto_1 = require("./dto/kafka-service.dto");
const create_service_dto_1 = require("./dto/create-service.dto");
const update_service_dto_1 = require("./dto/update-service.dto");
const event_emitter_1 = require("@nestjs/event-emitter");
const delete_service_dto_1 = require("./dto/delete-service.dto");
let ServicesController = class ServicesController {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    serviceEvent({ value }) {
        common_1.Logger.debug(value, 'ServicesController - serviceEvent');
        this.eventEmitter.emit(value.eventType, value);
    }
    handleServiceCreatedEvent(createServiceDto) {
        common_1.Logger.debug(createServiceDto, 'ServicesController - handleServiceCreatedEvent');
    }
    handleServiceUpdatedEvent(updateServiceDto) {
        common_1.Logger.debug(updateServiceDto, 'ServicesController - handleServiceUpdatedEvent');
    }
    handleServiceDeletedEvent(deleteServiceDto) {
        common_1.Logger.debug(deleteServiceDto, 'ServicesController - handleServiceDeletedEvent');
    }
};
__decorate([
    (0, microservices_1.EventPattern)('services'),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kafka_service_dto_1.KafkaServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "serviceEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('ServiceCreated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "handleServiceCreatedEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('ServiceUpdated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_service_dto_1.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "handleServiceUpdatedEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('ServiceDeleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_service_dto_1.DeleteServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "handleServiceDeletedEvent", null);
ServicesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map