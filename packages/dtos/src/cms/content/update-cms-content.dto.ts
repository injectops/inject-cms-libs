import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateCmsContentDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() zone?: string;
  @IsOptional() @IsString() shortText?: string;
  @IsOptional() @IsString() longText?: string;
  @IsOptional() @IsString() imageUrl?: string;
  @IsOptional() @IsInt() @Min(0) order?: number;
  @IsOptional() @IsString() render?: string;
  @IsOptional() @IsString() bgColor?: string;
  @IsOptional() @IsString() bgColor2?: string;
  @IsOptional() @IsString() cssStyles?: string;
  @IsOptional() @IsString() transition?: string;
}
