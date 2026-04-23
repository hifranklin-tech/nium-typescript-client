# CardInfo

Card details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardProductId** | **string** | Pre-defined product Id, defined at Nium and communicated to client for card issuance. | [optional] [default to undefined]
**plasticId** | **string** | The pre-defined plastic Id which is used to determine card design. | [optional] [default to undefined]
**regionCode** | **string** | The 2-letter [region code](/docs/currency-and-country-codes) for the card. | [optional] [default to undefined]
**maskedCardNumber** | **string** | The 16-digit masked card number in format 1234-56xx-xxxx-3456. | [optional] [default to undefined]
**proxyNumber** | **string** | The reference number for the card. | [optional] [default to undefined]
**cardType** | **string** | The issued card type. | [optional] [default to undefined]
**issuanceType** | **string** | The type of the card issued. | [optional] [default to undefined]
**cardStatus** | **string** | The activation status of the card. | [optional] [default to undefined]
**childCustomerHashId** | **string** | Unique ID for an individual customer linked to a parent-level corporate customer. Used to associate and track the child customer within a corporate customer\&#39;s program. | [optional] [default to undefined]

## Example

```typescript
import { CardInfo } from 'nium-client';

const instance: CardInfo = {
    cardProductId,
    plasticId,
    regionCode,
    maskedCardNumber,
    proxyNumber,
    cardType,
    issuanceType,
    cardStatus,
    childCustomerHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
