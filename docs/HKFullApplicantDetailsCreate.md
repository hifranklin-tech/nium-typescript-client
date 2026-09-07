# HKFullApplicantDetailsCreate

Applicant create Details for HK region, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**dateOfBirth** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**mobile** | **number** |  | [default to undefined]
**mobileCountryCode** | **string** |  | [default to undefined]
**nationality** | **string** |  | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) |  | [default to undefined]
**documents** | [**Array&lt;AUFullApplicantDetailsCreateAllOfDocuments&gt;**](AUFullApplicantDetailsCreateAllOfDocuments.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HKFullApplicantDetailsCreate } from 'nium-client';

const instance: HKFullApplicantDetailsCreate = {
    address,
    dateOfBirth,
    email,
    externalId,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    sharePercentage,
    positions,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
