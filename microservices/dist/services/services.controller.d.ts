import { ArgumentMetadata, CanActivate, ExecutionContext, PipeTransform } from '@nestjs/common';
import { KafkaServiceDto } from './dto/kafka-service.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DeleteServiceDto } from './dto/delete-service.dto';
export declare class CreateMessageContextGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
export declare const ParserDecorator: (...dataOrPipes: any[]) => ParameterDecorator;
export declare class CustomValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
export declare class ServicesController {
    private eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    serviceEvent({ value }: KafkaServiceDto): void;
    handleServiceCreatedEvent(createServiceDto: CreateServiceDto): void;
    handleServiceUpdatedEvent(updateServiceDto: UpdateServiceDto): void;
    handleServiceDeletedEvent(deleteServiceDto: DeleteServiceDto): void;
}
