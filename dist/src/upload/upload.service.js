"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const toStream = require("buffer-to-stream");
const cloudinary_1 = require("cloudinary");
let UploadService = class UploadService {
    async imageUpload(files) {
        try {
            const images = [];
            for (const file of files) {
                const { buffer } = file;
                const image = await this.uploads(buffer, 'demo');
                images.push(image);
            }
            return images;
        }
        catch (err) {
            console.log('second error::', err);
        }
    }
    async deleteImage(publicIds) {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.api
                .delete_resources(publicIds)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        });
    }
    async uploads(buffer, folder) {
        return new Promise((resolve, reject) => {
            const upload = cloudinary_1.v2.uploader.upload_stream({ folder: folder }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            toStream(buffer).pipe(upload);
        });
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map