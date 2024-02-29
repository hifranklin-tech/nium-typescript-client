# .PayoutApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerGetCardWidget**](PayoutApi.md#customerGetCardWidget) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/widget/token | Get Card Widget
[**fetchRemittanceLifeCycleStatus**](PayoutApi.md#fetchRemittanceLifeCycleStatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/audit | Fetch Remittance Life Cycle Status
[**poP**](PayoutApi.md#poP) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/receipt | Get Proof Of Payment
[**purposeofTransfer**](PayoutApi.md#purposeofTransfer) | **GET** /api/v1/remittance/purposeCodes | Purpose of Transfer
[**respondtoTransactionRFI**](PayoutApi.md#respondtoTransactionRFI) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{authCode}/rfi/upload | Respond to Transaction RFI
[**transferMoney**](PayoutApi.md#transferMoney) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance | Transfer Money
[**withdrawFundsFromWallet**](PayoutApi.md#withdrawFundsFromWallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/refund | Withdraw Funds from Wallet


# **customerGetCardWidget**
> CustomerCardWidgetTokenResponse customerGetCardWidget(customerCardWidgetTokenRequestDTO)

This API allows you to use NIUM’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiCustomerGetCardWidgetRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated during customer creation.
  customerHashId: "customerHashId_example",
  // CustomerCardWidgetTokenRequestDTO | cardWidgetTokenRequestDTO
  customerCardWidgetTokenRequestDTO: {
    cardType: "cardType_example",
    clientDomain: "clientDomain_example",
    cssAttributes: {
      button: {
        borderColor: "borderColor_example",
        color: "color_example",
        fontSize: "fontSize_example",
        textColor: "textColor_example",
      },
      container: {
        backgroundColor: "backgroundColor_example",
        borderColor: "borderColor_example",
      },
      inputField: {
        activeBorderColor: "activeBorderColor_example",
        errorBorderColor: "errorBorderColor_example",
        errorMessageColor: "errorMessageColor_example",
        labelColor: "labelColor_example",
        labelFontSize: "labelFontSize_example",
      },
    },
    destinationCountry: "destinationCountry_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.customerGetCardWidget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerCardWidgetTokenRequestDTO** | **CustomerCardWidgetTokenRequestDTO**| cardWidgetTokenRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated during customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CustomerCardWidgetTokenResponse**

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

# **fetchRemittanceLifeCycleStatus**
> Array<RemittanceEventsResponseDTO2> fetchRemittanceLifeCycleStatus()

This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiFetchRemittanceLifeCycleStatusRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This is a unique system reference number generated by card issuance platform for the transaction.
  systemReferenceNumber: "systemReferenceNumber_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchRemittanceLifeCycleStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **systemReferenceNumber** | [**string**] | This is a unique system reference number generated by card issuance platform for the transaction. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<RemittanceEventsResponseDTO2>**

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

# **poP**
> void poP()

This API allows you to download a proof of payment receipt against a transaction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiPoPRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique System Reference Number generated on Transfer Money request.
  systemReferenceNumber: "systemReferenceNumber_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.poP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **systemReferenceNumber** | [**string**] | Unique System Reference Number generated on Transfer Money request. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**void**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - System returns a Transaction Receipt file named as TransactionReceipt_systemReferenceNumber.pdf |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **purposeofTransfer**
> Array<PurposeCodeResponseDTO> purposeofTransfer()

This API will allow you to fetch the list of purpose of transfer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiPurposeofTransferRequest = {
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.purposeofTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<PurposeCodeResponseDTO>**

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

# **respondtoTransactionRFI**
> UploadRfiDetailsResponseDTO respondtoTransactionRFI(uploadRfiDocumentRequestDTO)

This API allows you to respond to an RFI raised for a transaction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiRespondtoTransactionRFIRequest = {
  // string | Authorization code of the transaction.
  authCode: "authCode_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // UploadRfiDocumentRequestDTO | uploadRfiDocumentRequestDTO
  uploadRfiDocumentRequestDTO: {
    rfiResponseRequest: [
      {
        rfiHashId: "rfiHashId_example",
        rfiResponseInfo: {
          additionalInfo: {
            "key": "key_example",
          },
          address: {
            addressLine1: "addressLine1_example",
            addressLine2: "addressLine2_example",
            city: "city_example",
            country: "country_example",
            postcode: "postcode_example",
            state: "state_example",
          },
          bankAccountNumber: "bankAccountNumber_example",
          bankName: "bankName_example",
          companyName: "companyName_example",
          dateOfBirth: "dateOfBirth_example",
          firstName: "firstName_example",
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
          lastName: "lastName_example",
          middleName: "middleName_example",
          nationality: "nationality_example",
        },
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.respondtoTransactionRFI(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadRfiDocumentRequestDTO** | **UploadRfiDocumentRequestDTO**| uploadRfiDocumentRequestDTO |
 **authCode** | [**string**] | Authorization code of the transaction. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**UploadRfiDetailsResponseDTO**

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

# **transferMoney**
> RemittanceResponseDTO transferMoney(remittanceTransactionsRequestDTO)

This API will allow you to send money to the registered beneficiary.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiTransferMoneyRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // RemittanceTransactionsRequestDTO | remittanceTransactionsRequestDTO
  remittanceTransactionsRequestDTO: {
    additionalFees: {
      feeType: "FIXED",
      feeValue: 2,
      fxMarkup: 0.2,
    },
    authenticationCode: "authenticationCode_example",
    beneficiary: {
      id: "5f7ddd6a56b63400178319c5",
    },
    customerComments: "Transfer to family",
    deviceDetails: {
      countryIP: "66.249.74.64",
      deviceInfo: "macOS",
      ipAddress: "45.48.241.198",
      sessionId: "40531ac01a6f11edafc28dba55d51275",
    },
    exemptionCode: "01 - Trusted Beneficiary",
    ownPayment: true,
    payout: {
      auditId: 112,
      destinationAmount: 0,
      preScreening: false,
      scheduledPayoutDate: "2022-11-29",
      serviceTime: "2022-11-29",
      sourceAmount: 100,
      sourceCurrency: "INR",
      swiftFeeType: "BEN",
      tradeOrderID: "TR012345",
    },
    purposeCode: "IR01802",
    remitter: {
      accountType: "INDIVIDUAL",
      address: "address_example",
      bankAccountNumber: "bankAccountNumber_example",
      city: "city_example",
      contactNumber: "contactNumber_example",
      countryCode: "countryCode_example",
      dob: "dob_example",
      identificationNumber: "identificationNumber_example",
      identificationType: "identificationType_example",
      industryType: "industryType_example",
      name: "name_example",
      nationality: "nationality_example",
      originatingFIName: "originatingFIName_example",
      placeOfBirth: "placeOfBirth_example",
      postcode: "postcode_example",
      state: "state_example",
    },
    sourceOfFunds: "Business Owner/Shareholder",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.transferMoney(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remittanceTransactionsRequestDTO** | **RemittanceTransactionsRequestDTO**| remittanceTransactionsRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**RemittanceResponseDTO**

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

# **withdrawFundsFromWallet**
> ApiResponseOfWalletRefundResponseDTO withdrawFundsFromWallet(walletRefundRequestDTO)

This API allows you to withdraw funds from the customer\'s wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiWithdrawFundsFromWalletRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // WalletRefundRequestDTO | walletRefundRequestDTO
  walletRefundRequestDTO: {
    accountName: "accountName_example",
    accountNumber: "accountNumber_example",
    amount: 10,
    bankCode: "bankCode_example",
    bankName: "bankName_example",
    comments: "An instruction/message to support personnel",
    currencyCode: "SGD",
    pocketName: "MEAL",
    refundMode: "CASH",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.withdrawFundsFromWallet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletRefundRequestDTO** | **WalletRefundRequestDTO**| walletRefundRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ApiResponseOfWalletRefundResponseDTO**

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


