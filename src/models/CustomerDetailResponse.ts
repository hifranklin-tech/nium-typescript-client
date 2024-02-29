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

import { BusinessDetailsResponseDTO } from '../models/BusinessDetailsResponseDTO';
import { BusinessPartnerDetailsResponseDTO } from '../models/BusinessPartnerDetailsResponseDTO';
import { CustomerRfiDetailsResponse } from '../models/CustomerRfiDetailsResponse';
import { CustomerTaxDetailDTO } from '../models/CustomerTaxDetailDTO';
import { PaymentIdDTO } from '../models/PaymentIdDTO';
import { ProfessionalDetails } from '../models/ProfessionalDetails';
import { RiskAssessmentInfoResponseDTO } from '../models/RiskAssessmentInfoResponseDTO';
import { StakeholderDetailsResponseDTO } from '../models/StakeholderDetailsResponseDTO';
import { HttpFile } from '../http/http';

export class CustomerDetailResponse {
    /**
    * This object contains the user defined key-value pairs provided by the client.
    */
    'tags'?: { [key: string]: string; };
    /**
    * This field contains the line 1 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, which is used for KYC.
    */
    'billingAddress1'?: string;
    /**
    * This field contains the line 2 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'billingAddress2'?: string;
    /**
    * This field contains the city of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address.
    */
    'billingCity'?: string;
    /**
    * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'billingCountry'?: string;
    /**
    * This field contains the landmark for customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'billingLandmark'?: string;
    /**
    * This field contains the state of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'billingState'?: string;
    /**
    * This field contains the zip code of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address.
    */
    'billingZipCode'?: string;
    /**
    * This field contains the comment entered while blocking the customer, if applicable. Otherwise, it contains null.
    */
    'blockComment'?: string;
    /**
    * This field contains the reason for blocking the customer, if applicable. Otherwise, it contains null.
    */
    'blockReason'?: CustomerDetailResponseBlockReasonEnum;
    /**
    * This field contains the details of the entity updating a customer block/unblock, if applicable. Otherwise, it contains null. The possible values are CLIENT or NIUM.
    */
    'blockUpdatedBy'?: CustomerDetailResponseBlockUpdatedByEnum;
    'businessDetails'?: BusinessDetailsResponseDTO;
    'businessPartner'?: Array<BusinessPartnerDetailsResponseDTO>;
    /**
    * This field contains the compliance level for the customer. The possible values for customer type INDIVIDUAL are: SCREENING_KYC, SCREENING, SCREENING_KYB. The possible values for customer type CORPORATE is SCREENING_KYB.
    */
    'complianceLevel'?: string;
    /**
    * This field contains the compliance remarks from Compliance officer, if applicable.
    */
    'complianceRemarks'?: string;
    /**
    * This field contains the overall compliance status of the customer.
    */
    'complianceStatus'?: CustomerDetailResponseComplianceStatusEnum;
    /**
    * This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes) for identifying the country prefix to the customer’s mobile number.
    */
    'countryCode'?: string;
    /**
    * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the customer’s country of birth.
    */
    'countryOfBirth'?: string;
    /**
    * This field contains the timestamp of customer creation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43.
    */
    'createdAt'?: Date;
    /**
    * This field contains the unique customer identifier generated at the time of customer creation.
    */
    'customerHashId'?: string;
    /**
    * This field contains an internal NIUM customer identifier. This field shall be deprecated in future.
    */
    'customerId'?: number;
    /**
    * This field contains the customer type which is either <B>INDIVIDUAL</B> or <B>CORPORATE</B> and this depends on customer onboarding flows.
    */
    'customerType'?: CustomerDetailResponseCustomerTypeEnum;
    /**
    * This field contains the date of birth of the customer [INDIVIDUAL] or applicant [CORPORATE] in YYYY-MM-DD format.
    */
    'dateOfBirth'?: string;
    /**
    * This field contains the line 1 of customer [INDIVIDUAL] or applicant [CORPORATE] delivery address. It is used for card delivery.
    */
    'deliveryAddress1'?: string;
    /**
    * This field contains the line 2 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. It is used for card delivery. Otherwise, it contains null.
    */
    'deliveryAddress2'?: string;
    /**
    * This field contains the city of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address.
    */
    'deliveryCity'?: string;
    /**
    * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'deliveryCountry'?: string;
    /**
    * This field contains the landmark for customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'deliveryLandmark'?: string;
    /**
    * This field contains the state of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains null.
    */
    'deliveryState'?: string;
    /**
    * This field contains the zip code of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address.
    */
    'deliveryZipCode'?: string;
    /**
    * This field contains the designation of an employee, if provided during customer onboarding. Otherwise, it contains null.
    */
    'designation'?: string;
    /**
    * This field contains the unique email address of the customer.
    */
    'email'?: string;
    /**
    * This field contains the employee ID of an employee, if provided during customer onboarding. Otherwise, it contains null.
    */
    'employeeId'?: string;
    /**
    * This field contains the estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request.
    */
    'estimatedMonthlyFunding'?: CustomerDetailResponseEstimatedMonthlyFundingEnum;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) in which estimated monthly funding is expected in the wallet, for example, SGD.
    */
    'estimatedMonthlyFundingCurrency'?: string;
    /**
    * This is an array of 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”].
    */
    'expectedCountriesToSendReceiveFrom'?: Array<string>;
    /**
    * This field contains the first name of the customer [INDIVIDUAL] or applicant [CORPORATE].
    */
    'firstName'?: string;
    /**
    * This field contains the gender of the customer [INDIVIDUAL] or applicant [CORPORATE], if provided during customer onboarding. The possible values are - Male, Female, or Others. Otherwise, it contains null.
    */
    'gender'?: string;
    /**
    * This array contains objects consisting of type and value of each uploaded document.
    */
    'identificationData'?: Array<{ [key: string]: string; }>;
    /**
    * This array contains the list of identification used during KYC. Otherwise, it contains null.
    */
    'identificationTypes'?: Array<string>;
    /**
    * This flag contains the customer’s intended use of account.
    */
    'intendedUseOfAccount'?: string;
    /**
    * This field indicates if the customer will be doing International send/receive payments. The default value will be false.
    */
    'internationalPaymentsSupported'?: boolean;
    /**
    * This field contains the kyc mode  The possible values for customer type INDIVIDUAL are: E_KYC, MANUAL_KYC, SCREENING, EVERIFY_KYC, or NONE.  The possible values for customer type CORPORATE are: KYB or NONE.
    */
    'kycMode'?: string;
    /**
    * This field contains the last name of the customer [INDIVIDUAL] or applicant [CORPORATE].
    */
    'lastName'?: string;
    /**
    * This field contains the middle name of the customer [INDIVIDUAL] or applicant [CORPORATE], if provided. Otherwise, it contains null.
    */
    'middleName'?: string;
    /**
    * This field contains the mobile number of the customer--digits only--without the country code.
    */
    'mobile'?: string;
    /**
    * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) denoting the customer [INDIVIDUAL] or applicant [CORPORATE] citizenship.
    */
    'nationality'?: string;
    /**
    * This field contains the name of the customer in native language, if provided during customer onboarding. Otherwise, it contains null
    */
    'nativeLanguageName'?: string;
    /**
    * This field contains the unique payment Ids assigned to the customer.
    */
    'paymentIds'?: Array<PaymentIdDTO>;
    /**
    * This flag indicates if a customer is a Politically Exposed Person (PEP) or not.
    */
    'pep'?: boolean;
    /**
    * This field contains the preferred name of the customer[INDIVIDUAL] or business name [CORPORATE].
    */
    'preferredName'?: string;
    /**
    * This array contains the applicant\'s professional details information
    */
    'professionalDetails'?: Array<ProfessionalDetails>;
    /**
    * This field contains the  applicant\'s reference id
    */
    'referenceId'?: string;
    /**
    * This field contains the regulatory region of the customer.
    */
    'regulatoryRegion'?: CustomerDetailResponseRegulatoryRegionEnum;
    /**
    * This field contains any system-generated compliance comments, if applicable.
    */
    'remarks'?: string;
    /**
    * This array contains the details of RFI, if raised. Otherwise, it contains null.
    */
    'rfiDetails'?: Array<CustomerRfiDetailsResponse>;
    'riskAssessmentInfo'?: RiskAssessmentInfoResponseDTO;
    /**
    * This field contains the fee segment applicable to the customer. Otherwise, it contains null.
    */
    'segment'?: string;
    /**
    * This is an array object may contain the stakeholder details in certain client onboarding flows. It is null for individual customer onboarding flows.
    */
    'stakeholderDetails'?: Array<StakeholderDetailsResponseDTO>;
    /**
    * This field contains the overall KYC status of the customer
    */
    'status'?: CustomerDetailResponseStatusEnum;
    /**
    * This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null.
    */
    'taxDetails'?: Array<CustomerTaxDetailDTO>;
    /**
    * This flag denotes that the customer has accepted the Terms and Conditions.
    */
    'termsAndConditionAcceptanceFlag'?: boolean;
    /**
    * This name that the customer has accepted the Terms and Conditions.
    */
    'termsAndConditionName'?: string;
    /**
    * This version that the customer has accepted the Terms and Conditions.
    */
    'termsAndConditionVersionId'?: string;
    /**
    * This field contains the timestamp of last customer updation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43.
    */
    'updatedAt'?: Date;
    /**
    * This flag contain the customer consent to proceed in case e-Document verification flow is initiated.
    */
    'verificationConsent'?: boolean;
    /**
    * This field contains the unique wallet identifier generated simultaneously with customer creation.
    */
    'walletHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
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
            "name": "blockComment",
            "baseName": "blockComment",
            "type": "string",
            "format": ""
        },
        {
            "name": "blockReason",
            "baseName": "blockReason",
            "type": "CustomerDetailResponseBlockReasonEnum",
            "format": ""
        },
        {
            "name": "blockUpdatedBy",
            "baseName": "blockUpdatedBy",
            "type": "CustomerDetailResponseBlockUpdatedByEnum",
            "format": ""
        },
        {
            "name": "businessDetails",
            "baseName": "businessDetails",
            "type": "BusinessDetailsResponseDTO",
            "format": ""
        },
        {
            "name": "businessPartner",
            "baseName": "businessPartner",
            "type": "Array<BusinessPartnerDetailsResponseDTO>",
            "format": ""
        },
        {
            "name": "complianceLevel",
            "baseName": "complianceLevel",
            "type": "string",
            "format": ""
        },
        {
            "name": "complianceRemarks",
            "baseName": "complianceRemarks",
            "type": "string",
            "format": ""
        },
        {
            "name": "complianceStatus",
            "baseName": "complianceStatus",
            "type": "CustomerDetailResponseComplianceStatusEnum",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
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
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "customerType",
            "baseName": "customerType",
            "type": "CustomerDetailResponseCustomerTypeEnum",
            "format": ""
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
            "type": "CustomerDetailResponseEstimatedMonthlyFundingEnum",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationData",
            "baseName": "identificationData",
            "type": "Array<{ [key: string]: string; }>",
            "format": ""
        },
        {
            "name": "identificationTypes",
            "baseName": "identificationTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "intendedUseOfAccount",
            "baseName": "intendedUseOfAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "internationalPaymentsSupported",
            "baseName": "internationalPaymentsSupported",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "kycMode",
            "baseName": "kycMode",
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
            "name": "paymentIds",
            "baseName": "paymentIds",
            "type": "Array<PaymentIdDTO>",
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
            "name": "professionalDetails",
            "baseName": "professionalDetails",
            "type": "Array<ProfessionalDetails>",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "regulatoryRegion",
            "baseName": "regulatoryRegion",
            "type": "CustomerDetailResponseRegulatoryRegionEnum",
            "format": ""
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string",
            "format": ""
        },
        {
            "name": "rfiDetails",
            "baseName": "rfiDetails",
            "type": "Array<CustomerRfiDetailsResponse>",
            "format": ""
        },
        {
            "name": "riskAssessmentInfo",
            "baseName": "riskAssessmentInfo",
            "type": "RiskAssessmentInfoResponseDTO",
            "format": ""
        },
        {
            "name": "segment",
            "baseName": "segment",
            "type": "string",
            "format": ""
        },
        {
            "name": "stakeholderDetails",
            "baseName": "stakeholderDetails",
            "type": "Array<StakeholderDetailsResponseDTO>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CustomerDetailResponseStatusEnum",
            "format": ""
        },
        {
            "name": "taxDetails",
            "baseName": "taxDetails",
            "type": "Array<CustomerTaxDetailDTO>",
            "format": ""
        },
        {
            "name": "termsAndConditionAcceptanceFlag",
            "baseName": "termsAndConditionAcceptanceFlag",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "termsAndConditionName",
            "baseName": "termsAndConditionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsAndConditionVersionId",
            "baseName": "termsAndConditionVersionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "verificationConsent",
            "baseName": "verificationConsent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "walletHashId",
            "baseName": "walletHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerDetailResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CustomerDetailResponseBlockReasonEnum {
    CustomerRequest = 'CUSTOMER_REQUEST',
    ClientRequest = 'CLIENT_REQUEST',
    Deceased = 'DECEASED',
    AccountClosure = 'ACCOUNT_CLOSURE',
    SuspiciousActivity = 'SUSPICIOUS_ACTIVITY',
    FraudulentActivity = 'FRAUDULENT_ACTIVITY',
    PotentialSanction = 'POTENTIAL_SANCTION',
    SanctionedCustomer = 'SANCTIONED_CUSTOMER'
}
export enum CustomerDetailResponseBlockUpdatedByEnum {
    Nium = 'NIUM',
    Client = 'CLIENT'
}
export enum CustomerDetailResponseComplianceStatusEnum {
    Initiated = 'INITIATED',
    InProgress = 'IN_PROGRESS',
    ActionRequired = 'ACTION_REQUIRED',
    RfiRequested = 'RFI_REQUESTED',
    Completed = 'COMPLETED',
    Reject = 'REJECT',
    Error = 'ERROR',
    Expired = 'EXPIRED',
    Closed = 'CLOSED'
}
export enum CustomerDetailResponseCustomerTypeEnum {
    Individual = 'INDIVIDUAL',
    Corporate = 'CORPORATE'
}
export enum CustomerDetailResponseEstimatedMonthlyFundingEnum {
    _1000 = '<1000',
    _10005000 = '1000-5000',
    _500110000 = '5001-10000',
    _1000120000 = '10001-20000',
    _20000 = '>20000'
}
export enum CustomerDetailResponseRegulatoryRegionEnum {
    Sg = 'SG',
    Eu = 'EU',
    Au = 'AU',
    Hk = 'HK',
    Uk = 'UK'
}
export enum CustomerDetailResponseStatusEnum {
    Pending = 'Pending',
    Clear = 'Clear',
    Failed = 'Failed',
    Suspended = 'Suspended',
    Blocked = 'Blocked'
}
