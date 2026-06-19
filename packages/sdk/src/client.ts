import { InjectCmsError } from './error.js';
import type {
  PageResponse,
  ContentResponse,
  MenuResponse,
} from './types.js';

export interface InjectCmsClientOptions {
  /** Base URL of the delivery API (e.g. "https://delivery.example.com") */
  baseUrl: string;
  /** Platform ID injected as x-platform-id header on every request */
  platformId: string;
}

export class InjectCmsClient {
  private readonly baseUrl: string;
  private readonly platformId: string;

  constructor(options: InjectCmsClientOptions) {
    // Strip trailing slash to avoid double-slash in request paths
    this.baseUrl = options.baseUrl.replace(/\/$/, '');
    this.platformId = options.platformId;
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}${path}`, {
        ...init,
        headers: {
          'x-platform-id': this.platformId,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...init?.headers,
        },
      });
    } catch (err) {
      // Network-level failure: DNS resolution, ECONNREFUSED, etc.
      // Re-throw as InjectCmsError with status 0
      throw new InjectCmsError(
        err instanceof Error ? err.message : 'Network error',
        0,
      );
    }

    if (!response.ok) {
      let message = response.statusText;
      try {
        const body = await response.json() as { message?: string };
        message = body?.message ?? message;
      } catch {
        // Response body is not JSON — use statusText
      }
      throw new InjectCmsError(message, response.status);
    }

    return response.json() as Promise<T>;
  }

  /** GET /delivery/page/:slug — returns page with nested contents and metas */
  getPage(slug: string): Promise<PageResponse> {
    return this.request<PageResponse>(`/delivery/page/${encodeURIComponent(slug)}`);
  }

  /** GET /delivery/pages — returns all pages for the platform */
  listPages(): Promise<PageResponse[]> {
    return this.request<PageResponse[]>('/delivery/pages');
  }

  /** GET /delivery/zone/:zone — returns content items in a zone */
  getZone(zone: string): Promise<ContentResponse[]> {
    return this.request<ContentResponse[]>(`/delivery/zone/${encodeURIComponent(zone)}`);
  }

  /** POST /delivery/zones — returns content items for multiple zones keyed by zone name */
  getZones(zones: string[]): Promise<Record<string, ContentResponse[]>> {
    return this.request<Record<string, ContentResponse[]>>('/delivery/zones', {
      method: 'POST',
      body: JSON.stringify({ zones }),
    });
  }

  /** GET /delivery/menu — returns all menus for the platform */
  listMenus(): Promise<MenuResponse[]> {
    return this.request<MenuResponse[]>('/delivery/menu');
  }

  /** GET /delivery/menu/:zone — returns menu tree for a specific zone */
  getMenuByZone(zone: string): Promise<MenuResponse> {
    return this.request<MenuResponse>(`/delivery/menu/${encodeURIComponent(zone)}`);
  }
}
