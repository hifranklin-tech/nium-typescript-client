# CustomerWalletTransactionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadTransactionReceipt**](#downloadtransactionreceipt) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{systemReferenceNumber}/receipt | Download Transaction Receipt|
|[**manageTransactionTags**](#managetransactiontags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{systemReferenceNumber}/tags | Manage Transaction Tags|
|[**transactionGeoTagging**](#transactiongeotagging) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{systemReferenceNumber}/location | Transaction Geo-Tagging|
|[**transactions**](#transactions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions | Transactions|
|[**updateBusinessTransactionFlag**](#updatebusinesstransactionflag) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{systemReferenceNumber}/business | Update Business Transaction Flag|
|[**uploadTransactionReceipt**](#uploadtransactionreceipt) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{systemReferenceNumber}/receipt | Upload Transaction Receipt|

# **downloadTransactionReceipt**
> TransactionsReceiptDTO downloadTransactionReceipt()

This API allows you to download a receipt against each transaction.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.downloadTransactionReceipt(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**TransactionsReceiptDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageTransactionTags**
> TransactionClientTagsResponseDTO manageTransactionTags(transactionClientTagsRequestDTO)

This API allows you to add, update, and delete transaction tags.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration,
    TransactionClientTagsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let transactionClientTagsRequestDTO: TransactionClientTagsRequestDTO; //

const { status, data } = await apiInstance.manageTransactionTags(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId,
    transactionClientTagsRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionClientTagsRequestDTO** | **TransactionClientTagsRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**TransactionClientTagsResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionGeoTagging**
> WalletApiError transactionGeoTagging(transactionsLocationDTO)

This API allows you to update a transaction with merchant location.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration,
    TransactionsLocationDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let transactionsLocationDTO: TransactionsLocationDTO; //

const { status, data } = await apiInstance.transactionGeoTagging(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId,
    transactionsLocationDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsLocationDTO** | **TransactionsLocationDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletApiError**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactions**
> WalletTransactionsResponseDTO transactions()

Use this endpoint to fetch transaction details for a customer.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let startDate: string; //The beginning date to start fetching transaction details. The format for `startDate` is YYYY-MM-DD. (optional) (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for `endDate` is YYYY-MM-DD. (optional) (default to undefined)
let page: string; //This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional) (default to undefined)
let size: number; //The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. (optional) (default to 20)
let order: string; //The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. (optional) (default to 'DESC')
let property: string; //The response parameter used to sort paginated data, with \'createdAt\' as the default parameter. (optional) (default to undefined)
let childCustomerHashId: string; //The unique child customer identifier created when a new child customer is created. (optional) (default to undefined)
let cardHashId: string; //Filter based on the unique card identifier generated during new/add-on card issuance. (optional) (default to undefined)
let paymentInstrumentHashId: string; //Filter transactions based on comma-separated paymentInstrumentHashId. (optional) (default to undefined)
let authCode: string; //Filter transactions based on the authorization code. For fund wallet transactions, provide the systemReferenceNumber as value. (optional) (default to undefined)
let systemReferenceNumber: string; //Filter transactions based on the `systemReferenceNumber`. (optional) (default to undefined)
let transactionType: string; //Filter transactions based on the `transactionType`. A detailed list of the transaction types available can be found at [Transaction Types](/apis/docs/transactions). (optional) (default to undefined)
let status: 'Approved' | 'Declined' | 'Blocked' | 'Pending' | 'InProgress' | 'Rejected' | 'AwaitingFunds' | 'Expired' | 'Cancelled' | 'Scheduled'; //Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. (optional) (default to undefined)
let complianceStatus: 'CLEAR' | 'PENDING' | 'RFI_REQUESTED' | 'REJECT'; //Filter transactions based on complianceStatus. (optional) (default to undefined)
let settlementDate: string; //Filter transactions based on the settlement date of the transaction in format yyyyMMdd. (optional) (default to undefined)
let settlementStatus: string; //Filter transactions based on settlement status. (optional) (default to undefined)
let mcc: string; //Filter transactions based on the 4-digit Merchant Category Code used during the transaction. (optional) (default to undefined)
let merchantName: string; //Filter transactions based on the merchant name field. (optional) (default to undefined)
let merchantCity: string; //Filter transactions based on the merchant city field. (optional) (default to undefined)
let merchantCountry: string; //Filter transactions based on the merchant country field. (optional) (default to undefined)
let transactionCurrency: string; //Filter transactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). (optional) (default to undefined)
let authCurrency: string; //Filter transactions based on auth currency. Accepts a 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). (optional) (default to undefined)
let systemTraceAuditNumber: string; //Filter transactions based on systemTraceAuditNumber. (optional) (default to undefined)
let merchantCountries: string; //Filter transactions based on a comma-separated list of 2-letter ISO merchant country codes. (optional) (default to undefined)
let merchantCategories: string; //Filter transactions based on the merchant\'s type of business (Merchant Category Code / MCC), e.g. Airlines, Restaurants. (optional) (default to undefined)
let businessTransaction: string; //Filter transactions based on businessTransaction flag. (optional) (default to undefined)
let transactionsLabelsKey: string; //Filter transactions based on transactionsLabelsKey. (optional) (default to undefined)
let transactionsLabelsValue: string; //Filter transactions based on transactionsLabelsValue. (optional) (default to undefined)
let tagKey: string; //Filter transactions based on the exact value of tagKey defined against transactions. Can be used as an independent search parameter. (optional) (default to undefined)
let tagValue: string; //Filter transactions based on the approximating value of tagValue mapped for a tagKey defined against transactions. Can be used as an independent search parameter. (optional) (default to undefined)
let externalId: string; //Filter transactions using your unique identifier. (optional) (default to undefined)

const { status, data } = await apiInstance.transactions(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    startDate,
    endDate,
    page,
    size,
    order,
    property,
    childCustomerHashId,
    cardHashId,
    paymentInstrumentHashId,
    authCode,
    systemReferenceNumber,
    transactionType,
    status,
    complianceStatus,
    settlementDate,
    settlementStatus,
    mcc,
    merchantName,
    merchantCity,
    merchantCountry,
    transactionCurrency,
    authCurrency,
    systemTraceAuditNumber,
    merchantCountries,
    merchantCategories,
    businessTransaction,
    transactionsLabelsKey,
    transactionsLabelsValue,
    tagKey,
    tagValue,
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **startDate** | [**string**] | The beginning date to start fetching transaction details. The format for &#x60;startDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for &#x60;endDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **page** | [**string**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined|
| **size** | [**number**] | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. | (optional) defaults to 20|
| **order** | [**string**] | The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. | (optional) defaults to 'DESC'|
| **property** | [**string**] | The response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter. | (optional) defaults to undefined|
| **childCustomerHashId** | [**string**] | The unique child customer identifier created when a new child customer is created. | (optional) defaults to undefined|
| **cardHashId** | [**string**] | Filter based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined|
| **paymentInstrumentHashId** | [**string**] | Filter transactions based on comma-separated paymentInstrumentHashId. | (optional) defaults to undefined|
| **authCode** | [**string**] | Filter transactions based on the authorization code. For fund wallet transactions, provide the systemReferenceNumber as value. | (optional) defaults to undefined|
| **systemReferenceNumber** | [**string**] | Filter transactions based on the &#x60;systemReferenceNumber&#x60;. | (optional) defaults to undefined|
| **transactionType** | [**string**] | Filter transactions based on the &#x60;transactionType&#x60;. A detailed list of the transaction types available can be found at [Transaction Types](/apis/docs/transactions). | (optional) defaults to undefined|
| **status** | [**&#39;Approved&#39; | &#39;Declined&#39; | &#39;Blocked&#39; | &#39;Pending&#39; | &#39;InProgress&#39; | &#39;Rejected&#39; | &#39;AwaitingFunds&#39; | &#39;Expired&#39; | &#39;Cancelled&#39; | &#39;Scheduled&#39;**]**Array<&#39;Approved&#39; &#124; &#39;Declined&#39; &#124; &#39;Blocked&#39; &#124; &#39;Pending&#39; &#124; &#39;InProgress&#39; &#124; &#39;Rejected&#39; &#124; &#39;AwaitingFunds&#39; &#124; &#39;Expired&#39; &#124; &#39;Cancelled&#39; &#124; &#39;Scheduled&#39;>** | Filter transactions based on their status. Available values: Approved, Rejected, Blocked, Pending, Declined, Cancelled, AwaitingFunds, Scheduled, Expired, InProgress. | (optional) defaults to undefined|
| **complianceStatus** | [**&#39;CLEAR&#39; | &#39;PENDING&#39; | &#39;RFI_REQUESTED&#39; | &#39;REJECT&#39;**]**Array<&#39;CLEAR&#39; &#124; &#39;PENDING&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;REJECT&#39;>** | Filter transactions based on complianceStatus. | (optional) defaults to undefined|
| **settlementDate** | [**string**] | Filter transactions based on the settlement date of the transaction in format yyyyMMdd. | (optional) defaults to undefined|
| **settlementStatus** | [**string**] | Filter transactions based on settlement status. | (optional) defaults to undefined|
| **mcc** | [**string**] | Filter transactions based on the 4-digit Merchant Category Code used during the transaction. | (optional) defaults to undefined|
| **merchantName** | [**string**] | Filter transactions based on the merchant name field. | (optional) defaults to undefined|
| **merchantCity** | [**string**] | Filter transactions based on the merchant city field. | (optional) defaults to undefined|
| **merchantCountry** | [**string**] | Filter transactions based on the merchant country field. | (optional) defaults to undefined|
| **transactionCurrency** | [**string**] | Filter transactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined|
| **authCurrency** | [**string**] | Filter transactions based on auth currency. Accepts a 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). | (optional) defaults to undefined|
| **systemTraceAuditNumber** | [**string**] | Filter transactions based on systemTraceAuditNumber. | (optional) defaults to undefined|
| **merchantCountries** | [**string**] | Filter transactions based on a comma-separated list of 2-letter ISO merchant country codes. | (optional) defaults to undefined|
| **merchantCategories** | [**string**] | Filter transactions based on the merchant\&#39;s type of business (Merchant Category Code / MCC), e.g. Airlines, Restaurants. | (optional) defaults to undefined|
| **businessTransaction** | [**string**] | Filter transactions based on businessTransaction flag. | (optional) defaults to undefined|
| **transactionsLabelsKey** | [**string**] | Filter transactions based on transactionsLabelsKey. | (optional) defaults to undefined|
| **transactionsLabelsValue** | [**string**] | Filter transactions based on transactionsLabelsValue. | (optional) defaults to undefined|
| **tagKey** | [**string**] | Filter transactions based on the exact value of tagKey defined against transactions. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **tagValue** | [**string**] | Filter transactions based on the approximating value of tagValue mapped for a tagKey defined against transactions. Can be used as an independent search parameter. | (optional) defaults to undefined|
| **externalId** | [**string**] | Filter transactions using your unique identifier. | (optional) defaults to undefined|


### Return type

**WalletTransactionsResponseDTO**

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

# **updateBusinessTransactionFlag**
> WalletApiError updateBusinessTransactionFlag(transactionsBusinessDTO)

This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration,
    TransactionsBusinessDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let transactionsBusinessDTO: TransactionsBusinessDTO; //

const { status, data } = await apiInstance.updateBusinessTransactionFlag(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId,
    transactionsBusinessDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsBusinessDTO** | **TransactionsBusinessDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletApiError**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadTransactionReceipt**
> WalletApiError uploadTransactionReceipt(transactionsReceiptDTO)

This API allows you to upload a receipt against each transaction.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration,
    TransactionsReceiptDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let transactionsReceiptDTO: TransactionsReceiptDTO; //

const { status, data } = await apiInstance.uploadTransactionReceipt(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId,
    transactionsReceiptDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsReceiptDTO** | **TransactionsReceiptDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**WalletApiError**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

