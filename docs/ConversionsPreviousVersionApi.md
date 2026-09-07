# ConversionsPreviousVersionApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**balanceTransferwithinWallet**](#balancetransferwithinwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transfer | Balance Transfer within Wallet|

# **balanceTransferwithinWallet**
> WalletTransferResponseDto balanceTransferwithinWallet(walletTransferDto)

This API allows you to transfer the balance from one currency to another within the same customer wallet.

### Example

```typescript
import {
    ConversionsPreviousVersionApi,
    Configuration,
    WalletTransferDto
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ConversionsPreviousVersionApi(configuration);

let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let walletTransferDto: WalletTransferDto; //

const { status, data } = await apiInstance.balanceTransferwithinWallet(
    xRequestId,
    clientHashId,
    customerHashId,
    walletHashId,
    walletTransferDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletTransferDto** | **WalletTransferDto**|  | |
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|


### Return type

**WalletTransferResponseDto**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

