# NZIndividualStakeholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**NZAddressDTO**](NZAddressDTO.md) |  | [optional] [default to undefined]
**capitalContribution** | **string** | Capital contribution. Mandatory if position contains UBO, SHAREHOLDER, TRUSTEE, or PARTNER | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the stakeholder. | [optional] [default to undefined]
**email** | **string** | Email of the customer | [optional] [default to undefined]
**externalId** | **string** | referenceId to identify the stakeholder | [optional] [default to undefined]
**firstName** | **string** | Natural person who is a stakeholder in the corporate customer | [default to undefined]
**hasDistributionRight** | **boolean** | Whether the stakeholder has distribution rights. Applicable for UBO, SHAREHOLDER, PARTNER | [optional] [default to undefined]
**interestPercentage** | **string** |  | [optional] [default to undefined]
**lastName** | **string** | Last name of the stakeholder | [default to undefined]
**middleName** | **string** | Middle name of the stakeholder | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | nationality of the stakeholder | [optional] [default to undefined]
**settlorProtectorRights** | **Array&lt;string&gt;** | Rights of the settlor or protector. Optional for SETTLOR or PROTECTOR positions | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**trustBeneficiaryClass** | **string** | Class of the trustBeneficiary. Mandatory if position contains TRUST_BENEFICIARY | [optional] [default to undefined]
**votingRights** | **Array&lt;string&gt;** | Voting rights. Mandatory if position contains UBO, SHAREHOLDER, or PARTNER | [optional] [default to undefined]

## Example

```typescript
import { NZIndividualStakeholderDetails } from 'nium-client';

const instance: NZIndividualStakeholderDetails = {
    address,
    capitalContribution,
    dateOfBirth,
    email,
    externalId,
    firstName,
    hasDistributionRight,
    interestPercentage,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    settlorProtectorRights,
    sharePercentage,
    trustBeneficiaryClass,
    votingRights,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
