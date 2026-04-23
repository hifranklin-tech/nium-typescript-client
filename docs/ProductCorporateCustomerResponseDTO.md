# ProductCorporateCustomerResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **string** | The &#x60;clientId&#x60; of the customer. | [optional] [default to undefined]
**caseId** | **string** | The compliance case Id of the customer. | [optional] [default to undefined]
**status** | **string** | The compliance status. Returns **IN_PROGRESS**. | [optional] [default to undefined]
**remarks** | **string** | The remarks auto-generated during the compliance process. | [optional] [default to undefined]
**customerHashId** | **string** | The unique customer ID generated when the customer is created. | [optional] [default to undefined]
**walletHashId** | **string** | The unique wallet identifier generated simultaneously with the &#x60;customerId&#x60;. | [optional] [default to undefined]
**redirectUrl** | **string** | The redirect URL to be used for applicant KYC verification. | [optional] [default to undefined]
**expiry** | **string** | The time redirect URL used for applicant KYC verification will expire. | [optional] [default to undefined]
**errors** | [**Array&lt;ProductErrorResponse&gt;**](ProductErrorResponse.md) | The list of error code and description from compliance service. | [optional] [default to undefined]
**kycURLs** | [**KycUrls**](KycUrls.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductCorporateCustomerResponseDTO } from 'nium-client';

const instance: ProductCorporateCustomerResponseDTO = {
    clientId,
    caseId,
    status,
    remarks,
    customerHashId,
    walletHashId,
    redirectUrl,
    expiry,
    errors,
    kycURLs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
