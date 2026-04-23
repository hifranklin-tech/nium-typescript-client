# SGTrustCustomerAddresses

Contains registered, business and administration addresses for SG Full Trust customers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registeredAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**isBusinessAddressSameAsRegisteredAddress** | **boolean** |  | [default to undefined]
**administrationAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**businessAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]

## Example

```typescript
import { SGTrustCustomerAddresses } from 'nium-client';

const instance: SGTrustCustomerAddresses = {
    registeredAddress,
    isBusinessAddressSameAsRegisteredAddress,
    administrationAddress,
    businessAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
