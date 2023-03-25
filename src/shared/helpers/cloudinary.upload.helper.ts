import { v2 } from 'cloudinary';
import { Config } from '../../config/Config';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return v2.config({
      cloud_name: Config.CLOUDINARY_CLOUD_NAME,
      api_key: Config.CLOUDINARY_API_KEY,
      api_secret: Config.CLOUDINARY_API_SECRET,
    });
  },
};
