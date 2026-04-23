# ProductBusinessPartner

Details of the corporate stakeholders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | The registered business name. Required when the stakeholder(s) is a business entity. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The registration number of the business. Required when the stakeholder(s) is a business entity. | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**businessEntityType** | **string** | The position of the corporate stakeholder in the customer\&#39;s business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**sharePercentage** | **string** | Ownership percentage as a number from 0 to 100. Example: &#x60;23.4&#x60;. Applies to Ultimate Beneficial Owners (UBOs), shareholders, trustees, or partners. | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**tradeName** | **string** |  | [optional] [default to undefined]
**trusteeName** | **string** |  | [optional] [default to undefined]
**purposeCode** | **string** |  | [optional] [default to undefined]
**businessInOtherCountries** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**ticker** | **string** |  | [optional] [default to undefined]
**legalDetails** | [**ProductLegalDetails**](ProductLegalDetails.md) |  | [optional] [default to undefined]
**regulatoryDetails** | [**ProductRegulatoryDetails**](ProductRegulatoryDetails.md) |  | [optional] [default to undefined]
**addresses** | [**ProductAddresses**](ProductAddresses.md) |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;ProductDocumentDetail&gt;**](ProductDocumentDetail.md) |  | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**capitalContribution** | **string** | Accepts the capital contribution of the:   - Ultimate Beneficial Owner (&#x60;UBO&#x60;)   - &#x60;SHAREHOLDER&#x60;   - &#x60;PARTNER&#x60;   - &#x60;TRUSTEE&#x60; Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]

## Example

```typescript
import { ProductBusinessPartner } from 'nium-client';

const instance: ProductBusinessPartner = {
    businessName,
    businessRegistrationNumber,
    businessType,
    businessEntityType,
    sharePercentage,
    description,
    tradeName,
    trusteeName,
    purposeCode,
    businessInOtherCountries,
    website,
    ticker,
    legalDetails,
    regulatoryDetails,
    addresses,
    documentDetails,
    additionalInfo,
    capitalContribution,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
