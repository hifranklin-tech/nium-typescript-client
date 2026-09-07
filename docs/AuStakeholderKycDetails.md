# AuStakeholderKycDetails



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AuStakeholderKycAddress**](AuStakeholderKycAddress.md) |  | [default to undefined]
**dateOfBirth** | **string** | DOB of the stakeholder. | [default to undefined]
**documents** | [**Array&lt;AuStakeholderKycDocument&gt;**](AuStakeholderKycDocument.md) | List of identification documents for the individual stakeholder | [optional] [default to undefined]
**email** | **string** | email of the stakeholder | [optional] [default to undefined]
**externalId** | **string** | referenceId to identify the stakeholder | [optional] [default to undefined]
**firstName** | **string** | Natural person who is a stakeholder in the corporate customer | [default to undefined]
**lastName** | **string** | Last name of the stakeholder | [default to undefined]
**middleName** | **string** | Middle name of the stakeholder | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | nationality of the stakeholder | [default to undefined]
**positions** | [**Array&lt;AuStakeholderKycPosition&gt;**](AuStakeholderKycPosition.md) | Positions held by the stakeholder in the company. More than one position title can be selected | [default to undefined]
**sharePercentage** | **string** | The share percentage of the individual stakeholder in the company. | [optional] [default to undefined]
**trustBeneficiaryClass** | **string** | Class of the trustBeneficiary eg.. Primary decision-maker or Supporting role | [optional] [default to undefined]

## Example

```typescript
import { AuStakeholderKycDetails } from 'nium-client';

const instance: AuStakeholderKycDetails = {
    address,
    dateOfBirth,
    documents,
    email,
    externalId,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    positions,
    sharePercentage,
    trustBeneficiaryClass,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
