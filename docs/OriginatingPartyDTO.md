# OriginatingPartyDTO

This field accepts the originating, intermediary, and beneficiary institution details in the payment chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bic** | **string** | This field accepts the Business Identifier Code of the institution. | [default to undefined]
**country** | **string** | This field accepts the country code of the institution. | [default to undefined]
**lei** | **string** | This field accepts the Legal Entity Identifier of the institution. | [optional] [default to undefined]
**name** | **string** | This field accepts the name of the institution. | [default to undefined]
**role** | **string** | This field accepts the role of the institution in the payment chain. | [optional] [default to undefined]
**sequence** | **number** | This field accepts the sequence of the institution in the payment chain. | [optional] [default to undefined]

## Example

```typescript
import { OriginatingPartyDTO } from 'nium-client';

const instance: OriginatingPartyDTO = {
    bic,
    country,
    lei,
    name,
    role,
    sequence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
