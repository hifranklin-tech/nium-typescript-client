# BeneficiaryResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaryHashId** | **string** | The unique beneficiary hash ID. | [optional] [default to undefined]
**beneficiaryName** | **string** | The name of the beneficiary. | [optional] [default to undefined]
**beneficiaryContactCountryCode** | **string** | The mobile country code of the beneficiary. | [optional] [default to undefined]
**beneficiaryContactNumber** | **string** | The mobile number of the beneficiary--digits only--without the country code. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | The bank account type of the beneficiary. The account type can be either Individual or Corporate. | [optional] [default to undefined]
**beneficiaryEmail** | **string** | This field contains an email of the beneficiary. | [optional] [default to undefined]
**autosweepPayoutAccount** | **boolean** | The boolean value for the autosweepPayoutAccount. | [optional] [default to undefined]
**defaultAutosweepPayoutAccount** | **boolean** | The boolean value for the defaultAutosweepPayoutAccount. | [optional] [default to undefined]
**remitterBeneficiaryRelationship** | **string** | The relationship of the beneficiary with the remitter. | [optional] [default to undefined]
**beneficiaryAddress** | **string** | This field contains an address of the beneficiary. | [optional] [default to undefined]
**beneficiaryCountryCode** | **string** | This field contains  the 2-letter [ISO-2 country code](/docs/currency-and-country-codes) for the mobile number of beneficiary. | [optional] [default to undefined]
**beneficiaryState** | **string** | State where the beneficiary lives. | [optional] [default to undefined]
**beneficiaryCity** | **string** | City where the beneficiary lives. | [optional] [default to undefined]
**beneficiaryPostcode** | **string** | The postal code of the beneficiary. | [optional] [default to undefined]
**beneficiaryCreatedAt** | **string** | The date and time of beneficiary creation. | [optional] [default to undefined]
**beneficiaryUpdatedAt** | **string** | The date and time of beneficiary updation. | [optional] [default to undefined]
**payoutHashId** | **string** | The unique payout hash ID. | [optional] [default to undefined]
**destinationCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the beneficiary\&#39;s address. | [optional] [default to undefined]
**destinationCurrency** | **string** | The 3-letter [ISO-4217 destination currency code](/docs/currency-and-country-codes) of the payout as per the destination country from supported corridors. | [optional] [default to undefined]
**beneficiaryBankName** | **string** | The beneficiary bank name. | [optional] [default to undefined]
**beneficiaryBankAccountType** | **string** | This field contains one of following four bank account types given at the time of beneficiary creation: • Current • Saving • Maestra • Checking | [optional] [default to undefined]
**beneficiaryAccountNumber** | **string** | This field contains an account number as a payout detail. | [optional] [default to undefined]
**beneficiaryBankCode** | **string** | The bank code of the payout. | [optional] [default to undefined]
**routingCodeType1** | **string** | The routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. | [optional] [default to undefined]
**routingCodeValue1** | **string** | The routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. | [optional] [default to undefined]
**routingCodeType2** | **string** | The routing code type 2, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. | [optional] [default to undefined]
**routingCodeValue2** | **string** | The routing code value 2, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. | [optional] [default to undefined]
**payoutMethod** | **string** | The payout method for the remittance payout. | [optional] [default to undefined]
**beneficiaryIdentificationType** | **string** | The type of identification document name for a beneficiary. | [optional] [default to undefined]
**beneficiaryIdentificationValue** | **string** | This field contains an identification document number for the beneficiary. | [optional] [default to undefined]
**payoutCreatedAt** | **string** | The date and time of payout creation. | [optional] [default to undefined]
**payoutUpdatedAt** | **string** |  | [optional] [default to undefined]
**beneficiaryCardType** | **string** | The beneficiary card type, for example, VISA, geoswift. | [optional] [default to undefined]
**beneficiaryCardToken** | **string** | The system generated token number to identify the card stored at Nium\&#39;s platform. | [optional] [default to undefined]
**beneficiaryCardNumberMask** | **string** | The 16-digit masked card number of beneficiary in the format XXXX XXXX XXXX 8351. | [optional] [default to undefined]
**beneficiaryCardIssuerName** | **string** | This field contains the beneficiary’s card issuer name. | [optional] [default to undefined]
**beneficiaryCardExpiryDate** | **string** | This field contains the beneficiary’s card expiry date. | [optional] [default to undefined]
**beneficiaryCardMetaData** | **string** | This object contains the card information. | [optional] [default to undefined]
**proxyType** | **string** | This field contains the proxy type sent in the payment request. • For SGD-PayNow: The proxy type can be MOBILE, UEN, NRIC, or VPA. • For INR-UPI: The proxy type should be VPA. • For BRL-PIX: The proxy type can be MOBILE, ID, EMAIL, or RANDOM_KEY. • For AUD-PayID: The proxy type can be MOBILE, EMAIL, ABN, or ORGANISATION_ID( only domestic payouts are allowed). • For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID. | [optional] [default to undefined]
**proxyValue** | **string** | The proxy value such as VPA, UEN, or mobile number etc. | [optional] [default to undefined]
**beneficiaryContactName** | **string** |  | [optional] [default to undefined]
**beneficiaryEntityType** | **string** |  | [optional] [default to undefined]
**beneficiaryDob** | **string** |  | [optional] [default to undefined]
**beneficiaryEstablishmentDate** | **string** |  | [optional] [default to undefined]
**accountVerification** | [**AccountVerificationInfoDTO**](AccountVerificationInfoDTO.md) |  | [optional] [default to undefined]
**beneficiaryAlias** | **string** |  | [optional] [default to undefined]
**beneficiaryName_local** | **string** | The name of beneficiary in local language | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryResponseDTO } from 'nium-client';

const instance: BeneficiaryResponseDTO = {
    beneficiaryHashId,
    beneficiaryName,
    beneficiaryContactCountryCode,
    beneficiaryContactNumber,
    beneficiaryAccountType,
    beneficiaryEmail,
    autosweepPayoutAccount,
    defaultAutosweepPayoutAccount,
    remitterBeneficiaryRelationship,
    beneficiaryAddress,
    beneficiaryCountryCode,
    beneficiaryState,
    beneficiaryCity,
    beneficiaryPostcode,
    beneficiaryCreatedAt,
    beneficiaryUpdatedAt,
    payoutHashId,
    destinationCountry,
    destinationCurrency,
    beneficiaryBankName,
    beneficiaryBankAccountType,
    beneficiaryAccountNumber,
    beneficiaryBankCode,
    routingCodeType1,
    routingCodeValue1,
    routingCodeType2,
    routingCodeValue2,
    payoutMethod,
    beneficiaryIdentificationType,
    beneficiaryIdentificationValue,
    payoutCreatedAt,
    payoutUpdatedAt,
    beneficiaryCardType,
    beneficiaryCardToken,
    beneficiaryCardNumberMask,
    beneficiaryCardIssuerName,
    beneficiaryCardExpiryDate,
    beneficiaryCardMetaData,
    proxyType,
    proxyValue,
    beneficiaryContactName,
    beneficiaryEntityType,
    beneficiaryDob,
    beneficiaryEstablishmentDate,
    accountVerification,
    beneficiaryAlias,
    beneficiaryName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
