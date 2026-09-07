# CustomerWalletBalanceApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addWallet**](#addwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet | Add Wallet|
|[**getWallet**](#getwallet) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet | Fetch Wallet|
|[**updateWallet**](#updatewallet) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId} | Update Wallet|
|[**walletBalance**](#walletbalance) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId} | Wallet Balance|

# **addWallet**
> WalletResponseDTO2 addWallet(addWalletRequestDTO)

This API allows you to add a wallet for a customer.

### Example

```typescript
import {
    CustomerWalletBalanceApi,
    Configuration,
    AddWalletRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletBalanceApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let addWalletRequestDTO: AddWalletRequestDTO; //

const { status, data } = await apiInstance.addWallet(
    clientHashId,
    customerHashId,
    xRequestId,
    addWalletRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addWalletRequestDTO** | **AddWalletRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletResponseDTO2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWallet**
> WalletResponseDTO2 getWallet()


### Example

```typescript
import {
    CustomerWalletBalanceApi,
    Configuration,
    WalletsSearchDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletBalanceApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletsSearchDTO: WalletsSearchDTO; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.getWallet(
    clientHashId,
    customerHashId,
    walletsSearchDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletsSearchDTO** | **WalletsSearchDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletResponseDTO2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWallet**
> WalletResponseDTO2 updateWallet(updateWalletRequestDTO)

This API allows you to update a specific wallet.

### Example

```typescript
import {
    CustomerWalletBalanceApi,
    Configuration,
    UpdateWalletRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletBalanceApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let updateWalletRequestDTO: UpdateWalletRequestDTO; //

const { status, data } = await apiInstance.updateWallet(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    updateWalletRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWalletRequestDTO** | **UpdateWalletRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletResponseDTO2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **walletBalance**
> Array<WalletBalanceResponseDTO> walletBalance()

This API allows you to fetch balance for a specific wallet.

### Example

```typescript
import {
    CustomerWalletBalanceApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletBalanceApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.walletBalance(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**Array<WalletBalanceResponseDTO>**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

