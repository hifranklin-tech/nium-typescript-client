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
import type { RfiAttributeResponse } from './rfi-attribute-response';

/**
 * 
 * @export
 * @interface CustomerRfiDetailsResponse
 */
export interface CustomerRfiDetailsResponse {
    /**
     * This field contains the RFI description or field for which RFI is raised. The example values are passport, gender, etc.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'description'?: string;
    /**
     * This field contains the type of document requested as part of RFI. The possible values are POI, POA, or NA.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'documentType'?: string;
    /**
     * This flag determines the mandatory nature of the RFI.
     * @type {boolean}
     * @memberof CustomerRfiDetailsResponse
     */
    'mandatory'?: boolean;
    /**
     * This field contains the compliance officer’s remarks while raising the RFI.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'remarks'?: string;
    /**
     * This array contains objects with details of each mandatory RFI field that is required by NIUM team. It is mandatory to respond to an RFI with all the required fields. While responding to an RFI, you may refer these details. Example, Passport has many fields and an RFI may be raised for passport number. Referring this array, you may determine which field/value is needed and if it is an RFI for data or document.
     * @type {Array<RfiAttributeResponse>}
     * @memberof CustomerRfiDetailsResponse
     */
    'requiredData'?: Array<RfiAttributeResponse>;
    /**
     * This field contains the unique identifier for each RFI raised for the customer.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'rfiHashId'?: string;
    /**
     * This field contains the unique identifier for group of RFI raised for the customer.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'rfiId'?: string;
    /**
     * This field contains status of the RFI
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'rfiStatus'?: string;
    /**
     * This field contains type of the RFI
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'rfiType'?: CustomerRfiDetailsResponseRfiTypeEnum;
    /**
     * This field contains the type of RFI. The possible values are data or document.
     * @type {string}
     * @memberof CustomerRfiDetailsResponse
     */
    'type'?: string;
}

export const CustomerRfiDetailsResponseRfiTypeEnum = {
    Internal: 'INTERNAL',
    External: 'EXTERNAL'
} as const;

export type CustomerRfiDetailsResponseRfiTypeEnum = typeof CustomerRfiDetailsResponseRfiTypeEnum[keyof typeof CustomerRfiDetailsResponseRfiTypeEnum];


