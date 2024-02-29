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
 * @interface WalletRefundResponseDTO
 */
export interface WalletRefundResponseDTO {
    /**
     * This field will return a success message.
     * @type {string}
     * @memberof WalletRefundResponseDTO
     */
    'message'?: string;
    /**
     * This is a unique system reference number generated by card issuance platform for the transaction.
     * @type {string}
     * @memberof WalletRefundResponseDTO
     */
    'systemReferenceNumber'?: string;
}
