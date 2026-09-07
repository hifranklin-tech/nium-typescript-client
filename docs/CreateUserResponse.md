# CreateUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** |  | [optional] [default to undefined]
**kycStatus** | **string** | KYC verification status of the user. | [optional] [default to undefined]
**kycVerificationStatus** | **string** | KYC verification status of the user (e.g. pending, kyc_required, initiated). | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**userHashId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateUserResponse } from 'nium-client';

const instance: CreateUserResponse = {
    externalId,
    kycStatus,
    kycVerificationStatus,
    status,
    userHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
