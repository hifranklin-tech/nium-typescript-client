# AddCustomerResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerHashId** | **string** | Unique customer identifier generated on customer creation | [optional] [default to undefined]
**walletHashId** | **string** | Unique wallet identifier generated simultaneously with customer creation. | [optional] [default to undefined]
**kycStatus** | **string** | The kyc status and this shall be available only in applicable cases. Call the [Customer Details](ref:customerdetailsv2) API to fetch the updated kyc status. | [optional] [default to undefined]
**complianceStatus** | **string** | The compliance status of the transactions. Available values include:   - **PENDING**: The transaction is under compliance review and may require additional checks before it can proceed.   - **RFI_REQUESTED**: Additional information has been requested to complete the compliance review of this transaction.   - **CLEAR**: The transaction has passed all compliance checks and can proceed to the next step in processing.   - **REJECTED**: The transaction did not meet compliance requirements and cannot proceed. | [optional] [default to undefined]
**redirectUrl** | **string** | The redirect URL where the customer should be redirected for verification. | [optional] [default to undefined]
**paymentIds** | [**Array&lt;CustomerPaymentIdDTO&gt;**](CustomerPaymentIdDTO.md) | This is an array which contains the paymentIds assigned to the customer. | [optional] [default to undefined]

## Example

```typescript
import { AddCustomerResponseDTO } from 'nium-client';

const instance: AddCustomerResponseDTO = {
    customerHashId,
    walletHashId,
    kycStatus,
    complianceStatus,
    redirectUrl,
    paymentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
