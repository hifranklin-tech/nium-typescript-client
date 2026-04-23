# CustomerManagementApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountStatement**](#accountstatement) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accounts/statement | Account Statement|
|[**blockCustomer1**](#blockcustomer1) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/block | Block/Unblock Customer|
|[**customerDetails**](#customerdetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId} | Customer Details|
|[**customerDetailsResponse2**](#customerdetailsresponse2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId} | Customer Details V2|
|[**getCustomers2**](#getcustomers2) | **GET** /api/v2/client/{clientHashId}/customers | Customer List V2|
|[**getCustomers3**](#getcustomers3) | **GET** /api/v3/client/{clientHashId}/customers | Customer List V3|
|[**maintainCustomerClientTags**](#maintaincustomerclienttags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/tags | Manage Customer Tags|
|[**walletStatement**](#walletstatement) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/statement | Account Statement for the Specified Wallet|

# **accountStatement**
> accountStatement()

Download a customer\'s account statement. For more information, see [Customer Account Statements](/docs/customer-account-statement).

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let startDate: string; //From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. (default to undefined)
let fileType: string; //The file type of the account statement to be generated. (optional) (default to 'pdf')
let currencies: string; //The list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.accountStatement(
    clientHashId,
    customerHashId,
    startDate,
    endDate,
    fileType,
    currencies,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **startDate** | [**string**] | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. | defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | defaults to undefined|
| **fileType** | [**string**] | The file type of the account statement to be generated. | (optional) defaults to 'pdf'|
| **currencies** | [**string**] | The list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

void (empty response body)

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

# **blockCustomer1**
> CustomerApiError blockCustomer1(blockCustomerRequestDTO)

Permanently block or temporarily block/unblock a customer. For more information, see [Customer Lifecycle](/docs/customer-life-cycle).

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration,
    BlockCustomerRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let blockCustomerRequestDTO: BlockCustomerRequestDTO; //Block Customer Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.blockCustomer1(
    clientHashId,
    customerHashId,
    blockCustomerRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockCustomerRequestDTO** | **BlockCustomerRequestDTO**| Block Customer Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerApiError**

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

# **customerDetails**
> CustomerCustomerDetailResponse customerDetails()

Fetch the details for a specific customer.

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.customerDetails(
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

**CustomerCustomerDetailResponse**

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

# **customerDetailsResponse2**
> CustomerDetailsResponseV2DTO customerDetailsResponse2()

Fetch the details for a specific customer. For more information about onboarding customers, see [Onboarding](/docs/onboarding).

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.customerDetailsResponse2(
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

**CustomerDetailsResponseV2DTO**

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

# **getCustomers2**
> PaginatedCustomerDetailsResponseV2DTO getCustomers2()


### Example

```typescript
import {
    CustomerManagementApi,
    Configuration,
    CustomerList2RequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerList2RequestDTO: CustomerList2RequestDTO; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomers2(
    clientHashId,
    customerList2RequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerList2RequestDTO** | **CustomerList2RequestDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PaginatedCustomerDetailsResponseV2DTO**

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

# **getCustomers3**
> PaginatedResponseDTO getCustomers3()

List all the customers under a client account. For more information about onboarding customers, see [Onboarding](/docs/onboarding).

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration,
    CustomerList3RequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerList3RequestDTO: CustomerList3RequestDTO; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomers3(
    clientHashId,
    customerList3RequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerList3RequestDTO** | **CustomerList3RequestDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PaginatedResponseDTO**

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

# **maintainCustomerClientTags**
> CustomerClientTagsResponseDTO maintainCustomerClientTags(customerClientTagsRequestDTO)

This API allows you to add, update, and delete customer tags.

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration,
    CustomerClientTagsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated during customer creation. (default to undefined)
let customerClientTagsRequestDTO: CustomerClientTagsRequestDTO; //tags
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.maintainCustomerClientTags(
    clientHashId,
    customerHashId,
    customerClientTagsRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerClientTagsRequestDTO** | **CustomerClientTagsRequestDTO**| tags | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerClientTagsResponseDTO**

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

# **walletStatement**
> walletStatement()

This API allows you to download an account statement.

### Example

```typescript
import {
    CustomerManagementApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerManagementApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated on wallet creation. (default to undefined)
let startDate: string; //From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. (default to undefined)
let fileType: string; //The file type of the account statement to be generated. Accepted values are pdf or CSV. If there is no value passed, then pdf is taken as the default value. (optional) (default to 'pdf')
let currencies: string; //The list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.walletStatement(
    clientHashId,
    customerHashId,
    walletHashId,
    startDate,
    endDate,
    fileType,
    currencies,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated on wallet creation. | defaults to undefined|
| **startDate** | [**string**] | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. | defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | defaults to undefined|
| **fileType** | [**string**] | The file type of the account statement to be generated. Accepted values are pdf or CSV. If there is no value passed, then pdf is taken as the default value. | (optional) defaults to 'pdf'|
| **currencies** | [**string**] | The list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

void (empty response body)

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

