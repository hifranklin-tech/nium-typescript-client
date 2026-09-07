# BeneficiaryDetailsV3Dto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **string** | The account type of the beneficiary. | [optional] [default to undefined]
**addresses** | [**Array&lt;BulkPayoutServiceBeneficiaryAddress&gt;**](BulkPayoutServiceBeneficiaryAddress.md) | Addresses of beneficiary. | [optional] [default to undefined]
**contactName** | **string** | Beneficiary\&#39;s contact name. | [optional] [default to undefined]
**contactNumber** | [**BulkPayoutServiceBeneficiaryContactNumber**](BulkPayoutServiceBeneficiaryContactNumber.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | Beneficiary\&#39;s date of birth. | [optional] [default to undefined]
**email** | [**BulkPayoutServiceBeneficiaryEmail**](BulkPayoutServiceBeneficiaryEmail.md) |  | [optional] [default to undefined]
**entityType** | **string** | The entity type of the beneficiary. | [optional] [default to undefined]
**establishmentDate** | **string** | Beneficiary\&#39;s establishment date. | [optional] [default to undefined]
**identification** | [**BulkPayoutServiceBeneficiaryIdentification**](BulkPayoutServiceBeneficiaryIdentification.md) |  | [optional] [default to undefined]
**name** | **string** | The name of the beneficiary. | [optional] [default to undefined]
**name_local** | **string** | The name of the beneficiary in the local language (e.g. Mandaring, Kanji, etc.) | [optional] [default to undefined]
**relationWithCustomer** | **string** | The relationship of the &#x60;beneficiary&#x60; with the &#x60;customer&#x60;. | [optional] [default to undefined]
**remitterBeneficiaryRelationship** | **string** | The relationship between the sender and beneficiary in the context of the transaction. | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryDetailsV3Dto } from 'nium-client';

const instance: BeneficiaryDetailsV3Dto = {
    accountType,
    addresses,
    contactName,
    contactNumber,
    dateOfBirth,
    email,
    entityType,
    establishmentDate,
    identification,
    name,
    name_local,
    relationWithCustomer,
    remitterBeneficiaryRelationship,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
