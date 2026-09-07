# CardDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockAndReplaceStatus** | [**BlockAndReplaceStatus**](BlockAndReplaceStatus.md) |  | [optional] [default to undefined]
**cardHashId** | **string** | The unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]
**cardRenewDate** | **string** | This field contains the card renewal date. Format YYYY-MM-DD HH:MM:SS. | [optional] [default to undefined]
**deliveredTo** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]
**demographics** | [**Demographics**](Demographics.md) |  | [optional] [default to undefined]
**details** | [**CardInfo**](CardInfo.md) |  | [optional] [default to undefined]
**embossing** | [**EmbossingDetails**](EmbossingDetails.md) |  | [optional] [default to undefined]
**lastUpdatedOn** | **string** | The last updated timestamp | [optional] [default to undefined]
**tokens** | [**Array&lt;CardTokensDTO&gt;**](CardTokensDTO.md) | This array contains the token details. | [optional] [default to undefined]
**walletHashId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CardDetails } from 'nium-client';

const instance: CardDetails = {
    blockAndReplaceStatus,
    cardHashId,
    cardRenewDate,
    deliveredTo,
    demographics,
    details,
    embossing,
    lastUpdatedOn,
    tokens,
    walletHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
