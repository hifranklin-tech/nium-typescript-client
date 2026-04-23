# WalletRfiResponseInfo

This object accepts the actual data or document element as requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | This field accepts the first name of the customer. Maximum character limit: 50. | [optional] [default to undefined]
**middleName** | **string** | This field accepts the middle name of the customer. Maximum character limit: 50. | [optional] [default to undefined]
**lastName** | **string** | This field accepts the last name of the customer. Maximum character limit: 50. | [optional] [default to undefined]
**bankName** | **string** | The bank name. | [optional] [default to undefined]
**nationality** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer’s citizenship. | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in &#x60;YYYY-MM-DD&#x60; format. | [optional] [default to undefined]
**address** | [**AddressDTO1**](AddressDTO1.md) |  | [optional] [default to undefined]
**bankAccountNumber** | **string** | The bank account number. | [optional] [default to undefined]
**companyName** | **string** | The company name of the customer. | [optional] [default to undefined]
**identificationDoc** | [**WalletIdentificationDocDTO**](WalletIdentificationDocDTO.md) |  | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | This object accepts RFI raised for additional information fields. | [optional] [default to undefined]

## Example

```typescript
import { WalletRfiResponseInfo } from 'nium-client';

const instance: WalletRfiResponseInfo = {
    firstName,
    middleName,
    lastName,
    bankName,
    nationality,
    dateOfBirth,
    address,
    bankAccountNumber,
    companyName,
    identificationDoc,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
