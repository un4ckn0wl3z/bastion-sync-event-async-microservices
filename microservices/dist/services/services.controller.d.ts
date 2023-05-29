import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DeleteServiceDto } from './dto/delete-service.dto';
export declare class ServicesController {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    serviceEvent(value: CreateServiceDto): void;
    handleServiceCreatedEvent(createServiceDto: CreateServiceDto): void;
    handleServiceUpdatedEvent(updateServiceDto: UpdateServiceDto): void;
    handleServiceDeletedEvent(deleteServiceDto: DeleteServiceDto): void;
}
