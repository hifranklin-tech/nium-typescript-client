# UserSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** |  | [optional] [default to undefined]
**customerHashId** | **string** | Present when the user is mapped to a customer | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**existingEntityReferenceId** | **string** | Present when the user is linked to a parent entity | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**kycStatus** | **string** | KYC verification status of the user. | [optional] [default to undefined]
**kycVerificationStatus** | **string** | KYC verification status of the user (e.g. pending, kyc_required, initiated). | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**subStatus** | **string** |  | [optional] [default to undefined]
**userHashId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserSummaryResponse } from 'nium-client';

const instance: UserSummaryResponse = {
    accessType,
    customerHashId,
    email,
    existingEntityReferenceId,
    externalId,
    firstName,
    kycStatus,
    kycVerificationStatus,
    lastName,
    region,
    status,
    subStatus,
    userHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
