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

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let startDate: string; //The beginning date to start fetching transaction details. The format for `startDate` is YYYY-MM-DD. (optional) (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for `endDate` is YYYY-MM-DD. (optional) (default to undefined)
let page: string; //This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional) (default to undefined)
let size: number; //The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. (optional) (default to 20)
let order: string; //The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. (optional) (default to 'DESC')
let authCode: string; //Filter transactions based on the authorization code. For fund wallet transactions, provide the systemReferenceNumber as value. (optional) (default to undefined)
let customerHashId: string; //The unique customer identifier generated on customer creation. (optional) (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (optional) (default to undefined)
let systemTraceAuditNumber: string; //Filter transactions based on systemTraceAuditNumber. (optional) (default to undefined)
let transactionType: string; //Filter transactions based on the `transactionType`. A detailed list of the transaction types available can be found at [Transaction Types](/apis/docs/transactions). (optional) (default to undefined)
let status: 'Approved' | 'Declined' | 'Blocked' | 'Pending' | 'InProgress' | 'Rejected' | 'AwaitingFunds' | 'Expired' | 'Cancelled' | 'Scheduled'; //Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. (optional) (default to undefined)
let complianceStatus: 'CLEAR' | 'PENDING' | 'RFI_REQUESTED' | 'REJECT'; //Filter transactions based on complianceStatus. (optional) (default to undefined)
let authCurrency: string; //Filter transactions based on auth currency. Accepts a 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). (optional) (default to undefined)
let mcc: string; //Filter transactions based on the 4-digit Merchant Category Code used during the transaction. (optional) (default to undefined)
let merchantName: string; //Filter transactions based on the merchant name field. (optional) (default to undefined)
let merchantCity: string; //Filter transactions based on the merchant city field. (optional) (default to undefined)
let merchantCountry: string; //Filter transactions based on the merchant country field. (optional) (default to undefined)
let transactionCurrency: string; //Filter transactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). (optional) (default to undefined)
let merchantCategories: string; //Filter transactions based on the merchant\'s type of business (Merchant Category Code / MCC), e.g. Airlines, Restaurants. (optional) (default to undefined)
let merchantCountries: string; //Filter transactions based on a comma-separated list of 2-letter ISO merchant country codes. (optional) (default to undefined)
let cardHashId: string; //Filter based on the unique card identifier generated during new/add-on card issuance. (optional) (default to undefined)
let paymentInstrumentHashId: string; //Filter transactions based on comma-separated paymentInstrumentHashId. (optional) (default to undefined)
let businessTransaction: string; //Filter transactions based on businessTransaction flag. (optional) (default to undefined)
let settlementDate: string; //Filter transactions based on the settlement date of the transaction in format yyyyMMdd. (optional) (default to undefined)
let transactionsLabelsKey: string; //Filter transactions based on transactionsLabelsKey. (optional) (default to undefined)
let transactionsLabelsValue: string; //Filter transactions based on transactionsLabelsValue. (optional) (default to undefined)
let tagKey: string; //Filter transactions based on the exact value of tagKey defined against transactions. Can be used as an independent search parameter. (optional) (default to undefined)
let tagValue: string; //Filter transactions based on the approximating value of tagValue mapped for a tagKey defined against transactions. Can be used as an independent search parameter. (optional) (default to undefined)
let property: string; //The response parameter used to sort paginated data, with \'createdAt\' as the default parameter. (optional) (default to undefined)
let childCustomerHashId: string; //The unique child customer identifier created when a new child customer is created. (optional) (default to undefined)
let settlementStatus: string; //Filter transactions based on settlement status. (optional) (default to undefined)

