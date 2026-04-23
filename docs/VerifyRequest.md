# VerifyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountHolderName** | **string** | The name of the account holder. | [default to undefined]
**externalId** | **string** | External client request ID to track verification response. | [optional] [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code] representing the currency for the account verification. This field specifies the currency in which the verification is conducted (e.g. MYR for Malaysian Ringgit). | [optional] [default to undefined]
**country** | **string** | The 2-letter [ISO-2 country code] of the country where the bank account is held. | [default to undefined]
**bank** | [**Bank**](Bank.md) |  | [optional] [default to undefined]
**proxy** | [**Proxy**](Proxy.md) |  | [optional] [default to undefined]
**verificationEntity** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VerifyRequest } from 'nium-client';

const instance: VerifyRequest = {
    accountHolderName,
    externalId,
    currency,
    country,
    bank,
    proxy,
    verificationEntity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
