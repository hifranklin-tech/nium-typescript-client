# .CustomerWalletTransactionsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadTransactionReceipt**](CustomerWalletTransactionsApi.md#downloadTransactionReceipt) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Download Transaction Receipt
[**manageTransactionTags**](CustomerWalletTransactionsApi.md#manageTransactionTags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/tags | Manage Transaction Tags
[**transactionGeoTagging**](CustomerWalletTransactionsApi.md#transactionGeoTagging) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/location | Transaction Geo-Tagging
[**transactions**](CustomerWalletTransactionsApi.md#transactions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions | Transactions
[**updateBusinessTransactionFlag**](CustomerWalletTransactionsApi.md#updateBusinessTransactionFlag) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/business | Update Business Transaction Flag
[**uploadTransactionReceipt**](CustomerWalletTransactionsApi.md#uploadTransactionReceipt) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Upload Transaction Receipt


# **downloadTransactionReceipt**
> TransactionsReceiptDTO downloadTransactionReceipt()

This API allows you to download a receipt against each transaction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiDownloadTransactionReceiptRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
  transactionId: "transactionId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.downloadTransactionReceipt(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **transactionId** | [**string**] | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TransactionsReceiptDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
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

# **manageTransactionTags**
> TransactionClientTagsResponseDTO manageTransactionTags(transactionClientTagsRequestDTO)

This API allows you to add, update, and delete transaction tags.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiManageTransactionTagsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique transaction Identifier generated and shared before API handshake.
  transactionId: "transactionId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // TransactionClientTagsRequestDTO | tags
  transactionClientTagsRequestDTO: {
    tags: [
      {
        action: "MAINTAIN",
        key: "key_example",
        value: "value_example",
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.manageTransactionTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionClientTagsRequestDTO** | **TransactionClientTagsRequestDTO**| tags |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **transactionId** | [**string**] | Unique transaction Identifier generated and shared before API handshake. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**TransactionClientTagsResponseDTO**

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

# **transactionGeoTagging**
> WalletApiError transactionGeoTagging(transactionsLocationDTO)

This API allows you to update a transaction with merchant location.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiTransactionGeoTaggingRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
  transactionId: "transactionId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // TransactionsLocationDTO | transactionsLocationDTO
  transactionsLocationDTO: {
    merchantLatitude: "28.532094",
    merchantLongitude: "77.01632",
    merchantTaggedName: "STARBUCKS",
    merchantZoomIndex: "4",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.transactionGeoTagging(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionsLocationDTO** | **TransactionsLocationDTO**| transactionsLocationDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **transactionId** | [**string**] | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiError**

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

# **transactions**
> WalletTransactionsResponseDTO transactions()

This API allows you to fetch transaction details for a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiTransactionsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. (optional)
  authCode: "authCode_example",
  // string | This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). (optional)
  authCurrency: "authCurrency_example",
  // string | This parameter can filter the transactions based on businessTransaction flag. (optional)
  businessTransaction: "businessTransaction_example",
  // string | This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. (optional)
  cardHashId: "cardHashId_example",
  // string | This field contains the unique child customer identifier generated when new child customer created. (optional)
  childCustomerHashId: "childCustomerHashId_example",
  // string | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. (optional)
  endDate: "endDate_example",
  // string | This parameter can filter the transactions based on 4-digit Merchant Category Codes. (optional)
  mcc: "mcc_example",
  // string | This parameter describes the merchant\'s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. (optional)
  merchantCategories: "merchantCategories_example",
  // string | This parameter can filter the transactions based on the merchant city field. (optional)
  merchantCity: "merchantCity_example",
  // string | This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries. (optional)
  merchantCountries: "merchantCountries_example",
  // string | This parameter can filter the transactions based on the merchant country field. (optional)
  merchantCountry: "merchantCountry_example",
  // string | This parameter can filter the transactions based on the merchant name field. (optional)
  merchantName: "merchantName_example",
  // 'ASC' | 'DESC' | The sort order for the results. (optional)
  order: "DESC",
  // number | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional)
  page: 0,
  // string | This parameter can filter the transactions based on comma-separated paymentInstrumentHashId. (optional)
  paymentInstrumentHashId: "paymentInstrumentHashId_example",
  // string | The field indicates the response parameter used to sort paginated data, with \'createdAt\' as the default parameter. (optional)
  property: "property_example",
  // string | This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd. (optional)
  settlementDate: "settlementDate_example",
  // string | This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API. (optional)
  settlementStatus: "settlementStatus_example",
  // number | This will decide the number of elements per page. Typical values can be 1-20. (optional)
  size: 20,
  // string | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. (optional)
  startDate: "startDate_example",
  // 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED' | This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API. (optional)
  status: "NULL",
  // string | This parameter can be used to filter the transactions based on the systemReferenceNumber. (optional)
  systemReferenceNumber: "systemReferenceNumber_example",
  // string | This parameter can filter the transactions based on systemTraceAuditNumber. (optional)
  systemTraceAuditNumber: "systemTraceAuditNumber_example",
  // string | This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. (optional)
  tagKey: "tagKey_example",
  // string | This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter. (optional)
  tagValue: "tagValue_example",
  // string | This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). (optional)
  transactionCurrency: "transactionCurrency_example",
  // string | This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types). (optional)
  transactionType: "transactionType_example",
  // string | This parameter can filter the transactions based on transactionsLabelsKey. (optional)
  transactionsLabelsKey: "transactionsLabelsKey_example",
  // string | This parameter can filter the transactions based on transactionsLabelsValue. (optional)
  transactionsLabelsValue: "transactionsLabelsValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.transactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **authCode** | [**string**] | This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. | (optional) defaults to undefined
 **authCurrency** | [**string**] | This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). | (optional) defaults to undefined
 **businessTransaction** | [**string**] | This parameter can filter the transactions based on businessTransaction flag. | (optional) defaults to undefined
 **cardHashId** | [**string**] | This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined
 **childCustomerHashId** | [**string**] | This field contains the unique child customer identifier generated when new child customer created. | (optional) defaults to undefined
 **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | (optional) defaults to undefined
 **mcc** | [**string**] | This parameter can filter the transactions based on 4-digit Merchant Category Codes. | (optional) defaults to undefined
 **merchantCategories** | [**string**] | This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. | (optional) defaults to undefined
 **merchantCity** | [**string**] | This parameter can filter the transactions based on the merchant city field. | (optional) defaults to undefined
 **merchantCountries** | [**string**] | This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries. | (optional) defaults to undefined
 **merchantCountry** | [**string**] | This parameter can filter the transactions based on the merchant country field. | (optional) defaults to undefined
 **merchantName** | [**string**] | This parameter can filter the transactions based on the merchant name field. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | The sort order for the results. | (optional) defaults to undefined
 **page** | [**number**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined
 **paymentInstrumentHashId** | [**string**] | This parameter can filter the transactions based on comma-separated paymentInstrumentHashId. | (optional) defaults to undefined
 **property** | [**string**] | The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter. | (optional) defaults to undefined
 **settlementDate** | [**string**] | This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd. | (optional) defaults to undefined
 **settlementStatus** | [**string**] | This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API. | (optional) defaults to undefined
 **size** | [**number**] | This will decide the number of elements per page. Typical values can be 1-20. | (optional) defaults to undefined
 **startDate** | [**string**] | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. | (optional) defaults to undefined
 **status** | [**&#39;NULL&#39; | &#39;IN_PROGRESS&#39; | &#39;ACTION_REQUIRED&#39; | &#39;RFI_REQUESTED&#39; | &#39;RFI_RESPONDED&#39; | &#39;COMPLETED&#39; | &#39;ERROR&#39; | &#39;REJECT&#39; | &#39;EXPIRED&#39;**]**Array<&#39;NULL&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;ACTION_REQUIRED&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;RFI_RESPONDED&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;ERROR&#39; &#124; &#39;REJECT&#39; &#124; &#39;EXPIRED&#39;>** | This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API. | (optional) defaults to undefined
 **systemReferenceNumber** | [**string**] | This parameter can be used to filter the transactions based on the systemReferenceNumber. | (optional) defaults to undefined
 **systemTraceAuditNumber** | [**string**] | This parameter can filter the transactions based on systemTraceAuditNumber. | (optional) defaults to undefined
 **tagKey** | [**string**] | This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. | (optional) defaults to undefined
 **tagValue** | [**string**] | This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter. | (optional) defaults to undefined
 **transactionCurrency** | [**string**] | This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined
 **transactionType** | [**string**] | This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types). | (optional) defaults to undefined
 **transactionsLabelsKey** | [**string**] | This parameter can filter the transactions based on transactionsLabelsKey. | (optional) defaults to undefined
 **transactionsLabelsValue** | [**string**] | This parameter can filter the transactions based on transactionsLabelsValue. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletTransactionsResponseDTO**

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

# **updateBusinessTransactionFlag**
> WalletApiError updateBusinessTransactionFlag(transactionsBusinessDTO)

This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiUpdateBusinessTransactionFlagRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
  transactionId: "transactionId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // TransactionsBusinessDTO | transactionsBusinessDTO
  transactionsBusinessDTO: {
    businessTransaction: true,
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.updateBusinessTransactionFlag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionsBusinessDTO** | **TransactionsBusinessDTO**| transactionsBusinessDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **transactionId** | [**string**] | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiError**

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

# **uploadTransactionReceipt**
> WalletApiError uploadTransactionReceipt(transactionsReceiptDTO)

This API allows you to upload a receipt against each transaction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerWalletTransactionsApi(configuration);

let body:.CustomerWalletTransactionsApiUploadTransactionReceiptRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
  transactionId: "transactionId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // TransactionsReceiptDTO | transactionReceipt
  transactionsReceiptDTO: {
    document: "iVBORw0KGgoAAAANSUhEU...<Base64 Encoded Image or Document>",
    receiptFileName: "receipt_1.png",
    receiptType: "image/png",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.uploadTransactionReceipt(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionsReceiptDTO** | **TransactionsReceiptDTO**| transactionReceipt |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **transactionId** | [**string**] | Transaction Id is NIUM generated 36 character UUID which is unique, per transaction. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**WalletApiError**

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


