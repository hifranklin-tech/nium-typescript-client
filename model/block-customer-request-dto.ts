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
 * @interface BlockCustomerRequestDTO
 */
export interface BlockCustomerRequestDTO {
    /**
     * This field accepts the action type of block/unblock.
     * @type {string}
     * @memberof BlockCustomerRequestDTO
     */
    'action': BlockCustomerRequestDTOActionEnum;
    /**
     * This field accepts comment which describes the action or reason. Maximum character limit: 255
     * @type {string}
     * @memberof BlockCustomerRequestDTO
     */
    'comment'?: string;
    /**
     * This field accepts the reason for block/unblock for customer. Following are the valid values with respect to action: => PERMANENT_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • DECEASED • ACCOUNT_CLOSURE • SUSPICIOUS_ACTIVITY • FRAUDULENT_ACTIVITY • POTENTIAL_SANCTION • SANCTIONED_CUSTOMER • BLACKLISTED_CUSTOMER   => TEMPORARY_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • SUSPICIOUS_ACTIVITY • POTENTIAL_SANCTION   => UNBLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST
     * @type {string}
     * @memberof BlockCustomerRequestDTO
     */
    'reason': BlockCustomerRequestDTOReasonEnum;
}

export const BlockCustomerRequestDTOActionEnum = {
    TemporaryBlock: 'TEMPORARY_BLOCK',
    PermanentBlock: 'PERMANENT_BLOCK',
    Unblock: 'UNBLOCK'
} as const;

export type BlockCustomerRequestDTOActionEnum = typeof BlockCustomerRequestDTOActionEnum[keyof typeof BlockCustomerRequestDTOActionEnum];
export const BlockCustomerRequestDTOReasonEnum = {
    CustomerRequest: 'CUSTOMER_REQUEST',
    ClientRequest: 'CLIENT_REQUEST',
    Deceased: 'DECEASED',
    AccountClosure: 'ACCOUNT_CLOSURE',
    SuspiciousActivity: 'SUSPICIOUS_ACTIVITY',
    FraudulentActivity: 'FRAUDULENT_ACTIVITY',
    PotentialSanction: 'POTENTIAL_SANCTION',
    SanctionedCustomer: 'SANCTIONED_CUSTOMER',
    BlacklistedCustomer: 'BLACKLISTED_CUSTOMER',
    NoObjection: 'NO_OBJECTION'
} as const;

export type BlockCustomerRequestDTOReasonEnum = typeof BlockCustomerRequestDTOReasonEnum[keyof typeof BlockCustomerRequestDTOReasonEnum];

