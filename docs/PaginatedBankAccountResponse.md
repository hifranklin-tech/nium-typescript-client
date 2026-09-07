# PaginatedBankAccountResponse

Paginated Bank Account Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccounts** | [**Array&lt;BankAccountResponse&gt;**](BankAccountResponse.md) | Page of bank accounts. | [optional] [default to undefined]
**pagination** | [**ExternalAccountServiceCursorPagination**](ExternalAccountServiceCursorPagination.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaginatedBankAccountResponse } from 'nium-client';

const instance: PaginatedBankAccountResponse = {
    bankAccounts,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
