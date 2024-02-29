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
import { BusinessAddress } from './business-address';
// May contain unused imports in some cases
// @ts-ignore
import { CorporateRegisteredAddress } from './corporate-registered-address';

/**
 * 
 * @export
 * @interface BusinessPartnerAddresses
 */
export interface BusinessPartnerAddresses {
    /**
     * 
     * @type {BusinessAddress}
     * @memberof BusinessPartnerAddresses
     */
    'businessAddress'?: BusinessAddress;
    /**
     * 
     * @type {CorporateRegisteredAddress}
     * @memberof BusinessPartnerAddresses
     */
    'registeredAddress'?: CorporateRegisteredAddress;
}
