# BaseCorporateJPFullCustomerDetails

Contains common customer details for corporate, JP region, full kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**businessName** | **string** | Registered business name of the corporate entity | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**businessName_local** | **string** | The registered business name in the local language or native script of the country of incorporation. | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]

## Example

```typescript
import { BaseCorporateJPFullCustomerDetails } from 'nium-client';

const instance: BaseCorporateJPFullCustomerDetails = {
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
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    bankAccountDetails,
    businessName_local,
    businessType,
    deviceDetails,
    expectedAccountUsage,
    isMultiLayeredCompany,
    natureOfBusiness,
    sizeOfBusiness,
    tradeName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
