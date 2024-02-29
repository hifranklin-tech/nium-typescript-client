/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TypedErrorErrorCodes
 */
export interface TypedErrorErrorCodes {
    /**
     * 
     * @type {string}
     * @memberof TypedErrorErrorCodes
     */
    'code'?: TypedErrorErrorCodesCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof TypedErrorErrorCodes
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TypedErrorErrorCodes
     */
    'field'?: string;
}

export const TypedErrorErrorCodesCodeEnum = {
    InvalidClientHashId: 'INVALID_CLIENT_HASH_ID',
    InvalidCustomerHashId: 'INVALID_CUSTOMER_HASH_ID',
    InvalidWalletHashId: 'INVALID_WALLET_HASH_ID',
    InvalidCardHashId: 'INVALID_CARD_HASH_ID',
    CardIsPermanentlyBlocked: 'CARD_IS_PERMANENTLY_BLOCKED',
    CardExpired: 'CARD_EXPIRED',
    ValidationError: 'VALIDATION_ERROR',
    Unauthorized: 'UNAUTHORIZED',
    Forbidden: 'FORBIDDEN',
    BadRequest: 'BAD_REQUEST'
} as const;

export type TypedErrorErrorCodesCodeEnum = typeof TypedErrorErrorCodesCodeEnum[keyof typeof TypedErrorErrorCodesCodeEnum];

