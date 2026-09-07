# CorporateCustomerDetailsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalScaReferenceId** | **string** | The SCA Reference ID generated as part of SCA (Strong Customer Authentication). | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**externalRiskSeverity** | **string** | External risk severity rating | [default to undefined]
**fiOnboardingDate** | **string** | Date when the customer was onboarded at the FI | [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**applicant** | [**IDFullApplicantDetailsUpdate**](IDFullApplicantDetailsUpdate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateIDFullCustomerDetailsUpdateAllOfStakeholders**](BaseCorporateIDFullCustomerDetailsUpdateAllOfStakeholders.md) |  | [optional] [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**industryDescription** | **string** |  | [optional] [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**otaDetails** | [**OtaDetails**](OtaDetails.md) |  | [optional] [default to undefined]
**searchId** | **string** | This field is required for eKYB and is returned in the response of the Exhaustive Corporate Details using Business ID API. | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsID&gt;**](BusinessDocumentsID.md) |  | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**listedExchange** | **string** | Stock exchange where the company is listed | [default to undefined]
**stockSymbol** | **string** | Stock symbol of the company if it is publicly listed | [default to undefined]
**trustType** | **string** |  | [default to undefined]
**formerName** | **string** | If corporate customer doing business under a different name other than their licensed name  | [optional] [default to undefined]
**associationName** | **string** | Name of the association. Mandatory if businessType is club_association or co_operative and isRegistered is true | [default to undefined]
**associationNumber** | **string** | Number of the association. Mandatory if businessType is club_association or co_operative and isRegistered is true | [default to undefined]
**hasNominee** | **boolean** | Whether the business has a nominee | [default to undefined]
**isCashIntensiveBusiness** | **boolean** | Whether the business is cash intensive | [default to undefined]
**isRegistered** | **boolean** | Whether the co-operative is registered. Mandatory for CO_OPERATIVE | [default to undefined]
**businessName_local** | **string** | The registered business name in the local language or native script of the country of incorporation. | [default to undefined]

## Example

```typescript
import { CorporateCustomerDetailsUpdate } from 'nium-client';

const instance: CorporateCustomerDetailsUpdate = {
    externalScaReferenceId,
    externalId,
    kycType,
    region,
    segment,
    tags,
    type,
    addresses,
    businessName,
    businessRegistrationNumber,
    businessType,
    externalRiskSeverity,
    fiOnboardingDate,
    natureOfBusiness,
    registeredDate,
    taxDetails,
    website,
    applicant,
    stakeholders,
    registeredCountry,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    bankAccountDetails,
    deviceDetails,
    expectedAccountUsage,
    industryDescription,
    isMultiLayeredCompany,
    otaDetails,
    searchId,
    sizeOfBusiness,
    tradeName,
    documents,
    sourceOfFunds,
    listedExchange,
    stockSymbol,
    trustType,
    formerName,
    associationName,
    associationNumber,
    hasNominee,
    isCashIntensiveBusiness,
    isRegistered,
    businessName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
