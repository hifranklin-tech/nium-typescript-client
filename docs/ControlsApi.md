# ControlsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCardLimits**](#getcardlimits) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Fetch Card Limits|
|[**getChannelRestriction**](#getchannelrestriction) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Get Channel Restriction|
|[**getMCCChannelRestrictions**](#getmccchannelrestrictions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Get MCC Channel Restrictions|
|[**limitsForAllCardsForACustomer**](#limitsforallcardsforacustomer) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/limits | Limits For All Cards For A Customer|
|[**setCardLimits**](#setcardlimits) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Card Limits|
|[**updateChannelRestriction**](#updatechannelrestriction) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Update Channel Restriction|
|[**updateMCCChannelRestrictions**](#updatemccchannelrestrictions) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Update MCC Channel Restrictions|

# **getCardLimits**
> TransactionLimitsDTO getCardLimits()

This API allows you to fetch card limits.

### Example

```typescript
import {
    ControlsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getCardLimits(
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

**TransactionLimitsDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChannelRestriction**
> ApiResponseTransactionChannelsResponseDTO getChannelRestriction()

This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.

### Example

```typescript
import {
    ControlsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getChannelRestriction(
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

**ApiResponseTransactionChannelsResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMCCChannelRestrictions**
> MCCRestrictionDTO getMCCChannelRestrictions()

This API allows you to fetch MCC based channel restrictions at the card level.

### Example

```typescript
import {
    ControlsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getMCCChannelRestrictions(
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

**MCCRestrictionDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **limitsForAllCardsForACustomer**
> TransactionWalletLimitsDTO limitsForAllCardsForACustomer()

This API allows you to fetch card level limits for all cards belonging to a customer.

### Example

```typescript
import {
    ControlsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.limitsForAllCardsForACustomer(
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
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**TransactionWalletLimitsDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setCardLimits**
> WalletApiResponse2 setCardLimits(transactionLimitsDTO)

This API allows you to set card limits.

### Example

```typescript
import {
    ControlsApi,
    Configuration,
    TransactionLimitsDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let transactionLimitsDTO: TransactionLimitsDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.setCardLimits(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    transactionLimitsDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionLimitsDTO** | **TransactionLimitsDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**WalletApiResponse2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateChannelRestriction**
> WalletApiResponseString updateChannelRestriction(channelActionRequestDTO)

This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.

### Example

```typescript
import {
    ControlsApi,
    Configuration,
    ChannelActionRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let channelActionRequestDTO: ChannelActionRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateChannelRestriction(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    channelActionRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelActionRequestDTO** | **ChannelActionRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**WalletApiResponseString**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMCCChannelRestrictions**
> WalletApiResponse2 updateMCCChannelRestrictions(mCCRestrictionDTO)

This API allows you to create MCC based channel restrictions at the card level.

### Example

```typescript
import {
    ControlsApi,
    Configuration,
    MCCRestrictionDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ControlsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let mCCRestrictionDTO: MCCRestrictionDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateMCCChannelRestrictions(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    mCCRestrictionDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mCCRestrictionDTO** | **MCCRestrictionDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**WalletApiResponse2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

