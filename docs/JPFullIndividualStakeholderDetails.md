# JPFullIndividualStakeholderDetails

Individual Stakeholder Details for JP region, Full KYC

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
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**firstName_local** | **string** | The first name in the local language or native script of the country of residence or nationality (for example, non-Latin characters). | [optional] [default to undefined]
**lastName_local** | **string** | The last name (surname) in the local language or native script of the country of residence or nationality. | [optional] [default to undefined]
**occupation** | **string** | Occupation of the individual stakeholder | [optional] [default to undefined]
**positions** | [**Array&lt;JPPositionDetails&gt;**](JPPositionDetails.md) |  | [default to undefined]
**documents** | [**Array&lt;DocumentDetailsFull&gt;**](DocumentDetailsFull.md) | List of identification documents for the individual stakeholder | [optional] [default to undefined]

## Example

```typescript
import { JPFullIndividualStakeholderDetails } from 'nium-client';

const instance: JPFullIndividualStakeholderDetails = {
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
    firstName_local,
    lastName_local,
    occupation,
    positions,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
