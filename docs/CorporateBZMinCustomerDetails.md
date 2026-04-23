# CorporateBZMinCustomerDetails

Contains customer details for BZ, corporate and minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**sizeOfBusiness** | [**CorporateAUMinCustomerDetailsAllOfSizeOfBusiness**](CorporateAUMinCustomerDetailsAllOfSizeOfBusiness.md) |  | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**businessType** | **string** |  | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**addresses** | [**CorporateBZMinCustomerDetailsAllOfAddresses**](CorporateBZMinCustomerDetailsAllOfAddresses.md) |  | [default to undefined]

## Example

```typescript
import { CorporateBZMinCustomerDetails } from 'nium-client';

const instance: CorporateBZMinCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    businessName,
    businessRegistrationNumber,
    registeredDate,
    registeredCountry,
    website,
    sizeOfBusiness,
    sourceOfFunds,
    businessType,
    natureOfBusiness,
    expectedAccountUsage,
    addresses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
