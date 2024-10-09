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
 * @interface BusinessPartnerDetailsResponseDTO
 */
export interface BusinessPartnerDetailsResponseDTO {
    /**
     * This field contains the address line 1 of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'addressLine1'?: string;
    /**
     * This field contains the address line 2 of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'addressLine2'?: string;
    /**
     * This field contains the entity type of the business partner. The possible values are: Director Ultimate Beneficial Owner Shareholder Authorized Signatory Authorized Representative Protector Partner Trustee Settlor Members Executor
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'businessEntityType'?: string;
    /**
     * This field contains the registered business name of the business partner.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'businessName'?: string;
    /**
     * This field contains the legal entity type of the business.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'businessType'?: string;
    /**
     * This field contains the city name of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'city'?: string;
    /**
     * This field contains the country name of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'country'?: string;
    /**
     * This field contains the postcode of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'postcode'?: string;
    /**
     * This field contains the unique reference ID.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'referenceId'?: string;
    /**
     * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'registeredCountry'?: string;
    /**
     * This field contains the business registration date.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'registeredDate'?: string;
    /**
     * This field contains the registered business registration number of the business partner.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'registrationNumber'?: string;
    /**
     * This field contains the share percentage that the business partner or the stakeholder holds in the company.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'sharePercentage'?: string;
    /**
     * This field contains the state name of the registered address.
     * @type {string}
     * @memberof BusinessPartnerDetailsResponseDTO
     */
    'state'?: string;
}

