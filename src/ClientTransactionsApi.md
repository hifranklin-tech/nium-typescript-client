# .ClientTransactionsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientTransactions**](ClientTransactionsApi.md#clientTransactions) | **GET** /api/v1/client/{clientHashId}/transactions | Client Transactions


# **clientTransactions**
> ClientTransactionsResponseDTO clientTransactions()

This API allows you to fetch transaction details at the client level.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClientTransactionsApi(configuration);

let body:.ClientTransactionsApiClientTransactionsRequest = {
  // string | Unique client identifier generated and shared before API handshake. >ℹ️ INFO  >Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned.
  clientHashId: "{{clientHashId}}",
  // string | This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. (optional)
  authCode: "authCode_example",
  // string | This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). (optional)
  authCurrency: "authCurrency_example",
  // boolean | This parameter can filter the transactions based on businessTransaction flag. (optional)
  businessTransaction: true,
  // string | This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. (optional)
  cardHashId: "cardHashId_example",
  // string | This field contains the unique child customer identifier generated when new child customer created. (optional)
  childCustomerHashId: "childCustomerHashId_example",
  // string | Unique identifier generated with customer creation. (optional)
  customerHashId: "customerHashId_example",
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
  // string | Unique wallet identifier generated simultaneously with customer creation. (optional)
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.clientTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned. | defaults to undefined
 **authCode** | [**string**] | This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. | (optional) defaults to undefined
 **authCurrency** | [**string**] | This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). | (optional) defaults to undefined
 **businessTransaction** | [**boolean**] | This parameter can filter the transactions based on businessTransaction flag. | (optional) defaults to undefined
 **cardHashId** | [**string**] | This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined
 **childCustomerHashId** | [**string**] | This field contains the unique child customer identifier generated when new child customer created. | (optional) defaults to undefined
 **customerHashId** | [**string**] | Unique identifier generated with customer creation. | (optional) defaults to undefined
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
 **systemTraceAuditNumber** | [**string**] | This parameter can filter the transactions based on systemTraceAuditNumber. | (optional) defaults to undefined
 **tagKey** | [**string**] | This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. | (optional) defaults to undefined
 **tagValue** | [**string**] | This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter. | (optional) defaults to undefined
 **transactionCurrency** | [**string**] | This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined
 **transactionType** | [**string**] | This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types). | (optional) defaults to undefined
 **transactionsLabelsKey** | [**string**] | This parameter can filter the transactions based on transactionsLabelsKey. | (optional) defaults to undefined
 **transactionsLabelsValue** | [**string**] | This parameter can filter the transactions based on transactionsLabelsValue. | (optional) defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ClientTransactionsResponseDTO**

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


