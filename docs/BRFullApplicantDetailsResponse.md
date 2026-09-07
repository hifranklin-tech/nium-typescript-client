# BRFullApplicantDetailsResponse

Applicant Response Details for BR, full KYC

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
**biometricUrl** | **string** | eDocVerify biometric KYC URL. Returned only when kycMode is biometric_kyc and url exists in the database. Absent for other kycModes. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]
**kycMode** | **string** |  | [optional] [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the applicant generated on customer creation. | [optional] [default to undefined]

## Example

```typescript
import { BRFullApplicantDetailsResponse } from 'nium-client';

const instance: BRFullApplicantDetailsResponse = {
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
    biometricUrl,
    documents,
    kycMode,
    kycStatus,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
