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



/**
 * 
 * @export
 * @interface ConfirmFundingInstrumentRequestDTO
 */
export interface ConfirmFundingInstrumentRequestDTO {
    /**
     * The one-time password (OTP) you received from Nium when calling the Add Funding Instrument API.This is a required field for EU and UK direct deposit.
     * @type {string}
     * @memberof ConfirmFundingInstrumentRequestDTO
     */
    'otpReceived'?: string;
}
