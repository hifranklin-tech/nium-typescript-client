# CustomerCustomerDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The individual\&#39;s reference id. | [optional] [default to undefined]
**customerId** | **number** | This field contains an internal Nium customer identifier. This field shall be deprecated in future. | [optional] [default to undefined]
**walletHashId** | **string** | The unique wallet identifier generated simultaneously with customer creation. | [optional] [default to undefined]
**customerHashId** | **string** | The unique customer identifier generated at the time of customer creation. | [optional] [default to undefined]
**email** | **string** | The unique email address of the customer. | [optional] [default to undefined]
**countryCode** | **string** | This field contains the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for identifying the country prefix to the customer’s mobile number. | [optional] [default to undefined]
**mobile** | **string** | The mobile number of the customer without the country code. | [optional] [default to undefined]
**firstName** | **string** | The first name of the customer [INDIVIDUAL] or applicant [CORPORATE]. | [optional] [default to undefined]
**middleName** | **string** | This field contains the middle name of the customer [INDIVIDUAL] or applicant [CORPORATE], if provided. Otherwise, it contains null. | [optional] [default to undefined]
**lastName** | **string** | The last name of the customer [INDIVIDUAL] or applicant [CORPORATE]. | [optional] [default to undefined]
**preferredName** | **string** | The preferred name of the customer[INDIVIDUAL] or business name [CORPORATE]. | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual [INDIVIDUAL] or applicant [CORPORATE] in YYYY-MM-DD format. | [optional] [default to undefined]
**gender** | **string** | This field contains the gender of the customer [INDIVIDUAL] or applicant [CORPORATE], if provided during customer onboarding. The possible values are - Male, Female, or Others. Otherwise, it contains null. | [optional] [default to undefined]
**nationality** | **string** | The 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer [INDIVIDUAL] or applicant [CORPORATE] citizenship. | [optional] [default to undefined]
**employeeId** | **string** | The employee ID of an employee, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**designation** | **string** | The designation of an employee, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**customerType** | **string** | The customer type which is either &lt;B&gt;INDIVIDUAL&lt;/B&gt; or &lt;B&gt;CORPORATE&lt;/B&gt; and this depends on customer onboarding flows. | [optional] [default to undefined]
**deliveryAddress1** | **string** | The line 1 of customer [INDIVIDUAL] or applicant [CORPORATE] delivery address. It is used for card delivery. | [optional] [default to undefined]
**deliveryAddress2** | **string** | This field contains the line 2 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. It is used for card delivery. Otherwise, it contains null. | [optional] [default to undefined]
**deliveryCity** | **string** | This field contains the city of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address. | [optional] [default to undefined]
**deliveryLandmark** | **string** | This field contains the landmark for customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**deliveryCountry** | **string** | This field contains the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**deliveryState** | **string** | The state of the customer [INDIVIDUAL] or applicant\\u2019s [CORPORATE] delivery address, if provided during customer onboarding. Otherwise, it contains &#x60;null&#x60;. | [optional] [default to undefined]
**deliveryZipCode** | **string** | This field contains the zip code of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] delivery address. | [optional] [default to undefined]
**billingAddress1** | **string** | This field contains the line 1 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, which is used for KYC. | [optional] [default to undefined]
**billingAddress2** | **string** | This field contains the line 2 of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingCity** | **string** | \&quot;The city of the customer [INDIVIDUAL] or corporation\&#39;s [CORPORATE] billing address.\&quot; | [optional] [default to undefined]
**billingLandmark** | **string** | This field contains the landmark for customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingCountry** | **string** | This field contains the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address, if provided during customer onboarding. Otherwise, it contains null. | [optional] [default to undefined]
**billingState** | **string** | The state of the customer [INDIVIDUAL] or the corporation\&#39;s [CORPORATE] billing address, if provided during onboarding.\\nOtherwise, it contains &#x60;null&#x60;. | [optional] [default to undefined]
**billingZipCode** | **string** | This field contains the zip code of customer’s [INDIVIDUAL] or applicant’s [CORPORATE] billing address. | [optional] [default to undefined]
**complianceStatus** | **string** | The overall compliance status of the customer. | [optional] [default to undefined]
**termsAndConditionAcceptanceFlag** | **boolean** | This flag denotes that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**termsAndConditionName** | **string** | This name that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**termsAndConditionVersionId** | **string** | This version that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**remarks** | **string** | This field contains any system-generated compliance comments, if applicable. | [optional] [default to undefined]
**complianceRemarks** | **string** | The compliance remarks from Compliance officer, if applicable. | [optional] [default to undefined]
**rfiDetails** | [**Array&lt;CustomerRfiDetailsResponse&gt;**](CustomerRfiDetailsResponse.md) | This array contains the details of RFI, if raised. Otherwise, it contains null. | [optional] [default to undefined]
**paymentIds** | [**Array&lt;CustomerPaymentIdDTO&gt;**](CustomerPaymentIdDTO.md) | The unique payment Ids assigned to the customer. | [optional] [default to undefined]
**status** | **string** | The overall KYC status of the customer | [optional] [default to undefined]
**kycMode** | **string** | This field contains the kyc mode  The possible values for customer type INDIVIDUAL are: E_KYC, MANUAL_KYC, SCREENING, EVERIFY_KYC, or NONE.  The possible values for customer type CORPORATE are: KYB or NONE. | [optional] [default to undefined]
**complianceLevel** | **string** | This field contains the compliance level for the customer. The possible values for customer type INDIVIDUAL are: SCREENING_KYC, SCREENING, SCREENING_KYB. The possible values for customer type CORPORATE is SCREENING_KYB. | [optional] [default to undefined]
**identificationTypes** | **Array&lt;string&gt;** | This array contains the list of identification used during KYC. Otherwise, it contains null. | [optional] [default to undefined]
**segment** | **string** | The fee segment applicable to the customer. Otherwise, it contains null. | [optional] [default to undefined]
**nativeLanguageName** | **string** | The name of the customer in native language, if provided during customer onboarding. Otherwise, it contains null | [optional] [default to undefined]
**identificationData** | **Array&lt;{ [key: string]: string; }&gt;** | This array contains objects consisting of type and value of each uploaded document. | [optional] [default to undefined]
**blockReason** | **string** | The reason for blocking the customer, if applicable. Otherwise, it contains null. | [optional] [default to undefined]
**blockComment** | **string** | The comment entered while blocking the customer, if applicable. Otherwise, it contains null. | [optional] [default to undefined]
**blockUpdatedBy** | **string** | The details of the entity updating a customer block/unblock, if applicable. Otherwise, it contains null. The possible values are CLIENT or NIUM. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;CustomerCustomerTaxDetailDTO&gt;**](CustomerCustomerTaxDetailDTO.md) | This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null. | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;CustomerProfessionalDetails&gt;**](CustomerProfessionalDetails.md) | Accepts the positions. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**pep** | **boolean** | This flag indicates if a customer is a Politically Exposed Person (PEP) or not. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | This object contains the user defined key-value pairs provided by the client. | [optional] [default to undefined]
**businessDetails** | **object** | This object may contain the business details in certain client onboarding flows. It is null for individual customer onboarding flows. | [optional] [default to undefined]
**stakeholderDetails** | **string** | This is an array object may contain the stakeholder details in certain client onboarding flows. It is null for individual customer onboarding flows. | [optional] [default to undefined]
**businessPartner** | [**Array&lt;CustomerBusinessPartnerDetailsResponseDTO&gt;**](CustomerBusinessPartnerDetailsResponseDTO.md) |  | [optional] [default to undefined]
**riskAssessmentInfo** | **object** | This object may contain the risk assessment details in certain client onboarding flows. It is null for individual customer onboarding flows. | [optional] [default to undefined]
**verificationConsent** | **boolean** | This flag contain the customer consent to proceed in case e-Document verification flow is initiated. | [optional] [default to undefined]
**countryOfBirth** | **string** | This field contains the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer’s country of birth. | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | This flag contains the customer’s intended use of account. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp of customer creation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43. | [optional] [default to undefined]
**updatedAt** | **string** | The timestamp of last customer updation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43. | [optional] [default to undefined]
**estimatedMonthlyFunding** | **string** | The estimated monthly funding amount expected in the wallet. This field is required when estimatedMonthlyFundingCurrency field is provided in the request. | [optional] [default to undefined]
**estimatedMonthlyFundingCurrency** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) in which estimated monthly funding is expected in the wallet, for example, SGD. | [optional] [default to undefined]
**internationalPaymentsSupported** | **boolean** | This field indicates if the customer will be doing International send/receive payments. The default value will be false. | [optional] [default to undefined]
**expectedCountriesToSendReceiveFrom** | **Array&lt;string&gt;** | This is an array of 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) to allow the client to capture the expected countries to send/receive international payments from. This field is required when internationalPaymentsSupported field is true, for example, [“FR”, “DE”]. | [optional] [default to undefined]
**regulatoryRegion** | **string** | The regulatory region of the customer. | [optional] [default to undefined]
**riskSeverity** | **string** | The risk severity received from compliance (CAAS). | [optional] [default to undefined]
**riskScore** | **string** | This field contains the risk score received from compliance (CAAS). | [optional] [default to undefined]

