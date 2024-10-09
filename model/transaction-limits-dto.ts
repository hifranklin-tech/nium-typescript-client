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
import type { TransactionLimitDTO } from './transaction-limit-dto';

/**
 * 
 * @export
 * @interface TransactionLimitsDTO
 */
export interface TransactionLimitsDTO {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type {string}
     * @memberof TransactionLimitsDTO
     */
    'cardHashId'?: string;
    /**
     * This array contains an object for each card limit parameter. This object contains the below data elements. Refer to the example for exact structure.
     * @type {Array<TransactionLimitDTO>}
     * @memberof TransactionLimitsDTO
     */
    'transactionLimits': Array<TransactionLimitDTO>;
}

