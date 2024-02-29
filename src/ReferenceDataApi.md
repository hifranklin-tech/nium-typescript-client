# .ReferenceDataApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchBankDetailsusingRoutingCode**](ReferenceDataApi.md#fetchBankDetailsusingRoutingCode) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/country/{countryCode}/routingCodeType/{routingCodeType}/routingCodeValue/{routingCodeValue}/routingCode | Fetch Bank Details using Routing Code
[**fetchSupportedCorridors**](ReferenceDataApi.md#fetchSupportedCorridors) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/supportedCorridors | Fetch Supported Corridors
[**fetchSupportedCorridorsV2**](ReferenceDataApi.md#fetchSupportedCorridorsV2) | **GET** /api/v2/client/{clientHashId}/supportedCorridors | Fetch Supported Corridors V2
[**searchRoutingCodeUsingBankName**](ReferenceDataApi.md#searchRoutingCodeUsingBankName) | **GET** /api/v2/client/{clientHashId}/payout/banks | Search Routing Code Using Bank Name
[**searchRoutingCodeUsingBranchName**](ReferenceDataApi.md#searchRoutingCodeUsingBranchName) | **GET** /api/v2/client/{clientHashId}/payout/branches | Search Routing Code Using Branch Name
[**searchRoutingCodeusingbanknamebranchname**](ReferenceDataApi.md#searchRoutingCodeusingbanknamebranchname) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/partialSearch | Search Routing Code (using bank name/branch name)


# **fetchBankDetailsusingRoutingCode**
> Resource fetchBankDetailsusingRoutingCode()

This API allows you to fetch the bank details against the routing information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiFetchBankDetailsusingRoutingCodeRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) of a beneficiary.
  countryCode: "countryCode_example",
  // string | This field accepts the unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE
  routingCodeType: "routingCodeType_example",
  // string | This field accepts the routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes).
  routingCodeValue: "routingCodeValue_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchBankDetailsusingRoutingCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **countryCode** | [**string**] | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) of a beneficiary. | defaults to undefined
 **customerHashId** | [**string**] | This field accepts the unique customer identifier generated on customer creation. | defaults to undefined
 **routingCodeType** | [**string**] | This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE | defaults to undefined
 **routingCodeValue** | [**string**] | This field accepts the routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes). | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Resource**

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

# **fetchSupportedCorridors**
> Resource fetchSupportedCorridors()

This API will allow you to fetch the supported corridors for remittance with details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiFetchSupportedCorridorsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchSupportedCorridors(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Resource**

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

# **fetchSupportedCorridorsV2**
> Array<SupportedCorridorsResponseDTO> fetchSupportedCorridorsV2()

This API will allow you to fetch the supported corridors for remittance with details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiFetchSupportedCorridorsV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the beneficiary account type. (optional)
  beneficiaryAccountType: "beneficiaryAccountType_example",
  // string | This field accepts type of Client e.g. FI, NonFI, default NonFI. (optional)
  clientType: "clientType_example",
  // string | This field accepts the type of customer. (optional)
  customerType: "customerType_example",
  // string | This field accepts the [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes). (optional)
  destinationCountry: "destinationCountry_example",
  // string | This field accepts the [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method. (optional)
  destinationCurrency: "destinationCurrency_example",
  // string | This field accepts the different modes of payout. (optional)
  payoutMethod: "payoutMethod_example",
  // string | This field determines the routing code type for the currency. (optional)
  routingCodeType: "routingCodeType_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchSupportedCorridorsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **beneficiaryAccountType** | [**string**] | This field accepts the beneficiary account type. | (optional) defaults to undefined
 **clientType** | [**string**] | This field accepts type of Client e.g. FI, NonFI, default NonFI. | (optional) defaults to undefined
 **customerType** | [**string**] | This field accepts the type of customer. | (optional) defaults to undefined
 **destinationCountry** | [**string**] | This field accepts the [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes). | (optional) defaults to undefined
 **destinationCurrency** | [**string**] | This field accepts the [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method. | (optional) defaults to undefined
 **payoutMethod** | [**string**] | This field accepts the different modes of payout. | (optional) defaults to undefined
 **routingCodeType** | [**string**] | This field determines the routing code type for the currency. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<SupportedCorridorsResponseDTO>**

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

# **searchRoutingCodeUsingBankName**
> Array<PartialSearchBankNameResponseDTO> searchRoutingCodeUsingBankName()

This API will allow you to search the routing code details using bank name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiSearchRoutingCodeUsingBankNameRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
  countryCode: "countryCode_example",
  // 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER' | This field determines the routing code type for the search.
  routingCodeType: "IFSC",
  // string | This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
  searchValue: "searchValue_example",
  // string | This field can accept the bank code of specified branch and country. (optional)
  bankCode: "bankCode_example",
  // string | This field can accept the bank name associated with country. (optional)
  bankName: "bankName_example",
  // string | This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated. (optional)
  currencyCode: "currencyCode_example",
  // string | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL. (optional)
  payoutMethod: "payoutMethod_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.searchRoutingCodeUsingBankName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **countryCode** | [**string**] | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated. | defaults to undefined
 **routingCodeType** | [**&#39;IFSC&#39; | &#39;SWIFT&#39; | &#39;ACH CODE&#39; | &#39;BSB CODE&#39; | &#39;SORT CODE&#39; | &#39;BANK CODE&#39; | &#39;LOCATION ID&#39; | &#39;BRANCH CODE&#39; | &#39;BRANCH NAME&#39; | &#39;TRANSIT NUMBER&#39;**]**Array<&#39;IFSC&#39; &#124; &#39;SWIFT&#39; &#124; &#39;ACH CODE&#39; &#124; &#39;BSB CODE&#39; &#124; &#39;SORT CODE&#39; &#124; &#39;BANK CODE&#39; &#124; &#39;LOCATION ID&#39; &#124; &#39;BRANCH CODE&#39; &#124; &#39;BRANCH NAME&#39; &#124; &#39;TRANSIT NUMBER&#39;>** | This field determines the routing code type for the search. | defaults to undefined
 **searchValue** | [**string**] | This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS. | defaults to undefined
 **bankCode** | [**string**] | This field can accept the bank code of specified branch and country. | (optional) defaults to undefined
 **bankName** | [**string**] | This field can accept the bank name associated with country. | (optional) defaults to undefined
 **currencyCode** | [**string**] | This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated. | (optional) defaults to undefined
 **payoutMethod** | [**string**] | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<PartialSearchBankNameResponseDTO>**

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

# **searchRoutingCodeUsingBranchName**
> Array<PartialSearchBranchNameResponseDTO> searchRoutingCodeUsingBranchName()

This API will allow you to search the routing code details using branch name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiSearchRoutingCodeUsingBranchNameRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
  countryCode: "countryCode_example",
  // 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER' | This field determines the routing code type for the search.
  routingCodeType: "IFSC",
  // string | This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
  searchValue: "searchValue_example",
  // string | This field can accept the bank code of specified branch and country. (optional)
  bankCode: "bankCode_example",
  // string | This field can accept the bank name associated with country. (optional)
  bankName: "bankName_example",
  // string | This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated. (optional)
  currencyCode: "currencyCode_example",
  // string | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL. (optional)
  payoutMethod: "payoutMethod_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.searchRoutingCodeUsingBranchName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **countryCode** | [**string**] | This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated. | defaults to undefined
 **routingCodeType** | [**&#39;IFSC&#39; | &#39;SWIFT&#39; | &#39;ACH CODE&#39; | &#39;BSB CODE&#39; | &#39;SORT CODE&#39; | &#39;BANK CODE&#39; | &#39;LOCATION ID&#39; | &#39;BRANCH CODE&#39; | &#39;BRANCH NAME&#39; | &#39;TRANSIT NUMBER&#39;**]**Array<&#39;IFSC&#39; &#124; &#39;SWIFT&#39; &#124; &#39;ACH CODE&#39; &#124; &#39;BSB CODE&#39; &#124; &#39;SORT CODE&#39; &#124; &#39;BANK CODE&#39; &#124; &#39;LOCATION ID&#39; &#124; &#39;BRANCH CODE&#39; &#124; &#39;BRANCH NAME&#39; &#124; &#39;TRANSIT NUMBER&#39;>** | This field determines the routing code type for the search. | defaults to undefined
 **searchValue** | [**string**] | This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS. | defaults to undefined
 **bankCode** | [**string**] | This field can accept the bank code of specified branch and country. | (optional) defaults to undefined
 **bankName** | [**string**] | This field can accept the bank name associated with country. | (optional) defaults to undefined
 **currencyCode** | [**string**] | This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated. | (optional) defaults to undefined
 **payoutMethod** | [**string**] | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<PartialSearchBranchNameResponseDTO>**

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

# **searchRoutingCodeusingbanknamebranchname**
> Resource searchRoutingCodeusingbanknamebranchname(partialSearchDTO)

This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferenceDataApi(configuration);

let body:.ReferenceDataApiSearchRoutingCodeusingbanknamebranchnameRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // PartialSearchDTO | partialSearchDTO
  partialSearchDTO: {
    countryCode: "countryCode_example",
    currencyCode: "currencyCode_example",
    payoutMethod: "payoutMethod_example",
    routingCodeType: "IFSC",
    searchKey: "bank_name",
    searchValue: "searchValue_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.searchRoutingCodeusingbanknamebranchname(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partialSearchDTO** | **PartialSearchDTO**| partialSearchDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Resource**

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


