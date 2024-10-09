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
 * @interface OOBCallbackRequestDTO
 */
export interface OOBCallbackRequestDTO {
    /**
     * 
     * @type {string}
     * @memberof OOBCallbackRequestDTO
     */
    'authTransactionId': string;
    /**
     * 
     * @type {string}
     * @memberof OOBCallbackRequestDTO
     */
    'referenceNumber': string;
    /**
     * 
     * @type {string}
     * @memberof OOBCallbackRequestDTO
     */
    'statusCode': OOBCallbackRequestDTOStatusCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof OOBCallbackRequestDTO
     */
    'status'?: OOBCallbackRequestDTOStatusEnum;
}

export const OOBCallbackRequestDTOStatusCodeEnum = {
    Sss000: 'SSS000',
    Vcl001: 'VCL001',
    Vcl002: 'VCL002',
    Vcu001: 'VCU001',
    Vcu601: 'VCU601',
    Vcu602: 'VCU602',
    Vcu603: 'VCU603',
    Vcu701: 'VCU701',
    Vwa001: 'VWA001',
    Vcf001: 'VCF001',
    Vct001: 'VCT001',
    Vcd001: 'VCD001',
    Vii001: 'VII001',
    Vii002: 'VII002',
    Uas001: 'UAS001',
    Uas002: 'UAS002',
    Uas003: 'UAS003',
    Uas004: 'UAS004',
    Ise999: 'ISE999'
} as const;

export type OOBCallbackRequestDTOStatusCodeEnum = typeof OOBCallbackRequestDTOStatusCodeEnum[keyof typeof OOBCallbackRequestDTOStatusCodeEnum];
export const OOBCallbackRequestDTOStatusEnum = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Blocked: 'BLOCKED',
    PBlock: 'P_BLOCK',
    Suspend: 'SUSPEND',
    Pending: 'PENDING',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Uploaded: 'UPLOADED',
    Reviewed: 'REVIEWED',
    Failed: 'FAILED',
    Success: 'SUCCESS',
    Assigned: 'ASSIGNED',
    Unassigned: 'UNASSIGNED',
    TempBlock: 'TEMP_BLOCK',
    All: 'All',
    Archived: 'ARCHIVED',
    VirtualActive: 'VIRTUAL_ACTIVE',
    Closed: 'CLOSED',
    Renewed: 'RENEWED',
    Damaged: 'DAMAGED',
    DoNotHonour: 'DO_NOT_HONOUR',
    LostCard: 'LOST_CARD',
    ReferToIssuer: 'REFER_TO_ISSUER',
    CardPinBlocked: 'CARD_PIN_BLOCKED',
    CardVoided: 'CARD_VOIDED',
    CardDestroyed: 'CARD_DESTROYED',
    StolenCard: 'STOLEN_CARD',
    CardExpired: 'CARD_EXPIRED',
    Fraud: 'FRAUD',
    TempBlock2: 'TEMP_BLOCK'
} as const;

export type OOBCallbackRequestDTOStatusEnum = typeof OOBCallbackRequestDTOStatusEnum[keyof typeof OOBCallbackRequestDTOStatusEnum];


