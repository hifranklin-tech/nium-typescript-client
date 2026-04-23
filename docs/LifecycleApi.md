# LifecycleApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateCard**](#activatecard) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate | Activate Card V2|
|[**addCardV2**](#addcardv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card | Add Card V2|
|[**assignCard**](#assigncard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/assignCard | Assign Card|
|[**blockAndReplaceCardV2**](#blockandreplacecardv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/blockAndReplace | Block and Replace Card|
|[**cardDetailsV2**](#carddetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Card Details V2|
|[**cardList**](#cardlist) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List|
|[**cardListV2**](#cardlistv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List V2|
|[**convertCard**](#convertcard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/convert | Convert Card|
|[**getCardWidget**](#getcardwidget) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/widget/showCardDetails | Get Card Details Widget|
|[**lockUnlockCardV2**](#lockunlockcardv2) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/lockAction | Lock/Unlock Cards|
|[**renewCard**](#renewcard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/renewCard | Renew Card|
|[**updateCardDetailsV2**](#updatecarddetailsv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Update Card Details V2|

# **activateCard**
> ActivateCardResponseV2DTO activateCard(activateCardRequestV2DTO)

This API allows you to activate a card after delivery to the customer.

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    ActivateCardRequestV2DTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let activateCardRequestV2DTO: ActivateCardRequestV2DTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.activateCard(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    activateCardRequestV2DTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activateCardRequestV2DTO** | **ActivateCardRequestV2DTO**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ActivateCardResponseV2DTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addCardV2**
> AddCardV2ResponseDTO addCardV2(addCardRequestV2)

This API allows you to issue a card for a customer.

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    AddCardRequestV2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let addCardRequestV2: AddCardRequestV2; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.addCardV2(
    clientHashId,
    customerHashId,
    walletHashId,
    addCardRequestV2,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addCardRequestV2** | **AddCardRequestV2**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**AddCardV2ResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignCard**
> CardAssignResponseDTO assignCard(assignCardDTO)

This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    AssignCardDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let assignCardDTO: AssignCardDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.assignCard(
    clientHashId,
    customerHashId,
    walletHashId,
    assignCardDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignCardDTO** | **AssignCardDTO**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CardAssignResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockAndReplaceCardV2**
> BlockAndReplaceCardResponseDTO blockAndReplaceCardV2(blockAndReplaceCardRequestDTO)

Use this API to block and replace a card.

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    BlockAndReplaceCardRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let blockAndReplaceCardRequestDTO: BlockAndReplaceCardRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.blockAndReplaceCardV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    blockAndReplaceCardRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockAndReplaceCardRequestDTO** | **BlockAndReplaceCardRequestDTO**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BlockAndReplaceCardResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cardDetailsV2**
> CardDetails cardDetailsV2()

Fetch the details about a specific card.

### Example

```typescript
import {
    LifecycleApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.cardDetailsV2(
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

**CardDetails**

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

# **cardList**
> { [key: string]: object; } cardList()

This API will return all the cards issued, for a given wallet.

### Example

```typescript
import {
    LifecycleApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.cardList(
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

**{ [key: string]: object; }**

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

# **cardListV2**
> PageResponseCardDetails cardListV2()

This API returns all the cards issued for a given customer wallet.

### Example

```typescript
import {
    LifecycleApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let childCustomerHashId: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let size: number; // (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.cardListV2(
    clientHashId,
    customerHashId,
    walletHashId,
    childCustomerHashId,
    page,
    size,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **childCustomerHashId** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **size** | [**number**] |  | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PageResponseCardDetails**

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

# **convertCard**
> ConvertCardResponseDTO convertCard(convertCardRequestDTO)

Convert your virtual card to a physical card. For more information, see [Manage Cards](/docs/card-management).

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    ConvertCardRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let convertCardRequestDTO: ConvertCardRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.convertCard(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    convertCardRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **convertCardRequestDTO** | **ConvertCardRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ConvertCardResponseDTO**

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

# **getCardWidget**
> CardWidgetTokenResponse getCardWidget()

Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    CardWidgetTokenRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)
let cardWidgetTokenRequestDTO: CardWidgetTokenRequestDTO; // (optional)

const { status, data } = await apiInstance.getCardWidget(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    xRequestId,
    cardWidgetTokenRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardWidgetTokenRequestDTO** | **CardWidgetTokenRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CardWidgetTokenResponse**

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

# **lockUnlockCardV2**
> LockStatusUpdateResponseDTO lockUnlockCardV2(lockStatusUpdateRequestDTO)


### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    LockStatusUpdateRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let lockStatusUpdateRequestDTO: LockStatusUpdateRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.lockUnlockCardV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    lockStatusUpdateRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lockStatusUpdateRequestDTO** | **LockStatusUpdateRequestDTO**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**LockStatusUpdateResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renewCard**
> string renewCard(renewCardRequest)

Use this API for card renewal.

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    RenewCardRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; //The unique client identifier generated and shared before the API handshake. (default to undefined)
let customerHashId: string; //The unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //The unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //The unique card identifier generated while new/add-on card issuance. (default to undefined)
let renewCardRequest: RenewCardRequest; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.renewCard(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    renewCardRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renewCardRequest** | **RenewCardRequest**|  | |
| **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCardDetailsV2**
> ApiResponse2 updateCardDetailsV2(updateContactInfoRequestDTO)

Update the details of a card. For more information, see [Cards](/docs/card-overview).

### Example

```typescript
import {
    LifecycleApi,
    Configuration,
    UpdateContactInfoRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new LifecycleApi(configuration);

let clientHashId: string; // (default to undefined)
let customerHashId: string; // (default to undefined)
let walletHashId: string; // (default to undefined)
let cardHashId: string; // (default to undefined)
let updateContactInfoRequestDTO: UpdateContactInfoRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateCardDetailsV2(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    updateContactInfoRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContactInfoRequestDTO** | **UpdateContactInfoRequestDTO**|  | |
| **clientHashId** | [**string**] |  | defaults to undefined|
| **customerHashId** | [**string**] |  | defaults to undefined|
| **walletHashId** | [**string**] |  | defaults to undefined|
| **cardHashId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ApiResponse2**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

