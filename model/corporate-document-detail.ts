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
 * @interface CorporateDocumentDetail
 */
export interface CorporateDocumentDetail {
    /**
     * This field accepts the document number for the uploaded document. This field is required only if the documents are being uploaded  AU: Optional EU: Required UK: Optional SG: Optional
     * @type {string}
     * @memberof CorporateDocumentDetail
     */
    'documentNumber'?: string;
    /**
     * This field accepts the type of the document. The acceptable types of the documents are:  Business Registration Document Trust Deed Partnership Deed Association Deed Register of Directors Register of Shareholders  AU: Optional EU: Required UK: Optional SG: Optional
     * @type {string}
     * @memberof CorporateDocumentDetail
     */
    'documentType'?: string;
}
