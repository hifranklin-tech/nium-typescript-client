# .CustomerFundingApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFundingInstrument**](CustomerFundingApi.md#addFundingInstrument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fundingInstruments | Add funding instrument
[**confirmFundingInstrumentId**](CustomerFundingApi.md#confirmFundingInstrumentId) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/confirmFundingInstrument | Confirm funding instrument
[**deleteFundinginstrument**](CustomerFundingApi.md#deleteFundinginstrument) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId} | Delete Funding Instrument
[**fundWallet**](CustomerFundingApi.md#fundWallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund | Fund Wallet
[**getFundingInstrumentDetails**](CustomerFundingApi.md#getFundingInstrumentDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/fundingInstrumentDetails | Get Funding instrument details
[**getFundingInstrumentList**](CustomerFundingApi.md#getFundingInstrumentList) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments | Get Funding Instrument List


# **addFundingInstrument**
> LinkAccountResponse addFundingInstrument()

This API allows you to link account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiAddFundingInstrumentRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // CustomerLinkAccountRequest | Add a new funding instrument (optional)
  customerLinkAccountRequest: {
    accountNumber: "55779911",
    country: "US",
    currency: "USD",
    fundingChannel: "DIRECT_DEBIT",
    routingCodes: [
      {
        type: "SORT_CODE",
        value: "200000",
      },
    ],
  },
};

apiInstance.addFundingInstrument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerLinkAccountRequest** | **CustomerLinkAccountRequest**| Add a new funding instrument |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**LinkAccountResponse**

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

# **confirmFundingInstrumentId**
> AccountStatusResponse confirmFundingInstrumentId()

This API allows you to confirm funding instrument id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiConfirmFundingInstrumentIdRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field is the unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit.
  fundingInstrumentId: "fundingInstrumentId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // ConfirmFundingInstrumentRequestDTO | Confirm funding instrument (optional)
  confirmFundingInstrumentRequestDTO: {
    otpReceived: "otpReceived_example",
  },
};

apiInstance.confirmFundingInstrumentId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmFundingInstrumentRequestDTO** | **ConfirmFundingInstrumentRequestDTO**| Confirm funding instrument |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **fundingInstrumentId** | [**string**] | This field is the unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AccountStatusResponse**

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

# **deleteFundinginstrument**
> ApiResponseOfstring deleteFundinginstrument()

This API allows you to delete a specific funding instrument based on the fundingInstrumentId.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiDeleteFundinginstrumentRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique 36-character alphanumeric identifier of a funding instrument.
  fundingInstrumentId: "fundingInstrumentId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.deleteFundinginstrument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **fundingInstrumentId** | [**string**] | The unique 36-character alphanumeric identifier of a funding instrument. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ApiResponseOfstring**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **fundWallet**
> WalletFundResponseDTO fundWallet()

This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiFundWalletRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // WalletFundDTO | Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards. (optional)
  walletFundDTO: {
    amount: 500,
    countryIpAddress: "2.2.2.2",
    currencyMap: {
      "key": 3.14,
    },
    destinationCurrencyCode: "SGD",
    deviceKey: "1234567890",
    fundingChannel: "BANK_TRANSFER",
    fundingInstrumentExpiry: "fundingInstrumentExpiry_example",
    fundingInstrumentHolderName: "John Smith",
    fundingInstrumentId: "fundingInstrumentId_example",
    fundingInstrumentNumber: "fundingInstrumentNumber_example",
    fundingInstrumentSecurityNumber: "fundingInstrumentSecurityNumber_example",
    invoiceDetails: {
      date: "2022-09-21",
      description: "Card payment",
      items: [
        {
          unitPrice: "1",
          unitQuantity: "1",
        },
      ],
      name: "Jack Stan",
      number: "45667090",
    },
    ipAddress: "192.168.1.1",
    pocketName: "DEFAULT",
    save: true,
    sessionId: "1234",
    sourceAmount: 15.34,
    sourceCurrencyCode: "SGD",
    statementNarrative: "statementNarrative_example",
  },
};

apiInstance.fundWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletFundDTO** | **WalletFundDTO**| Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards. |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletFundResponseDTO**

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

# **getFundingInstrumentDetails**
> AccountStatusResponse getFundingInstrumentDetails()

Get Funding instrument details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiGetFundingInstrumentDetailsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique 36-character funding instrument identifier.
  fundingInstrumentId: "fundingInstrumentId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getFundingInstrumentDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **fundingInstrumentId** | [**string**] | Unique 36-character funding instrument identifier. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AccountStatusResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **getFundingInstrumentList**
> Array<WalletFundingInstrumentsResponseDTO> getFundingInstrumentList()

This API allows you to fetch the funding instruments that have been registered for a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFundingApi(configuration);

let body:.CustomerFundingApiGetFundingInstrumentListRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getFundingInstrumentList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<WalletFundingInstrumentsResponseDTO>**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
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


