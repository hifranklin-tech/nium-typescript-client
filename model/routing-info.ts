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
 * @interface RoutingInfo
 */
export interface RoutingInfo {
    /**
     * This field accepts the routing code type.
     * @type {string}
     * @memberof RoutingInfo
     */
    'type'?: RoutingInfoTypeEnum;
    /**
     * This field accepts the routing code value.
     * @type {string}
     * @memberof RoutingInfo
     */
    'value'?: string;
}

export const RoutingInfoTypeEnum = {
    Swift: 'SWIFT',
    TransitNumber: 'TRANSIT_NUMBER',
    BsbCode: 'BSB_CODE',
    SortCode: 'SORT_CODE',
    AchCode: 'ACH_CODE',
    BranchCode: 'BRANCH_CODE'
} as const;

export type RoutingInfoTypeEnum = typeof RoutingInfoTypeEnum[keyof typeof RoutingInfoTypeEnum];


