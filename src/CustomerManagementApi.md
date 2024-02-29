# .CustomerManagementApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatement**](CustomerManagementApi.md#accountStatement) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accounts/statement | Account Statement
[**blockUnblockCustomer**](CustomerManagementApi.md#blockUnblockCustomer) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/block | Block/Unblock Customer
[**customerDetails**](CustomerManagementApi.md#customerDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId} | Customer Details
[**customerDetailsV2**](CustomerManagementApi.md#customerDetailsV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId} | Customer Details V2
[**customerList**](CustomerManagementApi.md#customerList) | **GET** /api/v1/client/{clientHashId}/customers | Customer List
[**customerListV2**](CustomerManagementApi.md#customerListV2) | **GET** /api/v2/client/{clientHashId}/customers | Customer List V2
[**customerListV3**](CustomerManagementApi.md#customerListV3) | **GET** /api/v3/client/{clientHashId}/customers | Customer List V3
[**manageCustomerTags**](CustomerManagementApi.md#manageCustomerTags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/tags | Manage Customer Tags


# **accountStatement**
> void accountStatement()

This API allows you to download an account statement.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiAccountStatementRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
  endDate: "endDate_example",
  // string | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
  startDate: "startDate_example",
  // string | This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. (optional)
  currencies: "currencies_example",
  // string | This field accepts the file type of the account statement to be generated. (optional)
  fileType: "pdf",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.accountStatement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | defaults to undefined
 **startDate** | [**string**] | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. | defaults to undefined
 **currencies** | [**string**] | This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer. | (optional) defaults to undefined
 **fileType** | [**string**] | This field accepts the file type of the account statement to be generated. | (optional) defaults to 'pdf'
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**void**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **blockUnblockCustomer**
> CustomerApiError blockUnblockCustomer(blockCustomerRequestDTO)

This API allows you to permanently block or temporarily block/unblock a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiBlockUnblockCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // BlockCustomerRequestDTO | blockCustomerRequestDTO
  blockCustomerRequestDTO: {
    action: "TEMPORARY_BLOCK",
    comment: "comment_example",
    reason: "CUSTOMER_REQUEST",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.blockUnblockCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockCustomerRequestDTO** | **BlockCustomerRequestDTO**| blockCustomerRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerApiError**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerDetails**
> CustomerDetailResponse customerDetails()

This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiCustomerDetailsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerDetailResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerDetailsV2**
> CustomerDetailsResponseV2DTO customerDetailsV2()

This API allows you to fetch details for a specific customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiCustomerDetailsV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerDetailsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerDetailsResponseV2DTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerList**
> Array<CustomerDetailResponse> customerList()

This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiCustomerListRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the email ID of the customer. (optional)
  email: "email_example",
  // string | This field accepts the mobile number of a customer--digits only--without the country code. (optional)
  mobile: "mobile_example",
  // 'ASC' | 'DESC' | This field accepts the order which can be ASC or DESC. (optional)
  order: "ASC",
  // string | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page = number of pages(N).  This field can then give a particular page. (optional)
  page: "page_example",
  // string | This field accepts the number of elements per page. (optional)
  size: "size_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **email** | [**string**] | This field accepts the email ID of the customer. | (optional) defaults to undefined
 **mobile** | [**string**] | This field accepts the mobile number of a customer--digits only--without the country code. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | This field accepts the order which can be ASC or DESC. | (optional) defaults to undefined
 **page** | [**string**] | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page. | (optional) defaults to undefined
 **size** | [**string**] | This field accepts the number of elements per page. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<CustomerDetailResponse>**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerListV2**
> PaginatedCustomerDetailsResponseV2DTO customerListV2()

This API allows you to fetch customer lists under a client with optional search parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiCustomerListV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the business registration number of corporate customer. (optional)
  businessRegistrationNumber: "businessRegistrationNumber_example",
  // string | This field accepts the email ID of the customer. (optional)
  email: "email_example",
  // string | This field accepts the mobile number of a customer without the country code. (optional)
  mobile: "mobile_example",
  // 'ASC' | 'DESC' | This field accepts the order which can be ASC or DESC. (optional)
  order: "ASC",
  // string | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page = number of pages(N).  This field can then give a particular page. (optional)
  page: "page_example",
  // string | This field accepts the number of elements per page. (optional)
  size: "size_example",
  // string | This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter. (optional)
  tagKey: "tagKey_example",
  // string | This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter. (optional)
  tagValue: "tagValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerListV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **businessRegistrationNumber** | [**string**] | This field accepts the business registration number of corporate customer. | (optional) defaults to undefined
 **email** | [**string**] | This field accepts the email ID of the customer. | (optional) defaults to undefined
 **mobile** | [**string**] | This field accepts the mobile number of a customer without the country code. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | This field accepts the order which can be ASC or DESC. | (optional) defaults to undefined
 **page** | [**string**] | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page. | (optional) defaults to undefined
 **size** | [**string**] | This field accepts the number of elements per page. | (optional) defaults to undefined
 **tagKey** | [**string**] | This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter. | (optional) defaults to undefined
 **tagValue** | [**string**] | This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PaginatedCustomerDetailsResponseV2DTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerListV3**
> PaginatedResponseDTOCustomerDetailsResponseV2DTO customerListV3()

This API allows you to fetch customer lists under a client with optional search parameters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiCustomerListV3Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | This field accepts the business registration number of corporate customer. (optional)
  businessRegistrationNumber: "businessRegistrationNumber_example",
  // 'INDIVIDUAL' | 'CORPORATE' | This field accepts the type of customer. (optional)
  customerType: "INDIVIDUAL",
  // string | This field accepts the email ID of the customer. (optional)
  email: "email_example",
  // string | This field accepts the mobile number of a customer without the country code. (optional)
  mobile: "mobile_example",
  // 'ASC' | 'DESC' | This field accepts the order which can be ASC or DESC. (optional)
  order: "ASC",
  // string | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page = number of pages(N).  This field can then give a particular page. (optional)
  page: "page_example",
  // string | This field contains the unique parent customer identifier generated at the time of customer creation. (optional)
  parentCustomerHashId: "190dddbe-fdbc-48fe-a7c2-d55266e9acf5",
  // string | This field accepts the number of elements per page. (optional)
  size: "size_example",
  // string | This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter. (optional)
  tagKey: "tagKey_example",
  // string | This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter. (optional)
  tagValue: "tagValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerListV3(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **businessRegistrationNumber** | [**string**] | This field accepts the business registration number of corporate customer. | (optional) defaults to undefined
 **customerType** | [**&#39;INDIVIDUAL&#39; | &#39;CORPORATE&#39;**]**Array<&#39;INDIVIDUAL&#39; &#124; &#39;CORPORATE&#39;>** | This field accepts the type of customer. | (optional) defaults to undefined
 **email** | [**string**] | This field accepts the email ID of the customer. | (optional) defaults to undefined
 **mobile** | [**string**] | This field accepts the mobile number of a customer without the country code. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | This field accepts the order which can be ASC or DESC. | (optional) defaults to undefined
 **page** | [**string**] | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page. | (optional) defaults to undefined
 **parentCustomerHashId** | [**string**] | This field contains the unique parent customer identifier generated at the time of customer creation. | (optional) defaults to undefined
 **size** | [**string**] | This field accepts the number of elements per page. | (optional) defaults to undefined
 **tagKey** | [**string**] | This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter. | (optional) defaults to undefined
 **tagValue** | [**string**] | This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PaginatedResponseDTOCustomerDetailsResponseV2DTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **manageCustomerTags**
> CustomerClientTagsResponseDTO manageCustomerTags(customerClientTagsRequestDTO)

This API allows you to add, update, and delete customer tags.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerManagementApi(configuration);

let body:.CustomerManagementApiManageCustomerTagsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated during customer creation.
  customerHashId: "customerHashId_example",
  // CustomerClientTagsRequestDTO | tags
  customerClientTagsRequestDTO: {
    tags: [
      {
        action: "MAINTAIN",
        key: "key_example",
        value: "value_example",
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.manageCustomerTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerClientTagsRequestDTO** | **CustomerClientTagsRequestDTO**| tags |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerClientTagsResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


