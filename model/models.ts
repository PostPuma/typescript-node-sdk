import localVarRequest from 'request';

export * from './account';
export * from './accountData';
export * from './createPostRequest';
export * from './createTagRequest';
export * from './deleteMediaFiles200Response';
export * from './deleteMediaFilesRequest';
export * from './deletePostRequest';
export * from './deletePosts200Response';
export * from './deletePosts200ResponseOneOf';
export * from './deletePosts200ResponseOneOf1';
export * from './deletePostsRequest';
export * from './listAccounts200Response';
export * from './listMediaFiles200Response';
export * from './listPosts200Response';
export * from './listTags200Response';
export * from './mediaFile';
export * from './post';
export * from './postUser';
export * from './queuePost200Response';
export * from './schedulePostRequest';
export * from './tag';
export * from './updatePostRequest';
export * from './updateTagRequest';
export * from './version';
export * from './versionContent';
export * from './versionOptions';
export * from './versionOptionsInstagram';
export * from './versionOptionsLinkedin';
export * from './versionOptionsMastodon';
export * from './versionOptionsPinterest';
export * from './versionOptionsPinterestBoards';
export * from './versionOptionsTiktok';
export * from './versionOptionsTiktokPrivacyLevel';
export * from './versionOptionsYoutube';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AccountData } from './accountData';
import { CreatePostRequest } from './createPostRequest';
import { CreateTagRequest } from './createTagRequest';
import { DeleteMediaFiles200Response } from './deleteMediaFiles200Response';
import { DeleteMediaFilesRequest } from './deleteMediaFilesRequest';
import { DeletePostRequest } from './deletePostRequest';
import { DeletePosts200Response } from './deletePosts200Response';
import { DeletePosts200ResponseOneOf } from './deletePosts200ResponseOneOf';
import { DeletePosts200ResponseOneOf1 } from './deletePosts200ResponseOneOf1';
import { DeletePostsRequest } from './deletePostsRequest';
import { ListAccounts200Response } from './listAccounts200Response';
import { ListMediaFiles200Response } from './listMediaFiles200Response';
import { ListPosts200Response } from './listPosts200Response';
import { ListTags200Response } from './listTags200Response';
import { MediaFile } from './mediaFile';
import { Post } from './post';
import { PostUser } from './postUser';
import { QueuePost200Response } from './queuePost200Response';
import { SchedulePostRequest } from './schedulePostRequest';
import { Tag } from './tag';
import { UpdatePostRequest } from './updatePostRequest';
import { UpdateTagRequest } from './updateTagRequest';
import { Version } from './version';
import { VersionContent } from './versionContent';
import { VersionOptions } from './versionOptions';
import { VersionOptionsInstagram } from './versionOptionsInstagram';
import { VersionOptionsLinkedin } from './versionOptionsLinkedin';
import { VersionOptionsMastodon } from './versionOptionsMastodon';
import { VersionOptionsPinterest } from './versionOptionsPinterest';
import { VersionOptionsPinterestBoards } from './versionOptionsPinterestBoards';
import { VersionOptionsTiktok } from './versionOptionsTiktok';
import { VersionOptionsTiktokPrivacyLevel } from './versionOptionsTiktokPrivacyLevel';
import { VersionOptionsYoutube } from './versionOptionsYoutube';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountData": AccountData,
    "CreatePostRequest": CreatePostRequest,
    "CreateTagRequest": CreateTagRequest,
    "DeleteMediaFiles200Response": DeleteMediaFiles200Response,
    "DeleteMediaFilesRequest": DeleteMediaFilesRequest,
    "DeletePostRequest": DeletePostRequest,
    "DeletePosts200Response": DeletePosts200Response,
    "DeletePosts200ResponseOneOf": DeletePosts200ResponseOneOf,
    "DeletePosts200ResponseOneOf1": DeletePosts200ResponseOneOf1,
    "DeletePostsRequest": DeletePostsRequest,
    "ListAccounts200Response": ListAccounts200Response,
    "ListMediaFiles200Response": ListMediaFiles200Response,
    "ListPosts200Response": ListPosts200Response,
    "ListTags200Response": ListTags200Response,
    "MediaFile": MediaFile,
    "Post": Post,
    "PostUser": PostUser,
    "QueuePost200Response": QueuePost200Response,
    "SchedulePostRequest": SchedulePostRequest,
    "Tag": Tag,
    "UpdatePostRequest": UpdatePostRequest,
    "UpdateTagRequest": UpdateTagRequest,
    "Version": Version,
    "VersionContent": VersionContent,
    "VersionOptions": VersionOptions,
    "VersionOptionsInstagram": VersionOptionsInstagram,
    "VersionOptionsLinkedin": VersionOptionsLinkedin,
    "VersionOptionsMastodon": VersionOptionsMastodon,
    "VersionOptionsPinterest": VersionOptionsPinterest,
    "VersionOptionsPinterestBoards": VersionOptionsPinterestBoards,
    "VersionOptionsTiktok": VersionOptionsTiktok,
    "VersionOptionsTiktokPrivacyLevel": VersionOptionsTiktokPrivacyLevel,
    "VersionOptionsYoutube": VersionOptionsYoutube,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
