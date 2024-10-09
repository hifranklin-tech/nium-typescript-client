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
 * @interface PayoutIdentificationDocumentDTO
 */
export interface PayoutIdentificationDocumentDTO {
    /**
     * This field accepts the Base64 encoded document being uploaded. The size limit of the original document, which can be pdf, jpeg, jpg, or png, and should not exceed 2MB. It is recommended to use standard libraries for the same. For example, java.util.Base64.getEncoder().encodeToString(byte[] data);This can be used in Java.
     * @type {string}
     * @memberof PayoutIdentificationDocumentDTO
     */
    'document'?: string;
    /**
     * This field accepts the file name of the document being uploaded.
     * @type {string}
     * @memberof PayoutIdentificationDocumentDTO
     */
    'fileName'?: string;
    /**
     * This field accepts the file type of the document being uploaded. The valid values are jpg, jpeg, png, pdf, image/jpg, image/jpeg, image/png, and application/pdf.
     * @type {string}
     * @memberof PayoutIdentificationDocumentDTO
     */
    'fileType'?: string;
}

