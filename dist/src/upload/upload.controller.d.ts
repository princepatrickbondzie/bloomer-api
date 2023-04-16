/// <reference types="multer" />
import { Express } from 'express';
import { UploadService } from './upload.service';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    handleUpload(files: Array<Express.Multer.File>): Promise<Array<UploadApiResponse | UploadApiErrorResponse>>;
    Upload(files: {
        primary?: Express.Multer.File[];
        secondry?: Express.Multer.File[];
    }): Promise<{
        primary?: Express.Multer.File[];
        secondry?: Express.Multer.File[];
    }>;
    deleteImage(publicIds: string[]): Promise<unknown>;
}
