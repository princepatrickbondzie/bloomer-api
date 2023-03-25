import { Express } from 'express';
import { Injectable } from '@nestjs/common';
import toStream = require('buffer-to-stream');
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class UploadService {
  async imageUpload(
    files: Array<Express.Multer.File>,
  ): Promise<Array<UploadApiResponse | UploadApiErrorResponse>> {
    try {
      const images = [];
      for (const file of files) {
        const { buffer } = file;
        const image = await this.uploads(buffer, 'demo');
        images.push(image);
      }

      return images;
    } catch (err) {
      console.log('second error::', err);
    }
  }

  async deleteImage(publicIds: string[]) {
    return new Promise((resolve, reject) => {
      v2.api
        .delete_resources(publicIds)
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  }

  private async uploads(buffer: Buffer, folder: string) {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      toStream(buffer).pipe(upload);
    });
  }
}
