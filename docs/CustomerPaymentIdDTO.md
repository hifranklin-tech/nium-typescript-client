# CustomerPaymentIdDTO

The unique payment Ids assigned to the customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html). | [optional] [default to undefined]
**uniquePaymentId** | **string** | The virtual account number per currency provided to customers for supported regions and configuration, for example, IBAN in EU, virtual account number from Moonova in AU, or else, it will be null. | [optional] [default to undefined]
**uniquePayerId** | **string** | The unique email Id provided to the customer in addition to uniquePaymentId for supported regions and configuration, or else it will be null, for example, abc12_ca@nium.com. | [optional] [default to undefined]
**bankName** | **string** | The bank name for the paymentId. | [optional] [default to undefined]

## Example

```typescript
import { CustomerPaymentIdDTO } from 'nium-client';

const instance: CustomerPaymentIdDTO = {
    currencyCode,
    uniquePaymentId,
    uniquePayerId,
    bankName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
