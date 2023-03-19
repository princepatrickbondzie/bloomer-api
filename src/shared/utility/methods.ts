import { SetMetadata } from '@nestjs/common';

export const Type = (types: string[]) => SetMetadata('types', types);
