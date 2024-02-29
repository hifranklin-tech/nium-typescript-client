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

import { PaymentIdDTO } from '../models/PaymentIdDTO';
import { HttpFile } from '../http/http';

export class CustomerDataExternalResponseDTO {
    /**
    * This field contains the detailed compliance status of the customer. While initiating MyInfo, this field would usually be INITIATED. List of all possible values of complianceStatus field are: • INITIATED • IN_PROGRESS • ACTION_REQUIRED • RFI_REQUESTED • COMPLETED • REJECT • ERROR • EXPIRED • CLOSED
    */
    'complianceStatus'?: string;
    /**
    * This field contains the unique customer identifier generated on customer creation.
    */
    'customerHashId'?: string;
    /**
    * This field contains the overall KYC status of the customer. While initiating MyInfo, this field would usually be Pending. The possible values of kycStatus are: • Pending • Clear • Failed
    */
    'kycStatus'?: string;
    /**
    * This is an array which contains the paymentIds assigned to the customer.
    */
    'paymentIds'?: Array<PaymentIdDTO>;
    /**
    * This field contains the URL returned for myinfo details.
    */
    'redirectUrl'?: string;
    /**
    * This field contains the unique wallet identifier generated simultaneously with customer creation.
    */
    'walletHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "complianceStatus",
            "baseName": "complianceStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "kycStatus",
            "baseName": "kycStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentIds",
            "baseName": "paymentIds",
            "type": "Array<PaymentIdDTO>",
            "format": ""
        },
        {
            "name": "redirectUrl",
            "baseName": "redirectUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "walletHashId",
            "baseName": "walletHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerDataExternalResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

