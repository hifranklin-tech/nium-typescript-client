# BusinessDetailsResponseV2DTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The  reference id of the entity | [optional] [default to undefined]
**businessName** | **string** | The business name of the entity. | [optional] [default to undefined]
**tradeName** | **string** | The trading name which is also known as Doing Business As(DBA)(In case the entity is doing business with a different name than the registered business name). | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The business registration number of the entity. | [optional] [default to undefined]
**registeredAddress** | **object** | The address registered to the corporation being onboarded. | [optional] [default to undefined]
**businessAddress** | **object** | This is an object which contains the business address details. | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**legalDetails** | [**LegalDetailsV2**](LegalDetailsV2.md) |  | [optional] [default to undefined]
**documentDetails** | **string** | This is an array which contains the document details. | [optional] [default to undefined]
**description** | **string** | The  description of the business details | [optional] [default to undefined]
**trusteeName** | **string** |  | [optional] [default to undefined]
**settlorName** | **string** |  | [optional] [default to undefined]
**formerName** | **string** | The former name. | [optional] [default to undefined]
**regulatoryDetails** | [**CustomerRegulatoryDetails**](CustomerRegulatoryDetails.md) |  | [optional] [default to undefined]
**businessExtractCoveredStakeholder** | **string** | This field contains business extract covered stakeholder which specifies if the business extract document given covers the stakeholder details. The value for this field can be either Yes or No. | [optional] [default to undefined]
**partnershipDetails** | [**PartnershipDetails**](PartnershipDetails.md) |  | [optional] [default to undefined]
**associationDetail** | [**AssociationDetails**](AssociationDetails.md) |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetailsResponseDTO&gt;**](TaxDetailsResponseDTO.md) | This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null. | [optional] [default to undefined]
**stockSymbol** | **string** | The stock ticker symbol under which the corporate customer’s shares are traded on a public exchange. Applicable only if the business is publicly listed. | [optional] [default to undefined]
**stakeholders** | [**Array&lt;StakeholderV2&gt;**](StakeholderV2.md) |  | [optional] [default to undefined]
**applicantDetails** | [**ApplicantDetailsV2**](ApplicantDetailsV2.md) |  | [optional] [default to undefined]
**hasNominee** | **boolean** | This field contains if the entity has a nominee stakeholder | [optional] [default to undefined]
**businessName_local** | **string** | The name of a business in local language | [optional] [default to undefined]
**isCashIntensiveBusiness** | **boolean** | This field contains if the business is a cash intensive business | [optional] [default to undefined]

## Example

```typescript
import { BusinessDetailsResponseV2DTO } from 'nium-client';

const instance: BusinessDetailsResponseV2DTO = {
    referenceId,
    businessName,
    tradeName,
    businessType,
    businessRegistrationNumber,
    registeredAddress,
    businessAddress,
    website,
    legalDetails,
    documentDetails,
    description,
    trusteeName,
    settlorName,
    formerName,
    regulatoryDetails,
    businessExtractCoveredStakeholder,
    partnershipDetails,
    associationDetail,
    taxDetails,
    stockSymbol,
    stakeholders,
    applicantDetails,
    hasNominee,
    businessName_local,
    isCashIntensiveBusiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
