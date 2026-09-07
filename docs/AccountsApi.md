# AccountsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmLinkedBankAccount**](#confirmlinkedbankaccount) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId}/confirm | Confirm linked bank account authentication|
|[**fetchLinkedBankAccount**](#fetchlinkedbankaccount) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Fetch linked bank account|
|[**fetchLinkedBankAccounts**](#fetchlinkedbankaccounts) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts | Fetch linked bank accounts|
|[**linkBankAccount**](#linkbankaccount) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts | Create a linked bank account|
|[**unlinkBankAccount**](#unlinkbankaccount) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Delete linked bank account|
|[**updateLinkedBankAccount**](#updatelinkedbankaccount) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Update linked bank account|

# **confirmLinkedBankAccount**
> BankAccountResponse confirmLinkedBankAccount(bankAccountConfirmationRequest)

This API is used to confirm authentication of a linked bank account.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    BankAccountConfirmationRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let bankAccountId: string; //Unique identifier of the linked bank account. (default to undefined)
let bankAccountConfirmationRequest: BankAccountConfirmationRequest; //Bank account confirmation request

const { status, data } = await apiInstance.confirmLinkedBankAccount(
    clientHashId,
    customerHashId,
    xRequestId,
    bankAccountId,
    bankAccountConfirmationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountConfirmationRequest** | **BankAccountConfirmationRequest**| Bank account confirmation request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **bankAccountId** | [**string**] | Unique identifier of the linked bank account. | defaults to undefined|


### Return type

**BankAccountResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank account authentication confirmed |  -  |
|**400** | Error response when the request is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchLinkedBankAccount**
> BankAccountResponse fetchLinkedBankAccount()

This API is used to fetch a linked bank account.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let bankAccountId: string; //Unique identifier of the linked bank account. (default to undefined)

const { status, data } = await apiInstance.fetchLinkedBankAccount(
    clientHashId,
    customerHashId,
    xRequestId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **bankAccountId** | [**string**] | Unique identifier of the linked bank account. | defaults to undefined|


### Return type

**BankAccountResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchLinkedBankAccounts**
> PaginatedBankAccountResponse fetchLinkedBankAccounts()

This paginated API is used to fetch linked bank accounts.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let startingAfter: string; //Used to return the `limit` number of records after (including) the given starting position. (optional) (default to undefined)
let endingBefore: string; //Used to return the `limit` number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. (optional) (default to undefined)
let limit: number; //The number of items to be returned on each page. (optional) (default to 10)
let tagKey: string; //Filter bank accounts based on the exact value of tagKey defined against bank accounts. Can be used as an independent search parameter. (optional) (default to undefined)
let tagValue: string; //Filter bank accounts based on the approximating value of tagValue mapped for a tagKey defined against bank accounts. Can be used as an independent search parameter. (optional) (default to undefined)
let accountNumber: string; //The account number used to filter the results. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchLinkedBankAccounts(
    clientHashId,
    customerHashId,
    xRequestId,
    startingAfter,
    endingBefore,
    limit,
    tagKey,
    tagValue,
    accountNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **startingAfter** | [**string**] | Used to return the &#x60;limit&#x60; number of records after (including) the given starting position. | (optional) defaults to undefined|
| **endingBefore** | [**string**] | Used to return the &#x60;limit&#x60; number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of items to be returned on each page. | (optional) defaults to 10|
| **tagKey** | [**string**] | Filter bank accounts based on the exact value of tagKey defined against bank accounts. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **tagValue** | [**string**] | Filter bank accounts based on the approximating value of tagValue mapped for a tagKey defined against bank accounts. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **accountNumber** | [**string**] | The account number used to filter the results. | (optional) defaults to undefined|


### Return type

**PaginatedBankAccountResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Error response when the request is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **linkBankAccount**
> BankAccountResponse linkBankAccount(bankAccountLinkRequest)

This API creates a linked bank account.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    BankAccountLinkRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let bankAccountLinkRequest: BankAccountLinkRequest; //Bank account link request

const { status, data } = await apiInstance.linkBankAccount(
    clientHashId,
    customerHashId,
    xRequestId,
    bankAccountLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountLinkRequest** | **BankAccountLinkRequest**| Bank account link request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**BankAccountResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank account linked |  -  |
|**400** | Error response when the request is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unlinkBankAccount**
> unlinkBankAccount()

This API is used to delete a linked bank account.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let bankAccountId: string; //Unique identifier of the linked bank account. (default to undefined)

const { status, data } = await apiInstance.unlinkBankAccount(
    clientHashId,
    customerHashId,
    xRequestId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **bankAccountId** | [**string**] | Unique identifier of the linked bank account. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank account unlinked |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateLinkedBankAccount**
> BankAccountResponse updateLinkedBankAccount(bankAccountUpdateRequest)

This API is used to update a linked bank account.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    BankAccountUpdateRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let bankAccountId: string; //Unique identifier of the linked bank account. (default to undefined)
let bankAccountUpdateRequest: BankAccountUpdateRequest; //Bank account update request

const { status, data } = await apiInstance.updateLinkedBankAccount(
    clientHashId,
    customerHashId,
    xRequestId,
    bankAccountId,
    bankAccountUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountUpdateRequest** | **BankAccountUpdateRequest**| Bank account update request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **bankAccountId** | [**string**] | Unique identifier of the linked bank account. | defaults to undefined|


### Return type

**BankAccountResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Bank account updated |  -  |
|**400** | Error response when the request is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

