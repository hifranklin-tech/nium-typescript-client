# ClientTransactionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clientTransactions**](#clienttransactions) | **GET** /api/v1/client/{clientHashId}/transactions | Client Transactions|

# **clientTransactions**
> ClientTransactionsResponseDTO clientTransactions()

This API allows you to fetch transaction details at the client level.

### Example

```typescript
import {
    ClientTransactionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. >ℹ️ INFO  >Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned. (default to undefined)
let startDate: string; //From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. (optional) (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. (optional) (default to undefined)
let page: string; //This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional) (default to undefined)
let size: string; //This will decide the number of elements per page. Typical values can be 1-20. (optional) (default to undefined)
let order: 'ASC' | 'DESC'; //The sort order for the results. (optional) (default to undefined)
let authCode: string; //This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. (optional) (default to undefined)
let customerHashId: string; //Unique identifier generated with customer creation. (optional) (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (optional) (default to undefined)
let systemTraceAuditNumber: string; //This parameter can filter the transactions based on systemTraceAuditNumber. (optional) (default to undefined)
let transactionType: string; //The transaction can be one of the complete list of transactions mentioned in [Transaction Types](https://docs.nium.com/apis/docs/transaction-types). (optional) (default to undefined)
let status: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED'; //This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API. (optional) (default to undefined)
let complianceStatus: 'CLEAR' | 'PENDING' | 'RFI_REQUESTED' | 'REJECT'; //This parameter can filter the transactions based on complianceStatus. The detailed list of possible values is available in the response of this API. (optional) (default to undefined)
let authCurrency: string; //This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). (optional) (default to undefined)
let mcc: string; //This parameter can filter the transactions based on 4-digit Merchant Category Codes. (optional) (default to undefined)
let merchantName: string; //This parameter can filter the transactions based on the merchant name field. (optional) (default to undefined)
let merchantCity: string; //This parameter can filter the transactions based on the merchant city field. (optional) (default to undefined)
let merchantCountry: string; //This parameter can filter the transactions based on the merchant country field. (optional) (default to undefined)
let transactionCurrency: string; //The 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). (optional) (default to undefined)
let merchantCategories: string; //This parameter describes the merchant\'s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. (optional) (default to undefined)
let merchantCountries: string; //This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries. (optional) (default to undefined)
let cardHashId: string; //This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. (optional) (default to undefined)
let paymentInstrumentHashId: string; //This parameter can filter the transactions based on comma-separated paymentInstrumentHashId. (optional) (default to undefined)
let businessTransaction: string; //This parameter can filter the transactions based on businessTransaction flag. (optional) (default to undefined)
let settlementDate: string; //This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd. (optional) (default to undefined)
let transactionsLabelsKey: string; //This parameter can filter the transactions based on transactionsLabelsKey. (optional) (default to undefined)
let transactionsLabelsValue: string; //This parameter can filter the transactions based on transactionsLabelsValue. (optional) (default to undefined)
let tagKey: string; //This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. (optional) (default to undefined)
let tagValue: string; //This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter. (optional) (default to undefined)
let property: string; //The field indicates the response parameter used to sort paginated data, with \'createdAt\' as the default parameter. (optional) (default to undefined)
let childCustomerHashId: string; //The unique child customer identifier that\'s created when a new child customer is created. (optional) (default to undefined)
let settlementStatus: string; //This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API. (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.clientTransactions(
    clientHashId,
    startDate,
    endDate,
    page,
    size,
    order,
    authCode,
    customerHashId,
    walletHashId,
    systemTraceAuditNumber,
    transactionType,
    status,
    complianceStatus,
    authCurrency,
    mcc,
    merchantName,
    merchantCity,
    merchantCountry,
    transactionCurrency,
    merchantCategories,
    merchantCountries,
    cardHashId,
    paymentInstrumentHashId,
    businessTransaction,
    settlementDate,
    transactionsLabelsKey,
    transactionsLabelsValue,
    tagKey,
    tagValue,
    property,
    childCustomerHashId,
    settlementStatus,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned. | defaults to undefined|
| **startDate** | [**string**] | From date for fetching the transaction details. The format for startDate is YYYY-MM-DD. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | (optional) defaults to undefined|
| **page** | [**string**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined|
| **size** | [**string**] | This will decide the number of elements per page. Typical values can be 1-20. | (optional) defaults to undefined|
| **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | The sort order for the results. | (optional) defaults to undefined|
| **authCode** | [**string**] | This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value. | (optional) defaults to undefined|
| **customerHashId** | [**string**] | Unique identifier generated with customer creation. | (optional) defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | (optional) defaults to undefined|
| **systemTraceAuditNumber** | [**string**] | This parameter can filter the transactions based on systemTraceAuditNumber. | (optional) defaults to undefined|
| **transactionType** | [**string**] | The transaction can be one of the complete list of transactions mentioned in [Transaction Types](https://docs.nium.com/apis/docs/transaction-types). | (optional) defaults to undefined|
| **status** | [**&#39;NULL&#39; | &#39;IN_PROGRESS&#39; | &#39;ACTION_REQUIRED&#39; | &#39;RFI_REQUESTED&#39; | &#39;RFI_RESPONDED&#39; | &#39;COMPLETED&#39; | &#39;ERROR&#39; | &#39;REJECT&#39; | &#39;EXPIRED&#39;**]**Array<&#39;NULL&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;ACTION_REQUIRED&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;RFI_RESPONDED&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;ERROR&#39; &#124; &#39;REJECT&#39; &#124; &#39;EXPIRED&#39;>** | This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API. | (optional) defaults to undefined|
| **complianceStatus** | [**&#39;CLEAR&#39; | &#39;PENDING&#39; | &#39;RFI_REQUESTED&#39; | &#39;REJECT&#39;**]**Array<&#39;CLEAR&#39; &#124; &#39;PENDING&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;REJECT&#39;>** | This parameter can filter the transactions based on complianceStatus. The detailed list of possible values is available in the response of this API. | (optional) defaults to undefined|
| **authCurrency** | [**string**] | This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). | (optional) defaults to undefined|
| **mcc** | [**string**] | This parameter can filter the transactions based on 4-digit Merchant Category Codes. | (optional) defaults to undefined|
| **merchantName** | [**string**] | This parameter can filter the transactions based on the merchant name field. | (optional) defaults to undefined|
| **merchantCity** | [**string**] | This parameter can filter the transactions based on the merchant city field. | (optional) defaults to undefined|
| **merchantCountry** | [**string**] | This parameter can filter the transactions based on the merchant country field. | (optional) defaults to undefined|
| **transactionCurrency** | [**string**] | The 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined|
| **merchantCategories** | [**string**] | This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. | (optional) defaults to undefined|
| **merchantCountries** | [**string**] | This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries. | (optional) defaults to undefined|
| **cardHashId** | [**string**] | This field can apply the filter based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined|
| **paymentInstrumentHashId** | [**string**] | This parameter can filter the transactions based on comma-separated paymentInstrumentHashId. | (optional) defaults to undefined|
| **businessTransaction** | [**string**] | This parameter can filter the transactions based on businessTransaction flag. | (optional) defaults to undefined|
| **settlementDate** | [**string**] | This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd. | (optional) defaults to undefined|
| **transactionsLabelsKey** | [**string**] | This parameter can filter the transactions based on transactionsLabelsKey. | (optional) defaults to undefined|
| **transactionsLabelsValue** | [**string**] | This parameter can filter the transactions based on transactionsLabelsValue. | (optional) defaults to undefined|
| **tagKey** | [**string**] | This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. | (optional) defaults to undefined|
| **tagValue** | [**string**] | This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter. | (optional) defaults to undefined|
| **property** | [**string**] | The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter. | (optional) defaults to undefined|
| **childCustomerHashId** | [**string**] | The unique child customer identifier that\&#39;s created when a new child customer is created. | (optional) defaults to undefined|
| **settlementStatus** | [**string**] | This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ClientTransactionsResponseDTO**

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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

