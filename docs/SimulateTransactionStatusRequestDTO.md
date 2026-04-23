# SimulateTransactionStatusRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextStatus** | **string** | Accept the next applicable status for the transaction per [Transaction Lifecyle](/docs/remittance-lifecycle). | [default to undefined]
**requestInfoFor** | **string** | Accept the enum value based on which Request for information is raised.  For example, submitting **creditor_firstName** would initiate an request for information (RFI) on the beneficiary\&#39;s first name. | [optional] [default to undefined]

## Example

```typescript
import { SimulateTransactionStatusRequestDTO } from 'nium-client';

const instance: SimulateTransactionStatusRequestDTO = {
    nextStatus,
    requestInfoFor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
