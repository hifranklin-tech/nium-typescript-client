# BeneficiaryPaymentAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **string** | A possible values of a bank account type of a beneficiary. | [optional] [default to undefined]
**bankName** | **string** | A bank name of a beneficiary. | [optional] [default to undefined]
**bankCode** | **string** | A bank account code of a beneficiary. | [optional] [default to undefined]
**accountNumber** | **string** | A bank swift account number of a beneficiary. | [optional] [default to undefined]
**payoutMethod** | **string** | A possible values of payment account types of a beneficiary. | [optional] [default to undefined]
**payoutCurrency** | **string** | A 3-letter ISO-4217 currency code. | [optional] [default to undefined]
**routingCode** | [**Array&lt;RoutingCode&gt;**](RoutingCode.md) | A routing code details | [optional] [default to undefined]
**proxyType** | **string** | This field indicates the proxy type sent in the request.  For SGD-PayNow: The proxy type can be MOBILE, UEN , or NRIC For INR-UPI: The proxy type should be VPA  For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note : This field is mandatory when the payoutMethod type is PROXY. | [optional] [default to undefined]
**proxyValue** | **string** | This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code. | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryPaymentAccount } from 'nium-client';

const instance: BeneficiaryPaymentAccount = {
    accountType,
    bankName,
    bankCode,
    accountNumber,
    payoutMethod,
    payoutCurrency,
    routingCode,
    proxyType,
    proxyValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
