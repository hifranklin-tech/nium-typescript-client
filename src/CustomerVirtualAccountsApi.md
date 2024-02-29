# .CustomerVirtualAccountsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountOwnershipCertificate**](CustomerVirtualAccountsApi.md#accountOwnershipCertificate) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountOwnershipCertificate | Account Ownership Certificate
[**assignPaymentID**](CustomerVirtualAccountsApi.md#assignPaymentID) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId | Assign Payment ID
[**manageVirtualAccountTags**](CustomerVirtualAccountsApi.md#manageVirtualAccountTags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId/tags | Manage Virtual Account Tags
[**virtualAccountDetails**](CustomerVirtualAccountsApi.md#virtualAccountDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details
[**virtualAccountDetailsV2**](CustomerVirtualAccountsApi.md#virtualAccountDetailsV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details V2


# **accountOwnershipCertificate**
> void accountOwnershipCertificate()

This API allows you to download an account ownership certificate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerVirtualAccountsApi(configuration);

let body:.CustomerVirtualAccountsApiAccountOwnershipCertificateRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer. (optional)
  currencies: "currencies_example",
  // boolean | This field will display the account balance of the customer as on date (optional)
  currentAccountBalance: false,
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.accountOwnershipCertificate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **currencies** | [**string**] | This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer. | (optional) defaults to undefined
 **currentAccountBalance** | [**boolean**] | This field will display the account balance of the customer as on date | (optional) defaults to false
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignPaymentID**
> PaymentIdResponseDTO2 assignPaymentID(paymentIdRequestDTO2)

This API allows you to assign virtual account numbers to customer for specific source.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerVirtualAccountsApi(configuration);

let body:.CustomerVirtualAccountsApiAssignPaymentIDRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // PaymentIdRequestDTO2 | paymentIdRequestDTO2
  paymentIdRequestDTO2: {
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    accountCategory: "SELF_FUNDING_ACCOUNT",
    bankName: "bankName_example",
    currencyCode: "currencyCode_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.assignPaymentID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentIdRequestDTO2** | **PaymentIdRequestDTO2**| paymentIdRequestDTO2 |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PaymentIdResponseDTO2**

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

# **manageVirtualAccountTags**
> PaymentIdCientTagsResponseDTO manageVirtualAccountTags(paymentIdTagRequestDTO)

This API allows you to add, update, delete client tags against each virtual account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerVirtualAccountsApi(configuration);

let body:.CustomerVirtualAccountsApiManageVirtualAccountTagsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // PaymentIdTagRequestDTO | tags
  paymentIdTagRequestDTO: {
    tags: [
      {
        action: "MAINTAIN",
        key: "key_example",
        value: "value_example",
      },
    ],
    currencyCode: "currencyCode_example",
    uniquePaymentId: "uniquePaymentId_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.manageVirtualAccountTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentIdTagRequestDTO** | **PaymentIdTagRequestDTO**| tags |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**PaymentIdCientTagsResponseDTO**

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

# **virtualAccountDetails**
> Array<WalletPaymentIdsResponseDTO> virtualAccountDetails()

This API allows you to fetch virtual accounts assigned to a customer\'s wallet.   ⚠️ WARNING   > To access updated functionality and features we recommed using the latest version of this API [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and becomes unsupported.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerVirtualAccountsApi(configuration);

let body:.CustomerVirtualAccountsApiVirtualAccountDetailsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated and shared before API handshake.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated and shared before API handshake.
  walletHashId: "walletHashId_example",
  // string (optional)
  currencyCode: "currencyCode_example",
  // string (optional)
  endDate: "endDate_example",
  // 'DESC' | 'ASC' (optional)
  order: "DESC",
  // number (optional)
  page: 0,
  // 'createdAt' (optional)
  property: "createdAt",
  // number (optional)
  size: 20,
  // string (optional)
  startDate: "startDate_example",
  // string (optional)
  tagKey: "tagKey_example",
  // string (optional)
  tagValue: "tagValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.virtualAccountDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated and shared before API handshake. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated and shared before API handshake. | defaults to undefined
 **currencyCode** | [**string**] |  | (optional) defaults to undefined
 **endDate** | [**string**] |  | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **property** | [**&#39;createdAt&#39;**]**Array<&#39;createdAt&#39;>** |  | (optional) defaults to undefined
 **size** | [**number**] |  | (optional) defaults to undefined
 **startDate** | [**string**] |  | (optional) defaults to undefined
 **tagKey** | [**string**] |  | (optional) defaults to undefined
 **tagValue** | [**string**] |  | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<WalletPaymentIdsResponseDTO>**

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

# **virtualAccountDetailsV2**
> VirtualAccountResponseDTO virtualAccountDetailsV2()

This API allows you to fetch virtual accounts assigned to a customer\'s wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerVirtualAccountsApi(configuration);

let body:.CustomerVirtualAccountsApiVirtualAccountDetailsV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated and shared before API handshake.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated and shared before API handshake.
  walletHashId: "walletHashId_example",
  // string (optional)
  currencyCode: "currencyCode_example",
  // string (optional)
  endDate: "endDate_example",
  // 'DESC' | 'ASC' (optional)
  order: "DESC",
  // number (optional)
  page: 0,
  // 'createdAt' (optional)
  property: "createdAt",
  // number (optional)
  size: 20,
  // string (optional)
  startDate: "startDate_example",
  // string (optional)
  tagKey: "tagKey_example",
  // string (optional)
  tagValue: "tagValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.virtualAccountDetailsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated and shared before API handshake. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated and shared before API handshake. | defaults to undefined
 **currencyCode** | [**string**] |  | (optional) defaults to undefined
 **endDate** | [**string**] |  | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **property** | [**&#39;createdAt&#39;**]**Array<&#39;createdAt&#39;>** |  | (optional) defaults to undefined
 **size** | [**number**] |  | (optional) defaults to undefined
 **startDate** | [**string**] |  | (optional) defaults to undefined
 **tagKey** | [**string**] |  | (optional) defaults to undefined
 **tagValue** | [**string**] |  | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**VirtualAccountResponseDTO**

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


