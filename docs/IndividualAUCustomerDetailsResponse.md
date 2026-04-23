# IndividualAUCustomerDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallets** | [**Array&lt;WalletDTO&gt;**](WalletDTO.md) | This field contains list of wallets associated with the customer. | [default to undefined]
**customerHashId** | **string** | This field indicated previously generated unique customer identifier of customer. | [default to undefined]
**referenceId** | **string** | This field contains the unique reference identifier of the customer. | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**subStatus** | **string** | This field contains additional sub-status information | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [default to undefined]
**incomeSourceType** | **string** | Nature of the customer primary work or business category, such as gig_worker, contractor, freelancer, salaried employee, small business owner etc. | [default to undefined]
**annualIncome** | **string** | The customer total estimated income for a year | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]
**website** | **string** | Provide links to your company website, online stores, apps, social media profiles etc. | [optional] [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsage**](BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**billingAddress** | [**AUAddressDTO**](AUAddressDTO.md) |  | [default to undefined]
**documents** | [**Array&lt;DocumentDetailsFull&gt;**](DocumentDetailsFull.md) |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**kycMode** | **string** |  | [optional] [default to undefined]
**parentCustomerHashId** | **string** | This field contains the unique identifier of the corporate parent customer to whom the individual customer is tagged. | [default to undefined]

## Example

```typescript
import { IndividualAUCustomerDetailsResponse } from 'nium-client';

const instance: IndividualAUCustomerDetailsResponse = {
    wallets,
    customerHashId,
    referenceId,
    status,
    subStatus,
    type,
    kycType,
    region,
    externalId,
    tags,
    segment,
    firstName,
    middleName,
    lastName,
    email,
    nationality,
    dateOfBirth,
    mobile,
    mobileCountryCode,
    incomeSourceType,
    annualIncome,
    sourceOfFunds,
    taxDetails,
    website,
    natureOfBusiness,
    expectedAccountUsage,
    billingAddress,
    documents,
    kycStatus,
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    deviceDetails,
    bankAccountDetails,
    kycMode,
    parentCustomerHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
