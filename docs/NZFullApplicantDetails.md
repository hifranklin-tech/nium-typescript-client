# NZFullApplicantDetails

Applicant Details for NZ region, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**NZAddressDTO**](NZAddressDTO.md) |  | [default to undefined]
**capitalContribution** | **string** | Capital contribution of the applicant. Mandatory if position contains UBO, SHAREHOLDER, TRUSTEE, or PARTNER | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | First name of the applicant | [default to undefined]
**hasDistributionRight** | **boolean** | Whether the applicant has distribution rights. Applicable for UBO, SHAREHOLDER, PARTNER | [optional] [default to undefined]
**interestPercentage** | **string** |  | [optional] [default to undefined]
**kycMode** | **string** | KYC mode to verify the applicant | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**settlorProtectorRights** | **Array&lt;string&gt;** | Rights of the settlor or protector. Optional for SETTLOR or PROTECTOR positions | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**trustBeneficiaryClass** | **string** | Class of the trustBeneficiary. Mandatory if position contains TRUST_BENEFICIARY | [optional] [default to undefined]
**votingRights** | **Array&lt;string&gt;** | Voting rights of the applicant. Mandatory if position contains UBO, SHAREHOLDER, or PARTNER | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]

## Example

```typescript
import { NZFullApplicantDetails } from 'nium-client';

const instance: NZFullApplicantDetails = {
    address,
    capitalContribution,
    dateOfBirth,
    email,
    externalId,
    firstName,
    hasDistributionRight,
    interestPercentage,
    kycMode,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    settlorProtectorRights,
    sharePercentage,
    trustBeneficiaryClass,
    votingRights,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
