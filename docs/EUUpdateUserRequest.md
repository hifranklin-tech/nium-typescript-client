# EUUpdateUserRequest

Full EU update-user payload. Same personal-detail requirements as Create New User.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** | Access level granted to the user. Must be lowercase (view or edit). | [default to undefined]
**address** | [**UserRequestAddress**](UserRequestAddress.md) |  | [optional] [default to undefined]
**applicantDeclaration** | **boolean** | Applicant declaration acceptance flag. Cleared when omitted. | [optional] [default to undefined]
**applicantDeclarationTimeStamp** | **string** | Timestamp when applicant declaration was accepted. Cleared when omitted. | [optional] [default to undefined]
**dateOfBirth** | **string** | yyyy-MM-dd, must be a past date. | [default to undefined]
**deviceDetails** | [**UserRequestDeviceDetails**](UserRequestDeviceDetails.md) |  | [default to undefined]
**documents** | [**Array&lt;UserRequestDocument&gt;**](UserRequestDocument.md) |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**externalId** | **string** | Must match the existing user externalId (non-editable). | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**middleName** | **string** | Optional. Cleared when omitted. | [optional] [default to undefined]
**mobile** | **string** | Optional. Numeric mobile number without the country code. | [optional] [default to undefined]
**mobileCountryCode** | **string** | Optional. Numeric country code for mobile numbers. | [optional] [default to undefined]
**nationality** | **string** |  | [default to undefined]
**region** | **string** | Region discriminator value (EU). Must match the existing user region. | [default to undefined]
**tags** | [**Array&lt;UserRequestTag&gt;**](UserRequestTag.md) | User-defined key-value tags. Cleared when omitted. | [optional] [default to undefined]

## Example

```typescript
import { EUUpdateUserRequest } from 'nium-client';

const instance: EUUpdateUserRequest = {
    accessType,
    address,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    dateOfBirth,
    deviceDetails,
    documents,
    email,
    externalId,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    region,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
