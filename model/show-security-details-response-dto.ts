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
 * @interface ShowSecurityDetailsResponseDTO
 */
export interface ShowSecurityDetailsResponseDTO {
    /**
     * This field contains RSA Encrypted 3-digit CVV for the card.
     * @type {string}
     * @memberof ShowSecurityDetailsResponseDTO
     */
    'cvv'?: string;
    /**
     * This field contains RSA Encrypted expiry date of the card in MM/YY format.
     * @type {string}
     * @memberof ShowSecurityDetailsResponseDTO
     */
    'expiry'?: string;
    /**
     * This field contains the complete 16 digit card number RSA Encrypted.
     * @type {string}
     * @memberof ShowSecurityDetailsResponseDTO
     */
    'unMaskedCardNumber'?: string;
}

