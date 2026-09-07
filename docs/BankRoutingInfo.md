# BankRoutingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The routing code type. | [optional] [default to undefined]
**value** | **string** | &lt;p&gt;Accepts the routing code value 1. Examples include:&lt;/p&gt; &lt;ul&gt;   &lt;li&gt;&lt;code&gt;ADCBINBB&lt;/code&gt; or &lt;code&gt;ADCBINBB123&lt;/code&gt; for SWIFT&lt;/li&gt;   &lt;li&gt;&lt;code&gt;SBIN0000058&lt;/code&gt; for IFSC&lt;/li&gt;   &lt;li&gt;&lt;code&gt;100000&lt;/code&gt; for SORT CODE&lt;/li&gt;   &lt;li&gt;&lt;code&gt;111000025&lt;/code&gt; for ACH CODE&lt;/li&gt;   &lt;li&gt;&lt;code&gt;012515&lt;/code&gt; for BSB CODE&lt;/li&gt;   &lt;li&gt;&lt;code&gt;151&lt;/code&gt; for BANK CODE&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;If you have any questions, please reach out to your Nium account manager or &lt;a href&#x3D;\&quot;mailto:support@nium. | [optional] [default to undefined]

## Example

```typescript
import { BankRoutingInfo } from 'nium-client';

const instance: BankRoutingInfo = {
    type,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
