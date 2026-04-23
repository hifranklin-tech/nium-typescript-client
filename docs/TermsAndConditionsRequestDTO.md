# TermsAndConditionsRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept** | **boolean** | This flag specifies if the customer has accepted or rejected the Terms and Conditions. | [default to undefined]
**name** | **string** | This is the name of the TnC for which the accept flag is being sent. | [default to undefined]
**versionId** | **string** | This is the version of the TnC for which the accept flag is being sent. | [default to undefined]

## Example

```typescript
import { TermsAndConditionsRequestDTO } from 'nium-client';

const instance: TermsAndConditionsRequestDTO = {
    accept,
    name,
    versionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
