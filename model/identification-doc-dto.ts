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
import { PayoutIdentificationDocumentDTO } from './payout-identification-document-dto';

/**
 * 
 * @export
 * @interface IdentificationDocDTO
 */
export interface IdentificationDocDTO {
    /**
     * This field accepts the color of the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationDocColor'?: string;
    /**
     * This field accepts the expiry date of the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationDocExpiry'?: string;
    /**
     * This field accepts the name of the customer as per the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationDocHolderName'?: string;
    /**
     * This field accepts the issuing country of the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationDocIssuanceCountry'?: string;
    /**
     * This field accepts the reference number of the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationDocReferenceNumber'?: string;
    /**
     * It is an array of actual documents for the data provided in previous fields. We support a maximum of 4 files in the array, and the total max size should be less than 10 MB. A separate object is needed for each document image.
     * @type {Array<PayoutIdentificationDocumentDTO>}
     * @memberof IdentificationDocDTO
     */
    'identificationDocument'?: Array<PayoutIdentificationDocumentDTO>;
    /**
     * This field accepts the authority issuing the document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationIssuingAuthority'?: string;
    /**
     * This field accepts the date of issuance of the document being uploaded. The format should be yyyy-mm-dd. Example, 2010-10-10.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationIssuingDate'?: string;
    /**
     * This field accepts the type of document being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationType'?: string;
    /**
     * This field accepts the unique document id being uploaded.
     * @type {string}
     * @memberof IdentificationDocDTO
     */
    'identificationValue'?: string;
}

