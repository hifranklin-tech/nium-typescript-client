# BaseCorporateIDFullCustomerDetailsCreate

Contains common create customer details for corporate, ID region, full kycType

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
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**stockSymbol** | **string** | Stock symbol of the company if it is publicly listed | [optional] [default to undefined]
**listedExchange** | **string** | Stock exchange where the company is listed | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [default to undefined]
**trustType** | **string** |  | [optional] [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateBZFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateBZFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**applicant** | [**IDFullApplicantDetailsCreate**](IDFullApplicantDetailsCreate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateIDFullCustomerDetailsCreateAllOfStakeholders**](BaseCorporateIDFullCustomerDetailsCreateAllOfStakeholders.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BaseCorporateIDFullCustomerDetailsCreate } from 'nium-client';

const instance: BaseCorporateIDFullCustomerDetailsCreate = {
    type,
    kycType,
    region,
    externalId,
    businessName,
    businessRegistrationNumber,
    registeredDate,
    registeredCountry,
    website,
    businessType,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    tradeName,
    stockSymbol,
    listedExchange,
    taxDetails,
    trustType,
    isMultiLayeredCompany,
    addresses,
    natureOfBusiness,
    expectedAccountUsage,
    sizeOfBusiness,
    deviceDetails,
    bankAccountDetails,
    applicant,
    stakeholders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
