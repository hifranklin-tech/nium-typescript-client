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

import { CorporateAddress } from '../models/CorporateAddress';
import { CorporateContactDetails } from '../models/CorporateContactDetails';
import { CorporateDocumentDetail } from '../models/CorporateDocumentDetail';
import { CorporateProfessionalDetails } from '../models/CorporateProfessionalDetails';
import { HttpFile } from '../http/http';

/**
* This object accepts further details for the stakeholder of the new corporate entity to be onboarded. This object and the items inside are required in case entity type of stakeholder is INDIVIDUAL  AU: Optional EU: Required UK: Required SG: Required
*/
export class CorporateStakeholderDetails {
    'address'?: CorporateAddress;
    'contactDetails'?: CorporateContactDetails;
    /**
    * This field accepts the date of birth of the stakeholder in yyyy-MM-dd format.
    */
    'dateOfBirth'?: string;
    /**
    * This array accepts the document details for the stakeholder. This field is required only if the documents are being uploaded.
    */
    'documentDetails'?: Array<CorporateDocumentDetail>;
    /**
    * This field contains the first name of the stakeholder.
    */
    'firstName'?: string;
    /**
    * This field contains the last name of the stakeholder.
    */
    'lastName'?: string;
    /**
    * This field contains the middle name of the stakeholder.
    */
    'middleName'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) for the nationality of the stakeholder.
    */
    'nationality'?: string;
    /**
    * This array accepts the professional details of the stakeholder.
    */
    'professionalDetails'?: Array<CorporateProfessionalDetails>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CorporateAddress",
            "format": ""
        },
        {
            "name": "contactDetails",
            "baseName": "contactDetails",
            "type": "CorporateContactDetails",
            "format": ""
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentDetails",
            "baseName": "documentDetails",
            "type": "Array<CorporateDocumentDetail>",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string",
            "format": ""
        },
        {
            "name": "professionalDetails",
            "baseName": "professionalDetails",
            "type": "Array<CorporateProfessionalDetails>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateStakeholderDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
