# VerifyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A unique account verification service id of the response. This is used to track the end-to-end flow of account verification. | [optional] [default to undefined]
**accountHolderName** | **string** | The name of the account holder. | [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code] representing the currency for the account verification. This field specifies the currency in which the verification is conducted (e.g. MYR for Malaysian Ringgit). | [default to undefined]
**country** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the individual\&#39;s address. | [default to undefined]
**externalId** | **string** | External client request ID to track verification response. | [optional] [default to undefined]
**status** | **string** | The status of the verification (valid or invalid). | [default to undefined]
**derivedAccountDetails** | [**DerivedAccountDetails**](DerivedAccountDetails.md) |  | [optional] [default to undefined]
**failureCode** | **string** | Failure code will be present if the verificationstatus is invalid. | [optional] [default to undefined]
**description** | **string** | Error description describing the type of error. | [optional] [default to undefined]
**date** | **string** | The date and time when the &#x60;verification&#x60; was created. | [optional] [default to undefined]

## Example

```typescript
import { VerifyResponse } from 'nium-client';

const instance: VerifyResponse = {
    id,
    accountHolderName,
    currency,
    country,
    externalId,
    status,
    derivedAccountDetails,
    failureCode,
    description,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
