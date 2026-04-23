# IDFullApplicantDetailsCreate

Applicant create Details for ID region, Full KYC

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
**trustBeneficiaryClass** | **string** | Class of the trustBeneficiary eg.. Primary decision-maker or Supporting role | [optional] [default to undefined]
**positions** | [**Array&lt;IDPositionDetails&gt;**](IDPositionDetails.md) |  | [default to undefined]
**documents** | [**Array&lt;AUFullApplicantDetailsCreateAllOfDocuments&gt;**](AUFullApplicantDetailsCreateAllOfDocuments.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IDFullApplicantDetailsCreate } from 'nium-client';

const instance: IDFullApplicantDetailsCreate = {
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
    trustBeneficiaryClass,
    positions,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
