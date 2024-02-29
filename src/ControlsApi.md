# .ControlsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCardLimits**](ControlsApi.md#getCardLimits) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Fetch Card Limits
[**getChannelRestriction**](ControlsApi.md#getChannelRestriction) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Get Channel Restriction
[**getMCCChannelRestrictions**](ControlsApi.md#getMCCChannelRestrictions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Get MCC Channel Restrictions
[**limitsForAllCardsForACustomer**](ControlsApi.md#limitsForAllCardsForACustomer) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/limits | Limits For All Cards For A Customer
[**setCardLimits**](ControlsApi.md#setCardLimits) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Card Limits
[**updateChannelRestriction**](ControlsApi.md#updateChannelRestriction) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Update Channel Restriction
[**updateMCCChannelRestrictions**](ControlsApi.md#updateMCCChannelRestrictions) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Update MCC Channel Restrictions


# **getCardLimits**
> TransactionLimitsDTO getCardLimits()

This API allows you to fetch card limits.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiGetCardLimitsRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getCardLimits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TransactionLimitsDTO**

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

# **getChannelRestriction**
> ApiResponseOfTransactionChannelsResponseDTO getChannelRestriction()

This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiGetChannelRestrictionRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getChannelRestriction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ApiResponseOfTransactionChannelsResponseDTO**

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

# **getMCCChannelRestrictions**
> MCCRestrictionDTO getMCCChannelRestrictions()

This API allows you to fetch MCC based channel restrictions at the card level.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiGetMCCChannelRestrictionsRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getMCCChannelRestrictions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**MCCRestrictionDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


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

# **limitsForAllCardsForACustomer**
> TransactionWalletLimitsDTO limitsForAllCardsForACustomer()

This API allows you to fetch card level limits for all cards belonging to a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiLimitsForAllCardsForACustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.limitsForAllCardsForACustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TransactionWalletLimitsDTO**

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

# **setCardLimits**
> WalletApiResponse2 setCardLimits(transactionLimitsDTO)

This API allows you to set card limits.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiSetCardLimitsRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // TransactionLimitsDTO | transactionLimitsDTO
  transactionLimitsDTO: {
    cardHashId: "cardHashId_example",
    transactionLimits: [
      {
        additionalPercentage: 10,
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
        maskedCardNumber: "9876-50xx-xxxx-4321",
        status: "Active",
        type: "MONTHLY_AMOUNT_LIMIT",
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
        value: "90.0",
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.setCardLimits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionLimitsDTO** | **TransactionLimitsDTO**| transactionLimitsDTO |
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiResponse2**

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

# **updateChannelRestriction**
> WalletApiResponseOfstring updateChannelRestriction(channelActionRequestDTO)

This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiUpdateChannelRestrictionRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // ChannelActionRequestDTO | channelActionRequestDTO
  channelActionRequestDTO: {
    action: "BLOCK",
    channel: "IN_STORE",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.updateChannelRestriction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelActionRequestDTO** | **ChannelActionRequestDTO**| channelActionRequestDTO |
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiResponseOfstring**

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

# **updateMCCChannelRestrictions**
> WalletApiResponse2 updateMCCChannelRestrictions(mCCRestrictionDTO)

This API allows you to create MCC based channel restrictions at the card level.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ControlsApi(configuration);

let body:.ControlsApiUpdateMCCChannelRestrictionsRequest = {
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // MCCRestrictionDTO | The API will work as below: • If the status is Active and channelStrategy is WHITE_LIST, then the MCC in the list only gets processed and the rest will be blocked • If the status is Inactive then the MCC whitelist restriction will be Inactive. • If the status is Active and channelStrategy is BLACK_LIST then only the MCC in the list will get blocked and the rest will be allowed. • If the status is Inactive then the MCC blacklist restriction will be Inactive • Either blacklist or whitelist can be enabled at one point in time.
  mCCRestrictionDTO: {
    channelStrategy: "BLACK_LIST",
    description: "Restrict Above MCC Codes",
    merchantCategoryCodes: ["3547"],
    status: "Active",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.updateMCCChannelRestrictions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mCCRestrictionDTO** | **MCCRestrictionDTO**| The API will work as below: • If the status is Active and channelStrategy is WHITE_LIST, then the MCC in the list only gets processed and the rest will be blocked • If the status is Inactive then the MCC whitelist restriction will be Inactive. • If the status is Active and channelStrategy is BLACK_LIST then only the MCC in the list will get blocked and the rest will be allowed. • If the status is Inactive then the MCC blacklist restriction will be Inactive • Either blacklist or whitelist can be enabled at one point in time. |
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiResponse2**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


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


