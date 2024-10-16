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



/**
 * 
 * @export
 * @interface Standard403Error
 */
export interface Standard403Error {
    /**
     * 
     * @type {string}
     * @memberof Standard403Error
     */
    'code'?: Standard403ErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof Standard403Error
     */
    'description'?: Standard403ErrorDescriptionEnum;
}

export const Standard403ErrorCodeEnum = {
    AccessForbidden: 'access_forbidden'
} as const;

export type Standard403ErrorCodeEnum = typeof Standard403ErrorCodeEnum[keyof typeof Standard403ErrorCodeEnum];
export const Standard403ErrorDescriptionEnum = {
    AccessToResourceNotAllowed: 'Access to resource not allowed'
} as const;

export type Standard403ErrorDescriptionEnum = typeof Standard403ErrorDescriptionEnum[keyof typeof Standard403ErrorDescriptionEnum];


