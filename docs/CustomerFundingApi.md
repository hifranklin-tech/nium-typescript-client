# CustomerFundingApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFundingInstrument**](#addfundinginstrument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fundingInstruments | Add Funding Instrument|
|[**addFundingInstrumentV2**](#addfundinginstrumentv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fundingInstruments | Add funding instrument V2|
|[**approveOrRejectFunds**](#approveorrejectfunds) | **PATCH** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund/{systemReferenceNumber} | Approve or Reject Funds|
|[**confirmFundingInstrumentId**](#confirmfundinginstrumentid) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/confirmFundingInstrument | Confirm funding instrument|
|[**deleteFundinginstrument**](#deletefundinginstrument) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId} | Delete Funding Instrument|
|[**fundWallet**](#fundwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund | Fund Wallet|
|[**fundWalletV2**](#fundwalletv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund | Fund Wallet V2|
|[**getFundingInstrumentDetails**](#getfundinginstrumentdetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/fundingInstrumentDetails | Get Funding instrument details|
|[**getFundingInstrumentList**](#getfundinginstrumentlist) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments | Get Funding Instrument List|

# **addFundingInstrument**
> LinkAccountResponse addFundingInstrument()

Add a funding instrument and link a customer\'s bank account. For more information, see [Payins](/docs/developers/notifications-and-webhooks/payin-events).

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    CustomerLinkAccountRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let customerLinkAccountRequest: CustomerLinkAccountRequest; //Add a new funding instrument (optional)

const { status, data } = await apiInstance.addFundingInstrument(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    customerLinkAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerLinkAccountRequest** | **CustomerLinkAccountRequest**| Add a new funding instrument | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**LinkAccountResponse**

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

# **addFundingInstrumentV2**
> LinkAccountResponseV2 addFundingInstrumentV2()

This API is used to add a direct debit funding instrument with a bank account.

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    CustomerLinkAccountRequestV2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let customerLinkAccountRequestV2: CustomerLinkAccountRequestV2; //customerLinkAccountRequest (optional)

const { status, data } = await apiInstance.addFundingInstrumentV2(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    customerLinkAccountRequestV2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerLinkAccountRequestV2** | **CustomerLinkAccountRequestV2**| customerLinkAccountRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**LinkAccountResponseV2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Funding instrument created |  -  |
|**400** | Error response when the request is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **approveOrRejectFunds**
> approveOrRejectFunds()

This endpoint provides the ability to accept or reject unidentified funds.

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    ApproveOrRejectFundsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let systemReferenceNumber: string; //This is a unique system reference number generated for the transaction. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let approveOrRejectFundsRequestDTO: ApproveOrRejectFundsRequestDTO; //approveOrRejectFundsRequestDTO (optional)

const { status, data } = await apiInstance.approveOrRejectFunds(
    clientHashId,
    customerHashId,
    systemReferenceNumber,
    walletHashId,
    xRequestId,
    approveOrRejectFundsRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approveOrRejectFundsRequestDTO** | **ApproveOrRejectFundsRequestDTO**| approveOrRejectFundsRequestDTO | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] | This is a unique system reference number generated for the transaction. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

void (empty response body)

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

# **confirmFundingInstrumentId**
> PayinAccountStatusResponse confirmFundingInstrumentId()

This API allows you to confirm funding instrument id

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    ConfirmFundingInstrumentRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let fundingInstrumentId: string; //The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let confirmFundingInstrumentRequestDTO: ConfirmFundingInstrumentRequestDTO; //Confirm funding instrument (optional)

const { status, data } = await apiInstance.confirmFundingInstrumentId(
    clientHashId,
    customerHashId,
    fundingInstrumentId,
    xRequestId,
    confirmFundingInstrumentRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmFundingInstrumentRequestDTO** | **ConfirmFundingInstrumentRequestDTO**| Confirm funding instrument | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **fundingInstrumentId** | [**string**] | The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**PayinAccountStatusResponse**

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

# **deleteFundinginstrument**
> ApiResponseOfstring deleteFundinginstrument()


### Example

```typescript
import {
    CustomerFundingApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let fundingInstrumentId: string; //The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.deleteFundinginstrument(
    clientHashId,
    customerHashId,
    fundingInstrumentId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **fundingInstrumentId** | [**string**] | The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ApiResponseOfstring**

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

# **fundWallet**
> WalletFundResponseDTO fundWallet()

This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/payins/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    WalletFundDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let xIdempotencyId: string; //Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. (optional) (default to undefined)
let walletFundDTO: WalletFundDTO; //Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards. (optional)

const { status, data } = await apiInstance.fundWallet(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    xIdempotencyId,
    walletFundDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletFundDTO** | **WalletFundDTO**| Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards. | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **xIdempotencyId** | [**string**] | Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. | (optional) defaults to undefined|


### Return type

**WalletFundResponseDTO**

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

# **fundWalletV2**
> WalletFundResponseDTO fundWalletV2(fundWalletV2RequestDTO)


### Example

```typescript
import {
    CustomerFundingApi,
    Configuration,
    FundWalletV2RequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let fundWalletV2RequestDTO: FundWalletV2RequestDTO; //fundWalletV2RequestDTO
let xIdempotencyId: string; //Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. (optional) (default to undefined)

const { status, data } = await apiInstance.fundWalletV2(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    fundWalletV2RequestDTO,
    xIdempotencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundWalletV2RequestDTO** | **FundWalletV2RequestDTO**| fundWalletV2RequestDTO | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **xIdempotencyId** | [**string**] | Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. | (optional) defaults to undefined|


### Return type

**WalletFundResponseDTO**

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

# **getFundingInstrumentDetails**
> PayinAccountStatusResponse getFundingInstrumentDetails()

Get Funding instrument details

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let fundingInstrumentId: string; //The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.getFundingInstrumentDetails(
    clientHashId,
    customerHashId,
    fundingInstrumentId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **fundingInstrumentId** | [**string**] | The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**PayinAccountStatusResponse**

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

# **getFundingInstrumentList**
> Array<WalletFundingInstrumentsResponseDTO> getFundingInstrumentList()

This API allows you to fetch the funding instruments that have been registered for a customer.

### Example

```typescript
import {
    CustomerFundingApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFundingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.getFundingInstrumentList(
    clientHashId,
    customerHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**Array<WalletFundingInstrumentsResponseDTO>**

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

