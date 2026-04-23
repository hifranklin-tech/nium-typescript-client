# SGFullAssociationCustomerDetails

Contains customer details for SG, corporate, full kycType and Association businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**applicantDeclaration** | **boolean** | Declaration from the applicant | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**formerName** | **string** | If corporate customer doing business under a different name other than their licensed name  | [optional] [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present | [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**applicant** | [**SGFullApplicantDetailsCreate**](SGFullApplicantDetailsCreate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateSGFullCustomerDetailsCreateAllOfStakeholders**](BaseCorporateSGFullCustomerDetailsCreateAllOfStakeholders.md) |  | [optional] [default to undefined]
**associationName** | **string** |  | [default to undefined]
**associationNumber** | **string** |  | [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsSG&gt;**](BusinessDocumentsSG.md) |  | [optional] [default to undefined]
**searchId** | **string** | This field is required for eKYB and is returned in the response of the Exhaustive Corporate Details using Business ID API. | [default to undefined]

## Example

```typescript
import { SGFullAssociationCustomerDetails } from 'nium-client';

const instance: SGFullAssociationCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    tags,
    segment,
    businessName,
    businessRegistrationNumber,
    registeredDate,
    registeredCountry,
    website,
    businessType,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    formerName,
    tradeName,
    isMultiLayeredCompany,
    addresses,
    taxDetails,
    natureOfBusiness,
    expectedAccountUsage,
    sizeOfBusiness,
    deviceDetails,
    bankAccountDetails,
    applicant,
    stakeholders,
    associationName,
    associationNumber,
    documents,
    searchId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
