# UKFullLimitedLiabilityPartnershipCustomerDetailsResponse

Contains customer details for UK, corporate, full kycType and Limited Liability Partnership businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallets** | [**Array&lt;WalletDTO&gt;**](WalletDTO.md) | This field contains list of wallets associated with the customer. | [default to undefined]
**customerHashId** | **string** | This field indicated previously generated unique customer identifier of customer. | [default to undefined]
**referenceId** | **string** | This field contains the unique reference identifier of the customer. | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**subStatus** | **string** | This field contains additional sub-status information | [optional] [default to undefined]
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
**applicantDeclaration** | **boolean** |  | [default to undefined]
**isMultiLayeredCompany** | **boolean** | This field accepts true or false to ensure if the corporate entity is multi-layered or not. If true, then corporate_structure document must be provided and at least one corporate stakeholder must be present. | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**industryDescription** | **string** |  | [optional] [default to undefined]
**searchId** | **string** |  | [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [default to undefined]
**addresses** | [**CorporateCustomerAddresses**](CorporateCustomerAddresses.md) |  | [default to undefined]
**natureOfBusiness** | [**BaseCorporateUKFullCustomerDetailsAllOfNatureOfBusiness**](BaseCorporateUKFullCustomerDetailsAllOfNatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseCorporateBZFullCustomerDetailsAllOfExpectedAccountUsage**](BaseCorporateBZFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**sizeOfBusiness** | [**SizeOfBusiness**](SizeOfBusiness.md) |  | [default to undefined]
**otaDetails** | [**OtaDetails**](OtaDetails.md) |  | [optional] [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**applicant** | [**UKFullApplicantDetailsResponse**](UKFullApplicantDetailsResponse.md) |  | [default to undefined]
**stakeholders** | [**UKFullApplicantAndStakeholderDetailsResponseStakeholders**](UKFullApplicantAndStakeholderDetailsResponseStakeholders.md) |  | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsUK&gt;**](BusinessDocumentsUK.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UKFullLimitedLiabilityPartnershipCustomerDetailsResponse } from 'nium-client';

const instance: UKFullLimitedLiabilityPartnershipCustomerDetailsResponse = {
    wallets,
    customerHashId,
    referenceId,
    status,
    subStatus,
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
    isMultiLayeredCompany,
    applicantDeclarationTimeStamp,
    industryDescription,
    searchId,
    tradeName,
    addresses,
    natureOfBusiness,
    expectedAccountUsage,
    sizeOfBusiness,
    otaDetails,
    deviceDetails,
    bankAccountDetails,
    applicant,
    stakeholders,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
