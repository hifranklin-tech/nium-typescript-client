# PayoutApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bulkPayout**](#bulkpayout) | **POST** /api/v1/client/{clientHashId}/payout/bulk | Create a Batch Payout|
|[**cancelRemittance**](#cancelremittance) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/cancel | Cancel Remittance|
|[**fetchRemittanceLifeCycleStatus**](#fetchremittancelifecyclestatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/audit | Fetch Remittance Life Cycle Status|
|[**generateCardWidgetToken**](#generatecardwidgettoken) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/widget/token | Get Card Widget|
|[**getBulkPayoutBulkStatus**](#getbulkpayoutbulkstatus) | **GET** /api/v1/client/{clientHashId}/payout/bulk/{batchId}/status | Fetch Batch Payout Status|
|[**listBulkPayoutItems**](#listbulkpayoutitems) | **GET** /api/v1/client/{clientHashId}/payout/bulk/{batchId} | List Payouts in a Batch|
|[**poP**](#pop) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/receipt | Get Proof Of Payment|
|[**purposeofTransfer**](#purposeoftransfer) | **GET** /api/v1/remittance/purposeCodes | Purpose of Transfer|
|[**respondtoTransactionRFI**](#respondtotransactionrfi) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{authCode}/rfi/upload | Respond to Transaction RFI|
|[**returnMandate**](#returnmandate) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/mandate/{mandateId}/transactions/{transactionId}/return | Return Mandate|
|[**supportedCorridors**](#supportedcorridors) | **GET** /api/v3/client/{clientHashId}/supportedCorridors | Fetch Supported Corridors V3|
|[**transferMoney**](#transfermoney) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance | Transfer Money|
|[**validateTransferMoney**](#validatetransfermoney) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/validate | Validate Transfer Money|
|[**withdrawFundsFromWallet**](#withdrawfundsfromwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/refund | Withdraw Funds from Wallet|

# **bulkPayout**
> BulkPayoutResponseDto bulkPayout(bulkPayoutRequestDto)

Initiate multiple remittance transactions in a single request. For more infromation, see [Batch Payouts](/docs/batch-payouts).

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    BulkPayoutRequestDto
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique identifier of the client. (default to undefined)
let bulkPayoutRequestDto: BulkPayoutRequestDto; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.bulkPayout(
    clientHashId,
    bulkPayoutRequestDto,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkPayoutRequestDto** | **BulkPayoutRequestDto**|  | |
| **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BulkPayoutResponseDto**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelRemittance**
> CancelledRemittanceResponseDTO cancelRemittance()

Cancel a transaction. For more information, see [Transfer Money](/docs/transfer-money)

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; // (default to undefined)
let customerHashId: string; // (default to undefined)
let walletHashId: string; // (default to undefined)
let systemReferenceNumber: string; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.cancelRemittance(
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
| **clientHashId** | [**string**] |  | defaults to undefined|
| **customerHashId** | [**string**] |  | defaults to undefined|
| **walletHashId** | [**string**] |  | defaults to undefined|
| **systemReferenceNumber** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CancelledRemittanceResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ok |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRemittanceLifeCycleStatus**
> Array<RemittanceEventsResponseDTO2> fetchRemittanceLifeCycleStatus()

This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated by card issuance platform for the transaction. (default to undefined)
let externalId: boolean; //This header parameter determines if the systemReferenceNumber is treated as an externalId when true or as a system reference number when false or missing. (optional) (default to false)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.fetchRemittanceLifeCycleStatus(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    externalId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated by card issuance platform for the transaction. | defaults to undefined|
| **externalId** | [**boolean**] | This header parameter determines if the systemReferenceNumber is treated as an externalId when true or as a system reference number when false or missing. | (optional) defaults to false|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<RemittanceEventsResponseDTO2>**

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

# **generateCardWidgetToken**
> CardWidgetTokenResponse generateCardWidgetToken(customerCardWidgetTokenRequestDTO)

This API allows you to use Nium’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    CustomerCardWidgetTokenRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated during customer creation. (default to undefined)
let customerCardWidgetTokenRequestDTO: CustomerCardWidgetTokenRequestDTO; //Card Widget - Token Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.generateCardWidgetToken(
    clientHashId,
    customerHashId,
    customerCardWidgetTokenRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerCardWidgetTokenRequestDTO** | **CustomerCardWidgetTokenRequestDTO**| Card Widget - Token Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CardWidgetTokenResponse**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBulkPayoutBulkStatus**
> BulkPayoutStatusResponseDto getBulkPayoutBulkStatus()

Retreive the current status and metrics for a batch payout.

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let batchId: string; //Unique ID to identify a batch payout. Generated when the batch payout is intially created. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getBulkPayoutBulkStatus(
    clientHashId,
    batchId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **batchId** | [**string**] | Unique ID to identify a batch payout. Generated when the batch payout is intially created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BulkPayoutStatusResponseDto**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBulkPayoutItems**
> BulkPayoutItemResponse listBulkPayoutItems()

Retrieve the payouts created in a batch payout. Use query parameters to filter results.

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier. (default to undefined)
let batchId: string; //System generated internal batch identifier. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)
let status: 'ACCEPTED' | 'SCHEDULED' | 'INITIATED' | 'FAILED' | 'PAID' | 'RETURNED'; //Filter payouts by status. (optional) (default to undefined)
let cursor: string; //Cursor from page.nextCursor or page.prevCursor of a prior response. (optional) (default to undefined)
let limit: number; //The number of items to be returned on each page. (optional) (default to 50)

const { status, data } = await apiInstance.listBulkPayoutItems(
    clientHashId,
    batchId,
    xRequestId,
    status,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier. | defaults to undefined|
| **batchId** | [**string**] | System generated internal batch identifier. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|
| **status** | [**&#39;ACCEPTED&#39; | &#39;SCHEDULED&#39; | &#39;INITIATED&#39; | &#39;FAILED&#39; | &#39;PAID&#39; | &#39;RETURNED&#39;**]**Array<&#39;ACCEPTED&#39; &#124; &#39;SCHEDULED&#39; &#124; &#39;INITIATED&#39; &#124; &#39;FAILED&#39; &#124; &#39;PAID&#39; &#124; &#39;RETURNED&#39;>** | Filter payouts by status. | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor from page.nextCursor or page.prevCursor of a prior response. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of items to be returned on each page. | (optional) defaults to 50|


### Return type

**BulkPayoutItemResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **poP**
> poP()

This API allows you to download a proof of payment receipt against a transaction.

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let systemReferenceNumber: string; //Unique System Reference Number generated on Transfer Money request. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.poP(
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
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | Unique System Reference Number generated on Transfer Money request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a transaction receipt file TransactionReceipt_&lt;systemReferenceNumber&gt;.pdf |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purposeofTransfer**
> Array<PurposeCodeResponseDTO> purposeofTransfer()

This API will allow you to fetch the list of purpose of transfer.

### Example

```typescript
import {
    PayoutApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.purposeofTransfer(
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<PurposeCodeResponseDTO>**

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

# **respondtoTransactionRFI**
> WalletUploadRfiDetailsResponseDTO respondtoTransactionRFI(walletUploadRfiDocumentRequestDTO)

This API allows you to respond to an RFI raised for a transaction.

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    WalletUploadRfiDocumentRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let authCode: string; //Authorization code of the transaction. (default to undefined)
let walletUploadRfiDocumentRequestDTO: WalletUploadRfiDocumentRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.respondtoTransactionRFI(
    clientHashId,
    customerHashId,
    walletHashId,
    authCode,
    walletUploadRfiDocumentRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletUploadRfiDocumentRequestDTO** | **WalletUploadRfiDocumentRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **authCode** | [**string**] | Authorization code of the transaction. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**WalletUploadRfiDetailsResponseDTO**

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

# **returnMandate**
> WalletApiError2 returnMandate(updateMandateRequestDTO)

This API will allow you to return to Direct Debit Mandate

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    UpdateMandateRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let mandateId: string; //Unique mandateId (default to undefined)
let transactionId: string; //Unique transactionId (default to undefined)
let updateMandateRequestDTO: UpdateMandateRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.returnMandate(
    clientHashId,
    customerHashId,
    walletHashId,
    mandateId,
    transactionId,
    updateMandateRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMandateRequestDTO** | **UpdateMandateRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **mandateId** | [**string**] | Unique mandateId | defaults to undefined|
| **transactionId** | [**string**] | Unique transactionId | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**WalletApiError2**

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

# **supportedCorridors**
> SupportedCorridorsResponse supportedCorridors()

This API will allow you to fetch the supported corridors for remittance with details.

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    SupportedCorridorsSearchDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let supportedCorridorsSearchDTO: SupportedCorridorsSearchDTO; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.supportedCorridors(
    clientHashId,
    supportedCorridorsSearchDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **supportedCorridorsSearchDTO** | **SupportedCorridorsSearchDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**SupportedCorridorsResponse**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferMoney**
> RemittanceResponseDTO transferMoney(remittanceTransactionsRequestDTO)

Transfer or send money to any beneficiary or recipient. For more information, see [Transfer Money](/docs/transfer-money).

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    RemittanceTransactionsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let remittanceTransactionsRequestDTO: RemittanceTransactionsRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.transferMoney(
    clientHashId,
    customerHashId,
    walletHashId,
    remittanceTransactionsRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **remittanceTransactionsRequestDTO** | **RemittanceTransactionsRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**RemittanceResponseDTO**

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

# **validateTransferMoney**
> ValidateRemittanceResponseDTO validateTransferMoney(remittanceTransactionsRequestDTO)

This request enables you to validate and verify [transfer money](/api#tag/payout/POST/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance) requests.

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    RemittanceTransactionsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique identifier of the client. (default to undefined)
let customerHashId: string; //Unique identifier of the customer. (default to undefined)
let walletHashId: string; //Unique identifier of the wallet. (default to undefined)
let remittanceTransactionsRequestDTO: RemittanceTransactionsRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.validateTransferMoney(
    clientHashId,
    customerHashId,
    walletHashId,
    remittanceTransactionsRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **remittanceTransactionsRequestDTO** | **RemittanceTransactionsRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined|
| **customerHashId** | [**string**] | Unique identifier of the customer. | defaults to undefined|
| **walletHashId** | [**string**] | Unique identifier of the wallet. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ValidateRemittanceResponseDTO**

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

# **withdrawFundsFromWallet**
> ApiResponseWalletRefundResponseDTO withdrawFundsFromWallet(walletRefundRequestDTO)

This API allows you to withdraw funds from the customer\'s wallet.

### Example

```typescript
import {
    PayoutApi,
    Configuration,
    WalletRefundRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let walletRefundRequestDTO: WalletRefundRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.withdrawFundsFromWallet(
    clientHashId,
    customerHashId,
    walletHashId,
    walletRefundRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletRefundRequestDTO** | **WalletRefundRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ApiResponseWalletRefundResponseDTO**

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

