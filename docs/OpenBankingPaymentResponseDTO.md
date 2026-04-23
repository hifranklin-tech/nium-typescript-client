# OpenBankingPaymentResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemReferenceNumber** | **string** | The unique, system generated reference number for the transaction. | [optional] [default to undefined]
**debtorAccount** | [**AccountReference**](AccountReference.md) |  | [optional] [default to undefined]
**creditorAccount** | [**AccountReference**](AccountReference.md) |  | [optional] [default to undefined]
**instructedAmount** | [**Amount**](Amount.md) |  | [optional] [default to undefined]
**routingCodeValue** | **string** | The BIC routing code for the transaction. | [optional] [default to undefined]
**statementNarrative** | **string** | The narrative for the transaction. | [optional] [default to undefined]
**creditorName** | **string** | The name of the receiver for this flow. | [optional] [default to undefined]
**comments** | **string** | The system-generated comments for the transaction. | [optional] [default to undefined]
**status** | **string** | This field contains the status of the transaction. The possible values are: INITIATED, PENDING, REJECTED, SENT_TO_BANK, PAID, RETURN | [optional] [default to undefined]

## Example

```typescript
import { OpenBankingPaymentResponseDTO } from 'nium-client';

const instance: OpenBankingPaymentResponseDTO = {
    systemReferenceNumber,
    debtorAccount,
    creditorAccount,
    instructedAmount,
    routingCodeValue,
    statementNarrative,
    creditorName,
    comments,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
