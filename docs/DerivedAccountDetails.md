# DerivedAccountDetails

Contains account details related to the account requestedfor verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the account holder associated with the verified bank account or proxy values (email, phone number, etc.). | [optional] [default to undefined]
**nameLocal** | **string** | Account holder\&#39;s name in the regional language of the requested country, if provided. | [optional] [default to undefined]
**nameMatch** | **string** | Name match status. Possible values: match, partial_match, no_match, not_available. | [optional] [default to undefined]
**routing** | [**RoutingDetails**](RoutingDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DerivedAccountDetails } from 'nium-client';

const instance: DerivedAccountDetails = {
    name,
    nameLocal,
    nameMatch,
    routing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
