# CorporateNZFullCustomerDetailsUpdate

Contains update customer details for NZ, Corporate and full kycType

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
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**addresses** | [**CorporateNZCustomerAddresses**](CorporateNZCustomerAddresses.md) |  | [default to undefined]
**applicantDeclaration** | **boolean** | Declaration from the applicant | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**associationName** | **string** | Name of the association. Mandatory if businessType is club_association or co_operative and isRegistered is true | [optional] [default to undefined]
**associationNumber** | **string** | Number of the association. Mandatory if businessType is club_association or co_operative and isRegistered is true | [optional] [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate customer | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateNZFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateNZFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**hasNominee** | **boolean** | Whether the business has a nominee | [default to undefined]
**isCashIntensiveBusiness** | **boolean** | Whether the business is cash intensive | [default to undefined]
**isMultiLayeredCompany** | **boolean** | True if the corporate entity is multi-layered. If true, ownership chart document must be provided | [default to undefined]
**listedExchange** | **string** | Listed exchange. Mandatory if businessType is public_company | [default to undefined]
**natureOfBusiness** | [**BaseCorporateNZFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateNZFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**trustType** | **string** | Type of trust. Mandatory for Trust businessType | [default to undefined]
**applicant** | [**NZFullApplicantDetailsUpdate**](NZFullApplicantDetailsUpdate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateNZFullCustomerDetailsUpdateAllOfStakeholders**](BaseCorporateNZFullCustomerDetailsUpdateAllOfStakeholders.md) |  | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) | trust_deed is mandatory for trust businessType | [default to undefined]
**searchId** | **string** | This field is required for eKYB and is returned in the response of the Exhaustive Corporate Details using Business ID API. | [default to undefined]
**isRegistered** | **boolean** | Whether the co-operative is registered. Mandatory for CO_OPERATIVE | [default to undefined]

## Example

```typescript
import { CorporateNZFullCustomerDetailsUpdate } from 'nium-client';

const instance: CorporateNZFullCustomerDetailsUpdate = {
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
    associationName,
    associationNumber,
    bankAccountDetails,
    businessType,
    deviceDetails,
    expectedAccountUsage,
    hasNominee,
    isCashIntensiveBusiness,
    isMultiLayeredCompany,
    listedExchange,
    natureOfBusiness,
    sizeOfBusiness,
    tradeName,
    trustType,
    applicant,
    stakeholders,
    documents,
    searchId,
    isRegistered,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
