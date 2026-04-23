# UpdateCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalScaReferenceId** | **string** | The SCA Reference ID generated as part of SCA (Strong Customer Authentication). | [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**businessName** | **string** | Registered business name of the corporate entity | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number - must be exactly 11 alphanumeric characters for Unregulated Trust | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseIndividualBZFullCustomerDetailsAllOfExpectedAccountUsage**](BaseIndividualBZFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**applicant** | [**IDFullApplicantDetailsUpdate**](IDFullApplicantDetailsUpdate.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateIDFullCustomerDetailsUpdateAllOfStakeholders**](BaseCorporateIDFullCustomerDetailsUpdateAllOfStakeholders.md) |  | [optional] [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**industryDescription** | **string** |  | [optional] [default to undefined]
**searchId** | **string** | This field is required for eKYB and is returned in the response of the Exhaustive Corporate Details using Business ID API. | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**otaDetails** | [**OtaDetails**](OtaDetails.md) |  | [optional] [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**documents** | [**Array&lt;IndividualIDMinCustomerDetailsAllOfDocuments&gt;**](IndividualIDMinCustomerDetailsAllOfDocuments.md) | This field accepts list of document details for the customer | [default to undefined]
**stockSymbol** | **string** | Stock symbol of the company if it is publicly listed | [optional] [default to undefined]
**listedExchange** | **string** | Stock exchange where the company is listed | [default to undefined]
**trustType** | **string** |  | [default to undefined]
**formerName** | **string** | If corporate customer doing business under a different name other than their licensed name  | [optional] [default to undefined]
**associationName** | **string** |  | [default to undefined]
**associationNumber** | **string** |  | [default to undefined]
**businessName_local** | **string** | The registered business name in the local language or native script of the country of incorporation. | [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [default to undefined]
**incomeSourceType** | **string** | Nature of the customer primary work or business category, such as gig_worker, contractor, freelancer, salaried employee, small business owner etc. | [default to undefined]
**annualIncome** | **string** | The customer total estimated income for a year | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**isPep** | **boolean** | This field accepts true or false to indicate if the individual customer is a Politically Exposed Person (PEP) or not. | [default to undefined]
**parentCustomerHashId** | **string** | This field contains the unique identifier of the corporate parent customer to whom the individual customer is tagged. | [default to undefined]
**birthCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**occupation** | **string** | Occupation of the individual customer | [default to undefined]
**firstName_local** | **string** | The first name in the local language or native script of the country of residence or nationality (for example, non-Latin characters). | [default to undefined]
**lastName_local** | **string** | The last name (surname) in the local language or native script of the country of residence or nationality. | [default to undefined]

## Example

```typescript
import { UpdateCustomerRequest } from 'nium-client';

const instance: UpdateCustomerRequest = {
    externalScaReferenceId,
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
    sizeOfBusiness,
    sourceOfFunds,
    taxDetails,
    businessType,
    natureOfBusiness,
    expectedAccountUsage,
    addresses,
    applicant,
    stakeholders,
    applicantDeclaration,
    isMultiLayeredCompany,
    applicantDeclarationTimeStamp,
    industryDescription,
    searchId,
    tradeName,
    otaDetails,
    deviceDetails,
    bankAccountDetails,
    documents,
    stockSymbol,
    listedExchange,
    trustType,
    formerName,
    associationName,
    associationNumber,
    businessName_local,
    firstName,
    middleName,
    lastName,
    email,
    nationality,
    dateOfBirth,
    mobile,
    mobileCountryCode,
    incomeSourceType,
    annualIncome,
    billingAddress,
    kycStatus,
    isPep,
    parentCustomerHashId,
    birthCountry,
    occupation,
    firstName_local,
    lastName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
