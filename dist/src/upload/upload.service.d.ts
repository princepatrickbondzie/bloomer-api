/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class UploadService {
    imageUpload(files: Array<Express.Multer.File>): Promise<Array<UploadApiResponse | UploadApiErrorResponse>>;
    deleteImage(publicIds: string[]): Promise<unknown>;
    private uploads;
}
