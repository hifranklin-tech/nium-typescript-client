# Class3DSApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**passcodeEnrollmentStatus**](#passcodeenrollmentstatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/3ds/passcode/status | 3DS Passcode Enrollment Status|
|[**processOOBcallback**](#processoobcallback) | **POST** /api/v1/client/{clientHashId}/notifications/3ds/oob/callback | Process OOB callback|
|[**processOobCallbackV2**](#processoobcallbackv2) | **POST** /api/v2/client/{clientHashId}/3ds/oob/callback | 3DS OOB Callback V2|
|[**setPasscode**](#setpasscode) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/3ds/passcode | Add or Update passcode|

# **passcodeEnrollmentStatus**
> Array<PasscodeStatusDTO> passcodeEnrollmentStatus()

Fetch the status of a 3DS passcode verification attempt. For more information, see [3DS Security](/api#tag/3ds/get/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/3ds/passcode/status).

### Example

```typescript
import {
    Class3DSApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new Class3DSApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (optional) (default to undefined)
let xRequestId: string; //Please Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.passcodeEnrollmentStatus(
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
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Please Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<PasscodeStatusDTO>**

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

# **processOOBcallback**
> OOBCallbackResponseDTO processOOBcallback(oOBCallbackRequestDTO)


### Example

```typescript
import {
    Class3DSApi,
    Configuration,
    OOBCallbackRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new Class3DSApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let oOBCallbackRequestDTO: OOBCallbackRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.processOOBcallback(
    clientHashId,
    oOBCallbackRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oOBCallbackRequestDTO** | **OOBCallbackRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**OOBCallbackResponseDTO**

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

# **processOobCallbackV2**
> processOobCallbackV2(oobCallbackRequestDTO)

API to notify Nium on success or failure of OOB authentication

### Example

```typescript
import {
    Class3DSApi,
    Configuration,
    OobCallbackRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new Class3DSApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let oobCallbackRequestDTO: OobCallbackRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.processOobCallbackV2(
    clientHashId,
    oobCallbackRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oobCallbackRequestDTO** | **OobCallbackRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

void (empty response body)

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

# **setPasscode**
> PasscodeResponseDTO setPasscode(passcodeRequestDTO)

API to update the 3DS passcode for a specific card.

### Example

```typescript
import {
    Class3DSApi,
    Configuration,
    PasscodeRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new Class3DSApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let cardHashId: string; //Unique card identifier generated while new/add-on card issuance. (default to undefined)
let passcodeRequestDTO: PasscodeRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.setPasscode(
    clientHashId,
    customerHashId,
    walletHashId,
    cardHashId,
    passcodeRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passcodeRequestDTO** | **PasscodeRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PasscodeResponseDTO**

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

