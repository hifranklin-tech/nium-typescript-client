# CorporateLegalDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registeredCountry** | **string** | The country where the corporation is registered. Use values from the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**registeredDate** | **string** | The business’s registration date, entered in &#x60;YYYY-MM-DD&#x60; format. This date cannot be in the future. | [optional] [default to undefined]

## Example

```typescript
import { CorporateLegalDetails } from 'nium-client';

const instance: CorporateLegalDetails = {
    registeredCountry,
    registeredDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
