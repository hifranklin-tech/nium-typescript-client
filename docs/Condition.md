# Condition

This object contains the condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaryAccountType** | **string** |  | [optional] [default to undefined]
**destinationAmount** | **string** |  | [optional] [default to undefined]
**destinationCountry** | **string** |  | [optional] [default to undefined]
**destinationCurrency** | **string** |  | [optional] [default to undefined]
**operands** | [**Array&lt;Condition&gt;**](Condition.md) | This object list of conditions. | [optional] [default to undefined]
**operator** | **string** | Denotes the operation between operators. | [optional] [default to undefined]
**partnerBank** | **string** |  | [optional] [default to undefined]
**payMode** | **string** |  | [optional] [default to undefined]
**paymentMode** | **string** |  | [optional] [default to undefined]
**payoutMethod** | **string** |  | [optional] [default to undefined]
**payoutRail** | **string** |  | [optional] [default to undefined]
**remitterAccountType** | **string** |  | [optional] [default to undefined]
**sourceAmount** | **string** |  | [optional] [default to undefined]
**sourceCountry** | **string** |  | [optional] [default to undefined]
**sourceCurrency** | **string** |  | [optional] [default to undefined]
**sweepType** | **string** |  | [optional] [default to undefined]
**swiftType** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Condition } from 'nium-client';

const instance: Condition = {
    beneficiaryAccountType,
    destinationAmount,
    destinationCountry,
    destinationCurrency,
    operands,
    operator,
    partnerBank,
    payMode,
    paymentMode,
    payoutMethod,
    payoutRail,
    remitterAccountType,
    sourceAmount,
    sourceCountry,
    sourceCurrency,
    sweepType,
    swiftType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
