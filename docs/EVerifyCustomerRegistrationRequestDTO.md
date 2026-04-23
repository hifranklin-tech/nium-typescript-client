# EVerifyCustomerRegistrationRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | This field accepts the first name of the customer. Maximum character limit: 40 | [default to undefined]
**middleName** | **string** | This field accepts the middle name of the customer. Maximum character limit: 40 | [optional] [default to undefined]
**lastName** | **string** | This field accepts the last name of the customer. Maximum character limit: 40 | [default to undefined]
**preferredName** | **string** | This field accepts the common name or preferred name of the customer. It is also acceptable to pass the first name in this field. Maximum character limit: 40 | [optional] [default to undefined]
**email** | **string** | This field accepts the unique email address of the customer. Maximum character limit: 60 | [default to undefined]
**mobile** | **string** | This field accepts the mobile number of the customer without the country prefix code. Maximum character limit: 20 | [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in &#x60;YYYY-MM-DD&#x60; format. Minimum age should be 18 years. Discuss with your Nium account manager for any special use-cases. | [default to undefined]
**nationality** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the customer’s citizenship. | [default to undefined]
**countryCode** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country prefix code to the customer’s mobile number. | [default to undefined]
**gender** | **string** | The gender of the customer. | [optional] [default to undefined]
**billingAddress1** | **string** | This field accepts the line 1 of customer’s billing address. Maximum character limit: 40 | [default to undefined]
**billingAddress2** | **string** | This field accepts the line 2 of customer’s billing address. Maximum character limit: 40 | [optional] [default to undefined]
**billingCountry** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country of customer’s billing address. | [default to undefined]
**billingState** | **string** | State or province of the customer\&#39;s address. | [optional] [default to undefined]
**billingCity** | **string** | This field accepts the city of customer’s billing address. Maximum character limit: 20 | [default to undefined]
**billingZipCode** | **string** | This field accepts the zipcode of customer’s billing address. Maximum character limit: 10 | [default to undefined]
**customerHashId** | **string** | This field accepts previously generated unique customer identifier of customer. | [default to undefined]
**deviceInfo** | **string** | The OS of the device used by the customer for initiating the request. | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device used by the customer for initiating the request. | [optional] [default to undefined]
**countryIP** | **string** | The country IP for the device by the customer for initiating the request. | [optional] [default to undefined]
**sessionId** | **string** | The session ID for the session of the customer for initiating the request. | [optional] [default to undefined]
**segment** | **string** | This field accepts the fee segment associated with a client. Maximum character limit: 64 | [optional] [default to undefined]
**nativeLanguageName** | **string** | This field accepts the customer\&#39;s name in native language. Maximum character limit: 40 | [optional] [default to undefined]
**taxDetails** | [**Array&lt;CustomerCustomerTaxDetailDTO&gt;**](CustomerCustomerTaxDetailDTO.md) | Tax details provided for compliance onboarding for EU customers. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**pep** | **boolean** | This field specifies if the customer is a Politically Exposed Person (PEP) or not. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**verificationConsent** | **boolean** | This field specifies if the electronic verification consent to process customer data for compliance or not. | [default to undefined]
**countryOfBirth** | **string** | This field accepts the 2-letter [ISO country code](/docs/currency-and-country-codes) denoting the customer’s country of birth. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | **Conditional** This field accepts the customer’s intended use of account.  Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**estimatedMonthlyFundingCurrency** | **string** | This field accepts the 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) in which estimated monthly funding is expected in the wallet, for example, SGD. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**estimatedMonthlyFunding** | **string** | This field accepts the estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request. The possible values are: • &lt;1000 • 1000-5000 • 5001-10000 • 10001-20000 • &gt;20000 Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**internationalPaymentsSupported** | **boolean** | This field specifies if the customer will be doing International send/receive payments. The default value will be false. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**expectedCountriesToSendReceiveFrom** | **Array&lt;string&gt;** | This is an array of 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”]. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**identificationDoc** | **string** | This is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10 MB. A separate object is needed for each document image. | [optional] [default to undefined]
**upgradeRequest** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { EVerifyCustomerRegistrationRequestDTO } from 'nium-client';

const instance: EVerifyCustomerRegistrationRequestDTO = {
    firstName,
    middleName,
    lastName,
    preferredName,
    email,
    mobile,
    dateOfBirth,
    nationality,
    countryCode,
    gender,
    billingAddress1,
    billingAddress2,
    billingCountry,
    billingState,
    billingCity,
    billingZipCode,
    customerHashId,
    deviceInfo,
    ipAddress,
    countryIP,
    sessionId,
    segment,
    nativeLanguageName,
    taxDetails,
    pep,
    verificationConsent,
    countryOfBirth,
    intendedUseOfAccount,
    estimatedMonthlyFundingCurrency,
    estimatedMonthlyFunding,
    internationalPaymentsSupported,
    expectedCountriesToSendReceiveFrom,
    identificationDoc,
    upgradeRequest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
