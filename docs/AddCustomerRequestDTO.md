# AddCustomerRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | This field accepts the unique email address of the customer. Maximum character limit: 60 | [default to undefined]
**mobile** | **string** | This field accepts the mobile number of the customer--digits only--without the country code. Maximum character limit: 20 | [default to undefined]
**countryCode** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the country prefix code to the customer\&#39;s mobile number. | [default to undefined]
**kycMode** | **string** | This field can accept only one of the following values: • E_KYC • MANUAL_KYC • SCREENING • E_DOC_VERIFY | [optional] [default to undefined]
**nationality** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the customer\&#39;s citizenship. | [optional] [default to undefined]
**firstName** | **string** | This field accepts the first name of the customer. Maximum character limit: 40 | [optional] [default to undefined]
**middleName** | **string** | This field accepts the middle name of the customer. Maximum character limit: 40 | [optional] [default to undefined]
**lastName** | **string** | This field accepts the last name of the customer. Maximum character limit: 40 | [optional] [default to undefined]
**nativeLanguageName** | **string** | This field accepts the customer\&#39;s name in native language. Maximum character limit: 40 | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in YYYY-MM-DD format. Minimum customer age should be 18 years. Discuss with your Nium account manager for any special use-cases. | [optional] [default to undefined]
**preferredName** | **string** | This field accepts the common name or preferred name of the customer. It is also acceptable to pass the first name in this field. Maximum character limit: 20 | [optional] [default to undefined]
**gender** | **string** | This field can accept only one of the following values: • Male • Female • Others | [optional] [default to undefined]
**designation** | **string** | This field accepts the designation of the customer for certain shipping industry use-cases. This field can accept only one of the following values: • CAPTAIN • SEAFARER • SMC • VESSEL | [optional] [default to undefined]
**employeeId** | **string** | The employee ID of the customer, if applicable. | [optional] [default to undefined]
**customerHashId** | **string** | The previously generated unique customer identifier of customer. | [optional] [default to undefined]
**billingAddress1** | **string** | This field accepts line 1 of the customer’s billing address. In the case of eKYC[GreenId], this field is used to verify the address with the document chosen. Maximum character limit: 40 The format for GreenId is: StreetNumber | StreetName | Suburb. | [optional] [default to undefined]
**billingAddress2** | **string** | This field accepts the line 2 of customer\&#39;s billing address. Maximum character limit: 40 | [optional] [default to undefined]
**billingLandmark** | **string** | This field accepts the landmark for customer’s billing address. Maximum character limit: 40 | [optional] [default to undefined]
**billingCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the customer\&#39;s address. | [optional] [default to undefined]
**billingState** | **string** | The state of the customer\&#39;s billing address. Maximum character limit: 30 | [optional] [default to undefined]
**billingCity** | **string** | This field accepts the city of customer’s billing address. Maximum character limit: 20 | [optional] [default to undefined]
**billingZipCode** | **string** | This field accepts the zipcode of customer’s billing address. Maximum character limit: 10 | [optional] [default to undefined]
**deliveryAddress1** | **string** | This field accepts the line 1 of customer’s delivery address. Maximum character limit: 40 | [optional] [default to undefined]
**deliveryAddress2** | **string** | This field accepts the line 2 of customer\&#39;s delivery address. Maximum character limit: 40 | [optional] [default to undefined]
**deliveryLandmark** | **string** | This field accepts the landmark for customer\&#39;s delivery address. Maximum character limit: 40 | [optional] [default to undefined]
**deliveryCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the customer\&#39;s address. | [optional] [default to undefined]
**deliveryState** | **string** | This field accepts the state of customer\&#39;s delivery address. Maximum character limit: 30 | [optional] [default to undefined]
**deliveryCity** | **string** | The city of the customer\&#39;s delivery address. Maximum character limit: 20 | [optional] [default to undefined]
**deliveryZipCode** | **string** | This field accepts the zipcode of customer\&#39;s delivery address. Maximum character limit: 10 | [optional] [default to undefined]
**correspondenceAddress1** | **string** | This field accepts the line 1 of customer\&#39;s correspondence address. Maximum character limit: 40 | [optional] [default to undefined]
**correspondenceAddress2** | **string** | This field accepts the line 2 of customer\&#39;s correspondence address. Maximum character limit: 40 | [optional] [default to undefined]
**correspondenceLandmark** | **string** | This field accepts the landmark for customer\&#39;s correspondence address. Maximum character limit: 40 | [optional] [default to undefined]
**correspondenceCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the customer\&#39;s address. | [optional] [default to undefined]
**correspondenceState** | **string** | State where the customer lives. Maximum character limit: 30 | [optional] [default to undefined]
**correspondenceCity** | **string** | City where the customer lives. Maximum character limit: 20 | [optional] [default to undefined]
**correspondenceZipCode** | **string** | This field accepts the zipcode of customer\&#39;s correspondence address. Maximum character limit: 10 | [optional] [default to undefined]
**identificationDoc** | **string** | This is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10 MB. A separate object is needed for each document image. | [optional] [default to undefined]
**additionalInfo** | **string** | This array accepts additional information. | [optional] [default to undefined]
**complianceLevel** | **string** | The compliance level for the customer. It is useful when the client has multiple compliance setup. For example, customer may be onboarded with SCREENING and upgrade to SCREENING_KYC later. | [optional] [default to undefined]
**deviceInfo** | **string** | The OS of the device used by the customer for initiating the request. | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device used by the customer for initiating the request. | [optional] [default to undefined]
**countryIP** | **string** | The country IP for the device by the customer for initiating the request. | [optional] [default to undefined]
**sessionId** | **string** | The session ID for the session of the customer for initiating the request. | [optional] [default to undefined]
**segment** | **string** | This field accepts the fee segment associated with a client. Maximum character limit: 64 | [optional] [default to undefined]
**taxDetails** | [**Array&lt;CustomerCustomerTaxDetailDTO&gt;**](CustomerCustomerTaxDetailDTO.md) |  | [optional] [default to undefined]
**pep** | **boolean** | This field specifies if the customer is a Politically Exposed Person (PEP) or not. Note: This field is mandatory for EU. | [optional] [default to undefined]
**verificationConsent** | **boolean** | This field specifies if the electronic verification consent to process customer data for compliance is required or not. | [optional] [default to undefined]
**countryOfBirth** | **string** | This field accepts the 2-letter [ISO country code](/docs/currency-and-country-codes) denoting the customer’s country of birth. Note: This field is mandatory for EU. | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | This field accepts the customer\&#39;s intended use of account. See the [Unified Add Customer](https://docs.nium.com/apis/docs/unified-add-customer-api) request for more information. | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**estimatedMonthlyFundingCurrency** | **string** | This field accepts the 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) in which estimated monthly funding is expected in the wallet, for example, SGD. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**estimatedMonthlyFunding** | **string** | This field accepts the estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request. The possible values are: • MF001: &lt;1000 • MF002: 1000-5000 • MF003: 5001-10000 • MF004: 10001-20000 • MF005: &gt;20000 See the [Unified Add Customer](https://docs.nium.com/apis/docs/unified-add-customer-api) request Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**internationalPaymentsSupported** | **boolean** | This field specifies if the customer will be doing International send/receive payments. The default value will be false. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**expectedCountriesToSendReceiveFrom** | **Array&lt;string&gt;** | This is an array of 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”]. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**tags** | [**Array&lt;CustomerCustomerTagDTO&gt;**](CustomerCustomerTagDTO.md) | User defined key-value pairs that enable you to tag transactions with additional details. The maximum number of tags allowed is 15. | [optional] [default to undefined]
**parentCustomerHashId** | **string** | The unique parent customer identifier generated at the time of customer creation. | [optional] [default to undefined]
**upgradeRequest** | **boolean** |  | [optional] [default to undefined]
**isTncAccepted** | **boolean** | This flag specifies if the customer has accepted or rejected the Terms and Conditions. | [optional] [default to undefined]

