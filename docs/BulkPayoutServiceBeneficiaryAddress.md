# BulkPayoutServiceBeneficiaryAddress

Addresses of beneficiary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | A beneficiary\&#39;s address city | [optional] [default to undefined]
**countryCode** | **string** | A 2-letter ISO country code. | [optional] [default to undefined]
**line1** | **string** | A beneficiary\&#39;s address line1. | [optional] [default to undefined]
**line2** | **string** | A beneficiary\&#39;s address line2. | [optional] [default to undefined]
**postalCode** | **string** | A beneficiary\&#39;s address postal or zip code. | [optional] [default to undefined]
**state** | **string** | A beneficiary\&#39;s address state | [optional] [default to undefined]
**type** | **string** | An possible address types of a beneficiary. | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutServiceBeneficiaryAddress } from 'nium-client';

const instance: BulkPayoutServiceBeneficiaryAddress = {
    city,
    countryCode,
    line1,
    line2,
    postalCode,
    state,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
