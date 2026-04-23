# BeneficiaryApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountVerification**](#accountverification) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountVerification | Account verification (Confirmation of Payee)|
|[**beneficiaryByHashId**](#beneficiarybyhashid) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Beneficiary Details V2|
|[**createBeneficiary**](#createbeneficiary) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Add Beneficiary V2|
|[**deleteBeneficiary**](#deletebeneficiary) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Delete Beneficiary|
|[**getBeneficiaries**](#getbeneficiaries) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Beneficiary List V2|
|[**getModifiedValidationSchemas**](#getmodifiedvalidationschemas) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema V2|
|[**getValidationSchemas**](#getvalidationschemas) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema|
|[**updateBeneficiary**](#updatebeneficiary) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Update Beneficiary V2|
|[**validateBeneficiaryDetails**](#validatebeneficiarydetails) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/validate | Confirmation of Payee (Previous version)|

# **accountVerification**
> AccountValidationResponseDTO accountVerification(accountValidationRequestDTO)

This API enables you to verify the details of a beneficiary\'s bank account. This API only supports account verification for specific destinations and corridors. For more information, see [Account verification](https://docs.nium.com/apis/docs/account-verification) for details.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration,
    AccountValidationRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let accountValidationRequestDTO: AccountValidationRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.accountVerification(
    clientHashId,
    customerHashId,
    accountValidationRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountValidationRequestDTO** | **AccountValidationRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**AccountValidationResponseDTO**

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

# **beneficiaryByHashId**
> BeneficiaryResponseDTO beneficiaryByHashId()

This API allows you to fetch beneficiary details of an individual beneficiary.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let beneficiaryHashId: string; //Unique beneficiary hash ID. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.beneficiaryByHashId(
    clientHashId,
    customerHashId,
    beneficiaryHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BeneficiaryResponseDTO**

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

# **createBeneficiary**
> BeneficiaryResponseDTO createBeneficiary(addBeneficiaryRequestDTO)

This API allows you to add a beneficiary to transfer funds.  ⚠️ **IMPORTANT**   Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](https://docs.nium.com/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not. 

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration,
    AddBeneficiaryRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let addBeneficiaryRequestDTO: AddBeneficiaryRequestDTO; //Add Beneficiary Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.createBeneficiary(
    clientHashId,
    customerHashId,
    addBeneficiaryRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addBeneficiaryRequestDTO** | **AddBeneficiaryRequestDTO**| Add Beneficiary Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BeneficiaryResponseDTO**

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

# **deleteBeneficiary**
> File deleteBeneficiary()

This API allows you to delete a beneficiary.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let beneficiaryHashId: string; //Unique beneficiary hash ID. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.deleteBeneficiary(
    clientHashId,
    customerHashId,
    beneficiaryHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


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

# **getBeneficiaries**
> Array<BeneficiaryResponseDTO> getBeneficiaries()

This API allows you to fetch beneficiary details.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let beneficiaryName: string; //The beneficiary name. (optional) (default to undefined)
let beneficiaryAccountNumber: string; //This field accepts an account number. (optional) (default to undefined)
let destinationCurrency: string; //The 3-letter [ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) currency code. (optional) (default to undefined)
let payoutMethod: 'LOCAL' | 'SWIFT' | 'WALLET' | 'CASH' | 'CARD' | 'PROXY' | 'CHECK'; //This field accepts the payout method for the remittance payout. This field can accept one of the following values: (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getBeneficiaries(
    clientHashId,
    customerHashId,
    beneficiaryName,
    beneficiaryAccountNumber,
    destinationCurrency,
    payoutMethod,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **beneficiaryName** | [**string**] | The beneficiary name. | (optional) defaults to undefined|
| **beneficiaryAccountNumber** | [**string**] | This field accepts an account number. | (optional) defaults to undefined|
| **destinationCurrency** | [**string**] | The 3-letter [ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) currency code. | (optional) defaults to undefined|
| **payoutMethod** | [**&#39;LOCAL&#39; | &#39;SWIFT&#39; | &#39;WALLET&#39; | &#39;CASH&#39; | &#39;CARD&#39; | &#39;PROXY&#39; | &#39;CHECK&#39;**]**Array<&#39;LOCAL&#39; &#124; &#39;SWIFT&#39; &#124; &#39;WALLET&#39; &#124; &#39;CASH&#39; &#124; &#39;CARD&#39; &#124; &#39;PROXY&#39; &#124; &#39;CHECK&#39;>** | This field accepts the payout method for the remittance payout. This field can accept one of the following values: | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**Array<BeneficiaryResponseDTO>**

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

# **getModifiedValidationSchemas**
> string getModifiedValidationSchemas()

This API will allow you to fetch the validation schema for beneficiary validation details.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let currencyCode: string; //The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). (default to undefined)
let payoutMethod: 'LOCAL' | 'SWIFT' | 'WALLET' | 'CASH' | 'CARD' | 'PROXY' | 'CHECK'; //This field can accept the different modes of payout. (optional) (default to undefined)
let destinationCountry: string; //The destination country. (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getModifiedValidationSchemas(
    clientHashId,
    customerHashId,
    currencyCode,
    payoutMethod,
    destinationCountry,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **currencyCode** | [**string**] | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | defaults to undefined|
| **payoutMethod** | [**&#39;LOCAL&#39; | &#39;SWIFT&#39; | &#39;WALLET&#39; | &#39;CASH&#39; | &#39;CARD&#39; | &#39;PROXY&#39; | &#39;CHECK&#39;**]**Array<&#39;LOCAL&#39; &#124; &#39;SWIFT&#39; &#124; &#39;WALLET&#39; &#124; &#39;CASH&#39; &#124; &#39;CARD&#39; &#124; &#39;PROXY&#39; &#124; &#39;CHECK&#39;>** | This field can accept the different modes of payout. | (optional) defaults to undefined|
| **destinationCountry** | [**string**] | The destination country. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**string**

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

# **getValidationSchemas**
> File getValidationSchemas()

This API allows you to fetch the validation schema for beneficiary validation details.  ⚠️ **WARNING**   This API version is deprecated. Eventually, a deprecated API version becomes unsupported.  [Beneficiary Validation Schema V2](https://docs.nium.com/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API. 

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let currencyCode: string; //The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). (default to undefined)
let payoutMethod: string; //This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL. (optional) (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getValidationSchemas(
    clientHashId,
    customerHashId,
    currencyCode,
    payoutMethod,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **currencyCode** | [**string**] | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | defaults to undefined|
| **payoutMethod** | [**string**] | This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL. | (optional) defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**File**

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

# **updateBeneficiary**
> BeneficiaryResponseDTO updateBeneficiary(updateBeneficiaryRequestDTO)

This API allows you to update beneficiary details.

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration,
    UpdateBeneficiaryRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let beneficiaryHashId: string; //Unique beneficiary hash ID. (default to undefined)
let updateBeneficiaryRequestDTO: UpdateBeneficiaryRequestDTO; //Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.updateBeneficiary(
    clientHashId,
    customerHashId,
    beneficiaryHashId,
    updateBeneficiaryRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBeneficiaryRequestDTO** | **UpdateBeneficiaryRequestDTO**| Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending. | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BeneficiaryResponseDTO**

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

# **validateBeneficiaryDetails**
> BeneficiaryValidationResponseDTO validateBeneficiaryDetails(beneficiaryValidationRequestDTO)

This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)

### Example

```typescript
import {
    BeneficiaryApi,
    Configuration,
    BeneficiaryValidationRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new BeneficiaryApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let beneficiaryValidationRequestDTO: BeneficiaryValidationRequestDTO; //Beneficiary Validation Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.validateBeneficiaryDetails(
    clientHashId,
    customerHashId,
    beneficiaryValidationRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **beneficiaryValidationRequestDTO** | **BeneficiaryValidationRequestDTO**| Beneficiary Validation Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**BeneficiaryValidationResponseDTO**

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

