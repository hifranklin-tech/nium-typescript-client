# CorporateBusinessDetails

An object that contains details about the business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Thhe name of their business. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The business registration number of the new corporate entity to be onboarded. | [optional] [default to undefined]
**website** | **string** | The business website link of the new corporate entity to be onboarded. | [optional] [default to undefined]
**legalDetails** | [**CorporateLegalDetails**](CorporateLegalDetails.md) |  | [optional] [default to undefined]
**addresses** | [**CorporateAddresses**](CorporateAddresses.md) |  | [optional] [default to undefined]
**stakeholders** | [**Array&lt;CorporateStakeholders&gt;**](CorporateStakeholders.md) | This array accepts the stakeholder details for the new corporate entity to be onboarded. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | Accepts additional information about the business. Acceptable fields are &#x60;isSameBusinessAddress&#x60; (for all regions), &#x60;searchId&#x60; (for EU, SG, UK), and &#x60;businessExtractCoveredStakeholder&#x60; (for EU). Acceptable values for all the above fields are &#x60;Yes&#x60; and &#x60;No&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { CorporateBusinessDetails } from 'nium-client';

const instance: CorporateBusinessDetails = {
    businessName,
    businessRegistrationNumber,
    website,
    legalDetails,
    addresses,
    stakeholders,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
