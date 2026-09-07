# SimulateAccountStatusV5RequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isResubmissionAllowed** | **boolean** | Optional for reject. When false, rejection does not allow resubmission. | [optional] [default to true]
**nextAction** | **string** | This field will accept next applicable action for the account as logically applicable as per Account Lifecycle | [default to undefined]
**requestInfoFor** | [**SimulateAccountStatusV5RequestDTORequestInfoFor**](SimulateAccountStatusV5RequestDTORequestInfoFor.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SimulateAccountStatusV5RequestDTO } from 'nium-client';

const instance: SimulateAccountStatusV5RequestDTO = {
    isResubmissionAllowed,
    nextAction,
    requestInfoFor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
