# Consent

This field retrieves the consents details with specified status for a specific PSU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consentStatus** | **string** | Authentication status of the consent. | [optional] [default to undefined]
**frequencyPerDay** | **number** | This field indicates the requested maximum frequency for an access per day. | [optional] [default to undefined]
**validUntil** | **string** | This valid date for the requested consent. The content is the local ASPSP date in ISODate and the format is 2017-10-30. | [optional] [default to undefined]
**lastActionDate** | **string** | This date is containing the date of the last action on the consent object either through the XS2A interface or the PSU/ASPSP interface having an impact on the status. | [optional] [default to undefined]
**recurringIndicator** | **boolean** | If the consent is for recurring access to the account data then the recurringIndicator value will be true or if the consent is for one access to the account data then the recurringIndicator value will be false. | [optional] [default to undefined]
**access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**scaStatus** | [**ScaStatus**](ScaStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Consent } from 'nium-client';

const instance: Consent = {
    consentStatus,
    frequencyPerDay,
    validUntil,
    lastActionDate,
    recurringIndicator,
    access,
    scaStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
