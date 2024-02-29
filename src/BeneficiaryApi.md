# .BeneficiaryApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountVerification**](BeneficiaryApi.md#accountVerification) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountVerification | Account verification (Confirmation of Payee)
[**addBeneficiary**](BeneficiaryApi.md#addBeneficiary) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Add Beneficiary
[**addBeneficiaryV2**](BeneficiaryApi.md#addBeneficiaryV2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Add Beneficiary V2
[**beneficiaryDetails**](BeneficiaryApi.md#beneficiaryDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Beneficiary Details
[**beneficiaryDetailsV2**](BeneficiaryApi.md#beneficiaryDetailsV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Beneficiary Details V2
[**beneficiaryList**](BeneficiaryApi.md#beneficiaryList) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Beneficiary List
[**beneficiaryListV2**](BeneficiaryApi.md#beneficiaryListV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Beneficiary List V2
[**beneficiaryValidationSchema**](BeneficiaryApi.md#beneficiaryValidationSchema) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema
[**beneficiaryValidationSchemaV2**](BeneficiaryApi.md#beneficiaryValidationSchemaV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema V2
[**confirmationofPayee**](BeneficiaryApi.md#confirmationofPayee) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/validate | Confirmation of Payee (Previous version)
[**deleteBeneficiary**](BeneficiaryApi.md#deleteBeneficiary) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Delete Beneficiary
[**updateBeneficiary**](BeneficiaryApi.md#updateBeneficiary) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Update Beneficiary
[**updateBeneficiaryV2**](BeneficiaryApi.md#updateBeneficiaryV2) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Update Beneficiary V2


# **accountVerification**
> AccountValidationResponseDTO accountVerification(accountValidationRequestDTO)

This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiAccountVerificationRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // AccountValidationRequestDTO | accountValidationRequestDTO
  accountValidationRequestDTO: {
    accountNumber: "accountNumber_example",
    bankAccountType: "CHECKING",
    bankCode: "bankCode_example",
    beneficiary: {
      accountType: "INDIVIDUAL",
      address: "address_example",
      alias: "alias_example",
      city: "city_example",
      contactNumber: "contactNumber_example",
      countryCode: "countryCode_example",
      email: "email_example",
      name: "name_example",
      postcode: "postcode_example",
      remitterBeneficiaryRelationship: "remitterBeneficiaryRelationship_example",
      state: "state_example",
    },
    destinationCountry: "destinationCountry_example",
    destinationCurrency: "destinationCurrency_example",
    payoutMethod: "CARD",
    proxyType: "proxyType_example",
    proxyValue: "proxyValue_example",
    routingInfo: [
      {
        type: "IFSC",
        value: "value_example",
      },
    ],
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.accountVerification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountValidationRequestDTO** | **AccountValidationRequestDTO**| accountValidationRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**AccountValidationResponseDTO**

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

# **addBeneficiary**
> Resource addBeneficiary(addBeneficiaryRequest)

This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiAddBeneficiaryRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // AddBeneficiaryRequest | addBeneficiaryRequest
  addBeneficiaryRequest: {
    authenticationCode: "authenticationCode_example",
    beneficiaryDetail: {
      accountType: "accountType_example",
      address: "address_example",
      autosweepPayoutAccount: true,
      beneficiaryContactName: "beneficiaryContactName_example",
      beneficiaryDob: "2023-07-08",
      beneficiaryEntityType: "beneficiaryEntityType_example",
      beneficiaryEstablishmentDate: "2023-07-08",
      city: "city_example",
      contactCountryCode: "contactCountryCode_example",
      contactNumber: "contactNumber_example",
      countryCode: "countryCode_example",
      defaultAutosweepPayoutAccount: true,
      email: "email_example",
      name: "name_example",
      postcode: "postcode_example",
      relationship: "relationship_example",
      state: "state_example",
    },
    payoutDetail: {
      accountNumber: "accountNumber_example",
      accountType: "Current",
      bankCode: "bankCode_example",
      bankName: "bankName_example",
      countryCode: "countryCode_example",
      destinationCurrency: "destinationCurrency_example",
      identificationType: "identificationType_example",
      identificationValue: "identificationValue_example",
      payoutMethod: "LOCAL",
      proxyType: "proxyType_example",
      proxyValue: "proxyValue_example",
      routingCodeType1: "routingCodeType1_example",
      routingCodeType2: "routingCodeType2_example",
      routingCodeValue1: "routingCodeValue1_example",
      routingCodeValue2: "routingCodeValue2_example",
    },
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addBeneficiaryRequest** | **AddBeneficiaryRequest**| addBeneficiaryRequest |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Resource**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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

# **addBeneficiaryV2**
> BeneficiaryResponseDTO addBeneficiaryV2(addBeneficiaryRequestDTO)

This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiAddBeneficiaryV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // AddBeneficiaryRequestDTO | addBeneficiaryRequestDTO
  addBeneficiaryRequestDTO: {
    authenticationCode: "authenticationCode_example",
    autoSweepPayoutAccount: true,
    beneficiaryAccountNumber: "beneficiaryAccountNumber_example",
    beneficiaryAccountType: "INDIVIDUAL",
    beneficiaryAddress: "beneficiaryAddress_example",
    beneficiaryAlias: "beneficiaryAlias_example",
    beneficiaryBankAccountType: "beneficiaryBankAccountType_example",
    beneficiaryBankCode: "beneficiaryBankCode_example",
    beneficiaryBankName: "beneficiaryBankName_example",
    beneficiaryCardExpiryDate: "beneficiaryCardExpiryDate_example",
    beneficiaryCardIssuerName: "beneficiaryCardIssuerName_example",
    beneficiaryCity: "beneficiaryCity_example",
    beneficiaryContactCountryCode: "beneficiaryContactCountryCode_example",
    beneficiaryContactName: "beneficiaryContactName_example",
    beneficiaryContactNumber: "beneficiaryContactNumber_example",
    beneficiaryCountryCode: "beneficiaryCountryCode_example",
    beneficiaryDob: "beneficiaryDob_example",
    beneficiaryEmail: "beneficiaryEmail_example",
    beneficiaryEntityType: "partnership",
    beneficiaryEstablishmentDate: "beneficiaryEstablishmentDate_example",
    beneficiaryIdentificationType: "beneficiaryIdentificationType_example",
    beneficiaryIdentificationValue: "beneficiaryIdentificationValue_example",
    beneficiaryName: "beneficiaryName_example",
    beneficiaryPostcode: "beneficiaryPostcode_example",
    beneficiaryState: "beneficiaryState_example",
    defaultAutoSweepPayoutAccount: true,
    destinationCountry: "destinationCountry_example",
    destinationCurrency: "destinationCurrency_example",
    encryptedBeneficiaryCardToken: "encryptedBeneficiaryCardToken_example",
    payoutMethod: "payoutMethod_example",
    proxyType: "proxyType_example",
    proxyValue: "proxyValue_example",
    remitterBeneficiaryRelationship: "remitterBeneficiaryRelationship_example",
    routingCodeType1: "routingCodeType1_example",
    routingCodeType2: "routingCodeType2_example",
    routingCodeValue1: "routingCodeValue1_example",
    routingCodeValue2: "routingCodeValue2_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addBeneficiaryV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addBeneficiaryRequestDTO** | **AddBeneficiaryRequestDTO**| addBeneficiaryRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**BeneficiaryResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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

# **beneficiaryDetails**
> Resource beneficiaryDetails()

This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryDetailsRequest = {
  // string | Unique beneficiary hash ID.
  beneficiaryHashId: "beneficiaryHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
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

# **beneficiaryDetailsV2**
> BeneficiaryResponseDTO beneficiaryDetailsV2()

This API allows you to fetch beneficiary details of an individual beneficiary.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryDetailsV2Request = {
  // string | Unique beneficiary hash ID.
  beneficiaryHashId: "beneficiaryHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryDetailsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**BeneficiaryResponseDTO**

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

# **beneficiaryList**
> Resource beneficiaryList()

This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryListRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // Array<{ [key: string]: string; }> | parameters (optional)
  parameters: [
    {
      "key": "key_example",
    },
  ],
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **parameters** | **Array&lt;{ [key: string]: string; }&gt;** | parameters | (optional) defaults to undefined
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

# **beneficiaryListV2**
> Array<BeneficiaryResponseDTO> beneficiaryListV2()

This API allows you to fetch beneficiary details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryListV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // Array<{ [key: string]: string; }> | parameters (optional)
  parameters: [
    {
      "key": "key_example",
    },
  ],
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryListV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **parameters** | **Array&lt;{ [key: string]: string; }&gt;** | parameters | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<BeneficiaryResponseDTO>**

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

# **beneficiaryValidationSchema**
> Resource beneficiaryValidationSchema()

This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryValidationSchemaRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
  currencyCode: "currencyCode_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL. (optional)
  payoutMethod: "payoutMethod_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryValidationSchema(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **currencyCode** | [**string**] | This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes). | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **payoutMethod** | [**string**] | This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL. | (optional) defaults to undefined
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

# **beneficiaryValidationSchemaV2**
> string beneficiaryValidationSchemaV2()

This API will allow you to fetch the validation schema for beneficiary validation details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiBeneficiaryValidationSchemaV2Request = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
  currencyCode: "currencyCode_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field can accept the different modes of payout. (optional)
  payoutMethod: "payoutMethod_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.beneficiaryValidationSchemaV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **currencyCode** | [**string**] | This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes). | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **payoutMethod** | [**string**] | This field can accept the different modes of payout. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**string**

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

# **confirmationofPayee**
> BeneficiaryValidationResponseDTO confirmationofPayee(beneficiaryValidationRequestDTO)

This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiConfirmationofPayeeRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // BeneficiaryValidationRequestDTO | beneficiaryValidationRequestDTO
  beneficiaryValidationRequestDTO: {
    beneficiaryAccountNumber: "beneficiaryAccountNumber_example",
    beneficiaryAccountType: "beneficiaryAccountType_example",
    beneficiaryBankCode: "beneficiaryBankCode_example",
    beneficiaryContactNumber: "beneficiaryContactNumber_example",
    beneficiaryCountryCode: "beneficiaryCountryCode_example",
    beneficiaryName: "beneficiaryName_example",
    destinationCountry: "destinationCountry_example",
    destinationCurrency: "destinationCurrency_example",
    payoutMethod: "payoutMethod_example",
    proxyType: "proxyType_example",
    proxyValue: "proxyValue_example",
    routingCodeType1: "routingCodeType1_example",
    routingCodeValue1: "routingCodeValue1_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.confirmationofPayee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryValidationRequestDTO** | **BeneficiaryValidationRequestDTO**| beneficiaryValidationRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**BeneficiaryValidationResponseDTO**

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

# **deleteBeneficiary**
> Resource deleteBeneficiary()

This API allows you to delete a beneficiary.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiDeleteBeneficiaryRequest = {
  // string | Unique beneficiary hash ID.
  beneficiaryHashId: "beneficiaryHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.deleteBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
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

# **updateBeneficiary**
> Resource updateBeneficiary()

This API allows you to update beneficiary details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiUpdateBeneficiaryRequest = {
  // string | Unique beneficiary hash ID.
  beneficiaryHashId: "beneficiaryHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // AddBeneficiaryRequest | Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending. (optional)
  addBeneficiaryRequest: {
    authenticationCode: "authenticationCode_example",
    beneficiaryDetail: {
      accountType: "accountType_example",
      address: "address_example",
      autosweepPayoutAccount: true,
      beneficiaryContactName: "beneficiaryContactName_example",
      beneficiaryDob: "2023-07-08",
      beneficiaryEntityType: "beneficiaryEntityType_example",
      beneficiaryEstablishmentDate: "2023-07-08",
      city: "city_example",
      contactCountryCode: "contactCountryCode_example",
      contactNumber: "contactNumber_example",
      countryCode: "countryCode_example",
      defaultAutosweepPayoutAccount: true,
      email: "email_example",
      name: "name_example",
      postcode: "postcode_example",
      relationship: "relationship_example",
      state: "state_example",
    },
    payoutDetail: {
      accountNumber: "accountNumber_example",
      accountType: "Current",
      bankCode: "bankCode_example",
      bankName: "bankName_example",
      countryCode: "countryCode_example",
      destinationCurrency: "destinationCurrency_example",
      identificationType: "identificationType_example",
      identificationValue: "identificationValue_example",
      payoutMethod: "LOCAL",
      proxyType: "proxyType_example",
      proxyValue: "proxyValue_example",
      routingCodeType1: "routingCodeType1_example",
      routingCodeType2: "routingCodeType2_example",
      routingCodeValue1: "routingCodeValue1_example",
      routingCodeValue2: "routingCodeValue2_example",
    },
  },
};

apiInstance.updateBeneficiary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addBeneficiaryRequest** | **AddBeneficiaryRequest**| Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending. |
 **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Resource**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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

# **updateBeneficiaryV2**
> BeneficiaryResponseDTO updateBeneficiaryV2()

This API allows you to update beneficiary details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BeneficiaryApi(configuration);

let body:.BeneficiaryApiUpdateBeneficiaryV2Request = {
  // string | Unique beneficiary hash ID.
  beneficiaryHashId: "beneficiaryHashId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // UpdateBeneficiaryRequestDTO | Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending. (optional)
  updateBeneficiaryRequestDTO: {
    authenticationCode: "authenticationCode_example",
    autosweepPayoutAccount: true,
    beneficiaryAccountNumber: "beneficiaryAccountNumber_example",
    beneficiaryAccountType: "beneficiaryAccountType_example",
    beneficiaryAddress: "beneficiaryAddress_example",
    beneficiaryAlias: "beneficiaryAlias_example",
    beneficiaryBankAccountType: "beneficiaryBankAccountType_example",
    beneficiaryBankCode: "beneficiaryBankCode_example",
    beneficiaryBankName: "beneficiaryBankName_example",
    beneficiaryCardExpiryDate: "beneficiaryCardExpiryDate_example",
    beneficiaryCardIssuerName: "beneficiaryCardIssuerName_example",
    beneficiaryCity: "beneficiaryCity_example",
    beneficiaryContactCountryCode: "beneficiaryContactCountryCode_example",
    beneficiaryContactName: "beneficiaryContactName_example",
    beneficiaryContactNumber: "beneficiaryContactNumber_example",
    beneficiaryCountryCode: "beneficiaryCountryCode_example",
    beneficiaryDob: "beneficiaryDob_example",
    beneficiaryEmail: "beneficiaryEmail_example",
    beneficiaryEntityType: "partnership",
    beneficiaryEstablishmentDate: "beneficiaryEstablishmentDate_example",
    beneficiaryIdentificationType: "beneficiaryIdentificationType_example",
    beneficiaryIdentificationValue: "beneficiaryIdentificationValue_example",
    beneficiaryName: "beneficiaryName_example",
    beneficiaryPostcode: "beneficiaryPostcode_example",
    beneficiaryState: "beneficiaryState_example",
    destinationCountry: "destinationCountry_example",
    destinationCurrency: "destinationCurrency_example",
    encryptedBeneficiaryCardToken: "encryptedBeneficiaryCardToken_example",
    payoutMethod: "LOCAL",
    proxyType: "proxyType_example",
    proxyValue: "proxyValue_example",
    remitterBeneficiaryRelationship: "remitterBeneficiaryRelationship_example",
    routingCodeType1: "routingCodeType1_example",
    routingCodeType2: "routingCodeType2_example",
    routingCodeValue1: "routingCodeValue1_example",
    routingCodeValue2: "routingCodeValue2_example",
  },
};

apiInstance.updateBeneficiaryV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBeneficiaryRequestDTO** | **UpdateBeneficiaryRequestDTO**| Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending. |
 **beneficiaryHashId** | [**string**] | Unique beneficiary hash ID. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**BeneficiaryResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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


