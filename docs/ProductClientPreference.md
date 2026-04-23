# ProductClientPreference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientHashId** | **string** | The unique ID used to identify the parent &#x60;client&#x60;. Generated and shared when the &#x60;client&#x60; was intially created. | [optional] [default to undefined]
**clientName** | **string** | The parent client name for the new corporate entity to be onboarded.  AU: Optional EU: Optional UK: Optional SG: Optional | [optional] [default to undefined]
**clientEntityType** | **string** | The parent client entity type for the new corporate entity to be onboarded. | [optional] [default to undefined]
**clientComplianceEntityType** | **string** | The parent client compliance entity type for the new corporate entity to be onboarded. | [optional] [default to undefined]
**clientRegulatoryRegion** | **string** | The parent client regulatory region for the new corporate entity to be onboarded. | [optional] [default to undefined]
**clientSegment** | **string** | The parent client segment for the new corporate entity to be onboarded. | [optional] [default to undefined]
**clientProgramName** | **string** | The parent client program name for the new corporate entity to be onboarded. | [optional] [default to undefined]

## Example

```typescript
import { ProductClientPreference } from 'nium-client';

const instance: ProductClientPreference = {
    clientHashId,
    clientName,
    clientEntityType,
    clientComplianceEntityType,
    clientRegulatoryRegion,
    clientSegment,
    clientProgramName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
