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


// May contain unused imports in some cases
// @ts-ignore
import type { AutoSweepBankDetails } from './auto-sweep-bank-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ClientCurrencyResponseDTO } from './client-currency-response-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentIdsDTO } from './payment-ids-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { RemitterAccountWhiteList } from './remitter-account-white-list';

/**
 * 
 * @export
 * @interface ClientDetailResponseDTO2
 */
export interface ClientDetailResponseDTO2 {
    /**
     * This is applicable to RHA clients. This field will ensure whether the account-validation transactions are forwarded to client or not
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'accountValidation'?: boolean;
    /**
     * This field indicates if inter client wallet transfer is enabled.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'allowInterClientWalletTransfer'?: boolean;
    /**
     * This field specifies if third party funding is allowed or not.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'allowThirdPartyFunding'?: boolean;
    /**
     * This field contains the flag for apple pay support.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'applePaySupport'?: boolean;
    /**
     * 
     * @type {AutoSweepBankDetails}
     * @memberof ClientDetailResponseDTO2
     */
    'autoSweepBankDetails'?: AutoSweepBankDetails;
    /**
     * This field indicates whether an individual customer at the child level should have the same billing address as the business address of the corporate customer at the parent level.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'billingAddressAsCorporate'?: boolean;
    /**
     * This field specifies the default transaction narrative.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'cardTxnNarrative'?: string;
    /**
     * This field specifies the internal card transaction product code.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'cardTxnProductCode'?: string;
    /**
     * This field contains the card transaction redirected URL.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'cardTxnRedirectUrl'?: string;
    /**
     * This field indicates whether an individual customer must be treated as a child card and be associated with a corporate customer at the parent level.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'childMustHaveParent'?: boolean;
    /**
     * This field contains the unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'clientHashId'?: string;
    /**
     * This field shall be deprecated in future.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'clientIdNumber'?: string;
    /**
     * This field specifies the compliance callback URL.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'complianceCallbackUrl'?: string;
    /**
     * This field contains the redirection URL for compliance callback.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'complianceStatusCallbackUrl'?: string;
    /**
     * This field indicates whether Confirmation of Payee is allowed or not.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'confirmationOfPayee'?: boolean;
    /**
     * This field contains the client\'s contact number.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'contactNo'?: string;
    /**
     * This field contains the 3-letter ISO-4217 currency code.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'countryCode'?: string;
    /**
     * This is an array objects which holds currency details.
     * @type {Array<ClientCurrencyResponseDTO>}
     * @memberof ClientDetailResponseDTO2
     */
    'currencies'?: Array<ClientCurrencyResponseDTO>;
    /**
     * This field denotes the authorization type of a client. The valid values are SINGLE, DUAL, MULTI, and AUTO_SWEEP.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'currencyAuthorizationType'?: ClientDetailResponseDTO2CurrencyAuthorizationTypeEnum;
    /**
     * This field contains the client preference to levy custom fee.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'customFeeEnabled'?: boolean;
    /**
     * This field contains the customer authorization URL.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'customerAuthUrl'?: string;
    /**
     * This field contains the mobile/email uniqueness flag.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'deduplicationFlag'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'ekycRedirectUrl'?: string;
    /**
     * This field contains the client\'s email Id.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'email'?: string;
    /**
     * <p>Details if a customer can fund their own wallet.</p> <ul>   <li><strong>RESTRICTED</strong>: The customer can\'t fund their own wallet.</li>   <li><strong>ONLY_DEBIT</strong>: The customer can only fund their wallet using a debit card.</li>   <li><strong>CREDIT_AND_DEBIT</strong>: The customer can fund their wallet with a debit or credit card.</li> </ul> 
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'fundingInstrumentType'?: ClientDetailResponseDTO2FundingInstrumentTypeEnum;
    /**
     * This field contains the flag for google pay support.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'googlePaySupport'?: boolean;
    /**
     * This field contains the license ownership for a client.The possible values are:
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'licenseEntity'?: ClientDetailResponseDTO2LicenseEntityEnum;
    /**
     * This field contains the client\'s logo URL.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'logoUrl'?: string;
    /**
     * This field contains the cross currency transaction markup value.
     * @type {number}
     * @memberof ClientDetailResponseDTO2
     */
    'markup'?: number;
    /**
     * This field contains the minimum customer age which should be 18 years. Discuss with your NIUM account manager for any special use-cases.
     * @type {number}
     * @memberof ClientDetailResponseDTO2
     */
    'minimumCustomerAge'?: number;
    /**
     * This field contains the name of a client.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'name'?: string;
    /**
     * This field contains the Webhook notification redirection URL.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'notificationWebhook'?: string;
    /**
     * This is an array object which holds the client payment Id response details.
     * @type {Array<PaymentIdsDTO>}
     * @memberof ClientDetailResponseDTO2
     */
    'paymentIds'?: Array<PaymentIdsDTO>;
    /**
     * This field contains the Post Funded Payout of the client.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'postFundedPayout'?: boolean;
    /**
     * This field contains the name defined for ICC transactions
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'prefundName'?: string;
    /**
     * This field contains the regulatory region of the client.
     * @type {string}
     * @memberof ClientDetailResponseDTO2
     */
    'regulatoryRegion'?: ClientDetailResponseDTO2RegulatoryRegionEnum;
    /**
     * This field contains the flag for samsung pay support.
     * @type {boolean}
     * @memberof ClientDetailResponseDTO2
     */
    'samsungPaySupport'?: boolean;
    /**
     * This is an array object which holds the remitter accounts which are whitelisted for the client.
     * @type {Array<RemitterAccountWhiteList>}
     * @memberof ClientDetailResponseDTO2
     */
    'whitelistedRemitterAccounts'?: Array<RemitterAccountWhiteList>;
}

export const ClientDetailResponseDTO2CurrencyAuthorizationTypeEnum = {
    Single: 'SINGLE',
    Dual: 'DUAL',
    Multi: 'MULTI',
    AutoSweep: 'AUTO_SWEEP'
} as const;

export type ClientDetailResponseDTO2CurrencyAuthorizationTypeEnum = typeof ClientDetailResponseDTO2CurrencyAuthorizationTypeEnum[keyof typeof ClientDetailResponseDTO2CurrencyAuthorizationTypeEnum];
export const ClientDetailResponseDTO2FundingInstrumentTypeEnum = {
    Restricted: 'RESTRICTED',
    OnlyDebit: 'ONLY_DEBIT',
    CreditAndDebit: 'CREDIT_AND_DEBIT'
} as const;

export type ClientDetailResponseDTO2FundingInstrumentTypeEnum = typeof ClientDetailResponseDTO2FundingInstrumentTypeEnum[keyof typeof ClientDetailResponseDTO2FundingInstrumentTypeEnum];
export const ClientDetailResponseDTO2LicenseEntityEnum = {
    Nium: 'NIUM',
    ThirdParty: 'THIRD_PARTY'
} as const;

export type ClientDetailResponseDTO2LicenseEntityEnum = typeof ClientDetailResponseDTO2LicenseEntityEnum[keyof typeof ClientDetailResponseDTO2LicenseEntityEnum];
export const ClientDetailResponseDTO2RegulatoryRegionEnum = {
    Sg: 'SG',
    Eu: 'EU',
    Au: 'AU',
    Hk: 'HK',
    Uk: 'UK',
    Us: 'US',
    Ca: 'CA'
} as const;

export type ClientDetailResponseDTO2RegulatoryRegionEnum = typeof ClientDetailResponseDTO2RegulatoryRegionEnum[keyof typeof ClientDetailResponseDTO2RegulatoryRegionEnum];


