# BeneficiaryValidationRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutMethod** | **string** | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL PROXY | [default to undefined]
**beneficiaryAccountNumber** | **string** | The beneficiary account number. | [optional] [default to undefined]
**routingCodeType1** | **string** | This field accepts the routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. This field is Required if the payoutMethod is LOCAL. | [optional] [default to undefined]
**routingCodeValue1** | **string** | This field accepts the routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. This field is Required if the payoutMethod is LOCAL. | [optional] [default to undefined]
**beneficiaryName** | **string** | The name of a beneficiary. | [optional] [default to undefined]
**beneficiaryContactNumber** | **string** |  | [optional] [default to undefined]
**destinationCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the beneficiary\&#39;s address. | [default to undefined]
**beneficiaryCountryCode** | **string** |  | [optional] [default to undefined]
**beneficiaryAccountType** | **string** |  | [optional] [default to undefined]
**destinationCurrency** | **string** |  | [optional] [default to undefined]
**proxyType** | **string** | This field indicates the proxy type sent in the payment request.  For SGD-PayNow: The proxy type can be MOBILE, UEN , or NRIC For INR-UPI: The proxy type should be VPA  For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note : This field is mandatory when the payoutMethod type is PROXY. | [optional] [default to undefined]
**proxyValue** | **string** | This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code. | [optional] [default to undefined]
**beneficiaryBankCode** | **string** | The bank code of the beneficiary. E.g: The bank code for England is GB. Note: This field is mandatory when the destination country is Pakistan (PK). | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryValidationRequestDTO } from 'nium-client';

const instance: BeneficiaryValidationRequestDTO = {
    payoutMethod,
    beneficiaryAccountNumber,
    routingCodeType1,
    routingCodeValue1,
    beneficiaryName,
    beneficiaryContactNumber,
    destinationCountry,
    beneficiaryCountryCode,
    beneficiaryAccountType,
    destinationCurrency,
    proxyType,
    proxyValue,
    beneficiaryBankCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
