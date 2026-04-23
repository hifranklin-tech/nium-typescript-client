# Balance

This is an array which holds balance detail fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **string** | International Bank Account Number (IBAN) of an account balance, for example: \&quot;FR7612345987650123456789014\&quot;. | [optional] [default to undefined]
**bban** | **string** | Basic Bank Account Number (BBAN) Identifier. | [optional] [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**maskedPan** | **string** | Primary Account Number (PAN) of a card in a masked form. This is used for card account in responses, for example \&quot; 1234\&quot;. The maximum length: 35 | [optional] [default to undefined]
**msisdn** | **string** | An alias to access a payment account via a registered mobile phone number. The maximum length: 35 | [optional] [default to undefined]
**pan** | **string** | Primary Account Number (PAN) of a card, can be tokenized by the ASPSP due to PCI DSS requirements. This is used for card account in responses. The maximum length: 35 | [optional] [default to undefined]

## Example

```typescript
import { Balance } from 'nium-client';

const instance: Balance = {
    iban,
    bban,
    currency,
    maskedPan,
    msisdn,
    pan,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
