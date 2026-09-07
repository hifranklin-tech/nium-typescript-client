# JpIndividualCustomerProofOfIdentityResidentManual

For JP resident individual customer manual KYC, NATIONAL_ID is mandatory. If issuanceCountry is JP and type is NATIONAL_ID, identificationNumber must be exactly 12 digits. Otherwise identificationNumber is alphanumeric with a maximum of 30 characters. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. If issuanceCountry&#x3D;JP and type&#x3D;NATIONAL_ID, must be exactly 12 digits. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**type** | **string** | Fixed value — national_id. | [default to undefined]

## Example

```typescript
import { JpIndividualCustomerProofOfIdentityResidentManual } from 'nium-client';

const instance: JpIndividualCustomerProofOfIdentityResidentManual = {
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
