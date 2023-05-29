import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
export declare class ServicesService {
    private kafkaProducer;
    constructor(kafkaProducer: Producer);
    create(createServiceDto: CreateServiceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceDto: UpdateServiceDto): string;
    remove(id: number): string;
    sendKafkaEvent(key: any, value: any): void;
}
