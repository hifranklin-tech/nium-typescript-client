# .CustomerFeesApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargeFee**](CustomerFeesApi.md#chargeFee) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fees | Charge Fee


# **chargeFee**
> CustomFeeResponseDTO chargeFee(customFeeRequestDTO)

This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerFeesApi(configuration);

let body:.CustomerFeesApiChargeFeeRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // CustomFeeRequestDTO | customFeeRequestDTO
  customFeeRequestDTO: {
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    amount: 50,
    comments: "Custom fee comments",
    currency: "SGD",
    feeName: "monthlyCharge_May-2022",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.chargeFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFeeRequestDTO** | **CustomFeeRequestDTO**| customFeeRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomFeeResponseDTO**

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


