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
import { TransactionResponseDTO } from './transaction-response-dto';

/**
 * 
 * @export
 * @interface ClientTransactionsResponseDTO
 */
export interface ClientTransactionsResponseDTO {
    /**
     * This field contains an array that holds additional data.
     * @type {Array<TransactionResponseDTO>}
     * @memberof ClientTransactionsResponseDTO
     */
    'content'?: Array<TransactionResponseDTO>;
    /**
     * This field contains the number of elements in the response body.
     * @type {number}
     * @memberof ClientTransactionsResponseDTO
     */
    'totalElements'?: number;
    /**
     * This field contains the number of pages in response body.
     * @type {number}
     * @memberof ClientTransactionsResponseDTO
     */
    'totalPages'?: number;
}
