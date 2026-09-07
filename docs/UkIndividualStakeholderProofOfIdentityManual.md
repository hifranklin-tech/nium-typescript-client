# UkIndividualStakeholderProofOfIdentityManual

One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE. SOURCE_OF_WEALTH (source_of_wealth) is accepted additionally and is required when isPEP is true. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**type** | **string** | source_of_wealth. | [default to undefined]

## Example

```typescript
import { UkIndividualStakeholderProofOfIdentityManual } from 'nium-client';

const instance: UkIndividualStakeholderProofOfIdentityManual = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
