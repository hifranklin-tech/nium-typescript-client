/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductApiError {
    /**
    * List of errors occurred.
    */
    'errors'?: Array<string>;
    /**
    * Error message descriptor.
    */
    'message'?: string;
    /**
    * HttpStatus of the request : BAD_REQUEST, INTERNAL_SERVER_ERROR.
    */
    'status'?: ProductApiErrorStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ProductApiErrorStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductApiError.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ProductApiErrorStatusEnum {
    _200Ok = '200 OK',
    _400BadRequest = '400 BAD_REQUEST',
    _403Forbidden = '403 FORBIDDEN',
    _404NotFound = '404 NOT_FOUND',
    _500InternalServerError = '500 INTERNAL_SERVER_ERROR',
    _502BadGateway = '502 BAD_GATEWAY',
    _503ServiceUnavailable = '503 SERVICE_UNAVAILABLE'
}

