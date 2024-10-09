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
import type { ContactDetails } from './contact-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductAddress } from './product-address';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductDocumentDetail } from './product-document-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductProfessionalDetails } from './product-professional-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductTaxDetails } from './product-tax-details';

/**
 * 
 * @export
 * @interface ApplicantDetails2
 */
export interface ApplicantDetails2 {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApplicantDetails2
     */
    'additionalInfo'?: { [key: string]: string; };
    /**
     * 
     * @type {ProductAddress}
     * @memberof ApplicantDetails2
     */
    'address'?: ProductAddress;
    /**
     * 
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'birthCountry'?: string;
    /**
     * 
     * @type {ContactDetails}
     * @memberof ApplicantDetails2
     */
    'contactDetails'?: ContactDetails;
    /**
     * 
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {ProductDocumentDetail}
     * @memberof ApplicantDetails2
     */
    'documentDetails'?: ProductDocumentDetail;
    /**
     * This field accepts the first name of the applicant.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'firstName'?: string;
    /**
     * This field accepts the gender of the applicant.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'isResident'?: string;
    /**
     * This field accepts the registered business name of the business partner.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'kycMode'?: string;
    /**
     * This field accepts the last name of the applicant.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'lastName'?: string;
    /**
     * This field accepts the middle name of the applicant.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'middleName'?: string;
    /**
     * This field accepts the [2-letter ISO Alpha-2 country code](doc:currency-and-country-codes) for the nationality of the applicant.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'nationality'?: string;
    /**
     * This field accepts the customer\'s occupation. Refer to [Enum values](https://docs.nium.com/apis/docs/unified-add-customer-api) for the description.   Note: This field is mandatory for CA.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'occupation'?: ApplicantDetails2OccupationEnum;
    /**
     * This array accepts the professional details of the applicant.
     * @type {Array<ProductProfessionalDetails>}
     * @memberof ApplicantDetails2
     */
    'professionalDetails'?: Array<ProductProfessionalDetails>;
    /**
     * This field accepts the reference ID of the applicant for which the RFI is raised.
     * @type {string}
     * @memberof ApplicantDetails2
     */
    'referenceId'?: string;
    /**
     * 
     * @type {Array<ProductTaxDetails>}
     * @memberof ApplicantDetails2
     */
    'taxDetails'?: Array<ProductTaxDetails>;
}

