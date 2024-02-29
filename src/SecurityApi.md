# .SecurityApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchATMPin**](SecurityApi.md#fetchATMPin) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Fetch ATM Pin
[**fetchCVV2**](SecurityApi.md#fetchCVV2) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/cvv | Fetch CVV2
[**fetchCardDataEncryptedV2**](SecurityApi.md#fetchCardDataEncryptedV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/retrieve | Fetch card data encrypted
[**fetchPinStatus**](SecurityApi.md#fetchPinStatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/status | Fetch Pin Status
[**setResetPIN**](SecurityApi.md#setResetPIN) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Set/Reset PIN
[**unblockCardPIN**](SecurityApi.md#unblockCardPIN) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/unblock | Unblock PIN
[**unmaskCard**](SecurityApi.md#unmaskCard) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/unmask | Unmask Card


# **fetchATMPin**
> FetchPinResponseDTO fetchATMPin()

This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiFetchATMPinRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchATMPin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**FetchPinResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchCVV2**
> CvvResponseDTO fetchCVV2()

This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiFetchCVV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchCVV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CvvResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchCardDataEncryptedV2**
> RetrieveCardDetailsResponseDTO fetchCardDataEncryptedV2()

This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiFetchCardDataEncryptedV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchCardDataEncryptedV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**RetrieveCardDetailsResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchPinStatus**
> FetchPinStatusResponseDTO fetchPinStatus()

This API allows you to fetch the PIN status of an active card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiFetchPinStatusRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchPinStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**FetchPinStatusResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setResetPIN**
> PinUpdateResponseDTO setResetPIN(pinUpdateRequestDTO)

This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiSetResetPINRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // PinUpdateRequestDTO | pinUpdate
  pinUpdateRequestDTO: {
    pinBlock: "MTA0NzM=",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.setResetPIN(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinUpdateRequestDTO** | **PinUpdateRequestDTO**| pinUpdate |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**PinUpdateResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unblockCardPIN**
> PinUpdateResponseDTO unblockCardPIN()

This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiUnblockCardPINRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Please enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.unblockCardPIN(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Please enter a unique UUID value | (optional) defaults to undefined


### Return type

**PinUpdateResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unmaskCard**
> UnmaskCardResponseDTO unmaskCard()

This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SecurityApi(configuration);

let body:.SecurityApiUnmaskCardRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.unmaskCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**UnmaskCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


