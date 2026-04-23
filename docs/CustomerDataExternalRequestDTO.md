# CustomerDataExternalRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mobile** | **string** | This field accepts the mobile number of the customer--digits only--without the country code. Maximum character limit: 20 | [default to undefined]
**email** | **string** | This field accepts the unique email address of the customer. Maximum character limit: 60 | [default to undefined]
**countryCode** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country prefix code to the customer’s mobile number. | [default to undefined]
**customerHashId** | **string** | The previously generated unique customer identifier of customer. | [optional] [default to undefined]
**segment** | **string** | This field accepts the fee segment associated with a client. Maximum character limit: 64 | [optional] [default to undefined]
**nativeLanguageName** | **string** | This field accepts the customer\&#39;s name in native language. Maximum character limit: 40 | [optional] [default to undefined]
**upgradeRequest** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerDataExternalRequestDTO } from 'nium-client';

const instance: CustomerDataExternalRequestDTO = {
    mobile,
    email,
    countryCode,
    customerHashId,
    segment,
    nativeLanguageName,
    upgradeRequest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
