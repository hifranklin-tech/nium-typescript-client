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


// May contain unused imports in some cases
// @ts-ignore
import { ItemDetails } from './item-details';

/**
 * 
 * @export
 * @interface InvoiceDetails
 */
export interface InvoiceDetails {
    /**
     * date of the trade
     * @type {string}
     * @memberof InvoiceDetails
     */
    'date'?: string;
    /**
     * string without special characters
     * @type {string}
     * @memberof InvoiceDetails
     */
    'description'?: string;
    /**
     * contains quantity and price information
     * @type {Array<ItemDetails>}
     * @memberof InvoiceDetails
     */
    'items'?: Array<ItemDetails>;
    /**
     * string without special characters
     * @type {string}
     * @memberof InvoiceDetails
     */
    'name'?: string;
    /**
     * alphanumeric value containing invoice number
     * @type {string}
     * @memberof InvoiceDetails
     */
    'number'?: string;
}

