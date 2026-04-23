# ProductProfessionalDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **string** | The position. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstantsusingget) to get the list of valid enum values. | [optional] [default to undefined]
**sharePercentage** | **string** | Ownership percentage as a number from 0 to 100. Example: &#x60;23.4&#x60;. Applies to Ultimate Beneficial Owners (UBOs), shareholders, trustees, or partners. | [optional] [default to undefined]
**positionStartDate** | **string** | The date the Ultimate Beneficial Owner (UBO), trustee, or partner began their role or position. | [optional] [default to undefined]
**positionEndDate** | **string** |  | [optional] [default to undefined]
**capitalContribution** | **string** | Accepts the capital contribution of the:   - Ultimate Beneficial Owner (&#x60;UBO&#x60;)   - &#x60;SHAREHOLDER&#x60;   - &#x60;PARTNER&#x60;   - &#x60;TRUSTEE&#x60; Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**hasDistributionRight** | **boolean** | Accepts if the &#x60;SHAREHOLDER&#x60; or Ultimate Benfical Owner (&#x60;UBO&#x60;) has distribution rights. | [optional] [default to undefined]
**votingRights** | **Array&lt;string&gt;** | List of voting rights for the Ultimate Beneficial Owner (UBO), shareholder, or partner. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid enum values. | [optional] [default to undefined]
**interestPercentage** | **string** | Number between 0-100 stating the holding amount of the applicant. Trust beneficiary interest percentage to be collected for trust beneficiary positions. Partner interest percentage to be collected for partner positions. | [optional] [default to undefined]
**trustBeneficiaryClass** | **string** | The class of the trust beneficiary. Only required if the position is listed as a trust beneficiary. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid enum values. | [optional] [default to undefined]

## Example

```typescript
import { ProductProfessionalDetails } from 'nium-client';

const instance: ProductProfessionalDetails = {
    position,
    sharePercentage,
    positionStartDate,
    positionEndDate,
    capitalContribution,
    hasDistributionRight,
    votingRights,
    interestPercentage,
    trustBeneficiaryClass,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
