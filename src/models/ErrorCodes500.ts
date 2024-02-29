/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* The detailed error code associated with HTTP status 500. * `fx_dependency_error`: Error happens when the service calls its dependencies. * `fx_uncategorized_error`: Service errors not categorized. 
*/
export enum ErrorCodes500 {
    DependencyError = 'fx_dependency_error',
    UncategorizedError = 'fx_uncategorized_error'
}