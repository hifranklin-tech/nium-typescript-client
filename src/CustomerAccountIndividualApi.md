# .CustomerAccountIndividualApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomer**](CustomerAccountIndividualApi.md#addCustomer) | **POST** /api/v1/client/{clientHashId}/customer | Add Customer
[**addCustomerUsingMyInfoSG**](CustomerAccountIndividualApi.md#addCustomerUsingMyInfoSG) | **POST** /api/v1/client/{clientHashId}/customer-min-data | Add Customer Using MyInfo [SG]
[**addCustomerUsingeDocumentVerification**](CustomerAccountIndividualApi.md#addCustomerUsingeDocumentVerification) | **POST** /api/v3/client/{clientHashId}/customer | Add Customer Using e-Document Verification
[**customerUpdate**](CustomerAccountIndividualApi.md#customerUpdate) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/updateCustomer | Customer Update
[**fetchIndividualCustomerRFIDetails**](CustomerAccountIndividualApi.md#fetchIndividualCustomerRFIDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Fetch Individual Customer RFI Details
[**respondtoRFI**](CustomerAccountIndividualApi.md#respondtoRFI) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Respond to RFI
[**unifiedAddCustomer**](CustomerAccountIndividualApi.md#unifiedAddCustomer) | **POST** /api/v4/client/{clientHashId}/customer | Unified Add Customer
[**uploadDocument**](CustomerAccountIndividualApi.md#uploadDocument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/uploadDocuments | Upload Document


# **addCustomer**
> CustomerDetailResponseDTO addCustomer(customerDataRequestDTO)

This API allows you to register a customer with a wallet in NIUM\'s cards platform.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiAddCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // CustomerDataRequestDTO | customerDataRequestDTO
  customerDataRequestDTO: {
    additionalInfo: {
      "key": "key_example",
    },
    billingAddress1: "72 James Buildin",
    billingAddress2: "Springfield Road",
    billingCity: "Paris",
    billingCountry: "FR",
    billingLandmark: "near Post Office",
    billingState: "Ile-de-France",
    billingZipCode: "048581",
    birthCountry: "birthCountry_example",
    correspondenceAddress1: "472 James Building",
    correspondenceAddress2: "Springfield Road",
    correspondenceCity: "Paris",
    correspondenceCountry: "FR",
    correspondenceLandmark: "near Post Office",
    correspondenceState: "Ile-de-France",
    correspondenceZipCode: "048581",
    countryCode: "SG",
    countryIP: "2.2.2.2",
    countryOfBirth: "FR",
    customerHashId: "2992c5c6-823b-4fa9-a64b-add0ea88bb66",
    dateOfBirth: "1995-01-13",
    deliveryAddress1: "472 James Building",
    deliveryAddress2: "Springfield Road",
    deliveryCity: "Paris",
    deliveryCountry: "FR",
    deliveryLandmark: "near Post Office",
    deliveryState: "Ile-de-France",
    deliveryZipCode: "048581",
    deviceInfo: "android",
    email: "arnav42@xyzmail.com",
    enableDocUpload: true,
    estimatedMonthlyFunding: "<1000",
    estimatedMonthlyFundingCurrency: "EUR",
    expectedCountriesToSendReceiveFrom: ["FR","DE"],
    firstName: "Arnav",
    gender: "Male",
    identificationDoc: [
      {
        identificationDocColor: "identificationDocColor_example",
        identificationDocExpiry: "identificationDocExpiry_example",
        identificationDocHolderName: "identificationDocHolderName_example",
        identificationDocIssuanceCountry: "identificationDocIssuanceCountry_example",
        identificationDocReferenceNumber: "identificationDocReferenceNumber_example",
        identificationDocument: [
          {
            document: "document_example",
            fileName: "fileName_example",
            fileType: "fileType_example",
          },
        ],
        identificationIssuingAuthority: "identificationIssuingAuthority_example",
        identificationIssuingDate: "identificationIssuingDate_example",
        identificationType: "identificationType_example",
        identificationValue: "identificationValue_example",
      },
    ],
    intendedUseOfAccount: "Receiving from/Transfers to friends or family",
    internationalPaymentsSupported: true,
    ipAddress: "1.1.1.1",
    kyc: true,
    lastName: "Paul",
    middleName: "Kumar",
    mobile: "991122142",
    nationality: "SG",
    nativeLanguageName: "界限",
    occupation: "OC0001",
    pep: false,
    preferredName: "Arnav",
    segment: "gold",
    sessionId: "1234",
    taxDetails: [
      {
        countryOfResidence: "FR",
        taxIdNumber: "FR123456",
      },
    ],
    upgradeRequest: true,
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerDataRequestDTO** | **CustomerDataRequestDTO**| customerDataRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerDetailResponseDTO**

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

# **addCustomerUsingMyInfoSG**
> CustomerDataExternalResponseDTO addCustomerUsingMyInfoSG(customerDataExternalRequestDTO)

This API will create customers using minimal data, the rest of the partial data will be pulled via MyInfo etc. which is locked and cannot be edited and further rest fields can be updated using Customer Update API.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiAddCustomerUsingMyInfoSGRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // CustomerDataExternalRequestDTO | customerDataExternalRequestDTO
  customerDataExternalRequestDTO: {
    countryCode: "SG",
    customerHashId: "customerHashId_example",
    email: "john@abc.com",
    mobile: "4435544567",
    nativeLanguageName: "nativeLanguageName_example",
    segment: "segment_example",
    upgradeRequest: true,
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addCustomerUsingMyInfoSG(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerDataExternalRequestDTO** | **CustomerDataExternalRequestDTO**| customerDataExternalRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerDataExternalResponseDTO**

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

# **addCustomerUsingeDocumentVerification**
> AddCustomerResponseDTO addCustomerUsingeDocumentVerification(eVerifyCustomerRegistrationRequestDTO)

  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiAddCustomerUsingeDocumentVerificationRequest = {
  // string | clientHashId
  clientHashId: "{{clientHashId}}",
  // EVerifyCustomerRegistrationRequestDTO | requestDTO
  eVerifyCustomerRegistrationRequestDTO: {
    billingAddress1: "billingAddress1_example",
    billingAddress2: "billingAddress2_example",
    billingCity: "billingCity_example",
    billingCountry: "billingCountry_example",
    billingState: "billingState_example",
    billingZipCode: "billingZipCode_example",
    countryCode: "countryCode_example",
    countryIP: "countryIP_example",
    countryOfBirth: "countryOfBirth_example",
    customerHashId: "customerHashId_example",
    dateOfBirth: "dateOfBirth_example",
    deviceInfo: "deviceInfo_example",
    email: "email_example",
    estimatedMonthlyFunding: "estimatedMonthlyFunding_example",
    estimatedMonthlyFundingCurrency: "estimatedMonthlyFundingCurrency_example",
    expectedCountriesToSendReceiveFrom: [
      "expectedCountriesToSendReceiveFrom_example",
    ],
    firstName: "firstName_example",
    gender: "gender_example",
    intendedUseOfAccount: "intendedUseOfAccount_example",
    internationalPaymentsSupported: true,
    ipAddress: "ipAddress_example",
    lastName: "lastName_example",
    middleName: "middleName_example",
    mobile: "mobile_example",
    nationality: "nationality_example",
    nativeLanguageName: "nativeLanguageName_example",
    pep: true,
    preferredName: "preferredName_example",
    segment: "segment_example",
    sessionId: "sessionId_example",
    taxDetails: [
      {
        countryOfResidence: "FR",
        taxIdNumber: "FR123456",
      },
    ],
    upgradeRequest: true,
    verificationConsent: true,
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addCustomerUsingeDocumentVerification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eVerifyCustomerRegistrationRequestDTO** | **EVerifyCustomerRegistrationRequestDTO**| requestDTO |
 **clientHashId** | [**string**] | clientHashId | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AddCustomerResponseDTO**

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

# **customerUpdate**
> UpdateCustomerResponseDTO customerUpdate()

This API allows you to update the customer details subject to the following constraints: 1. If compliance status equals to COMPLETED. You can only update email, mobile, delivery address details, and correspondence address details. You may NOT update the billing address. 2. In other cases, you may update any of the fields. At least one key-value pair is needed in the request body of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiCustomerUpdateRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
  // UpdateCustomerDTO | Customer update request (optional)
  updateCustomerDTO: {
    additionalInfo: {
      "key": "key_example",
    },
    authenticationCode: "authCode",
    billingAddress1: "#20-05, Hong Leong Building",
    billingAddress2: "16 Raffles Quay",
    billingAddressId: "billingAddressId_example",
    billingCity: "Singapore",
    billingCountry: "SG",
    billingLandmark: "Near Marina Blvd",
    billingState: "Singapore",
    billingZipCode: "048581",
    blockType: "blockType_example",
    correspondenceAddress1: "#20-05, Hong Leong Building",
    correspondenceAddress2: "16 Raffles Quay",
    correspondenceAddressId: "correspondenceAddressId_example",
    correspondenceCity: "Singapore",
    correspondenceCountry: "SG",
    correspondenceLandmark: "Near Marina blvd",
    correspondenceState: "Singapore",
    correspondenceZipCode: "048581",
    countryCode: "SG",
    countryIP: "2.2.2.2",
    customerHashId: "customerHashId_example",
    deliveryAddress1: "#20-05, Hong Leong Building",
    deliveryAddress2: "16 Raffles Quay",
    deliveryAddressId: "deliveryAddressId_example",
    deliveryCity: "Singapore",
    deliveryCountry: "SG",
    deliveryLandmark: "Near Marina Blvd",
    deliveryState: "Singapore",
    deliveryZipCode: "048581",
    deviceInfo: "android",
    email: "john@xyzmail.com",
    employeeId: "employeeId_example",
    ipAddress: "1.1.1.1",
    mobile: "81334300",
    nativeLanguageName: "界限",
    segment: "gold",
    sessionId: "1234",
  },
};

apiInstance.customerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomerDTO** | **UpdateCustomerDTO**| Customer update request |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**UpdateCustomerResponseDTO**

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

# **fetchIndividualCustomerRFIDetails**
> Array<CustomerRfiDetailsResponse> fetchIndividualCustomerRFIDetails()

This API allows you to fetch details of RFI raised as part of Individual customer onboarding.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiFetchIndividualCustomerRFIDetailsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchIndividualCustomerRFIDetails(body).then((data:any) => {
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

**Array<CustomerRfiDetailsResponse>**

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

# **respondtoRFI**
> UploadRfiDetailsResponseDto respondtoRFI(uploadRfiDocumentRequestDto)

This API allows you to respond to an RFI raised by NIUM compliance team. You may use this API to respond to an RFI for data or documents when the customer\'s compliance status is RFI_REQUESTED.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiRespondtoRFIRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // UploadRfiDocumentRequestDto | RFI response object
  uploadRfiDocumentRequestDto: {
    rfiResponseRequest: [
      {
        addressLine1: "addressLine1_example",
        addressLine2: "addressLine2_example",
        billingCountry: "billingCountry_example",
        city: "city_example",
        country: "country_example",
        dateOfBirth: "dateOfBirth_example",
        employmentStatus: "employmentStatus_example",
        firstName: "firstName_example",
        gender: "gender_example",
        identificationDoc: {
          identificationDocColor: "identificationDocColor_example",
          identificationDocExpiry: "identificationDocExpiry_example",
          identificationDocHolderName: "identificationDocHolderName_example",
          identificationDocIssuanceCountry: "identificationDocIssuanceCountry_example",
          identificationDocReferenceNumber: "identificationDocReferenceNumber_example",
          identificationDocument: [
            {
              document: "document_example",
              fileName: "fileName_example",
              fileType: "fileType_example",
            },
          ],
          identificationIssuingAuthority: "identificationIssuingAuthority_example",
          identificationIssuingDate: "identificationIssuingDate_example",
          identificationType: "identificationType_example",
          identificationValue: "identificationValue_example",
        },
        industryType: "industryType_example",
        intendedUseOfAccount: "intendedUseOfAccount_example",
        isPep: "true",
        lastName: "lastName_example",
        middleName: "middleName_example",
        nationality: "nationality_example",
        postcode: "postcode_example",
        rfiHashId: "rfiHashId_example",
        sourceOfFunds: "sourceOfFunds_example",
        state: "state_example",
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.respondtoRFI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadRfiDocumentRequestDto** | **UploadRfiDocumentRequestDto**| RFI response object |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**UploadRfiDetailsResponseDto**

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

# **unifiedAddCustomer**
> AddCustomerResponseDTO unifiedAddCustomer(requestDto)

This API onboards customers based on their client configuration and preference.   >ℹ️ INFO   The \'childMustHaveParent\' setting can be optionally set to \'true\' for Payroll and Spend and Management clients, and it should be set to \'false\' for all other clients.   For details, see [Parent-child hierarchy](doc:parent-child-hierarchy).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiUnifiedAddCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // UnifiedAddCustomerRequest | Add individual customer
  requestDto: {
    selectAnObjectBasedOnTheClientConfigParamChildMustHaveParent: null,
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.unifiedAddCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestDto** | **UnifiedAddCustomerRequest**| Add individual customer |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AddCustomerResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadDocument**
> ComplianceDocumentResponseDTO uploadDocument(complianceDocumentDTO)

This API allows to upload documents necessary for customer onboarding. Refer to the RFI details on required documents.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountIndividualApi(configuration);

let body:.CustomerAccountIndividualApiUploadDocumentRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // ComplianceDocumentDTO | Compliance documents
  complianceDocumentDTO: {
    identificationDoc: [
      {
        identificationDocColor: "identificationDocColor_example",
        identificationDocExpiry: "identificationDocExpiry_example",
        identificationDocHolderName: "identificationDocHolderName_example",
        identificationDocIssuanceCountry: "identificationDocIssuanceCountry_example",
        identificationDocReferenceNumber: "identificationDocReferenceNumber_example",
        identificationDocument: [
          {
            document: "document_example",
            fileName: "fileName_example",
            fileType: "fileType_example",
          },
        ],
        identificationIssuingAuthority: "identificationIssuingAuthority_example",
        identificationIssuingDate: "identificationIssuingDate_example",
        identificationType: "identificationType_example",
        identificationValue: "identificationValue_example",
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.uploadDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complianceDocumentDTO** | **ComplianceDocumentDTO**| Compliance documents |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ComplianceDocumentResponseDTO**

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


