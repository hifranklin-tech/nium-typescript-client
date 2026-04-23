# CustomerAccountIndividualApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchRfiDetails**](#fetchrfidetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Fetch Individual Customer RFI Details|
|[**saveCustomer2**](#savecustomer2) | **POST** /api/v4/client/{clientHashId}/customer | Unified Add Customer|
|[**saveCustomerEDocVerify**](#savecustomeredocverify) | **POST** /api/v3/client/{clientHashId}/customer | Add Customer Using e-Document Verification|
|[**saveCustomerSG**](#savecustomersg) | **POST** /api/v1/client/{clientHashId}/customer-min-data | Add Customer Using MyInfo [SG]|
|[**updateCustomer1**](#updatecustomer1) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/updateCustomer | Customer Update|
|[**uploadKycDocuments**](#uploadkycdocuments) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/uploadDocuments | Upload Document|
|[**uploadRfiDocument**](#uploadrfidocument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Respond to RFI|

# **fetchRfiDetails**
> Array<CustomerRfiDetailsResponse> fetchRfiDetails()

Fetch the details of an RFI raised as part of onboarding an individual customer.

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRfiDetails(
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

**Array<CustomerRfiDetailsResponse>**

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

# **saveCustomer2**
> AddCustomerResponseDTO saveCustomer2(addCustomerRequestDTO)

Use this request to onboard an individual customer under an existing client.    For detailed implementation steps, see [Individual Customers](/docs/overview-individual-customer).

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    AddCustomerRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let addCustomerRequestDTO: AddCustomerRequestDTO; //Add individual customer
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.saveCustomer2(
    clientHashId,
    addCustomerRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addCustomerRequestDTO** | **AddCustomerRequestDTO**| Add individual customer | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**AddCustomerResponseDTO**

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

# **saveCustomerEDocVerify**
> AddCustomerResponseDTO saveCustomerEDocVerify(eVerifyCustomerRegistrationRequestDTO)


### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    EVerifyCustomerRegistrationRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique identifier of the `client`. (default to undefined)
let eVerifyCustomerRegistrationRequestDTO: EVerifyCustomerRegistrationRequestDTO; //Registration Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.saveCustomerEDocVerify(
    clientHashId,
    eVerifyCustomerRegistrationRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eVerifyCustomerRegistrationRequestDTO** | **EVerifyCustomerRegistrationRequestDTO**| Registration Request | |
| **clientHashId** | [**string**] | Unique identifier of the &#x60;client&#x60;. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**AddCustomerResponseDTO**

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

# **saveCustomerSG**
> CustomerDataExternalResponseDTO saveCustomerSG(customerDataExternalRequestDTO)

Create customers using minimal data. The rest of the partial data will be pulled via MyInfo, which is locked and cannot be edited. Further fields can be updated using the Customer Update API.  ⚠️ **WARNING**   This API version is deprecated. Eventually, a deprecated API version becomes unsupported.  [Unified Add Customer](https://docs.nium.com/apis/reference/unifiedaddcustomer) is the latest version of this API. 

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    CustomerDataExternalRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerDataExternalRequestDTO: CustomerDataExternalRequestDTO; //Customer Data External Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.saveCustomerSG(
    clientHashId,
    customerDataExternalRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerDataExternalRequestDTO** | **CustomerDataExternalRequestDTO**| Customer Data External Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomerDataExternalResponseDTO**

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

# **updateCustomer1**
> UpdateCustomerResponseDTO updateCustomer1(updateCustomerDTO)

Update the details of a customer details. If compliance status is **COMPLETED** only `email`, `mobile`, delivery address, and correspondence address can be updated. The billing address can\'t be updated.

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    UpdateCustomerDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let updateCustomerDTO: UpdateCustomerDTO; //Update Customer Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateCustomer1(
    clientHashId,
    customerHashId,
    updateCustomerDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerDTO** | **UpdateCustomerDTO**| Update Customer Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**UpdateCustomerResponseDTO**

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

# **uploadKycDocuments**
> ComplianceDocumentResponseDTO uploadKycDocuments(complianceDocumentDTO)

Upload documents necessary for customer onboarding. See the details of the RFI for required documents.

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    ComplianceDocumentDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let complianceDocumentDTO: ComplianceDocumentDTO; //Compliance documents
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.uploadKycDocuments(
    clientHashId,
    customerHashId,
    complianceDocumentDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **complianceDocumentDTO** | **ComplianceDocumentDTO**| Compliance documents | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ComplianceDocumentResponseDTO**

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

# **uploadRfiDocument**
> UploadRfiDetailsResponseDto uploadRfiDocument(uploadRfiDocumentRequestDto)

Respond to an RFI raised by Nium. You can use this request to respond to an RFI for data or documents when the customer\'s compliance status is **RFI_REQUESTED**.

### Example

```typescript
import {
    CustomerAccountIndividualApi,
    Configuration,
    UploadRfiDocumentRequestDto
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountIndividualApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let uploadRfiDocumentRequestDto: UploadRfiDocumentRequestDto; //RFI response object
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.uploadRfiDocument(
    clientHashId,
    customerHashId,
    uploadRfiDocumentRequestDto,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uploadRfiDocumentRequestDto** | **UploadRfiDocumentRequestDto**| RFI response object | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**UploadRfiDetailsResponseDto**

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

