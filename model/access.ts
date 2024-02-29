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
import { Account } from './account';
// May contain unused imports in some cases
// @ts-ignore
import { Balance } from './balance';
// May contain unused imports in some cases
// @ts-ignore
import { Transaction } from './transaction';

/**
 * 
 * @export
 * @interface Access
 */
export interface Access {
    /**
     * This is an array which holds account detail fields.
     * @type {Array<Account>}
     * @memberof Access
     */
    'accounts'?: Array<Account>;
    /**
     * Only \"allAccounts\" value is admitted.
     * @type {string}
     * @memberof Access
     */
    'allPsd2'?: string;
    /**
     * Only \"allAccounts\" or \"allAccountsWithBalances\" values are admitted
     * @type {string}
     * @memberof Access
     */
    'availableAccounts'?: string;
    /**
     * This is an array which holds balance detail fields.
     * @type {Array<Balance>}
     * @memberof Access
     */
    'balances'?: Array<Balance>;
    /**
     * This is an array which holds transaction detail fields.
     * @type {Array<Transaction>}
     * @memberof Access
     */
    'transactions'?: Array<Transaction>;
}

