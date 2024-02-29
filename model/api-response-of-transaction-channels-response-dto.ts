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
import { TransactionChannelsResponseDTO } from './transaction-channels-response-dto';

/**
 * 
 * @export
 * @interface ApiResponseOfTransactionChannelsResponseDTO
 */
export interface ApiResponseOfTransactionChannelsResponseDTO {
    /**
     * 
     * @type {TransactionChannelsResponseDTO}
     * @memberof ApiResponseOfTransactionChannelsResponseDTO
     */
    'body'?: TransactionChannelsResponseDTO;
    /**
     * This field will return the HTTP status code with its interpretation.
     * @type {string}
     * @memberof ApiResponseOfTransactionChannelsResponseDTO
     */
    'code'?: string;
    /**
     * This field will return the response message.
     * @type {string}
     * @memberof ApiResponseOfTransactionChannelsResponseDTO
     */
    'message'?: string;
    /**
     * This field signifies if the request was successful or has an error.
     * @type {string}
     * @memberof ApiResponseOfTransactionChannelsResponseDTO
     */
    'status'?: ApiResponseOfTransactionChannelsResponseDTOStatusEnum;
}

export const ApiResponseOfTransactionChannelsResponseDTOStatusEnum = {
    _200Ok: '200 OK',
    _400BadRequest: '400 BAD_REQUEST',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE'
} as const;

export type ApiResponseOfTransactionChannelsResponseDTOStatusEnum = typeof ApiResponseOfTransactionChannelsResponseDTOStatusEnum[keyof typeof ApiResponseOfTransactionChannelsResponseDTOStatusEnum];


