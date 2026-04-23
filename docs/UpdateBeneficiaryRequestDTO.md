# UpdateBeneficiaryRequestDTO

Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaryContactCountryCode** | **string** | The mobile number country code of the beneficiary. | [optional] [default to undefined]
**beneficiaryContactNumber** | **string** | The mobile number of the beneficiary. | [optional] [default to undefined]
**beneficiaryEmail** | **string** | This field accepts an email of the beneficiary. | [optional] [default to undefined]
**beneficiaryName** | **string** | The name of the beneficiary. | [default to undefined]
**beneficiaryAlias** | **string** | The beneficiary alias | [optional] [default to undefined]
**beneficiaryPostcode** | **string** | The postal code of the beneficiary. | [optional] [default to undefined]
**beneficiaryAddress** | **string** | This field accepts an address of the beneficiary. | [optional] [default to undefined]
**beneficiaryCity** | **string** | The city of the beneficiary. | [optional] [default to undefined]
**beneficiaryCountryCode** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the beneficiary/bank. | [default to undefined]
**beneficiaryState** | **string** | State or province of the beneficiary\&#39;s address. | [optional] [default to undefined]
**remitterBeneficiaryRelationship** | **string** | The relationship of the beneficiary with the remitter. | [optional] [default to undefined]
**beneficiaryAccountNumber** | **string** | This field accepts an account number as a beneficiary detail. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | The bank account type of the beneficiary. The account_type can be either Individual or Company. | [optional] [default to undefined]
**beneficiaryBankAccountType** | **string** | The type of account. This field is conditional in case of WALLET payout and the possible values are: • Current • Saving • Maestra • Checking | [optional] [default to undefined]
**beneficiaryBankName** | **string** | The bank name of the beneficiary. | [optional] [default to undefined]
**beneficiaryBankCode** | **string** | The bank code of the beneficiary. | [optional] [default to undefined]
**beneficiaryIdentificationType** | **string** | The type of identification document name for a beneficiary. | [optional] [default to undefined]
**beneficiaryIdentificationValue** | **string** | This is an identification document number for the beneficiary. | [optional] [default to undefined]
**routingCodeType1** | **string** | The routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. | [optional] [default to undefined]
**routingCodeValue1** | **string** | The routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. | [optional] [default to undefined]
**routingCodeType2** | **string** | The routing code type 2, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. | [optional] [default to undefined]
**routingCodeValue2** | **string** | The routing code value 2, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. | [optional] [default to undefined]
**proxyType** | **string** | This field indicates the proxy type sent in the payment request. • For SGD-PayNow: The proxy type can be MOBILE, UEN, NRIC, or VPA. • For INR-UPI: The proxy type should be VPA. • For BRL-PIX: The proxy type can be MOBILE, ID, EMAIL, or RANDOM_KEY. • For AUD-PayID: The proxy type can be MOBILE, EMAIL, ABN, or ORGANISATION_ID (only domestic payouts are allowed). • For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID. Note: This field is mandatory when the payoutMethod type is PROXY. | [optional] [default to undefined]
**proxyValue** | **string** | This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY. The mobile number should include country code. | [optional] [default to undefined]
**destinationCountry** | **string** | The [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for the payout bank. | [optional] [default to undefined]
**destinationCurrency** | **string** | The 3-letter [ISO-4217 destination currency code](https://www.iso.org/iso-4217-currency-codes.html) of the payout as per the destination country from supported corridors. | [default to undefined]
**payoutMethod** | **string** | The payout method for the remittance payout. | [default to undefined]
**beneficiaryCardIssuerName** | **string** | This field contains the beneficiary’s card issuer name. | [optional] [default to undefined]
**beneficiaryCardExpiryDate** | **string** | This field contains the beneficiary’s card expiry date. | [optional] [default to undefined]
**encryptedBeneficiaryCardToken** | **string** | This field accepts the system generated token number to identify the card stored at Nium\&#39;s platform. Note: This field is mandatory if the client is non-PCI DSS compliant. | [optional] [default to undefined]
**authenticationCode** | **string** | This fields accepts the authenticationCode generated as part of SCA(Strong Customer Authentication). Note: Authentication code must be passed if regulatory region of the program is UK or EU and License Entity NIUM. For other region, this field is non-mandatory. | [optional] [default to undefined]
**autosweepPayoutAccount** | **boolean** |  | [optional] [default to undefined]
**beneficiaryContactName** | **string** |  | [optional] [default to undefined]
**beneficiaryEntityType** | **string** |  | [optional] [default to undefined]
**beneficiaryDob** | **string** |  | [optional] [default to undefined]
**beneficiaryEstablishmentDate** | **string** |  | [optional] [default to undefined]
**beneficiaryName_local** | **string** | The name of beneficiary in local language | [optional] [default to undefined]

## Example

```typescript
import { UpdateBeneficiaryRequestDTO } from 'nium-client';

const instance: UpdateBeneficiaryRequestDTO = {
    beneficiaryContactCountryCode,
    beneficiaryContactNumber,
    beneficiaryEmail,
    beneficiaryName,
    beneficiaryAlias,
    beneficiaryPostcode,
    beneficiaryAddress,
    beneficiaryCity,
    beneficiaryCountryCode,
    beneficiaryState,
    remitterBeneficiaryRelationship,
    beneficiaryAccountNumber,
    beneficiaryAccountType,
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
    destinationCountry,
    destinationCurrency,
    payoutMethod,
    beneficiaryCardIssuerName,
    beneficiaryCardExpiryDate,
    encryptedBeneficiaryCardToken,
    authenticationCode,
    autosweepPayoutAccount,
    beneficiaryContactName,
    beneficiaryEntityType,
    beneficiaryDob,
    beneficiaryEstablishmentDate,
    beneficiaryName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
