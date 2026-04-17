## nium-client@2025.9.9

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install nium-client@2025.9.9 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://gateway.nium.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**confirmLinkedBankAccount**](docs/AccountsApi.md#confirmlinkedbankaccount) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId}/confirm | Confirm linked bank account authentication
*AccountsApi* | [**fetchLinkedBankAccount**](docs/AccountsApi.md#fetchlinkedbankaccount) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Fetch linked bank account
*AccountsApi* | [**fetchLinkedBankAccounts**](docs/AccountsApi.md#fetchlinkedbankaccounts) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts | Fetch linked bank accounts
*AccountsApi* | [**linkBankAccount**](docs/AccountsApi.md#linkbankaccount) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts | Create a linked bank account
*AccountsApi* | [**unlinkBankAccount**](docs/AccountsApi.md#unlinkbankaccount) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Delete linked bank account
*AccountsApi* | [**updateLinkedBankAccount**](docs/AccountsApi.md#updatelinkedbankaccount) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId} | Update linked bank account
*BeneficiaryApi* | [**accountVerification**](docs/BeneficiaryApi.md#accountverification) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountVerification | Account verification (Confirmation of Payee)
*BeneficiaryApi* | [**addBeneficiaryV2**](docs/BeneficiaryApi.md#addbeneficiaryv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Add Beneficiary V2
*BeneficiaryApi* | [**beneficiaryDetailsV2**](docs/BeneficiaryApi.md#beneficiarydetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Beneficiary Details V2
*BeneficiaryApi* | [**beneficiaryListV2**](docs/BeneficiaryApi.md#beneficiarylistv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries | Beneficiary List V2
*BeneficiaryApi* | [**beneficiaryValidationSchema**](docs/BeneficiaryApi.md#beneficiaryvalidationschema) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema
*BeneficiaryApi* | [**beneficiaryValidationSchemaV2**](docs/BeneficiaryApi.md#beneficiaryvalidationschemav2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas | Beneficiary Validation Schema V2
*BeneficiaryApi* | [**confirmationofPayee**](docs/BeneficiaryApi.md#confirmationofpayee) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/validate | Confirmation of Payee (Previous version)
*BeneficiaryApi* | [**deleteBeneficiary**](docs/BeneficiaryApi.md#deletebeneficiary) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Delete Beneficiary
*BeneficiaryApi* | [**updateBeneficiaryV2**](docs/BeneficiaryApi.md#updatebeneficiaryv2) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId} | Update Beneficiary V2
*CardsReferenceDataApi* | [**referenceExchangeRate**](docs/CardsReferenceDataApi.md#referenceexchangerate) | **GET** /api/v1/client/{clientHashId}/referenceRate | Reference Exchange Rate
*Class3DSApi* | [**passcodeEnrollmentStatus**](docs/Class3DSApi.md#passcodeenrollmentstatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/3ds/passcode/status | 3DS Passcode Enrollment Status
*Class3DSApi* | [**processOOBcallback**](docs/Class3DSApi.md#processoobcallback) | **POST** /api/v1/client/{clientHashId}/notifications/3ds/oob/callback | Process OOB callback
*Class3DSApi* | [**processOobCallbackV2**](docs/Class3DSApi.md#processoobcallbackv2) | **POST** /api/v2/client/{clientHashId}/3ds/oob/callback | 3DS OOB Callback V2
*Class3DSApi* | [**setPasscode**](docs/Class3DSApi.md#setpasscode) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/3ds/passcode | Add or Update passcode
*ClientPrefundAccountApi* | [**clientPrefundBalances**](docs/ClientPrefundAccountApi.md#clientprefundbalances) | **GET** /api/v1/client/{clientHashId}/balances | Client Prefund Balances
*ClientPrefundAccountApi* | [**clientPrefundRequest**](docs/ClientPrefundAccountApi.md#clientprefundrequest) | **POST** /api/v1/client/{clientHashId}/prefund | Client Prefund Request
*ClientPrefundAccountApi* | [**fetchClientPrefundRequest**](docs/ClientPrefundAccountApi.md#fetchclientprefundrequest) | **GET** /api/v1/client/{clientHashId}/prefundList | Fetch Client Prefund Request
*ClientSettingsApi* | [**clientDetails**](docs/ClientSettingsApi.md#clientdetails) | **GET** /api/v1/client/{clientHashId} | Client Details
*ClientSettingsApi* | [**feeDetails**](docs/ClientSettingsApi.md#feedetails) | **GET** /api/v2/client/{clientHashId}/fees | Fee Details v2
*ClientSettingsApi* | [**feeDetailsV3**](docs/ClientSettingsApi.md#feedetailsv3) | **GET** /api/v3/client/{clientHashId}/fees | Fee Details V3
*ClientSettingsApi* | [**payinLimits**](docs/ClientSettingsApi.md#payinlimits) | **GET** /api/v1/client/{clientHashId}/payin/limits | Get Maximum and Available Limits of Direct Debit
*ClientTransactionsApi* | [**clientTransactions**](docs/ClientTransactionsApi.md#clienttransactions) | **GET** /api/v1/client/{clientHashId}/transactions | Client Transactions
*ControlsApi* | [**getCardLimits**](docs/ControlsApi.md#getcardlimits) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Fetch Card Limits
*ControlsApi* | [**getChannelRestriction**](docs/ControlsApi.md#getchannelrestriction) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Get Channel Restriction
*ControlsApi* | [**getMCCChannelRestrictions**](docs/ControlsApi.md#getmccchannelrestrictions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Get MCC Channel Restrictions
*ControlsApi* | [**limitsForAllCardsForACustomer**](docs/ControlsApi.md#limitsforallcardsforacustomer) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/limits | Limits For All Cards For A Customer
*ControlsApi* | [**setCardLimits**](docs/ControlsApi.md#setcardlimits) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/limits | Card Limits
*ControlsApi* | [**updateChannelRestriction**](docs/ControlsApi.md#updatechannelrestriction) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels | Update Channel Restriction
*ControlsApi* | [**updateMCCChannelRestrictions**](docs/ControlsApi.md#updatemccchannelrestrictions) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/channels/mcc | Update MCC Channel Restrictions
*ConversionsApi* | [**cancelConversion**](docs/ConversionsApi.md#cancelconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/cancel | Cancel Conversion
*ConversionsApi* | [**createConversion**](docs/ConversionsApi.md#createconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions | Create Conversion
*ConversionsApi* | [**executeConversion**](docs/ConversionsApi.md#executeconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/execute | Execute Conversion
*ConversionsApi* | [**fetchConversion**](docs/ConversionsApi.md#fetchconversion) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId} | Fetch Conversion by id
*ConversionsPreviousVersionApi* | [**balanceTransferwithinWallet**](docs/ConversionsPreviousVersionApi.md#balancetransferwithinwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transfer | Balance Transfer within Wallet
*CustomerApi* | [**fetchMicroDepositDetails**](docs/CustomerApi.md#fetchmicrodepositdetails) | **GET** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId}/microDeposits | Fetch micro-deposit details
*CustomerApi* | [**simulateAccountComplianceStatus**](docs/CustomerApi.md#simulateaccountcompliancestatus) | **POST** /api/v1/simulations/onboard/{customerHashId}/transition | Simulate Customer Onboarding Status
*CustomerAccountCorporateApi* | [**exhaustiveCorporateDetailsUsingBusinessID**](docs/CustomerAccountCorporateApi.md#exhaustivecorporatedetailsusingbusinessid) | **GET** /api/v2/client/{clientHashId}/corporate/lookup | Exhaustive Corporate Details using Business ID
*CustomerAccountCorporateApi* | [**fetchCorporateConstantsUsingGET**](docs/CustomerAccountCorporateApi.md#fetchcorporateconstantsusingget) | **GET** /api/v2/client/{clientHashId}/onboarding/constants | Fetch Corporate Constants
*CustomerAccountCorporateApi* | [**fetchCorporateCustomerRFIDetails**](docs/CustomerAccountCorporateApi.md#fetchcorporatecustomerrfidetails) | **GET** /api/v1/client/{clientHashId}/corporate/rfi | Fetch Corporate Customer RFI Details
*CustomerAccountCorporateApi* | [**productOnboardCorporateCustomer**](docs/CustomerAccountCorporateApi.md#productonboardcorporatecustomer) | **POST** /api/v1/client/{clientHashId}/corporate | Onboard Corporate Customer
*CustomerAccountCorporateApi* | [**publicCorporateDetailsUsingBusinessID**](docs/CustomerAccountCorporateApi.md#publiccorporatedetailsusingbusinessid) | **GET** /api/v1/client/{clientHashId}/corporate/lookup | Fetch Public Corporate Details
*CustomerAccountCorporateApi* | [**regenerateKYCURL**](docs/CustomerAccountCorporateApi.md#regeneratekycurl) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/regenerateKYCURL | Regenerate KYC URL
*CustomerAccountCorporateApi* | [**respondtoRFIforCorporateCustomer**](docs/CustomerAccountCorporateApi.md#respondtorfiforcorporatecustomer) | **POST** /api/v1/client/{clientHashId}/corporate/rfi | Respond to RFI for Corporate Customer
*CustomerAccountCorporateApi* | [**updateCorporateCustomerUsingPOST**](docs/CustomerAccountCorporateApi.md#updatecorporatecustomerusingpost) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate | Update Corporate Customer
*CustomerAccountCorporateApi* | [**uploadDocumentforCorporateCustomer**](docs/CustomerAccountCorporateApi.md#uploaddocumentforcorporatecustomer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/corporate/documents | Upload Document for Corporate Customer
*CustomerAccountIndividualApi* | [**addCustomerUsingMyInfoSG**](docs/CustomerAccountIndividualApi.md#addcustomerusingmyinfosg) | **POST** /api/v1/client/{clientHashId}/customer-min-data | Add Customer Using MyInfo [SG]
*CustomerAccountIndividualApi* | [**addCustomerUsingeDocumentVerification**](docs/CustomerAccountIndividualApi.md#addcustomerusingedocumentverification) | **POST** /api/v3/client/{clientHashId}/customer | Add Customer Using e-Document Verification
*CustomerAccountIndividualApi* | [**customerUpdate**](docs/CustomerAccountIndividualApi.md#customerupdate) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/updateCustomer | Customer Update
*CustomerAccountIndividualApi* | [**fetchIndividualCustomerRFIDetails**](docs/CustomerAccountIndividualApi.md#fetchindividualcustomerrfidetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Fetch Individual Customer RFI Details
*CustomerAccountIndividualApi* | [**respondtoRFI**](docs/CustomerAccountIndividualApi.md#respondtorfi) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/rfi | Respond to RFI
*CustomerAccountIndividualApi* | [**unifiedAddCustomer**](docs/CustomerAccountIndividualApi.md#unifiedaddcustomer) | **POST** /api/v4/client/{clientHashId}/customer | Unified Add Customer
*CustomerAccountIndividualApi* | [**uploadDocument**](docs/CustomerAccountIndividualApi.md#uploaddocument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/uploadDocuments | Upload Document
*CustomerFeesApi* | [**chargeFee**](docs/CustomerFeesApi.md#chargefee) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fees | Charge Fee
*CustomerFundingApi* | [**addFundingInstrument**](docs/CustomerFundingApi.md#addfundinginstrument) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fundingInstruments | Add Funding Instrument
*CustomerFundingApi* | [**addFundingInstrumentV2**](docs/CustomerFundingApi.md#addfundinginstrumentv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fundingInstruments | Add funding instrument V2
*CustomerFundingApi* | [**approveOrRejectFunds**](docs/CustomerFundingApi.md#approveorrejectfunds) | **PATCH** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund/{systemReferenceNumber} | Approve or Reject Funds
*CustomerFundingApi* | [**confirmFundingInstrumentId**](docs/CustomerFundingApi.md#confirmfundinginstrumentid) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/confirmFundingInstrument | Confirm funding instrument
*CustomerFundingApi* | [**deleteFundinginstrument**](docs/CustomerFundingApi.md#deletefundinginstrument) | **DELETE** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId} | Delete Funding Instrument
*CustomerFundingApi* | [**fundWallet**](docs/CustomerFundingApi.md#fundwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund | Fund Wallet
*CustomerFundingApi* | [**fundWalletV2**](docs/CustomerFundingApi.md#fundwalletv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fund | Fund Wallet V2
*CustomerFundingApi* | [**getFundingInstrumentDetails**](docs/CustomerFundingApi.md#getfundinginstrumentdetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/fundingInstrumentDetails | Get Funding instrument details
*CustomerFundingApi* | [**getFundingInstrumentList**](docs/CustomerFundingApi.md#getfundinginstrumentlist) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/fundingInstruments | Get Funding Instrument List
*CustomerManagementApi* | [**accountStatement**](docs/CustomerManagementApi.md#accountstatement) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accounts/statement | Account Statement
*CustomerManagementApi* | [**blockUnblockCustomer**](docs/CustomerManagementApi.md#blockunblockcustomer) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/block | Block/Unblock Customer
*CustomerManagementApi* | [**customerDetailsV2**](docs/CustomerManagementApi.md#customerdetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId} | Customer Details V2
*CustomerManagementApi* | [**customerListV2**](docs/CustomerManagementApi.md#customerlistv2) | **GET** /api/v2/client/{clientHashId}/customers | Customer List V2
*CustomerManagementApi* | [**customerListV3**](docs/CustomerManagementApi.md#customerlistv3) | **GET** /api/v3/client/{clientHashId}/customers | Customer List V3
*CustomerManagementApi* | [**manageCustomerTags**](docs/CustomerManagementApi.md#managecustomertags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/tags | Manage Customer Tags
*CustomerManagementApi* | [**walletStatement**](docs/CustomerManagementApi.md#walletstatement) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/statement | Account Statement for the Specified Wallet
*CustomerTermsAndConditionsApi* | [**acceptTermsandConditions**](docs/CustomerTermsAndConditionsApi.md#accepttermsandconditions) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/termsAndConditions | Accept Terms and Conditions
*CustomerTermsAndConditionsApi* | [**termsandConditions**](docs/CustomerTermsAndConditionsApi.md#termsandconditions) | **GET** /api/v1/client/{clientHashId}/termsAndConditions | Terms and Conditions
*CustomerVirtualAccountsApi* | [**accountOwnershipCertificate**](docs/CustomerVirtualAccountsApi.md#accountownershipcertificate) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/accountOwnershipCertificate | Account Ownership Certificate
*CustomerVirtualAccountsApi* | [**assignPaymentID**](docs/CustomerVirtualAccountsApi.md#assignpaymentid) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId | Assign Payment ID
*CustomerVirtualAccountsApi* | [**manageVirtualAccountTags**](docs/CustomerVirtualAccountsApi.md#managevirtualaccounttags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId/tags | Manage Virtual Account Tags
*CustomerVirtualAccountsApi* | [**virtualAccountDetails**](docs/CustomerVirtualAccountsApi.md#virtualaccountdetails) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details
*CustomerVirtualAccountsApi* | [**virtualAccountDetailsV2**](docs/CustomerVirtualAccountsApi.md#virtualaccountdetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds | Virtual Account Details V2
*CustomerWalletBalanceApi* | [**addWallet**](docs/CustomerWalletBalanceApi.md#addwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet | Add Wallet
*CustomerWalletBalanceApi* | [**getWallet**](docs/CustomerWalletBalanceApi.md#getwallet) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet | Fetch Wallet
*CustomerWalletBalanceApi* | [**updateWallet**](docs/CustomerWalletBalanceApi.md#updatewallet) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId} | Update Wallet
*CustomerWalletBalanceApi* | [**walletBalance**](docs/CustomerWalletBalanceApi.md#walletbalance) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId} | Wallet Balance
*CustomerWalletTransactionsApi* | [**downloadTransactionReceipt**](docs/CustomerWalletTransactionsApi.md#downloadtransactionreceipt) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Download Transaction Receipt
*CustomerWalletTransactionsApi* | [**manageTransactionTags**](docs/CustomerWalletTransactionsApi.md#managetransactiontags) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/tags | Manage Transaction Tags
*CustomerWalletTransactionsApi* | [**transactionGeoTagging**](docs/CustomerWalletTransactionsApi.md#transactiongeotagging) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/location | Transaction Geo-Tagging
*CustomerWalletTransactionsApi* | [**transactions**](docs/CustomerWalletTransactionsApi.md#transactions) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions | Transactions
*CustomerWalletTransactionsApi* | [**updateBusinessTransactionFlag**](docs/CustomerWalletTransactionsApi.md#updatebusinesstransactionflag) | **PUT** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/business | Update Business Transaction Flag
*CustomerWalletTransactionsApi* | [**uploadTransactionReceipt**](docs/CustomerWalletTransactionsApi.md#uploadtransactionreceipt) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{transactionId}/receipt | Upload Transaction Receipt
*LifecycleApi* | [**activateCard**](docs/LifecycleApi.md#activatecard) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate | Activate Card V2
*LifecycleApi* | [**addCardV2**](docs/LifecycleApi.md#addcardv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card | Add Card V2
*LifecycleApi* | [**assignCard**](docs/LifecycleApi.md#assigncard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/assignCard | Assign Card
*LifecycleApi* | [**blockAndReplaceCardV2**](docs/LifecycleApi.md#blockandreplacecardv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/blockAndReplace | Block and Replace Card
*LifecycleApi* | [**cardDetailsV2**](docs/LifecycleApi.md#carddetailsv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Card Details V2
*LifecycleApi* | [**cardList**](docs/LifecycleApi.md#cardlist) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List
*LifecycleApi* | [**cardListV2**](docs/LifecycleApi.md#cardlistv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards | Card List V2
*LifecycleApi* | [**convertCard**](docs/LifecycleApi.md#convertcard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/convert | Convert Card
*LifecycleApi* | [**getCardWidget**](docs/LifecycleApi.md#getcardwidget) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/widget/showCardDetails | Get Card Details Widget
*LifecycleApi* | [**lockUnlockCardV2**](docs/LifecycleApi.md#lockunlockcardv2) | **PUT** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/lockAction | Lock/Unlock Cards
*LifecycleApi* | [**renewCard**](docs/LifecycleApi.md#renewcard) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/renewCard | Renew Card
*LifecycleApi* | [**updateCardDetailsV2**](docs/LifecycleApi.md#updatecarddetailsv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId} | Update Card Details V2
*NiumVerifyApi* | [**clientVerification**](docs/NiumVerifyApi.md#clientverification) | **POST** /api/v1/client/{clientHashId}/verifications | Verify a Bank Account
*NiumVerifyApi* | [**verificationDetailsByVerificationId**](docs/NiumVerifyApi.md#verificationdetailsbyverificationid) | **GET** /api/v1/client/{clientHashId}/verifications/{verificationId} | Fetch Verification
*NiumVerifyApi* | [**verificationDetailsHistoryByClientHashId**](docs/NiumVerifyApi.md#verificationdetailshistorybyclienthashid) | **GET** /api/v1/client/{clientHashId}/verifications | List Verifications
*OnboardingFormsCorporateApi* | [**getApplicationDetails**](docs/OnboardingFormsCorporateApi.md#getapplicationdetails) | **GET** /api/v1/client/{clientHashId}/application/{applicationId} | Get Application Details
*OnboardingFormsCorporateApi* | [**onboardingFormLink**](docs/OnboardingFormsCorporateApi.md#onboardingformlink) | **POST** /api/v1/client/{clientHashId}/applications | Create Application for Onboarding Form
*OnboardingFormsCorporateApi* | [**regenerateURL**](docs/OnboardingFormsCorporateApi.md#regenerateurl) | **GET** /api/v1/client/{clientHashId}/applications/{applicationId}/regenerateURL | Regenerate Onboarding Form URL
*OpenBankingOnboardingApi* | [**accountDetailsByCustomerConsentID**](docs/OpenBankingOnboardingApi.md#accountdetailsbycustomerconsentid) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/account | Account Details By Customer Consent ID.
*OpenBankingOnboardingApi* | [**paymentDetailsbySystemReferenceNumber**](docs/OpenBankingOnboardingApi.md#paymentdetailsbysystemreferencenumber) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/payment | Payment Details by System Reference Number
*PayinApi* | [**simulateFundingInstrumentStatusUpdate**](docs/PayinApi.md#simulatefundinginstrumentstatusupdate) | **POST** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/updateStatus | Simulate Funding Instrument Status Update (Sandbox Testing)
*PayinApi* | [**simulatereceivepayment**](docs/PayinApi.md#simulatereceivepayment) | **POST** /api/v1/inward/payment/manual | Simulate Receiving a Transaction
*PayoutApi* | [**cancelRemittance**](docs/PayoutApi.md#cancelremittance) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/cancel | Cancel Remittance
*PayoutApi* | [**customerGetCardWidget**](docs/PayoutApi.md#customergetcardwidget) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/widget/token | Get Card Widget
*PayoutApi* | [**fetchRemittanceLifeCycleStatus**](docs/PayoutApi.md#fetchremittancelifecyclestatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/audit | Fetch Remittance Life Cycle Status
*PayoutApi* | [**fetchSupportedCorridorsV3**](docs/PayoutApi.md#fetchsupportedcorridorsv3) | **GET** /api/v3/client/{clientHashId}/supportedCorridors | Fetch Supported Corridors V3
*PayoutApi* | [**poP**](docs/PayoutApi.md#pop) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance/{systemReferenceNumber}/receipt | Get Proof Of Payment
*PayoutApi* | [**purposeofTransfer**](docs/PayoutApi.md#purposeoftransfer) | **GET** /api/v1/remittance/purposeCodes | Purpose of Transfer
*PayoutApi* | [**respondtoTransactionRFI**](docs/PayoutApi.md#respondtotransactionrfi) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transactions/{authCode}/rfi/upload | Respond to Transaction RFI
*PayoutApi* | [**returnMandate**](docs/PayoutApi.md#returnmandate) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/mandate/{mandateId}/transactions/{transactionId}/return | Return Mandate
*PayoutApi* | [**transferMoney**](docs/PayoutApi.md#transfermoney) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/remittance | Transfer Money
*PayoutApi* | [**withdrawFundsFromWallet**](docs/PayoutApi.md#withdrawfundsfromwallet) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/refund | Withdraw Funds from Wallet
*PayoutsApi* | [**simulateTransactionStatus**](docs/PayoutsApi.md#simulatetransactionstatus) | **POST** /api/v1/simulations/transactions/{systemReferenceNumber}/transition | Simulate Transaction Status
*QuotesApi* | [**createQuote**](docs/QuotesApi.md#createquote) | **POST** /api/v1/client/{clientHashId}/quotes | Create Quote
*QuotesApi* | [**fetchQuote**](docs/QuotesApi.md#fetchquote) | **GET** /api/v1/client/{clientHashId}/quotes/{quoteId} | Fetch Quote by ID
*QuotesPreviousVersionApi* | [**exchangeRateLockandHold**](docs/QuotesPreviousVersionApi.md#exchangeratelockandhold) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/lockExchangeRate | Exchange Rate Lock and Hold
*QuotesPreviousVersionApi* | [**exchangeRateWithMarkup**](docs/QuotesPreviousVersionApi.md#exchangeratewithmarkup) | **GET** /api/v1/client/{clientHashId}/exchangeRate | Exchange Rate With Markup
*RatesApi* | [**aggregatedExchangeRates**](docs/RatesApi.md#aggregatedexchangerates) | **GET** /api/v1/exchangeRates/aggregate | Fetch historic aggregated exchange rates
*RatesApi* | [**exchangeRateV2**](docs/RatesApi.md#exchangeratev2) | **GET** /api/v2/exchangeRate | Exchange Rate V2
*ReferenceDataApi* | [**fetchBankDetailsusingRoutingCode**](docs/ReferenceDataApi.md#fetchbankdetailsusingroutingcode) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/country/{countryCode}/routingCodeType/{routingCodeType}/routingCodeValue/{routingCodeValue}/routingCode | Fetch Bank Details using Routing Code
*ReferenceDataApi* | [**fetchSupportedCorridors**](docs/ReferenceDataApi.md#fetchsupportedcorridors) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/supportedCorridors | Fetch Supported Corridors
*ReferenceDataApi* | [**fetchSupportedCorridorsV2**](docs/ReferenceDataApi.md#fetchsupportedcorridorsv2) | **GET** /api/v2/client/{clientHashId}/supportedCorridors | Fetch Supported Corridors V2
*ReferenceDataApi* | [**searchRoutingCodeUsingBankName**](docs/ReferenceDataApi.md#searchroutingcodeusingbankname) | **GET** /api/v2/client/{clientHashId}/payout/banks | Search Routing Code Using Bank Name
*ReferenceDataApi* | [**searchRoutingCodeUsingBranchName**](docs/ReferenceDataApi.md#searchroutingcodeusingbranchname) | **GET** /api/v2/client/{clientHashId}/payout/branches | Search Routing Code Using Branch Name
*ReferenceDataApi* | [**searchRoutingCodeusingbanknamebranchname**](docs/ReferenceDataApi.md#searchroutingcodeusingbanknamebranchname) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/partialSearch | Search Routing Code (using bank name/branch name)
*SecurityApi* | [**fetchATMPinV2**](docs/SecurityApi.md#fetchatmpinv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Fetch ATM Pin V2
*SecurityApi* | [**fetchCardDataEncryptedV2**](docs/SecurityApi.md#fetchcarddataencryptedv2) | **GET** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/retrieve | Fetch card data encrypted
*SecurityApi* | [**fetchPinStatus**](docs/SecurityApi.md#fetchpinstatus) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/status | Fetch Pin Status
*SecurityApi* | [**setResetPINV2**](docs/SecurityApi.md#setresetpinv2) | **POST** /api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin | Set/Reset PIN V2
*SecurityApi* | [**showSecurityDetailsEncrypted**](docs/SecurityApi.md#showsecuritydetailsencrypted) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/showSecurityDetails | Show Security Details Encrypted
*SecurityApi* | [**unblockCardPIN**](docs/SecurityApi.md#unblockcardpin) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/unblock | Unblock PIN
*SimulatorsApi* | [**simulateAuthorization**](docs/SimulatorsApi.md#simulateauthorization) | **POST** /api/v1/txn | Simulate Authorize Card Transaction
*SimulatorsApi* | [**simulateClearing**](docs/SimulatorsApi.md#simulateclearing) | **POST** /api/v1/settlement/run | Simulate Settlement Transaction
*WalletToWalletTransfersApi* | [**walletTransfer**](docs/WalletToWalletTransfersApi.md#wallettransfer) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/transfers | Wallet to Wallet Transfer


### Documentation For Models

 - [Access](docs/Access.md)
 - [Account](docs/Account.md)
 - [AccountReference](docs/AccountReference.md)
 - [AccountResponseDTO](docs/AccountResponseDTO.md)
 - [AccountValidationRequestDTO](docs/AccountValidationRequestDTO.md)
 - [AccountValidationResponseDTO](docs/AccountValidationResponseDTO.md)
 - [AccountVerificationInfoDTO](docs/AccountVerificationInfoDTO.md)
 - [ActivateCardRequestV2DTO](docs/ActivateCardRequestV2DTO.md)
 - [ActivateCardResponseV2DTO](docs/ActivateCardResponseV2DTO.md)
 - [AddBeneficiaryRequestDTO](docs/AddBeneficiaryRequestDTO.md)
 - [AddCardRequestV2](docs/AddCardRequestV2.md)
 - [AddCardV2ResponseDTO](docs/AddCardV2ResponseDTO.md)
 - [AddCategoryResponseDTO](docs/AddCategoryResponseDTO.md)
 - [AddCustomerRequestDTO](docs/AddCustomerRequestDTO.md)
 - [AddCustomerResponseDTO](docs/AddCustomerResponseDTO.md)
 - [AddFundingInstrumentV2ErrorResponse](docs/AddFundingInstrumentV2ErrorResponse.md)
 - [AddWalletRequestDTO](docs/AddWalletRequestDTO.md)
 - [AdditionalFeesDTO](docs/AdditionalFeesDTO.md)
 - [AddressV2](docs/AddressV2.md)
 - [AllLimitsDTO](docs/AllLimitsDTO.md)
 - [Amount](docs/Amount.md)
 - [ApiError](docs/ApiError.md)
 - [ApiError2](docs/ApiError2.md)
 - [ApiErrorDTO](docs/ApiErrorDTO.md)
 - [ApiErrorResponse](docs/ApiErrorResponse.md)
 - [ApiResponse2](docs/ApiResponse2.md)
 - [ApiResponseOfstring](docs/ApiResponseOfstring.md)
 - [ApiResponseString](docs/ApiResponseString.md)
 - [ApiResponseTransactionChannelsResponseDTO](docs/ApiResponseTransactionChannelsResponseDTO.md)
 - [ApiResponseWalletRefundResponseDTO](docs/ApiResponseWalletRefundResponseDTO.md)
 - [ApplicantDetails2](docs/ApplicantDetails2.md)
 - [ApplicantDetailsV2](docs/ApplicantDetailsV2.md)
 - [ApplicationCommonResponse](docs/ApplicationCommonResponse.md)
 - [ApproveOrRejectFundsRequestDTO](docs/ApproveOrRejectFundsRequestDTO.md)
 - [AssignCardDTO](docs/AssignCardDTO.md)
 - [AuthenticationType](docs/AuthenticationType.md)
 - [AutoSweepBankDetails](docs/AutoSweepBankDetails.md)
 - [Balance](docs/Balance.md)
 - [Bank](docs/Bank.md)
 - [BankAccountActionState](docs/BankAccountActionState.md)
 - [BankAccountConfirmationRequest](docs/BankAccountConfirmationRequest.md)
 - [BankAccountLinkRequest](docs/BankAccountLinkRequest.md)
 - [BankAccountResponse](docs/BankAccountResponse.md)
 - [BankAccountUpdateRequest](docs/BankAccountUpdateRequest.md)
 - [BankRoutingInfo](docs/BankRoutingInfo.md)
 - [BeneficialOwnerDetailsDTO](docs/BeneficialOwnerDetailsDTO.md)
 - [Beneficiary](docs/Beneficiary.md)
 - [BeneficiaryAccountDetailsDTO](docs/BeneficiaryAccountDetailsDTO.md)
 - [BeneficiaryAddress](docs/BeneficiaryAddress.md)
 - [BeneficiaryContactNumber](docs/BeneficiaryContactNumber.md)
 - [BeneficiaryDetailsDTO](docs/BeneficiaryDetailsDTO.md)
 - [BeneficiaryDetailsV3DTO](docs/BeneficiaryDetailsV3DTO.md)
 - [BeneficiaryEmail](docs/BeneficiaryEmail.md)
 - [BeneficiaryIdentification](docs/BeneficiaryIdentification.md)
 - [BeneficiaryPaymentAccount](docs/BeneficiaryPaymentAccount.md)
 - [BeneficiaryPayoutAccountAddress](docs/BeneficiaryPayoutAccountAddress.md)
 - [BeneficiaryPayoutAccountOwner](docs/BeneficiaryPayoutAccountOwner.md)
 - [BeneficiaryResponseDTO](docs/BeneficiaryResponseDTO.md)
 - [BeneficiaryV3DTO](docs/BeneficiaryV3DTO.md)
 - [BeneficiaryValidationRequestDTO](docs/BeneficiaryValidationRequestDTO.md)
 - [BeneficiaryValidationResponseDTO](docs/BeneficiaryValidationResponseDTO.md)
 - [BlockAndReplaceCardRequestDTO](docs/BlockAndReplaceCardRequestDTO.md)
 - [BlockAndReplaceCardResponseDTO](docs/BlockAndReplaceCardResponseDTO.md)
 - [BlockAndReplaceStatus](docs/BlockAndReplaceStatus.md)
 - [BlockCustomerRequestDTO](docs/BlockCustomerRequestDTO.md)
 - [BranchNameResponseDTO](docs/BranchNameResponseDTO.md)
 - [BusinessDetailsResponseV2DTO](docs/BusinessDetailsResponseV2DTO.md)
 - [BusinessPartner2](docs/BusinessPartner2.md)
 - [BusinessPartnerAddresses](docs/BusinessPartnerAddresses.md)
 - [BusinessPartnerLegalDetails](docs/BusinessPartnerLegalDetails.md)
 - [BusinessPartnerV2](docs/BusinessPartnerV2.md)
 - [ButtonDTO](docs/ButtonDTO.md)
 - [CSSAttributeDTO](docs/CSSAttributeDTO.md)
 - [CancelConversionError](docs/CancelConversionError.md)
 - [CancelConversionErrorResponse](docs/CancelConversionErrorResponse.md)
 - [CancellationReason](docs/CancellationReason.md)
 - [CancelledRemittanceResponseDTO](docs/CancelledRemittanceResponseDTO.md)
 - [CardAssignResponseDTO](docs/CardAssignResponseDTO.md)
 - [CardDetails](docs/CardDetails.md)
 - [CardInfo](docs/CardInfo.md)
 - [CardMetaDataResponseDTO](docs/CardMetaDataResponseDTO.md)
 - [CardTokensDTO](docs/CardTokensDTO.md)
 - [CardWidgetTokenRequestDTO](docs/CardWidgetTokenRequestDTO.md)
 - [CardWidgetTokenResponse](docs/CardWidgetTokenResponse.md)
 - [CardsAddress](docs/CardsAddress.md)
 - [CategoryData](docs/CategoryData.md)
 - [ChannelActionRequestDTO](docs/ChannelActionRequestDTO.md)
 - [CheckDTO](docs/CheckDTO.md)
 - [ChinaPayoutDetailsDTO](docs/ChinaPayoutDetailsDTO.md)
 - [ClientCurrencyResponseDTO](docs/ClientCurrencyResponseDTO.md)
 - [ClientCustomTagDTO](docs/ClientCustomTagDTO.md)
 - [ClientDetailResponseDTO2](docs/ClientDetailResponseDTO2.md)
 - [ClientFeeDetailsResponseDTO](docs/ClientFeeDetailsResponseDTO.md)
 - [ClientFeeDetailsResponseV3DTO](docs/ClientFeeDetailsResponseV3DTO.md)
 - [ClientPrefundListResponse](docs/ClientPrefundListResponse.md)
 - [ClientPrefundListResponseDTO](docs/ClientPrefundListResponseDTO.md)
 - [ClientPrefundResponseDTO](docs/ClientPrefundResponseDTO.md)
 - [ClientProductFeeDetailsResponseV3DTO](docs/ClientProductFeeDetailsResponseV3DTO.md)
 - [ClientTransactionsResponseDTO](docs/ClientTransactionsResponseDTO.md)
 - [CommonResponse](docs/CommonResponse.md)
 - [CompletedSections](docs/CompletedSections.md)
 - [ComplianceDocumentDTO](docs/ComplianceDocumentDTO.md)
 - [ComplianceDocumentResponseDTO](docs/ComplianceDocumentResponseDTO.md)
 - [ComplianceIdentificationDocDTO](docs/ComplianceIdentificationDocDTO.md)
 - [Condition](docs/Condition.md)
 - [ConfirmBankAccountError](docs/ConfirmBankAccountError.md)
 - [ConfirmBankAccountErrorResponse](docs/ConfirmBankAccountErrorResponse.md)
 - [ConfirmFundingInstrumentRequestDTO](docs/ConfirmFundingInstrumentRequestDTO.md)
 - [Consent](docs/Consent.md)
 - [ConsentDetailsResponse](docs/ConsentDetailsResponse.md)
 - [ContactDetailsResponseDTO](docs/ContactDetailsResponseDTO.md)
 - [ContainerDTO](docs/ContainerDTO.md)
 - [ConversionCancelRequest](docs/ConversionCancelRequest.md)
 - [ConversionCancelResponse](docs/ConversionCancelResponse.md)
 - [ConversionCreationRequest](docs/ConversionCreationRequest.md)
 - [ConversionCreationResponse](docs/ConversionCreationResponse.md)
 - [ConversionExecutionResponse](docs/ConversionExecutionResponse.md)
 - [ConversionSchedule](docs/ConversionSchedule.md)
 - [ConversionStatus](docs/ConversionStatus.md)
 - [ConvertCardRequestDTO](docs/ConvertCardRequestDTO.md)
 - [ConvertCardResponseDTO](docs/ConvertCardResponseDTO.md)
 - [Corporate](docs/Corporate.md)
 - [CorporateAddress](docs/CorporateAddress.md)
 - [CorporateAddresses](docs/CorporateAddresses.md)
 - [CorporateBusinessDetails](docs/CorporateBusinessDetails.md)
 - [CorporateBusinessDetailsDocumentDetailDTO](docs/CorporateBusinessDetailsDocumentDetailDTO.md)
 - [CorporateBusinessPartner](docs/CorporateBusinessPartner.md)
 - [CorporateBusinessPartnerLegalDetails](docs/CorporateBusinessPartnerLegalDetails.md)
 - [CorporateComplianceDocumentRequestDTO](docs/CorporateComplianceDocumentRequestDTO.md)
 - [CorporateComplianceDocumentResponseDTO](docs/CorporateComplianceDocumentResponseDTO.md)
 - [CorporateContactDetails](docs/CorporateContactDetails.md)
 - [CorporateCustomerRequest](docs/CorporateCustomerRequest.md)
 - [CorporateDTO](docs/CorporateDTO.md)
 - [CorporateDetailResponseDTO](docs/CorporateDetailResponseDTO.md)
 - [CorporateDocumentDetail](docs/CorporateDocumentDetail.md)
 - [CorporateDocumentDetails2DTO](docs/CorporateDocumentDetails2DTO.md)
 - [CorporateDocumentUploadApplicantDetailsDTO](docs/CorporateDocumentUploadApplicantDetailsDTO.md)
 - [CorporateDocumentUploadBusinessDetailsDTO](docs/CorporateDocumentUploadBusinessDetailsDTO.md)
 - [CorporateDocumentUploadStakeholderDetailsDTO](docs/CorporateDocumentUploadStakeholderDetailsDTO.md)
 - [CorporateDocumentUploadStakeholdersDTO](docs/CorporateDocumentUploadStakeholdersDTO.md)
 - [CorporateLegalDetails](docs/CorporateLegalDetails.md)
 - [CorporateProfessionalDetails](docs/CorporateProfessionalDetails.md)
 - [CorporateRegisteredAddress](docs/CorporateRegisteredAddress.md)
 - [CorporateRiskAssessmentInfo](docs/CorporateRiskAssessmentInfo.md)
 - [CorporateStakeholderDetails](docs/CorporateStakeholderDetails.md)
 - [CorporateStakeholders](docs/CorporateStakeholders.md)
 - [CorridorDataDTO](docs/CorridorDataDTO.md)
 - [CreateConversionError](docs/CreateConversionError.md)
 - [CreateConversionErrorResponse](docs/CreateConversionErrorResponse.md)
 - [CreateQuoteError](docs/CreateQuoteError.md)
 - [CreateQuoteErrorResponse](docs/CreateQuoteErrorResponse.md)
 - [CurrencyDetail](docs/CurrencyDetail.md)
 - [CustomFeeRequestDTO](docs/CustomFeeRequestDTO.md)
 - [CustomFeeResponseDTO](docs/CustomFeeResponseDTO.md)
 - [CustomerAccountDetail](docs/CustomerAccountDetail.md)
 - [CustomerApiError](docs/CustomerApiError.md)
 - [CustomerAssociationDetails](docs/CustomerAssociationDetails.md)
 - [CustomerBusinessDetailsResponseDTO](docs/CustomerBusinessDetailsResponseDTO.md)
 - [CustomerBusinessPartnerDetailsResponseDTO](docs/CustomerBusinessPartnerDetailsResponseDTO.md)
 - [CustomerCardWidgetTokenRequestDTO](docs/CustomerCardWidgetTokenRequestDTO.md)
 - [CustomerCardWidgetTokenResponse](docs/CustomerCardWidgetTokenResponse.md)
 - [CustomerClientTagRequestDTO](docs/CustomerClientTagRequestDTO.md)
 - [CustomerClientTagResponseDTO](docs/CustomerClientTagResponseDTO.md)
 - [CustomerClientTagsRequestDTO](docs/CustomerClientTagsRequestDTO.md)
 - [CustomerClientTagsResponseDTO](docs/CustomerClientTagsResponseDTO.md)
 - [CustomerCorporateAddressDTO](docs/CustomerCorporateAddressDTO.md)
 - [CustomerCorporateCustomerResponseDTO](docs/CustomerCorporateCustomerResponseDTO.md)
 - [CustomerCorporateDocumentDetailsDTO](docs/CustomerCorporateDocumentDetailsDTO.md)
 - [CustomerCustomerDetailResponse](docs/CustomerCustomerDetailResponse.md)
 - [CustomerCustomerTagDTO](docs/CustomerCustomerTagDTO.md)
 - [CustomerCustomerTaxDetailDTO](docs/CustomerCustomerTaxDetailDTO.md)
 - [CustomerDataExternalRequestDTO](docs/CustomerDataExternalRequestDTO.md)
 - [CustomerDataExternalResponseDTO](docs/CustomerDataExternalResponseDTO.md)
 - [CustomerDetailDTO](docs/CustomerDetailDTO.md)
 - [CustomerDetailsResponseV2DTO](docs/CustomerDetailsResponseV2DTO.md)
 - [CustomerDocumentDetail](docs/CustomerDocumentDetail.md)
 - [CustomerLinkAccountRequest](docs/CustomerLinkAccountRequest.md)
 - [CustomerLinkAccountRequestV2](docs/CustomerLinkAccountRequestV2.md)
 - [CustomerPagination](docs/CustomerPagination.md)
 - [CustomerPartnershipDetails](docs/CustomerPartnershipDetails.md)
 - [CustomerPaymentIdDTO](docs/CustomerPaymentIdDTO.md)
 - [CustomerProfessionalDetails](docs/CustomerProfessionalDetails.md)
 - [CustomerRegulatoryDetails](docs/CustomerRegulatoryDetails.md)
 - [CustomerRfiAttributeResponse](docs/CustomerRfiAttributeResponse.md)
 - [CustomerRfiDetailsResponse](docs/CustomerRfiDetailsResponse.md)
 - [CustomerRfiResponseRequest](docs/CustomerRfiResponseRequest.md)
 - [CustomerStakeholderDetailsResponseDTO](docs/CustomerStakeholderDetailsResponseDTO.md)
 - [CustomerSupportedCorridorsResponse](docs/CustomerSupportedCorridorsResponse.md)
 - [CustomerTaxDetails](docs/CustomerTaxDetails.md)
 - [Demographics](docs/Demographics.md)
 - [DerivedAccountDetails](docs/DerivedAccountDetails.md)
 - [Descriptive404Error](docs/Descriptive404Error.md)
 - [DeviceDetails](docs/DeviceDetails.md)
 - [DeviceDetailsV2DTO](docs/DeviceDetailsV2DTO.md)
 - [DirectDebitAvailableLimitsDTO](docs/DirectDebitAvailableLimitsDTO.md)
 - [DirectDebitClientCurrencyLimitsDTO](docs/DirectDebitClientCurrencyLimitsDTO.md)
 - [DirectDebitMaximumLimitsDTO](docs/DirectDebitMaximumLimitsDTO.md)
 - [Document1](docs/Document1.md)
 - [DocumentDetails](docs/DocumentDetails.md)
 - [EVerifyCustomerRegistrationRequestDTO](docs/EVerifyCustomerRegistrationRequestDTO.md)
 - [EitherSourceOrDestinationAmount](docs/EitherSourceOrDestinationAmount.md)
 - [EitherSourceOrDestinationAmountOrNoAmount](docs/EitherSourceOrDestinationAmountOrNoAmount.md)
 - [EmbossingDetails](docs/EmbossingDetails.md)
 - [ErrorCodeMapping](docs/ErrorCodeMapping.md)
 - [ErrorCodes401](docs/ErrorCodes401.md)
 - [ErrorCodes403](docs/ErrorCodes403.md)
 - [ErrorCodes500](docs/ErrorCodes500.md)
 - [ErrorDetail401](docs/ErrorDetail401.md)
 - [ErrorDetail403](docs/ErrorDetail403.md)
 - [ErrorDetail500](docs/ErrorDetail500.md)
 - [ErrorResponse401](docs/ErrorResponse401.md)
 - [ErrorResponse403](docs/ErrorResponse403.md)
 - [ErrorResponse500](docs/ErrorResponse500.md)
 - [Errors](docs/Errors.md)
 - [ExchangeRateGetResponse](docs/ExchangeRateGetResponse.md)
 - [ExchangeRateV2ResponseDto](docs/ExchangeRateV2ResponseDto.md)
 - [ExchangeRatesGetResponse](docs/ExchangeRatesGetResponse.md)
 - [ExecuteConversionError](docs/ExecuteConversionError.md)
 - [ExecuteConversionErrorResponse](docs/ExecuteConversionErrorResponse.md)
 - [ExecutionType](docs/ExecutionType.md)
 - [ExpectedAccountCredit](docs/ExpectedAccountCredit.md)
 - [ExpectedAccountCreditDTO](docs/ExpectedAccountCreditDTO.md)
 - [ExpectedAccountDebit](docs/ExpectedAccountDebit.md)
 - [ExpectedAccountDebitDTO](docs/ExpectedAccountDebitDTO.md)
 - [ExpectedAccountUsage](docs/ExpectedAccountUsage.md)
 - [ExpectedAccountUsageDTO](docs/ExpectedAccountUsageDTO.md)
 - [ExternalAccountServiceCursorPagination](docs/ExternalAccountServiceCursorPagination.md)
 - [ExternalAccountServiceRoutingInfo](docs/ExternalAccountServiceRoutingInfo.md)
 - [ExternalAccountServiceStandard401Error](docs/ExternalAccountServiceStandard401Error.md)
 - [ExternalAccountServiceStandard403Error](docs/ExternalAccountServiceStandard403Error.md)
 - [ExternalAccountServiceStandard404Error](docs/ExternalAccountServiceStandard404Error.md)
 - [ExternalAccountServiceStandard500Error](docs/ExternalAccountServiceStandard500Error.md)
 - [FXError](docs/FXError.md)
 - [FXStandard401Error](docs/FXStandard401Error.md)
 - [FXStandard403Error](docs/FXStandard403Error.md)
 - [FXStandard404Error](docs/FXStandard404Error.md)
 - [FXStandard500Error](docs/FXStandard500Error.md)
 - [FeePricingResponseV3DTO](docs/FeePricingResponseV3DTO.md)
 - [FeeResponseDTO](docs/FeeResponseDTO.md)
 - [FeeRuleV3DTO](docs/FeeRuleV3DTO.md)
 - [FetchConversionError](docs/FetchConversionError.md)
 - [FetchConversionErrorResponse](docs/FetchConversionErrorResponse.md)
 - [FetchLinkedBankAccountsError](docs/FetchLinkedBankAccountsError.md)
 - [FetchLinkedBankAccountsErrorResponse](docs/FetchLinkedBankAccountsErrorResponse.md)
 - [FetchPinResponseDTOV2](docs/FetchPinResponseDTOV2.md)
 - [FetchPinStatusResponseDTO](docs/FetchPinStatusResponseDTO.md)
 - [FetchQuoteError](docs/FetchQuoteError.md)
 - [FetchQuoteErrorResponse](docs/FetchQuoteErrorResponse.md)
 - [FundTransferRequestDTO](docs/FundTransferRequestDTO.md)
 - [FundTransferResponse](docs/FundTransferResponse.md)
 - [FundWalletV2RequestDTO](docs/FundWalletV2RequestDTO.md)
 - [FundingInstrumentStatusUpdateRequestDTO](docs/FundingInstrumentStatusUpdateRequestDTO.md)
 - [FxHoldLockResponseContent](docs/FxHoldLockResponseContent.md)
 - [GPIResponseDTO](docs/GPIResponseDTO.md)
 - [GenerateLinkRequest](docs/GenerateLinkRequest.md)
 - [GenerateLinkResponse](docs/GenerateLinkResponse.md)
 - [Goods](docs/Goods.md)
 - [HistoricalRateErrorCodes400](docs/HistoricalRateErrorCodes400.md)
 - [HistoricalRateErrorDetail400](docs/HistoricalRateErrorDetail400.md)
 - [HistoricalRateErrorResponse400](docs/HistoricalRateErrorResponse400.md)
 - [Identification](docs/Identification.md)
 - [IdentificationDocumentDTO](docs/IdentificationDocumentDTO.md)
 - [IndividualCustomerRequest](docs/IndividualCustomerRequest.md)
 - [IndividualCustomerResponseDTO](docs/IndividualCustomerResponseDTO.md)
 - [IndividualDTO](docs/IndividualDTO.md)
 - [InlineObject](docs/InlineObject.md)
 - [InlineObject1](docs/InlineObject1.md)
 - [InlineObject2](docs/InlineObject2.md)
 - [InlineObject3](docs/InlineObject3.md)
 - [InlineObjectErrorsInner](docs/InlineObjectErrorsInner.md)
 - [InputFieldDTO](docs/InputFieldDTO.md)
 - [InvoiceDetails](docs/InvoiceDetails.md)
 - [InwardPaymentManualRequestDTO](docs/InwardPaymentManualRequestDTO.md)
 - [ItemDetails](docs/ItemDetails.md)
 - [KycUrls](docs/KycUrls.md)
 - [Labels](docs/Labels.md)
 - [LegalDetailsV2](docs/LegalDetailsV2.md)
 - [LimitsDTO](docs/LimitsDTO.md)
 - [LimitsResponseDTO](docs/LimitsResponseDTO.md)
 - [LinkAccountResponse](docs/LinkAccountResponse.md)
 - [LinkAccountResponseV2](docs/LinkAccountResponseV2.md)
 - [LinkBankAccountError](docs/LinkBankAccountError.md)
 - [LinkBankAccountErrorResponse](docs/LinkBankAccountErrorResponse.md)
 - [LocalIsoRequest](docs/LocalIsoRequest.md)
 - [LocalIsoResponse](docs/LocalIsoResponse.md)
 - [LockPeriod](docs/LockPeriod.md)
 - [LockStatusUpdateRequestDTO](docs/LockStatusUpdateRequestDTO.md)
 - [LockStatusUpdateResponseDTO](docs/LockStatusUpdateResponseDTO.md)
 - [Logistics](docs/Logistics.md)
 - [MCCRestrictionDTO](docs/MCCRestrictionDTO.md)
 - [MerchantCategoryResponseDTO2](docs/MerchantCategoryResponseDTO2.md)
 - [MicroDepositDetails](docs/MicroDepositDetails.md)
 - [ModelError](docs/ModelError.md)
 - [ModelFile](docs/ModelFile.md)
 - [N1PaymentAccountDTO](docs/N1PaymentAccountDTO.md)
 - [NatureOfBusiness](docs/NatureOfBusiness.md)
 - [NatureOfBusinessDTO](docs/NatureOfBusinessDTO.md)
 - [NewErrorResponse](docs/NewErrorResponse.md)
 - [OOBCallbackRequestDTO](docs/OOBCallbackRequestDTO.md)
 - [OOBCallbackResponseDTO](docs/OOBCallbackResponseDTO.md)
 - [OnboardCorporateCustomerRequestDTO](docs/OnboardCorporateCustomerRequestDTO.md)
 - [OnboardingApplicationProgressResponse](docs/OnboardingApplicationProgressResponse.md)
 - [OnboardingFormServiceApiErrorResponse](docs/OnboardingFormServiceApiErrorResponse.md)
 - [OnboardingFormServiceStandard404Error](docs/OnboardingFormServiceStandard404Error.md)
 - [OnboardingFormServiceTypedErrorErrorCodes](docs/OnboardingFormServiceTypedErrorErrorCodes.md)
 - [OobCallbackRequestDTO](docs/OobCallbackRequestDTO.md)
 - [OpenBankingPaymentResponseDTO](docs/OpenBankingPaymentResponseDTO.md)
 - [Order](docs/Order.md)
 - [OrderDetailsDTO](docs/OrderDetailsDTO.md)
 - [PageResponseCardDetails](docs/PageResponseCardDetails.md)
 - [PageResponseVerifyResponse](docs/PageResponseVerifyResponse.md)
 - [PaginatedBankAccountResponse](docs/PaginatedBankAccountResponse.md)
 - [PaginatedCustomerDetailsResponseV2DTO](docs/PaginatedCustomerDetailsResponseV2DTO.md)
 - [PaginatedResponseDTOCustomerDetailsResponseV2DTO](docs/PaginatedResponseDTOCustomerDetailsResponseV2DTO.md)
 - [Pagination](docs/Pagination.md)
 - [PartialSearchBankNameResponseDTO](docs/PartialSearchBankNameResponseDTO.md)
 - [PartialSearchBranchNameResponseDTO](docs/PartialSearchBranchNameResponseDTO.md)
 - [PartialSearchDTO](docs/PartialSearchDTO.md)
 - [PasscodeRequestDTO](docs/PasscodeRequestDTO.md)
 - [PasscodeResponseDTO](docs/PasscodeResponseDTO.md)
 - [PasscodeStatusDTO](docs/PasscodeStatusDTO.md)
 - [Payer](docs/Payer.md)
 - [PayinAccountStatusResponse](docs/PayinAccountStatusResponse.md)
 - [PayinApiError](docs/PayinApiError.md)
 - [PayinApiResponse2](docs/PayinApiResponse2.md)
 - [PayinPagination](docs/PayinPagination.md)
 - [PayinStandard401Error](docs/PayinStandard401Error.md)
 - [PayinStandard403Error](docs/PayinStandard403Error.md)
 - [PayinStandard500Error](docs/PayinStandard500Error.md)
 - [Payment](docs/Payment.md)
 - [PaymentAccountOwnerIdentification](docs/PaymentAccountOwnerIdentification.md)
 - [PaymentIdCientTagsResponseDTO](docs/PaymentIdCientTagsResponseDTO.md)
 - [PaymentIdClientTagResponseDTO](docs/PaymentIdClientTagResponseDTO.md)
 - [PaymentIdRequestDTO2](docs/PaymentIdRequestDTO2.md)
 - [PaymentIdResponseDTO2](docs/PaymentIdResponseDTO2.md)
 - [PaymentIdTagRequestDTO](docs/PaymentIdTagRequestDTO.md)
 - [PaymentIdsDTO](docs/PaymentIdsDTO.md)
 - [Payout](docs/Payout.md)
 - [PinUpdateRequestDTOV2](docs/PinUpdateRequestDTOV2.md)
 - [PinUpdateResponseDTO](docs/PinUpdateResponseDTO.md)
 - [Preferences](docs/Preferences.md)
 - [PrefundRequestDTO](docs/PrefundRequestDTO.md)
 - [PriceV3](docs/PriceV3.md)
 - [ProductAccountWhiteList](docs/ProductAccountWhiteList.md)
 - [ProductAddress](docs/ProductAddress.md)
 - [ProductAddresses](docs/ProductAddresses.md)
 - [ProductApiError](docs/ProductApiError.md)
 - [ProductApplicantDetails](docs/ProductApplicantDetails.md)
 - [ProductApplicantKycUrl](docs/ProductApplicantKycUrl.md)
 - [ProductAssociationDetails](docs/ProductAssociationDetails.md)
 - [ProductBankAccountDetails](docs/ProductBankAccountDetails.md)
 - [ProductBusinessAddress](docs/ProductBusinessAddress.md)
 - [ProductBusinessDetails](docs/ProductBusinessDetails.md)
 - [ProductBusinessDetails2](docs/ProductBusinessDetails2.md)
 - [ProductBusinessPartner](docs/ProductBusinessPartner.md)
 - [ProductComplianceRFITemplateMetadataResponseDTO](docs/ProductComplianceRFITemplateMetadataResponseDTO.md)
 - [ProductContactDetails](docs/ProductContactDetails.md)
 - [ProductCorporateCustomerResponseDTO](docs/ProductCorporateCustomerResponseDTO.md)
 - [ProductCorporateEnrichedDetailResponseDTO](docs/ProductCorporateEnrichedDetailResponseDTO.md)
 - [ProductCustomerTagDTO](docs/ProductCustomerTagDTO.md)
 - [ProductDocument](docs/ProductDocument.md)
 - [ProductDocumentDetail](docs/ProductDocumentDetail.md)
 - [ProductFeeDetailsResponseV3DTO](docs/ProductFeeDetailsResponseV3DTO.md)
 - [ProductLegalDetails](docs/ProductLegalDetails.md)
 - [ProductOnboardingDetails](docs/ProductOnboardingDetails.md)
 - [ProductPartnershipDetails](docs/ProductPartnershipDetails.md)
 - [ProductProductDetails](docs/ProductProductDetails.md)
 - [ProductProfessionalDetails](docs/ProductProfessionalDetails.md)
 - [ProductRegisteredAddress](docs/ProductRegisteredAddress.md)
 - [ProductRegulatoryDetails](docs/ProductRegulatoryDetails.md)
 - [ProductRequiredFields](docs/ProductRequiredFields.md)
 - [ProductResult](docs/ProductResult.md)
 - [ProductRevenueInfo](docs/ProductRevenueInfo.md)
 - [ProductRfiResponseRequest](docs/ProductRfiResponseRequest.md)
 - [ProductRfiTemplate](docs/ProductRfiTemplate.md)
 - [ProductRiskAssessmentInfo](docs/ProductRiskAssessmentInfo.md)
 - [ProductStakeholderDetails](docs/ProductStakeholderDetails.md)
 - [ProductStakeholderKycUrls](docs/ProductStakeholderKycUrls.md)
 - [ProductStakeholders](docs/ProductStakeholders.md)
 - [ProductTaxDetails](docs/ProductTaxDetails.md)
 - [ProductTemplate](docs/ProductTemplate.md)
 - [ProfessionalDetailsResponseDTO](docs/ProfessionalDetailsResponseDTO.md)
 - [Proxy](docs/Proxy.md)
 - [PublicCorporateBusinessDetails](docs/PublicCorporateBusinessDetails.md)
 - [PurposeCodeResponseDTO](docs/PurposeCodeResponseDTO.md)
 - [QuoteCreationRequest](docs/QuoteCreationRequest.md)
 - [QuoteCreationResponse](docs/QuoteCreationResponse.md)
 - [QuoteType](docs/QuoteType.md)
 - [Recipient](docs/Recipient.md)
 - [ReferenceRateResponseDto](docs/ReferenceRateResponseDto.md)
 - [RegenerateKYCURL400Response](docs/RegenerateKYCURL400Response.md)
 - [RegenerateUrlResponse](docs/RegenerateUrlResponse.md)
 - [RemittanceEventsResponseDTO2](docs/RemittanceEventsResponseDTO2.md)
 - [RemittanceResponseDTO](docs/RemittanceResponseDTO.md)
 - [RemittanceTransactionsRequestDTO](docs/RemittanceTransactionsRequestDTO.md)
 - [RemittanceTransactionsRequestDTOBeneficiary](docs/RemittanceTransactionsRequestDTOBeneficiary.md)
 - [RemitterAccountWhiteList](docs/RemitterAccountWhiteList.md)
 - [RemitterRequestDTO](docs/RemitterRequestDTO.md)
 - [RenewCardRequest](docs/RenewCardRequest.md)
 - [Resource](docs/Resource.md)
 - [RespondRfiRequestDTO](docs/RespondRfiRequestDTO.md)
 - [RespondRfiResponseDTO](docs/RespondRfiResponseDTO.md)
 - [RetrieveCardDetailsResponseDTO](docs/RetrieveCardDetailsResponseDTO.md)
 - [RfiIdentificationDoc](docs/RfiIdentificationDoc.md)
 - [RiskAssessmentInfoResponseDTO](docs/RiskAssessmentInfoResponseDTO.md)
 - [RiskAssessmentInfoV2](docs/RiskAssessmentInfoV2.md)
 - [Routing](docs/Routing.md)
 - [RoutingCode](docs/RoutingCode.md)
 - [RoutingInfo](docs/RoutingInfo.md)
 - [ScaStatus](docs/ScaStatus.md)
 - [Seller](docs/Seller.md)
 - [SettlementRequestDTO](docs/SettlementRequestDTO.md)
 - [ShowSecurityDetailsResponseDTO](docs/ShowSecurityDetailsResponseDTO.md)
 - [SimulateAccountStatusRequestDTO](docs/SimulateAccountStatusRequestDTO.md)
 - [SimulateAccountStatusRequestDTORequestInfoFor](docs/SimulateAccountStatusRequestDTORequestInfoFor.md)
 - [SimulateStatusResponseDTO](docs/SimulateStatusResponseDTO.md)
 - [SimulateTransactionStatusRequestDTO](docs/SimulateTransactionStatusRequestDTO.md)
 - [SimulateUnprocessableEntityErrorDTO](docs/SimulateUnprocessableEntityErrorDTO.md)
 - [SimulateUnprocessableEntityErrorDTOErrorsInner](docs/SimulateUnprocessableEntityErrorDTOErrorsInner.md)
 - [StakeholderContactDetailsResponseDTO](docs/StakeholderContactDetailsResponseDTO.md)
 - [StakeholderDetails2](docs/StakeholderDetails2.md)
 - [StakeholderDetailsV2](docs/StakeholderDetailsV2.md)
 - [StakeholderV2](docs/StakeholderV2.md)
 - [Stakeholders2](docs/Stakeholders2.md)
 - [Standard401Error](docs/Standard401Error.md)
 - [Standard403Error](docs/Standard403Error.md)
 - [Standard404Error](docs/Standard404Error.md)
 - [Standard500Error](docs/Standard500Error.md)
 - [SupportedCorridorsResponseDTO](docs/SupportedCorridorsResponseDTO.md)
 - [SupportedCorridorsResponseDTO2](docs/SupportedCorridorsResponseDTO2.md)
 - [TaxDetailsResponseDTO](docs/TaxDetailsResponseDTO.md)
 - [TermsAndConditionsAcceptResponseDTO](docs/TermsAndConditionsAcceptResponseDTO.md)
 - [TermsAndConditionsRequestDTO](docs/TermsAndConditionsRequestDTO.md)
 - [TermsAndConditionsResponseDTO](docs/TermsAndConditionsResponseDTO.md)
 - [TierOn](docs/TierOn.md)
 - [TierPrice](docs/TierPrice.md)
 - [TierRange](docs/TierRange.md)
 - [Trade](docs/Trade.md)
 - [Transaction](docs/Transaction.md)
 - [TransactionClientTagResponseDTO](docs/TransactionClientTagResponseDTO.md)
 - [TransactionClientTagsRequestDTO](docs/TransactionClientTagsRequestDTO.md)
 - [TransactionClientTagsResponseDTO](docs/TransactionClientTagsResponseDTO.md)
 - [TransactionDetails](docs/TransactionDetails.md)
 - [TransactionLimitDTO](docs/TransactionLimitDTO.md)
 - [TransactionLimitsDTO](docs/TransactionLimitsDTO.md)
 - [TransactionPurposeDTO](docs/TransactionPurposeDTO.md)
 - [TransactionResponseDTO](docs/TransactionResponseDTO.md)
 - [TransactionRfiDetailsResponse](docs/TransactionRfiDetailsResponse.md)
 - [TransactionWalletLimitsDTO](docs/TransactionWalletLimitsDTO.md)
 - [TransactionsBusinessDTO](docs/TransactionsBusinessDTO.md)
 - [TransactionsLocationDTO](docs/TransactionsLocationDTO.md)
 - [TransactionsReceiptDTO](docs/TransactionsReceiptDTO.md)
 - [TypedErrorErrorCodes](docs/TypedErrorErrorCodes.md)
 - [TypedErrorOfstring](docs/TypedErrorOfstring.md)
 - [URI](docs/URI.md)
 - [URL](docs/URL.md)
 - [UpdateBankAccountError](docs/UpdateBankAccountError.md)
 - [UpdateBankAccountErrorResponse](docs/UpdateBankAccountErrorResponse.md)
 - [UpdateBeneficiaryRequestDTO](docs/UpdateBeneficiaryRequestDTO.md)
 - [UpdateContactInfoRequestDTO](docs/UpdateContactInfoRequestDTO.md)
 - [UpdateCorporateCustomerRequestDTO](docs/UpdateCorporateCustomerRequestDTO.md)
 - [UpdateCorporateKybResponseDTO](docs/UpdateCorporateKybResponseDTO.md)
 - [UpdateCustomerDTO](docs/UpdateCustomerDTO.md)
 - [UpdateCustomerResponseDTO](docs/UpdateCustomerResponseDTO.md)
 - [UpdateMandateRequestDTO](docs/UpdateMandateRequestDTO.md)
 - [UpdateWalletRequestDTO](docs/UpdateWalletRequestDTO.md)
 - [UploadRfiDetailsResponseDto](docs/UploadRfiDetailsResponseDto.md)
 - [UploadRfiDocumentRequestDto](docs/UploadRfiDocumentRequestDto.md)
 - [VerifyRequest](docs/VerifyRequest.md)
 - [VerifyResponse](docs/VerifyResponse.md)
 - [VirtualAccountRequestDTO](docs/VirtualAccountRequestDTO.md)
 - [VirtualAccountResponseDTO](docs/VirtualAccountResponseDTO.md)
 - [WalletAddressDTO](docs/WalletAddressDTO.md)
 - [WalletApiError](docs/WalletApiError.md)
 - [WalletApiResponse2](docs/WalletApiResponse2.md)
 - [WalletBalanceResponseDTO](docs/WalletBalanceResponseDTO.md)
 - [WalletDeviceDetailsDTO](docs/WalletDeviceDetailsDTO.md)
 - [WalletFundDTO](docs/WalletFundDTO.md)
 - [WalletFundResponseDTO](docs/WalletFundResponseDTO.md)
 - [WalletFundingInstrumentsResponseDTO](docs/WalletFundingInstrumentsResponseDTO.md)
 - [WalletIdentificationDocDTO](docs/WalletIdentificationDocDTO.md)
 - [WalletPaymentIdsResponseDTO](docs/WalletPaymentIdsResponseDTO.md)
 - [WalletRefundRequestDTO](docs/WalletRefundRequestDTO.md)
 - [WalletResponseDTO2](docs/WalletResponseDTO2.md)
 - [WalletRfiAttributeResponse](docs/WalletRfiAttributeResponse.md)
 - [WalletRfiResponseInfo](docs/WalletRfiResponseInfo.md)
 - [WalletRfiResponseRequest](docs/WalletRfiResponseRequest.md)
 - [WalletStandard404Error](docs/WalletStandard404Error.md)
 - [WalletTag](docs/WalletTag.md)
 - [WalletTransactionsResponseDTO](docs/WalletTransactionsResponseDTO.md)
 - [WalletTransferDto](docs/WalletTransferDto.md)
 - [WalletTransferResponseDto](docs/WalletTransferResponseDto.md)
 - [WalletUploadRfiDetailsResponseDTO](docs/WalletUploadRfiDetailsResponseDTO.md)
 - [WalletUploadRfiDocumentRequestDTO](docs/WalletUploadRfiDocumentRequestDTO.md)
 - [WalletsSearchDTO](docs/WalletsSearchDTO.md)
 - [Window](docs/Window.md)
 - [WithDestinationAmount](docs/WithDestinationAmount.md)
 - [WithDestinationAmount1](docs/WithDestinationAmount1.md)
 - [WithSourceAmount](docs/WithSourceAmount.md)
 - [WithSourceAmount1](docs/WithSourceAmount1.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="default"></a>
### default

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

