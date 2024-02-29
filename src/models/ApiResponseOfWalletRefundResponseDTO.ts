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

import { WalletRefundResponseDTO } from '../models/WalletRefundResponseDTO';
import { HttpFile } from '../http/http';

export class ApiResponseOfWalletRefundResponseDTO {
    'body'?: WalletRefundResponseDTO;
    /**
    * This field will return the HTTP status code with its interpretation.
    */
    'code'?: string;
    /**
    * This field will return the response message.
    */
    'message'?: string;
    /**
    * This field signifies if the request was successful or has an error.
    */
    'status'?: ApiResponseOfWalletRefundResponseDTOStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "WalletRefundResponseDTO",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
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
            "type": "ApiResponseOfWalletRefundResponseDTOStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiResponseOfWalletRefundResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ApiResponseOfWalletRefundResponseDTOStatusEnum {
    _200Ok = '200 OK',
    _400BadRequest = '400 BAD_REQUEST',
    _403Forbidden = '403 FORBIDDEN',
    _404NotFound = '404 NOT_FOUND',
    _500InternalServerError = '500 INTERNAL_SERVER_ERROR',
    _502BadGateway = '502 BAD_GATEWAY',
    _503ServiceUnavailable = '503 SERVICE_UNAVAILABLE'
}

