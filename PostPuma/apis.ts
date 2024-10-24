export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './mediaApi';
import { MediaApi } from './mediaApi';
export * from './postsApi';
import { PostsApi } from './postsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountsApi, MediaApi, PostsApi, TagsApi];
