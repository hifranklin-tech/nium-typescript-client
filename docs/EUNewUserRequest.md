# EUNewUserRequest

EU new-user flow - all personal details are supplied and validated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessType** | **string** | Access level granted to the user. | [default to undefined]
**applicantDeclaration** | **boolean** | Optional. Applicant declaration acceptance flag. | [optional] [default to undefined]
**applicantDeclarationTimeStamp** | **string** | Optional. Timestamp when applicant declaration was accepted. | [optional] [default to undefined]
**customerHashId** | **string** | Hash id of the customer this user belongs to. Mandatory. | [default to undefined]
**deviceDetails** | [**UserRequestDeviceDetails**](UserRequestDeviceDetails.md) |  | [default to undefined]
**externalId** | **string** | Client-provided unique identifier for the user within the client. | [default to undefined]
**region** | **string** | Region discriminator value (EU). | [default to undefined]
**tags** | [**Array&lt;UserRequestTag&gt;**](UserRequestTag.md) | User-defined key-value tags. | [optional] [default to undefined]
**address** | [**UserRequestAddress**](UserRequestAddress.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | yyyy-MM-dd, must be a past date. | [default to undefined]
**documents** | [**Array&lt;UserRequestDocument&gt;**](UserRequestDocument.md) |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**middleName** | **string** | Optional. | [optional] [default to undefined]
**mobile** | **string** | Optional. Numeric mobile number without the country code. | [optional] [default to undefined]
**mobileCountryCode** | **string** | Optional. Numeric country code for mobile numbers. | [optional] [default to undefined]
**nationality** | **string** |  | [default to undefined]

## Example

```typescript
import { EUNewUserRequest } from 'nium-client';

const instance: EUNewUserRequest = {
    accessType,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    customerHashId,
    deviceDetails,
    externalId,
    region,
    tags,
    address,
    dateOfBirth,
    documents,
    email,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
