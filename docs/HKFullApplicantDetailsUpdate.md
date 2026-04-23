# HKFullApplicantDetailsUpdate

Applicant Update Details for HK, full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [default to undefined]
**dateOfBirth** | **string** |  | [default to undefined]
**nationality** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**mobile** | **number** |  | [default to undefined]
**mobileCountryCode** | **string** |  | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**positions** | [**Array&lt;HKPositionDetails&gt;**](HKPositionDetails.md) |  | [default to undefined]
**referenceId** | **string** | The unique identifier of the applicant generated on customer creation. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HKFullApplicantDetailsUpdate } from 'nium-client';

const instance: HKFullApplicantDetailsUpdate = {
    externalId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    nationality,
    email,
    mobile,
    mobileCountryCode,
    sharePercentage,
    address,
    positions,
    referenceId,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
