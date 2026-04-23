# CAFullPublicCompanyCustomerOtherDetails

Contains customer details for CA, corporate, full kycType specific to Public Company businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stockSymbol** | **string** | Stock symbol of the company if it is publicly listed | [optional] [default to undefined]
**listedExchange** | **string** | Stock exchange where the company is listed | [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsCA&gt;**](BusinessDocumentsCA.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CAFullPublicCompanyCustomerOtherDetails } from 'nium-client';

const instance: CAFullPublicCompanyCustomerOtherDetails = {
    stockSymbol,
    listedExchange,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
