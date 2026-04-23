# BeneficiaryAddress

Addresses of beneficiary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | An possible address types of a beneficiary. | [optional] [default to undefined]
**line1** | **string** | Line 1 of the beneficiary\&#39;s address. | [optional] [default to undefined]
**line2** | **string** | Line 2 of the beneficiary\&#39;s address. | [optional] [default to undefined]
**city** | **string** | City where the beneficiary lives. | [optional] [default to undefined]
**state** | **string** | State where the beneficiary lives. | [optional] [default to undefined]
**countryCode** | **string** | A 2-letter ISO country code. | [optional] [default to undefined]
**postalCode** | **string** | A beneficiary\&#39;s address postal or zip code. | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryAddress } from 'nium-client';

const instance: BeneficiaryAddress = {
    type,
    line1,
    line2,
    city,
    state,
    countryCode,
    postalCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
