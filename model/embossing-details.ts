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
 * Embossing details
 * @export
 * @interface EmbossingDetails
 */
export interface EmbossingDetails {
    /**
     * This field contains the printed name on card.
     * @type {string}
     * @memberof EmbossingDetails
     */
    'nameOnCard'?: string;
    /**
     * This field contains the printed additional line on card.
     * @type {string}
     * @memberof EmbossingDetails
     */
    'additionalLine'?: string;
    /**
     * This field contains the mode of delivery of a card.
     * @type {string}
     * @memberof EmbossingDetails
     */
    'issuanceMode'?: string;
    /**
     * This field contains the card created date
     * @type {string}
     * @memberof EmbossingDetails
     */
    'createdOn'?: string;
    /**
     * This field contains the card processed date
     * @type {string}
     * @memberof EmbossingDetails
     */
    'processedOn'?: string;
    /**
     * This field contains the card printed date
     * @type {string}
     * @memberof EmbossingDetails
     */
    'printedOn'?: string;
    /**
     * This field contains the card dispatched date
     * @type {string}
     * @memberof EmbossingDetails
     */
    'dispatchedOn'?: string;
    /**
     * This field contains the card dispatched airway bill
     * @type {string}
     * @memberof EmbossingDetails
     */
    'dispatchAWB'?: string;
}

