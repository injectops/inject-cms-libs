import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateCmsMenuDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() url?: string;
  @IsOptional() @IsString() imageUrl?: string;
  @IsOptional() @IsString() target?: string;
  @IsOptional() @IsInt() @Min(0) order?: number;
  @IsOptional() @IsString() zone?: string;
}
