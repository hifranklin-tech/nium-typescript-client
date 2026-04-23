# SecurityApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchATMPinV2**](#fetchatmpinv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Fetch ATM Pin V2|
|[**fetchCardDataEncryptedV2**](#fetchcarddataencryptedv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/retrieve | Fetch card data encrypted|
|[**fetchPinStatus**](#fetchpinstatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/status | Fetch Pin Status|
|[**setResetPINV2**](#setresetpinv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Set/Reset PIN V2|
|[**showSecurityDetailsEncrypted**](#showsecuritydetailsencrypted) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/showSecurityDetails | Show Security Details Encrypted|
|[**unblockCardPIN**](#unblockcardpin) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/unblock | Unblock PIN|

# **fetchATMPinV2**
> FetchPinResponseDTOV2 fetchATMPinV2()

This API allows you to fetch the ATM Pin in RSA encrypted format for Physical cards & Virtual upgrade to Physical in the production environment. This API will not work for Virtual cards. This is allowed only for the EU & UK cards.

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchATMPinV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**FetchPinResponseDTOV2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchCardDataEncryptedV2**
> RetrieveCardDetailsResponseDTO fetchCardDataEncryptedV2()

This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCardDataEncryptedV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**RetrieveCardDetailsResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchPinStatus**
> FetchPinStatusResponseDTO fetchPinStatus()

This API allows you to fetch the PIN status of an active card.

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchPinStatus(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**FetchPinStatusResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setResetPINV2**
> PinUpdateResponseDTO setResetPINV2(pinUpdateRequestDTOV2)

This API allows you to set a new pin for a card in the production environment. This API will return a stubbed response in the API sandbox. This API should be used outside EU/UK.

### Example

```typescript
import {
    SecurityApi,
    Configuration,
    PinUpdateRequestDTOV2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let pinUpdateRequestDTOV2: PinUpdateRequestDTOV2; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.setResetPINV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    pinUpdateRequestDTOV2,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pinUpdateRequestDTOV2** | **PinUpdateRequestDTOV2**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PinUpdateResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showSecurityDetailsEncrypted**
> ShowSecurityDetailsResponseDTO showSecurityDetailsEncrypted()

This API allows you to show Security Details: the unmasked card number, CVV2 and expiry (encrypted) for a card

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.showSecurityDetailsEncrypted(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ShowSecurityDetailsResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unblockCardPIN**
> PinUpdateResponseDTO unblockCardPIN()

This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Please Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.unblockCardPIN(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Please Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PinUpdateResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

