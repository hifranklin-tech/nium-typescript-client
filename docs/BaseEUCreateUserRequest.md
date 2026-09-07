# BaseEUCreateUserRequest

Fields common to both EU create-user flows.

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

## Example

```typescript
import { BaseEUCreateUserRequest } from 'nium-client';

const instance: BaseEUCreateUserRequest = {
    accessType,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    customerHashId,
    deviceDetails,
    externalId,
    region,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
