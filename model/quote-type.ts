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
 * The type of the quote.   * `balance_transfer`: Quote for transferring the balance from one currency to another within the same customer wallet.   * `payout`: Quote for transferring money to a registered beneficiary\'s wallet in another currency. 
 * @export
 * @enum {string}
 */

export const QuoteType = {
    BalanceTransfer: 'balance_transfer',
    Payout: 'payout'
} as const;

export type QuoteType = typeof QuoteType[keyof typeof QuoteType];



