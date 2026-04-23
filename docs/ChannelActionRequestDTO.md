# ChannelActionRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **string** | Channel which needs to be restricted.The valid values are IN_STORE, ONLINE, ATM, CROSS_BORDER, MAG_STRIPE. | [default to undefined]
**action** | **string** | Block or unblock the channel at a card level. Valid values are BLOCK and UNBLOCK. One channel can be blocked at a time. | [default to undefined]

## Example

```typescript
import { ChannelActionRequestDTO } from 'nium-client';

const instance: ChannelActionRequestDTO = {
    channel,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
