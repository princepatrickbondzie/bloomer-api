"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const Config_1 = require("../../config/Config");
exports.CloudinaryProvider = {
    provide: 'Cloudinary',
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: Config_1.Config.CLOUDINARY_CLOUD_NAME,
            api_key: Config_1.Config.CLOUDINARY_API_KEY,
            api_secret: Config_1.Config.CLOUDINARY_API_SECRET,
        });
    },
};
//# sourceMappingURL=cloudinary.upload.helper.js.map