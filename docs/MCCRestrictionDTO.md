# MCCRestrictionDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCategoryCodes** | **Array&lt;string&gt;** | This array accepts the list of 4-digit mcc codes. | [default to undefined]
**description** | **string** | The description for enabling or disabling the mcc restriction. | [default to undefined]
**status** | **string** | This field accepts the status and values for this field can be: Active or Inactive. The default value of this field is Active. | [optional] [default to undefined]
**channelStrategy** | **string** | This field accepts the two values: WHITE_LIST BLACK_LIST If this field is not passed then the default value will be WHITE_LIST. If the WHITE_LIST is selected along with the Active status, it means mcc whitelisting is active for the provided list. | [optional] [default to undefined]

## Example

```typescript
import { MCCRestrictionDTO } from 'nium-client';

const instance: MCCRestrictionDTO = {
    merchantCategoryCodes,
    description,
    status,
    channelStrategy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
