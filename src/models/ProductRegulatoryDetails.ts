/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductRegulatoryDetails {
    /**
    * This array accepts regulated trust type details. The possible values are as follows: ASIC - Registered Managed Investment Scheme MIS - Unregistered Managed Investment Scheme Regulated under a Commonwealth statutory regulator Government Superannuation Fund This field is required in case the region is AU and entity type [refer businessDetails.businessType] is a Regulated Trust.  AU: Optional EU: NA UK: NA SG: Optional
    */
    'regulatedTrustType'?: Array<string>;
    /**
    * This array accepts unregulated trust type details. The possible values are as follows: Family Trust Charitable Trust Testamentary Trust Unit Trust Other Type This field is required in case the region is AU and entity type [refer businessDetails.businessType] is an Unregulated Trust  AU: Optional EU: NA UK: NA SG: NA
    */
    'unregulatedTrustType'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "regulatedTrustType",
            "baseName": "regulatedTrustType",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "unregulatedTrustType",
            "baseName": "unregulatedTrustType",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductRegulatoryDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
