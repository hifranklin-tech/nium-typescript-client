# CustomerOnboardingV5Api

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomer**](#createcustomer) | **POST** /api/v5/client/{clientHashId}/customers | Create Customer v5|
|[**exhaustiveDetails**](#exhaustivedetails) | **GET** /api/v5/client/{clientHashId}/corporate/exhaustiveDetailsSearch | Fetch Exhaustive Corporate Details|
|[**getCustomers**](#getcustomers) | **GET** /api/v5/client/{clientHashId}/customer/{customerHashId} | Get Customer v5|
|[**getCustomersList**](#getcustomerslist) | **GET** /api/v5/client/{clientHashId}/customers | List Customers v5|
|[**listHostedFormApplications**](#listhostedformapplications) | **GET** /api/v5/client/{clientHashId}/applications | List Hosted Form Applications|
|[**publicDetails**](#publicdetails) | **GET** /api/v5/client/{clientHashId}/corporate/publicDetails | Fetch Public Corporate Details|
|[**updateCustomer**](#updatecustomer) | **PUT** /api/v5/client/{clientHashId}/customer/{customerHashId} | Update Customer v5|
|[**updateCustomerEntityKyc**](#updatecustomerentitykyc) | **POST** /api/v5/client/{clientHashId}/customer/{customerHashId}/submitKyc | Submit KYC for customer entity|

# **createCustomer**
> CustomerDetailsV5Response createCustomer(createCustomerRequest)

Create a customer under a specific client.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration,
    CreateCustomerRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let createCustomerRequest: CreateCustomerRequest; //createCustomerRequest
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.createCustomer(
    clientHashId,
    createCustomerRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCustomerRequest** | **CreateCustomerRequest**| createCustomerRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerDetailsV5Response**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | UnprocessableEntity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exhaustiveDetails**
> ExhaustiveDetailsV5Response exhaustiveDetails()

Conduct an exhaustive search and retrieve all the publicly available details for a corporation using the `publicDetailsId`.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; // (default to undefined)
let publicDetailsId: string; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.exhaustiveDetails(
    clientHashId,
    publicDetailsId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] |  | defaults to undefined|
| **publicDetailsId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**ExhaustiveDetailsV5Response**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Object 200 response &amp; Exhaustive details fetched Successfully |  -  |
|**400** | 400 response Bad Request |  -  |
|**500** | 500 response Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomers**
> CustomerDetailsV5Response getCustomers()

Retrieve the details of a specific customer.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated during customer creation. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomers(
    clientHashId,
    customerHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerDetailsV5Response**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomersList**
> CustomerDetailsV5ResponseList getCustomersList()

List the customers under a specific client and filter results with optional search parameters.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration,
    CustomerList5RequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerList5RequestDTO: CustomerList5RequestDTO; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomersList(
    clientHashId,
    customerList5RequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerList5RequestDTO** | **CustomerList5RequestDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerDetailsV5ResponseList**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHostedFormApplications**
> ApplicationsPageResponse listHostedFormApplications()

List customer onboarding applications for a client.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration,
    ApplicationsListRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before API handshake. (default to undefined)
let request: ApplicationsListRequest; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.listHostedFormApplications(
    clientHashId,
    request,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined|
| **request** | **ApplicationsListRequest** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**ApplicationsPageResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publicDetails**
> V5LookupResponse publicDetails()

Retrieve the publicly available details of a corporate customer.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; // (default to undefined)
let type: string; // (default to undefined)
let businessRegistrationNumber: string; // (default to undefined)
let registeredCountry: string; // (default to undefined)
let region: string; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.publicDetails(
    clientHashId,
    type,
    businessRegistrationNumber,
    registeredCountry,
    region,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] |  | defaults to undefined|
| **type** | [**string**] |  | defaults to undefined|
| **businessRegistrationNumber** | [**string**] |  | defaults to undefined|
| **registeredCountry** | [**string**] |  | defaults to undefined|
| **region** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**V5LookupResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 response Public details fetched Successfully |  -  |
|**400** | 400 response Bad Request |  -  |
|**500** | 500 response Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCustomer**
> CustomerDetailsV5Response updateCustomer(updateCustomerRequest)

Update the details of an existing customer.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration,
    UpdateCustomerRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated during customer creation. (default to undefined)
let updateCustomerRequest: UpdateCustomerRequest; //customerDetailsV5UpdateRequest
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateCustomer(
    clientHashId,
    customerHashId,
    updateCustomerRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerRequest** | **UpdateCustomerRequest**| customerDetailsV5UpdateRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerDetailsV5Response**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCustomerEntityKyc**
> SubmitKycResponse updateCustomerEntityKyc(usKycRequest)

This API allows you to submit KYC for a customer entity.

### Example

```typescript
import {
    CustomerOnboardingV5Api,
    Configuration,
    UsKycRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerOnboardingV5Api(configuration);

let clientHashId: string; //Unique client identifier generated and shared before API handshake. (default to undefined)
let customerHashId: string; //Unique customer identifier generated during customer creation. (default to undefined)
let usKycRequest: UsKycRequest; //
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.updateCustomerEntityKyc(
    clientHashId,
    customerHashId,
    usKycRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usKycRequest** | **UsKycRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**SubmitKycResponse**

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

