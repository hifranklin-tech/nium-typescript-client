# RoutingDetails

Routing details for the account derived from partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swift** | **string** | SWIFT code for the bank as derived from partner. | [optional] [default to undefined]
**bankCode** | **string** | Bank code as derived from partner. | [optional] [default to undefined]
**sortCode** | **string** | Sort code as derived from partner. | [optional] [default to undefined]
**achCode** | **string** | ACH code as derived from partner. | [optional] [default to undefined]
**ifsc** | **string** | IFSC code as derived from partner. | [optional] [default to undefined]
**bsbCode** | **string** | BSB code as derived from partner. | [optional] [default to undefined]

## Example

```typescript
import { RoutingDetails } from 'nium-client';

const instance: RoutingDetails = {
    swift,
    bankCode,
    sortCode,
    achCode,
    ifsc,
    bsbCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
