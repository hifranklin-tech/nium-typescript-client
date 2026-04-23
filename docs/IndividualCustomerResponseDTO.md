# IndividualCustomerResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The unique email address of the customer. | [optional] [default to undefined]
**countryCode** | **string** | This field contains the 2-letter [ISO-2 country code](/docs/currency-and-country-codes) for identifying the country prefix to the customer’s mobile number. | [optional] [default to undefined]
**mobile** | **string** | The mobile number of the customer without the country code. | [optional] [default to undefined]
**firstName** | **string** | The first name of the individual customer. | [optional] [default to undefined]
**middleName** | **string** | This field contains the middle name of the individual customer, if provided. Otherwise, it contains null. | [optional] [default to undefined]
**lastName** | **string** | The last name of the individual customer. | [optional] [default to undefined]
**preferredName** | **string** | The preferred name of the individual customer | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual [INDIVIDUAL] or applicant [CORPORATE] in YYYY-MM-DD format. | [optional] [default to undefined]
**gender** | **string** | This field contains the gender of the individual customer, if provided during customer onboarding. The possible values are - Male, Female, or Others. Otherwise, it contains null. | [optional] [default to undefined]
**nationality** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the customer [INDIVIDUAL] or applicant [CORPORATE] citizenship. | [optional] [default to undefined]
**employeeId** | **string** | The employee ID of an employee, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**designation** | **string** | The designation of an employee, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingAddress1** | **string** |  | [optional] [default to undefined]
**billingAddress2** | **string** | This field contains the line 2 of individual customer’s billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingCity** | **string** | This field contains the city of individual customer’s billing address. | [optional] [default to undefined]
**billingLandmark** | **string** | This field contains the landmark for individual customer’s billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingCountry** | **string** | This field contains the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingState** | **string** | This field contains the state of THE individual customer’s billing address, if provided during onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingZipCode** | **string** | This field contains the zip code of individual customer’s  billing address. | [optional] [default to undefined]
**nativeLanguageName** | **string** | The name of the customer in native language, if provided during customer onboarding. Otherwise, it contains null | [optional] [default to undefined]
**identificationData** | **Array&lt;{ [key: string]: string; }&gt;** | This array contains objects consisting of type and value of each uploaded document. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetailsResponseDTO&gt;**](TaxDetailsResponseDTO.md) | This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null. | [optional] [default to undefined]
**pep** | **boolean** | This flag indicates if a customer is a Politically Exposed Person (PEP) or not. | [optional] [default to undefined]
**countryOfBirth** | **string** | This field contains the 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) denoting the customer’s country of birth. | [optional] [default to undefined]
**estimatedMonthlyFunding** | **string** | The estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request. | [optional] [default to undefined]
**estimatedMonthlyFundingCurrency** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) in which estimated monthly funding is expected in the wallet, for example, SGD. | [optional] [default to undefined]
**internationalPaymentsSupported** | **boolean** | This field indicates if the customer will be doing International send/receive payments. The default value will be false. | [optional] [default to undefined]
**expectedCountriesToSendReceiveFrom** | **Array&lt;string&gt;** | This is an array of 2-letter [ISO Alpha-2 country code](/docs/currency-and-country-codes) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”]. | [optional] [default to undefined]
**parentCustomerHashId** | **string** | The unique identifier of the corporate parent customer to whom the individual customer is tagged. | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]

## Example

```typescript
import { IndividualCustomerResponseDTO } from 'nium-client';

const instance: IndividualCustomerResponseDTO = {
    email,
    countryCode,
    mobile,
    firstName,
    middleName,
    lastName,
    preferredName,
    dateOfBirth,
    gender,
    nationality,
    employeeId,
    designation,
    billingAddress1,
    billingAddress2,
    billingCity,
    billingLandmark,
    billingCountry,
    billingState,
    billingZipCode,
    nativeLanguageName,
    identificationData,
    taxDetails,
    pep,
    countryOfBirth,
    estimatedMonthlyFunding,
    estimatedMonthlyFundingCurrency,
    internationalPaymentsSupported,
    expectedCountriesToSendReceiveFrom,
    parentCustomerHashId,
    occupation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
