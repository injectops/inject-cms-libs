import { IsOptional, IsString } from 'class-validator';

export class CreateCmsPageMetaDto {
  @IsOptional() @IsString() type?: string;
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() value?: string;
}
