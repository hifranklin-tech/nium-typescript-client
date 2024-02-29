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
 * @interface CustomerApiError
 */
export interface CustomerApiError {
    /**
     * This field will return an error message if any error occurs or blank if request is successfully executed.
     * @type {Array<string>}
     * @memberof CustomerApiError
     */
    'errors'?: Array<string>;
    /**
     * This field will return a message if a request is successfully executed or blank in case of an error.
     * @type {string}
     * @memberof CustomerApiError
     */
    'message'?: string;
    /**
     * This field returns an HTTP status code according to the success and failure of the request.
     * @type {string}
     * @memberof CustomerApiError
     */
    'status'?: CustomerApiErrorStatusEnum;
}

export const CustomerApiErrorStatusEnum = {
    _200Ok: '200 OK',
    _400BadRequest: '400 BAD_REQUEST',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE'
} as const;

export type CustomerApiErrorStatusEnum = typeof CustomerApiErrorStatusEnum[keyof typeof CustomerApiErrorStatusEnum];

