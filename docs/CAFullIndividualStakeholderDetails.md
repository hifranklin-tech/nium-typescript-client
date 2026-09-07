# CAFullIndividualStakeholderDetails

Individual Stakeholder Details for CA region, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDTO**](AddressDTO.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the stakeholder. | [optional] [default to undefined]
**email** | **string** | Email of the customer | [optional] [default to undefined]
**externalId** | **string** | referenceId to identify the stakeholder | [optional] [default to undefined]
**firstName** | **string** | Natural person who is a stakeholder in the corporate customer | [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the stakeholder | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | nationality of the stakeholder | [optional] [default to undefined]
**sharePercentage** | **string** | The share percentage of the individual stakeholder in the company. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentDetailsFull&gt;**](DocumentDetailsFull.md) | List of identification documents for the individual stakeholder | [optional] [default to undefined]
**occupation** | **string** | Occupation of the individual stakeholder | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) |  | [default to undefined]

## Example

```typescript
import { CAFullIndividualStakeholderDetails } from 'nium-client';

const instance: CAFullIndividualStakeholderDetails = {
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
    documents,
    occupation,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
