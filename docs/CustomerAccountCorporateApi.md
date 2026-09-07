# CustomerAccountCorporateApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCorporateConstants**](#fetchcorporateconstants) | **GET** /api/v2/client/{clientHashId}/onboarding/constants | Fetch Corporate Constants|
|[**fetchCorporateDetails**](#fetchcorporatedetails) | **GET** /api/v1/client/{clientHashId}/corporate/lookup | Fetch Public Corporate Details|
|[**fetchEnrichCorporateDetails**](#fetchenrichcorporatedetails) | **GET** /api/v2/client/{clientHashId}/corporate/lookup | Exhaustive Corporate Details using Business ID|
|[**onboardCorporateCustomer**](#onboardcorporatecustomer) | **POST** /api/v1/client/{clientHashId}/corporate | Onboard Corporate Customer|
|[**productfetchRfiDetails**](#productfetchrfidetails) | **GET** /api/v1/client/{clientHashId}/corporate/rfi | Fetch Corporate Customer RFI Details|
|[**regenerateKYCURL**](#regeneratekycurl) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/regenerateKYCURL | Regenerate KYC URL|
|[**respondRfi**](#respondrfi) | **POST** /api/v1/client/{clientHashId}/corporate/rfi | Respond to RFI for Corporate Customer|
|[**updateCorporateCustomer**](#updatecorporatecustomer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate | Update Corporate Customer|
|[**uploadKybDocuments**](#uploadkybdocuments) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate/documents | Upload Document for Corporate Customer|

# **fetchCorporateConstants**
> AddCategoryResponseDTO fetchCorporateConstants()

Fetch the acceptable values for various fields. For more information, see [Corporate Constants](/docs/onboarding/corporate-customers/corporate-constants).

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let type: 'INDIVIDUAL' | 'CORPORATE'; //Type of customer being onboarded. (default to undefined)
let category: string; //Category used during corporate customer onboarding. Response returns a list of allowed values for the selected category. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let region: string; //The region code for which onboarding has been triggered, for example AU, EU, UK, SG. (optional) (default to undefined)
let countryCode: string; //The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCorporateConstants(
    clientHashId,
    type,
    category,
    xRequestId,
    region,
    countryCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **type** | [**&#39;INDIVIDUAL&#39; | &#39;CORPORATE&#39;**]**Array<&#39;INDIVIDUAL&#39; &#124; &#39;CORPORATE&#39;>** | Type of customer being onboarded. | defaults to undefined|
| **category** | [**string**] | Category used during corporate customer onboarding. Response returns a list of allowed values for the selected category. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **region** | [**string**] | The region code for which onboarding has been triggered, for example AU, EU, UK, SG. | (optional) defaults to undefined|
| **countryCode** | [**string**] | The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). | (optional) defaults to undefined|


### Return type

**AddCategoryResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchCorporateDetails**
> CorporateDetailResponseDTO fetchCorporateDetails()

Retrieve the publicly available details of a corporate customers using the `businessRegistrationNumber`.

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let countryCode: string; //The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). (optional) (default to undefined)
let businessRegistrationNumber: string; //The business registration number of the entity. (optional) (default to undefined)

const { status, data } = await apiInstance.fetchCorporateDetails(
    clientHashId,
    xRequestId,
    countryCode,
    businessRegistrationNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **countryCode** | [**string**] | The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). | (optional) defaults to undefined|
| **businessRegistrationNumber** | [**string**] | The business registration number of the entity. | (optional) defaults to undefined|


### Return type

**CorporateDetailResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchEnrichCorporateDetails**
> ProductCorporateEnrichedDetailResponseDTO fetchEnrichCorporateDetails()

Fetch exhaustive details about both public and non-public  corporate customers using the business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let searchReferenceId: string; //The search reference id of the corporate customer as received in response of public corporate details api. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let countryCode: string; //The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchEnrichCorporateDetails(
    clientHashId,
    searchReferenceId,
    xRequestId,
    countryCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **searchReferenceId** | [**string**] | The search reference id of the corporate customer as received in response of public corporate details api. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **countryCode** | [**string**] | The 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf). | (optional) defaults to undefined|


### Return type

**ProductCorporateEnrichedDetailResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onboardCorporateCustomer**
> ProductCorporateCustomerResponseDTO onboardCorporateCustomer(onboardCorporateCustomerRequestDTO)

Onboard a corporate customer under an existing client account.   For more information, see [Corporate Customers](/docs/onboarding/corporate-customers).

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration,
    OnboardCorporateCustomerRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let onboardCorporateCustomerRequestDTO: OnboardCorporateCustomerRequestDTO; //Corporate Customer Request

const { status, data } = await apiInstance.onboardCorporateCustomer(
    clientHashId,
    xRequestId,
    onboardCorporateCustomerRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **onboardCorporateCustomerRequestDTO** | **OnboardCorporateCustomerRequestDTO**| Corporate Customer Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ProductCorporateCustomerResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productfetchRfiDetails**
> ProductComplianceRFITemplateMetadataResponseDTO productfetchRfiDetails()

Fetch the details of a Request for Information (RFI) raised as part of onboarding a corporate customer.

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let customerHashId: string; //The unique customer identifier generated on customer creation. (optional) (default to undefined)
let region: string; //The region code for which onboarding has been triggered, for example AU, EU, UK, SG. (optional) (default to undefined)
let clientId: string; //This field contains unique client ID generated and returned in Onboard API response. (optional) (default to undefined)
let caseId: string; //This field contains unique case ID generated and returned in Onboard API response. (optional) (default to undefined)

const { status, data } = await apiInstance.productfetchRfiDetails(
    clientHashId,
    xRequestId,
    customerHashId,
    region,
    clientId,
    caseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | (optional) defaults to undefined|
| **region** | [**string**] | The region code for which onboarding has been triggered, for example AU, EU, UK, SG. | (optional) defaults to undefined|
| **clientId** | [**string**] | This field contains unique client ID generated and returned in Onboard API response. | (optional) defaults to undefined|
| **caseId** | [**string**] | This field contains unique case ID generated and returned in Onboard API response. | (optional) defaults to undefined|


### Return type

**ProductComplianceRFITemplateMetadataResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerateKYCURL**
> RegenerateUrlResponse regenerateKYCURL()

Regenerate a Know Your Customer (KYC) URL.

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.regenerateKYCURL(
    clientHashId,
    customerHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**RegenerateUrlResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Url regenerate Successfully |  -  |
|**400** | Bad Request |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondRfi**
> RespondRfiResponseDTO respondRfi(respondRfiRequestDTO)

This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration,
    RespondRfiRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let respondRfiRequestDTO: RespondRfiRequestDTO; //Respond to RFI Request

const { status, data } = await apiInstance.respondRfi(
    clientHashId,
    xRequestId,
    respondRfiRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **respondRfiRequestDTO** | **RespondRfiRequestDTO**| Respond to RFI Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**RespondRfiResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCorporateCustomer**
> UpdateCorporateKybResponseDTO updateCorporateCustomer(updateCorporateCustomerRequestDTO)

Update the details of a corporate customer. For more information, see [Corporate Customers](/docs/onboarding/corporate-customers).

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration,
    UpdateCorporateCustomerRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let updateCorporateCustomerRequestDTO: UpdateCorporateCustomerRequestDTO; //Update Corporate Customer Requests

const { status, data } = await apiInstance.updateCorporateCustomer(
    clientHashId,
    customerHashId,
    xRequestId,
    updateCorporateCustomerRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCorporateCustomerRequestDTO** | **UpdateCorporateCustomerRequestDTO**| Update Corporate Customer Requests | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**UpdateCorporateKybResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadKybDocuments**
> CorporateComplianceDocumentResponseDTO uploadKybDocuments(corporateComplianceDocumentRequestDTO)

This API allows you to upload document for corporate customers.

### Example

```typescript
import {
    CustomerAccountCorporateApi,
    Configuration,
    CorporateComplianceDocumentRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerAccountCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let corporateComplianceDocumentRequestDTO: CorporateComplianceDocumentRequestDTO; //Corporate Compliance Document Request

const { status, data } = await apiInstance.uploadKybDocuments(
    clientHashId,
    customerHashId,
    xRequestId,
    corporateComplianceDocumentRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **corporateComplianceDocumentRequestDTO** | **CorporateComplianceDocumentRequestDTO**| Corporate Compliance Document Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**CorporateComplianceDocumentResponseDTO**

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

