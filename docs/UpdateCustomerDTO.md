# UpdateCustomerDTO

Info: In this API, all request fields are optional, at least one key-value is needed in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockType** | **string** |  | [optional] [default to undefined]
**customerHashId** | **string** | Unique customer identifier generated when the customer is created. | [optional] [default to undefined]
**employeeId** | **string** | The employee Id for the customer, in case of a corporate program. | [optional] [default to undefined]
**nativeLanguageName** | **string** | This field contains the customer\&#39;s name in native language. Maximum character limit: 40 | [optional] [default to undefined]
**mobile** | **string** | Mobile number to be updated. | [optional] [default to undefined]
**email** | **string** | Customer\&#39;s email address | [optional] [default to undefined]
**countryCode** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) for identifying the country prefix to a mobile number. | [optional] [default to undefined]
**billingAddressId** | **string** |  | [optional] [default to undefined]
**billingAddress1** | **string** | Billing address line one of a customer. | [optional] [default to undefined]
**billingAddress2** | **string** | Billing address line two of a customer. | [optional] [default to undefined]
**billingLandmark** | **string** | Billing landmark address field. | [optional] [default to undefined]
**billingCountry** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country of customer’s billing address. It is important to pass this field if the card to be issued is to be used for GooglePay or ApplePay provisioning. | [optional] [default to undefined]
**billingState** | **string** | State or province of the customer\&#39;s address. | [optional] [default to undefined]
**billingCity** | **string** | Billing address city name. | [optional] [default to undefined]
**billingZipCode** | **string** | Billing address ZIP code. | [optional] [default to undefined]
**deliveryAddressId** | **string** |  | [optional] [default to undefined]
**deliveryAddress1** | **string** | Line one of the address where the customer would like to receive a card. | [optional] [default to undefined]
**deliveryAddress2** | **string** | Line two of the customer\&#39;s delivery address. | [optional] [default to undefined]
**deliveryLandmark** | **string** | delivery landmark address field. | [optional] [default to undefined]
**deliveryCountry** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country of customer\&#39;s delivery address. | [optional] [default to undefined]
**deliveryState** | **string** | State or province of the customer\&#39;s address. | [optional] [default to undefined]
**deliveryCity** | **string** | City where the customer lives. | [optional] [default to undefined]
**deliveryZipCode** | **string** | Customer\&#39;s ZIP code. | [optional] [default to undefined]
**correspondenceAddressId** | **string** |  | [optional] [default to undefined]
**correspondenceAddress1** | **string** | Line one of the customer\&#39;s correspondence address. | [optional] [default to undefined]
**correspondenceAddress2** | **string** | Line two of the customer\&#39;s correspondence address. | [optional] [default to undefined]
**correspondenceLandmark** | **string** | Correspondence landmark address field. | [optional] [default to undefined]
**correspondenceCountry** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country of customer’s correspondence address. | [optional] [default to undefined]
**correspondenceState** | **string** | Correspondence address state name. | [optional] [default to undefined]
**correspondenceCity** | **string** | Correspondence address city name. | [optional] [default to undefined]
**correspondenceZipCode** | **string** | Correspondence postal/ZIP code of a customer. | [optional] [default to undefined]
**deviceInfo** | **string** | The OS of the device used by the customer for initiating the request. | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device used by the customer for initiating the request. | [optional] [default to undefined]
**countryIP** | **string** | The country IP for the device by the customer for initiating the request. | [optional] [default to undefined]
**sessionId** | **string** | The session Id for the session of the customer for initiating the request. | [optional] [default to undefined]
**segment** | **string** | This is the fee segment associated with a client. Maximum character limit: 64 | [optional] [default to undefined]
**authenticationCode** | **string** | This field accepts the authentication code generated as part of SCA (Strong Customer Authentication). Note: : Authentication code must be passed if regulatory region of the program is UK or EU. This field does not accept a value for any other region. | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCustomerDTO } from 'nium-client';

const instance: UpdateCustomerDTO = {
    blockType,
    customerHashId,
    employeeId,
    nativeLanguageName,
    mobile,
    email,
    countryCode,
    billingAddressId,
    billingAddress1,
    billingAddress2,
    billingLandmark,
    billingCountry,
    billingState,
    billingCity,
    billingZipCode,
    deliveryAddressId,
    deliveryAddress1,
    deliveryAddress2,
    deliveryLandmark,
    deliveryCountry,
    deliveryState,
    deliveryCity,
    deliveryZipCode,
    correspondenceAddressId,
    correspondenceAddress1,
    correspondenceAddress2,
    correspondenceLandmark,
    correspondenceCountry,
    correspondenceState,
    correspondenceCity,
    correspondenceZipCode,
    deviceInfo,
    ipAddress,
    countryIP,
    sessionId,
    segment,
    authenticationCode,
    occupation,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
