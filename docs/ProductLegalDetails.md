# ProductLegalDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legislationName** | **string** | The name of the legislation under which the entity was formed (e.g., *Associations Incorporation Act 2009* in NSW, Australia). | [optional] [default to undefined]
**registeredCountry** | **string** | The country where the business is registered. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**registrationType** | **string** |  | [optional] [default to undefined]
**registeredDate** | **string** | The business’s registration date, entered in &#x60;YYYY-MM-DD&#x60; format. This date cannot be in the future. | [optional] [default to undefined]
**listedExchange** | **string** | The stock exchange where the business is publicly listed. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**legislationType** | **string** | The type of legislation under which the government entity is formed (e.g., *Established Under State Territory Legislation*). Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**isRegistered** | **boolean** | Indicates if the club, association, or co-operative is officially registered. | [optional] [default to undefined]

## Example

```typescript
import { ProductLegalDetails } from 'nium-client';

const instance: ProductLegalDetails = {
    legislationName,
    registeredCountry,
    registrationType,
    registeredDate,
    listedExchange,
    legislationType,
    isRegistered,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
