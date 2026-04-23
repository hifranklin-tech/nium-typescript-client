# ProductBusinessDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | Unique identifier for the &#x60;businessDetails&#x60; object. If not provided, a system generated one is returned. This ID is used to respond to requests for information (RFIs) or to upload required documents for the business entity. | [optional] [default to undefined]
**businessName** | **string** | Registered name of the corporate customer. | [optional] [default to undefined]
**businessName_local** | **string** | Registered name of the corporate customer in the local language (e.g., Kanji, Mandarin). | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number of the corporate customer. | [optional] [default to undefined]
**searchReferenceId** | **string** |  | [optional] [default to undefined]
**description** | **string** | A brief overview of the business. Maximum length: 65,535 characters. | [optional] [default to undefined]
**tradeName** | **string** | An alternate name the corporate customer uses to conduct business, different from their registered business name. | [optional] [default to undefined]
**trusteeName** | **string** | The full name or business name of the trustee. Applicable only when the customer is a trust. | [optional] [default to undefined]
**settlorName** | **string** | The full name or business name of the settlor. Applicable only when the customer is a trust. | [optional] [default to undefined]
**formerName** | **string** | A previous name the corporate customer used to conduct business, different from their current registered name. | [optional] [default to undefined]
**partnershipDetails** | [**ProductPartnershipDetails**](ProductPartnershipDetails.md) |  | [optional] [default to undefined]
**associationDetails** | [**ProductAssociationDetails**](ProductAssociationDetails.md) |  | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business (e.g., private company, public company). Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**purposeCode** | **string** |  | [optional] [default to undefined]
**businessInOtherCountries** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**website** | **string** | The corporate customer’s official website URL. | [optional] [default to undefined]
**stockSymbol** | **boolean** | The stock ticker symbol under which the corporate customer’s shares are traded on a public exchange. Applicable only if the business is publicly listed. | [optional] [default to undefined]
**ticker** | **string** |  | [optional] [default to undefined]
**legalDetails** | [**ProductLegalDetails**](ProductLegalDetails.md) |  | [optional] [default to undefined]
**regulatoryDetails** | [**ProductRegulatoryDetails**](ProductRegulatoryDetails.md) |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) | An array of objects containing the individual\&#39;s tax-related information. | [optional] [default to undefined]
**addresses** | [**ProductAddresses**](ProductAddresses.md) |  | [optional] [default to undefined]
**onboardingDetails** | [**OnboardingDetails**](OnboardingDetails.md) |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;ProductDocumentDetail&gt;**](ProductDocumentDetail.md) | An array of objects containing the businessâ€™s documents and related metadata. | [optional] [default to undefined]
**stakeholders** | [**Array&lt;ProductStakeholders&gt;**](ProductStakeholders.md) | An array of stakeholder objects representing individual or business entities associated with the corporate customer, such as directors or ultimate beneficial owners (UBOs).    Each stakeholder can be either a natural person or a legal entity. | [optional] [default to undefined]
**applicantDetails** | [**ProductApplicantDetails**](ProductApplicantDetails.md) |  | [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | Supplementary information about the application. Key-value pairs such as &#x60;searchId&#x60; and &#x60;isSameBusinessAddress&#x60; can be included. For more information, see [Corporate Customers](/docs/overview-corporate-customer). | [optional] [default to undefined]
**hasNominee** | **boolean** | Indicates if nominee stakeholders—such as directors or shareholders—are included in the onboarding application. | [optional] [default to undefined]
**revenueInfo** | [**RevenueInfo**](RevenueInfo.md) |  | [optional] [default to undefined]
**bankAccountDetails** | [**ProductBankAccountDetails**](ProductBankAccountDetails.md) |  | [optional] [default to undefined]
**isCashIntensiveBusiness** | **boolean** | Indicates if the business is cash-intensive (e.g., casinos, supermarkets, or foreign exchange stores). | [optional] [default to undefined]
**isClient** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ProductBusinessDetails } from 'nium-client';

const instance: ProductBusinessDetails = {
    referenceId,
    businessName,
    businessName_local,
    businessRegistrationNumber,
    searchReferenceId,
    description,
    tradeName,
    trusteeName,
    settlorName,
    formerName,
    partnershipDetails,
    associationDetails,
    businessType,
    purposeCode,
    businessInOtherCountries,
    website,
    stockSymbol,
    ticker,
    legalDetails,
    regulatoryDetails,
    taxDetails,
    addresses,
    onboardingDetails,
    documentDetails,
    stakeholders,
    applicantDetails,
    additionalInfo,
    hasNominee,
    revenueInfo,
    bankAccountDetails,
    isCashIntensiveBusiness,
    isClient,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
