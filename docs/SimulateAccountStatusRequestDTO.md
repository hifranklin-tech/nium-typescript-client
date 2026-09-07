# SimulateAccountStatusRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextStatus** | **string** | This field will accept next applicable compliance status for the account as logically applicable as per Account Compliance Lifecyle | [default to undefined]
**requestInfoFor** | [**SimulateAccountStatusRequestDTORequestInfoFor**](SimulateAccountStatusRequestDTORequestInfoFor.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SimulateAccountStatusRequestDTO } from 'nium-client';

const instance: SimulateAccountStatusRequestDTO = {
    nextStatus,
    requestInfoFor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
