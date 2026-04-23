# BusinessPartner2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessType** | **string** | The legal entity type of the business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**businessEntityType** | **string** | The position of the corporate stakeholder in the customer\&#39;s business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**businessName** | **string** | The registered business name of the business partner. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The registered business registration number of the business partner. | [optional] [default to undefined]
**tradeName** | **string** |  | [optional] [default to undefined]
**trusteeName** | **string** |  | [optional] [default to undefined]
**sharePercentage** | **string** | Ownership percentage as a number from 0 to 100. Example: &#x60;23.4&#x60;. Applies to Ultimate Beneficial Owners (UBOs), shareholders, trustees, or partners. | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**purposeCode** | **string** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**ticker** | **string** |  | [optional] [default to undefined]
**businessInOtherCountries** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**legalDetails** | [**ProductLegalDetails**](ProductLegalDetails.md) |  | [optional] [default to undefined]
**regulatoryDetails** | [**ProductRegulatoryDetails**](ProductRegulatoryDetails.md) |  | [optional] [default to undefined]
**addresses** | [**ProductAddresses**](ProductAddresses.md) |  | [optional] [default to undefined]
**documentDetails** | [**ProductDocumentDetail**](ProductDocumentDetail.md) |  | [optional] [default to undefined]
**capitalContribution** | **string** | Accepts the capital contribution of the:   - Ultimate Beneficial Owner (&#x60;UBO&#x60;)   - &#x60;SHAREHOLDER&#x60;   - &#x60;PARTNER&#x60;   - &#x60;TRUSTEE&#x60; Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]

## Example

```typescript
import { BusinessPartner2 } from 'nium-client';

const instance: BusinessPartner2 = {
    businessType,
    businessEntityType,
    businessName,
    businessRegistrationNumber,
    tradeName,
    trusteeName,
    sharePercentage,
    description,
    purposeCode,
    website,
    ticker,
    businessInOtherCountries,
    legalDetails,
    regulatoryDetails,
    addresses,
    documentDetails,
    capitalContribution,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
