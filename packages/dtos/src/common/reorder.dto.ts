import { IsArray, IsInt, IsOptional, IsString, IsUUID, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ReorderItemDto {
  @IsUUID()
  id!: string;

  @IsInt()
  @Min(0)
  order!: number;
}

export class ReorderBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReorderItemDto)
  items!: ReorderItemDto[];

  @IsOptional()
  @IsString()
  zone?: string;
}
