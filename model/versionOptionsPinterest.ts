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
import { VersionOptionsPinterestBoards } from './versionOptionsPinterestBoards';

export class VersionOptionsPinterest {
    'title'?: string;
    'link'?: string;
    'boards'?: VersionOptionsPinterestBoards;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "boards",
            "baseName": "boards",
            "type": "VersionOptionsPinterestBoards"
        }    ];

    static getAttributeTypeMap() {
        return VersionOptionsPinterest.attributeTypeMap;
    }
}

