# RequestForInformationApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchRfiDetails**](#fetchrfidetails) | **GET** /api/v5/client/{clientHashId}/customer/{customerHashId}/rfis | Fetch RFI Details|
|[**fetchSingleRfi**](#fetchsinglerfi) | **GET** /api/v5/client/{clientHashId}/rfi/{rfiId} | Fetch Single RFI|
|[**respondToRfi**](#respondtorfi) | **POST** /api/v5/client/{clientHashId}/rfi/response | Respond to RFI|

# **fetchRfiDetails**
> RfiPageResponse fetchRfiDetails()

Returns a paginated list of RFIs for the given client and customer, filtered by entity and optional reference or status.

### Example

```typescript
import {
    RequestForInformationApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new RequestForInformationApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let rfiEntity: 'ONBOARDING' | 'TRANSACTION' | 'ICC_RECON' | 'USER_ONBOARDING'; //RFI entity type. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let rfiEntityReferenceId: string; //Optional reference id on the RFI entity. (optional) (default to undefined)
let externalReferenceId: string; //Optional external reference id. (optional) (default to undefined)
let status: 'Approved' | 'Declined' | 'Blocked' | 'Pending' | 'InProgress' | 'Rejected' | 'AwaitingFunds' | 'Expired' | 'Cancelled' | 'Scheduled'; //Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. (optional) (default to undefined)
let page: string; //This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional) (default to undefined)
let size: number; //The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. (optional) (default to 20)

const { status, data } = await apiInstance.fetchRfiDetails(
    clientHashId,
    customerHashId,
    rfiEntity,
    xRequestId,
    rfiEntityReferenceId,
    externalReferenceId,
    status,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **rfiEntity** | [**&#39;ONBOARDING&#39; | &#39;TRANSACTION&#39; | &#39;ICC_RECON&#39; | &#39;USER_ONBOARDING&#39;**]**Array<&#39;ONBOARDING&#39; &#124; &#39;TRANSACTION&#39; &#124; &#39;ICC_RECON&#39; &#124; &#39;USER_ONBOARDING&#39;>** | RFI entity type. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **rfiEntityReferenceId** | [**string**] | Optional reference id on the RFI entity. | (optional) defaults to undefined|
| **externalReferenceId** | [**string**] | Optional external reference id. | (optional) defaults to undefined|
| **status** | [**&#39;Approved&#39; | &#39;Declined&#39; | &#39;Blocked&#39; | &#39;Pending&#39; | &#39;InProgress&#39; | &#39;Rejected&#39; | &#39;AwaitingFunds&#39; | &#39;Expired&#39; | &#39;Cancelled&#39; | &#39;Scheduled&#39;**]**Array<&#39;Approved&#39; &#124; &#39;Declined&#39; &#124; &#39;Blocked&#39; &#124; &#39;Pending&#39; &#124; &#39;InProgress&#39; &#124; &#39;Rejected&#39; &#124; &#39;AwaitingFunds&#39; &#124; &#39;Expired&#39; &#124; &#39;Cancelled&#39; &#124; &#39;Scheduled&#39;>** | Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. | (optional) defaults to undefined|
| **page** | [**string**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined|
| **size** | [**number**] | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. | (optional) defaults to 20|


### Return type

**RfiPageResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchSingleRfi**
> RfiDetailsDto fetchSingleRfi()

Returns full details for one RFI by its rfiId (UUID).

### Example

```typescript
import {
    RequestForInformationApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new RequestForInformationApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let rfiId: string; //Unique RFI identifier (UUID). (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.fetchSingleRfi(
    clientHashId,
    rfiId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **rfiId** | [**string**] | Unique RFI identifier (UUID). | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**RfiDetailsDto**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respondToRfi**
> RfiResponseBatchResponse respondToRfi(rfiOneServiceRfiResponseRequest)

Submits one or more RFI responses in sequence. Each item must include either a typed response payload or a cannotRespondReason in the response field.

### Example

```typescript
import {
    RequestForInformationApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new RequestForInformationApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let rfiOneServiceRfiResponseRequest: Array<RfiOneServiceRfiResponseRequest>; //JSON array of RFI response requests, processed in order. Each item is identified by rfiId and must include a response that is either a typed payload or a cannotRespondReason.

const { status, data } = await apiInstance.respondToRfi(
    clientHashId,
    xRequestId,
    rfiOneServiceRfiResponseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rfiOneServiceRfiResponseRequest** | **Array<RfiOneServiceRfiResponseRequest>**| JSON array of RFI response requests, processed in order. Each item is identified by rfiId and must include a response that is either a typed payload or a cannotRespondReason. | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**RfiResponseBatchResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

