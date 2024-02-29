# .LifecycleApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateCard**](LifecycleApi.md#activateCard) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate | Activate Card V2
[**activateCard1**](LifecycleApi.md#activateCard1) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate | Activate Card
[**addCard**](LifecycleApi.md#addCard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card | Add Card
[**addCardV2**](LifecycleApi.md#addCardV2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card | Add Card V2
[**assignCard**](LifecycleApi.md#assignCard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/assignCard | Assign Card
[**blockAndReplaceCardV2**](LifecycleApi.md#blockAndReplaceCardV2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/blockAndReplace | Block and Replace Card
[**blockUnblockCards**](LifecycleApi.md#blockUnblockCards) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/cardAction | Block/Unblock Cards
[**cardDetails**](LifecycleApi.md#cardDetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Card Details
[**cardDetailsV2**](LifecycleApi.md#cardDetailsV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Card Details V2
[**cardList**](LifecycleApi.md#cardList) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List
[**cardListV2**](LifecycleApi.md#cardListV2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List V2
[**getCardWidget**](LifecycleApi.md#getCardWidget) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/widget/showCardDetails | Get Card Details Widget
[**issueReplacementCard**](LifecycleApi.md#issueReplacementCard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/replaceCard | Issue Replacement Card
[**lockUnlockCardV2**](LifecycleApi.md#lockUnlockCardV2) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/lockAction | Lock/Unlock Cards
[**renewCard**](LifecycleApi.md#renewCard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/renewCard | Renew Card
[**updateCardDetailsV2**](LifecycleApi.md#updateCardDetailsV2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Update Card Details V2


# **activateCard**
> ActivateCardResponseV2DTO activateCard(activateCardRequestV2DTO)

This API allows you to activate a card after delivery to the customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiActivateCardRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // ActivateCardRequestV2DTO | Activate card request
  activateCardRequestV2DTO: {
    activationCode: "90090012",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.activateCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activateCardRequestV2DTO** | **ActivateCardRequestV2DTO**| Activate card request |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**ActivateCardResponseV2DTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **activateCard1**
> ActivateCardResponseDTO activateCard1()

This API allows you to activate a card after delivery to a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiActivateCard1Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.activateCard1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**ActivateCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCard**
> AddCardResponseDTO addCard(addCardRequest)

This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiAddCardRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // AddCardRequest | addCardRequest
  addCardRequest: {
    logoIdentifier: "logoIdentifier_example",
    plasticId: "100100",
    cardType: "GPR_VIR",
    cardIssuanceAction: "NEW",
    cardFeeCurrencyCode: "SGD",
    cardExpiry: "1122",
    embossingLine1: "John Doe",
    embossingLine2: "John Doe",
    issuanceMode: "NORMAL_DELIVERY_LOCAL",
    demogOverridden: false,
    countryCode: "IN",
    mobile: "mobile_example",
    email: "example@gmail.com",
    firstName: "firstName_example",
    lastName: "lastName_example",
    middleName: "middleName_example",
    cardHashId: "fadf2ddd-b726-46bf-3c0a-965b096478f4",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.addCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCardRequest** | **AddCardRequest**| addCardRequest |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**AddCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCardV2**
> AddCardV2ResponseDTO addCardV2(addCardV2Request)

This API allows you to issue a card for a customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiAddCardV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // AddCardV2Request | The request body to add a new card.
  addCardV2Request: {
    selectOneOfTheFollowingCardType: null,
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "x-request-id_example",
};

apiInstance.addCardV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCardV2Request** | **AddCardV2Request**| The request body to add a new card. |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**AddCardV2ResponseDTO**

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

# **assignCard**
> CardAssignResponseDTO assignCard(assignCardDTO)

This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiAssignCardRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // AssignCardDTO | assignCardDTO
  assignCardDTO: {
    accountNumber: "0007560030000012140",
    cardNumberLast4Digits: "2197",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.assignCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignCardDTO** | **AssignCardDTO**| assignCardDTO |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**CardAssignResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **blockAndReplaceCardV2**
> BlockAndReplaceCardResponseDTO blockAndReplaceCardV2(blockAndReplaceCardRequestDTO)

Use this API to block and replace a card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiBlockAndReplaceCardV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // BlockAndReplaceCardRequestDTO | A card can be blocked and replaced using the Block And Replace Card API.
  blockAndReplaceCardRequestDTO: {
    reason: "fraud",
    replaceCard: true,
    plasticId: "100100",
    cardExpiry: "1122",
    useCurrentAddress: false,
    delivery: {
      addressLine1: "20 W 34th St.",
      addressLine2: "Suite 200",
      city: "New York",
      country: "SG",
      state: "New York",
      zip: "zip_example",
    },
    email: "example@mail.com",
    countryCode: "GB",
    mobile: "9876543210",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.blockAndReplaceCardV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockAndReplaceCardRequestDTO** | **BlockAndReplaceCardRequestDTO**| A card can be blocked and replaced using the Block And Replace Card API. |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**BlockAndReplaceCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **blockUnblockCards**
> BlockCodeCardResponseDTO blockUnblockCards(blockCodeDTO)

This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiBlockUnblockCardsRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // BlockCodeDTO | blockCode
  blockCodeDTO: {
    reason: "fraud",
    blockAction: "permanentBlock",
    remarks: "remarks_example",
    comments: "comments_example",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.blockUnblockCards(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockCodeDTO** | **BlockCodeDTO**| blockCode |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**BlockCodeCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cardDetails**
> CardResponseDTO cardDetails()

This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiCardDetailsRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "{{clientHashId}}",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.cardDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**CardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cardDetailsV2**
> CardDetails cardDetailsV2()

This API allows you to get details about a card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiCardDetailsV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.cardDetailsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CardDetails**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cardList**
> { [key: string]: any; } cardList()

This API will return all the cards issued, for a given wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiCardListRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.cardList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cardListV2**
> PageResponseCardDetails cardListV2()

This API returns all the cards issued for a given customer wallet.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiCardListV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\'s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data. (optional)
  childCustomerHashId: "childCustomerHashId_example",
  // number | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page = number of pages(N).  This field can then give a particular page. (optional)
  page: 1,
  // number | This field accepts the number of elements per page. (optional)
  size: 1,
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.cardListV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **childCustomerHashId** | [**string**] | This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\&#39;s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data. | (optional) defaults to undefined
 **page** | [**number**] | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page. | (optional) defaults to undefined
 **size** | [**number**] | This field accepts the number of elements per page. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**PageResponseCardDetails**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCardWidget**
> CardWidgetTokenResponse getCardWidget(cardWidgetTokenRequestDTO)

Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiGetCardWidgetRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // CardWidgetTokenRequestDTO
  cardWidgetTokenRequestDTO: {
    clientDomain: "http://localhost:8078/",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.getCardWidget(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardWidgetTokenRequestDTO** | **CardWidgetTokenRequestDTO**|  |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**CardWidgetTokenResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **issueReplacementCard**
> AddCardResponseDTO issueReplacementCard(replaceCardRequest)

Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiIssueReplacementCardRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // ReplaceCardRequest | A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
  replaceCardRequest: {
    cardExpiry: "1124",
    cardFeeCurrencyCode: "SGD",
    plasticId: "plasticId_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.issueReplacementCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replaceCardRequest** | **ReplaceCardRequest**| A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date. |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | Unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AddCardResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lockUnlockCardV2**
> LockStatusUpdateResponseDTO lockUnlockCardV2(lockStatusUpdateRequestDTO)

This API allows you to temporarily lock or unlock a card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiLockUnlockCardV2Request = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // LockStatusUpdateRequestDTO | lockStatusUpdateRequestDTO
  lockStatusUpdateRequestDTO: {
    action: "lock",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.lockUnlockCardV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lockStatusUpdateRequestDTO** | **LockStatusUpdateRequestDTO**| lockStatusUpdateRequestDTO |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**LockStatusUpdateResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **renewCard**
> string renewCard(renewCardRequest)

Use this API for card renewal.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiRenewCardRequest = {
  // string | The unique client identifier generated and shared before the API handshake.
  clientHashId: "clientHashId_example",
  // string | The unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | The unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | The unique card identifier generated while new/add-on card issuance.
  cardHashId: "cardHashId_example",
  // RenewCardRequest | A card can be renewed using the Renew Card API on or before 45 days from the expiration date.
  renewCardRequest: {
    cardExpiry: "1126",
    useCurrentAddress: false,
    delivery: {
      addressLine1: "20 W 34th St.",
      addressLine2: "Suite 200",
      city: "New York",
      country: "SG",
      state: "New York",
      zip: "zip_example",
    },
    email: "renewal@abccorp.com",
    countryCode: "SG",
    mobile: "1234567890",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.renewCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renewCardRequest** | **RenewCardRequest**| A card can be renewed using the Renew Card API on or before 45 days from the expiration date. |
 **clientHashId** | [**string**] | The unique client identifier generated and shared before the API handshake. | defaults to undefined
 **customerHashId** | [**string**] | The unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | The unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **cardHashId** | [**string**] | The unique card identifier generated while new/add-on card issuance. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**string**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCardDetailsV2**
> ApiResponse2 updateCardDetailsV2(updateContactInfoRequestDTO)

This API allows you to update the contact information of the cardholder.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LifecycleApi(configuration);

let body:.LifecycleApiUpdateCardDetailsV2Request = {
  // string | clientHashId
  clientHashId: "clientHashId_example",
  // string | customerHashId
  customerHashId: "customerHashId_example",
  // string | walletHashId
  walletHashId: "walletHashId_example",
  // string | cardHashId
  cardHashId: "cardHashId_example",
  // UpdateContactInfoRequestDTO | updateContactInfoRequestDTO
  updateContactInfoRequestDTO: {
    email: "example@mail.com",
    countryCode: "SG",
    mobile: "9876543210",
    delivery: {
      addressLine1: "20 W 34th St.",
      addressLine2: "Suite 200",
      city: "New York",
      country: "SG",
      state: "New York",
      zip: "zip_example",
    },
    nameOnCard: "John Doe",
  },
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.updateCardDetailsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactInfoRequestDTO** | **UpdateContactInfoRequestDTO**| updateContactInfoRequestDTO |
 **clientHashId** | [**string**] | clientHashId | defaults to undefined
 **customerHashId** | [**string**] | customerHashId | defaults to undefined
 **walletHashId** | [**string**] | walletHashId | defaults to undefined
 **cardHashId** | [**string**] | cardHashId | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**ApiResponse2**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


