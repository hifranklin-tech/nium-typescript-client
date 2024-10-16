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


// May contain unused imports in some cases
// @ts-ignore
import type { WalletTag } from './wallet-tag';

/**
 * 
 * @export
 * @interface AddWalletRequestDTO
 */
export interface AddWalletRequestDTO {
    /**
     * This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15.
     * @type {Array<WalletTag>}
     * @memberof AddWalletRequestDTO
     */
    'tags'?: Array<WalletTag>;
    /**
     * The list of currencies that the wallet will use. Currencies should be submitted as the [3-letter ISO-4217 currency code](https://www.currency-iso.org/en/home/tables/table-a1.html).
     * @type {Array<string>}
     * @memberof AddWalletRequestDTO
     */
    'currencies'?: Array<string>;
    /**
     * The customer\'s intended use of the wallet.
     * @type {string}
     * @memberof AddWalletRequestDTO
     */
    'intendedUseOfAccount'?: string;
    /**
     * A description to identify the balance held in the wallet.
     * @type {string}
     * @memberof AddWalletRequestDTO
     */
    'name'?: string;
}

