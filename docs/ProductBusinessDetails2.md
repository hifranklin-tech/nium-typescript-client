# ProductBusinessDetails2

This object accepts the business information of the corporate entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The reference Id of the business information for which the RFI is raised. | [optional] [default to undefined]
**businessName** | **string** | The registered business name of the corporate entity. | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business (e.g., private company, public company). Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The business registration number of the corporate entity. | [optional] [default to undefined]
**tradeName** | **string** | The Trading Name also known as Doing Business As(DBA) name. | [optional] [default to undefined]
**trusteeName** | **string** | The full business name of the trustee in case the entity type is a trust. | [optional] [default to undefined]
**settlorName** | **string** | The settlor name. | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**purposeCode** | **string** |  | [optional] [default to undefined]
**ticker** | **string** |  | [optional] [default to undefined]
**partnershipDetails** | [**ProductPartnershipDetails**](ProductPartnershipDetails.md) |  | [optional] [default to undefined]
**associationDetails** | [**ProductAssociationDetails**](ProductAssociationDetails.md) |  | [optional] [default to undefined]
**legalDetails** | [**ProductLegalDetails**](ProductLegalDetails.md) |  | [optional] [default to undefined]
**regulatoryDetails** | [**ProductRegulatoryDetails**](ProductRegulatoryDetails.md) |  | [optional] [default to undefined]
**addresses** | [**ProductAddresses**](ProductAddresses.md) |  | [optional] [default to undefined]
**documentDetails** | [**ProductDocumentDetail**](ProductDocumentDetail.md) |  | [optional] [default to undefined]
**stakeholders** | [**Array&lt;Stakeholders2&gt;**](Stakeholders2.md) | This array accepts the stakeholder details for the corporate entity. | [optional] [default to undefined]
**applicantDetails** | [**ApplicantDetails2**](ApplicantDetails2.md) |  | [optional] [default to undefined]
**businessInOtherCountries** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) |  | [optional] [default to undefined]
**onboardingDetails** | [**OnboardingDetails**](OnboardingDetails.md) |  | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | This object accepts additional information about the business. | [optional] [default to undefined]
**revenueInfo** | [**RevenueInfo**](RevenueInfo.md) |  | [optional] [default to undefined]
**hasNominee** | **boolean** | This field accepts if the entity has a nominee stakeholder | [optional] [default to undefined]
**businessName_local** | **string** | The registered business name of the corporate entity in local language. | [optional] [default to undefined]
**isCashIntensiveBusiness** | **boolean** | This field accepts if the business is a cash intensive business | [optional] [default to undefined]

## Example

```typescript
import { ProductBusinessDetails2 } from 'nium-client';

const instance: ProductBusinessDetails2 = {
    referenceId,
    businessName,
    businessType,
    businessRegistrationNumber,
    tradeName,
    trusteeName,
    settlorName,
    website,
    description,
    purposeCode,
    ticker,
    partnershipDetails,
    associationDetails,
    legalDetails,
    regulatoryDetails,
    addresses,
    documentDetails,
    stakeholders,
    applicantDetails,
    businessInOtherCountries,
    taxDetails,
    onboardingDetails,
    additionalInfo,
    revenueInfo,
    hasNominee,
    businessName_local,
    isCashIntensiveBusiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
