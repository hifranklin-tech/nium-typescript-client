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
 * @interface FXStandard500Error
 */
export interface FXStandard500Error {
    /**
     * 
     * @type {string}
     * @memberof FXStandard500Error
     */
    'code'?: FXStandard500ErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof FXStandard500Error
     */
    'description'?: FXStandard500ErrorDescriptionEnum;
}

export const FXStandard500ErrorCodeEnum = {
    InternalError: 'internal_error',
    ExternalDependentSystemFailed: 'external_dependent_system_failed'
} as const;

export type FXStandard500ErrorCodeEnum = typeof FXStandard500ErrorCodeEnum[keyof typeof FXStandard500ErrorCodeEnum];
export const FXStandard500ErrorDescriptionEnum = {
    AnInternalErrorOccurred: 'An internal error occurred'
} as const;

export type FXStandard500ErrorDescriptionEnum = typeof FXStandard500ErrorDescriptionEnum[keyof typeof FXStandard500ErrorDescriptionEnum];


