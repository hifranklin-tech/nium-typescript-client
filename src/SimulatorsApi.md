# .SimulatorsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simulateAuthorization**](SimulatorsApi.md#simulateAuthorization) | **POST** /api/v1/txn | Simulate Authorize Card Transaction
[**simulateClearing**](SimulatorsApi.md#simulateClearing) | **POST** /api/v1/settlement/run | Simulate Settlement Transaction


# **simulateAuthorization**
> void | LocalIsoResponse simulateAuthorization(localIsoRequest)

This API is used to simulate the `Authorize` or `Authorization` card transaction type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SimulatorsApi(configuration);

let body:.SimulatorsApiSimulateAuthorizationRequest = {
  // LocalIsoRequest | message
  localIsoRequest: {
    acceptorId42: "acceptorId42_example",
    acceptorNameLocation43: "acceptorNameLocation43_example",
    acceptorTerminalId41: "acceptorTerminalId41_example",
    aiCountryCode19: "702",
    aiIdentityCode32: "aiIdentityCode32_example",
    authorizationCode38: "authorizationCode38_example",
    billingAmount6: "000000000100",
    billingAmountFee30: "billingAmountFee30_example",
    billingAmountFee8: "billingAmountFee8_example",
    billingConversionRate10: "billingConversionRate10_example",
    billingCurrencyCode51: "840",
    captureDateYYMM17: "2411",
    cardSequenceNumber23: "cardSequenceNumber23_example",
    conversionDateYYMM16: "2411",
    expiryDateYYMM14: "2411",
    fiCountryCode21: "702",
    fiIdentityCode33: "fiIdentityCode33_example",
    localDate13: "localDate13_example",
    localTime12: "localTime12_example",
    merchantType18: "4563",
    messageType0: "0100",
    mid62: "mid62_example",
    miscData58: "miscData58_example",
    networkInternationalId24: "networkInternationalId24_example",
    originalDataElement90: "originalDataElement90_example",
    pan2: "4611350118036518",
    posConditionCode25: "07",
    posEntryCapabilityCode60: "05",
    posEntryMode22: "1020",
    posPinCaptureCode26: "posPinCaptureCode26_example",
    processingCode3: "000000",
    replacementAmount95: "replacementAmount95_example",
    responseCode39: "responseCode39_example",
    rrn: "rrn_example",
    settlementAmount5: "settlementAmount5_example",
    settlementAmountFee29: "settlementAmountFee29_example",
    settlementConversionRate9: "settlementConversionRate9_example",
    settlementCurrencyCode50: "702",
    settlementDateYYMM15: "2411",
    settlementProcessingAmountFee31: "settlementProcessingAmountFee31_example",
    stan: "stan_example",
    traceIdentifier115: "traceIdentifier115_example",
    track2Data35: "track2Data35_example",
    transactionAmount4: "000000000100",
    transactionAmountFee28: "transactionAmountFee28_example",
    transactionCurrencyCode49: "702",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.simulateAuthorization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **localIsoRequest** | **LocalIsoRequest**| message |
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**void | LocalIsoResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simulateClearing**
> void | string simulateClearing(settlementRequestDTO)

This API can be used to run simulation of a given settlement transaction

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SimulatorsApi(configuration);

let body:.SimulatorsApiSimulateClearingRequest = {
  // SettlementRequestDTO | settlementRequestDTO
  settlementRequestDTO: {
    authorizationCode: "NUF5L7",
    billingAmount: 10,
    billingCurrency: "SGD",
    cardHashId: "4b500a79-9386-4b50-a1e1-7299f6bfa131",
    cardNumber: "4611350100002726",
    clientHashId: "dcfe0a79-9bj6-f6bf-78e1-7ab9f89fa1fl",
    clientId: 1234,
    customerHashId: "d9386a79-7n86-6750-b1c1-0299h4bfa196",
    exchangeRate: "1.32",
    labels: {
      acquirerExemptionReason: "acquirerExemptionReason_example",
      acsOutcome: "acsOutcome_example",
      ecommerceIndicator: "ecommerceIndicator_example",
      multiClearingSequenceInd: "multiClearingSequenceInd_example",
      recurringTransactionIndicator: "recurringTransactionIndicator_example",
      scaIndicator: "scaIndicator_example",
      scaReasonIndicator: "scaReasonIndicator_example",
    },
    logoId: "001",
    logoIdentifier: "100",
    maskCardNumber: "4573-75xx-xxxx-0149",
    merchantCategoryCode: "3799",
    merchantCountryCode: "AUS",
    merchantId: "23995053",
    merchantNameLocation: "COCA-COLA AMATIL         BRISBANE AIRPSG",
    originalAuthorizationCode: "NUF5L7",
    posEntryMode: "1020",
    settlementDate: "20210419",
    settlementId: 1234,
    subBin: "NUC01020",
    tokenNumber: "0004611350190078050",
    tokenRequesterId: "40010030273",
    transactionAmount: 10,
    transactionCurrency: "SGD",
    transactionType: "C",
    visaTransactionId: "019164261950302",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.simulateClearing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settlementRequestDTO** | **SettlementRequestDTO**| settlementRequestDTO |
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**void | string**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


