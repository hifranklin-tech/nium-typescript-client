# AuStakeholderKycAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the stakeholder address | [default to undefined]
**addressLine2** | **string** | Second line of the stakeholder address | [optional] [default to undefined]
**city** | **string** | City of the stakeholder address | [default to undefined]
**country** | **string** | 2-letter ISO Alpha-2 country code denoting the country of the stakeholder address | [default to undefined]
**postcode** | **string** | Postcode of the stakeholder address | [default to undefined]
**state** | **string** | Specifies the state in ISO state code format. Use the Fetch Corporate Constants API to retrieve the list of supported values. | [default to undefined]
**streetType** | **string** | Provide the street type for AU address for better approvals | [optional] [default to undefined]

## Example

```typescript
import { AuStakeholderKycAddress } from 'nium-client';

const instance: AuStakeholderKycAddress = {
    addressLine1,
    addressLine2,
    city,
    country,
    postcode,
    state,
    streetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
