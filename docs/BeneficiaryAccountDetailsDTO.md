# BeneficiaryAccountDetailsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **string** | The bank account type of the beneficiary. | [optional] [default to undefined]
**address** | **string** | Full residential address of the beneficiary. | [optional] [default to undefined]
**alias** | **string** |  | [optional] [default to undefined]
**beneficiaryIdentificationType** | **string** | The type of identification document name for a beneficiary. | [optional] [default to undefined]
**beneficiaryIdentificationValue** | **string** | This field contains an identification document number for the beneficiary. | [optional] [default to undefined]
**city** | **string** | City where the beneficiary lives. | [optional] [default to undefined]
**contactNumber** | **string** | The mobile number of the beneficiary. | [optional] [default to undefined]
**countryCode** | **string** | The [ISO-2 country code](/apis/docs/getting-started/currency-and-country-codes) for the mobile number of beneficiary. | [optional] [default to undefined]
**email** | **string** | This field accepts an email of the beneficiary. | [optional] [default to undefined]
**name** | **string** | The name of a beneficiary. | [optional] [default to undefined]
**postcode** | **string** | This field accepts an postcode of the beneficiary. | [optional] [default to undefined]
**remitterBeneficiaryRelationship** | **string** | The relationship of the beneficiary with the remitter. | [optional] [default to undefined]
**state** | **string** | State or province of the beneficiary\&#39;s address. | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryAccountDetailsDTO } from 'nium-client';

const instance: BeneficiaryAccountDetailsDTO = {
    accountType,
    address,
    alias,
    beneficiaryIdentificationType,
    beneficiaryIdentificationValue,
    city,
    contactNumber,
    countryCode,
    email,
    name,
    postcode,
    remitterBeneficiaryRelationship,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
