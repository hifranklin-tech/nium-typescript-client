# .CustomerTermsAndConditionsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptTermsandConditions**](CustomerTermsAndConditionsApi.md#acceptTermsandConditions) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/termsAndConditions | Accept Terms and Conditions
[**termsandConditions**](CustomerTermsAndConditionsApi.md#termsandConditions) | **GET** /api/v1/client/{clientHashId}/termsAndConditions | Terms and Conditions


# **acceptTermsandConditions**
> TermsAndConditionsAcceptResponseDTO acceptTermsandConditions(termsAndConditionsRequestDTO)

This API updates the Terms and Conditions acceptance status for a customer

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerTermsAndConditionsApi(configuration);

let body:.CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // TermsAndConditionsRequestDTO | termsAndConditionsRequestDTO
  termsAndConditionsRequestDTO: {
    accept: true,
    name: "GENERALTNC",
    versionId: "1.0",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.acceptTermsandConditions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **termsAndConditionsRequestDTO** | **TermsAndConditionsRequestDTO**| termsAndConditionsRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TermsAndConditionsAcceptResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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

# **termsandConditions**
> TermsAndConditionsResponseDTO termsandConditions()

This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerTermsAndConditionsApi(configuration);

let body:.CustomerTermsAndConditionsApiTermsandConditionsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.termsandConditions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TermsAndConditionsResponseDTO**

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


