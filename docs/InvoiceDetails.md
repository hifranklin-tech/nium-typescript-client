# InvoiceDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the trade. | [optional] [default to undefined]
**description** | **string** | A brief description of the wallet. | [optional] [default to undefined]
**items** | [**Array&lt;ItemDetails&gt;**](ItemDetails.md) | Ender details about the quantity and price. | [optional] [default to undefined]
**name** | **string** | The name of the account holder. | [optional] [default to undefined]
**number** | **string** | A unique alphanumeric value containing an invoice number for your reference at a later time. | [optional] [default to undefined]

## Example

```typescript
import { InvoiceDetails } from 'nium-client';

const instance: InvoiceDetails = {
    date,
    description,
    items,
    name,
    number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
