# AddBeneficiaryRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaryContactCountryCode** | **string** | This field accepts the mobile number country code of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryContactNumber** | **string** | This field accepts the mobile number of the beneficiary--digits only--without the country code.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | The bank account type of the beneficiary. The account type can be either Individual or Corporate. | [default to undefined]
**beneficiaryEmail** | **string** | This field accepts an email of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**destinationCurrency** | **string** | The 3-letter [ISO-4217 destination currency code](/docs/currency-and-country-codes). | [default to undefined]
**destinationCountry** | **string** | This field contains the 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the destination country.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**payoutMethod** | **string** | This field accepts the payout method for the remittance payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY | [default to undefined]
**beneficiaryName** | **string** | The name of the beneficiary. | [default to undefined]
**beneficiaryAlias** | **string** | This field accepts the alias of beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryPostcode** | **string** | This field accepts the postal code of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryAddress** | **string** | This field accepts an address of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryCity** | **string** | This field accepts the city of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryCountryCode** | **string** | The [ISO-2 country code](/docs/currency-and-country-codes) of the beneficiary. | [default to undefined]
**beneficiaryState** | **string** | This field accepts the state of the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**remitterBeneficiaryRelationship** | **string** | This field accepts the relationship of the beneficiary with the remitter.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryAccountNumber** | **string** | This field accepts an account number.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryBankAccountType** | **string** | The type of account. This field is conditional in case of WALLET payout and the possible values are: Current Saving Maestra Checking   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryBankName** | **string** | This field accepts the beneficiary bank name.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryBankCode** | **string** | This field accepts the beneficiary bank code.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryIdentificationType** | **string** | This field accepts the type of identification document name for a beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryIdentificationValue** | **string** | This field accepts an identification document number for the beneficiary.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**routingCodeType1** | **string** | This field accepts the routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**routingCodeValue1** | **string** | This field accepts the routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**routingCodeType2** | **string** | This field accepts the routing code type 2, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**routingCodeValue2** | **string** | This field accepts the routing code value 2, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**proxyType** | **string** | This field indicates the proxy type sent in the payment request. For SGD-PayNow: The proxy type can be MOBILE, UEN , NRIC, or VPA  For INR-UPI: The proxy type should be VPA For BRL-PIX: The proxy type can be MOBILE, ID, EMAIL, or RANDOM_KEY  For AUD-PayID: The proxy type can be MOBILE, EMAIL, ABN, or ORGANISATION_ID (only domestic payouts are allowed) For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note: This field is mandatory when the payoutMethod type is PROXY.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**proxyValue** | **string** | This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryCardIssuerName** | **string** | This field accepts issuer name of the card.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**beneficiaryCardExpiryDate** | **string** | This field accepts expiry date of card.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**authenticationCode** | **string** | This fields accepts the authenticationCode generated as part of SCA(Strong Customer Authentication). Note: Authentication code must be passed if regulatory region of the program is UK or EU and License Entity Nium. For other regions, this field is optional.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**encryptedBeneficiaryCardToken** | **string** | This field accepts the system generated token number to identify the card stored at Nium\&#39;s platform. Note: This field is mandatory if the client is non-PCI DSS compliant.   Note: For this conditional field, see the callout at the top of this page. | [optional] [default to undefined]
**convertDestinationCurrency** | **boolean** | This field denotes if the beneficiary bank converts the amount in the destination account currency and credits to the account in case the beneficiary account is not in the same currency as destination currency. | [optional] [default to undefined]
**autoSweepPayoutAccount** | **boolean** |  | [optional] [default to undefined]
**defaultAutoSweepPayoutAccount** | **boolean** |  | [optional] [default to undefined]
**beneficiaryContactName** | **string** |  | [optional] [default to undefined]
**beneficiaryEntityType** | **string** |  | [optional] [default to undefined]
**beneficiaryDob** | **string** |  | [optional] [default to undefined]
**beneficiaryEstablishmentDate** | **string** |  | [optional] [default to undefined]
**beneficiaryName_local** | **string** | The name of beneficiary in local language | [optional] [default to undefined]

## Example

```typescript
import { AddBeneficiaryRequestDTO } from 'nium-client';

const instance: AddBeneficiaryRequestDTO = {
    beneficiaryContactCountryCode,
    beneficiaryContactNumber,
    beneficiaryAccountType,
    beneficiaryEmail,
    destinationCurrency,
    destinationCountry,
    payoutMethod,
    beneficiaryName,
    beneficiaryAlias,
    beneficiaryPostcode,
    beneficiaryAddress,
    beneficiaryCity,
    beneficiaryCountryCode,
    beneficiaryState,
    remitterBeneficiaryRelationship,
    beneficiaryAccountNumber,
    beneficiaryBankAccountType,
    beneficiaryBankName,
    beneficiaryBankCode,
    beneficiaryIdentificationType,
    beneficiaryIdentificationValue,
    routingCodeType1,
    routingCodeValue1,
    routingCodeType2,
    routingCodeValue2,
    proxyType,
    proxyValue,
    beneficiaryCardIssuerName,
    beneficiaryCardExpiryDate,
    authenticationCode,
    encryptedBeneficiaryCardToken,
    convertDestinationCurrency,
    autoSweepPayoutAccount,
    defaultAutoSweepPayoutAccount,
    beneficiaryContactName,
    beneficiaryEntityType,
    beneficiaryDob,
    beneficiaryEstablishmentDate,
    beneficiaryName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
