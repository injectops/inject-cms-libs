import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCmsPageDto {
  @IsString()
  @IsNotEmpty()
  slug!: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}
