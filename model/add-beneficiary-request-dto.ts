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
 * @interface AddBeneficiaryRequestDTO
 */
export interface AddBeneficiaryRequestDTO {
    /**
     * This fields accepts the authenticationCode generated as part of SCA(Strong Customer Authentication). Note: Authentication code must be passed if regulatory region of the program is UK or EU and License Entity Nium. For other regions, this field is optional.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'authenticationCode'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddBeneficiaryRequestDTO
     */
    'autoSweepPayoutAccount'?: boolean;
    /**
     * This field accepts an account number.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryAccountNumber'?: string;
    /**
     * This field accepts the bank account type of the beneficiary. The account type can be either Individual or Corporate.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryAccountType': AddBeneficiaryRequestDTOBeneficiaryAccountTypeEnum;
    /**
     * This field accepts an address of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryAddress'?: string;
    /**
     * This field accepts the alias of beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryAlias'?: string;
    /**
     * The type of account. This field is conditional in case of WALLET payout and the possible values are: Current Saving Maestra Checking   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryBankAccountType'?: string;
    /**
     * This field accepts the beneficiary bank code.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryBankCode'?: string;
    /**
     * This field accepts the beneficiary bank name.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryBankName'?: string;
    /**
     * This field accepts expiry date of card.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryCardExpiryDate'?: string;
    /**
     * This field accepts issuer name of the card.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryCardIssuerName'?: string;
    /**
     * This field accepts the city of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryCity'?: string;
    /**
     * This field accepts the mobile number country code of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryContactCountryCode'?: string;
    /**
     * This field accepts the name of the contact person of the business, applicable when beneficiary is a business.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryContactName'?: string;
    /**
     * This field accepts the mobile number of the beneficiary--digits only--without the country code.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryContactNumber'?: string;
    /**
     * This field accepts the [ISO-2 country code](doc:currency-and-country-codes) of the beneficiary.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryCountryCode': string;
    /**
     * 
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryDob'?: string;
    /**
     * This field accepts an email of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryEmail'?: string;
    /**
     * This field accepts the entity type of the business, when the beneficiary is a business. Refer to the enum value list for allowed values. The value `go` indicates a majority owned subsidiary of state-owned company.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryEntityType'?: string;
    /**
     * 
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryEstablishmentDate'?: string;
    /**
     * This field accepts the type of identification document name for a beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryIdentificationType'?: string;
    /**
     * This field accepts an identification document number for the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryIdentificationValue'?: string;
    /**
     * This field accepts the name of the beneficiary.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryName': string;
    /**
     * This field accepts the postal code of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryPostcode'?: string;
    /**
     * This field accepts the state of the beneficiary.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'beneficiaryState'?: string;
    /**
     * This field denotes if the beneficiary bank converts the amount in the destination account currency and credits to the account in case the beneficiary account is not in the same currency as destination currency.
     * @type {boolean}
     * @memberof AddBeneficiaryRequestDTO
     */
    'convertDestinationCurrency'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddBeneficiaryRequestDTO
     */
    'defaultAutoSweepPayoutAccount'?: boolean;
    /**
     * This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes) of the destination country.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'destinationCountry'?: string;
    /**
     * This field accepts the 3-letter [ISO-4217 destination currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'destinationCurrency': string;
    /**
     * This field accepts the system generated token number to identify the card stored at NIUM\'s platform. Note: This field is mandatory if the client is non-PCI DSS compliant.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'encryptedBeneficiaryCardToken'?: string;
    /**
     * This field accepts the payout method for the remittance payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'payoutMethod': string;
    /**
     * This field indicates the proxy type sent in the payment request. For SGD-PayNow: The proxy type can be MOBILE, UEN , NRIC, or VPA  For INR-UPI: The proxy type should be VPA For BRL-PIX: The proxy type can be MOBILE, ID, EMAIL, or RANDOM_KEY  For AUD-PayID: The proxy type can be MOBILE, EMAIL, ABN, or ORGANISATION_ID (only domestic payouts are allowed) For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note: This field is mandatory when the payoutMethod type is PROXY.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'proxyType'?: string;
    /**
     * This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'proxyValue'?: string;
    /**
     * This field accepts the relationship of the beneficiary with the remitter.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'remitterBeneficiaryRelationship'?: string;
    /**
     * This field accepts the routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'routingCodeType1'?: string;
    /**
     * This field accepts the routing code type 2, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'routingCodeType2'?: string;
    /**
     * This field accepts the routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'routingCodeValue1'?: string;
    /**
     * This field accepts the routing code value 2, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.   Note: For this conditional field, see the callout at the top of this page.
     * @type {string}
     * @memberof AddBeneficiaryRequestDTO
     */
    'routingCodeValue2'?: string;
}

export const AddBeneficiaryRequestDTOBeneficiaryAccountTypeEnum = {
    Individual: 'Individual',
    Corporate: 'Corporate'
} as const;

export type AddBeneficiaryRequestDTOBeneficiaryAccountTypeEnum = typeof AddBeneficiaryRequestDTOBeneficiaryAccountTypeEnum[keyof typeof AddBeneficiaryRequestDTOBeneficiaryAccountTypeEnum];


