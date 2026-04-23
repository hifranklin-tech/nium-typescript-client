# CustomerDataExternalResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerHashId** | **string** | The unique customer identifier generated on customer creation. | [optional] [default to undefined]
**walletHashId** | **string** | The unique wallet identifier generated simultaneously with customer creation. | [optional] [default to undefined]
**kycStatus** | **string** | This field contains the overall KYC status of the customer. While initiating MyInfo, this field would usually be Pending. The possible values of kycStatus are: • Pending • Clear • Failed | [optional] [default to undefined]
**complianceStatus** | **string** | This field contains the detailed compliance status of the customer. While initiating MyInfo, this field would usually be INITIATED. List of all possible values of complianceStatus field are: • INITIATED • IN_PROGRESS • ACTION_REQUIRED • RFI_REQUESTED • COMPLETED • REJECT • ERROR • EXPIRED • CLOSED | [optional] [default to undefined]
**redirectUrl** | **string** | The URL returned for myinfo details. | [optional] [default to undefined]
**paymentIds** | [**Array&lt;CustomerPaymentIdDTO&gt;**](CustomerPaymentIdDTO.md) | This is an array which contains the paymentIds assigned to the customer. | [optional] [default to undefined]

## Example

```typescript
import { CustomerDataExternalResponseDTO } from 'nium-client';

const instance: CustomerDataExternalResponseDTO = {
    customerHashId,
    walletHashId,
    kycStatus,
    complianceStatus,
    redirectUrl,
    paymentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
