# AssignCardDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** | This field accepts the 19-digit account number (also known as card proxy number) printed on the non-personalized physical card. Alternately, the leading zeros may also be ignored in which case only the last 16-digits are required. For example, account number can be entered as 0007560010000160875, 007560010000160875, 07560010000160875 or 7560010000160875 | [default to undefined]
**cardNumberLast4Digits** | **string** | The last 4 digit of the card number | [default to undefined]
**childCustomerHashId** | **string** | Unique ID for an individual customer linked to a parent-level corporate customer. Used to associate and track the child customer within a corporate customer\&#39;s program. | [optional] [default to undefined]

## Example

```typescript
import { AssignCardDTO } from 'nium-client';

const instance: AssignCardDTO = {
    accountNumber,
    cardNumberLast4Digits,
    childCustomerHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
