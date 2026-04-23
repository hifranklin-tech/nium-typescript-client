# TransactionRfiDetailsResponse

This field is an array that holds RFI details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiHashId** | **string** | The unique RFI hash ID. | [optional] [default to undefined]
**rfiId** | **string** | The unique identifier for group of RFI raised for the customer transaction. | [optional] [default to undefined]
**rfiStatus** | **string** | This field contains Transaction RFI status. | [optional] [default to undefined]
**description** | **string** | The description of the RFI. | [optional] [default to undefined]
**mandatory** | **boolean** | This flag signifies if the RFI is mandatory or not. | [optional] [default to undefined]
**type** | **string** | The type of RFI. It could be document or data. | [optional] [default to undefined]
**documentType** | **string** | The type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]
**remarks** | **string** | The remarks provided while raising the RFI. | [optional] [default to undefined]
**transactionEntityType** | **string** | This field contains the type of the transaction entity. The possible values are: DEBTOR CREDITOR | [optional] [default to undefined]
**requiredData** | [**Array&lt;WalletRfiAttributeResponse&gt;**](WalletRfiAttributeResponse.md) | This array contains the required data for the RFI. | [optional] [default to undefined]

## Example

```typescript
import { TransactionRfiDetailsResponse } from 'nium-client';

const instance: TransactionRfiDetailsResponse = {
    rfiHashId,
    rfiId,
    rfiStatus,
    description,
    mandatory,
    type,
    documentType,
    remarks,
    transactionEntityType,
    requiredData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
