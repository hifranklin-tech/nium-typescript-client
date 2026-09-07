# UkSgMinIndividualStakeholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | referenceId to identify the stakeholder | [optional] [default to undefined]
**firstName** | **string** | Natural person who is a stakeholder in the corporate customer | [default to undefined]
**lastName** | **string** | Last name of the stakeholder | [default to undefined]
**middleName** | **string** | Middle name of the stakeholder | [optional] [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) | Positions held by the stakeholder in the company. More than one position title can be selected | [default to undefined]
**sharePercentage** | **string** | The share percentage of the individual stakeholder in the company. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;UkSgMinTaxDetails&gt;**](UkSgMinTaxDetails.md) | Tax details of the individual stakeholder | [optional] [default to undefined]

## Example

```typescript
import { UkSgMinIndividualStakeholderDetails } from 'nium-client';

const instance: UkSgMinIndividualStakeholderDetails = {
    externalId,
    firstName,
    lastName,
    middleName,
    positions,
    sharePercentage,
    taxDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
