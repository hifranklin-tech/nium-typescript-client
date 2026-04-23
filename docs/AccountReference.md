# AccountReference

This object contains the account details for the creditor in this transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iban** | **string** | This field contains the International Bank Account Number (IBAN) for the debtor’s account, for example, \&quot;FR7612345987650123456789014\&quot;. | [optional] [default to undefined]
**bban** | **string** | The Basic Bank Account Number (BBAN) Identifier. This data elements is used for payment accounts which have no IBAN, for example, \&quot;BARC12345612345678\&quot; | [optional] [default to undefined]
**pan** | **string** | This field contains the Primary Account Number (PAN) of the debtor’s card, can be tokenized by the ASPSP due to PCI DSS requirements. | [optional] [default to undefined]
**maskedPan** | **string** | This field contains the masked Primary Account Number (PAN) of the debtor’s card. Masked data is represented by *. | [optional] [default to undefined]
**msisdn** | **string** | This field contains an alias to access a payment account via a registered mobile phone number. | [optional] [default to undefined]
**currency** | **string** | This field contains the debtor’s 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]

## Example

```typescript
import { AccountReference } from 'nium-client';

const instance: AccountReference = {
    iban,
    bban,
    pan,
    maskedPan,
    msisdn,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
