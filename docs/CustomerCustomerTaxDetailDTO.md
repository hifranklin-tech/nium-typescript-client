# CustomerCustomerTaxDetailDTO

This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryOfResidence** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the country of residence, Note: This field is mandatory for EU and UK. | [optional] [default to undefined]
**taxIdNumber** | **string** | This field accepts the tax ID number of the customer, for example, \&quot;FR123456\&quot;. Note: This field is mandatory for EU and UK. | [optional] [default to undefined]

## Example

```typescript
import { CustomerCustomerTaxDetailDTO } from 'nium-client';

const instance: CustomerCustomerTaxDetailDTO = {
    countryOfResidence,
    taxIdNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
