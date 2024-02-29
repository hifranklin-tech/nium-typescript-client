# .WalletToWalletTransfersApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**p2PTransfer**](WalletToWalletTransfersApi.md#p2PTransfer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/p2pTransfer | P2P Transfer
[**walletTransfer**](WalletToWalletTransfersApi.md#walletTransfer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transfers | Wallet to Wallet Transfer


# **p2PTransfer**
> P2PTransferResponse p2PTransfer(p2PTransferDTO)

This API allows you to transfer money from one wallet to another wallet within the same client family.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. Use the [Wallet To Wallet Transfer](ref:wallettransfer) API to achieve the same functionality.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletToWalletTransfersApi(configuration);

let body:.WalletToWalletTransfersApiP2PTransferRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // P2PTransferDTO | p2pTransferDTO
  p2PTransferDTO: {
    amount: 50,
    authenticationCode: "authCode",
    countryIP: "countryIP_example",
    currencyCode: "SGD",
    customerComments: "Paid for lunch",
    destinationWalletHashId: "c69f684f-a306-4c4a-8daa-1e91ce7c85f8",
    deviceInfo: "deviceInfo_example",
    exemptionCode: "01",
    ipAddress: "ipAddress_example",
    sessionId: "sessionId_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.p2PTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **p2PTransferDTO** | **P2PTransferDTO**| p2pTransferDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**P2PTransferResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletTransfer**
> FundTransferResponse walletTransfer(fundTransferRequestDTO)

This API allows you to transfer the money from one wallet to another wallet for customers belonging to different client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WalletToWalletTransfersApi(configuration);

let body:.WalletToWalletTransfersApiWalletTransferRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique source wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // FundTransferRequestDTO | fundTransferRequestDTO
  fundTransferRequestDTO: {
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    authenticationCode: "authCode",
    customerComments: "Paid for lunch",
    destinationAmount: 50,
    destinationCurrencyCode: "SGD",
    destinationWalletHashId: "c69f684f-a306-4c4a-8daa-1e91ce7c85f8",
    deviceDetails: {
      countryIP: "66.249.74.64",
      deviceInfo: "macOS",
      ipAddress: "45.48.241.198",
      sessionId: "40531ac01a6f11edafc28dba55d51275",
    },
    exemptionCode: "01",
    purposeCode: "IR01802",
    sourceAmount: 50,
    sourceCurrencyCode: "SGD",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.walletTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fundTransferRequestDTO** | **FundTransferRequestDTO**| fundTransferRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique source wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**FundTransferResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


