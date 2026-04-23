# BulkPayoutItemsDto

List of Individual Payout Instructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerHashId** | **string** | Unique ID to identify the &#x60;customer&#x60;. Created when the &#x60;customer&#x60; was intially created. | [default to undefined]
**walletHashId** | **string** | Unique ID to identify a &#x60;wallet&#x60;. Created when the &#x60;wallet&#x60; was intially created. | [default to undefined]
**externalId** | **string** | External reference number. Created by the &#x60;client&#x60; and used to help retrieve data. Must be 1-36 characters, only letters, numbers, and hyphens, and cannot start, end, or contain consecutive hyphens. | [default to undefined]
**beneficiary** | [**BulkPayoutItemsDtoBeneficiary**](BulkPayoutItemsDtoBeneficiary.md) |  | [default to undefined]
**payout** | [**BulkPayoutServicePayout**](BulkPayoutServicePayout.md) |  | [default to undefined]
**customerComments** | **string** | Use this field to add any customer comments.   - Maximum character limit is 512.   - Special characters are not permitted. | [optional] [default to undefined]
**purposeCode** | **string** | Accepts the purpose code of the payment. See [Purpose Codes](/docs/purpose-of-transfer-codes) for a list of values to use. | [default to undefined]
**deviceDetails** | [**DeviceDetailsDto**](DeviceDetailsDto.md) |  | [optional] [default to undefined]
**authenticationCode** | **string** | The authentication code generated as part of SCA (Strong Customer Authentication).  Either exemption code or authentication is expected if the program\&#39;s regulatory region is UK or EU. This field does not accept a value for any other region. | [optional] [default to undefined]
**exemptionCode** | **string** | The reason code for the exemption provided as part of SCA (Strong Customer Authentication). Acceptable values include:   - **01**: Trusted Beneficiary   - **04**: Payment to Self Exemption code is expected if &#x60;authenticationCode&#x60; is not provided and regulatory region is UK or EU. | [optional] [default to undefined]
**sourceOfFunds** | **string** | Accepts the source of funds. Available values include:   - Salary   - Personal Savings   - Personal Wealth   - Retirement Funds   - Business Owner/Shareholder   - Loan Facility   - Personal AccountCorporate Account | [default to undefined]
**additionalFees** | [**AdditionalFeesDto**](AdditionalFeesDto.md) |  | [optional] [default to undefined]
**remitter** | [**RemitterRequestDto**](RemitterRequestDto.md) |  | [optional] [default to undefined]
**ownPayment** | **boolean** | Applies only to licensed financial institutions.   - \&#39;false\&#39; indicates an on-behalf payout request.   - \&#39;true\&#39; indicates a payout executed by the Financial Institution itself.  If the field is absent from the request, the default flag is set to \&#39;false\&#39;. A valid &#x60;remitter&#x60; object is required to be passed for on-behalf payments. | [optional] [default to undefined]
**tags** | [**Array&lt;ClientCustomTagDto&gt;**](ClientCustomTagDto.md) | An array which accepts custom tags &amp; values created by the &#x60;client&#x60; to retrieve data. A maximum of 15 key-value pairs can be sent in tags. | [optional] [default to undefined]
**beneficiaryIntermediaryBankCode** | **string** | Accepts a correspondent (intermediary) bank to send out any payment. | [optional] [default to undefined]
**preferences** | [**BulkPayoutServicePreferences**](BulkPayoutServicePreferences.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutItemsDto } from 'nium-client';

const instance: BulkPayoutItemsDto = {
    customerHashId,
    walletHashId,
    externalId,
    beneficiary,
    payout,
    customerComments,
    purposeCode,
    deviceDetails,
    authenticationCode,
    exemptionCode,
    sourceOfFunds,
    additionalFees,
    remitter,
    ownPayment,
    tags,
    beneficiaryIntermediaryBankCode,
    preferences,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
