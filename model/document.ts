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
 * @interface Document
 */
export interface Document {
    /**
     * The document saved as a base64 encoded string.
     * @type {string}
     * @memberof Document
     */
    'document'?: string;
    /**
     * The name of the file.
     * @type {string}
     * @memberof Document
     */
    'fileName'?: string;
    /**
     * The file type. Valid types are `application/pdf`, `image/jpeg`, `image/jpg`, `image/png`, `jpeg`, `jpg`, and `png`.
     * @type {string}
     * @memberof Document
     */
    'fileType'?: string;
}

