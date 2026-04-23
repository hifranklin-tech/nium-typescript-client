# BulkPayoutServicePayout

Accepts the payout details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swiftFeeType** | **string** | Accepts the swift fee type and defines who will bear the SWIFT charges for the transaction.  Clients can send any of the following values basis which, they will be charged for the SWIFT transaction. If this field is left blank &#x60;SHA&#x60; will be used by default.   - **SHA**: SWIFT charges shared by the customer and beneficiary.   - **OUR**: SWIFT charges borne by the customer.  Clients should make sure that fee template is configured for each SWIFT fee type. Use the [Fetch Fee Details](/api#tag/client-settings/GET/api/v3/client/{clientHashId}/fees) request to verify the templates are configuered correctly. | [optional] [default to undefined]
**scheduledPayoutDate** | **string** | The scheduled payout date in yyyy-MM-dd format | [optional] [default to undefined]
**tradeOrderID** | **string** | Denote the invoice number relevant to the transaction. | [optional] [default to undefined]
**serviceTime** | **string** | The date service/export was or will be provided (in &#x60;yyyy-MM-dd&#x60; format). | [optional] [default to undefined]
**preScreening** | **boolean** | Indicates if compliance checks are to be done at the time of payout creation.  This field is applicable for Scheduled or Post-funded payouts only. | [optional] [default to undefined]
**auditId** | **number** | The audit Id must be taken from the response to the [Exchange Rate Lock and Hold](https://docs.nium.com/baas/exchange-rate-lock-and-hold) request. Note: This field name can also be passed as &#x60;audit_id&#x60;. | [optional] [default to undefined]
**sourceAmount** | **number** | This field accepts the source amount for &#x60;remittance&#x60;. Either the source or the destination amount is required.  Allowed decimal limit is 2. Note: This field name can also be passed as &#x60;source_amount&#x60;. | [optional] [default to undefined]
**sourceCurrency** | **string** | The source currency for the &#x60;remittance&#x60;. Note: This field name can also be passed as &#x60;source_currency&#x60;. | [optional] [default to undefined]
**payoutCurrency** | **string** | The payout currency for the &#x60;remittance&#x60;. Note: This field name can also be passed as &#x60;payout_currency&#x60;. | [default to undefined]
**destinationAmount** | **number** | The destination amount for the &#x60;remittance&#x60;. Either the source or the destination amount is required.   - Allowed decimal limit is 2.   - This field name can also be passed as destination_amount. | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutServicePayout } from 'nium-client';

const instance: BulkPayoutServicePayout = {
    swiftFeeType,
    scheduledPayoutDate,
    tradeOrderID,
    serviceTime,
    preScreening,
    auditId,
    sourceAmount,
    sourceCurrency,
    payoutCurrency,
    destinationAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
