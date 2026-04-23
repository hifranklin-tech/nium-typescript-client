# Payout

This object accepts the payout details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swiftFeeType** | **string** | This field accepts the swift fee type and defines who will bear the SWIFT charges for the given transaction. Clients can send any of the below values basis which, they will be charged for the SWIFT transaction. In case this field is absent SHA will be applied by default.  OUR - SWIFT charges borne by the customer SHA - SWIFT charges shared by the customer and beneficiary  Note: Clients should make sure that fee template is configured for each of the swift fee type. To know if the template is configured, clients should call [Fee Details](/apis/reference/feedetails) API | [optional] [default to undefined]
**scheduledPayoutDate** | **string** | This field accepts scheduled payout date in &#x60;YYYY-MM-DD&#x60; format | [optional] [default to undefined]
**tradeOrderID** | **string** | This field should denote the invoice number relevant to the transaction | [optional] [default to undefined]
**serviceTime** | **string** | The date of providing of service/export in yyyy-MM-dd format | [optional] [default to undefined]
**preScreening** | **boolean** | Details if compliance checks are to be done at the time of payout creation. This field is applicable only for scheduled and Post-Funded payouts. | [optional] [default to undefined]
**auditId** | **number** | The audit Id must be taken from [Exchange Rate Lock and Hold](https://docs.nium.com/baas/exchange-rate-lock-and-hold) API. Note: This field name can also be passed as audit_id. | [optional] [default to undefined]
**sourceAmount** | **number** | Accepts the source amount for remittance. Either the source or the destination amount is mandatory.  Allowed decimal limit is 2. Note: This field name can also be passed as source_amount. | [optional] [default to undefined]
**sourceCurrency** | **string** | Accepts the source currency for remittance. Note: This field name can also be passed as source_currency. | [optional] [default to undefined]
**destinationAmount** | **number** | Accepts the destination amount for remittance. Either the source or the destination amount is mandatory.  Allowed decimal limit is 2. Note: This field name can also be passed as destination_amount. | [optional] [default to undefined]

## Example

```typescript
import { Payout } from 'nium-client';

const instance: Payout = {
    swiftFeeType,
    scheduledPayoutDate,
    tradeOrderID,
    serviceTime,
    preScreening,
    auditId,
    sourceAmount,
    sourceCurrency,
    destinationAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
