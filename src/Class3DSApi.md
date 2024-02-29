# .Class3DSApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passcodeEnrollmentStatus**](Class3DSApi.md#passcodeEnrollmentStatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/3ds/passcode/status | 3DS passcode enrollment status
[**processOOBcallback**](Class3DSApi.md#processOOBcallback) | **POST** /api/v1/client/{clientHashId}/notifications/3ds/oob/callback | Process OOB callback
[**processOobCallbackV2**](Class3DSApi.md#processOobCallbackV2) | **POST** /api/v2/client/{clientHashId}/3ds/oob/callback | 3DS OOB Callback V2
[**setPasscode**](Class3DSApi.md#setPasscode) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/3ds/passcode | Add or Update passcode


# **passcodeEnrollmentStatus**
> Array<PasscodeStatusDTO> passcodeEnrollmentStatus()

API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .Class3DSApi(configuration);

let body:.Class3DSApiPasscodeEnrollmentStatusRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance. (optional)
  cardHashId: "cardHashId_example",
  // string | Please enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.passcodeEnrollmentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Please enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<PasscodeStatusDTO>**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **processOOBcallback**
> OOBCallbackResponseDTO processOOBcallback(oOBCallbackRequestDTO)

API to notify Nium on success of OOB authentication

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .Class3DSApi(configuration);

let body:.Class3DSApiProcessOOBcallbackRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // OOBCallbackRequestDTO | oobCallbackRequestDTO
  oOBCallbackRequestDTO: {
    authTransactionId: "authTransactionId_example",
    referenceNumber: "referenceNumber_example",
    statusCode: "SSS000",
    status: "ACTIVE",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.processOOBcallback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oOBCallbackRequestDTO** | **OOBCallbackRequestDTO**| oobCallbackRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**OOBCallbackResponseDTO**

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

# **processOobCallbackV2**
> void processOobCallbackV2(oobCallbackRequestDTO)

API to notify Nium on success or failure of OOB authentication

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .Class3DSApi(configuration);

let body:.Class3DSApiProcessOobCallbackV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // OobCallbackRequestDTO | oobCallbackRequestDTO
  oobCallbackRequestDTO: {
    authTransactionId: "authTransactionId_example",
    referenceNumber: "referenceNumber_example",
    statusCode: "001, 002",
    message: "message_example",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.processOobCallbackV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oobCallbackRequestDTO** | **OobCallbackRequestDTO**| oobCallbackRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setPasscode**
> PasscodeResponseDTO setPasscode(passcodeRequestDTO)

API to update the 3DS passcode for a specific card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .Class3DSApi(configuration);

let body:.Class3DSApiSetPasscodeRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // PasscodeRequestDTO | passcodeRequestDTO
  passcodeRequestDTO: {
    passcode: "MTIzNDU2",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.setPasscode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passcodeRequestDTO** | **PasscodeRequestDTO**| passcodeRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PasscodeResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


