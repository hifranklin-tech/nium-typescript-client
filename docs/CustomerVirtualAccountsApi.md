# CustomerVirtualAccountsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountOwnershipCertificate**](#accountownershipcertificate) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountOwnershipCertificate | Account Ownership Certificate|
|[**assignPaymentID**](#assignpaymentid) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId | Assign Payment ID|
|[**assignPaymentIDV2**](#assignpaymentidv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId | Assign Payment ID V2|
|[**manageVirtualAccountTags**](#managevirtualaccounttags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId/tags | Manage Virtual Account Tags|
|[**verificationOfPayee**](#verificationofpayee) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId/consent | Verification of Payee Consent|
|[**virtualAccountDetails**](#virtualaccountdetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details|
|[**virtualAccountDetailsV2**](#virtualaccountdetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details V2|

# **accountOwnershipCertificate**
> accountOwnershipCertificate()

This API allows you to download an account ownership certificate.

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let currentAccountBalance: boolean; //Set to `true` to include the current account balance in the response. Default is `false`. (optional) (default to false)
let currencies: string; //The list of currencies in 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). (optional) (default to undefined)

const { status, data } = await apiInstance.accountOwnershipCertificate(
    clientHashId,
    customerHashId,
    xRequestId,
    currentAccountBalance,
    currencies
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **currentAccountBalance** | [**boolean**] | Set to &#x60;true&#x60; to include the current account balance in the response. Default is &#x60;false&#x60;. | (optional) defaults to false|
| **currencies** | [**string**] | The list of currencies in 3-letter [ISO-4217 transaction currency code](/apis/docs/getting-started/currency-and-country-codes). | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignPaymentID**
> PaymentIdResponseDTO2 assignPaymentID(paymentIdRequestDTO2)

Assign virtual account numbers to customers so they can use a specific funding source. For more information, see [Virtual Accounts](/docs/payins/virtual-account-number)

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    PaymentIdRequestDTO2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let paymentIdRequestDTO2: PaymentIdRequestDTO2; //

const { status, data } = await apiInstance.assignPaymentID(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    paymentIdRequestDTO2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentIdRequestDTO2** | **PaymentIdRequestDTO2**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**PaymentIdResponseDTO2**

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
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assignPaymentIDV2**
> PaymentIdResponseDTOV2 assignPaymentIDV2(paymentIdRequestDTOV2)

This API allows you to assign virtual account numbers to customers so they can use a specific funding source.

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    PaymentIdRequestDTOV2
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let paymentIdRequestDTOV2: PaymentIdRequestDTOV2; //

const { status, data } = await apiInstance.assignPaymentIDV2(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    paymentIdRequestDTOV2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentIdRequestDTOV2** | **PaymentIdRequestDTOV2**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**PaymentIdResponseDTOV2**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | BadRequest |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageVirtualAccountTags**
> PaymentIdCientTagsResponseDTO manageVirtualAccountTags(paymentIdTagRequestDTO)

This API allows you to add, update, delete client tags against each virtual account.

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    PaymentIdTagRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let paymentIdTagRequestDTO: PaymentIdTagRequestDTO; //

const { status, data } = await apiInstance.manageVirtualAccountTags(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    paymentIdTagRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentIdTagRequestDTO** | **PaymentIdTagRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**PaymentIdCientTagsResponseDTO**

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
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verificationOfPayee**
> verificationOfPayee(verificationOfPayeeConsentRequestDTO)

This request enables you to opt in or out of [Verification of Payee](/docs/onboarding/vop-guidelines).

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    VerificationOfPayeeConsentRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let verificationOfPayeeConsentRequestDTO: VerificationOfPayeeConsentRequestDTO; //

const { status, data } = await apiInstance.verificationOfPayee(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    verificationOfPayeeConsentRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verificationOfPayeeConsentRequestDTO** | **VerificationOfPayeeConsentRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

void (empty response body)

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
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtualAccountDetails**
> Array<WalletPaymentIdsResponseDTO> virtualAccountDetails()

This API allows you to fetch virtual accounts assigned to a customer\'s wallet.  ⚠️ **WARNING**   To access updated functionality and features, we recommend using the latest version of this API: [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and become unsupported. 

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    VirtualAccountRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let virtualAccountRequestDTO: VirtualAccountRequestDTO; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.virtualAccountDetails(
    clientHashId,
    customerHashId,
    walletHashId,
    virtualAccountRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **virtualAccountRequestDTO** | **VirtualAccountRequestDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**Array<WalletPaymentIdsResponseDTO>**

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

# **virtualAccountDetailsV2**
> VirtualAccountResponseDTO virtualAccountDetailsV2()

This API allows you to fetch virtual accounts assigned to a customer\'s wallet.

### Example

```typescript
import {
    CustomerVirtualAccountsApi,
    Configuration,
    VirtualAccountRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerVirtualAccountsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let virtualAccountRequestDTO: VirtualAccountRequestDTO; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.virtualAccountDetailsV2(
    clientHashId,
    customerHashId,
    walletHashId,
    virtualAccountRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **virtualAccountRequestDTO** | **VirtualAccountRequestDTO** |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**VirtualAccountResponseDTO**

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

