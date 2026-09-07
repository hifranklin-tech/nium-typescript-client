# BaseCACorporateCustomerDetailsCharity

Contains common customer details for corporate (Charity - registeredDate/registeredCountry optional)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. Optional for Charity businessType in CA region. | [optional] [default to undefined]
**registeredDate** | **string** | date of registration of the business. Optional for Charity businessType in CA region. | [optional] [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]

## Example

```typescript
import { BaseCACorporateCustomerDetailsCharity } from 'nium-client';

const instance: BaseCACorporateCustomerDetailsCharity = {
    externalId,
    kycType,
    region,
    tags,
    type,
    businessName,
    businessRegistrationNumber,
    registeredCountry,
    registeredDate,
    website,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
