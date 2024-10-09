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
 * @interface ExternalAccountServiceStandard404Error
 */
export interface ExternalAccountServiceStandard404Error {
    /**
     * 
     * @type {string}
     * @memberof ExternalAccountServiceStandard404Error
     */
    'code'?: ExternalAccountServiceStandard404ErrorCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof ExternalAccountServiceStandard404Error
     */
    'description'?: ExternalAccountServiceStandard404ErrorDescriptionEnum;
}

export const ExternalAccountServiceStandard404ErrorCodeEnum = {
    ResourceNotFound: 'resource_not_found'
} as const;

export type ExternalAccountServiceStandard404ErrorCodeEnum = typeof ExternalAccountServiceStandard404ErrorCodeEnum[keyof typeof ExternalAccountServiceStandard404ErrorCodeEnum];
export const ExternalAccountServiceStandard404ErrorDescriptionEnum = {
    ResourceNotFound: 'Resource not found'
} as const;

export type ExternalAccountServiceStandard404ErrorDescriptionEnum = typeof ExternalAccountServiceStandard404ErrorDescriptionEnum[keyof typeof ExternalAccountServiceStandard404ErrorDescriptionEnum];


