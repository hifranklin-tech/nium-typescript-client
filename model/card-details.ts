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
import { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import { BlockAndReplaceStatus } from './block-and-replace-status';
// May contain unused imports in some cases
// @ts-ignore
import { CardInfo } from './card-info';
// May contain unused imports in some cases
// @ts-ignore
import { CardTokensDTO } from './card-tokens-dto';
// May contain unused imports in some cases
// @ts-ignore
import { Demographics } from './demographics';
// May contain unused imports in some cases
// @ts-ignore
import { EmbossingDetails } from './embossing-details';

/**
 * 
 * @export
 * @interface CardDetails
 */
export interface CardDetails {
    /**
     * This field contains the unique card identifier generated while new/add-on card issuance.
     * @type {string}
     * @memberof CardDetails
     */
    'cardHashId'?: string;
    /**
     * 
     * @type {CardInfo}
     * @memberof CardDetails
     */
    'details'?: CardInfo;
    /**
     * 
     * @type {EmbossingDetails}
     * @memberof CardDetails
     */
    'embossing'?: EmbossingDetails;
    /**
     * This field contains the last updated timestamp
     * @type {string}
     * @memberof CardDetails
     */
    'lastUpdatedOn'?: string;
    /**
     * 
     * @type {BlockAndReplaceStatus}
     * @memberof CardDetails
     */
    'blockAndReplaceStatus'?: BlockAndReplaceStatus;
    /**
     * 
     * @type {Demographics}
     * @memberof CardDetails
     */
    'demographics'?: Demographics;
    /**
     * 
     * @type {Address}
     * @memberof CardDetails
     */
    'deliveredTo'?: Address;
    /**
     * This array contains the token details.
     * @type {Array<CardTokensDTO>}
     * @memberof CardDetails
     */
    'tokens'?: Array<CardTokensDTO>;
}

