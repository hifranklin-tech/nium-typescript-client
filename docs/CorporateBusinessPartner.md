# CorporateBusinessPartner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | The registered business name. Required when the stakeholder(s) is a business entity. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The registration number of the business. Required when the stakeholder(s) is a business entity. | [optional] [default to undefined]
**businessEntityType** | **string** | The position of the corporate stakeholder in the customer\&#39;s business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**addresses** | [**BusinessPartnerAddresses**](BusinessPartnerAddresses.md) |  | [optional] [default to undefined]
**legalDetails** | [**CorporateBusinessPartnerLegalDetails**](CorporateBusinessPartnerLegalDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CorporateBusinessPartner } from 'nium-client';

const instance: CorporateBusinessPartner = {
    businessName,
    businessRegistrationNumber,
    businessEntityType,
    addresses,
    legalDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
