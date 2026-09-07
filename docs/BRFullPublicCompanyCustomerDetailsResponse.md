# BRFullPublicCompanyCustomerDetailsResponse

Contains customer details for BR, corporate, full kycType and Public Company businessType

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
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**natureOfBusiness** | [**BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateAUFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**applicant** | [**BRFullApplicantDetailsResponse**](BRFullApplicantDetailsResponse.md) |  | [default to undefined]
**stakeholders** | [**BaseCorporateBRFullCustomerDetailsResponseAllOfStakeholders**](BaseCorporateBRFullCustomerDetailsResponseAllOfStakeholders.md) |  | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsBR&gt;**](BusinessDocumentsBR.md) |  | [optional] [default to undefined]
**searchId** | **string** | This field is required for eKYB and is returned in the response of the Exhaustive Corporate Details using Business ID API. | [default to undefined]

## Example

```typescript
import { BRFullPublicCompanyCustomerDetailsResponse } from 'nium-client';

const instance: BRFullPublicCompanyCustomerDetailsResponse = {
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
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    bankAccountDetails,
    businessType,
    deviceDetails,
    expectedAccountUsage,
    isMultiLayeredCompany,
    natureOfBusiness,
    sizeOfBusiness,
    tradeName,
    applicant,
    stakeholders,
    documents,
    searchId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
