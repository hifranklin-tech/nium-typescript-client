# ProductRiskAssessmentInfo

Additional business profile information, such as total number of employees and annual revenue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**riskScore** | **string** | Risk score of the customer as evaluated by the client.  Note: Applicable only for clients who have been pre-approved by Nium based on their license. | [optional] [default to undefined]
**riskSeverity** | **string** | Risk severity of the customer as evaluated by the client. Available values include:    - HIGH   - MEDIUM   - LOW Note: Applicable only for clients who have been pre-approved by Nium based on their license. | [optional] [default to undefined]
**totalEmployees** | **string** | Additional details of the of the businesss including total employees, annual turnover etc. | [optional] [default to undefined]
**annualTurnover** | **string** | The business\&#39; annual turnover in its local currency. | [optional] [default to undefined]
**industrySector** | **string** | The business\&#39; industry sector. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a valid list of values. | [optional] [default to undefined]
**ofacLicencePresent** | **string** | Details if the Online Travel Agency (OTA) customer has an Office of Foreign Assets Control (OFAC) license. Set to &#x60;Yes&#x60; if available. Note: An OFAC licence allows the OTA to make transactions that are otherwise prohibited under U.S. sanctions. | [optional] [default to undefined]
**travelRestrictedCountry** | **string** | Set to &#x60;Yes&#x60; if the customer facilitates travel to any travel-restricted country.  Applicable only if the customer is an Online Travel Agency (OTA). | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | The customer\&#39;s intended use of the account.  Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**countryOfOperation** | **Array&lt;string&gt;** | An array of all the countries the applying corporation has a presence and does business in. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a valid set of values. | [optional] [default to undefined]
**restrictedCountries** | **Array&lt;string&gt;** | Array of restrcited countries the Online Travel Agency (OTA) customer is facilitating travel to.  Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of restricted countries. | [optional] [default to undefined]
**transactionCountries** | **Array&lt;string&gt;** | The countries the customer plans on sending to and from, using this account. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]

## Example

```typescript
import { ProductRiskAssessmentInfo } from 'nium-client';

const instance: ProductRiskAssessmentInfo = {
    riskScore,
    riskSeverity,
    totalEmployees,
    annualTurnover,
    industrySector,
    ofacLicencePresent,
    travelRestrictedCountry,
    intendedUseOfAccount,
    countryOfOperation,
    restrictedCountries,
    transactionCountries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
