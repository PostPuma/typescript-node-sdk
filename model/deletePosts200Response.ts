/**
 * PostPuma - OpenAPI 3.0
 * PostPuma API specifications
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@postpuma.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DeletePosts200ResponseOneOf } from './deletePosts200ResponseOneOf';
import { DeletePosts200ResponseOneOf1 } from './deletePosts200ResponseOneOf1';

export class DeletePosts200Response {
    'deleted'?: boolean;
    'toTrash'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "toTrash",
            "baseName": "to_trash",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DeletePosts200Response.attributeTypeMap;
    }
}