export const ApplicantDetails2OccupationEnum = {
    Oc0001: 'OC0001',
    Oc1001: 'OC1001',
    Oc1002: 'OC1002',
    Oc1003: 'OC1003',
    Oc1110: 'OC1110',
    Oc1120: 'OC1120',
    Oc1201: 'OC1201',
    Oc1210: 'OC1210',
    Oc1211: 'OC1211',
    Oc1220: 'OC1220',
    Oc1310: 'OC1310',
    Oc1311: 'OC1311',
    Oc1320: 'OC1320',
    Oc1410: 'OC1410',
    Oc1411: 'OC1411',
    Oc1420: 'OC1420',
    Oc1430: 'OC1430',
    Oc1440: 'OC1440',
    Oc2001: 'OC2001',
    Oc2110: 'OC2110',
    Oc2111: 'OC2111',
    Oc2112: 'OC2112',
    Oc2120: 'OC2120',
    Oc2121: 'OC2121',
    Oc2122: 'OC2122',
    Oc2123: 'OC2123',
    Oc2130: 'OC2130',
    Oc2131: 'OC2131',
    Oc2132: 'OC2132',
    Oc2133: 'OC2133',
    Oc2139: 'OC2139',
    Oc2210: 'OC2210',
    Oc2211: 'OC2211',
    Oc2221: 'OC2221',
    Oc2222: 'OC2222',
    Oc2223: 'OC2223',
    Oc2230: 'OC2230',
    Oc2231: 'OC2231',
    Oc3001: 'OC3001',
    Oc3110: 'OC3110',
    Oc3111: 'OC3111',
    Oc3112: 'OC3112',
    Oc3120: 'OC3120',
    Oc3130: 'OC3130',
    Oc3210: 'OC3210',
    Oc3211: 'OC3211',
    Oc3212: 'OC3212',
    Oc3220: 'OC3220',
    Oc3310: 'OC3310',
    Oc4001: 'OC4001',
    Oc4002: 'OC4002',
    Oc4003: 'OC4003',
    Oc4004: 'OC4004',
    Oc4110: 'OC4110',
    Oc4120: 'OC4120',
    Oc4121: 'OC4121',
    Oc4122: 'OC4122',
    Oc4130: 'OC4130',
    Oc4131: 'OC4131',
    Oc4132: 'OC4132',
    Oc4140: 'OC4140',
    Oc4210: 'OC4210',
    Oc4220: 'OC4220',
    Oc4310: 'OC4310',
    Oc4320: 'OC4320',
    Oc4410: 'OC4410',
    Oc4420: 'OC4420',
    Oc4510: 'OC4510',
    Oc5001: 'OC5001',
    Oc5110: 'OC5110',
    Oc5111: 'OC5111',
    Oc5112: 'OC5112',
    Oc5210: 'OC5210',
    Oc5211: 'OC5211',
    Oc5212: 'OC5212',
    Oc5310: 'OC5310',
    Oc5311: 'OC5311',
    Oc5312: 'OC5312',
    Oc5320: 'OC5320',
    Oc5410: 'OC5410',
    Oc5510: 'OC5510',
    Oc6001: 'OC6001',
    Oc6002: 'OC6002',
    Oc6003: 'OC6003',
    Oc6004: 'OC6004',
    Oc6201: 'OC6201',
    Oc6202: 'OC6202',
    Oc6210: 'OC6210',
    Oc6220: 'OC6220',
    Oc6310: 'OC6310',
    Oc6320: 'OC6320',
    Oc6321: 'OC6321',
    Oc6322: 'OC6322',
    Oc6410: 'OC6410',
    Oc6420: 'OC6420',
    Oc6430: 'OC6430',
    Oc6431: 'OC6431',
    Oc6432: 'OC6432',
    Oc6440: 'OC6440',
    Oc6441: 'OC6441',
    Oc6510: 'OC6510',
    Oc6520: 'OC6520',
    Oc6521: 'OC6521',
    Oc6522: 'OC6522',
    Oc6531: 'OC6531',
    Oc6532: 'OC6532',
    Oc7001: 'OC7001',
    Oc7002: 'OC7002',
    Oc7201: 'OC7201',
    Oc7202: 'OC7202',
    Oc7210: 'OC7210',
    Oc7220: 'OC7220',
    Oc7230: 'OC7230',
    Oc7231: 'OC7231',
    Oc7232: 'OC7232',
    Oc7240: 'OC7240',
    Oc7241: 'OC7241',
    Oc7242: 'OC7242',
    Oc7250: 'OC7250',
    Oc7260: 'OC7260',
    Oc7299: 'OC7299',
    Oc7310: 'OC7310',
    Oc7311: 'OC7311',
    Oc7320: 'OC7320',
    Oc7330: 'OC7330',
    Oc7331: 'OC7331',
    Oc7340: 'OC7340',
    Oc7410: 'OC7410',
    Oc7420: 'OC7420',
    Oc7510: 'OC7510',
    Oc7511: 'OC7511',
    Oc7520: 'OC7520',
    Oc7521: 'OC7521',
    Oc8001: 'OC8001',
    Oc8002: 'OC8002',
    Oc8201: 'OC8201',
    Oc8202: 'OC8202',
    Oc8203: 'OC8203',
    Oc8310: 'OC8310',
    Oc8311: 'OC8311',
    Oc8312: 'OC8312',
    Oc8410: 'OC8410',
    Oc8411: 'OC8411',
    Oc8412: 'OC8412',
    Oc8510: 'OC8510',
    Oc8511: 'OC8511',
    Oc8512: 'OC8512',
    Oc9001: 'OC9001',
    Oc9201: 'OC9201',
    Oc9202: 'OC9202',
    Oc9210: 'OC9210',
    Oc9310: 'OC9310',
    Oc9320: 'OC9320',
    Oc9410: 'OC9410',
    Oc9411: 'OC9411',
    Oc9412: 'OC9412',
    Oc9413: 'OC9413',
    Oc9414: 'OC9414',
    Oc9415: 'OC9415',
    Oc9420: 'OC9420',
    Oc9421: 'OC9421',
    Oc9510: 'OC9510'
} as const;

export type ApplicantDetails2OccupationEnum = typeof ApplicantDetails2OccupationEnum[keyof typeof ApplicantDetails2OccupationEnum];