## Example

```typescript
import { AddCustomerRequestDTO } from 'nium-client';

const instance: AddCustomerRequestDTO = {
    email,
    mobile,
    countryCode,
    kycMode,
    nationality,
    firstName,
    middleName,
    lastName,
    nativeLanguageName,
    dateOfBirth,
    preferredName,
    gender,
    designation,
    employeeId,
    customerHashId,
    billingAddress1,
    billingAddress2,
    billingLandmark,
    billingCountry,
    billingState,
    billingCity,
    billingZipCode,
    deliveryAddress1,
    deliveryAddress2,
    deliveryLandmark,
    deliveryCountry,
    deliveryState,
    deliveryCity,
    deliveryZipCode,
    correspondenceAddress1,
    correspondenceAddress2,
    correspondenceLandmark,
    correspondenceCountry,
    correspondenceState,
    correspondenceCity,
    correspondenceZipCode,
    identificationDoc,
    additionalInfo,
    complianceLevel,
    deviceInfo,
    ipAddress,
    countryIP,
    sessionId,
    segment,
    taxDetails,
    pep,
    verificationConsent,
    countryOfBirth,
    intendedUseOfAccount,
    occupation,
    estimatedMonthlyFundingCurrency,
    estimatedMonthlyFunding,
    internationalPaymentsSupported,
    expectedCountriesToSendReceiveFrom,
    tags,
    parentCustomerHashId,
    upgradeRequest,
    isTncAccepted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
