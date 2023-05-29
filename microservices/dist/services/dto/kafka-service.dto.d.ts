import { CreateServiceDto } from './create-service.dto';
import { UpdateServiceDto } from './update-service.dto';
import { DeleteServiceDto } from './delete-service.dto';
export declare class KafkaServiceDto {
    value: CreateServiceDto | UpdateServiceDto | DeleteServiceDto;
}
