import { IsNotEmpty, IsIn, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum AllowedContentTypes {
  JPG = 'image/jpg',
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  HEIC = 'image/heic',
  HEIF = 'image/heif',
  HEIC_SEQUENCE = 'image/heic-sequence',
  HEIF_SEQUENCE = 'image/heif-sequence',
}

export class SignedURLDto {
  @IsNotEmpty()
  @ApiProperty()
  filename: string;

  @IsNotEmpty()
  @IsIn([
    AllowedContentTypes.JPEG,
    AllowedContentTypes.PNG,
    AllowedContentTypes.JPG,
    AllowedContentTypes.HEIC,
    AllowedContentTypes.HEIF,
    AllowedContentTypes.HEIC_SEQUENCE,
    AllowedContentTypes.HEIF_SEQUENCE,
  ])
  @ApiProperty()
  type: string;

  @IsOptional()
  @ApiPropertyOptional()
  folder: string;
}
