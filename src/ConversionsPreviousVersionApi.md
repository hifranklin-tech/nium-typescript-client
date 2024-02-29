# .ConversionsPreviousVersionApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**balanceTransferwithinWallet**](ConversionsPreviousVersionApi.md#balanceTransferwithinWallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transfer | Balance Transfer within Wallet


# **balanceTransferwithinWallet**
> WalletTransferResponseDto balanceTransferwithinWallet(walletTransferDto)

This API allows you to transfer the balance from one currency to another within the same customer wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversionsPreviousVersionApi(configuration);

let body:.ConversionsPreviousVersionApiBalanceTransferwithinWalletRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // WalletTransferDto
  walletTransferDto: {
    amount: 10,
    customerComments: "Changed SGD to INR during Travel",
    destinationAmount: 20,
    destinationCurrency: "INR",
    quoteId: "UUID",
    sourceCurrency: "SGD",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.balanceTransferwithinWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletTransferDto** | **WalletTransferDto**|  |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletTransferResponseDto**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


