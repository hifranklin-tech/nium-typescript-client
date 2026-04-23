# RemitterRequestDto

Accepts details about the remitter while doing on-behalf payouts. Applies only to licensed financial institutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the remitter. | [default to undefined]
**bankAccountNumber** | **string** | The account number of the Remitter. | [optional] [default to undefined]
**accountType** | **string** | The remitter\&#39;s account type. | [default to undefined]
**contactNumber** | **string** | The remitter\&#39;s contact number. | [optional] [default to undefined]
**dob** | **string** | The remitter\&#39;s birth date. | [optional] [default to undefined]
**address** | **string** | The remitter\&#39;s place of residence. | [optional] [default to undefined]
**city** | **string** | The city of the remitter\&#39;s place of residence. | [optional] [default to undefined]
**postcode** | **string** | The postcode of the remitter\&#39;s place of residence. | [optional] [default to undefined]
**state** | **string** | The of the remitter\&#39;s place of residence. | [optional] [default to undefined]
**countryCode** | **string** | The country of residence for the remitter. | [default to undefined]
**nationality** | **string** | The remitter\&#39;s nationality. | [optional] [default to undefined]
**identificationType** | **string** | The ID document type of the remitter e.g. Passport, National_ID etc.. | [default to undefined]
**identificationNumber** | **string** | ID number of the selected &#x60;identificationType&#x60;. | [default to undefined]
**placeOfBirth** | **string** | The remitter\&#39;s place of birth. | [optional] [default to undefined]
**industryType** | **string** | The industry type associated with the remitter. | [optional] [default to undefined]
**originatingFIName** | **string** | The name of the financial institution where the request was initiated. This is typically applicable for requests that did not originate at the financial institution who is a direct Nium customer. | [optional] [default to undefined]
**idIssueDate** | **string** | Issue Date of the Identification Document. | [optional] [default to undefined]
**idExpiryDate** | **string** | Expiry Date of the Identification Document. | [optional] [default to undefined]
**originatingFICity** | **string** | The city of the financial institution where the request was initiated. | [optional] [default to undefined]
**originatingFICountry** | **string** | The country of the financial institution where the request was initiated. | [optional] [default to undefined]

## Example

```typescript
import { RemitterRequestDto } from 'nium-client';

const instance: RemitterRequestDto = {
    name,
    bankAccountNumber,
    accountType,
    contactNumber,
    dob,
    address,
    city,
    postcode,
    state,
    countryCode,
    nationality,
    identificationType,
    identificationNumber,
    placeOfBirth,
    industryType,
    originatingFIName,
    idIssueDate,
    idExpiryDate,
    originatingFICity,
    originatingFICountry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
