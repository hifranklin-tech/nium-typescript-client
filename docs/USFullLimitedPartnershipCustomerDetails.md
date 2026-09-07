# USFullLimitedPartnershipCustomerDetails

Contains customer details for US, corporate, full kycType and LimitedPartnership businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present | [default to undefined]
**listedExchange** | **string** |  | [optional] [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**stockSymbol** | **string** |  | [optional] [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**trustType** | **string** |  | [optional] [default to undefined]
**applicant** | [**USFullApplicantDetailsCreate**](USFullApplicantDetailsCreate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateUSFullCustomerDetailsCreateAllOfStakeholders**](BaseCorporateUSFullCustomerDetailsCreateAllOfStakeholders.md) |  | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsUS&gt;**](BusinessDocumentsUS.md) |  | [optional] [default to undefined]

## Example

```typescript
import { USFullLimitedPartnershipCustomerDetails } from 'nium-client';

const instance: USFullLimitedPartnershipCustomerDetails = {
    externalId,
    kycType,
    region,
    segment,
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
    businessType,
    deviceDetails,
    expectedAccountUsage,
    isMultiLayeredCompany,
    listedExchange,
    natureOfBusiness,
    sizeOfBusiness,
    stockSymbol,
    tradeName,
    trustType,
    applicant,
    stakeholders,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
