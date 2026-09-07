# CaStakeholderKycDetails

Stakeholder details for CA submit KYC. For only-director manual KYC, dateOfBirth and address are mandatory (enforced at runtime). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AuStakeholderKycAddress**](AuStakeholderKycAddress.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the stakeholder. | [optional] [default to undefined]

## Example

```typescript
import { CaStakeholderKycDetails } from 'nium-client';

const instance: CaStakeholderKycDetails = {
    address,
    dateOfBirth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
