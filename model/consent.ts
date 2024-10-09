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


// May contain unused imports in some cases
// @ts-ignore
import type { Access } from './access';
// May contain unused imports in some cases
// @ts-ignore
import type { ScaStatus } from './sca-status';

/**
 * 
 * @export
 * @interface Consent
 */
export interface Consent {
    /**
     * 
     * @type {Access}
     * @memberof Consent
     */
    'access'?: Access;
    /**
     * Authentication status of the consent.
     * @type {string}
     * @memberof Consent
     */
    'consentStatus'?: string;
    /**
     * This field indicates the requested maximum frequency for an access per day.
     * @type {number}
     * @memberof Consent
     */
    'frequencyPerDay'?: number;
    /**
     * This date is containing the date of the last action on the consent object either through the XS2A interface or the PSU/ASPSP interface having an impact on the status.
     * @type {string}
     * @memberof Consent
     */
    'lastActionDate'?: string;
    /**
     * If the consent is for recurring access to the account data then the recurringIndicator value will be true or if the consent is for one access to the account data then the recurringIndicator value will be false.
     * @type {boolean}
     * @memberof Consent
     */
    'recurringIndicator'?: boolean;
    /**
     * 
     * @type {ScaStatus}
     * @memberof Consent
     */
    'scaStatus'?: ScaStatus;
    /**
     * This valid date for the requested consent. The content is the local ASPSP date in ISODate and the format is 2017-10-30.
     * @type {string}
     * @memberof Consent
     */
    'validUntil'?: string;
}

