# NiumVerifyApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchVerifiedAccount**](#fetchverifiedaccount) | **GET** /api/v1/client/{clientHashId}/verifications/{verificationId} | Fetch Verification|
|[**fetchVerifiedAccounts**](#fetchverifiedaccounts) | **GET** /api/v1/client/{clientHashId}/verifications | List Verifications|
|[**validationSchema**](#validationschema) | **GET** /api/v1/client/{clientHashId}/schema | Fetch validation schema for Nium Verify|
|[**verifyAccount**](#verifyaccount) | **POST** /api/v1/client/{clientHashId}/verifications | Verify a Bank Account|

# **fetchVerifiedAccount**
> VerifyResponse fetchVerifiedAccount()

Fetch a Nium Verify verification. For more information, see [Nium Verify](/docs/verify).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let verificationId: string; //verificationId (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.fetchVerifiedAccount(
    clientHashId,
    verificationId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **verificationId** | [**string**] | verificationId | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**VerifyResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchVerifiedAccounts**
> PageResponse fetchVerifiedAccounts()

List the verifications created using Nium Verify. For more information, see [Nium Verify](/docs/verify).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let start: string; //The start timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'. (optional) (default to undefined)
let end: string; //The end timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'. (optional) (default to undefined)
let startingAfter: string; //Used to return the `limit` number of records after (including) the given starting position. (optional) (default to undefined)
let endingBefore: string; //Used to return the `limit` number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. (optional) (default to undefined)
let limit: number; //The number of items to be returned on each page. (optional) (default to 10)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.fetchVerifiedAccounts(
    clientHashId,
    xRequestId,
    start,
    end,
    startingAfter,
    endingBefore,
    limit,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **start** | [**string**] | The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;. | (optional) defaults to undefined|
| **end** | [**string**] | The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;. | (optional) defaults to undefined|
| **startingAfter** | [**string**] | Used to return the &#x60;limit&#x60; number of records after (including) the given starting position. | (optional) defaults to undefined|
| **endingBefore** | [**string**] | Used to return the &#x60;limit&#x60; number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of items to be returned on each page. | (optional) defaults to 10|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**PageResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validationSchema**
> validationSchema()

Retrieves the validation schema based on country and accountType. This schema is used to validate account verification requests for the specified country and  accountType.

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let country: string; //Two-letter ISO country code (e.g., US, GB, IN).Must Be exactly 2 characters (default to undefined)
let accountType: 'BANK' | 'PROXY'; //Allowed values: BANK, PROXY. Case-insensitive. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.validationSchema(
    clientHashId,
    country,
    accountType,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **country** | [**string**] | Two-letter ISO country code (e.g., US, GB, IN).Must Be exactly 2 characters | defaults to undefined|
| **accountType** | [**&#39;BANK&#39; | &#39;PROXY&#39;**]**Array<&#39;BANK&#39; &#124; &#39;PROXY&#39;>** | Allowed values: BANK, PROXY. Case-insensitive. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success. Returns raw JSON schema. |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**404** | Schema not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyAccount**
> VerifyResponse verifyAccount(verifyRequest)

Verify the details of a customer\'s bank account. For more information, see [Nium Verify](/docs/verify).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration,
    VerifyRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let verifyRequest: VerifyRequest; //verifyRequest

const { status, data } = await apiInstance.verifyAccount(
    clientHashId,
    xRequestId,
    verifyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyRequest** | **VerifyRequest**| verifyRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**VerifyResponse**

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
|**403** | Forbidden |  -  |
|**422** | Unprocessable Entity |  -  |
|**504** | Request Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

