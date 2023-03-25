import {
  Body,
  Controller,
  Delete,
  Get,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { SignedURLDto } from './dto/sign-url.dto';
import { UploadService } from './upload.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FilesInterceptor('files', 3))
  @Post('images')
  async handleUpload(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Array<UploadApiResponse | UploadApiErrorResponse>> {
    return await this.uploadService.imageUpload(files);
  }

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'primary', maxCount: 1 },
      { name: 'secondry', maxCount: 2 },
    ]),
  )
  @Post('multi')
  async Upload(
    @UploadedFiles()
    files: {
      primary?: Express.Multer.File[];
      secondry?: Express.Multer.File[];
    },
  ) {
    return files;
    // return await this.uploadService.uploadImages(files);
  }

  @Delete('delete')
  async deleteImage(@Body() publicIds: string[]) {
    return await this.uploadService.deleteImage(publicIds);
  }
}
