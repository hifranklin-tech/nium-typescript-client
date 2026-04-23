# ReportsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadReport**](#downloadreport) | **GET** /api/v1/client/{clientHashId}/report/{reportRequestId}/download | Download generated report|
|[**generateReport**](#generatereport) | **POST** /api/v1/client/{clientHashId}/report | Initiate report generation|

# **downloadReport**
> File downloadReport()

Downloads a previously generated report or account statement using the report request identifier.

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let clientHashId: string; //Unique client identifier (default to undefined)
let reportRequestId: string; //Unique identifier of the generated report. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.downloadReport(
    clientHashId,
    reportRequestId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier | defaults to undefined|
| **reportRequestId** | [**string**] | Unique identifier of the generated report. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Report downloaded successfully. |  * Content-Disposition - Indicates whether the content is displayed inline or downloaded as an attachment. <br>  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateReport**
> ReportGenerationResponse generateReport(reportGenerationRequest)

Initiates asynchronous generation of a report or account statement. A unique report request identifier is returned. Once processing completes (success or failure), a webhook notification will be sent to the client’s registered webhook endpoint.

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    ReportGenerationRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let clientHashId: string; //Unique client identifier (default to undefined)
let reportGenerationRequest: ReportGenerationRequest; //
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.generateReport(
    clientHashId,
    reportGenerationRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportGenerationRequest** | **ReportGenerationRequest**|  | |
| **clientHashId** | [**string**] | Unique client identifier | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|


### Return type

**ReportGenerationResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Report generation request accepted. |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

