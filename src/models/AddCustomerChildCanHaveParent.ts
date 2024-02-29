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

import { ComplianceIdentificationDocDTO } from '../models/ComplianceIdentificationDocDTO';
import { CustomerTagDTO } from '../models/CustomerTagDTO';
import { CustomerTaxDetailDTO } from '../models/CustomerTaxDetailDTO';
import { HttpFile } from '../http/http';

export class AddCustomerChildCanHaveParent {
    /**
    * This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15
    */
    'tags'?: Array<CustomerTagDTO>;
    /**
    * This array accepts additional information.
    */
    'additionalInfo'?: { [key: string]: string; };
    /**
    * This field accepts line 1 of the customer’s billing address. In the case of eKYC[GreenId], this field is used to verify the address with the document chosen. Maximum character limit: 40 The format for GreenId is: StreetNumber | StreetName | Suburb.
    */
    'billingAddress1'?: string;
    /**
    * This field accepts the line 2 of customer\'s billing address. Maximum character limit: 40
    */
    'billingAddress2'?: string;
    /**
    * This field accepts the city of customer’s billing address. Maximum character limit: 20
    */
    'billingCity'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the country of customer\'s billing address.
    */
    'billingCountry'?: string;
    /**
    * This field accepts the landmark for customer’s billing address. Maximum character limit: 40
    */
    'billingLandmark'?: string;
    /**
    * This field accepts the state of customer\'s billing address. Maximum character limit: 30
    */
    'billingState'?: string;
    /**
    * This field accepts the zipcode of customer’s billing address. Maximum character limit: 10
    */
    'billingZipCode'?: string;
    /**
    * This field accepts the compliance level for the customer. It is useful when the client has multiple compliance setup. For example, customer may be onboarded with SCREENING and upgrade to SCREENING_KYC later.
    */
    'complianceLevel'?: AddCustomerChildCanHaveParentComplianceLevelEnum;
    /**
    * This field accepts the line 1 of customer\'s correspondence address. Maximum character limit: 40
    */
    'correspondenceAddress1'?: string;
    /**
    * This field accepts the line 2 of customer\'s correspondence address. Maximum character limit: 40
    */
    'correspondenceAddress2'?: string;
    /**
    * This field accepts the city of customer\'s correspondence address. Maximum character limit: 20
    */
    'correspondenceCity'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the country of customer\'s correspondence address.
    */
    'correspondenceCountry'?: string;
    /**
    * This field accepts the landmark for customer\'s correspondence address. Maximum character limit: 40
    */
    'correspondenceLandmark'?: string;
    /**
    * This field accepts the state of customer\'s correspondence address. Maximum character limit: 30
    */
    'correspondenceState'?: string;
    /**
    * This field accepts the zipcode of customer\'s correspondence address. Maximum character limit: 10
    */
    'correspondenceZipCode'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the country prefix code to the customer\'s mobile number.
    */
    'countryCode'?: string;
    /**
    * This field accepts the country IP for the device by the customer for initiating the request.
    */
    'countryIP'?: string;
    /**
    * This field accepts the 2-letter [ISO country code](doc:currency-and-country-codes) denoting the customer’s country of birth. Note: This field is mandatory for EU.
    */
    'countryOfBirth'?: string;
    /**
    * This field accepts the previously generated unique customer identifier of customer.
    */
    'customerHashId'?: string;
    /**
    * This field accepts the date of birth of the customer in YYYY-MM-DD format. Minimum customer age should be 18 years. Discuss with your NIUM account manager for any special use-cases.
    */
    'dateOfBirth'?: string;
    /**
    * This field accepts the line 1 of customer’s delivery address. Maximum character limit: 40
    */
    'deliveryAddress1'?: string;
    /**
    * This field accepts the line 2 of customer\'s delivery address. Maximum character limit: 40
    */
    'deliveryAddress2'?: string;
    /**
    * This field accepts the city of customer\'s delivery address. Maximum character limit: 20
    */
    'deliveryCity'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the country of customer\'s delivery address.
    */
    'deliveryCountry'?: string;
    /**
    * This field accepts the landmark for customer\'s delivery address. Maximum character limit: 40
    */
    'deliveryLandmark'?: string;
    /**
    * This field accepts the state of customer\'s delivery address. Maximum character limit: 30
    */
    'deliveryState'?: string;
    /**
    * This field accepts the zipcode of customer\'s delivery address. Maximum character limit: 10
    */
    'deliveryZipCode'?: string;
    /**
    * This field accepts the designation of the customer for certain shipping industry use-cases. This field can accept only one of the following values: • CAPTAIN • SEAFARER • SMC • VESSEL
    */
    'designation'?: string;
    /**
    * This field accepts the OS of the device used by the customer for initiating the request.
    */
    'deviceInfo'?: string;
    /**
    * This field accepts the unique email address of the customer. Maximum character limit: 60
    */
    'email'?: string;
    /**
    * This field accepts the employee ID of the customer, if applicable.
    */
    'employeeId'?: string;
    /**
    * This field accepts the estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request. The possible values are: • MF001: <1000 • MF002: 1000-5000 • MF003: 5001-10000 • MF004: 10001-20000 • MF005: >20000 See [enum value descriptions](doc:unified-add-customer-api#estimatedmonthlyfunding) Note: This field is mandatory for EU and UK.
    */
    'estimatedMonthlyFunding'?: AddCustomerChildCanHaveParentEstimatedMonthlyFundingEnum;
    /**
    * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) in which estimated monthly funding is expected in the wallet, for example, SGD. Note: This field is mandatory for EU and UK.
    */
    'estimatedMonthlyFundingCurrency'?: string;
    /**
    * This is an array of 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”]. Note: This field is mandatory for EU and UK.
    */
    'expectedCountriesToSendReceiveFrom'?: Array<string>;
    /**
    * This field accepts the first name of the customer. Maximum character limit: 40
    */
    'firstName'?: string;
    /**
    * This field can accept only one of the following values: • Male • Female • Others
    */
    'gender'?: AddCustomerChildCanHaveParentGenderEnum;
    /**
    * This is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10 MB. A separate object is needed for each document image.
    */
    'identificationDoc'?: Array<ComplianceIdentificationDocDTO>;
    /**
    * This field accepts the customer’s intended use of account.  See [enum value descriptions](doc:unified-add-customer-api#intendeduseofaccount) for more information.
    */
    'intendedUseOfAccount'?: AddCustomerChildCanHaveParentIntendedUseOfAccountEnum;
    /**
    * This field specifies if the customer will be doing International send/receive payments. The default value will be false. Note: This field is mandatory for EU and UK.
    */
    'internationalPaymentsSupported'?: boolean;
    /**
    * This field accepts the IP address of the device used by the customer for initiating the request.
    */
    'ipAddress'?: string;
    /**
    * This flag specifies if the customer has accepted or rejected the Terms and Conditions.
    */
    'isTncAccepted'?: boolean;
    /**
    * This field accepts the last name of the customer. Maximum character limit: 40
    */
    'lastName'?: string;
    /**
    * This field accepts the middle name of the customer. Maximum character limit: 40
    */
    'middleName'?: string;
    /**
    * This field accepts the mobile number of the customer--digits only--without the country code. Maximum character limit: 20
    */
    'mobile'?: string;
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the customer\'s citizenship.
    */
    'nationality'?: string;
    /**
    * This field accepts the customer\'s name in native language. Maximum character limit: 40
    */
    'nativeLanguageName'?: string;
    /**
    * This field specifies if the customer is a Politically Exposed Person (PEP) or not. Note: This field is mandatory for EU.
    */
    'pep'?: boolean;
    /**
    * This field accepts the common name or preferred name of the customer. It is also acceptable to pass the first name in this field. Maximum character limit: 20
    */
    'preferredName'?: string;
    /**
    * This field accepts the fee segment associated with a client. Maximum character limit: 64
    */
    'segment'?: string;
    /**
    * This field accepts the session ID for the session of the customer for initiating the request.
    */
    'sessionId'?: string;
    'taxDetails'?: Array<CustomerTaxDetailDTO>;
    /**
    * This field specifies if the electronic verification consent to process customer data for compliance is required or not.
    */
    'verificationConsent'?: boolean;
    /**
    * This field can accept only one of the following values: • E_KYC • MANUAL_KYC • SCREENING • E_DOC_VERIFY
    */
    'kycMode'?: AddCustomerChildCanHaveParentKycModeEnum;
    /**
    * This field contains the unique identifier of the corporate parent customer to whom the individual customer is tagged.
    */
    'parentCustomerHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<CustomerTagDTO>",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "billingAddress1",
            "baseName": "billingAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAddress2",
            "baseName": "billingAddress2",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCity",
            "baseName": "billingCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCountry",
            "baseName": "billingCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingLandmark",
            "baseName": "billingLandmark",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingState",
            "baseName": "billingState",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingZipCode",
            "baseName": "billingZipCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "complianceLevel",
            "baseName": "complianceLevel",
            "type": "AddCustomerChildCanHaveParentComplianceLevelEnum",
            "format": ""
        },
        {
            "name": "correspondenceAddress1",
            "baseName": "correspondenceAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceAddress2",
            "baseName": "correspondenceAddress2",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceCity",
            "baseName": "correspondenceCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceCountry",
            "baseName": "correspondenceCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceLandmark",
            "baseName": "correspondenceLandmark",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceState",
            "baseName": "correspondenceState",
            "type": "string",
            "format": ""
        },
        {
            "name": "correspondenceZipCode",
            "baseName": "correspondenceZipCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryIP",
            "baseName": "countryIP",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryOfBirth",
            "baseName": "countryOfBirth",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryAddress1",
            "baseName": "deliveryAddress1",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryAddress2",
            "baseName": "deliveryAddress2",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryCity",
            "baseName": "deliveryCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryCountry",
            "baseName": "deliveryCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryLandmark",
            "baseName": "deliveryLandmark",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryState",
            "baseName": "deliveryState",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryZipCode",
            "baseName": "deliveryZipCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "designation",
            "baseName": "designation",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceInfo",
            "baseName": "deviceInfo",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "employeeId",
            "baseName": "employeeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "estimatedMonthlyFunding",
            "baseName": "estimatedMonthlyFunding",
            "type": "AddCustomerChildCanHaveParentEstimatedMonthlyFundingEnum",
            "format": ""
        },
        {
            "name": "estimatedMonthlyFundingCurrency",
            "baseName": "estimatedMonthlyFundingCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "expectedCountriesToSendReceiveFrom",
            "baseName": "expectedCountriesToSendReceiveFrom",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "AddCustomerChildCanHaveParentGenderEnum",
            "format": ""
        },
        {
            "name": "identificationDoc",
            "baseName": "identificationDoc",
            "type": "Array<ComplianceIdentificationDocDTO>",
            "format": ""
        },
        {
            "name": "intendedUseOfAccount",
            "baseName": "intendedUseOfAccount",
            "type": "AddCustomerChildCanHaveParentIntendedUseOfAccountEnum",
            "format": ""
        },
        {
            "name": "internationalPaymentsSupported",
            "baseName": "internationalPaymentsSupported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "isTncAccepted",
            "baseName": "isTncAccepted",
            "type": "boolean",
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
            "name": "mobile",
            "baseName": "mobile",
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
            "name": "nativeLanguageName",
            "baseName": "nativeLanguageName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pep",
            "baseName": "pep",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preferredName",
            "baseName": "preferredName",
            "type": "string",
            "format": ""
        },
        {
            "name": "segment",
            "baseName": "segment",
            "type": "string",
            "format": ""
        },
        {
            "name": "sessionId",
            "baseName": "sessionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxDetails",
            "baseName": "taxDetails",
            "type": "Array<CustomerTaxDetailDTO>",
            "format": ""
        },
        {
            "name": "verificationConsent",
            "baseName": "verificationConsent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "kycMode",
            "baseName": "kycMode",
            "type": "AddCustomerChildCanHaveParentKycModeEnum",
            "format": ""
        },
        {
            "name": "parentCustomerHashId",
            "baseName": "parentCustomerHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddCustomerChildCanHaveParent.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AddCustomerChildCanHaveParentComplianceLevelEnum {
    Screening = 'SCREENING',
    ScreeningKyc = 'SCREENING_KYC'
}
export enum AddCustomerChildCanHaveParentEstimatedMonthlyFundingEnum {
    Mf001 = 'MF001',
    Mf002 = 'MF002',
    Mf003 = 'MF003',
    Mf004 = 'MF004',
    Mf005 = 'MF005'
}
export enum AddCustomerChildCanHaveParentGenderEnum {
    Male = 'Male',
    Female = 'Female',
    Others = 'Others'
}
export enum AddCustomerChildCanHaveParentIntendedUseOfAccountEnum {
    Iu100 = 'IU100',
    Iu101 = 'IU101',
    Iu102 = 'IU102',
    Iu103 = 'IU103',
    Iu104 = 'IU104',
    Iu105 = 'IU105',
    Iu106 = 'IU106',
    Iu107 = 'IU107',
    Iu108 = 'IU108',
    Iu109 = 'IU109'
}
export enum AddCustomerChildCanHaveParentKycModeEnum {
    EKyc = 'E_KYC',
    ManualKyc = 'MANUAL_KYC',
    Screening = 'SCREENING',
    EDocVerify = 'E_DOC_VERIFY'
}

