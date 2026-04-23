# CustomerBusinessPartnerDetailsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The unique reference ID. | [optional] [default to undefined]
**businessName** | **string** | The registered business name of the business partner. | [optional] [default to undefined]
**registrationNumber** | **string** | The registered business registration number of the business partner. | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**businessEntityType** | **string** | The position of the corporate stakeholder in the customer\&#39;s business. Use the [Fetch Corporate Constant](/api#tag/customer-account---corporate/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate) request to get a list of valid values. | [optional] [default to undefined]
**sharePercentage** | **string** | Ownership percentage as a number from 0 to 100. Example: &#x60;23.4&#x60;. Applies to Ultimate Beneficial Owners (UBOs), shareholders, trustees, or partners. | [optional] [default to undefined]
**registeredDate** | **string** | The business registration date. | [optional] [default to undefined]
**registeredCountry** | **string** | The 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). | [optional] [default to undefined]
**addressLine1** | **string** | First line of the partner\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the partner\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | City where the partner lives. | [optional] [default to undefined]
**state** | **string** | State or province of the partner\&#39;s address. | [optional] [default to undefined]
**country** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the partner\&#39;s address. | [optional] [default to undefined]
**postcode** | **string** | The postcode of the registered address. | [optional] [default to undefined]
**capitalContribution** | **string** | Accepts the capital contribution of the: - Ultimate Beneficial Owner (&#x60;UBO&#x60;) - &#x60;SHAREHOLDER&#x60; - &#x60;PARTNER&#x60; - &#x60;TRUSTEE&#x60;  Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**addedBy** | **string** | Identifier of the user or system that added this business partner\&#39;s details. | [optional] [default to undefined]
**providedBy** | **string** | Identifier of the user or system that provided this business partner\&#39;s information. | [optional] [default to undefined]

## Example

```typescript
import { CustomerBusinessPartnerDetailsResponseDTO } from 'nium-client';

const instance: CustomerBusinessPartnerDetailsResponseDTO = {
    referenceId,
    businessName,
    registrationNumber,
    businessType,
    businessEntityType,
    sharePercentage,
    registeredDate,
    registeredCountry,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
    capitalContribution,
    addedBy,
    providedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
