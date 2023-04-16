"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedURLDto = exports.AllowedContentTypes = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var AllowedContentTypes;
(function (AllowedContentTypes) {
    AllowedContentTypes["JPG"] = "image/jpg";
    AllowedContentTypes["PNG"] = "image/png";
    AllowedContentTypes["JPEG"] = "image/jpeg";
    AllowedContentTypes["HEIC"] = "image/heic";
    AllowedContentTypes["HEIF"] = "image/heif";
    AllowedContentTypes["HEIC_SEQUENCE"] = "image/heic-sequence";
    AllowedContentTypes["HEIF_SEQUENCE"] = "image/heif-sequence";
})(AllowedContentTypes = exports.AllowedContentTypes || (exports.AllowedContentTypes = {}));
class SignedURLDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignedURLDto.prototype, "filename", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([
        AllowedContentTypes.JPEG,
        AllowedContentTypes.PNG,
        AllowedContentTypes.JPG,
        AllowedContentTypes.HEIC,
        AllowedContentTypes.HEIF,
        AllowedContentTypes.HEIC_SEQUENCE,
        AllowedContentTypes.HEIF_SEQUENCE,
    ]),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignedURLDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SignedURLDto.prototype, "folder", void 0);
exports.SignedURLDto = SignedURLDto;
//# sourceMappingURL=sign-url.dto.js.map