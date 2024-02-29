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


// May contain unused imports in some cases
// @ts-ignore
import { WalletRfiAttributeResponse } from './wallet-rfi-attribute-response';

/**
 * 
 * @export
 * @interface TransactionRfiDetailsResponse
 */
export interface TransactionRfiDetailsResponse {
    /**
     * This field contains the description of the RFI.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'description'?: string;
    /**
     * This field contains the type of the document if applicable, for example, POI, POA, etc.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'documentType'?: string;
    /**
     * This flag signifies if the RFI is mandatory or not.
     * @type {boolean}
     * @memberof TransactionRfiDetailsResponse
     */
    'mandatory'?: boolean;
    /**
     * This field contains the remarks provided while raising the RFI.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'remarks'?: string;
    /**
     * This array contains the required data for the RFI.
     * @type {Array<WalletRfiAttributeResponse>}
     * @memberof TransactionRfiDetailsResponse
     */
    'requiredData'?: Array<WalletRfiAttributeResponse>;
    /**
     * This field contains the unique RFI hash ID.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'rfiHashId'?: string;
    /**
     * This field contains the unique identifier for group of RFI raised for the customer transaction.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'rfiId'?: string;
    /**
     * This field contains Transaction RFI status.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'rfiStatus'?: TransactionRfiDetailsResponseRfiStatusEnum;
    /**
     * This field contains the type of the transaction entity. The possible values are: DEBTOR CREDITOR
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'transactionEntityType'?: TransactionRfiDetailsResponseTransactionEntityTypeEnum;
    /**
     * This field contains the type of RFI. It could be document or data.
     * @type {string}
     * @memberof TransactionRfiDetailsResponse
     */
    'type'?: string;
}

export const TransactionRfiDetailsResponseRfiStatusEnum = {
    None: 'NONE',
    InProgress: 'IN_PROGRESS',
    Completed: 'COMPLETED',
    ActionRequired: 'ACTION_REQUIRED',
    Error: 'ERROR',
    Reject: 'REJECT',
    Expired: 'EXPIRED',
    RfiRequested: 'RFI_REQUESTED',
    RfiResponded: 'RFI_RESPONDED',
    Unknown: 'UNKNOWN',
    Initiated: 'INITIATED',
    Pending: 'PENDING',
    Clear: 'CLEAR',
    Closed: 'CLOSED'
} as const;

export type TransactionRfiDetailsResponseRfiStatusEnum = typeof TransactionRfiDetailsResponseRfiStatusEnum[keyof typeof TransactionRfiDetailsResponseRfiStatusEnum];
export const TransactionRfiDetailsResponseTransactionEntityTypeEnum = {
    Debtor: 'DEBTOR',
    Creditor: 'CREDITOR'
} as const;

export type TransactionRfiDetailsResponseTransactionEntityTypeEnum = typeof TransactionRfiDetailsResponseTransactionEntityTypeEnum[keyof typeof TransactionRfiDetailsResponseTransactionEntityTypeEnum];


