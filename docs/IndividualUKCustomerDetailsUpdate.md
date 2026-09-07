# IndividualUKCustomerDetailsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalScaReferenceId** | **string** | The SCA Reference ID generated as part of SCA (Strong Customer Authentication). | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**documents** | [**Array&lt;DocumentType&gt;**](DocumentType.md) |  | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**externalRiskSeverity** | **string** | External risk severity rating | [optional] [default to undefined]
**fiOnboardingDate** | **string** | Date when the customer was onboarded at the FI | [optional] [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**gender** | **string** | Gender of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**taxDetails** | [**Array&lt;UkSgMinTaxDetails&gt;**](UkSgMinTaxDetails.md) | List of tax details | [optional] [default to undefined]
**website** | **string** | Website of the customer | [optional] [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** | This field accepts the applicant Politically Exposed Person or Not. | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseIndividualBRFullCustomerDetailsAllOfExpectedAccountUsage**](BaseIndividualBRFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**isPep** | **boolean** |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**parentCustomerHashId** | **string** | This field contains the unique identifier of the corporate parent customer to whom the individual customer is tagged. | [default to undefined]

## Example

```typescript
import { IndividualUKCustomerDetailsUpdate } from 'nium-client';

const instance: IndividualUKCustomerDetailsUpdate = {
    externalScaReferenceId,
    externalId,
    kycType,
    region,
    segment,
    tags,
    type,
    billingAddress,
    dateOfBirth,
    documents,
    email,
    externalRiskSeverity,
    fiOnboardingDate,
    firstName,
    gender,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    natureOfBusiness,
    taxDetails,
    website,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    bankAccountDetails,
    deviceDetails,
    expectedAccountUsage,
    isPep,
    kycStatus,
    parentCustomerHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
