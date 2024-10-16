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
import type { CustomerDetailsResponseV2DTO } from './customer-details-response-v2-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { CustomerPagination } from './customer-pagination';

/**
 * 
 * @export
 * @interface PaginatedResponseDTOCustomerDetailsResponseV2DTO
 */
export interface PaginatedResponseDTOCustomerDetailsResponseV2DTO {
    /**
     * 
     * @type {Array<CustomerDetailsResponseV2DTO>}
     * @memberof PaginatedResponseDTOCustomerDetailsResponseV2DTO
     */
    'content'?: Array<CustomerDetailsResponseV2DTO>;
    /**
     * 
     * @type {CustomerPagination}
     * @memberof PaginatedResponseDTOCustomerDetailsResponseV2DTO
     */
    'pagination'?: CustomerPagination;
}

