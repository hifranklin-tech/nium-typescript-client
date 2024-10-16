/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2024.8.20
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface WalletApiResponseOfstring
 */
export interface WalletApiResponseOfstring {
    /**
     * This field will return the response message from the server.
     * @type {string}
     * @memberof WalletApiResponseOfstring
     */
    'body'?: string;
    /**
     * This field will return the HTTP status code with its interpretation.
     * @type {string}
     * @memberof WalletApiResponseOfstring
     */
    'code'?: string;
    /**
     * This field will return the response message.
     * @type {string}
     * @memberof WalletApiResponseOfstring
     */
    'message'?: string;
    /**
     * This field signifies if the request was successful or has an error.
     * @type {string}
     * @memberof WalletApiResponseOfstring
     */
    'status'?: WalletApiResponseOfstringStatusEnum;
}

export const WalletApiResponseOfstringStatusEnum = {
    _200Ok: '200 OK',
    _400BadRequest: '400 BAD_REQUEST',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE'
} as const;

export type WalletApiResponseOfstringStatusEnum = typeof WalletApiResponseOfstringStatusEnum[keyof typeof WalletApiResponseOfstringStatusEnum];


