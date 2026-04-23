# ConversionCancelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the conversion. | [optional] [default to undefined]
**status** | [**ConversionStatus**](ConversionStatus.md) |  | [optional] [default to undefined]
**systemReferenceNumber** | **string** | Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details. | [optional] [default to undefined]
**cancellationFee** | **number** | The fee charged when executing the cancellation. | [optional] [default to undefined]
**cancellationFeeCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the cancellation fee. | [optional] [default to undefined]
**cancellationComment** | **string** | Free text comment for clients to record and track cancellation of the conversion. | [optional] [default to undefined]
**cancellationFeeSystemReferenceNumber** | **string** | Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details. | [optional] [default to undefined]
**cancellationReason** | [**CancellationReason**](CancellationReason.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConversionCancelResponse } from 'nium-client';

const instance: ConversionCancelResponse = {
    id,
    status,
    systemReferenceNumber,
    cancellationFee,
    cancellationFeeCurrencyCode,
    cancellationComment,
    cancellationFeeSystemReferenceNumber,
    cancellationReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
