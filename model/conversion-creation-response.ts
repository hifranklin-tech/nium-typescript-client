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
import { CancellationReason } from './cancellation-reason';
// May contain unused imports in some cases
// @ts-ignore
import { ConversionStatus } from './conversion-status';

/**
 * 
 * @export
 * @interface ConversionCreationResponse
 */
export interface ConversionCreationResponse {
    /**
     * Unique identifier of the conversion.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'id'?: string;
    /**
     * 
     * @type {ConversionStatus}
     * @memberof ConversionCreationResponse
     */
    'status'?: ConversionStatus;
    /**
     * Scheduled settlement time in UTC. This is significant for future-dated conversions (e.g., nextDay, 2days). Ensure sufficient funds in the customer\'s wallet before this time to avoid cancellation and related charges.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'conversionTime'?: string;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'sourceCurrencyCode'?: string;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'destinationCurrencyCode'?: string;
    /**
     * The source amount to be converted to the destination currency.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'sourceAmount'?: number;
    /**
     * The amount needed in the destination currency.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'destinationAmount'?: number;
    /**
     * Unique identifier of the quote.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'quoteId'?: string;
    /**
     * Exchange rate with markup to be used for the conversion.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'netExchangeRate'?: number;
    /**
     * Foreign exchange market rate for the currency pair, used as the benchmark for quote calculation.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'exchangeRate'?: number;
    /**
     * Markup rate applied to the exchange rate for the conversion by Nium.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'markupRate'?: number;
    /**
     * The amount charged in the destination currency as the markup for the conversion.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'destinationMarkupAmount'?: number;
    /**
     * Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'systemReferenceNumber'?: string;
    /**
     * Free text comment for clients to record and track the conversion.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'customerComment'?: string;
    /**
     * The fee charged when executing the cancellation.
     * @type {number}
     * @memberof ConversionCreationResponse
     */
    'cancellationFee'?: number;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the cancellation fee.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'cancellationFeeCurrencyCode'?: string;
    /**
     * 
     * @type {CancellationReason}
     * @memberof ConversionCreationResponse
     */
    'cancellationReason'?: CancellationReason;
    /**
     * Free text comment for clients to record and track cancellation of the conversion.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'cancellationComment'?: string;
    /**
     * Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'cancellationFeeSystemReferenceNumber'?: string;
    /**
     * Time of creation in UTC.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'createdTime'?: string;
    /**
     * Time of update in UTC.
     * @type {string}
     * @memberof ConversionCreationResponse
     */
    'updatedTime'?: string;
}


