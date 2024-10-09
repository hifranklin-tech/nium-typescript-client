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
 * @interface CardAssignResponseDTO
 */
export interface CardAssignResponseDTO {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type {string}
     * @memberof CardAssignResponseDTO
     */
    'cardHashId'?: string;
    /**
     * This field contains the card activation status. The values are VIRTUAL_ACTIVE and INACTIVE. In case of Assign Card flow, expected status is INACTIVE.
     * @type {string}
     * @memberof CardAssignResponseDTO
     */
    'cardActivationStatus'?: CardAssignResponseDTOCardActivationStatusEnum;
    /**
     * This field contains the 16-digit masked card number in format 1234-56xx-xxxx-3456.
     * @type {string}
     * @memberof CardAssignResponseDTO
     */
    'maskedCardNumber'?: string;
}

export const CardAssignResponseDTOCardActivationStatusEnum = {
    VirtualActiveinactive: 'VIRTUAL_ACTIVE,INACTIVE'
} as const;

export type CardAssignResponseDTOCardActivationStatusEnum = typeof CardAssignResponseDTOCardActivationStatusEnum[keyof typeof CardAssignResponseDTOCardActivationStatusEnum];


