# UserManagementApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUser**](#createuser) | **POST** /api/v1/client/{clientHashId}/users | Create User|
|[**getUser**](#getuser) | **GET** /api/v1/client/{clientHashId}/user/{userHashId} | Get User|
|[**listUsers1**](#listusers1) | **GET** /api/v1/client/{clientHashId}/users | List Users|
|[**submitUserKyc**](#submituserkyc) | **POST** /api/v1/client/{clientHashId}/userKyc | Submit User KYC|
|[**updateUser**](#updateuser) | **PUT** /api/v1/client/{clientHashId}/user/{userHashId} | Update User|
|[**updateUserLifecycle**](#updateuserlifecycle) | **POST** /api/v1/client/{clientHashId}/user/{userHashId}/lifecycle | User Lifecycle|

# **createUser**
> CreateUserResponse createUser(eUCreateUserRequest)

This API allows you to create a user under an existing customer.

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    EUCreateUserRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let eUCreateUserRequest: EUCreateUserRequest; //

const { status, data } = await apiInstance.createUser(
    clientHashId,
    xRequestId,
    eUCreateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eUCreateUserRequest** | **EUCreateUserRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**CreateUserResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | UnprocessableEntity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUser**
> UserProfileResponse getUser()

This API allows you to fetch details for a specific user.

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let userHashId: string; //Unique user identifier generated during user creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.getUser(
    clientHashId,
    userHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **userHashId** | [**string**] | Unique user identifier generated during user creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**UserProfileResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUsers1**
> UserListResponse listUsers1()

This API allows you to fetch user lists under a client with optional search parameters.

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let customerHashId: string; //The unique customer identifier generated on customer creation. (optional) (default to undefined)
let status: 'Approved' | 'Declined' | 'Blocked' | 'Pending' | 'InProgress' | 'Rejected' | 'AwaitingFunds' | 'Expired' | 'Cancelled' | 'Scheduled'; //Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. (optional) (default to undefined)
let accessType: string; // (optional) (default to undefined)
let externalId: string; //Filter transactions using your unique identifier. (optional) (default to undefined)
let limit: number; //The number of items to be returned on each page. (optional) (default to 10)
let startingAfter: string; //Used to return the `limit` number of records after (including) the given starting position. (optional) (default to undefined)
let endingBefore: string; //Used to return the `limit` number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. (optional) (default to undefined)

const { status, data } = await apiInstance.listUsers1(
    clientHashId,
    xRequestId,
    customerHashId,
    status,
    accessType,
    externalId,
    limit,
    startingAfter,
    endingBefore
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | (optional) defaults to undefined|
| **status** | [**&#39;Approved&#39; | &#39;Declined&#39; | &#39;Blocked&#39; | &#39;Pending&#39; | &#39;InProgress&#39; | &#39;Rejected&#39; | &#39;AwaitingFunds&#39; | &#39;Expired&#39; | &#39;Cancelled&#39; | &#39;Scheduled&#39;**]**Array<&#39;Approved&#39; &#124; &#39;Declined&#39; &#124; &#39;Blocked&#39; &#124; &#39;Pending&#39; &#124; &#39;InProgress&#39; &#124; &#39;Rejected&#39; &#124; &#39;AwaitingFunds&#39; &#124; &#39;Expired&#39; &#124; &#39;Cancelled&#39; &#124; &#39;Scheduled&#39;>** | Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. | (optional) defaults to undefined|
| **accessType** | [**string**] |  | (optional) defaults to undefined|
| **externalId** | [**string**] | Filter transactions using your unique identifier. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of items to be returned on each page. | (optional) defaults to 10|
| **startingAfter** | [**string**] | Used to return the &#x60;limit&#x60; number of records after (including) the given starting position. | (optional) defaults to undefined|
| **endingBefore** | [**string**] | Used to return the &#x60;limit&#x60; number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. | (optional) defaults to undefined|


### Return type

**UserListResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitUserKyc**
> SubmitUserKycResponse submitUserKyc(eUSubmitUserKycRequest)

This API allows you to submit KYC for a user.

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    EUSubmitUserKycRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let eUSubmitUserKycRequest: EUSubmitUserKycRequest; //

const { status, data } = await apiInstance.submitUserKyc(
    clientHashId,
    xRequestId,
    eUSubmitUserKycRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eUSubmitUserKycRequest** | **EUSubmitUserKycRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**SubmitUserKycResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> UserProfileResponse updateUser(eUUpdateUserRequest)

Update user profile and/or accessType.

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    EUUpdateUserRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let userHashId: string; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let eUUpdateUserRequest: EUUpdateUserRequest; //

const { status, data } = await apiInstance.updateUser(
    clientHashId,
    userHashId,
    xRequestId,
    eUUpdateUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eUUpdateUserRequest** | **EUUpdateUserRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **userHashId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**UserProfileResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserLifecycle**
> UserAccessResponse updateUserLifecycle(updateUserLifecycleExternalRequest)

Set user status to Clear, Suspended, or Revoked. Reason code is mandatory.

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    UpdateUserLifecycleExternalRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let userHashId: string; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let updateUserLifecycleExternalRequest: UpdateUserLifecycleExternalRequest; //

const { status, data } = await apiInstance.updateUserLifecycle(
    clientHashId,
    userHashId,
    xRequestId,
    updateUserLifecycleExternalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserLifecycleExternalRequest** | **UpdateUserLifecycleExternalRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **userHashId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**UserAccessResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

