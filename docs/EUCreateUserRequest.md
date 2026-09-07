# EUCreateUserRequest

EU create-user payload. One of two flows, selected by the presence of existingEntityReferenceId: - Create New User (existingEntityReferenceId absent): all personal details are mandatory. - Link to Existing Entity (existingEntityReferenceId present): the entity reference is   mandatory and personal details are resolved from existing records. 

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
**dateOfBirth** | **string** | Optional. yyyy-MM-dd, must be a past date when supplied. | [default to undefined]
**documents** | [**Array&lt;UserRequestDocument&gt;**](UserRequestDocument.md) | Optional. Request documents sent to CAAS (stakeholder documents are not copied). | [optional] [default to undefined]
**email** | **string** | Optional. Overrides stakeholder email when supplied. | [default to undefined]
**firstName** | **string** | Optional. Overrides stakeholder first name when supplied. | [default to undefined]
**lastName** | **string** | Optional. Overrides stakeholder last name when supplied. | [default to undefined]
**middleName** | **string** | Optional. | [optional] [default to undefined]
**mobile** | **string** | Optional. Numeric mobile number without the country code. | [optional] [default to undefined]
**mobileCountryCode** | **string** | Optional. Numeric country code for mobile numbers. | [optional] [default to undefined]
**nationality** | **string** | Optional. Overrides stakeholder nationality when supplied. | [default to undefined]
**existingEntityReferenceId** | **string** | Reference id of the corporate stakeholder to link. Only one non-default user per stakeholder. | [default to undefined]

## Example

```typescript
import { EUCreateUserRequest } from 'nium-client';

const instance: EUCreateUserRequest = {
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
    existingEntityReferenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
