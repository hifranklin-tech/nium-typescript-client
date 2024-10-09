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
 * @interface WalletWalletApiError
 */
export interface WalletWalletApiError {
    /**
     * List of returned errors.
     * @type {Array<string>}
     * @memberof WalletWalletApiError
     */
    'errors'?: Array<string>;
    /**
     * Description of returned error messages.
     * @type {string}
     * @memberof WalletWalletApiError
     */
    'message'?: string;
    /**
     * HttpStatus of the request : BAD_REQUEST, INTERNAL_SERVER_ERROR.
     * @type {string}
     * @memberof WalletWalletApiError
     */
    'status'?: WalletWalletApiErrorStatusEnum;
}

export const WalletWalletApiErrorStatusEnum = {
    _200Ok: '200 OK',
    _400BadRequest: '400 BAD_REQUEST',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE'
} as const;

export type WalletWalletApiErrorStatusEnum = typeof WalletWalletApiErrorStatusEnum[keyof typeof WalletWalletApiErrorStatusEnum];


