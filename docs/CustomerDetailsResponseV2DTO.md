# CustomerDetailsResponseV2DTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerHashId** | **string** |  | [optional] [default to undefined]
**customerType** | **string** |  | [optional] [default to undefined]
**accountDetails** | [**Array&lt;CustomerAccountDetail&gt;**](CustomerAccountDetail.md) |  | [optional] [default to undefined]
**individualCustomer** | [**IndividualCustomerResponseDTO**](IndividualCustomerResponseDTO.md) |  | [optional] [default to undefined]
**corporateCustomer** | [**CustomerCorporateCustomerResponseDTO**](CustomerCorporateCustomerResponseDTO.md) |  | [optional] [default to undefined]
**complianceStatus** | **string** |  | [optional] [default to undefined]
**termsAndConditionAcceptanceFlag** | **boolean** | This flag denotes that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**termsAndConditionName** | **string** | This name that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**termsAndConditionVersionId** | **string** | This version that the customer has accepted the Terms and Conditions. | [optional] [default to undefined]
**remarks** | **string** | This field contains any system-generated compliance comments, if applicable. | [optional] [default to undefined]
**complianceRemarks** | **string** | The compliance remarks from Compliance officer, if applicable. | [optional] [default to undefined]
**status** | **string** | The overall KYC status of the customer | [optional] [default to undefined]
**kycMode** | **string** | This field contains the kyc mode  The possible values for customer type INDIVIDUAL are: E_KYC, MANUAL_KYC, SCREENING, EVERIFY_KYC, or NONE.  The possible values for customer type CORPORATE are: KYB or NONE. | [optional] [default to undefined]
**complianceLevel** | **string** | This field contains the compliance level for the customer. The possible values for customer type INDIVIDUAL are: SCREENING_KYC, SCREENING, SCREENING_KYB. The possible values for customer type CORPORATE is SCREENING_KYB. | [optional] [default to undefined]
**segment** | **string** |  | [optional] [default to undefined]
**blockReason** | **string** | The reason for blocking the customer, if applicable. Otherwise, it contains null. | [optional] [default to undefined]
**blockComment** | **string** | The comment entered while blocking the customer, if applicable. Otherwise, it contains null. | [optional] [default to undefined]
**blockUpdatedBy** | **string** | The details of the entity updating a customer block/unblock, if applicable. Otherwise, it contains null. The possible values are CLIENT or NIUM. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**verificationConsent** | **boolean** | This flag contain the customer consent to proceed in case e-Document verification flow is initiated. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp of customer creation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43. | [optional] [default to undefined]
**updatedAt** | **string** | The timestamp of last customer updation in the format YYY-MM-DD hh:mm:ss, for example, 2021-07-29 06:11:43. | [optional] [default to undefined]

## Example

```typescript
import { CustomerDetailsResponseV2DTO } from 'nium-client';

const instance: CustomerDetailsResponseV2DTO = {
    customerHashId,
    customerType,
    accountDetails,
    individualCustomer,
    corporateCustomer,
    complianceStatus,
    termsAndConditionAcceptanceFlag,
    termsAndConditionName,
    termsAndConditionVersionId,
    remarks,
    complianceRemarks,
    status,
    kycMode,
    complianceLevel,
    segment,
    blockReason,
    blockComment,
    blockUpdatedBy,
    tags,
    verificationConsent,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
