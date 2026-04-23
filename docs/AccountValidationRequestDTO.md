# AccountValidationRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationCurrency** | **string** | The 3-letter ISO-3 currency code of the bank account. | [default to undefined]
**destinationCountry** | **string** | The 2-letter [ISO-2 country code](https://docs.nium.com/apis/docs/currency-and-country-codes) of the destination country. | [optional] [default to undefined]
**payoutMethod** | **string** | The different payout modes that\&#39;ll be used by the beneficiary. | [default to undefined]
**proxyType** | **string** | &lt;p&gt;Specifies the proxy type sent in the payment request:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;&lt;strong&gt;SGD-PayNow:&lt;/strong&gt; The proxy type can be &lt;code&gt;MOBILE&lt;/code&gt;, &lt;code&gt;UEN&lt;/code&gt;, or &lt;code&gt;NRIC&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;strong&gt;INR-UPI:&lt;/strong&gt; The proxy type is &lt;code&gt;VPA&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;strong&gt;MYR-DuitNow:&lt;/strong&gt; The proxy type can be &lt;code&gt;NRIC&lt;/code&gt;, &lt;code&gt;PASSPORT&lt;/code&gt;, &lt;code&gt;CORPORATE_REGISTRATION_NUMBER&lt;/code&gt;, &lt;code&gt;MOBILE&lt;/code&gt;, or &lt;code&gt;ARMY_ID&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field is mandatory when the payout method type is &lt;code&gt;PROXY&lt;/code&gt;.&lt;/p&gt; | [optional] [default to undefined]
**proxyValue** | **string** | &lt;p&gt;The available proxy values. This can include VPA, UEN, or a mobile number.&lt;/p&gt; &lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; This field is mandatory when the payout method type is &lt;code&gt;PROXY&lt;/code&gt;.&lt;/p&gt; &lt;p&gt;Mobile number must include country code.&lt;/p&gt; | [optional] [default to undefined]
**bankAccountType** | **string** | The type of bank account (e.g., CREDIT or SAVINGS). | [optional] [default to undefined]
**bankCode** | **string** | The bank code of the beneficiary. E.g: The bank code for England is GB. Note: This field is mandatory when the destination country is Pakistan (PK). | [optional] [default to undefined]
**accountNumber** | **string** | The bank account number which needs to be verified. | [optional] [default to undefined]
**beneficiary** | [**BeneficiaryAccountDetailsDTO**](BeneficiaryAccountDetailsDTO.md) |  | [optional] [default to undefined]
**routingInfo** | [**Array&lt;BankRoutingInfo&gt;**](BankRoutingInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountValidationRequestDTO } from 'nium-client';

const instance: AccountValidationRequestDTO = {
    destinationCurrency,
    destinationCountry,
    payoutMethod,
    proxyType,
    proxyValue,
    bankAccountType,
    bankCode,
    accountNumber,
    beneficiary,
    routingInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