const { status, data } = await apiInstance.clientTransactions(
    clientHashId,
    xRequestId,
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
    settlementStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **startDate** | [**string**] | The beginning date to start fetching transaction details. The format for &#x60;startDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for &#x60;endDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **page** | [**string**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined|
| **size** | [**number**] | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. | (optional) defaults to 20|
| **order** | [**string**] | The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. | (optional) defaults to 'DESC'|
| **authCode** | [**string**] | Filter transactions based on the authorization code. For fund wallet transactions, provide the systemReferenceNumber as value. | (optional) defaults to undefined|
| **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | (optional) defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | (optional) defaults to undefined|
| **systemTraceAuditNumber** | [**string**] | Filter transactions based on systemTraceAuditNumber. | (optional) defaults to undefined|
| **transactionType** | [**string**] | Filter transactions based on the &#x60;transactionType&#x60;. A detailed list of the transaction types available can be found at [Transaction Types](/apis/docs/transactions). | (optional) defaults to undefined|
| **status** | [**&#39;Approved&#39; | &#39;Declined&#39; | &#39;Blocked&#39; | &#39;Pending&#39; | &#39;InProgress&#39; | &#39;Rejected&#39; | &#39;AwaitingFunds&#39; | &#39;Expired&#39; | &#39;Cancelled&#39; | &#39;Scheduled&#39;**]**Array<&#39;Approved&#39; &#124; &#39;Declined&#39; &#124; &#39;Blocked&#39; &#124; &#39;Pending&#39; &#124; &#39;InProgress&#39; &#124; &#39;Rejected&#39; &#124; &#39;AwaitingFunds&#39; &#124; &#39;Expired&#39; &#124; &#39;Cancelled&#39; &#124; &#39;Scheduled&#39;>** | Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. | (optional) defaults to undefined|
| **complianceStatus** | [**&#39;CLEAR&#39; | &#39;PENDING&#39; | &#39;RFI_REQUESTED&#39; | &#39;REJECT&#39;**]**Array<&#39;CLEAR&#39; &#124; &#39;PENDING&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;REJECT&#39;>** | Filter transactions based on complianceStatus. | (optional) defaults to undefined|
| **authCurrency** | [**string**] | Filter transactions based on auth currency. Accepts a 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). | (optional) defaults to undefined|
| **mcc** | [**string**] | Filter transactions based on the 4-digit Merchant Category Code used during the transaction. | (optional) defaults to undefined|
| **merchantName** | [**string**] | Filter transactions based on the merchant name field. | (optional) defaults to undefined|
| **merchantCity** | [**string**] | Filter transactions based on the merchant city field. | (optional) defaults to undefined|
| **merchantCountry** | [**string**] | Filter transactions based on the merchant country field. | (optional) defaults to undefined|
| **transactionCurrency** | [**string**] | Filter transactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined|
| **merchantCategories** | [**string**] | Filter transactions based on the merchant\&#39;s type of business (Merchant Category Code / MCC), e.g. Airlines, Restaurants. | (optional) defaults to undefined|
| **merchantCountries** | [**string**] | Filter transactions based on a comma-separated list of 2-letter ISO merchant country codes. | (optional) defaults to undefined|
| **cardHashId** | [**string**] | Filter based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined|
| **paymentInstrumentHashId** | [**string**] | Filter transactions based on comma-separated paymentInstrumentHashId. | (optional) defaults to undefined|
| **businessTransaction** | [**string**] | Filter transactions based on businessTransaction flag. | (optional) defaults to undefined|
| **settlementDate** | [**string**] | Filter transactions based on the settlement date of the transaction in format yyyyMMdd. | (optional) defaults to undefined|
| **transactionsLabelsKey** | [**string**] | Filter transactions based on transactionsLabelsKey. | (optional) defaults to undefined|
| **transactionsLabelsValue** | [**string**] | Filter transactions based on transactionsLabelsValue. | (optional) defaults to undefined|
| **tagKey** | [**string**] | Filter transactions based on the exact value of tagKey defined against transactions. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **tagValue** | [**string**] | Filter transactions based on the approximating value of tagValue mapped for a tagKey defined against transactions. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **property** | [**string**] | The response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter. | (optional) defaults to undefined|
| **childCustomerHashId** | [**string**] | The unique child customer identifier created when a new child customer is created. | (optional) defaults to undefined|
| **settlementStatus** | [**string**] | Filter transactions based on settlement status. | (optional) defaults to undefined|


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
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