## Example

```typescript
import { CustomerCustomerDetailResponse } from 'nium-client';

const instance: CustomerCustomerDetailResponse = {
    referenceId,
    customerId,
    walletHashId,
    customerHashId,
    email,
    countryCode,
    mobile,
    firstName,
    middleName,
    lastName,
    preferredName,
    dateOfBirth,
    gender,
    nationality,
    employeeId,
    designation,
    customerType,
    deliveryAddress1,
    deliveryAddress2,
    deliveryCity,
    deliveryLandmark,
    deliveryCountry,
    deliveryState,
    deliveryZipCode,
    billingAddress1,
    billingAddress2,
    billingCity,
    billingLandmark,
    billingCountry,
    billingState,
    billingZipCode,
    complianceStatus,
    termsAndConditionAcceptanceFlag,
    termsAndConditionName,
    termsAndConditionVersionId,
    remarks,
    complianceRemarks,
    rfiDetails,
    paymentIds,
    status,
    kycMode,
    complianceLevel,
    identificationTypes,
    segment,
    nativeLanguageName,
    identificationData,
    blockReason,
    blockComment,
    blockUpdatedBy,
    taxDetails,
    professionalDetails,
    pep,
    tags,
    businessDetails,
    stakeholderDetails,
    businessPartner,
    riskAssessmentInfo,
    verificationConsent,
    countryOfBirth,
    intendedUseOfAccount,
    createdAt,
    updatedAt,
    estimatedMonthlyFunding,
    estimatedMonthlyFundingCurrency,
    internationalPaymentsSupported,
    expectedCountriesToSendReceiveFrom,
    regulatoryRegion,
    riskSeverity,
    riskScore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
