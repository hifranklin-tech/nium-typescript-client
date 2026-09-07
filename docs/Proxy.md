# Proxy

Details of the proxy account, required for proxy verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The proxy type that needs to be verified. For example, &#x60;vpa&#x60; for India or &#x60;mobile&#x60; for general mobile number verification. | [default to undefined]
**value** | **string** | The value associated with the proxy type. For example, if the &#x60;proxyType&#x60; is &#x60;vpa&#x60;, this field contains the UPI ID(e.g. &#x60;upii_id@upi&#x60;). | [default to undefined]

## Example

```typescript
import { Proxy } from 'nium-client';

const instance: Proxy = {
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
