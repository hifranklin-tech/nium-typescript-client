# ClientDetailResponseDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the &#x60;client&#x60;. | [optional] [default to undefined]
**email** | **string** | The client\&#39;s email Id. | [optional] [default to undefined]
**contactNo** | **string** | The client\&#39;s contact number. | [optional] [default to undefined]
**markup** | **number** | The cross currency transaction markup value. | [optional] [default to undefined]
**clientHashId** | **string** | The unique client identifier generated and shared before the initial request. | [optional] [default to undefined]
**logoUrl** | **string** | The client\&#39;s logo URL. | [optional] [default to undefined]
**countryCode** | **string** | The 3-letter ISO-4217 currency code. | [optional] [default to undefined]
**clientIdNumber** | **string** | This field shall be deprecated in future. | [optional] [default to undefined]
**notificationWebhook** | **string** | The Webhook notification redirection URL. | [optional] [default to undefined]
**complianceStatusCallbackUrl** | **string** | The redirection URL for compliance callbacks. | [optional] [default to undefined]
**deduplicationFlag** | **boolean** | The mobile/email uniqueness flag. | [optional] [default to undefined]
**customerAuthUrl** | **string** | The customer authorization URL. | [optional] [default to undefined]
**prefundName** | **string** | The name defined for ICC transactions | [optional] [default to undefined]
**fundingInstrumentType** | **string** | Details if a customer can fund their own wallet.   - **RESTRICTED**: The customer can\&#39;t fund their own wallet.   - **ONLY_DEBIT**: The customer can only fund their wallet using a debit card.   - **CREDIT_AND_DEBIT**: The customer can fund their wallet with a debit or credit card. | [optional] [default to undefined]
**cardTxnRedirectUrl** | **string** | The card transaction redirected URL. | [optional] [default to undefined]
**applePaySupport** | **boolean** | The flag for apple pay support. | [optional] [default to undefined]
**googlePaySupport** | **boolean** | The flag for google pay support. | [optional] [default to undefined]
**samsungPaySupport** | **boolean** | The flag for samsung pay support. | [optional] [default to undefined]
**paymentIds** | [**Array&lt;PaymentIdsDTO&gt;**](PaymentIdsDTO.md) | An array which holds the details about client payment Id. | [optional] [default to undefined]
**whitelistedRemitterAccounts** | [**Array&lt;RemitterAccountWhiteList&gt;**](RemitterAccountWhiteList.md) | Remitter\&#39;s accounts whitelisted for the client. | [optional] [default to undefined]
**allowThirdPartyFunding** | **boolean** | Specifies if third party funding is allowed or not. | [optional] [default to undefined]
**cardTxnProductCode** | **string** | Specifies the internal card transaction product code. | [optional] [default to undefined]
**cardTxnNarrative** | **string** | Specifiess the default transaction narrative. | [optional] [default to undefined]
**complianceCallbackUrl** | **string** | Specifies the compliance callback URL. | [optional] [default to undefined]
**currencyAuthorizationType** | **string** | Denotes the authorization type of a client. Available values include:   - SINGLE   - DUAL   - MULTI   - AUTO_SWEEP | [optional] [default to undefined]
**minimumCustomerAge** | **number** | The minimum customer age which should be 18 years. Discuss with your Nium account manager for any special use-cases. | [optional] [default to undefined]
**currencies** | [**Array&lt;ClientCurrencyResponseDTO&gt;**](ClientCurrencyResponseDTO.md) | An array which holds currency details. | [optional] [default to undefined]
**accountValidation** | **boolean** | Applicable to RHA clients. Details if account-validation transactions are forwarded to client. | [optional] [default to undefined]
**regulatoryRegion** | **string** | The regulatory region of the client. | [optional] [default to undefined]
**licenseEntity** | **string** | The license ownership of the client. | [optional] [default to undefined]
**postFundedPayout** | **boolean** | The Post Funded Payout of the client. | [optional] [default to undefined]
**customFeeEnabled** | **boolean** | The client preference to levy custom fee. | [optional] [default to undefined]
**childMustHaveParent** | **boolean** | Details if and customer must be treated as a child associated with a corporate customer at the parent level. | [optional] [default to undefined]
**billingAddressAsCorporate** | **boolean** | Indicates (if an individual customer at the child level should have the same billing address as the business address of the corporate customer at the parent level. | [optional] [default to undefined]
**allowInterClientWalletTransfer** | **boolean** | Details if inter client wallet transfer is enabled. | [optional] [default to undefined]
**confirmationOfPayee** | **boolean** | Details if the Confirmation of Payee is allowed or not. | [optional] [default to undefined]
**autoSweepBankDetails** | [**AutoSweepBankDetails**](AutoSweepBankDetails.md) |  | [optional] [default to undefined]
**ekycRedirectUrl** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ClientDetailResponseDTO2 } from 'nium-client';

const instance: ClientDetailResponseDTO2 = {
    name,
    email,
    contactNo,
    markup,
    clientHashId,
    logoUrl,
    countryCode,
    clientIdNumber,
    notificationWebhook,
    complianceStatusCallbackUrl,
    deduplicationFlag,
    customerAuthUrl,
    prefundName,
    fundingInstrumentType,
    cardTxnRedirectUrl,
    applePaySupport,
    googlePaySupport,
    samsungPaySupport,
    paymentIds,
    whitelistedRemitterAccounts,
    allowThirdPartyFunding,
    cardTxnProductCode,
    cardTxnNarrative,
    complianceCallbackUrl,
    currencyAuthorizationType,
    minimumCustomerAge,
    currencies,
    accountValidation,
    regulatoryRegion,
    licenseEntity,
    postFundedPayout,
    customFeeEnabled,
    childMustHaveParent,
    billingAddressAsCorporate,
    allowInterClientWalletTransfer,
    confirmationOfPayee,
    autoSweepBankDetails,
    ekycRedirectUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
