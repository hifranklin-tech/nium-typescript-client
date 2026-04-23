# FilesApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFileDocContext1**](#createfiledoccontext1) | **POST** /api/v1/client/{clientHashId}/files | Create a File|
|[**fetchFileMetadataDocContext1**](#fetchfilemetadatadoccontext1) | **GET** /api/v1/client/{clientHashId}/files/{fileId} | Fetch File Details|

# **createFileDocContext1**
> FileCreationResponse createFileDocContext1()

Creates a `file` resource.

### Example

```typescript
import {
    FilesApi,
    Configuration,
    FileCreationRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let clientHashId: string; // (default to undefined)
let xApiKey: string; // (optional) (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (optional) (default to undefined)
let xNformifyOnboarding: string; // (optional) (default to undefined)
let metadata: FileCreationRequest; // (optional) (default to undefined)
let file: File; //The file to upload (required) (optional) (default to undefined)

const { status, data } = await apiInstance.createFileDocContext1(
    clientHashId,
    xApiKey,
    xRequestId,
    xNformifyOnboarding,
    metadata,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] |  | defaults to undefined|
| **xApiKey** | [**string**] |  | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined|
| **xNformifyOnboarding** | [**string**] |  | (optional) defaults to undefined|
| **metadata** | **FileCreationRequest** |  | (optional) defaults to undefined|
| **file** | [**File**] | The file to upload (required) | (optional) defaults to undefined|


### Return type

**FileCreationResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchFileMetadataDocContext1**
> FileMetadata fetchFileMetadataDocContext1()

Fetch the metadata of a specific `file`.

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let clientHashId: string; // (default to undefined)
let fileId: string; // (default to undefined)
let xApiKey: string; // (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)
let xNformifyOnboarding: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.fetchFileMetadataDocContext1(
    clientHashId,
    fileId,
    xApiKey,
    xRequestId,
    xNformifyOnboarding
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] |  | defaults to undefined|
| **fileId** | [**string**] |  | defaults to undefined|
| **xApiKey** | [**string**] |  | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|
| **xNformifyOnboarding** | [**string**] |  | (optional) defaults to undefined|


### Return type

**FileMetadata**

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
|**403** | Forbidden |  -  |
|**404** | File not found |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

