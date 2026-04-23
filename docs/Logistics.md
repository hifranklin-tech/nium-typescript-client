# Logistics

This object accepts the logistics details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyName** | **string** | Name of Logistics company used to ship goods. Required only for goods trade. | [optional] [default to undefined]
**trackingNumber** | **string** | Tracking number used to ship goods. Required only for goods trade. | [optional] [default to undefined]

## Example

```typescript
import { Logistics } from 'nium-client';

const instance: Logistics = {
    companyName,
    trackingNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
