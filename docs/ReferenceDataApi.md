# ReferenceDataApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**doBankNamePartialSearch**](#dobanknamepartialsearch) | **GET** /api/v2/client/{clientHashId}/payout/banks | Search Routing Code Using Bank Name|
|[**doBranchNameSearch**](#dobranchnamesearch) | **GET** /api/v2/client/{clientHashId}/payout/branches | Search Routing Code Using Branch Name|
|[**fetchRoutingCodeDetails**](#fetchroutingcodedetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/country/{countryCode}/routingCodeType/{routingCodeType}/routingCodeValue/{routingCodeValue}/routingCode | Fetch Bank Details using Routing Code|
|[**partialSearch**](#partialsearch) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/partialSearch | Search Routing Code (using bank name/branch name)|
|[**supportedCorridors1**](#supportedcorridors1) | **GET** /api/v2/client/{clientHashId}/supportedCorridors | Fetch Supported Corridors V2|
|[**supportedCorridors2**](#supportedcorridors2) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/supportedCorridors | Fetch Supported Corridors|

# **doBankNamePartialSearch**
> Array<PartialSearchBankNameResponseDTO> doBankNamePartialSearch()

This API will allow you to search the routing code details using bank name.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration,
    PartialSearchDTO2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let partialSearchDTO2: PartialSearchDTO2; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.doBankNamePartialSearch(
    clientHashId,
    partialSearchDTO2,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **partialSearchDTO2** | **PartialSearchDTO2** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<PartialSearchBankNameResponseDTO>**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **doBranchNameSearch**
> Array<PartialSearchBranchNameResponseDTO> doBranchNameSearch()

This API will allow you to search the routing code details using branch name.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration,
    PartialSearchDTO2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let partialSearchDTO2: PartialSearchDTO2; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.doBranchNameSearch(
    clientHashId,
    partialSearchDTO2,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **partialSearchDTO2** | **PartialSearchDTO2** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<PartialSearchBranchNameResponseDTO>**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRoutingCodeDetails**
> File fetchRoutingCodeDetails()

This API allows you to fetch the bank details against the routing information.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //The unique customer identifier generated on customer creation. (default to undefined)
let countryCode: string; //The [2-letter ISO-2 country code](/docs/currency-and-country-codes) of a beneficiary. (default to undefined)
let routingCodeType: string; //This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE (default to undefined)
let routingCodeValue: string; //The routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes). (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRoutingCodeDetails(
    clientHashId,
    customerHashId,
    countryCode,
    routingCodeType,
    routingCodeValue,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined|
| **countryCode** | [**string**] | The [2-letter ISO-2 country code](/docs/currency-and-country-codes) of a beneficiary. | defaults to undefined|
| **routingCodeType** | [**string**] | This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE | defaults to undefined|
| **routingCodeValue** | [**string**] | The routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes). | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**File**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partialSearch**
> File partialSearch(partialSearchDTO)

This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration,
    PartialSearchDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let partialSearchDTO: PartialSearchDTO; //Partial Search
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.partialSearch(
    clientHashId,
    customerHashId,
    partialSearchDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **partialSearchDTO** | **PartialSearchDTO**| Partial Search | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**File**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportedCorridors1**
> Array<SupportedCorridorsResponseDTO> supportedCorridors1()

This API will allow you to fetch the supported corridors for remittance with details.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration,
    SupportedCorridorsRequestV2DTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let supportedCorridorsRequestV2DTO: SupportedCorridorsRequestV2DTO; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.supportedCorridors1(
    clientHashId,
    supportedCorridorsRequestV2DTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **supportedCorridorsRequestV2DTO** | **SupportedCorridorsRequestV2DTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<SupportedCorridorsResponseDTO>**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supportedCorridors2**
> File supportedCorridors2()

This API will allow you to fetch the supported corridors for remittance with details.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.supportedCorridors2(
    clientHashId,
    customerHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**File**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

