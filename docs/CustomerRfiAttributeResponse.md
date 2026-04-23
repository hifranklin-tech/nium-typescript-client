# CustomerRfiAttributeResponse

This array contains objects with details of each mandatory RFI field that is required by NIUM team. It is mandatory to respond to an RFI with all the required fields. While responding to an RFI, you may refer these details. Example, Passport has many fields and an RFI may be raised for passport number. Referring this array, you may determine which field/value is needed and if it is an RFI for data or document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | This field contains the user-friendly name of the RFI subfield that is required. For example, “Passport Number” when RFI is raised for POI(Passport) and passport number is needed. | [optional] [default to undefined]
**value** | **string** | The Nium field value for the label, for example, identificationValue when passport number is needed. | [optional] [default to undefined]
**type** | **string** | The type of RFI which can be data or document. | [optional] [default to undefined]

## Example

```typescript
import { CustomerRfiAttributeResponse } from 'nium-client';

const instance: CustomerRfiAttributeResponse = {
    label,
    value,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
