export declare enum AllowedContentTypes {
    JPG = "image/jpg",
    PNG = "image/png",
    JPEG = "image/jpeg",
    HEIC = "image/heic",
    HEIF = "image/heif",
    HEIC_SEQUENCE = "image/heic-sequence",
    HEIF_SEQUENCE = "image/heif-sequence"
}
export declare class SignedURLDto {
    filename: string;
    type: string;
    folder: string;
}
