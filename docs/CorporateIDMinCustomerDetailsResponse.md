# CorporateIDMinCustomerDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerHashId** | **string** | This field indicated previously generated unique customer identifier of customer. | [default to undefined]
**referenceId** | **string** | This field contains the unique reference identifier of the customer. | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**subStatus** | **string** | This field contains additional sub-status information | [optional] [default to undefined]
**userHashId** | **string** | Unique identifier of the default user created during customer onboarding. | [optional] [default to undefined]
**wallets** | [**Array&lt;WalletDTO&gt;**](WalletDTO.md) | This field contains list of wallets associated with the customer. | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**addresses** | [**CorporateBRMinCustomerDetailsAllOfAddresses**](CorporateBRMinCustomerDetailsAllOfAddresses.md) |  | [default to undefined]
**businessType** | **string** |  | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**sizeOfBusiness** | [**CorporateAUMinCustomerDetailsAllOfSizeOfBusiness**](CorporateAUMinCustomerDetailsAllOfSizeOfBusiness.md) |  | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]

## Example

```typescript
import { CorporateIDMinCustomerDetailsResponse } from 'nium-client';

const instance: CorporateIDMinCustomerDetailsResponse = {
    customerHashId,
    referenceId,
    status,
    subStatus,
    userHashId,
    wallets,
    externalId,
    kycType,
    region,
    tags,
    type,
    businessName,
    businessRegistrationNumber,
    registeredCountry,
    registeredDate,
    website,
    addresses,
    businessType,
    expectedAccountUsage,
    natureOfBusiness,
    sizeOfBusiness,
    sourceOfFunds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
