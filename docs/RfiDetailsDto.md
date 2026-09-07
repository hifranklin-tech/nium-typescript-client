# RfiDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientHashId** | **string** | Unique client identifier. | [optional] [default to undefined]
**comment** | **string** | Additional comment on the RFI. | [optional] [default to undefined]
**customerHashId** | **string** | Unique customer identifier. | [optional] [default to undefined]
**entityType** | **string** | Entity type associated with the RFI. | [optional] [default to undefined]
**externalReferenceId** | **string** | External reference id. | [optional] [default to undefined]
**label** | **string** | Human-readable label for the RFI field. | [optional] [default to undefined]
**mandatoryFieldTypes** | **Array&lt;string&gt;** | Field types that must be provided in the response. | [optional] [default to undefined]
**metadata** | [**RfiMetadataDto**](RfiMetadataDto.md) |  | [optional] [default to undefined]
**optionalFieldTypes** | **Array&lt;string&gt;** | Field types that may optionally be provided in the response. | [optional] [default to undefined]
**query** | **string** | RFI query or question presented to the client. | [optional] [default to undefined]
**rfiEntity** | **string** | RFI entity type. | [optional] [default to undefined]
**rfiEntityReferenceId** | **string** | Reference id on the RFI entity. | [optional] [default to undefined]
**rfiExpiry** | **string** | Expiry timestamp for the RFI. | [optional] [default to undefined]
**rfiId** | **string** | Unique RFI identifier (UUID). | [optional] [default to undefined]
**rfiRaisedAt** | **string** | Timestamp when the RFI was raised. | [optional] [default to undefined]
**rfiRespondedAt** | **string** | Timestamp when the RFI was responded to. | [optional] [default to undefined]
**status** | **string** | RFI status. | [optional] [default to undefined]
**url** | **string** | URL associated with the RFI, when applicable. | [optional] [default to undefined]

## Example

```typescript
import { RfiDetailsDto } from 'nium-client';

const instance: RfiDetailsDto = {
    clientHashId,
    comment,
    customerHashId,
    entityType,
    externalReferenceId,
    label,
    mandatoryFieldTypes,
    metadata,
    optionalFieldTypes,
    query,
    rfiEntity,
    rfiEntityReferenceId,
    rfiExpiry,
    rfiId,
    rfiRaisedAt,
    rfiRespondedAt,
    status,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
