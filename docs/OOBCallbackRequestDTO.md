# OobCallbackRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authTransactionId** | **string** | This field represents the unique authorization ID of the transaction received during the OOB authentication. | [default to undefined]
**referenceNumber** | **string** | A reference number is a unique ID associated with the OOB request from your system. | [default to undefined]
**statusCode** | **string** | The OOB authentication status code indicated if the transaction is approved or declined. The allowed values are: 001 — OOB authentication approved, 002 — OOB authentication declined. | [default to undefined]
**message** | **string** | An optional field to attach a message associated with the authentication. | [optional] [default to undefined]

## Example

```typescript
import { OobCallbackRequestDTO } from 'nium-client';

const instance: OobCallbackRequestDTO = {
    authTransactionId,
    referenceNumber,
    statusCode,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
