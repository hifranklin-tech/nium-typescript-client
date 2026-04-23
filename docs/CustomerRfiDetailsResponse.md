# CustomerRfiDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiHashId** | **string** | The unique identifier for each RFI raised for the customer. | [optional] [default to undefined]
**rfiId** | **string** | The unique identifier for group of RFI raised for the customer. | [optional] [default to undefined]
**description** | **string** | The RFI description or field for which RFI is raised. The example values are passport, gender, etc. | [optional] [default to undefined]
**mandatory** | **boolean** | This flag determines the mandatory nature of the RFI. | [optional] [default to undefined]
**type** | **string** | The type of RFI. The possible values are data or document. | [optional] [default to undefined]
**documentType** | **string** | The type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]
**remarks** | **string** | This field contains the compliance officer’s remarks while raising the RFI. | [optional] [default to undefined]
**requiredData** | [**Array&lt;CustomerRfiAttributeResponse&gt;**](CustomerRfiAttributeResponse.md) | This array contains objects with details of each mandatory RFI field that is required by Nium team. It is mandatory to respond to an RFI with all the required fields. While responding to an RFI, you may refer these details. Example, Passport has many fields and an RFI may be raised for passport number. Referring this array, you may determine which field/value is needed and if it is an RFI for data or document. | [optional] [default to undefined]
**rfiType** | **string** | This field contains type of the RFI | [optional] [default to undefined]
**rfiStatus** | **string** | This field contains status of the RFI | [optional] [default to undefined]

## Example

```typescript
import { CustomerRfiDetailsResponse } from 'nium-client';

const instance: CustomerRfiDetailsResponse = {
    rfiHashId,
    rfiId,
    description,
    mandatory,
    type,
    documentType,
    remarks,
    requiredData,
    rfiType,
    rfiStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
