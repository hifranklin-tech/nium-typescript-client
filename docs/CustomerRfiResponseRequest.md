# CustomerRfiResponseRequest

The additional requests for information, depending upon documents required to raise RFI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiHashId** | **string** | The unique UUID rfiHashId received in Customer API. | [default to undefined]
**firstName** | **string** | This field accepts the first name of a customer. Maximum character limit: 40 | [optional] [default to undefined]
**middleName** | **string** | This field accepts the middle name of a customer. Maximum character limit: 40 | [optional] [default to undefined]
**lastName** | **string** | This field accepts the last name of a customer. Maximum character limit: 40 | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in &#x60;YYYY-MM-DD&#x60; format. | [optional] [default to undefined]
**addressLine1** | **string** | First line of the customer\&#39;s billing address. Maximum character limit: 40 | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the customer\&#39;s address (optional). Maximum character limit: 40 | [optional] [default to undefined]
**city** | **string** | City where the customer lives. Maximum character limit: 30 | [optional] [default to undefined]
**state** | **string** | State or province of the customer\&#39;s address. Maximum character limit: 30 | [optional] [default to undefined]
**country** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the country of the individual’s billing address. It is important to pass this field if the card to be issued is to be used for GooglePay or ApplePay provisioning. | [optional] [default to undefined]
**postcode** | **string** | This field accepts the customer\&#39;s billing ZIP code for the address. This field can accept alphanumeric characters, space, hyphen(-) and hash(#). Maximum character limit: 10 | [optional] [default to undefined]
**identificationDoc** | [**RfiIdentificationDoc**](RfiIdentificationDoc.md) |  | [optional] [default to undefined]
**nationality** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer’s citizenship. | [optional] [default to undefined]
**gender** | **string** | This field accepts the gender of the customer. The acceptable values are:  Male  Female  Others | [optional] [default to undefined]
**sourceOfFunds** | **string** | This field accepts the customer\&#39;s source of funds. This field can accept alphanumeric characters. Maximum character limit: 30 | [optional] [default to undefined]
**isPep** | **boolean** | This field will ensure either a customer is a Politically Exposed Person (PEP) or not. | [optional] [default to undefined]
**billingCountry** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer’s billing country. | [optional] [default to undefined]
**employmentStatus** | **string** | This field accepts the customer\&#39;s employment status. This field can accept alphanumeric characters. Maximum character limit: 30 | [optional] [default to undefined]
**industryType** | **string** | This field accepts the customer\&#39;s industry type. This field can accept alphanumeric characters. Maximum character limit: 30 | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | This field accepts the customer\&#39;s intendedUse of account. This field can accept alphanumeric characters. Maximum character limit: 30 | [optional] [default to undefined]
**clarifications** | **string** | This fields contains the additional clarifications requested by our compliance. Compliance remarks for the required clarifications are received in the response of the Fetch Individual customer RFI Details API.  Maximum character limit: 3000 | [optional] [default to undefined]

## Example

```typescript
import { CustomerRfiResponseRequest } from 'nium-client';

const instance: CustomerRfiResponseRequest = {
    rfiHashId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
    identificationDoc,
    nationality,
    gender,
    sourceOfFunds,
    isPep,
    billingCountry,
    employmentStatus,
    industryType,
    intendedUseOfAccount,
    clarifications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
