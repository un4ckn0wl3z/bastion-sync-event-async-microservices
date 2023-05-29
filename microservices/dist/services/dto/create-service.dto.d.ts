import { EventDto } from './event.dto';
declare const CreateServiceDto_base: import("@nestjs/mapped-types").MappedType<Partial<EventDto>>;
export declare class CreateServiceDto extends CreateServiceDto_base {
    id?: number;
    name: string;
    description: string;
    tags: string[];
}
export {};
