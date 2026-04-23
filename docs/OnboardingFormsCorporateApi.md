# OnboardingFormsCorporateApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getApplicationDetails**](#getapplicationdetails) | **GET** /api/v1/client/{clientHashId}/application/{applicationId} | Fetch Application Details|
|[**onboardingFormLink**](#onboardingformlink) | **POST** /api/v1/client/{clientHashId}/applications | Create Application for Onboarding Form|
|[**regenerateURL**](#regenerateurl) | **GET** /api/v1/client/{clientHashId}/applications/{applicationId}/regenerateURL | Regenerate Onboarding Form URL|

# **getApplicationDetails**
> OnboardingApplicationProgressResponse getApplicationDetails()

Retrieve the details of a given application onboarded using an onboarding form.

### Example

```typescript
import {
    OnboardingFormsCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new OnboardingFormsCorporateApi(configuration);

let applicationId: string; //Application ID generated for the customer. (default to undefined)
let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getApplicationDetails(
    applicationId,
    clientHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] | Application ID generated for the customer. | defaults to undefined|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**OnboardingApplicationProgressResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Application Progress Fetched Successfully |  -  |
|**400** | The detailed error code associated with HTTP status 400.   - &#x60;invalid_client_hash_id&#x60;: Provided &#x60;clienthashId&#x60; is invalid or doesn\&#39;t exist.   - &#x60;invalid_application_id&#x60;: Provided applicationId is invalid or doesn\&#39;\&#39;t exist. |  -  |
|**401** | Unauthorized request |  -  |
|**403** | Forbidden access |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **onboardingFormLink**
> GenerateLinkResponse onboardingFormLink(generateLinkRequest)

Create an application and generate links for customers to access onboarding forms. For more information, see [Onboarding Forms](/docs/onboarding-forms).

### Example

```typescript
import {
    OnboardingFormsCorporateApi,
    Configuration,
    GenerateLinkRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new OnboardingFormsCorporateApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let generateLinkRequest: GenerateLinkRequest; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.onboardingFormLink(
    clientHashId,
    generateLinkRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateLinkRequest** | **GenerateLinkRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**GenerateLinkResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved link |  -  |
|**400** | The detailed error code associated with HTTP status 400.   - &#x60;invalid_request&#x60;: Input fields contain invalid data.   - &#x60;invalid_client_hash_id&#x60;: Provided &#x60;clientHashId&#x60; is invalid or doesn\&#39;t exist.   - &#x60;customer_already_exist&#x60;: Customer already onboarded with the given &#x60;businessName&#x60; and &#x60;businessRegistrationNumber&#x60;.   - &#x60;application_already_exists&#x60;: Application already exists with the given &#x60;businessName&#x60; and &#x60;businessRegistrationNumber&#x60;. |  -  |
|**401** | Unauthorized request |  -  |
|**403** | Forbidden access |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **regenerateURL**
> GenerateLinkResponse regenerateURL()

Generates a link for the customer to the onboarding form if the previous link expires.

### Example

```typescript
import {
    OnboardingFormsCorporateApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new OnboardingFormsCorporateApi(configuration);

let applicationId: string; //Application ID returned in response while creating an application. resource. (default to undefined)
let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.regenerateURL(
    applicationId,
    clientHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] | Application ID returned in response while creating an application. resource. | defaults to undefined|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**GenerateLinkResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful regeneration of URL |  -  |
|**400** | The detailed error code associated with HTTP status 400.   - &#x60;invalid_client_hash_id&#x60;: Provided client hash id is invalid or doesn\&#39;t exist.   - &#x60;invalid_application_id&#x60;: Provided &#x60;applicationID&#x60; is invalid or doesn\&#39;t exist. |  -  |
|**401** | Bad request, invalid input |  -  |
|**403** | Forbidden access |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

