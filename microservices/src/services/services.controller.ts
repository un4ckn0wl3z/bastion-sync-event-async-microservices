import { ArgumentMetadata, CanActivate, Controller, ExecutionContext, Injectable, Logger, PipeTransform, UseGuards, UsePipes, ValidationPipe, createParamDecorator } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KafkaServiceDto } from './dto/kafka-service.dto';

import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { DeleteServiceDto } from './dto/delete-service.dto';


function removePropertiesExcept(obj, propertyToKeep) {
  for (let key in obj) {
    if (key !== propertyToKeep) {
      delete obj[key];
    }
  }
}

@Injectable()
export class CreateMessageContextGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      if (context.getType() == 'rpc') {
            const data = context.switchToRpc().getData();
            const cloned = JSON.parse(JSON.stringify(data) )
            data.value = cloned
            removePropertiesExcept(data, 'value')
            return true
        }
    }
}

export const ParserDecorator = createParamDecorator(
  (targets: any, ctx: ExecutionContext) => {
    let data = ctx.switchToRpc().getData();
    if(typeof(data) == 'string'){
      return {
        value: JSON.parse(data)
      }
    } else {
      return {
        value: data
      }
    }
  },
);


@Injectable()
export class CustomValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
      return value;
    }
}


@Controller()
export class ServicesController {
  constructor(private eventEmitter: EventEmitter2) {}

  @EventPattern('services')
  serviceEvent(@Payload(new ValidationPipe()) {value} : KafkaServiceDto) {
    Logger.debug(value, 'ServicesController - serviceEvent');
    this.eventEmitter.emit(value.eventType, value);
  }

  @OnEvent('ServiceCreated')
  handleServiceCreatedEvent(createServiceDto: CreateServiceDto) {
    Logger.debug(
      createServiceDto,
      'ServicesController - handleServiceCreatedEvent',
    );
  }

  @OnEvent('ServiceUpdated')
  handleServiceUpdatedEvent(updateServiceDto: UpdateServiceDto) {
    Logger.debug(
      updateServiceDto,
      'ServicesController - handleServiceUpdatedEvent',
    );
  }

  @OnEvent('ServiceDeleted')
  handleServiceDeletedEvent(deleteServiceDto: DeleteServiceDto) {
    Logger.debug(
      deleteServiceDto,
      'ServicesController - handleServiceDeletedEvent',
    );
  }
}