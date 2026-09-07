# UserProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** |  | [optional] [default to undefined]
**address** | [**UserRequestAddress**](UserRequestAddress.md) |  | [optional] [default to undefined]
**applicantDeclaration** | **boolean** | Applicant declaration acceptance flag. | [optional] [default to undefined]
**applicantDeclarationTimeStamp** | **string** | Timestamp when applicant declaration was accepted. | [optional] [default to undefined]
**clientHashId** | **string** |  | [optional] [default to undefined]
**createdByUserType** | **string** | User type of the caller that created this user (e.g. customer_user, client_user). | [optional] [default to undefined]
**customerHashId** | **string** | Present when the user is mapped to a customer | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**deviceDetails** | [**UserRequestDeviceDetails**](UserRequestDeviceDetails.md) |  | [optional] [default to undefined]
**documents** | [**Array&lt;UserRequestDocument&gt;**](UserRequestDocument.md) |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**existingEntityReferenceId** | **string** | Present when the user is linked to a parent entity | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**isDefaultUser** | **boolean** | Present when the user is mapped to a customer | [optional] [default to undefined]
**kycMode** | **string** | Client-facing KYC mode. Stored/compliance value E_DOC_VERIFY is returned as biometric_kyc (lowercase).  | [optional] [default to undefined]
**kycStatus** | **string** | KYC verification status of the user. | [optional] [default to undefined]
**kycVerificationStatus** | **string** | KYC verification status of the user (e.g. pending, kyc_required, initiated). | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**mobile** | **string** |  | [optional] [default to undefined]
**mobileCountryCode** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**parentCustomerType** | **string** | Customer type of the linked customerHashId (individual or corporate). | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**subStatus** | **string** |  | [optional] [default to undefined]
**userHashId** | **string** |  | [optional] [default to undefined]
**userType** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserProfileResponse } from 'nium-client';

const instance: UserProfileResponse = {
    accessType,
    address,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    clientHashId,
    createdByUserType,
    customerHashId,
    dateOfBirth,
    deviceDetails,
    documents,
    email,
    existingEntityReferenceId,
    externalId,
    firstName,
    isDefaultUser,
    kycMode,
    kycStatus,
    kycVerificationStatus,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    parentCustomerType,
    region,
    status,
    subStatus,
    userHashId,
    userType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
