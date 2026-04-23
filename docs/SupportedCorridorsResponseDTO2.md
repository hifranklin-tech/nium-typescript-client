# SupportedCorridorsResponseDTO2

This field contains an array that holds the response data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationCurrency** | **string** | This field provides destination Currency. | [optional] [default to undefined]
**payoutMethod** | **string** | This field accepts the different modes of payout.  | [optional] [default to undefined]
**destinationCountry** | **string** | This field provides the 2-letter ISO-2 destination country code. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | This field provides the beneficiary account type. | [optional] [default to undefined]
**clientType** | **string** | This field provides type of Client e.g. FI, NonFI | [optional] [default to undefined]
**accountVerification** | **string** | This field provides whether account verification is supported or not. | [optional] [default to undefined]
**payoutMethodCategory** | **string** | Separates the payout methods into different categories including &lt;strong&gt;ach&lt;/strong&gt;, &lt;strong&gt;cash&lt;/strong&gt;, &lt;strong&gt;proxy_upi&lt;/strong&gt;, and &lt;strong&gt;wire_local&lt;/strong&gt;. | [optional] [default to undefined]
**additionalInfo** | **string** | This field provides additional information with respect to the corridor. | [optional] [default to undefined]
**limitCurrency** | **string** | This field provides currency for the minimum and maximum limits. | [optional] [default to undefined]
**minimumAmount** | **string** | This field provides information for minimum amount for the corridor, currency and payment method. | [optional] [default to undefined]
**maximumAmount** | **string** | This field provides information for maximum amount for the corridor, currency and payment method | [optional] [default to undefined]
**cutoffDeliveryNotes** | **string** | This field provides information on Cut-off times and delivery. | [optional] [default to undefined]
**wallets** | **Array&lt;string&gt;** | This field provides information on wallets partners. | [optional] [default to undefined]
**deliveryTAT** | **string** | This field provides information on delivery times such as Realtime, T0 – same day , T1 – next day etc. | [optional] [default to undefined]
**customerType** | **string** | This field provides the type of customer. | [optional] [default to undefined]
**customerCountry** | **Array&lt;string&gt;** | List of countries accepted as remitter country. | [optional] [default to undefined]
**routingCodeType** | **string** | This field provides the routing code type for the currency. For example SWIFT, ACH CODE etc.  The possible values are:  • SWIFT for all cases where SWIFT is applicable  • IFSC (relevant for India)  • ACH CODE (relevant for USA)  • BSB CODE (relevant for Australia)  • SORT CODE (relevant for the UK)  • LOCATION ID (relevant for Nepal)  • BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more)  • TRANSIT NUMBER (relevant for Canada)  • BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) | [optional] [default to undefined]
**networkParticipant** | **string** | This field provides type of network participant. | [optional] [default to undefined]
**fxSource** | **string** | This field provides information on the FX source. | [optional] [default to undefined]
**channels** | **string** | This field provides information on channel supported.  | [optional] [default to undefined]
**mandatoryDataRequirement** | **Array&lt;string&gt;** | This field provides information on mandatory information required for payout request. | [optional] [default to undefined]
**supportingDocuments** | **Array&lt;string&gt;** | This field provides information on any supporting documents required for payout for e.g. Invoice etc | [optional] [default to undefined]
**beneficiaryStatementNarrative** | **string** | This field provides information that will be visible on the beneficiary statement for payout transaction. | [optional] [default to undefined]
**proofOfPayment** | **string** | This field provides information on proof of payment. | [optional] [default to undefined]

## Example

```typescript
import { SupportedCorridorsResponseDTO2 } from 'nium-client';

const instance: SupportedCorridorsResponseDTO2 = {
    destinationCurrency,
    payoutMethod,
    destinationCountry,
    beneficiaryAccountType,
    clientType,
    accountVerification,
    payoutMethodCategory,
    additionalInfo,
    limitCurrency,
    minimumAmount,
    maximumAmount,
    cutoffDeliveryNotes,
    wallets,
    deliveryTAT,
    customerType,
    customerCountry,
    routingCodeType,
    networkParticipant,
    fxSource,
    channels,
    mandatoryDataRequirement,
    supportingDocuments,
    beneficiaryStatementNarrative,
    proofOfPayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
