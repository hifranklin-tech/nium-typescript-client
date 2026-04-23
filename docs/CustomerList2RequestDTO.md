# CustomerList2RequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email ID of the customer. | [optional] [default to undefined]
**mobile** | **string** | The mobile number of a customer without the country code. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The business registration number of corporate customer. | [optional] [default to undefined]
**tagKey** | **string** | This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter. | [optional] [default to undefined]
**tagValue** | **string** | This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter. | [optional] [default to undefined]
**order** | **string** | The order which can be ASC or DESC. | [optional] [default to undefined]
**page** | **string** | This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page. | [optional] [default to undefined]
**size** | **string** | The number of elements per page. | [optional] [default to undefined]

## Example

```typescript
import { CustomerList2RequestDTO } from 'nium-client';

const instance: CustomerList2RequestDTO = {
    email,
    mobile,
    businessRegistrationNumber,
    tagKey,
    tagValue,
    order,
    page,
    size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
