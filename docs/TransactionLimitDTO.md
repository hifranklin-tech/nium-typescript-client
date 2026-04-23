# TransactionLimitDTO

This array contains an object for each card limit parameter. This object contains the below data elements. Please refer the example for exact structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maskedCardNumber** | **string** | This is the 16-digit masked card number in format 1234-56xx-xxxx-3456. | [optional] [default to undefined]
**type** | **string** | This field accepts the limit type to be set. It can take the following values: PER_TRANSACTION_AMOUNT_LIMIT DAILY_AMOUNT_LIMIT MONTHLY_AMOUNT_LIMIT LIFETIME_AMOUNT_LIMIT LIFETIME_COUNT_LIMIT TRANSACTION_DURATION_LIMIT | [default to undefined]
**value** | **string** | The values for each card-level limits. It accepts a date range in the yyyymmdd-yyyymmdd format and UTC +00 time zone as a string when type is TRANSACTION_DURATION_LIMIT. Otherwise, it accepts the limit value. | [default to undefined]
**additionalPercentage** | **number** | The threshold percentage which is calculated on the value as a threshold or margin which is to be allowed for authorization when a transaction exceeds the specified limits. The format is Decimal(3,4). | [default to undefined]
**status** | **string** | This field defines whether a particular limit is active or not. It can accept one of the two values: Active or Inactive. | [default to undefined]
**createdAt** | **string** | The timestamp of limit generation. | [optional] [default to undefined]
**updatedAt** | **string** | The timestamp of limit updation. | [optional] [default to undefined]

## Example

```typescript
import { TransactionLimitDTO } from 'nium-client';

const instance: TransactionLimitDTO = {
    maskedCardNumber,
    type,
    value,
    additionalPercentage,
    status,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
