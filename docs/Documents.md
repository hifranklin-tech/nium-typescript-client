# Documents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the identification document | [optional] [default to undefined]
**identificationNumber** | **string** | Unique identification number of the document | [optional] [default to undefined]
**issuanceCountry** | **string** | ISO-2 country where the identification document is issued | [optional] [default to undefined]
**expiryDate** | **string** | expiry date of the document if applicable | [optional] [default to undefined]

## Example

```typescript
import { Documents } from 'nium-client';

const instance: Documents = {
    type,
    identificationNumber,
    issuanceCountry,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
