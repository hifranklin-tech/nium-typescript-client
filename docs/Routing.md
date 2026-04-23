# Routing

Represents routing information for a financial institution across multiple regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**swift** | **string** | The SWIFT code for the bank. | [optional] [default to undefined]
**bankCode** | **string** | The bank code is a unique identifier for a financial institution or a bank. | [optional] [default to undefined]
**sortCode** | **string** | The sort code used in the UK for bank account identification. | [optional] [default to undefined]
**achCode** | **string** | The ACH (Automated Clearing House) code used in the United States for electronic payments such as direct deposits, bill payments, and other electronic funds transfers. | [optional] [default to undefined]
**ifsc** | **string** | The Indian Financial System Code (IFSC) for bank branches in India. | [optional] [default to undefined]
**bsbCode** | **string** | BSB code used in Australia to identify bank branches. | [optional] [default to undefined]

## Example

```typescript
import { Routing } from 'nium-client';

const instance: Routing = {
    swift,
    bankCode,
    sortCode,
    achCode,
    ifsc,
    bsbCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
