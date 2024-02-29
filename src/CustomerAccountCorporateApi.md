# .CustomerAccountCorporateApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exhaustiveCorporateDetailsUsingBusinessID**](CustomerAccountCorporateApi.md#exhaustiveCorporateDetailsUsingBusinessID) | **GET** /api/v2/client/{clientHashId}/corporate/lookup | Exhaustive Corporate Details using Business ID
[**fetchCorporateConstantsUsingGET**](CustomerAccountCorporateApi.md#fetchCorporateConstantsUsingGET) | **GET** /api/v2/client/{clientHashId}/onboarding/constants | Fetch corporate constants
[**fetchCorporateCustomerRFIDetails**](CustomerAccountCorporateApi.md#fetchCorporateCustomerRFIDetails) | **GET** /api/v1/client/{clientHashId}/corporate/rfi | Fetch Corporate Customer RFI Details
[**onboardCorporateCustomer**](CustomerAccountCorporateApi.md#onboardCorporateCustomer) | **POST** /api/v1/client/{clientHashId}/corporate | Onboard Corporate Customer
[**publicCorporateDetailsUsingBusinessID**](CustomerAccountCorporateApi.md#publicCorporateDetailsUsingBusinessID) | **GET** /api/v1/client/{clientHashId}/corporate/lookup | Public Corporate Details using Business ID
[**regenerateKYCURL**](CustomerAccountCorporateApi.md#regenerateKYCURL) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/regenerateKYCURL | Regenerate KYC URL
[**respondtoRFIforCorporateCustomer**](CustomerAccountCorporateApi.md#respondtoRFIforCorporateCustomer) | **POST** /api/v1/client/{clientHashId}/corporate/rfi | Respond to RFI for Corporate Customer
[**updateCorporateCustomerUsingPOST**](CustomerAccountCorporateApi.md#updateCorporateCustomerUsingPOST) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate | Update Corporate Customer
[**uploadDocumentforCorporateCustomer**](CustomerAccountCorporateApi.md#uploadDocumentforCorporateCustomer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate/documents | Upload Document for Corporate Customer


# **exhaustiveCorporateDetailsUsingBusinessID**
> CorporateEnrichedDetailResponseDTO exhaustiveCorporateDetailsUsingBusinessID()

This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiExhaustiveCorporateDetailsUsingBusinessIDRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer.
  countryCode: "countryCode_example",
  // string | This field accepts the search reference id of the corporate customer as received in response of public corporate details api. (optional)
  searchReferenceId: "searchReferenceId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.exhaustiveCorporateDetailsUsingBusinessID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **countryCode** | [**string**] | This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer. | defaults to undefined
 **searchReferenceId** | [**string**] | This field accepts the search reference id of the corporate customer as received in response of public corporate details api. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CorporateEnrichedDetailResponseDTO**

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

# **fetchCorporateConstantsUsingGET**
> AddCategoryResponseDTO fetchCorporateConstantsUsingGET()

This API returns the acceptable values for the `category` query param to be used as input in the corporate onboarding flow. Refer to the [Fetch Corporate Constants](doc:fetch-corporate-constants-api) user guide for details on usage instructions on this API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiFetchCorporateConstantsUsingGETRequest = {
  // 'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation' | This field is used to select one of the category used during corporate customer onboarding. The API response will return list of allowed values for the selected category.
  category: "annualTurnover",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // 'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA' | The response will be filtered based on the value selected in this field for regulatory region of the customer.
  region: "AU",
  // 'INDIVIDUAL' | 'CORPORATE' | Type of Customer being onboarded.
  type: "INDIVIDUAL",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchCorporateConstantsUsingGET(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**&#39;annualTurnover&#39; | &#39;businessType&#39; | &#39;countryName&#39; | &#39;countryOfOperation&#39; | &#39;documentType&#39; | &#39;intendedUseOfAccount&#39; | &#39;industrySector&#39; | &#39;listedExchange&#39; | &#39;position&#39; | &#39;regulatedTrustType&#39; | &#39;restrictedCountries&#39; | &#39;state&#39; | &#39;streetType&#39; | &#39;totalEmployees&#39; | &#39;unregulatedTrustType&#39; | &#39;rfiTemplates&#39; | &#39;estimatedMonthlyFunding&#39; | &#39;occupation&#39;**]**Array<&#39;annualTurnover&#39; &#124; &#39;businessType&#39; &#124; &#39;countryName&#39; &#124; &#39;countryOfOperation&#39; &#124; &#39;documentType&#39; &#124; &#39;intendedUseOfAccount&#39; &#124; &#39;industrySector&#39; &#124; &#39;listedExchange&#39; &#124; &#39;position&#39; &#124; &#39;regulatedTrustType&#39; &#124; &#39;restrictedCountries&#39; &#124; &#39;state&#39; &#124; &#39;streetType&#39; &#124; &#39;totalEmployees&#39; &#124; &#39;unregulatedTrustType&#39; &#124; &#39;rfiTemplates&#39; &#124; &#39;estimatedMonthlyFunding&#39; &#124; &#39;occupation&#39;>** | This field is used to select one of the category used during corporate customer onboarding. The API response will return list of allowed values for the selected category. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **region** | [**&#39;AU&#39; | &#39;EU&#39; | &#39;SG&#39; | &#39;HK&#39; | &#39;UK&#39; | &#39;US&#39; | &#39;CA&#39;**]**Array<&#39;AU&#39; &#124; &#39;EU&#39; &#124; &#39;SG&#39; &#124; &#39;HK&#39; &#124; &#39;UK&#39; &#124; &#39;US&#39; &#124; &#39;CA&#39;>** | The response will be filtered based on the value selected in this field for regulatory region of the customer. | defaults to undefined
 **type** | [**&#39;INDIVIDUAL&#39; | &#39;CORPORATE&#39;**]**Array<&#39;INDIVIDUAL&#39; &#124; &#39;CORPORATE&#39;>** | Type of Customer being onboarded. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**AddCategoryResponseDTO**

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

# **fetchCorporateCustomerRFIDetails**
> ComplianceRFITemplateMetadataResponseDTO fetchCorporateCustomerRFIDetails()

This API allows you to fetch details of RFI raised as part of corporate customer onboarding.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiFetchCorporateCustomerRFIDetailsRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field contains unique case ID generated and returned in Onboard API response. (optional)
  caseId: "caseId_example",
  // string | This field contains unique client ID generated and returned in Onboard API response. (optional)
  clientId: "clientId_example",
  // string | This field contains the customerHashId, For example, 909ffc5f-c8ab-4df0-bcb2-111fcdd6f735. (optional)
  customerHashId: "customerHashId_example",
  // string | This field contains the region code for which onboarding has been triggered, For example, AU, EU, UK, SG. (optional)
  region: "region_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchCorporateCustomerRFIDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **caseId** | [**string**] | This field contains unique case ID generated and returned in Onboard API response. | (optional) defaults to undefined
 **clientId** | [**string**] | This field contains unique client ID generated and returned in Onboard API response. | (optional) defaults to undefined
 **customerHashId** | [**string**] | This field contains the customerHashId, For example, 909ffc5f-c8ab-4df0-bcb2-111fcdd6f735. | (optional) defaults to undefined
 **region** | [**string**] | This field contains the region code for which onboarding has been triggered, For example, AU, EU, UK, SG. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ComplianceRFITemplateMetadataResponseDTO**

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

# **onboardCorporateCustomer**
> ProductCorporateCustomerResponseDTO onboardCorporateCustomer(corporateCustomerRequestsDTO)

This API allows you to onboard a corporate customer under existing client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiOnboardCorporateCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // CorporateCustomerRequestsDTO | corporateCustomerRequestsDTO
  corporateCustomerRequestsDTO: {
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    authenticationCode: "authCode",
    businessDetails: {
      additionalInfo: {
        "key": "key_example",
      },
      addresses: {
        businessAddress: {
          addressLine1: "addressLine1_example",
          addressLine2: "addressLine2_example",
          city: "city_example",
          country: "country_example",
          postcode: "postcode_example",
          state: "state_example",
        },
        registeredAddress: {
          addressLine1: "addressLine1_example",
          addressLine2: "addressLine2_example",
          city: "city_example",
          country: "country_example",
          postcode: "postcode_example",
          state: "state_example",
        },
      },
      applicantDetails: {
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
        birthCountry: "birthCountry_example",
        contactDetails: {
          contactNo: "contactNo_example",
          countryCode: "countryCode_example",
          email: "email_example",
        },
        dateOfBirth: "dateOfBirth_example",
        documentDetails: [
          {
            document: [
              {
                document: "document_example",
                fileName: "fileName_example",
                fileType: "fileType_example",
              },
            ],
            documentColor: "documentColor_example",
            documentExpiryDate: "documentExpiryDate_example",
            documentHolderName: "documentHolderName_example",
            documentIssuanceCountry: "documentIssuanceCountry_example",
            documentIssuanceState: "documentIssuanceState_example",
            documentIssuedDate: "documentIssuedDate_example",
            documentIssuingAuthority: "documentIssuingAuthority_example",
            documentNumber: "6565666",
            documentReferenceNumber: "documentReferenceNumber_example",
            documentType: "documentType_example",
          },
        ],
        firstName: "firstName_example",
        gender: "gender_example",
        kycMode: "kycMode_example",
        lastName: "lastName_example",
        middleName: "middleName_example",
        nationality: "nationality_example",
        occupation: "OC0001",
        professionalDetails: [
          {
            position: "position_example",
            positionEndDate: "positionEndDate_example",
            positionStartDate: "positionStartDate_example",
            sharePercentage: "sharePercentage_example",
          },
        ],
        referenceId: "referenceId_example",
        taxDetails: [
          {
            country: "country_example",
            taxNumber: "taxNumber_example",
          },
        ],
      },
      associationDetails: {
        associationChairPerson: "associationChairPerson_example",
        associationName: "associationName_example",
        associationNumber: "associationNumber_example",
      },
      bankAccountDetails: {
        accountName: "accountName_example",
        accountNumber: "accountNumber_example",
        bankName: "bankName_example",
        currency: "currency_example",
        routingType: "routingType_example",
        routingValue: "routingValue_example",
      },
      businessName: "businessName_example",
      businessRegistrationNumber: "businessRegistrationNumber_example",
      businessType: "businessType_example",
      description: "description_example",
      documentDetails: [
        {
          document: [
            {
              document: "document_example",
              fileName: "fileName_example",
              fileType: "fileType_example",
            },
          ],
          documentColor: "documentColor_example",
          documentExpiryDate: "documentExpiryDate_example",
          documentHolderName: "documentHolderName_example",
          documentIssuanceCountry: "documentIssuanceCountry_example",
          documentIssuanceState: "documentIssuanceState_example",
          documentIssuedDate: "documentIssuedDate_example",
          documentIssuingAuthority: "documentIssuingAuthority_example",
          documentNumber: "6565666",
          documentReferenceNumber: "documentReferenceNumber_example",
          documentType: "documentType_example",
        },
      ],
      formerName: "formerName_example",
      legalDetails: {
        legislationName: "legislationName_example",
        legislationType: "legislationType_example",
        listedExchange: "listedExchange_example",
        registeredCountry: "registeredCountry_example",
        registeredDate: "registeredDate_example",
        registrationType: "registrationType_example",
      },
      partnershipDetails: {
        partnerCountry: "partnerCountry_example",
        partnerName: "partnerName_example",
        partnerState: "partnerState_example",
      },
      referenceId: "referenceId_example",
      regulatoryDetails: {
        regulatedTrustType: [
          "regulatedTrustType_example",
        ],
        unregulatedTrustType: [
          "unregulatedTrustType_example",
        ],
      },
      settlorName: "settlorName_example",
      stakeholders: [
        {
          businessPartner: {
            addresses: {
              businessAddress: {
                addressLine1: "addressLine1_example",
                addressLine2: "addressLine2_example",
                city: "city_example",
                country: "country_example",
                postcode: "postcode_example",
                state: "state_example",
              },
              registeredAddress: {
                addressLine1: "addressLine1_example",
                addressLine2: "addressLine2_example",
                city: "city_example",
                country: "country_example",
                postcode: "postcode_example",
                state: "state_example",
              },
            },
            businessEntityType: "businessEntityType_example",
            businessName: "businessName_example",
            businessRegistrationNumber: "businessRegistrationNumber_example",
            businessType: "businessType_example",
            description: "description_example",
            legalDetails: {
              legislationName: "legislationName_example",
              legislationType: "legislationType_example",
              listedExchange: "listedExchange_example",
              registeredCountry: "registeredCountry_example",
              registeredDate: "registeredDate_example",
              registrationType: "registrationType_example",
            },
            sharePercentage: "sharePercentage_example",
          },
          referenceId: "referenceId_example",
          stakeholderDetails: {
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
            birthCountry: "birthCountry_example",
            contactDetails: {
              contactNo: "contactNo_example",
              countryCode: "countryCode_example",
              email: "email_example",
            },
            dateOfBirth: "dateOfBirth_example",
            documentDetails: [
              {
                document: [
                  {
                    document: "document_example",
                    fileName: "fileName_example",
                    fileType: "fileType_example",
                  },
                ],
                documentColor: "documentColor_example",
                documentExpiryDate: "documentExpiryDate_example",
                documentHolderName: "documentHolderName_example",
                documentIssuanceCountry: "documentIssuanceCountry_example",
                documentIssuanceState: "documentIssuanceState_example",
                documentIssuedDate: "documentIssuedDate_example",
                documentIssuingAuthority: "documentIssuingAuthority_example",
                documentNumber: "6565666",
                documentReferenceNumber: "documentReferenceNumber_example",
                documentType: "documentType_example",
              },
            ],
            firstName: "firstName_example",
            gender: "gender_example",
            kycMode: "kycMode_example",
            lastName: "lastName_example",
            middleName: "middleName_example",
            nationality: "nationality_example",
            professionalDetails: [
              {
                position: "position_example",
                positionEndDate: "positionEndDate_example",
                positionStartDate: "positionStartDate_example",
                sharePercentage: "sharePercentage_example",
              },
            ],
            taxDetails: [
              {
                country: "country_example",
                taxNumber: "taxNumber_example",
              },
            ],
          },
        },
      ],
      stockSymbol: "stockSymbol_example",
      taxDetails: [
        {
          country: "country_example",
          taxNumber: "taxNumber_example",
        },
      ],
      tradeName: "tradeName_example",
      trusteeName: "trusteeName_example",
      website: "website_example",
    },
    clientId: "clientId_example",
    customerHashId: "customerHashId_example",
    region: "region_example",
    riskAssessmentInfo: {
      annualTurnover: "annualTurnover_example",
      countryOfOperation: [
        "countryOfOperation_example",
      ],
      industrySector: "industrySector_example",
      intendedUseOfAccount: "intendedUseOfAccount_example",
      ofacLicencePresent: "ofacLicencePresent_example",
      restrictedCountries: [
        "restrictedCountries_example",
      ],
      riskScore: "riskScore_example",
      riskSeverity: "riskSeverity_example",
      totalEmployees: "totalEmployees_example",
      transactionCountries: [
        "transactionCountries_example",
      ],
      travelRestrictedCountry: "travelRestrictedCountry_example",
    },
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.onboardCorporateCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporateCustomerRequestsDTO** | **CorporateCustomerRequestsDTO**| corporateCustomerRequestsDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ProductCorporateCustomerResponseDTO**

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

# **publicCorporateDetailsUsingBusinessID**
> CorporateDetailResponseDTO publicCorporateDetailsUsingBusinessID()

This API will help you to fetch the publicly available corporate details using business Id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiPublicCorporateDetailsUsingBusinessIDRequest = {
  // string | This field contains the business registration number of the entity.
  businessRegistrationNumber: "businessRegistrationNumber_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes).
  countryCode: "countryCode_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.publicCorporateDetailsUsingBusinessID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessRegistrationNumber** | [**string**] | This field contains the business registration number of the entity. | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **countryCode** | [**string**] | This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes). | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CorporateDetailResponseDTO**

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

# **regenerateKYCURL**
> RegenerateUrlResponse regenerateKYCURL()

This api will be used to regenerate kyc url

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiRegenerateKYCURLRequest = {
  // string | The unique client hash id of customer
  clientHashId: "clientHashId_example",
  // string | The unique customer hash id of customer
  customerHashId: "customerHashId_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.regenerateKYCURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | The unique client hash id of customer | defaults to undefined
 **customerHashId** | [**string**] | The unique customer hash id of customer | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**RegenerateUrlResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Url regenerate Successfully |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **respondtoRFIforCorporateCustomer**
> RespondRfiResponseDTO respondtoRFIforCorporateCustomer(respondRfiRequestDTO)

This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiRespondtoRFIforCorporateCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // RespondRfiRequestDTO | respondRfiRequestDTO
  respondRfiRequestDTO: {
    caseId: "02ffd56a-1eff-400f-bd43-16c575412c07",
    clientId: "NIM1655797457637",
    customerHashId: "customerHashId_example",
    region: "EU",
    rfiResponseRequest: [
      {
        businessInfo: {
          additionalInfo: {
            "key": "key_example",
          },
          addresses: {
            businessAddress: {
              addressLine1: "addressLine1_example",
              addressLine2: "addressLine2_example",
              city: "city_example",
              country: "country_example",
              postcode: "postcode_example",
              state: "state_example",
            },
            registeredAddress: {
              addressLine1: "addressLine1_example",
              addressLine2: "addressLine2_example",
              city: "city_example",
              country: "country_example",
              postcode: "postcode_example",
              state: "state_example",
            },
          },
          applicantDetails: {
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
            birthCountry: "birthCountry_example",
            contactDetails: {
              contactNo: "contactNo_example",
              countryCode: "countryCode_example",
              email: "email_example",
            },
            dateOfBirth: "dateOfBirth_example",
            documentDetails: {
              document: [
                {
                  document: "document_example",
                  fileName: "fileName_example",
                  fileType: "fileType_example",
                },
              ],
              documentColor: "documentColor_example",
              documentExpiryDate: "documentExpiryDate_example",
              documentHolderName: "documentHolderName_example",
              documentIssuanceCountry: "documentIssuanceCountry_example",
              documentIssuanceState: "documentIssuanceState_example",
              documentIssuedDate: "documentIssuedDate_example",
              documentIssuingAuthority: "documentIssuingAuthority_example",
              documentNumber: "6565666",
              documentReferenceNumber: "documentReferenceNumber_example",
              documentType: "documentType_example",
            },
            firstName: "firstName_example",
            gender: "gender_example",
            isResident: "isResident_example",
            kycMode: "kycMode_example",
            lastName: "lastName_example",
            middleName: "middleName_example",
            nationality: "nationality_example",
            occupation: "OC0001",
            professionalDetails: [
              {
                position: "position_example",
                positionEndDate: "positionEndDate_example",
                positionStartDate: "positionStartDate_example",
                sharePercentage: "sharePercentage_example",
              },
            ],
            referenceId: "referenceId_example",
            taxDetails: [
              {
                country: "country_example",
                taxNumber: "taxNumber_example",
              },
            ],
          },
          associationDetails: {
            associationChairPerson: "associationChairPerson_example",
            associationName: "associationName_example",
            associationNumber: "associationNumber_example",
          },
          businessInOtherCountries: [
            {},
          ],
          businessName: "updated business name",
          businessRegistrationNumber: "businessRegistrationNumber_example",
          businessType: "Public Company",
          description: "description_example",
          documentDetails: {
            document: [
              {
                document: "document_example",
                fileName: "fileName_example",
                fileType: "fileType_example",
              },
            ],
            documentColor: "documentColor_example",
            documentExpiryDate: "documentExpiryDate_example",
            documentHolderName: "documentHolderName_example",
            documentIssuanceCountry: "documentIssuanceCountry_example",
            documentIssuanceState: "documentIssuanceState_example",
            documentIssuedDate: "documentIssuedDate_example",
            documentIssuingAuthority: "documentIssuingAuthority_example",
            documentNumber: "6565666",
            documentReferenceNumber: "documentReferenceNumber_example",
            documentType: "documentType_example",
          },
          legalDetails: {
            legislationName: "legislationName_example",
            legislationType: "legislationType_example",
            listedExchange: "listedExchange_example",
            registeredCountry: "registeredCountry_example",
            registeredDate: "registeredDate_example",
            registrationType: "registrationType_example",
          },
          onboardingDetails: {
            onboardingByPartner: "onboardingByPartner_example",
            onboardingPartnerName: "onboardingPartnerName_example",
          },
          partnershipDetails: {
            partnerCountry: "partnerCountry_example",
            partnerName: "partnerName_example",
            partnerState: "partnerState_example",
          },
          purposeCode: "purposeCode_example",
          referenceId: "11e93365-d383-4eee-9686-7f06bcb8671e",
          regulatoryDetails: {
            regulatedTrustType: [
              "regulatedTrustType_example",
            ],
            unregulatedTrustType: [
              "unregulatedTrustType_example",
            ],
          },
          revenueInfo: {
            annualTurnOver: "annualTurnOver_example",
            monthlyVolume: "monthlyVolume_example",
          },
          settlorName: "settlorName_example",
          stakeholders: [
            {
              businessPartner: {
                addresses: {
                  businessAddress: {
                    addressLine1: "addressLine1_example",
                    addressLine2: "addressLine2_example",
                    city: "city_example",
                    country: "country_example",
                    postcode: "postcode_example",
                    state: "state_example",
                  },
                  registeredAddress: {
                    addressLine1: "addressLine1_example",
                    addressLine2: "addressLine2_example",
                    city: "city_example",
                    country: "country_example",
                    postcode: "postcode_example",
                    state: "state_example",
                  },
                },
                businessEntityType: "businessEntityType_example",
                businessInOtherCountries: [
                  {},
                ],
                businessName: "businessName_example",
                businessRegistrationNumber: "businessRegistrationNumber_example",
                businessType: "businessType_example",
                description: "description_example",
                documentDetails: {
                  document: [
                    {
                      document: "document_example",
                      fileName: "fileName_example",
                      fileType: "fileType_example",
                    },
                  ],
                  documentColor: "documentColor_example",
                  documentExpiryDate: "documentExpiryDate_example",
                  documentHolderName: "documentHolderName_example",
                  documentIssuanceCountry: "documentIssuanceCountry_example",
                  documentIssuanceState: "documentIssuanceState_example",
                  documentIssuedDate: "documentIssuedDate_example",
                  documentIssuingAuthority: "documentIssuingAuthority_example",
                  documentNumber: "6565666",
                  documentReferenceNumber: "documentReferenceNumber_example",
                  documentType: "documentType_example",
                },
                legalDetails: {
                  legislationName: "legislationName_example",
                  legislationType: "legislationType_example",
                  listedExchange: "listedExchange_example",
                  registeredCountry: "registeredCountry_example",
                  registeredDate: "registeredDate_example",
                  registrationType: "registrationType_example",
                },
                purposeCode: "purposeCode_example",
                regulatoryDetails: {
                  regulatedTrustType: [
                    "regulatedTrustType_example",
                  ],
                  unregulatedTrustType: [
                    "unregulatedTrustType_example",
                  ],
                },
                sharePercentage: "sharePercentage_example",
                ticker: "ticker_example",
                tradeName: "tradeName_example",
                trusteeName: "trusteeName_example",
                website: "website_example",
              },
              entityType: "entityType_example",
              referenceId: "137889fb-8569-4e34-b50b-1a71c787dc61",
              stakeholderDetails: {
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
                birthCountry: "birthCountry_example",
                contactDetails: {
                  contactNo: "contactNo_example",
                  countryCode: "countryCode_example",
                  email: "email_example",
                },
                dateOfBirth: "dateOfBirth_example",
                documentDetails: {
                  document: [
                    {
                      document: "document_example",
                      fileName: "fileName_example",
                      fileType: "fileType_example",
                    },
                  ],
                  documentColor: "documentColor_example",
                  documentExpiryDate: "documentExpiryDate_example",
                  documentHolderName: "documentHolderName_example",
                  documentIssuanceCountry: "documentIssuanceCountry_example",
                  documentIssuanceState: "documentIssuanceState_example",
                  documentIssuedDate: "documentIssuedDate_example",
                  documentIssuingAuthority: "documentIssuingAuthority_example",
                  documentNumber: "6565666",
                  documentReferenceNumber: "documentReferenceNumber_example",
                  documentType: "documentType_example",
                },
                firstName: "firstName_example",
                gender: "gender_example",
                isPrimaryApplicant: "isPrimaryApplicant_example",
                lastName: "lastName_example",
                middleName: "middleName_example",
                nationality: "nationality_example",
                professionalDetails: [
                  {
                    position: "position_example",
                    positionEndDate: "positionEndDate_example",
                    positionStartDate: "positionStartDate_example",
                    sharePercentage: "sharePercentage_example",
                  },
                ],
                sourceOfFunds: "sourceOfFunds_example",
                taxDetails: [
                  {
                    country: "country_example",
                    taxNumber: "taxNumber_example",
                  },
                ],
                title: "title_example",
              },
            },
          ],
          taxDetails: [
            {
              country: "country_example",
              taxNumber: "taxNumber_example",
            },
          ],
          ticker: "ticker_example",
          tradeName: "tradeName_example",
          trusteeName: "trusteeName_example",
          website: "website_example",
        },
        rfiTemplateId: "e47fbae2-aee2-43d4-9524-c8fcf6513616",
        riskAssessmentInfo: {
          annualTurnover: "annualTurnover_example",
          countryOfOperation: [
            "countryOfOperation_example",
          ],
          industrySector: "industrySector_example",
          intendedUseOfAccount: "intendedUseOfAccount_example",
          ofacLicencePresent: "ofacLicencePresent_example",
          restrictedCountries: [
            "restrictedCountries_example",
          ],
          riskScore: "riskScore_example",
          riskSeverity: "riskSeverity_example",
          totalEmployees: "totalEmployees_example",
          transactionCountries: [
            "transactionCountries_example",
          ],
          travelRestrictedCountry: "travelRestrictedCountry_example",
        },
      },
    ],
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.respondtoRFIforCorporateCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **respondRfiRequestDTO** | **RespondRfiRequestDTO**| respondRfiRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**RespondRfiResponseDTO**

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

# **updateCorporateCustomerUsingPOST**
> UpdateCorporateKybResponseDTO updateCorporateCustomerUsingPOST(corporateCustomerRequestsDTO)

This API allows you to update a corporate customer under existing client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiUpdateCorporateCustomerUsingPOSTRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "clientHashId_example",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // CorporateCustomerRequestsDTO | updateCorporateCustomerRequestsDTO
  corporateCustomerRequestsDTO: {
    tags: [
      {
        key: "key_example",
        value: "value_example",
      },
    ],
    authenticationCode: "authCode",
    businessDetails: {
      additionalInfo: {
        "key": "key_example",
      },
      addresses: {
        businessAddress: {
          addressLine1: "addressLine1_example",
          addressLine2: "addressLine2_example",
          city: "city_example",
          country: "country_example",
          postcode: "postcode_example",
          state: "state_example",
        },
        registeredAddress: {
          addressLine1: "addressLine1_example",
          addressLine2: "addressLine2_example",
          city: "city_example",
          country: "country_example",
          postcode: "postcode_example",
          state: "state_example",
        },
      },
      applicantDetails: {
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
        birthCountry: "birthCountry_example",
        contactDetails: {
          contactNo: "contactNo_example",
          countryCode: "countryCode_example",
          email: "email_example",
        },
        dateOfBirth: "dateOfBirth_example",
        documentDetails: [
          {
            document: [
              {
                document: "document_example",
                fileName: "fileName_example",
                fileType: "fileType_example",
              },
            ],
            documentColor: "documentColor_example",
            documentExpiryDate: "documentExpiryDate_example",
            documentHolderName: "documentHolderName_example",
            documentIssuanceCountry: "documentIssuanceCountry_example",
            documentIssuanceState: "documentIssuanceState_example",
            documentIssuedDate: "documentIssuedDate_example",
            documentIssuingAuthority: "documentIssuingAuthority_example",
            documentNumber: "6565666",
            documentReferenceNumber: "documentReferenceNumber_example",
            documentType: "documentType_example",
          },
        ],
        firstName: "firstName_example",
        gender: "gender_example",
        kycMode: "kycMode_example",
        lastName: "lastName_example",
        middleName: "middleName_example",
        nationality: "nationality_example",
        occupation: "OC0001",
        professionalDetails: [
          {
            position: "position_example",
            positionEndDate: "positionEndDate_example",
            positionStartDate: "positionStartDate_example",
            sharePercentage: "sharePercentage_example",
          },
        ],
        referenceId: "referenceId_example",
        taxDetails: [
          {
            country: "country_example",
            taxNumber: "taxNumber_example",
          },
        ],
      },
      associationDetails: {
        associationChairPerson: "associationChairPerson_example",
        associationName: "associationName_example",
        associationNumber: "associationNumber_example",
      },
      bankAccountDetails: {
        accountName: "accountName_example",
        accountNumber: "accountNumber_example",
        bankName: "bankName_example",
        currency: "currency_example",
        routingType: "routingType_example",
        routingValue: "routingValue_example",
      },
      businessName: "businessName_example",
      businessRegistrationNumber: "businessRegistrationNumber_example",
      businessType: "businessType_example",
      description: "description_example",
      documentDetails: [
        {
          document: [
            {
              document: "document_example",
              fileName: "fileName_example",
              fileType: "fileType_example",
            },
          ],
          documentColor: "documentColor_example",
          documentExpiryDate: "documentExpiryDate_example",
          documentHolderName: "documentHolderName_example",
          documentIssuanceCountry: "documentIssuanceCountry_example",
          documentIssuanceState: "documentIssuanceState_example",
          documentIssuedDate: "documentIssuedDate_example",
          documentIssuingAuthority: "documentIssuingAuthority_example",
          documentNumber: "6565666",
          documentReferenceNumber: "documentReferenceNumber_example",
          documentType: "documentType_example",
        },
      ],
      formerName: "formerName_example",
      legalDetails: {
        legislationName: "legislationName_example",
        legislationType: "legislationType_example",
        listedExchange: "listedExchange_example",
        registeredCountry: "registeredCountry_example",
        registeredDate: "registeredDate_example",
        registrationType: "registrationType_example",
      },
      partnershipDetails: {
        partnerCountry: "partnerCountry_example",
        partnerName: "partnerName_example",
        partnerState: "partnerState_example",
      },
      referenceId: "referenceId_example",
      regulatoryDetails: {
        regulatedTrustType: [
          "regulatedTrustType_example",
        ],
        unregulatedTrustType: [
          "unregulatedTrustType_example",
        ],
      },
      settlorName: "settlorName_example",
      stakeholders: [
        {
          businessPartner: {
            addresses: {
              businessAddress: {
                addressLine1: "addressLine1_example",
                addressLine2: "addressLine2_example",
                city: "city_example",
                country: "country_example",
                postcode: "postcode_example",
                state: "state_example",
              },
              registeredAddress: {
                addressLine1: "addressLine1_example",
                addressLine2: "addressLine2_example",
                city: "city_example",
                country: "country_example",
                postcode: "postcode_example",
                state: "state_example",
              },
            },
            businessEntityType: "businessEntityType_example",
            businessName: "businessName_example",
            businessRegistrationNumber: "businessRegistrationNumber_example",
            businessType: "businessType_example",
            description: "description_example",
            legalDetails: {
              legislationName: "legislationName_example",
              legislationType: "legislationType_example",
              listedExchange: "listedExchange_example",
              registeredCountry: "registeredCountry_example",
              registeredDate: "registeredDate_example",
              registrationType: "registrationType_example",
            },
            sharePercentage: "sharePercentage_example",
          },
          referenceId: "referenceId_example",
          stakeholderDetails: {
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
            birthCountry: "birthCountry_example",
            contactDetails: {
              contactNo: "contactNo_example",
              countryCode: "countryCode_example",
              email: "email_example",
            },
            dateOfBirth: "dateOfBirth_example",
            documentDetails: [
              {
                document: [
                  {
                    document: "document_example",
                    fileName: "fileName_example",
                    fileType: "fileType_example",
                  },
                ],
                documentColor: "documentColor_example",
                documentExpiryDate: "documentExpiryDate_example",
                documentHolderName: "documentHolderName_example",
                documentIssuanceCountry: "documentIssuanceCountry_example",
                documentIssuanceState: "documentIssuanceState_example",
                documentIssuedDate: "documentIssuedDate_example",
                documentIssuingAuthority: "documentIssuingAuthority_example",
                documentNumber: "6565666",
                documentReferenceNumber: "documentReferenceNumber_example",
                documentType: "documentType_example",
              },
            ],
            firstName: "firstName_example",
            gender: "gender_example",
            kycMode: "kycMode_example",
            lastName: "lastName_example",
            middleName: "middleName_example",
            nationality: "nationality_example",
            professionalDetails: [
              {
                position: "position_example",
                positionEndDate: "positionEndDate_example",
                positionStartDate: "positionStartDate_example",
                sharePercentage: "sharePercentage_example",
              },
            ],
            taxDetails: [
              {
                country: "country_example",
                taxNumber: "taxNumber_example",
              },
            ],
          },
        },
      ],
      stockSymbol: "stockSymbol_example",
      taxDetails: [
        {
          country: "country_example",
          taxNumber: "taxNumber_example",
        },
      ],
      tradeName: "tradeName_example",
      trusteeName: "trusteeName_example",
      website: "website_example",
    },
    clientId: "clientId_example",
    customerHashId: "customerHashId_example",
    region: "region_example",
    riskAssessmentInfo: {
      annualTurnover: "annualTurnover_example",
      countryOfOperation: [
        "countryOfOperation_example",
      ],
      industrySector: "industrySector_example",
      intendedUseOfAccount: "intendedUseOfAccount_example",
      ofacLicencePresent: "ofacLicencePresent_example",
      restrictedCountries: [
        "restrictedCountries_example",
      ],
      riskScore: "riskScore_example",
      riskSeverity: "riskSeverity_example",
      totalEmployees: "totalEmployees_example",
      transactionCountries: [
        "transactionCountries_example",
      ],
      travelRestrictedCountry: "travelRestrictedCountry_example",
    },
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.updateCorporateCustomerUsingPOST(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporateCustomerRequestsDTO** | **CorporateCustomerRequestsDTO**| updateCorporateCustomerRequestsDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**UpdateCorporateKybResponseDTO**

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

# **uploadDocumentforCorporateCustomer**
> CorporateComplianceDocumentResponseDTO uploadDocumentforCorporateCustomer(corporateComplianceDocumentRequestDTO)

This API allows you to upload document for corporate customers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerAccountCorporateApi(configuration);

let body:.CustomerAccountCorporateApiUploadDocumentforCorporateCustomerRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // CorporateComplianceDocumentRequestDTO | corporateComplianceDocumentRequestDTO
  corporateComplianceDocumentRequestDTO: {
    businessDetails: {
      applicantDetails: {
        documentDetails: [
          {
            document: [
              {
                document: "document_example",
                fileName: "fileName_example",
                fileType: "fileType_example",
              },
            ],
            documentColor: "documentColor_example",
            documentExpiryDate: "documentExpiryDate_example",
            documentHolderName: "documentHolderName_example",
            documentIssuanceCountry: "documentIssuanceCountry_example",
            documentIssuanceState: "documentIssuanceState_example",
            documentIssuedDate: "documentIssuedDate_example",
            documentIssuingAuthority: "documentIssuingAuthority_example",
            documentNumber: "documentNumber_example",
            documentReferenceNumber: "documentReferenceNumber_example",
            documentType: "documentType_example",
          },
        ],
        referenceId: "referenceId_example",
      },
      documentDetails: [
        {
          document: [
            {
              document: "document_example",
              fileName: "fileName_example",
              fileType: "fileType_example",
            },
          ],
          documentType: "documentType_example",
        },
      ],
      referenceId: "referenceId_example",
      stakeholders: [
        {
          referenceId: "referenceId_example",
          stakeholderDetails: {
            documentDetails: [
              {
                document: [
                  {
                    document: "document_example",
                    fileName: "fileName_example",
                    fileType: "fileType_example",
                  },
                ],
                documentColor: "documentColor_example",
                documentExpiryDate: "documentExpiryDate_example",
                documentHolderName: "documentHolderName_example",
                documentIssuanceCountry: "documentIssuanceCountry_example",
                documentIssuanceState: "documentIssuanceState_example",
                documentIssuedDate: "documentIssuedDate_example",
                documentIssuingAuthority: "documentIssuingAuthority_example",
                documentNumber: "documentNumber_example",
                documentReferenceNumber: "documentReferenceNumber_example",
                documentType: "documentType_example",
              },
            ],
          },
        },
      ],
    },
    region: "region_example",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.uploadDocumentforCorporateCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **corporateComplianceDocumentRequestDTO** | **CorporateComplianceDocumentRequestDTO**| corporateComplianceDocumentRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**CorporateComplianceDocumentResponseDTO**

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


