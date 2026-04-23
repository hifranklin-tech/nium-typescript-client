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

Fetch a Nium Verify verification. For more information, see [Nium Verify](/docs/account-verification).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique identifier of the `client`. (default to undefined)
let verificationId: string; //verificationId (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchVerifiedAccount(
    clientHashId,
    verificationId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique identifier of the &#x60;client&#x60;. | defaults to undefined|
| **verificationId** | [**string**] | verificationId | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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

List the verifications created using Nium Verify. For more information, see [Nium Verify](/docs/account-verification).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique identifier of the `client`. (default to undefined)
let start: string; //start (optional) (default to undefined)
let end: string; //end (optional) (default to undefined)
let startingAfter: string; //startingAfter (optional) (default to undefined)
let endingBefore: string; //endingBefore (optional) (default to undefined)
let limit: number; //limit (optional) (default to 10)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchVerifiedAccounts(
    clientHashId,
    start,
    end,
    startingAfter,
    endingBefore,
    limit,
    sortOrder,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique identifier of the &#x60;client&#x60;. | defaults to undefined|
| **start** | [**string**] | start | (optional) defaults to undefined|
| **end** | [**string**] | end | (optional) defaults to undefined|
| **startingAfter** | [**string**] | startingAfter | (optional) defaults to undefined|
| **endingBefore** | [**string**] | endingBefore | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to 10|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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

let clientHashId: string; //Unique client hash ID identifying the client. (default to undefined)
let country: string; //Two-letter ISO country code (e.g., US, GB, IN).Must Be exactly 2 characters (default to undefined)
let accountType: 'BANK' | 'PROXY'; //Allowed values: BANK, PROXY. Case-insensitive. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

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
| **clientHashId** | [**string**] | Unique client hash ID identifying the client. | defaults to undefined|
| **country** | [**string**] | Two-letter ISO country code (e.g., US, GB, IN).Must Be exactly 2 characters | defaults to undefined|
| **accountType** | [**&#39;BANK&#39; | &#39;PROXY&#39;**]**Array<&#39;BANK&#39; &#124; &#39;PROXY&#39;>** | Allowed values: BANK, PROXY. Case-insensitive. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


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

Verify the details of a customer\'s bank account. For more information, see [Nium Verify](/docs/account-verification).

### Example

```typescript
import {
    NiumVerifyApi,
    Configuration,
    VerifyRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new NiumVerifyApi(configuration);

let clientHashId: string; //Unique identifier of the `client`. (default to undefined)
let verifyRequest: VerifyRequest; //verifyRequest
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.verifyAccount(
    clientHashId,
    verifyRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyRequest** | **VerifyRequest**| verifyRequest | |
| **clientHashId** | [**string**] | Unique identifier of the &#x60;client&#x60;. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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

