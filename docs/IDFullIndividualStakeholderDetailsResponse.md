# IDFullIndividualStakeholderDetailsResponse

Individual Stakeholder Response Details for ID, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | referenceId to identify the stakeholder | [optional] [default to undefined]
**firstName** | **string** | Natural person who is a stakeholder in the corporate customer | [default to undefined]
**middleName** | **string** | Middle name of the stakeholder | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**dateOfBirth** | **string** | DOB of the stakeholder. | [default to undefined]
**nationality** | **string** | nationality of the stakeholder | [default to undefined]
**email** | **string** | Email of the customer | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [optional] [default to undefined]
**sharePercentage** | **string** | The share percentage of the individual stakeholder in the company. | [optional] [default to undefined]
**address** | [**AddressDTO**](AddressDTO.md) |  | [optional] [default to undefined]
**trustBeneficiaryClass** | **string** | Class of the trustBeneficiary eg.. Primary decision-maker or Supporting role | [optional] [default to undefined]
**positions** | [**Array&lt;IDPositionDetails&gt;**](IDPositionDetails.md) |  | [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]
**kycMode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IDFullIndividualStakeholderDetailsResponse } from 'nium-client';

const instance: IDFullIndividualStakeholderDetailsResponse = {
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
    referenceId,
    kycMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
