# CustomerWalletTransactionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadTransactionReceipt**](#downloadtransactionreceipt) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Download Transaction Receipt|
|[**manageTransactionTags**](#managetransactiontags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/tags | Manage Transaction Tags|
|[**transactionGeoTagging**](#transactiongeotagging) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/location | Transaction Geo-Tagging|
|[**transactions**](#transactions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions | Transactions|
|[**updateBusinessTransactionFlag**](#updatebusinesstransactionflag) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/business | Update Business Transaction Flag|
|[**uploadTransactionReceipt**](#uploadtransactionreceipt) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Upload Transaction Receipt|

# **downloadTransactionReceipt**
> TransactionsReceiptDTO downloadTransactionReceipt()

This endppint enables you to download a receipt for any transaction.

### Example

```typescript
import {
    CustomerWalletTransactionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerWalletTransactionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let transactionId: string; //Unique 36 character transaction identifier generated for each transaction. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.downloadTransactionReceipt(
    clientHashId,
    customerHashId,
    walletHashId,
    transactionId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **transactionId** | [**string**] | Unique 36 character transaction identifier generated for each transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageTransactionTags**
> TransactionClientTagsResponseDTO manageTransactionTags(transactionClientTagsRequestDTO)

This API enables you to add, update, and delete transaction tags.

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
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let transactionId: string; //Unique 36 character transaction identifier generated for each transaction. (default to undefined)
let transactionClientTagsRequestDTO: TransactionClientTagsRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.manageTransactionTags(
    clientHashId,
    customerHashId,
    walletHashId,
    transactionId,
    transactionClientTagsRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionClientTagsRequestDTO** | **TransactionClientTagsRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **transactionId** | [**string**] | Unique 36 character transaction identifier generated for each transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transactionGeoTagging**
> WalletApiError transactionGeoTagging(transactionsLocationDTO)

This endpoint enables you to update transactions with the merchant\'s location.

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
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let transactionId: string; //Unique 36 character transaction identifier generated for each transaction. (default to undefined)
let transactionsLocationDTO: TransactionsLocationDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.transactionGeoTagging(
    clientHashId,
    customerHashId,
    walletHashId,
    transactionId,
    transactionsLocationDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsLocationDTO** | **TransactionsLocationDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **transactionId** | [**string**] | Unique 36 character transaction identifier generated for each transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
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

let clientHashId: string; //Filter transactions based on the client\'s unique `clientHashId` that was used in the transaction. (default to undefined)
let customerHashId: string; //Filter transactions based on the customer\'s unique `customerHashId` that was used in the transaction. (default to undefined)
let walletHashId: string; //Filter transactions based on the unique wallet identifier generated during customer creation. (default to undefined)
let startDate: string; //The beginning date to start fetching transaction details. The format for `startDate` is YYYY-MM-DD. (optional) (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. (optional) (default to undefined)
let page: string; //In some cases, the response can return multiple pages of data. Use this parameter to page through the returned results. The default page is 0. (optional) (default to undefined)
let size: string; //Define how many elements get returned per response page. Accepted values can be 1-20. (optional) (default to undefined)
let order: 'ASC' | 'DESC'; //Sort the order of the returned results. (optional) (default to undefined)
let property: string; //Details the response parameter used to sort the transaction list. Sorted by \'createdAt\' by default. (optional) (default to undefined)
let childCustomerHashId: string; //Filter transactions based on the `childCustomerHashId` used in the transactions. (optional) (default to undefined)
let cardHashId: string; //Filter transactions based on the unique card identifier generated during new/add-on card issuance. (optional) (default to undefined)
let paymentInstrumentHashId: string; //Filter transactions based on a list of comma-separated `paymentInstrumentHashIds`. (optional) (default to undefined)
let authCode: string; //Filter transactions based on the authorization code. In case of fund wallet transactions you can provide the `systemReferenceNumber` as the value. (optional) (default to undefined)
let systemReferenceNumber: string; //Filter transactions based on the `systemReferenceNumber`. (optional) (default to undefined)
let transactionType: string; //Filter transactions based on the `transactiontype`. A detailed list of the transactions types available can be found at [Transaction Types](https://docs.nium.com/apis/docs/transaction-types). (optional) (default to undefined)
let status: 'Approved' | 'Declined' | 'Blocked' | 'Reversal' | 'Released' | 'Pending' | 'InProgress' | 'Rejected' | 'Returned' | 'AwaitingFunds' | 'Expired' | 'Cancelled' | 'Scheduled' | 'NA'; //Filter transactions based on the `status` of the transaction; details the status of the transaction. Available values include:   - **CLEAR**: Transaction successfully processed and completed.   - **PENDING**: Transaction received and awaiting processing or review.   - **REJECT**: The transaction is rejected by compliance rules.   - **RFI_REQUESTED**: The transaction has been flagged by compliance rules. Additional information has been requested for this transaction for compliance purposes. (optional) (default to undefined)
let complianceStatus: 'INITIATED' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'EXPIRED' | 'REJECT' | 'CLOSED'; //Filter transactions based on the `complianceStatus`. (optional) (default to undefined)
let settlementDate: string; //Filter transactions based on the settlement date of the transaction in the format yyyyMMdd. (optional) (default to undefined)
let settlementStatus: string; //Filter transactions based on settlement the status. A list of possible values is available in the response. (optional) (default to undefined)
let mcc: string; //Filter transactions based on the 4-digit Merchant Category Code used during the transaction. (optional) (default to undefined)
let merchantName: string; //Filter transactions based on the merchant\'s name field. (optional) (default to undefined)
let merchantCity: string; //Filter transactions based on the merchant\'s city. (optional) (default to undefined)
let merchantCountry: string; //Filter transactions based on the merchant\'s country field. (optional) (default to undefined)
let transactionCurrency: string; //Filter trasnactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). (optional) (default to undefined)
let authCurrency: string; //Filter transactions based on the authentication currency. Accepts any 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). (optional) (default to undefined)
let systemTraceAuditNumber: string; //Flter transactions based on `systemTraceAuditNumber`. (optional) (default to undefined)
let merchantCountries: string; //Filter transactions based on a comma-separated list of 2-letter ISO merchant countries. (optional) (default to undefined)
let merchantCategories: string; //Filter transactions based on the description of the merchant\'s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. (optional) (default to undefined)
let businessTransaction: string; //Filter for transactions where `businessTransaction` is **TRUE** or **FALSE**. (optional) (default to undefined)
let transactionsLabelsKey: string; //Flter transactions based on the `transactionsLabelsKey`. (optional) (default to undefined)
let transactionsLabelsValue: string; //Filter transactions based on `transactionsLabelsValue`. (optional) (default to undefined)
let tagKey: string; //Filter transactions based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. (optional) (default to undefined)
let tagValue: string; //Filter the responses based on the exact value of `tagKey`. The `tagkey` can be used also be used as an independent search parameter. (optional) (default to undefined)
let externalId: string; //Filter transactions using your unique identifier. (optional) (default to undefined)
let xRequestId: string; //Filter transactions based on the unique UUID value. (optional) (default to undefined)

const { status, data } = await apiInstance.transactions(
    clientHashId,
    customerHashId,
    walletHashId,
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
    externalId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Filter transactions based on the client\&#39;s unique &#x60;clientHashId&#x60; that was used in the transaction. | defaults to undefined|
| **customerHashId** | [**string**] | Filter transactions based on the customer\&#39;s unique &#x60;customerHashId&#x60; that was used in the transaction. | defaults to undefined|
| **walletHashId** | [**string**] | Filter transactions based on the unique wallet identifier generated during customer creation. | defaults to undefined|
| **startDate** | [**string**] | The beginning date to start fetching transaction details. The format for &#x60;startDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for endDate is YYYY-MM-DD. | (optional) defaults to undefined|
| **page** | [**string**] | In some cases, the response can return multiple pages of data. Use this parameter to page through the returned results. The default page is 0. | (optional) defaults to undefined|
| **size** | [**string**] | Define how many elements get returned per response page. Accepted values can be 1-20. | (optional) defaults to undefined|
| **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort the order of the returned results. | (optional) defaults to undefined|
| **property** | [**string**] | Details the response parameter used to sort the transaction list. Sorted by \&#39;createdAt\&#39; by default. | (optional) defaults to undefined|
| **childCustomerHashId** | [**string**] | Filter transactions based on the &#x60;childCustomerHashId&#x60; used in the transactions. | (optional) defaults to undefined|
| **cardHashId** | [**string**] | Filter transactions based on the unique card identifier generated during new/add-on card issuance. | (optional) defaults to undefined|
| **paymentInstrumentHashId** | [**string**] | Filter transactions based on a list of comma-separated &#x60;paymentInstrumentHashIds&#x60;. | (optional) defaults to undefined|
| **authCode** | [**string**] | Filter transactions based on the authorization code. In case of fund wallet transactions you can provide the &#x60;systemReferenceNumber&#x60; as the value. | (optional) defaults to undefined|
| **systemReferenceNumber** | [**string**] | Filter transactions based on the &#x60;systemReferenceNumber&#x60;. | (optional) defaults to undefined|
| **transactionType** | [**string**] | Filter transactions based on the &#x60;transactiontype&#x60;. A detailed list of the transactions types available can be found at [Transaction Types](https://docs.nium.com/apis/docs/transaction-types). | (optional) defaults to undefined|
| **status** | [**&#39;Approved&#39; | &#39;Declined&#39; | &#39;Blocked&#39; | &#39;Reversal&#39; | &#39;Released&#39; | &#39;Pending&#39; | &#39;InProgress&#39; | &#39;Rejected&#39; | &#39;Returned&#39; | &#39;AwaitingFunds&#39; | &#39;Expired&#39; | &#39;Cancelled&#39; | &#39;Scheduled&#39; | &#39;NA&#39;**]**Array<&#39;Approved&#39; &#124; &#39;Declined&#39; &#124; &#39;Blocked&#39; &#124; &#39;Reversal&#39; &#124; &#39;Released&#39; &#124; &#39;Pending&#39; &#124; &#39;InProgress&#39; &#124; &#39;Rejected&#39; &#124; &#39;Returned&#39; &#124; &#39;AwaitingFunds&#39; &#124; &#39;Expired&#39; &#124; &#39;Cancelled&#39; &#124; &#39;Scheduled&#39; &#124; &#39;NA&#39;>** | Filter transactions based on the &#x60;status&#x60; of the transaction; details the status of the transaction. Available values include:   - **CLEAR**: Transaction successfully processed and completed.   - **PENDING**: Transaction received and awaiting processing or review.   - **REJECT**: The transaction is rejected by compliance rules.   - **RFI_REQUESTED**: The transaction has been flagged by compliance rules. Additional information has been requested for this transaction for compliance purposes. | (optional) defaults to undefined|
| **complianceStatus** | [**&#39;INITIATED&#39; | &#39;IN_PROGRESS&#39; | &#39;ACTION_REQUIRED&#39; | &#39;RFI_REQUESTED&#39; | &#39;RFI_RESPONDED&#39; | &#39;COMPLETED&#39; | &#39;ERROR&#39; | &#39;EXPIRED&#39; | &#39;REJECT&#39; | &#39;CLOSED&#39;**]**Array<&#39;INITIATED&#39; &#124; &#39;IN_PROGRESS&#39; &#124; &#39;ACTION_REQUIRED&#39; &#124; &#39;RFI_REQUESTED&#39; &#124; &#39;RFI_RESPONDED&#39; &#124; &#39;COMPLETED&#39; &#124; &#39;ERROR&#39; &#124; &#39;EXPIRED&#39; &#124; &#39;REJECT&#39; &#124; &#39;CLOSED&#39;>** | Filter transactions based on the &#x60;complianceStatus&#x60;. | (optional) defaults to undefined|
| **settlementDate** | [**string**] | Filter transactions based on the settlement date of the transaction in the format yyyyMMdd. | (optional) defaults to undefined|
| **settlementStatus** | [**string**] | Filter transactions based on settlement the status. A list of possible values is available in the response. | (optional) defaults to undefined|
| **mcc** | [**string**] | Filter transactions based on the 4-digit Merchant Category Code used during the transaction. | (optional) defaults to undefined|
| **merchantName** | [**string**] | Filter transactions based on the merchant\&#39;s name field. | (optional) defaults to undefined|
| **merchantCity** | [**string**] | Filter transactions based on the merchant\&#39;s city. | (optional) defaults to undefined|
| **merchantCountry** | [**string**] | Filter transactions based on the merchant\&#39;s country field. | (optional) defaults to undefined|
| **transactionCurrency** | [**string**] | Filter trasnactions based on the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html). | (optional) defaults to undefined|
| **authCurrency** | [**string**] | Filter transactions based on the authentication currency. Accepts any 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes). | (optional) defaults to undefined|
| **systemTraceAuditNumber** | [**string**] | Flter transactions based on &#x60;systemTraceAuditNumber&#x60;. | (optional) defaults to undefined|
| **merchantCountries** | [**string**] | Filter transactions based on a comma-separated list of 2-letter ISO merchant countries. | (optional) defaults to undefined|
| **merchantCategories** | [**string**] | Filter transactions based on the description of the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc. | (optional) defaults to undefined|
| **businessTransaction** | [**string**] | Filter for transactions where &#x60;businessTransaction&#x60; is **TRUE** or **FALSE**. | (optional) defaults to undefined|
| **transactionsLabelsKey** | [**string**] | Flter transactions based on the &#x60;transactionsLabelsKey&#x60;. | (optional) defaults to undefined|
| **transactionsLabelsValue** | [**string**] | Filter transactions based on &#x60;transactionsLabelsValue&#x60;. | (optional) defaults to undefined|
| **tagKey** | [**string**] | Filter transactions based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter. | (optional) defaults to undefined|
| **tagValue** | [**string**] | Filter the responses based on the exact value of &#x60;tagKey&#x60;. The &#x60;tagkey&#x60; can be used also be used as an independent search parameter. | (optional) defaults to undefined|
| **externalId** | [**string**] | Filter transactions using your unique identifier. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Filter transactions based on the unique UUID value. | (optional) defaults to undefined|


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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBusinessTransactionFlag**
> WalletApiError updateBusinessTransactionFlag(transactionsBusinessDTO)

This endpoint enables you to flag transactions as business transactions.

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
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let transactionId: string; //Unique 36 character transaction identifier generated for each transaction. (default to undefined)
let transactionsBusinessDTO: TransactionsBusinessDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateBusinessTransactionFlag(
    clientHashId,
    customerHashId,
    walletHashId,
    transactionId,
    transactionsBusinessDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsBusinessDTO** | **TransactionsBusinessDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **transactionId** | [**string**] | Unique 36 character transaction identifier generated for each transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadTransactionReceipt**
> WalletApiError uploadTransactionReceipt(transactionsReceiptDTO)

This endpoint enables you to upload a receipt for any transaction.

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
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let transactionId: string; //Unique 36 character transaction identifier generated for each transaction. (default to undefined)
let transactionsReceiptDTO: TransactionsReceiptDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.uploadTransactionReceipt(
    clientHashId,
    customerHashId,
    walletHashId,
    transactionId,
    transactionsReceiptDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionsReceiptDTO** | **TransactionsReceiptDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **transactionId** | [**string**] | Unique 36 character transaction identifier generated for each transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

