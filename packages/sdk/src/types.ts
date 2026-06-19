/**
 * Response interfaces for the inject-cms delivery API.
 * These match the JSON shape returned by the delivery-api endpoints.
 * The delivery-api returns TypeORM entity JSON (not transformed DTOs).
 */

export interface FileResponse {
  id: string;
  name: string;
  mimeType: string;
  s3Key: string;
  imageUrl: string | null;
  platformId: string;
  createdAt: string;
  lastChangedAt: string;
  lastChangedBy: string;
}

export interface PageMetaResponse {
  id: string;
  key: string;
  value: string;
  platformId: string;
}

export interface ContentResponse {
  id: string;
  zone: string;
  type: string;
  title: string | null;
  body: string | null;
  imageUrl: string | null;
  ordering: number;
  platformId: string;
  file: FileResponse | null;
  createdAt: string;
  lastChangedAt: string;
  lastChangedBy: string;
}

export interface PageResponse {
  id: string;
  slug: string;
  title: string | null;
  isDefault: boolean;
  platformId: string;
  contents: ContentResponse[];
  metas: PageMetaResponse[];
  createdAt: string;
  lastChangedAt: string;
  lastChangedBy: string;
}

export interface MenuResponse {
  id: string;
  zone: string;
  label: string;
  url: string | null;
  ordering: number;
  platformId: string;
  children: MenuResponse[];
  createdAt: string;
  lastChangedAt: string;
  lastChangedBy: string;
}
