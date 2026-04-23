# UKFullIndividualStakeholderDetails

Individual Stakeholder Details for UK, Full KYC

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
**isPep** | **boolean** | This field accepts true or false to indicate if the individual stakeholder is a Politically Exposed Person (PEP) or not. | [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) | Positions held by the stakeholder in the company. More than one position title can be selected | [default to undefined]
**documents** | [**Array&lt;DocumentDetailsFull&gt;**](DocumentDetailsFull.md) | List of identification documents for the individual stakeholder | [optional] [default to undefined]

## Example

```typescript
import { UKFullIndividualStakeholderDetails } from 'nium-client';

const instance: UKFullIndividualStakeholderDetails = {
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
    isPep,
    positions,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
