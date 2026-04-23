# RemittanceTransactionsRequestDTO

Remittance transaction request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiary** | [**RemittanceTransactionsRequestDTOBeneficiary**](RemittanceTransactionsRequestDTOBeneficiary.md) |  | [default to undefined]
**payout** | [**Payout**](Payout.md) |  | [default to undefined]
**customerComments** | **string** | This field is used to add any customer comments.  Maximum character limit is 512.  Note: Special characters are not allowed in this field. | [optional] [default to undefined]
**purposeCode** | **string** | This field accepts the purpose code for the payment. Refer to the [Glossary of Purpose Codes](/docs/purpose-of-transfer-codes) to identify the correct value to be provided.  If purpose code value is not passed then the default value will be IR01802 (Advertising &amp; Public relations-related expenses).  Purpose Code - Description IR001         - Transfer to own account IR002         - Family Maintenance IR003         - Education-related student expenses IR004         - Medical Treatment IR005         - Hotel Accommodation IR006         - Travel IR007         - Utility Bills IR008         - Repayment of Loans IR009         - Tax Payment IR010         - Purchase of Residential Property IR011         - Payment of Property Rental IR012         - Insurance Premium IR013         - Product indemnity insurance IR014         - Insurance Claims Payment IR015         - Mutual Fund Investment IR016         - Investment in Shares IR017         - Donations IR01801       - Information Service Charges IR01802       - Advertising &amp; Public relations-related expenses IR01803       - Royalty fees, trademark fees, patent fees, and copyright fees IR01804       - Fees for brokers, front end fee, commitment fee, guarantee fee and custodian fee IR01805       - Fees for advisors, technical assistance, and academic knowledge, including remuneration for specialists IR01806       - Representative office expenses IR01807       - Construction costs/expenses IR01808       - Transportation fees for goods IR01809       - For payment of exported goods IR01810       - Delivery fees for goods IR01811       - General Goods Trades - Offline trade | [default to undefined]
**deviceDetails** | [**WalletDeviceDetailsDTO**](WalletDeviceDetailsDTO.md) |  | [optional] [default to undefined]
**authenticationCode** | **string** | This field accepts the authentication code generated as part of SCA (Strong Customer Authentication).  Note: Either exemption code or authentication is expected if the program\&#39;s regulatory region is UK or EU. This field does not accept a value for any other region. | [optional] [default to undefined]
**exemptionCode** | **string** | This field accepts the reason code for the exemption provided as part of SCA (Strong Customer Authentication). This must be 2 character string and the valid values are as following: 01 - Trusted Beneficiary 03 - Recurring Transactions 04 - Payment to Self Note: Exemption code is expected if authenticationCode is not provided and regulatory region is UK or EU. | [optional] [default to undefined]
**sourceOfFunds** | **string** | This field accepts the source of funds. The possible values are: Salary Personal Savings Personal Wealth Retirement Funds Business Owner/Shareholder Loan Facility Personal Account Corporate Account | [default to undefined]
**additionalFees** | [**AdditionalFeesDTO**](AdditionalFeesDTO.md) |  | [optional] [default to undefined]
**remitter** | [**RemitterRequestDTO**](RemitterRequestDTO.md) |  | [optional] [default to undefined]
**ownPayment** | **boolean** | This field applies only to licensed financial institutions. Boolean value \&#39;false\&#39; indicates an on-behalf payout request or \&#39;true\&#39; indicates a payout executed by the Financial Institution itself. If the field is absent from the request, the default flag is set to \&#39;false\&#39;. A valid remitter object is required to be passed for on-behalf payout. | [optional] [default to undefined]
**tags** | [**Array&lt;ClientCustomTagDTO&gt;**](ClientCustomTagDTO.md) | This is an array which accepts custom tags &amp; values. Maximum 15 key-value pairs can be sent in tags. | [optional] [default to undefined]
**beneficiaryIntermediaryBankCode** | **string** | The bank code of a correspondent bank to route SWIFT payments through.  Use this field if you prefer to specify a bank instead of using Nium\&#39;s automatic routing. | [optional] [default to undefined]
**preferences** | [**Preferences**](Preferences.md) |  | [optional] [default to undefined]
**externalId** | **string** | Optional user-defined ID for tracking requests or transactions.   - Must be 1-36 characters, using only letters, numbers, and hyphens.   - Cannot start or end with a hyphen or contain consecutive hyphens. | [optional] [default to undefined]
**corridorData** | [**CorridorDataDTO**](CorridorDataDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RemittanceTransactionsRequestDTO } from 'nium-client';

const instance: RemittanceTransactionsRequestDTO = {
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
    externalId,
    corridorData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
