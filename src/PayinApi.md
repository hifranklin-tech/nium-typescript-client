# .PayinApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simulateFundingInstrumentStatusUpdate**](PayinApi.md#simulateFundingInstrumentStatusUpdate) | **POST** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/updateStatus | Simulate Funding Instrument Status Update (Sandbox Testing)
[**simulatereceivepayment**](PayinApi.md#simulatereceivepayment) | **POST** /api/v1/inward/payment/manual | Simulate Receive Transaction


# **simulateFundingInstrumentStatusUpdate**
> void simulateFundingInstrumentStatusUpdate(fundingInstrumentStatusUpdateRequestDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayinApi(configuration);

let body:.PayinApiSimulateFundingInstrumentStatusUpdateRequest = {
  // string | clientHashId
  clientHashId: "clientHashId_example",
  // string | customerHashId
  customerHashId: "customerHashId_example",
  // string | fundingInstrumentId
  fundingInstrumentId: "fundingInstrumentId_example",
  // FundingInstrumentStatusUpdateRequestDTO | fundingInstrumentStatusUpdateRequestDTO
  fundingInstrumentStatusUpdateRequestDTO: {
    action: "MICRODEPOSIT_REVERSED",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.simulateFundingInstrumentStatusUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fundingInstrumentStatusUpdateRequestDTO** | **FundingInstrumentStatusUpdateRequestDTO**| fundingInstrumentStatusUpdateRequestDTO |
 **clientHashId** | [**string**] | clientHashId | defaults to undefined
 **customerHashId** | [**string**] | customerHashId | defaults to undefined
 **fundingInstrumentId** | [**string**] | fundingInstrumentId | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**void**

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

# **simulatereceivepayment**
> PayinApiResponse2 simulatereceivepayment(inwardPaymentManualRequestDTO)

This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayinApi(configuration);

let body:.PayinApiSimulatereceivepaymentRequest = {
  // InwardPaymentManualRequestDTO | inwardPaymentManualRequestDTO
  inwardPaymentManualRequestDTO: {
    additionalInfo: {
      "key": "key_example",
    },
    amount: 10,
    bankReferenceNumber: "712347512376",
    bankSource: "DBS_SG",
    country: "SG",
    currency: "SGD",
    iccExpiry: "2023-07-05 07:26:38.026",
    instructionType: "PROCESS",
    narrative: "FROM NIUM",
    remitterAccountNumber: "HLFX11029100808072",
    remitterBankCode: "BYLADEM1KUB",
    remitterBankName: "DBS_SG",
    remitterName: "John K",
    remitterNameLocalLanguage: "エム・エス・シャーマー",
    transactionId: "FW242141",
    transactionSource: "ACH",
    type: "CREDIT or DEBIT",
    virtualAccountNumber: "907654315445678",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.simulatereceivepayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inwardPaymentManualRequestDTO** | **InwardPaymentManualRequestDTO**| inwardPaymentManualRequestDTO |
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PayinApiResponse2**

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


