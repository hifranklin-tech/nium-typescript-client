import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Access } from '../models/Access';
import { Account } from '../models/Account';
import { AccountReference } from '../models/AccountReference';
import { AccountResponseDTO } from '../models/AccountResponseDTO';
import { AccountStatusResponse } from '../models/AccountStatusResponse';
import { AccountValidationRequestDTO } from '../models/AccountValidationRequestDTO';
import { AccountValidationResponseDTO } from '../models/AccountValidationResponseDTO';
import { ActivateCardRequestV2DTO } from '../models/ActivateCardRequestV2DTO';
import { ActivateCardResponseDTO } from '../models/ActivateCardResponseDTO';
import { ActivateCardResponseV2DTO } from '../models/ActivateCardResponseV2DTO';
import { AddBeneficiaryRequest } from '../models/AddBeneficiaryRequest';
import { AddBeneficiaryRequestDTO } from '../models/AddBeneficiaryRequestDTO';
import { AddCardRequest } from '../models/AddCardRequest';
import { AddCardRequestPHY } from '../models/AddCardRequestPHY';
import { AddCardRequestV2 } from '../models/AddCardRequestV2';
import { AddCardRequestVIR } from '../models/AddCardRequestVIR';
import { AddCardRequestVIRUP2PHY } from '../models/AddCardRequestVIRUP2PHY';
import { AddCardResponseDTO } from '../models/AddCardResponseDTO';
import { AddCardV2Request } from '../models/AddCardV2Request';
import { AddCardV2RequestSelectOneOfTheFollowingCardType } from '../models/AddCardV2RequestSelectOneOfTheFollowingCardType';
import { AddCardV2ResponseDTO } from '../models/AddCardV2ResponseDTO';
import { AddCategoryResponseDTO } from '../models/AddCategoryResponseDTO';
import { AddCustomerChildCanHaveParent } from '../models/AddCustomerChildCanHaveParent';
import { AddCustomerChildHasParent } from '../models/AddCustomerChildHasParent';
import { AddCustomerChildMustHaveParent } from '../models/AddCustomerChildMustHaveParent';
import { AddCustomerChildMustHaveParentWithCorpBilling } from '../models/AddCustomerChildMustHaveParentWithCorpBilling';
import { AddCustomerRequestDTO } from '../models/AddCustomerRequestDTO';
import { AddCustomerResponseDTO } from '../models/AddCustomerResponseDTO';
import { AdditionalFeesDTO } from '../models/AdditionalFeesDTO';
import { Address } from '../models/Address';
import { AddressDTO } from '../models/AddressDTO';
import { AddressV2 } from '../models/AddressV2';
import { Addresses } from '../models/Addresses';
import { Amount } from '../models/Amount';
import { ApiError } from '../models/ApiError';
import { ApiError2 } from '../models/ApiError2';
import { ApiResponse2 } from '../models/ApiResponse2';
import { ApiResponseOfTransactionChannelsResponseDTO } from '../models/ApiResponseOfTransactionChannelsResponseDTO';
import { ApiResponseOfWalletRefundResponseDTO } from '../models/ApiResponseOfWalletRefundResponseDTO';
import { ApiResponseOfstring } from '../models/ApiResponseOfstring';
import { ApplicantDetails } from '../models/ApplicantDetails';
import { ApplicantDetails2 } from '../models/ApplicantDetails2';
import { ApplicantDetailsV2 } from '../models/ApplicantDetailsV2';
import { ApplicationCommonResponse } from '../models/ApplicationCommonResponse';
import { AssignCardDTO } from '../models/AssignCardDTO';
import { AssociationDetails } from '../models/AssociationDetails';
import { AutoSweepBankDetails } from '../models/AutoSweepBankDetails';
import { Balance } from '../models/Balance';
import { BalanceAmount } from '../models/BalanceAmount';
import { BankAccountDetails } from '../models/BankAccountDetails';
import { BankRoutingInfo } from '../models/BankRoutingInfo';
import { BankTransfer } from '../models/BankTransfer';
import { Beneficiary } from '../models/Beneficiary';
import { BeneficiaryAccountDetailsDTO } from '../models/BeneficiaryAccountDetailsDTO';
import { BeneficiaryDetailRequest } from '../models/BeneficiaryDetailRequest';
import { BeneficiaryDetailsDTO } from '../models/BeneficiaryDetailsDTO';
import { BeneficiaryResponseDTO } from '../models/BeneficiaryResponseDTO';
import { BeneficiaryValidationRequestDTO } from '../models/BeneficiaryValidationRequestDTO';
import { BeneficiaryValidationResponseDTO } from '../models/BeneficiaryValidationResponseDTO';
import { BlockAndReplaceCardRequestDTO } from '../models/BlockAndReplaceCardRequestDTO';
import { BlockAndReplaceCardResponseDTO } from '../models/BlockAndReplaceCardResponseDTO';
import { BlockAndReplaceStatus } from '../models/BlockAndReplaceStatus';
import { BlockCodeCardResponseDTO } from '../models/BlockCodeCardResponseDTO';
import { BlockCodeDTO } from '../models/BlockCodeDTO';
import { BlockCustomerRequestDTO } from '../models/BlockCustomerRequestDTO';
import { BranchNameResponseDTO } from '../models/BranchNameResponseDTO';
import { BusinessAddress } from '../models/BusinessAddress';
import { BusinessDetails } from '../models/BusinessDetails';
import { BusinessDetails2 } from '../models/BusinessDetails2';
import { BusinessDetailsResponseDTO } from '../models/BusinessDetailsResponseDTO';
import { BusinessDetailsResponseV2DTO } from '../models/BusinessDetailsResponseV2DTO';
import { BusinessPartner } from '../models/BusinessPartner';
import { BusinessPartner2 } from '../models/BusinessPartner2';
import { BusinessPartnerAddresses } from '../models/BusinessPartnerAddresses';
import { BusinessPartnerDetailsResponseDTO } from '../models/BusinessPartnerDetailsResponseDTO';
import { BusinessPartnerLegalDetails } from '../models/BusinessPartnerLegalDetails';
import { BusinessPartnerV2 } from '../models/BusinessPartnerV2';
import { ButtonDTO } from '../models/ButtonDTO';
import { CSSAttributeDTO } from '../models/CSSAttributeDTO';
import { CancelConversionError } from '../models/CancelConversionError';
import { CancelConversionErrorResponse } from '../models/CancelConversionErrorResponse';
import { CancellationReason } from '../models/CancellationReason';
import { CardAcceptorAddress } from '../models/CardAcceptorAddress';
import { CardAddress } from '../models/CardAddress';
import { CardAssignResponseDTO } from '../models/CardAssignResponseDTO';
import { CardDetails } from '../models/CardDetails';
import { CardInfo } from '../models/CardInfo';
import { CardMetaDataResponseDTO } from '../models/CardMetaDataResponseDTO';
import { CardResponseDTO } from '../models/CardResponseDTO';
import { CardTokensDTO } from '../models/CardTokensDTO';
import { CardWidgetTokenRequestDTO } from '../models/CardWidgetTokenRequestDTO';
import { CardWidgetTokenResponse } from '../models/CardWidgetTokenResponse';
import { CategoryData } from '../models/CategoryData';
import { ChannelActionRequestDTO } from '../models/ChannelActionRequestDTO';
import { ClientCurrencyResponseDTO } from '../models/ClientCurrencyResponseDTO';
import { ClientCustomTagDTO } from '../models/ClientCustomTagDTO';
import { ClientDetailResponseDTO2 } from '../models/ClientDetailResponseDTO2';
import { ClientFeeDetailsResponseDTO } from '../models/ClientFeeDetailsResponseDTO';
import { ClientPrefundResponseDTO } from '../models/ClientPrefundResponseDTO';
import { ClientTransactionsResponseDTO } from '../models/ClientTransactionsResponseDTO';
import { CommonResponse } from '../models/CommonResponse';
import { ComplianceDocumentDTO } from '../models/ComplianceDocumentDTO';
import { ComplianceDocumentResponseDTO } from '../models/ComplianceDocumentResponseDTO';
import { ComplianceIdentificationDocDTO } from '../models/ComplianceIdentificationDocDTO';
import { ComplianceRFITemplateMetadataResponseDTO } from '../models/ComplianceRFITemplateMetadataResponseDTO';
import { ConfirmFundingInstrumentRequestDTO } from '../models/ConfirmFundingInstrumentRequestDTO';
import { Consent } from '../models/Consent';
import { ConsentDetailsResponse } from '../models/ConsentDetailsResponse';
import { ContactDetails } from '../models/ContactDetails';
import { ContactDetailsResponseDTO } from '../models/ContactDetailsResponseDTO';
import { ContainerDTO } from '../models/ContainerDTO';
import { ConversionCancelRequest } from '../models/ConversionCancelRequest';
import { ConversionCancelResponse } from '../models/ConversionCancelResponse';
import { ConversionCreationRequest } from '../models/ConversionCreationRequest';
import { ConversionCreationResponse } from '../models/ConversionCreationResponse';
import { ConversionSchedule } from '../models/ConversionSchedule';
import { ConversionStatus } from '../models/ConversionStatus';
import { CorporateAddress } from '../models/CorporateAddress';
import { CorporateAddressDTO } from '../models/CorporateAddressDTO';
import { CorporateAddresses } from '../models/CorporateAddresses';
import { CorporateBusinessDetails } from '../models/CorporateBusinessDetails';
import { CorporateBusinessDetailsDocumentDetailDTO } from '../models/CorporateBusinessDetailsDocumentDetailDTO';
import { CorporateBusinessPartner } from '../models/CorporateBusinessPartner';
import { CorporateBusinessPartnerLegalDetails } from '../models/CorporateBusinessPartnerLegalDetails';
import { CorporateComplianceDocumentRequestDTO } from '../models/CorporateComplianceDocumentRequestDTO';
import { CorporateComplianceDocumentResponseDTO } from '../models/CorporateComplianceDocumentResponseDTO';
import { CorporateContactDetails } from '../models/CorporateContactDetails';
import { CorporateCustomerRequestsDTO } from '../models/CorporateCustomerRequestsDTO';
import { CorporateCustomerResponseDTO } from '../models/CorporateCustomerResponseDTO';
import { CorporateDetailResponseDTO } from '../models/CorporateDetailResponseDTO';
import { CorporateDocumentDetail } from '../models/CorporateDocumentDetail';
import { CorporateDocumentDetails2DTO } from '../models/CorporateDocumentDetails2DTO';
import { CorporateDocumentDetailsDTO } from '../models/CorporateDocumentDetailsDTO';
import { CorporateDocumentUploadApplicantDetailsDTO } from '../models/CorporateDocumentUploadApplicantDetailsDTO';
import { CorporateDocumentUploadBusinessDetailsDTO } from '../models/CorporateDocumentUploadBusinessDetailsDTO';
import { CorporateDocumentUploadStakeholderDetailsDTO } from '../models/CorporateDocumentUploadStakeholderDetailsDTO';
import { CorporateDocumentUploadStakeholdersDTO } from '../models/CorporateDocumentUploadStakeholdersDTO';
import { CorporateEnrichedDetailResponseDTO } from '../models/CorporateEnrichedDetailResponseDTO';
import { CorporateLegalDetails } from '../models/CorporateLegalDetails';
import { CorporateProfessionalDetails } from '../models/CorporateProfessionalDetails';
import { CorporateRegisteredAddress } from '../models/CorporateRegisteredAddress';
import { CorporateRiskAssessmentInfo } from '../models/CorporateRiskAssessmentInfo';
import { CorporateStakeholderDetails } from '../models/CorporateStakeholderDetails';
import { CorporateStakeholders } from '../models/CorporateStakeholders';
import { CreateConversionError } from '../models/CreateConversionError';
import { CreateConversionErrorResponse } from '../models/CreateConversionErrorResponse';
import { CreateQuoteError } from '../models/CreateQuoteError';
import { CreateQuoteErrorResponse } from '../models/CreateQuoteErrorResponse';
import { CustomFeeRequestDTO } from '../models/CustomFeeRequestDTO';
import { CustomFeeResponseDTO } from '../models/CustomFeeResponseDTO';
import { CustomerAccountDetail } from '../models/CustomerAccountDetail';
import { CustomerApiError } from '../models/CustomerApiError';
import { CustomerCardWidgetTokenRequestDTO } from '../models/CustomerCardWidgetTokenRequestDTO';
import { CustomerCardWidgetTokenResponse } from '../models/CustomerCardWidgetTokenResponse';
import { CustomerClientTagRequestDTO } from '../models/CustomerClientTagRequestDTO';
import { CustomerClientTagResponseDTO } from '../models/CustomerClientTagResponseDTO';
import { CustomerClientTagsRequestDTO } from '../models/CustomerClientTagsRequestDTO';
import { CustomerClientTagsResponseDTO } from '../models/CustomerClientTagsResponseDTO';
import { CustomerDataExternalRequestDTO } from '../models/CustomerDataExternalRequestDTO';
import { CustomerDataExternalResponseDTO } from '../models/CustomerDataExternalResponseDTO';
import { CustomerDataRequestDTO } from '../models/CustomerDataRequestDTO';
import { CustomerDetailResponse } from '../models/CustomerDetailResponse';
import { CustomerDetailResponseDTO } from '../models/CustomerDetailResponseDTO';
import { CustomerDetailsResponseV2DTO } from '../models/CustomerDetailsResponseV2DTO';
import { CustomerLinkAccountRequest } from '../models/CustomerLinkAccountRequest';
import { CustomerRfiDetailsResponse } from '../models/CustomerRfiDetailsResponse';
import { CustomerTagDTO } from '../models/CustomerTagDTO';
import { CustomerTaxDetailDTO } from '../models/CustomerTaxDetailDTO';
import { CvvResponseDTO } from '../models/CvvResponseDTO';
import { Demographics } from '../models/Demographics';
import { DeviceDetailsDTO } from '../models/DeviceDetailsDTO';
import { Document } from '../models/Document';
import { DocumentDetail } from '../models/DocumentDetail';
import { DynamicPayNow } from '../models/DynamicPayNow';
import { EVerifyCustomerRegistrationRequestDTO } from '../models/EVerifyCustomerRegistrationRequestDTO';
import { EitherSourceOrDestinationAmount } from '../models/EitherSourceOrDestinationAmount';
import { EitherSourceOrDestinationAmountOrNoAmount } from '../models/EitherSourceOrDestinationAmountOrNoAmount';
import { EmbossingDetails } from '../models/EmbossingDetails';
import { ErrorCodeMapping } from '../models/ErrorCodeMapping';
import { ErrorCodes400 } from '../models/ErrorCodes400';
import { ErrorCodes401 } from '../models/ErrorCodes401';
import { ErrorCodes403 } from '../models/ErrorCodes403';
import { ErrorCodes500 } from '../models/ErrorCodes500';
import { ErrorDetail400 } from '../models/ErrorDetail400';
import { ErrorDetail401 } from '../models/ErrorDetail401';
import { ErrorDetail403 } from '../models/ErrorDetail403';
import { ErrorDetail500 } from '../models/ErrorDetail500';
import { ErrorResponse400 } from '../models/ErrorResponse400';
import { ErrorResponse401 } from '../models/ErrorResponse401';
import { ErrorResponse403 } from '../models/ErrorResponse403';
import { ErrorResponse500 } from '../models/ErrorResponse500';
import { ExchangeRateGetResponse } from '../models/ExchangeRateGetResponse';
import { ExchangeRateV2ResponseDto } from '../models/ExchangeRateV2ResponseDto';
import { ExchangeRatesGetResponse } from '../models/ExchangeRatesGetResponse';
import { FXStandard401Error } from '../models/FXStandard401Error';
import { FXStandard403Error } from '../models/FXStandard403Error';
import { FXStandard500Error } from '../models/FXStandard500Error';
import { FeeResponseDTO } from '../models/FeeResponseDTO';
import { FetchConversionError } from '../models/FetchConversionError';
import { FetchConversionErrorResponse } from '../models/FetchConversionErrorResponse';
import { FetchPinResponseDTO } from '../models/FetchPinResponseDTO';
import { FetchPinStatusResponseDTO } from '../models/FetchPinStatusResponseDTO';
import { FetchQuoteError } from '../models/FetchQuoteError';
import { FetchQuoteErrorResponse } from '../models/FetchQuoteErrorResponse';
import { FundTransferRequestDTO } from '../models/FundTransferRequestDTO';
import { FundTransferResponse } from '../models/FundTransferResponse';
import { FundingInstrumentStatusUpdateRequestDTO } from '../models/FundingInstrumentStatusUpdateRequestDTO';
import { FxHoldLockResponseContent } from '../models/FxHoldLockResponseContent';
import { GPIResponseDTO } from '../models/GPIResponseDTO';
import { IdentificationDocDTO } from '../models/IdentificationDocDTO';
import { IdentificationDocumentDTO } from '../models/IdentificationDocumentDTO';
import { IndividualCustomerResponseDTO } from '../models/IndividualCustomerResponseDTO';
import { InputFieldDTO } from '../models/InputFieldDTO';
import { InvoiceDetails } from '../models/InvoiceDetails';
import { InwardPaymentManualRequestDTO } from '../models/InwardPaymentManualRequestDTO';
import { ItemDetails } from '../models/ItemDetails';
import { Labels } from '../models/Labels';
import { LegalDetails } from '../models/LegalDetails';
import { LegalDetailsV2 } from '../models/LegalDetailsV2';
import { LinkAccountResponse } from '../models/LinkAccountResponse';
import { LocalIsoRequest } from '../models/LocalIsoRequest';
import { LocalIsoResponse } from '../models/LocalIsoResponse';
import { LockPeriod } from '../models/LockPeriod';
import { LockStatusUpdateRequestDTO } from '../models/LockStatusUpdateRequestDTO';
import { LockStatusUpdateResponseDTO } from '../models/LockStatusUpdateResponseDTO';
import { MCCRestrictionDTO } from '../models/MCCRestrictionDTO';
import { MerchantCategoryResponseDTO2 } from '../models/MerchantCategoryResponseDTO2';
import { ModelError } from '../models/ModelError';
import { ModelFile } from '../models/ModelFile';
import { NewErrorResponse } from '../models/NewErrorResponse';
import { OOBCallbackRequestDTO } from '../models/OOBCallbackRequestDTO';
import { OOBCallbackResponseDTO } from '../models/OOBCallbackResponseDTO';
import { OnboardingDetails } from '../models/OnboardingDetails';
import { OobCallbackRequestDTO } from '../models/OobCallbackRequestDTO';
import { OpenBankingPaymentResponseDTO } from '../models/OpenBankingPaymentResponseDTO';
import { P2PTransferDTO } from '../models/P2PTransferDTO';
import { P2PTransferResponse } from '../models/P2PTransferResponse';
import { PageResponseCardDetails } from '../models/PageResponseCardDetails';
import { PaginatedCustomerDetailsResponseV2DTO } from '../models/PaginatedCustomerDetailsResponseV2DTO';
import { PaginatedResponseDTOCustomerDetailsResponseV2DTO } from '../models/PaginatedResponseDTOCustomerDetailsResponseV2DTO';
import { Pagination } from '../models/Pagination';
import { PartialSearchBankNameResponseDTO } from '../models/PartialSearchBankNameResponseDTO';
import { PartialSearchBranchNameResponseDTO } from '../models/PartialSearchBranchNameResponseDTO';
import { PartialSearchDTO } from '../models/PartialSearchDTO';
import { PartnershipDetails } from '../models/PartnershipDetails';
import { PasscodeRequestDTO } from '../models/PasscodeRequestDTO';
import { PasscodeResponseDTO } from '../models/PasscodeResponseDTO';
import { PasscodeStatusDTO } from '../models/PasscodeStatusDTO';
import { PayinApiError } from '../models/PayinApiError';
import { PayinApiResponse2 } from '../models/PayinApiResponse2';
import { Payment } from '../models/Payment';
import { PaymentIdCientTagsResponseDTO } from '../models/PaymentIdCientTagsResponseDTO';
import { PaymentIdClientTagResponseDTO } from '../models/PaymentIdClientTagResponseDTO';
import { PaymentIdDTO } from '../models/PaymentIdDTO';
import { PaymentIdRequestDTO2 } from '../models/PaymentIdRequestDTO2';
import { PaymentIdResponseDTO2 } from '../models/PaymentIdResponseDTO2';
import { PaymentIdTagRequestDTO } from '../models/PaymentIdTagRequestDTO';
import { PaymentIdsDTO } from '../models/PaymentIdsDTO';
import { Payout } from '../models/Payout';
import { PayoutCustomerApiError } from '../models/PayoutCustomerApiError';
import { PayoutIdentificationDocumentDTO } from '../models/PayoutIdentificationDocumentDTO';
import { PayoutRequest } from '../models/PayoutRequest';
import { PinUpdateRequestDTO } from '../models/PinUpdateRequestDTO';
import { PinUpdateResponseDTO } from '../models/PinUpdateResponseDTO';
import { PrefundRequestDTO } from '../models/PrefundRequestDTO';
import { ProductAddress } from '../models/ProductAddress';
import { ProductApiError } from '../models/ProductApiError';
import { ProductAssociationDetails } from '../models/ProductAssociationDetails';
import { ProductCorporateCustomerResponseDTO } from '../models/ProductCorporateCustomerResponseDTO';
import { ProductCustomerTagDTO } from '../models/ProductCustomerTagDTO';
import { ProductDocument } from '../models/ProductDocument';
import { ProductDocumentDetail } from '../models/ProductDocumentDetail';
import { ProductPartnershipDetails } from '../models/ProductPartnershipDetails';
import { ProductProfessionalDetails } from '../models/ProductProfessionalDetails';
import { ProductRegulatoryDetails } from '../models/ProductRegulatoryDetails';
import { ProductRfiResponseRequest } from '../models/ProductRfiResponseRequest';
import { ProductTaxDetails } from '../models/ProductTaxDetails';
import { ProfessionalDetails } from '../models/ProfessionalDetails';
import { ProfessionalDetailsResponseDTO } from '../models/ProfessionalDetailsResponseDTO';
import { PublicCorporateBusinessDetails } from '../models/PublicCorporateBusinessDetails';
import { PurposeCodeResponseDTO } from '../models/PurposeCodeResponseDTO';
import { QuoteCreationRequest } from '../models/QuoteCreationRequest';
import { QuoteCreationResponse } from '../models/QuoteCreationResponse';
import { QuoteType } from '../models/QuoteType';
import { ReferenceRateResponseDto } from '../models/ReferenceRateResponseDto';
import { RegenerateKYCURL400Response } from '../models/RegenerateKYCURL400Response';
import { RegenerateUrlResponse } from '../models/RegenerateUrlResponse';
import { RegisteredAddress } from '../models/RegisteredAddress';
import { RegulatoryDetails } from '../models/RegulatoryDetails';
import { RemittanceEventsResponseDTO2 } from '../models/RemittanceEventsResponseDTO2';
import { RemittanceResponseDTO } from '../models/RemittanceResponseDTO';
import { RemittanceTransactionsRequestDTO } from '../models/RemittanceTransactionsRequestDTO';
import { RemitterAccountWhiteList } from '../models/RemitterAccountWhiteList';
import { RemitterRequestDTO } from '../models/RemitterRequestDTO';
import { RenewCardRequest } from '../models/RenewCardRequest';
import { ReplaceCardRequest } from '../models/ReplaceCardRequest';
import { RequiredFields } from '../models/RequiredFields';
import { Resource } from '../models/Resource';
import { RespondRfiRequestDTO } from '../models/RespondRfiRequestDTO';
import { RespondRfiResponseDTO } from '../models/RespondRfiResponseDTO';
import { Result } from '../models/Result';
import { RetrieveCardDetailsResponseDTO } from '../models/RetrieveCardDetailsResponseDTO';
import { RevenueInfo } from '../models/RevenueInfo';
import { RfiAttributeResponse } from '../models/RfiAttributeResponse';
import { RfiIdentificationDoc } from '../models/RfiIdentificationDoc';
import { RfiResponseInfo } from '../models/RfiResponseInfo';
import { RfiResponseRequest } from '../models/RfiResponseRequest';
import { RfiTemplate } from '../models/RfiTemplate';
import { RiskAssessmentInfo } from '../models/RiskAssessmentInfo';
import { RiskAssessmentInfoResponseDTO } from '../models/RiskAssessmentInfoResponseDTO';
import { RiskAssessmentInfoV2 } from '../models/RiskAssessmentInfoV2';
import { RoutingInfo } from '../models/RoutingInfo';
import { ScaStatus } from '../models/ScaStatus';
import { SettlementRequestDTO } from '../models/SettlementRequestDTO';
import { StakeholderContactDetailsResponseDTO } from '../models/StakeholderContactDetailsResponseDTO';
import { StakeholderDetails } from '../models/StakeholderDetails';
import { StakeholderDetails2 } from '../models/StakeholderDetails2';
import { StakeholderDetailsResponseDTO } from '../models/StakeholderDetailsResponseDTO';
import { StakeholderDetailsV2 } from '../models/StakeholderDetailsV2';
import { StakeholderV2 } from '../models/StakeholderV2';
import { Stakeholders } from '../models/Stakeholders';
import { Stakeholders2 } from '../models/Stakeholders2';
import { Standard401Error } from '../models/Standard401Error';
import { Standard403Error } from '../models/Standard403Error';
import { Standard404Error } from '../models/Standard404Error';
import { Standard500Error } from '../models/Standard500Error';
import { StaticPayNow } from '../models/StaticPayNow';
import { SupportedCorridorsResponseDTO } from '../models/SupportedCorridorsResponseDTO';
import { TaxDetails } from '../models/TaxDetails';
import { TaxDetailsResponseDTO } from '../models/TaxDetailsResponseDTO';
import { Template } from '../models/Template';
import { TermsAndConditionsAcceptResponseDTO } from '../models/TermsAndConditionsAcceptResponseDTO';
import { TermsAndConditionsRequestDTO } from '../models/TermsAndConditionsRequestDTO';
import { TermsAndConditionsResponseDTO } from '../models/TermsAndConditionsResponseDTO';
import { Transaction } from '../models/Transaction';
import { TransactionAmount } from '../models/TransactionAmount';
import { TransactionChannelResponseDTO } from '../models/TransactionChannelResponseDTO';
import { TransactionChannelsResponseDTO } from '../models/TransactionChannelsResponseDTO';
import { TransactionClientTagRequestDTO } from '../models/TransactionClientTagRequestDTO';
import { TransactionClientTagResponseDTO } from '../models/TransactionClientTagResponseDTO';
import { TransactionClientTagsRequestDTO } from '../models/TransactionClientTagsRequestDTO';
import { TransactionClientTagsResponseDTO } from '../models/TransactionClientTagsResponseDTO';
import { TransactionLimitDTO } from '../models/TransactionLimitDTO';
import { TransactionLimitsDTO } from '../models/TransactionLimitsDTO';
import { TransactionResponseDTO } from '../models/TransactionResponseDTO';
import { TransactionRfiDetailsResponse } from '../models/TransactionRfiDetailsResponse';
import { TransactionWalletLimitsDTO } from '../models/TransactionWalletLimitsDTO';
import { TransactionsBusinessDTO } from '../models/TransactionsBusinessDTO';
import { TransactionsLocationDTO } from '../models/TransactionsLocationDTO';
import { TransactionsReceiptDTO } from '../models/TransactionsReceiptDTO';
import { TypedErrorErrorCodes } from '../models/TypedErrorErrorCodes';
import { URI } from '../models/URI';
import { URL } from '../models/URL';
import { UnifiedAddCustomerRequest } from '../models/UnifiedAddCustomerRequest';
import { UnifiedAddCustomerRequestSelectAnObjectBasedOnTheClientConfigParamChildMustHaveParent } from '../models/UnifiedAddCustomerRequestSelectAnObjectBasedOnTheClientConfigParamChildMustHaveParent';
import { UnmaskCardResponseDTO } from '../models/UnmaskCardResponseDTO';
import { UpdateBeneficiaryRequestDTO } from '../models/UpdateBeneficiaryRequestDTO';
import { UpdateContactInfoRequestDTO } from '../models/UpdateContactInfoRequestDTO';
import { UpdateCorporateKybResponseDTO } from '../models/UpdateCorporateKybResponseDTO';
import { UpdateCustomerDTO } from '../models/UpdateCustomerDTO';
import { UpdateCustomerResponseDTO } from '../models/UpdateCustomerResponseDTO';
import { UploadRfiDetailsResponseDTO } from '../models/UploadRfiDetailsResponseDTO';
import { UploadRfiDetailsResponseDto } from '../models/UploadRfiDetailsResponseDto';
import { UploadRfiDocumentRequestDTO } from '../models/UploadRfiDocumentRequestDTO';
import { UploadRfiDocumentRequestDto } from '../models/UploadRfiDocumentRequestDto';
import { VirtualAccountResponseDTO } from '../models/VirtualAccountResponseDTO';
import { WalletApiError } from '../models/WalletApiError';
import { WalletApiResponse2 } from '../models/WalletApiResponse2';
import { WalletApiResponseOfstring } from '../models/WalletApiResponseOfstring';
import { WalletBalanceResponseDTO } from '../models/WalletBalanceResponseDTO';
import { WalletFundDTO } from '../models/WalletFundDTO';
import { WalletFundResponseDTO } from '../models/WalletFundResponseDTO';
import { WalletFundResponseDTOPaymentMethodsInner } from '../models/WalletFundResponseDTOPaymentMethodsInner';
import { WalletFundingInstrumentsResponseDTO } from '../models/WalletFundingInstrumentsResponseDTO';
import { WalletPaymentIdsResponseDTO } from '../models/WalletPaymentIdsResponseDTO';
import { WalletPaymentIdsTagRequestDTO } from '../models/WalletPaymentIdsTagRequestDTO';
import { WalletPaymentIdsTagRequestDTO2 } from '../models/WalletPaymentIdsTagRequestDTO2';
import { WalletRefundRequestDTO } from '../models/WalletRefundRequestDTO';
import { WalletRefundResponseDTO } from '../models/WalletRefundResponseDTO';
import { WalletRfiAttributeResponse } from '../models/WalletRfiAttributeResponse';
import { WalletRfiResponseRequest } from '../models/WalletRfiResponseRequest';
import { WalletTransactionsResponseDTO } from '../models/WalletTransactionsResponseDTO';
import { WalletTransferDto } from '../models/WalletTransferDto';
import { WalletTransferResponseDto } from '../models/WalletTransferResponseDto';
import { Window } from '../models/Window';
import { WithDestinationAmount } from '../models/WithDestinationAmount';
import { WithDestinationAmount1 } from '../models/WithDestinationAmount1';
import { WithSourceAmount } from '../models/WithSourceAmount';
import { WithSourceAmount1 } from '../models/WithSourceAmount1';

import { ObservableBeneficiaryApi } from "./ObservableAPI";
import { BeneficiaryApiRequestFactory, BeneficiaryApiResponseProcessor} from "../apis/BeneficiaryApi";

export interface BeneficiaryApiAccountVerificationRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiaccountVerification
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiaccountVerification
     */
    customerHashId: string
    /**
     * accountValidationRequestDTO
     * @type AccountValidationRequestDTO
     * @memberof BeneficiaryApiaccountVerification
     */
    accountValidationRequestDTO: AccountValidationRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof BeneficiaryApiaccountVerification
     */
    xRequestId?: string
}

export interface BeneficiaryApiAddBeneficiaryRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiaddBeneficiary
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiaddBeneficiary
     */
    customerHashId: string
    /**
     * addBeneficiaryRequest
     * @type AddBeneficiaryRequest
     * @memberof BeneficiaryApiaddBeneficiary
     */
    addBeneficiaryRequest: AddBeneficiaryRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApiaddBeneficiary
     */
    xRequestId?: string
}

export interface BeneficiaryApiAddBeneficiaryV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiaddBeneficiaryV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiaddBeneficiaryV2
     */
    customerHashId: string
    /**
     * addBeneficiaryRequestDTO
     * @type AddBeneficiaryRequestDTO
     * @memberof BeneficiaryApiaddBeneficiaryV2
     */
    addBeneficiaryRequestDTO: AddBeneficiaryRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApiaddBeneficiaryV2
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryDetailsRequest {
    /**
     * Unique beneficiary hash ID.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetails
     */
    beneficiaryHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetails
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetails
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetails
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryDetailsV2Request {
    /**
     * Unique beneficiary hash ID.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetailsV2
     */
    beneficiaryHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetailsV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetailsV2
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryDetailsV2
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryListRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryList
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryList
     */
    customerHashId: string
    /**
     * parameters
     * @type Array&lt;{ [key: string]: string; }&gt;
     * @memberof BeneficiaryApibeneficiaryList
     */
    parameters?: Array<{ [key: string]: string; }>
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryList
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryListV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryListV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryListV2
     */
    customerHashId: string
    /**
     * parameters
     * @type Array&lt;{ [key: string]: string; }&gt;
     * @memberof BeneficiaryApibeneficiaryListV2
     */
    parameters?: Array<{ [key: string]: string; }>
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryListV2
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryValidationSchemaRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchema
     */
    clientHashId: string
    /**
     * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchema
     */
    currencyCode: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchema
     */
    customerHashId: string
    /**
     * This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchema
     */
    payoutMethod?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchema
     */
    xRequestId?: string
}

export interface BeneficiaryApiBeneficiaryValidationSchemaV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchemaV2
     */
    clientHashId: string
    /**
     * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchemaV2
     */
    currencyCode: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchemaV2
     */
    customerHashId: string
    /**
     * This field can accept the different modes of payout.
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchemaV2
     */
    payoutMethod?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApibeneficiaryValidationSchemaV2
     */
    xRequestId?: string
}

export interface BeneficiaryApiConfirmationofPayeeRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiconfirmationofPayee
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiconfirmationofPayee
     */
    customerHashId: string
    /**
     * beneficiaryValidationRequestDTO
     * @type BeneficiaryValidationRequestDTO
     * @memberof BeneficiaryApiconfirmationofPayee
     */
    beneficiaryValidationRequestDTO: BeneficiaryValidationRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApiconfirmationofPayee
     */
    xRequestId?: string
}

export interface BeneficiaryApiDeleteBeneficiaryRequest {
    /**
     * Unique beneficiary hash ID.
     * @type string
     * @memberof BeneficiaryApideleteBeneficiary
     */
    beneficiaryHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApideleteBeneficiary
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApideleteBeneficiary
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApideleteBeneficiary
     */
    xRequestId?: string
}

export interface BeneficiaryApiUpdateBeneficiaryRequest {
    /**
     * Unique beneficiary hash ID.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiary
     */
    beneficiaryHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiary
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiary
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiary
     */
    xRequestId?: string
    /**
     * Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     * @type AddBeneficiaryRequest
     * @memberof BeneficiaryApiupdateBeneficiary
     */
    addBeneficiaryRequest?: AddBeneficiaryRequest
}

export interface BeneficiaryApiUpdateBeneficiaryV2Request {
    /**
     * Unique beneficiary hash ID.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiaryV2
     */
    beneficiaryHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiaryV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiaryV2
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof BeneficiaryApiupdateBeneficiaryV2
     */
    xRequestId?: string
    /**
     * Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     * @type UpdateBeneficiaryRequestDTO
     * @memberof BeneficiaryApiupdateBeneficiaryV2
     */
    updateBeneficiaryRequestDTO?: UpdateBeneficiaryRequestDTO
}

export class ObjectBeneficiaryApi {
    private api: ObservableBeneficiaryApi

    public constructor(configuration: Configuration, requestFactory?: BeneficiaryApiRequestFactory, responseProcessor?: BeneficiaryApiResponseProcessor) {
        this.api = new ObservableBeneficiaryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.
     * Account verification (Confirmation of Payee)
     * @param param the request object
     */
    public accountVerificationWithHttpInfo(param: BeneficiaryApiAccountVerificationRequest, options?: Configuration): Promise<HttpInfo<AccountValidationResponseDTO>> {
        return this.api.accountVerificationWithHttpInfo(param.clientHashId, param.customerHashId, param.accountValidationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.
     * Account verification (Confirmation of Payee)
     * @param param the request object
     */
    public accountVerification(param: BeneficiaryApiAccountVerificationRequest, options?: Configuration): Promise<AccountValidationResponseDTO> {
        return this.api.accountVerification(param.clientHashId, param.customerHashId, param.accountValidationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.
     * Add Beneficiary
     * @param param the request object
     */
    public addBeneficiaryWithHttpInfo(param: BeneficiaryApiAddBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.addBeneficiaryWithHttpInfo(param.clientHashId, param.customerHashId, param.addBeneficiaryRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.
     * Add Beneficiary
     * @param param the request object
     */
    public addBeneficiary(param: BeneficiaryApiAddBeneficiaryRequest, options?: Configuration): Promise<Resource> {
        return this.api.addBeneficiary(param.clientHashId, param.customerHashId, param.addBeneficiaryRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.
     * Add Beneficiary V2
     * @param param the request object
     */
    public addBeneficiaryV2WithHttpInfo(param: BeneficiaryApiAddBeneficiaryV2Request, options?: Configuration): Promise<HttpInfo<BeneficiaryResponseDTO>> {
        return this.api.addBeneficiaryV2WithHttpInfo(param.clientHashId, param.customerHashId, param.addBeneficiaryRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.
     * Add Beneficiary V2
     * @param param the request object
     */
    public addBeneficiaryV2(param: BeneficiaryApiAddBeneficiaryV2Request, options?: Configuration): Promise<BeneficiaryResponseDTO> {
        return this.api.addBeneficiaryV2(param.clientHashId, param.customerHashId, param.addBeneficiaryRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.
     * Beneficiary Details
     * @param param the request object
     */
    public beneficiaryDetailsWithHttpInfo(param: BeneficiaryApiBeneficiaryDetailsRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.beneficiaryDetailsWithHttpInfo(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.
     * Beneficiary Details
     * @param param the request object
     */
    public beneficiaryDetails(param: BeneficiaryApiBeneficiaryDetailsRequest, options?: Configuration): Promise<Resource> {
        return this.api.beneficiaryDetails(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.
     * Beneficiary Details V2
     * @param param the request object
     */
    public beneficiaryDetailsV2WithHttpInfo(param: BeneficiaryApiBeneficiaryDetailsV2Request, options?: Configuration): Promise<HttpInfo<BeneficiaryResponseDTO>> {
        return this.api.beneficiaryDetailsV2WithHttpInfo(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.
     * Beneficiary Details V2
     * @param param the request object
     */
    public beneficiaryDetailsV2(param: BeneficiaryApiBeneficiaryDetailsV2Request, options?: Configuration): Promise<BeneficiaryResponseDTO> {
        return this.api.beneficiaryDetailsV2(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.
     * Beneficiary List
     * @param param the request object
     */
    public beneficiaryListWithHttpInfo(param: BeneficiaryApiBeneficiaryListRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.beneficiaryListWithHttpInfo(param.clientHashId, param.customerHashId, param.parameters, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.
     * Beneficiary List
     * @param param the request object
     */
    public beneficiaryList(param: BeneficiaryApiBeneficiaryListRequest, options?: Configuration): Promise<Resource> {
        return this.api.beneficiaryList(param.clientHashId, param.customerHashId, param.parameters, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details.
     * Beneficiary List V2
     * @param param the request object
     */
    public beneficiaryListV2WithHttpInfo(param: BeneficiaryApiBeneficiaryListV2Request, options?: Configuration): Promise<HttpInfo<Array<BeneficiaryResponseDTO>>> {
        return this.api.beneficiaryListV2WithHttpInfo(param.clientHashId, param.customerHashId, param.parameters, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch beneficiary details.
     * Beneficiary List V2
     * @param param the request object
     */
    public beneficiaryListV2(param: BeneficiaryApiBeneficiaryListV2Request, options?: Configuration): Promise<Array<BeneficiaryResponseDTO>> {
        return this.api.beneficiaryListV2(param.clientHashId, param.customerHashId, param.parameters, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.
     * Beneficiary Validation Schema
     * @param param the request object
     */
    public beneficiaryValidationSchemaWithHttpInfo(param: BeneficiaryApiBeneficiaryValidationSchemaRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.beneficiaryValidationSchemaWithHttpInfo(param.clientHashId, param.currencyCode, param.customerHashId, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.
     * Beneficiary Validation Schema
     * @param param the request object
     */
    public beneficiaryValidationSchema(param: BeneficiaryApiBeneficiaryValidationSchemaRequest, options?: Configuration): Promise<Resource> {
        return this.api.beneficiaryValidationSchema(param.clientHashId, param.currencyCode, param.customerHashId, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.
     * Beneficiary Validation Schema V2
     * @param param the request object
     */
    public beneficiaryValidationSchemaV2WithHttpInfo(param: BeneficiaryApiBeneficiaryValidationSchemaV2Request, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.beneficiaryValidationSchemaV2WithHttpInfo(param.clientHashId, param.currencyCode, param.customerHashId, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.
     * Beneficiary Validation Schema V2
     * @param param the request object
     */
    public beneficiaryValidationSchemaV2(param: BeneficiaryApiBeneficiaryValidationSchemaV2Request, options?: Configuration): Promise<string> {
        return this.api.beneficiaryValidationSchemaV2(param.clientHashId, param.currencyCode, param.customerHashId, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)
     * Confirmation of Payee (Previous version)
     * @param param the request object
     */
    public confirmationofPayeeWithHttpInfo(param: BeneficiaryApiConfirmationofPayeeRequest, options?: Configuration): Promise<HttpInfo<BeneficiaryValidationResponseDTO>> {
        return this.api.confirmationofPayeeWithHttpInfo(param.clientHashId, param.customerHashId, param.beneficiaryValidationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)
     * Confirmation of Payee (Previous version)
     * @param param the request object
     */
    public confirmationofPayee(param: BeneficiaryApiConfirmationofPayeeRequest, options?: Configuration): Promise<BeneficiaryValidationResponseDTO> {
        return this.api.confirmationofPayee(param.clientHashId, param.customerHashId, param.beneficiaryValidationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to delete a beneficiary.
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteBeneficiaryWithHttpInfo(param: BeneficiaryApiDeleteBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.deleteBeneficiaryWithHttpInfo(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to delete a beneficiary.
     * Delete Beneficiary
     * @param param the request object
     */
    public deleteBeneficiary(param: BeneficiaryApiDeleteBeneficiaryRequest, options?: Configuration): Promise<Resource> {
        return this.api.deleteBeneficiary(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary
     * @param param the request object
     */
    public updateBeneficiaryWithHttpInfo(param: BeneficiaryApiUpdateBeneficiaryRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.updateBeneficiaryWithHttpInfo(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId, param.addBeneficiaryRequest,  options).toPromise();
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary
     * @param param the request object
     */
    public updateBeneficiary(param: BeneficiaryApiUpdateBeneficiaryRequest, options?: Configuration): Promise<Resource> {
        return this.api.updateBeneficiary(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId, param.addBeneficiaryRequest,  options).toPromise();
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary V2
     * @param param the request object
     */
    public updateBeneficiaryV2WithHttpInfo(param: BeneficiaryApiUpdateBeneficiaryV2Request, options?: Configuration): Promise<HttpInfo<BeneficiaryResponseDTO>> {
        return this.api.updateBeneficiaryV2WithHttpInfo(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId, param.updateBeneficiaryRequestDTO,  options).toPromise();
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary V2
     * @param param the request object
     */
    public updateBeneficiaryV2(param: BeneficiaryApiUpdateBeneficiaryV2Request, options?: Configuration): Promise<BeneficiaryResponseDTO> {
        return this.api.updateBeneficiaryV2(param.beneficiaryHashId, param.clientHashId, param.customerHashId, param.xRequestId, param.updateBeneficiaryRequestDTO,  options).toPromise();
    }

}

import { ObservableCardsReferenceDataApi } from "./ObservableAPI";
import { CardsReferenceDataApiRequestFactory, CardsReferenceDataApiResponseProcessor} from "../apis/CardsReferenceDataApi";

export interface CardsReferenceDataApiReferenceExchangeRateRequest {
    /**
     * This field accepts the card scheme provider name: Visa Mastercard
     * @type string
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    cardScheme: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    clientHashId: string
    /**
     * From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
     * @type number
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    fromAmount: number
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
     * @type string
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    fromCurrency: string
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
     * @type string
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    toCurrency: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof CardsReferenceDataApireferenceExchangeRate
     */
    xRequestId?: string
}

export class ObjectCardsReferenceDataApi {
    private api: ObservableCardsReferenceDataApi

    public constructor(configuration: Configuration, requestFactory?: CardsReferenceDataApiRequestFactory, responseProcessor?: CardsReferenceDataApiResponseProcessor) {
        this.api = new ObservableCardsReferenceDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to get the reference exchange rate.
     * Reference Exchange Rate
     * @param param the request object
     */
    public referenceExchangeRateWithHttpInfo(param: CardsReferenceDataApiReferenceExchangeRateRequest, options?: Configuration): Promise<HttpInfo<ReferenceRateResponseDto>> {
        return this.api.referenceExchangeRateWithHttpInfo(param.cardScheme, param.clientHashId, param.fromAmount, param.fromCurrency, param.toCurrency, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to get the reference exchange rate.
     * Reference Exchange Rate
     * @param param the request object
     */
    public referenceExchangeRate(param: CardsReferenceDataApiReferenceExchangeRateRequest, options?: Configuration): Promise<ReferenceRateResponseDto> {
        return this.api.referenceExchangeRate(param.cardScheme, param.clientHashId, param.fromAmount, param.fromCurrency, param.toCurrency, param.xRequestId,  options).toPromise();
    }

}

import { ObservableClass3DSApi } from "./ObservableAPI";
import { Class3DSApiRequestFactory, Class3DSApiResponseProcessor} from "../apis/Class3DSApi";

export interface Class3DSApiPasscodeEnrollmentStatusRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof Class3DSApipasscodeEnrollmentStatus
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof Class3DSApipasscodeEnrollmentStatus
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof Class3DSApipasscodeEnrollmentStatus
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof Class3DSApipasscodeEnrollmentStatus
     */
    cardHashId?: string
    /**
     * Please enter a unique UUID value
     * @type string
     * @memberof Class3DSApipasscodeEnrollmentStatus
     */
    xRequestId?: string
}

export interface Class3DSApiProcessOOBcallbackRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof Class3DSApiprocessOOBcallback
     */
    clientHashId: string
    /**
     * oobCallbackRequestDTO
     * @type OOBCallbackRequestDTO
     * @memberof Class3DSApiprocessOOBcallback
     */
    oOBCallbackRequestDTO: OOBCallbackRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof Class3DSApiprocessOOBcallback
     */
    xRequestId?: string
}

export interface Class3DSApiProcessOobCallbackV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof Class3DSApiprocessOobCallbackV2
     */
    clientHashId: string
    /**
     * oobCallbackRequestDTO
     * @type OobCallbackRequestDTO
     * @memberof Class3DSApiprocessOobCallbackV2
     */
    oobCallbackRequestDTO: OobCallbackRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof Class3DSApiprocessOobCallbackV2
     */
    xRequestId?: string
}

export interface Class3DSApiSetPasscodeRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof Class3DSApisetPasscode
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof Class3DSApisetPasscode
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof Class3DSApisetPasscode
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof Class3DSApisetPasscode
     */
    cardHashId: string
    /**
     * passcodeRequestDTO
     * @type PasscodeRequestDTO
     * @memberof Class3DSApisetPasscode
     */
    passcodeRequestDTO: PasscodeRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof Class3DSApisetPasscode
     */
    xRequestId?: string
}

export class ObjectClass3DSApi {
    private api: ObservableClass3DSApi

    public constructor(configuration: Configuration, requestFactory?: Class3DSApiRequestFactory, responseProcessor?: Class3DSApiResponseProcessor) {
        this.api = new ObservableClass3DSApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`
     * 3DS passcode enrollment status
     * @param param the request object
     */
    public passcodeEnrollmentStatusWithHttpInfo(param: Class3DSApiPasscodeEnrollmentStatusRequest, options?: Configuration): Promise<HttpInfo<Array<PasscodeStatusDTO>>> {
        return this.api.passcodeEnrollmentStatusWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`
     * 3DS passcode enrollment status
     * @param param the request object
     */
    public passcodeEnrollmentStatus(param: Class3DSApiPasscodeEnrollmentStatusRequest, options?: Configuration): Promise<Array<PasscodeStatusDTO>> {
        return this.api.passcodeEnrollmentStatus(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * API to notify Nium on success of OOB authentication
     * Process OOB callback
     * @param param the request object
     */
    public processOOBcallbackWithHttpInfo(param: Class3DSApiProcessOOBcallbackRequest, options?: Configuration): Promise<HttpInfo<OOBCallbackResponseDTO>> {
        return this.api.processOOBcallbackWithHttpInfo(param.clientHashId, param.oOBCallbackRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * API to notify Nium on success of OOB authentication
     * Process OOB callback
     * @param param the request object
     */
    public processOOBcallback(param: Class3DSApiProcessOOBcallbackRequest, options?: Configuration): Promise<OOBCallbackResponseDTO> {
        return this.api.processOOBcallback(param.clientHashId, param.oOBCallbackRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * API to notify Nium on success or failure of OOB authentication
     * 3DS OOB Callback V2
     * @param param the request object
     */
    public processOobCallbackV2WithHttpInfo(param: Class3DSApiProcessOobCallbackV2Request, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.processOobCallbackV2WithHttpInfo(param.clientHashId, param.oobCallbackRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * API to notify Nium on success or failure of OOB authentication
     * 3DS OOB Callback V2
     * @param param the request object
     */
    public processOobCallbackV2(param: Class3DSApiProcessOobCallbackV2Request, options?: Configuration): Promise<void> {
        return this.api.processOobCallbackV2(param.clientHashId, param.oobCallbackRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * API to update the 3DS passcode for a specific card.
     * Add or Update passcode
     * @param param the request object
     */
    public setPasscodeWithHttpInfo(param: Class3DSApiSetPasscodeRequest, options?: Configuration): Promise<HttpInfo<PasscodeResponseDTO>> {
        return this.api.setPasscodeWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.passcodeRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * API to update the 3DS passcode for a specific card.
     * Add or Update passcode
     * @param param the request object
     */
    public setPasscode(param: Class3DSApiSetPasscodeRequest, options?: Configuration): Promise<PasscodeResponseDTO> {
        return this.api.setPasscode(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.passcodeRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableClientPrefundAccountApi } from "./ObservableAPI";
import { ClientPrefundAccountApiRequestFactory, ClientPrefundAccountApiResponseProcessor} from "../apis/ClientPrefundAccountApi";

export interface ClientPrefundAccountApiClientPrefundBalancesRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ClientPrefundAccountApiclientPrefundBalances
     */
    clientHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientPrefundAccountApiclientPrefundBalances
     */
    xRequestId?: string
}

export interface ClientPrefundAccountApiClientPrefundRequestRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ClientPrefundAccountApiclientPrefundRequest
     */
    clientHashId: string
    /**
     * prefundRequestDTO
     * @type PrefundRequestDTO
     * @memberof ClientPrefundAccountApiclientPrefundRequest
     */
    prefundRequestDTO: PrefundRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientPrefundAccountApiclientPrefundRequest
     */
    xRequestId?: string
}

export interface ClientPrefundAccountApiFetchClientPrefundRequestRequest {
    /**
     * Unique client Id assigned to the client during the onboarding process.
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    clientHashId: string
    /**
     * amount
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    amount?: string
    /**
     * bankReferenceNumber
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    bankReferenceNumber?: string
    /**
     * currency
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    currency?: string
    /**
     * endDate
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    endDate?: string
    /**
     * The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    order?: string
    /**
     * This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @type number
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    page?: number
    /**
     * prefundStatus
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    prefundStatus?: string
    /**
     * The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
     * @type number
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    size?: number
    /**
     * startDate
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    startDate?: string
    /**
     * systemReferenceNumber
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    systemReferenceNumber?: string
    /**
     * uniquePayerId
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    uniquePayerId?: string
    /**
     * uniquePaymentId
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    uniquePaymentId?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientPrefundAccountApifetchClientPrefundRequest
     */
    xRequestId?: string
}

export class ObjectClientPrefundAccountApi {
    private api: ObservableClientPrefundAccountApi

    public constructor(configuration: Configuration, requestFactory?: ClientPrefundAccountApiRequestFactory, responseProcessor?: ClientPrefundAccountApiResponseProcessor) {
        this.api = new ObservableClientPrefundAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch the available prefund balance for a client.
     * Client Prefund Balances
     * @param param the request object
     */
    public clientPrefundBalancesWithHttpInfo(param: ClientPrefundAccountApiClientPrefundBalancesRequest, options?: Configuration): Promise<HttpInfo<Array<AccountResponseDTO>>> {
        return this.api.clientPrefundBalancesWithHttpInfo(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the available prefund balance for a client.
     * Client Prefund Balances
     * @param param the request object
     */
    public clientPrefundBalances(param: ClientPrefundAccountApiClientPrefundBalancesRequest, options?: Configuration): Promise<Array<AccountResponseDTO>> {
        return this.api.clientPrefundBalances(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows our clients to raise a prefund request in the system.
     * Client Prefund Request
     * @param param the request object
     */
    public clientPrefundRequestWithHttpInfo(param: ClientPrefundAccountApiClientPrefundRequestRequest, options?: Configuration): Promise<HttpInfo<ClientPrefundResponseDTO>> {
        return this.api.clientPrefundRequestWithHttpInfo(param.clientHashId, param.prefundRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows our clients to raise a prefund request in the system.
     * Client Prefund Request
     * @param param the request object
     */
    public clientPrefundRequest(param: ClientPrefundAccountApiClientPrefundRequestRequest, options?: Configuration): Promise<ClientPrefundResponseDTO> {
        return this.api.clientPrefundRequest(param.clientHashId, param.prefundRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the details of client prefund requests.
     * Fetch Client Prefund Request
     * @param param the request object
     */
    public fetchClientPrefundRequestWithHttpInfo(param: ClientPrefundAccountApiFetchClientPrefundRequestRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.fetchClientPrefundRequestWithHttpInfo(param.clientHashId, param.amount, param.bankReferenceNumber, param.currency, param.endDate, param.order, param.page, param.prefundStatus, param.size, param.startDate, param.systemReferenceNumber, param.uniquePayerId, param.uniquePaymentId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the details of client prefund requests.
     * Fetch Client Prefund Request
     * @param param the request object
     */
    public fetchClientPrefundRequest(param: ClientPrefundAccountApiFetchClientPrefundRequestRequest, options?: Configuration): Promise<any> {
        return this.api.fetchClientPrefundRequest(param.clientHashId, param.amount, param.bankReferenceNumber, param.currency, param.endDate, param.order, param.page, param.prefundStatus, param.size, param.startDate, param.systemReferenceNumber, param.uniquePayerId, param.uniquePaymentId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableClientSettingsApi } from "./ObservableAPI";
import { ClientSettingsApiRequestFactory, ClientSettingsApiResponseProcessor} from "../apis/ClientSettingsApi";

export interface ClientSettingsApiClientDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ClientSettingsApiclientDetails
     */
    clientHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientSettingsApiclientDetails
     */
    xRequestId?: string
}

export interface ClientSettingsApiFeeDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ClientSettingsApifeeDetails
     */
    clientHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientSettingsApifeeDetails
     */
    xRequestId?: string
}

export class ObjectClientSettingsApi {
    private api: ObservableClientSettingsApi

    public constructor(configuration: Configuration, requestFactory?: ClientSettingsApiRequestFactory, responseProcessor?: ClientSettingsApiResponseProcessor) {
        this.api = new ObservableClientSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API will help you to fetch the configuration details of a client.
     * Client Details
     * @param param the request object
     */
    public clientDetailsWithHttpInfo(param: ClientSettingsApiClientDetailsRequest, options?: Configuration): Promise<HttpInfo<ClientDetailResponseDTO2>> {
        return this.api.clientDetailsWithHttpInfo(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will help you to fetch the configuration details of a client.
     * Client Details
     * @param param the request object
     */
    public clientDetails(param: ClientSettingsApiClientDetailsRequest, options?: Configuration): Promise<ClientDetailResponseDTO2> {
        return this.api.clientDetails(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API provides all the fees that have been set at the client level by NIUM. Refer to the following [Fees User Guide](doc:fees) for the Glossary of Fees for pre-defined fees supported on the system
     * Fee Details
     * @param param the request object
     */
    public feeDetailsWithHttpInfo(param: ClientSettingsApiFeeDetailsRequest, options?: Configuration): Promise<HttpInfo<Array<ClientFeeDetailsResponseDTO>>> {
        return this.api.feeDetailsWithHttpInfo(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API provides all the fees that have been set at the client level by NIUM. Refer to the following [Fees User Guide](doc:fees) for the Glossary of Fees for pre-defined fees supported on the system
     * Fee Details
     * @param param the request object
     */
    public feeDetails(param: ClientSettingsApiFeeDetailsRequest, options?: Configuration): Promise<Array<ClientFeeDetailsResponseDTO>> {
        return this.api.feeDetails(param.clientHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableClientTransactionsApi } from "./ObservableAPI";
import { ClientTransactionsApiRequestFactory, ClientTransactionsApiResponseProcessor} from "../apis/ClientTransactionsApi";

export interface ClientTransactionsApiClientTransactionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    clientHashId: string
    /**
     * This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    authCode?: string
    /**
     * This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    authCurrency?: string
    /**
     * This parameter can filter the transactions based on businessTransaction flag.
     * @type boolean
     * @memberof ClientTransactionsApiclientTransactions
     */
    businessTransaction?: boolean
    /**
     * This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    cardHashId?: string
    /**
     * This field contains the unique child customer identifier generated when new child customer created.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    childCustomerHashId?: string
    /**
     * Unique identifier generated with customer creation.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    customerHashId?: string
    /**
     * End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    endDate?: string
    /**
     * This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    mcc?: string
    /**
     * This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    merchantCategories?: string
    /**
     * This parameter can filter the transactions based on the merchant city field.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    merchantCity?: string
    /**
     * This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    merchantCountries?: string
    /**
     * This parameter can filter the transactions based on the merchant country field.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    merchantCountry?: string
    /**
     * This parameter can filter the transactions based on the merchant name field.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    merchantName?: string
    /**
     * The sort order for the results.
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ClientTransactionsApiclientTransactions
     */
    order?: 'ASC' | 'DESC'
    /**
     * This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @type number
     * @memberof ClientTransactionsApiclientTransactions
     */
    page?: number
    /**
     * This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    paymentInstrumentHashId?: string
    /**
     * The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    property?: string
    /**
     * This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    settlementDate?: string
    /**
     * This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    settlementStatus?: string
    /**
     * This will decide the number of elements per page. Typical values can be 1-20.
     * @type number
     * @memberof ClientTransactionsApiclientTransactions
     */
    size?: number
    /**
     * From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    startDate?: string
    /**
     * This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @type &#39;NULL&#39; | &#39;IN_PROGRESS&#39; | &#39;ACTION_REQUIRED&#39; | &#39;RFI_REQUESTED&#39; | &#39;RFI_RESPONDED&#39; | &#39;COMPLETED&#39; | &#39;ERROR&#39; | &#39;REJECT&#39; | &#39;EXPIRED&#39;
     * @memberof ClientTransactionsApiclientTransactions
     */
    status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED'
    /**
     * This parameter can filter the transactions based on systemTraceAuditNumber.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    systemTraceAuditNumber?: string
    /**
     * This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    tagKey?: string
    /**
     * This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    tagValue?: string
    /**
     * This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    transactionCurrency?: string
    /**
     * This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    transactionType?: string
    /**
     * This parameter can filter the transactions based on transactionsLabelsKey.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    transactionsLabelsKey?: string
    /**
     * This parameter can filter the transactions based on transactionsLabelsValue.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    transactionsLabelsValue?: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    walletHashId?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ClientTransactionsApiclientTransactions
     */
    xRequestId?: string
}

export class ObjectClientTransactionsApi {
    private api: ObservableClientTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: ClientTransactionsApiRequestFactory, responseProcessor?: ClientTransactionsApiResponseProcessor) {
        this.api = new ObservableClientTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch transaction details at the client level.
     * Client Transactions
     * @param param the request object
     */
    public clientTransactionsWithHttpInfo(param: ClientTransactionsApiClientTransactionsRequest, options?: Configuration): Promise<HttpInfo<ClientTransactionsResponseDTO>> {
        return this.api.clientTransactionsWithHttpInfo(param.clientHashId, param.authCode, param.authCurrency, param.businessTransaction, param.cardHashId, param.childCustomerHashId, param.customerHashId, param.endDate, param.mcc, param.merchantCategories, param.merchantCity, param.merchantCountries, param.merchantCountry, param.merchantName, param.order, param.page, param.paymentInstrumentHashId, param.property, param.settlementDate, param.settlementStatus, param.size, param.startDate, param.status, param.systemTraceAuditNumber, param.tagKey, param.tagValue, param.transactionCurrency, param.transactionType, param.transactionsLabelsKey, param.transactionsLabelsValue, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch transaction details at the client level.
     * Client Transactions
     * @param param the request object
     */
    public clientTransactions(param: ClientTransactionsApiClientTransactionsRequest, options?: Configuration): Promise<ClientTransactionsResponseDTO> {
        return this.api.clientTransactions(param.clientHashId, param.authCode, param.authCurrency, param.businessTransaction, param.cardHashId, param.childCustomerHashId, param.customerHashId, param.endDate, param.mcc, param.merchantCategories, param.merchantCity, param.merchantCountries, param.merchantCountry, param.merchantName, param.order, param.page, param.paymentInstrumentHashId, param.property, param.settlementDate, param.settlementStatus, param.size, param.startDate, param.status, param.systemTraceAuditNumber, param.tagKey, param.tagValue, param.transactionCurrency, param.transactionType, param.transactionsLabelsKey, param.transactionsLabelsValue, param.walletHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableControlsApi } from "./ObservableAPI";
import { ControlsApiRequestFactory, ControlsApiResponseProcessor} from "../apis/ControlsApi";

export interface ControlsApiGetCardLimitsRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApigetCardLimits
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApigetCardLimits
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApigetCardLimits
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApigetCardLimits
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApigetCardLimits
     */
    xRequestId?: string
}

export interface ControlsApiGetChannelRestrictionRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApigetChannelRestriction
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApigetChannelRestriction
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApigetChannelRestriction
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApigetChannelRestriction
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApigetChannelRestriction
     */
    xRequestId?: string
}

export interface ControlsApiGetMCCChannelRestrictionsRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApigetMCCChannelRestrictions
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApigetMCCChannelRestrictions
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApigetMCCChannelRestrictions
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApigetMCCChannelRestrictions
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApigetMCCChannelRestrictions
     */
    xRequestId?: string
}

export interface ControlsApiLimitsForAllCardsForACustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApilimitsForAllCardsForACustomer
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApilimitsForAllCardsForACustomer
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApilimitsForAllCardsForACustomer
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApilimitsForAllCardsForACustomer
     */
    xRequestId?: string
}

export interface ControlsApiSetCardLimitsRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApisetCardLimits
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApisetCardLimits
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApisetCardLimits
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApisetCardLimits
     */
    walletHashId: string
    /**
     * transactionLimitsDTO
     * @type TransactionLimitsDTO
     * @memberof ControlsApisetCardLimits
     */
    transactionLimitsDTO: TransactionLimitsDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApisetCardLimits
     */
    xRequestId?: string
}

export interface ControlsApiUpdateChannelRestrictionRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApiupdateChannelRestriction
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApiupdateChannelRestriction
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApiupdateChannelRestriction
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApiupdateChannelRestriction
     */
    walletHashId: string
    /**
     * channelActionRequestDTO
     * @type ChannelActionRequestDTO
     * @memberof ControlsApiupdateChannelRestriction
     */
    channelActionRequestDTO: ChannelActionRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApiupdateChannelRestriction
     */
    xRequestId?: string
}

export interface ControlsApiUpdateMCCChannelRestrictionsRequest {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    cardHashId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    walletHashId: string
    /**
     * The API will work as below: • If the status is Active and channelStrategy is WHITE_LIST, then the MCC in the list only gets processed and the rest will be blocked • If the status is Inactive then the MCC whitelist restriction will be Inactive. • If the status is Active and channelStrategy is BLACK_LIST then only the MCC in the list will get blocked and the rest will be allowed. • If the status is Inactive then the MCC blacklist restriction will be Inactive • Either blacklist or whitelist can be enabled at one point in time.
     * @type MCCRestrictionDTO
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    mCCRestrictionDTO: MCCRestrictionDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ControlsApiupdateMCCChannelRestrictions
     */
    xRequestId?: string
}

export class ObjectControlsApi {
    private api: ObservableControlsApi

    public constructor(configuration: Configuration, requestFactory?: ControlsApiRequestFactory, responseProcessor?: ControlsApiResponseProcessor) {
        this.api = new ObservableControlsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch card limits.
     * Fetch Card Limits
     * @param param the request object
     */
    public getCardLimitsWithHttpInfo(param: ControlsApiGetCardLimitsRequest, options?: Configuration): Promise<HttpInfo<TransactionLimitsDTO>> {
        return this.api.getCardLimitsWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch card limits.
     * Fetch Card Limits
     * @param param the request object
     */
    public getCardLimits(param: ControlsApiGetCardLimitsRequest, options?: Configuration): Promise<TransactionLimitsDTO> {
        return this.api.getCardLimits(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.
     * Get Channel Restriction
     * @param param the request object
     */
    public getChannelRestrictionWithHttpInfo(param: ControlsApiGetChannelRestrictionRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfTransactionChannelsResponseDTO>> {
        return this.api.getChannelRestrictionWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.
     * Get Channel Restriction
     * @param param the request object
     */
    public getChannelRestriction(param: ControlsApiGetChannelRestrictionRequest, options?: Configuration): Promise<ApiResponseOfTransactionChannelsResponseDTO> {
        return this.api.getChannelRestriction(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch MCC based channel restrictions at the card level.
     * Get MCC Channel Restrictions
     * @param param the request object
     */
    public getMCCChannelRestrictionsWithHttpInfo(param: ControlsApiGetMCCChannelRestrictionsRequest, options?: Configuration): Promise<HttpInfo<MCCRestrictionDTO>> {
        return this.api.getMCCChannelRestrictionsWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch MCC based channel restrictions at the card level.
     * Get MCC Channel Restrictions
     * @param param the request object
     */
    public getMCCChannelRestrictions(param: ControlsApiGetMCCChannelRestrictionsRequest, options?: Configuration): Promise<MCCRestrictionDTO> {
        return this.api.getMCCChannelRestrictions(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch card level limits for all cards belonging to a customer.
     * Limits For All Cards For A Customer
     * @param param the request object
     */
    public limitsForAllCardsForACustomerWithHttpInfo(param: ControlsApiLimitsForAllCardsForACustomerRequest, options?: Configuration): Promise<HttpInfo<TransactionWalletLimitsDTO>> {
        return this.api.limitsForAllCardsForACustomerWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch card level limits for all cards belonging to a customer.
     * Limits For All Cards For A Customer
     * @param param the request object
     */
    public limitsForAllCardsForACustomer(param: ControlsApiLimitsForAllCardsForACustomerRequest, options?: Configuration): Promise<TransactionWalletLimitsDTO> {
        return this.api.limitsForAllCardsForACustomer(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to set card limits.
     * Card Limits
     * @param param the request object
     */
    public setCardLimitsWithHttpInfo(param: ControlsApiSetCardLimitsRequest, options?: Configuration): Promise<HttpInfo<WalletApiResponse2>> {
        return this.api.setCardLimitsWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.transactionLimitsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to set card limits.
     * Card Limits
     * @param param the request object
     */
    public setCardLimits(param: ControlsApiSetCardLimitsRequest, options?: Configuration): Promise<WalletApiResponse2> {
        return this.api.setCardLimits(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.transactionLimitsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.
     * Update Channel Restriction
     * @param param the request object
     */
    public updateChannelRestrictionWithHttpInfo(param: ControlsApiUpdateChannelRestrictionRequest, options?: Configuration): Promise<HttpInfo<WalletApiResponseOfstring>> {
        return this.api.updateChannelRestrictionWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.channelActionRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.
     * Update Channel Restriction
     * @param param the request object
     */
    public updateChannelRestriction(param: ControlsApiUpdateChannelRestrictionRequest, options?: Configuration): Promise<WalletApiResponseOfstring> {
        return this.api.updateChannelRestriction(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.channelActionRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to create MCC based channel restrictions at the card level.
     * Update MCC Channel Restrictions
     * @param param the request object
     */
    public updateMCCChannelRestrictionsWithHttpInfo(param: ControlsApiUpdateMCCChannelRestrictionsRequest, options?: Configuration): Promise<HttpInfo<WalletApiResponse2>> {
        return this.api.updateMCCChannelRestrictionsWithHttpInfo(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.mCCRestrictionDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to create MCC based channel restrictions at the card level.
     * Update MCC Channel Restrictions
     * @param param the request object
     */
    public updateMCCChannelRestrictions(param: ControlsApiUpdateMCCChannelRestrictionsRequest, options?: Configuration): Promise<WalletApiResponse2> {
        return this.api.updateMCCChannelRestrictions(param.cardHashId, param.clientHashId, param.customerHashId, param.walletHashId, param.mCCRestrictionDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableConversionsApi } from "./ObservableAPI";
import { ConversionsApiRequestFactory, ConversionsApiResponseProcessor} from "../apis/ConversionsApi";

export interface ConversionsApiCancelConversionRequest {
    /**
     * Unique identifier of the client.
     * @type string
     * @memberof ConversionsApicancelConversion
     */
    clientHashId: string
    /**
     * Unique identifier of the customer.
     * @type string
     * @memberof ConversionsApicancelConversion
     */
    customerHashId: string
    /**
     * Unique identifier of the wallet.
     * @type string
     * @memberof ConversionsApicancelConversion
     */
    walletHashId: string
    /**
     * 
     * @type string
     * @memberof ConversionsApicancelConversion
     */
    conversionId: string
    /**
     * ConversionCancelRequest
     * @type ConversionCancelRequest
     * @memberof ConversionsApicancelConversion
     */
    conversionCancelRequest: ConversionCancelRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ConversionsApicancelConversion
     */
    xRequestId?: string
}

export interface ConversionsApiCreateConversionRequest {
    /**
     * Unique identifier of the client.
     * @type string
     * @memberof ConversionsApicreateConversion
     */
    clientHashId: string
    /**
     * Unique identifier of the customer.
     * @type string
     * @memberof ConversionsApicreateConversion
     */
    customerHashId: string
    /**
     * Unique identifier of the wallet.
     * @type string
     * @memberof ConversionsApicreateConversion
     */
    walletHashId: string
    /**
     * ConversionCreationRequest
     * @type ConversionCreationRequest
     * @memberof ConversionsApicreateConversion
     */
    conversionCreationRequest: ConversionCreationRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ConversionsApicreateConversion
     */
    xRequestId?: string
}

export interface ConversionsApiFetchConversionRequest {
    /**
     * Unique identifier of the client.
     * @type string
     * @memberof ConversionsApifetchConversion
     */
    clientHashId: string
    /**
     * Unique identifier of the customer.
     * @type string
     * @memberof ConversionsApifetchConversion
     */
    customerHashId: string
    /**
     * Unique identifier of the wallet.
     * @type string
     * @memberof ConversionsApifetchConversion
     */
    walletHashId: string
    /**
     * 
     * @type string
     * @memberof ConversionsApifetchConversion
     */
    conversionId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ConversionsApifetchConversion
     */
    xRequestId?: string
}

export class ObjectConversionsApi {
    private api: ObservableConversionsApi

    public constructor(configuration: Configuration, requestFactory?: ConversionsApiRequestFactory, responseProcessor?: ConversionsApiResponseProcessor) {
        this.api = new ObservableConversionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to cancel a conversion prior to the execution time.
     * Cancel Conversion
     * @param param the request object
     */
    public cancelConversionWithHttpInfo(param: ConversionsApiCancelConversionRequest, options?: Configuration): Promise<HttpInfo<ConversionCancelResponse>> {
        return this.api.cancelConversionWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionId, param.conversionCancelRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to cancel a conversion prior to the execution time.
     * Cancel Conversion
     * @param param the request object
     */
    public cancelConversion(param: ConversionsApiCancelConversionRequest, options?: Configuration): Promise<ConversionCancelResponse> {
        return this.api.cancelConversion(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionId, param.conversionCancelRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.
     * Create Conversion
     * @param param the request object
     */
    public createConversionWithHttpInfo(param: ConversionsApiCreateConversionRequest, options?: Configuration): Promise<HttpInfo<ConversionCreationResponse>> {
        return this.api.createConversionWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionCreationRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.
     * Create Conversion
     * @param param the request object
     */
    public createConversion(param: ConversionsApiCreateConversionRequest, options?: Configuration): Promise<ConversionCreationResponse> {
        return this.api.createConversion(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionCreationRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will retrieve an existing conversion with the conversionId.
     * Fetch Conversion by id
     * @param param the request object
     */
    public fetchConversionWithHttpInfo(param: ConversionsApiFetchConversionRequest, options?: Configuration): Promise<HttpInfo<ConversionCreationResponse>> {
        return this.api.fetchConversionWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will retrieve an existing conversion with the conversionId.
     * Fetch Conversion by id
     * @param param the request object
     */
    public fetchConversion(param: ConversionsApiFetchConversionRequest, options?: Configuration): Promise<ConversionCreationResponse> {
        return this.api.fetchConversion(param.clientHashId, param.customerHashId, param.walletHashId, param.conversionId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableConversionsPreviousVersionApi } from "./ObservableAPI";
import { ConversionsPreviousVersionApiRequestFactory, ConversionsPreviousVersionApiResponseProcessor} from "../apis/ConversionsPreviousVersionApi";

export interface ConversionsPreviousVersionApiBalanceTransferwithinWalletRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ConversionsPreviousVersionApibalanceTransferwithinWallet
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ConversionsPreviousVersionApibalanceTransferwithinWallet
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof ConversionsPreviousVersionApibalanceTransferwithinWallet
     */
    walletHashId: string
    /**
     * 
     * @type WalletTransferDto
     * @memberof ConversionsPreviousVersionApibalanceTransferwithinWallet
     */
    walletTransferDto: WalletTransferDto
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ConversionsPreviousVersionApibalanceTransferwithinWallet
     */
    xRequestId?: string
}

export class ObjectConversionsPreviousVersionApi {
    private api: ObservableConversionsPreviousVersionApi

    public constructor(configuration: Configuration, requestFactory?: ConversionsPreviousVersionApiRequestFactory, responseProcessor?: ConversionsPreviousVersionApiResponseProcessor) {
        this.api = new ObservableConversionsPreviousVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to transfer the balance from one currency to another within the same customer wallet.
     * Balance Transfer within Wallet
     * @param param the request object
     */
    public balanceTransferwithinWalletWithHttpInfo(param: ConversionsPreviousVersionApiBalanceTransferwithinWalletRequest, options?: Configuration): Promise<HttpInfo<WalletTransferResponseDto>> {
        return this.api.balanceTransferwithinWalletWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.walletTransferDto, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to transfer the balance from one currency to another within the same customer wallet.
     * Balance Transfer within Wallet
     * @param param the request object
     */
    public balanceTransferwithinWallet(param: ConversionsPreviousVersionApiBalanceTransferwithinWalletRequest, options?: Configuration): Promise<WalletTransferResponseDto> {
        return this.api.balanceTransferwithinWallet(param.clientHashId, param.customerHashId, param.walletHashId, param.walletTransferDto, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerAccountCorporateApi } from "./ObservableAPI";
import { CustomerAccountCorporateApiRequestFactory, CustomerAccountCorporateApiResponseProcessor} from "../apis/CustomerAccountCorporateApi";

export interface CustomerAccountCorporateApiExhaustiveCorporateDetailsUsingBusinessIDRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApiexhaustiveCorporateDetailsUsingBusinessID
     */
    clientHashId: string
    /**
     * This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer.
     * @type string
     * @memberof CustomerAccountCorporateApiexhaustiveCorporateDetailsUsingBusinessID
     */
    countryCode: string
    /**
     * This field accepts the search reference id of the corporate customer as received in response of public corporate details api.
     * @type string
     * @memberof CustomerAccountCorporateApiexhaustiveCorporateDetailsUsingBusinessID
     */
    searchReferenceId?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApiexhaustiveCorporateDetailsUsingBusinessID
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiFetchCorporateConstantsUsingGETRequest {
    /**
     * This field is used to select one of the category used during corporate customer onboarding. The API response will return list of allowed values for the selected category.
     * @type &#39;annualTurnover&#39; | &#39;businessType&#39; | &#39;countryName&#39; | &#39;countryOfOperation&#39; | &#39;documentType&#39; | &#39;intendedUseOfAccount&#39; | &#39;industrySector&#39; | &#39;listedExchange&#39; | &#39;position&#39; | &#39;regulatedTrustType&#39; | &#39;restrictedCountries&#39; | &#39;state&#39; | &#39;streetType&#39; | &#39;totalEmployees&#39; | &#39;unregulatedTrustType&#39; | &#39;rfiTemplates&#39; | &#39;estimatedMonthlyFunding&#39; | &#39;occupation&#39;
     * @memberof CustomerAccountCorporateApifetchCorporateConstantsUsingGET
     */
    category: 'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation'
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateConstantsUsingGET
     */
    clientHashId: string
    /**
     * The response will be filtered based on the value selected in this field for regulatory region of the customer.
     * @type &#39;AU&#39; | &#39;EU&#39; | &#39;SG&#39; | &#39;HK&#39; | &#39;UK&#39; | &#39;US&#39; | &#39;CA&#39;
     * @memberof CustomerAccountCorporateApifetchCorporateConstantsUsingGET
     */
    region: 'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA'
    /**
     * Type of Customer being onboarded.
     * @type &#39;INDIVIDUAL&#39; | &#39;CORPORATE&#39;
     * @memberof CustomerAccountCorporateApifetchCorporateConstantsUsingGET
     */
    type: 'INDIVIDUAL' | 'CORPORATE'
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateConstantsUsingGET
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiFetchCorporateCustomerRFIDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    clientHashId: string
    /**
     * This field contains unique case ID generated and returned in Onboard API response.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    caseId?: string
    /**
     * This field contains unique client ID generated and returned in Onboard API response.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    clientId?: string
    /**
     * This field contains the customerHashId, For example, 909ffc5f-c8ab-4df0-bcb2-111fcdd6f735.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    customerHashId?: string
    /**
     * This field contains the region code for which onboarding has been triggered, For example, AU, EU, UK, SG.
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    region?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApifetchCorporateCustomerRFIDetails
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiOnboardCorporateCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApionboardCorporateCustomer
     */
    clientHashId: string
    /**
     * corporateCustomerRequestsDTO
     * @type CorporateCustomerRequestsDTO
     * @memberof CustomerAccountCorporateApionboardCorporateCustomer
     */
    corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApionboardCorporateCustomer
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiPublicCorporateDetailsUsingBusinessIDRequest {
    /**
     * This field contains the business registration number of the entity.
     * @type string
     * @memberof CustomerAccountCorporateApipublicCorporateDetailsUsingBusinessID
     */
    businessRegistrationNumber: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApipublicCorporateDetailsUsingBusinessID
     */
    clientHashId: string
    /**
     * This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes).
     * @type string
     * @memberof CustomerAccountCorporateApipublicCorporateDetailsUsingBusinessID
     */
    countryCode: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApipublicCorporateDetailsUsingBusinessID
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiRegenerateKYCURLRequest {
    /**
     * The unique client hash id of customer
     * @type string
     * @memberof CustomerAccountCorporateApiregenerateKYCURL
     */
    clientHashId: string
    /**
     * The unique customer hash id of customer
     * @type string
     * @memberof CustomerAccountCorporateApiregenerateKYCURL
     */
    customerHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof CustomerAccountCorporateApiregenerateKYCURL
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiRespondtoRFIforCorporateCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApirespondtoRFIforCorporateCustomer
     */
    clientHashId: string
    /**
     * respondRfiRequestDTO
     * @type RespondRfiRequestDTO
     * @memberof CustomerAccountCorporateApirespondtoRFIforCorporateCustomer
     */
    respondRfiRequestDTO: RespondRfiRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApirespondtoRFIforCorporateCustomer
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiUpdateCorporateCustomerUsingPOSTRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApiupdateCorporateCustomerUsingPOST
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountCorporateApiupdateCorporateCustomerUsingPOST
     */
    customerHashId: string
    /**
     * updateCorporateCustomerRequestsDTO
     * @type CorporateCustomerRequestsDTO
     * @memberof CustomerAccountCorporateApiupdateCorporateCustomerUsingPOST
     */
    corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApiupdateCorporateCustomerUsingPOST
     */
    xRequestId?: string
}

export interface CustomerAccountCorporateApiUploadDocumentforCorporateCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountCorporateApiuploadDocumentforCorporateCustomer
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountCorporateApiuploadDocumentforCorporateCustomer
     */
    customerHashId: string
    /**
     * corporateComplianceDocumentRequestDTO
     * @type CorporateComplianceDocumentRequestDTO
     * @memberof CustomerAccountCorporateApiuploadDocumentforCorporateCustomer
     */
    corporateComplianceDocumentRequestDTO: CorporateComplianceDocumentRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountCorporateApiuploadDocumentforCorporateCustomer
     */
    xRequestId?: string
}

export class ObjectCustomerAccountCorporateApi {
    private api: ObservableCustomerAccountCorporateApi

    public constructor(configuration: Configuration, requestFactory?: CustomerAccountCorporateApiRequestFactory, responseProcessor?: CustomerAccountCorporateApiResponseProcessor) {
        this.api = new ObservableCustomerAccountCorporateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).
     * Exhaustive Corporate Details using Business ID
     * @param param the request object
     */
    public exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(param: CustomerAccountCorporateApiExhaustiveCorporateDetailsUsingBusinessIDRequest, options?: Configuration): Promise<HttpInfo<CorporateEnrichedDetailResponseDTO>> {
        return this.api.exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(param.clientHashId, param.countryCode, param.searchReferenceId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).
     * Exhaustive Corporate Details using Business ID
     * @param param the request object
     */
    public exhaustiveCorporateDetailsUsingBusinessID(param: CustomerAccountCorporateApiExhaustiveCorporateDetailsUsingBusinessIDRequest, options?: Configuration): Promise<CorporateEnrichedDetailResponseDTO> {
        return this.api.exhaustiveCorporateDetailsUsingBusinessID(param.clientHashId, param.countryCode, param.searchReferenceId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API returns the acceptable values for the `category` query param to be used as input in the corporate onboarding flow. Refer to the [Fetch Corporate Constants](doc:fetch-corporate-constants-api) user guide for details on usage instructions on this API.
     * Fetch corporate constants
     * @param param the request object
     */
    public fetchCorporateConstantsUsingGETWithHttpInfo(param: CustomerAccountCorporateApiFetchCorporateConstantsUsingGETRequest, options?: Configuration): Promise<HttpInfo<AddCategoryResponseDTO>> {
        return this.api.fetchCorporateConstantsUsingGETWithHttpInfo(param.category, param.clientHashId, param.region, param.type, param.xRequestId,  options).toPromise();
    }

    /**
     * This API returns the acceptable values for the `category` query param to be used as input in the corporate onboarding flow. Refer to the [Fetch Corporate Constants](doc:fetch-corporate-constants-api) user guide for details on usage instructions on this API.
     * Fetch corporate constants
     * @param param the request object
     */
    public fetchCorporateConstantsUsingGET(param: CustomerAccountCorporateApiFetchCorporateConstantsUsingGETRequest, options?: Configuration): Promise<AddCategoryResponseDTO> {
        return this.api.fetchCorporateConstantsUsingGET(param.category, param.clientHashId, param.region, param.type, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details of RFI raised as part of corporate customer onboarding.
     * Fetch Corporate Customer RFI Details
     * @param param the request object
     */
    public fetchCorporateCustomerRFIDetailsWithHttpInfo(param: CustomerAccountCorporateApiFetchCorporateCustomerRFIDetailsRequest, options?: Configuration): Promise<HttpInfo<ComplianceRFITemplateMetadataResponseDTO>> {
        return this.api.fetchCorporateCustomerRFIDetailsWithHttpInfo(param.clientHashId, param.caseId, param.clientId, param.customerHashId, param.region, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details of RFI raised as part of corporate customer onboarding.
     * Fetch Corporate Customer RFI Details
     * @param param the request object
     */
    public fetchCorporateCustomerRFIDetails(param: CustomerAccountCorporateApiFetchCorporateCustomerRFIDetailsRequest, options?: Configuration): Promise<ComplianceRFITemplateMetadataResponseDTO> {
        return this.api.fetchCorporateCustomerRFIDetails(param.clientHashId, param.caseId, param.clientId, param.customerHashId, param.region, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to onboard a corporate customer under existing client.
     * Onboard Corporate Customer
     * @param param the request object
     */
    public onboardCorporateCustomerWithHttpInfo(param: CustomerAccountCorporateApiOnboardCorporateCustomerRequest, options?: Configuration): Promise<HttpInfo<ProductCorporateCustomerResponseDTO>> {
        return this.api.onboardCorporateCustomerWithHttpInfo(param.clientHashId, param.corporateCustomerRequestsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to onboard a corporate customer under existing client.
     * Onboard Corporate Customer
     * @param param the request object
     */
    public onboardCorporateCustomer(param: CustomerAccountCorporateApiOnboardCorporateCustomerRequest, options?: Configuration): Promise<ProductCorporateCustomerResponseDTO> {
        return this.api.onboardCorporateCustomer(param.clientHashId, param.corporateCustomerRequestsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will help you to fetch the publicly available corporate details using business Id.
     * Public Corporate Details using Business ID
     * @param param the request object
     */
    public publicCorporateDetailsUsingBusinessIDWithHttpInfo(param: CustomerAccountCorporateApiPublicCorporateDetailsUsingBusinessIDRequest, options?: Configuration): Promise<HttpInfo<CorporateDetailResponseDTO>> {
        return this.api.publicCorporateDetailsUsingBusinessIDWithHttpInfo(param.businessRegistrationNumber, param.clientHashId, param.countryCode, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will help you to fetch the publicly available corporate details using business Id.
     * Public Corporate Details using Business ID
     * @param param the request object
     */
    public publicCorporateDetailsUsingBusinessID(param: CustomerAccountCorporateApiPublicCorporateDetailsUsingBusinessIDRequest, options?: Configuration): Promise<CorporateDetailResponseDTO> {
        return this.api.publicCorporateDetailsUsingBusinessID(param.businessRegistrationNumber, param.clientHashId, param.countryCode, param.xRequestId,  options).toPromise();
    }

    /**
     * This api will be used to regenerate kyc url
     * Regenerate KYC URL
     * @param param the request object
     */
    public regenerateKYCURLWithHttpInfo(param: CustomerAccountCorporateApiRegenerateKYCURLRequest, options?: Configuration): Promise<HttpInfo<RegenerateUrlResponse>> {
        return this.api.regenerateKYCURLWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This api will be used to regenerate kyc url
     * Regenerate KYC URL
     * @param param the request object
     */
    public regenerateKYCURL(param: CustomerAccountCorporateApiRegenerateKYCURLRequest, options?: Configuration): Promise<RegenerateUrlResponse> {
        return this.api.regenerateKYCURL(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI for Corporate Customer
     * @param param the request object
     */
    public respondtoRFIforCorporateCustomerWithHttpInfo(param: CustomerAccountCorporateApiRespondtoRFIforCorporateCustomerRequest, options?: Configuration): Promise<HttpInfo<RespondRfiResponseDTO>> {
        return this.api.respondtoRFIforCorporateCustomerWithHttpInfo(param.clientHashId, param.respondRfiRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI for Corporate Customer
     * @param param the request object
     */
    public respondtoRFIforCorporateCustomer(param: CustomerAccountCorporateApiRespondtoRFIforCorporateCustomerRequest, options?: Configuration): Promise<RespondRfiResponseDTO> {
        return this.api.respondtoRFIforCorporateCustomer(param.clientHashId, param.respondRfiRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a corporate customer under existing client.
     * Update Corporate Customer
     * @param param the request object
     */
    public updateCorporateCustomerUsingPOSTWithHttpInfo(param: CustomerAccountCorporateApiUpdateCorporateCustomerUsingPOSTRequest, options?: Configuration): Promise<HttpInfo<UpdateCorporateKybResponseDTO>> {
        return this.api.updateCorporateCustomerUsingPOSTWithHttpInfo(param.clientHashId, param.customerHashId, param.corporateCustomerRequestsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a corporate customer under existing client.
     * Update Corporate Customer
     * @param param the request object
     */
    public updateCorporateCustomerUsingPOST(param: CustomerAccountCorporateApiUpdateCorporateCustomerUsingPOSTRequest, options?: Configuration): Promise<UpdateCorporateKybResponseDTO> {
        return this.api.updateCorporateCustomerUsingPOST(param.clientHashId, param.customerHashId, param.corporateCustomerRequestsDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to upload document for corporate customers.
     * Upload Document for Corporate Customer
     * @param param the request object
     */
    public uploadDocumentforCorporateCustomerWithHttpInfo(param: CustomerAccountCorporateApiUploadDocumentforCorporateCustomerRequest, options?: Configuration): Promise<HttpInfo<CorporateComplianceDocumentResponseDTO>> {
        return this.api.uploadDocumentforCorporateCustomerWithHttpInfo(param.clientHashId, param.customerHashId, param.corporateComplianceDocumentRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to upload document for corporate customers.
     * Upload Document for Corporate Customer
     * @param param the request object
     */
    public uploadDocumentforCorporateCustomer(param: CustomerAccountCorporateApiUploadDocumentforCorporateCustomerRequest, options?: Configuration): Promise<CorporateComplianceDocumentResponseDTO> {
        return this.api.uploadDocumentforCorporateCustomer(param.clientHashId, param.customerHashId, param.corporateComplianceDocumentRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerAccountIndividualApi } from "./ObservableAPI";
import { CustomerAccountIndividualApiRequestFactory, CustomerAccountIndividualApiResponseProcessor} from "../apis/CustomerAccountIndividualApi";

export interface CustomerAccountIndividualApiAddCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomer
     */
    clientHashId: string
    /**
     * customerDataRequestDTO
     * @type CustomerDataRequestDTO
     * @memberof CustomerAccountIndividualApiaddCustomer
     */
    customerDataRequestDTO: CustomerDataRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomer
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiAddCustomerUsingMyInfoSGRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomerUsingMyInfoSG
     */
    clientHashId: string
    /**
     * customerDataExternalRequestDTO
     * @type CustomerDataExternalRequestDTO
     * @memberof CustomerAccountIndividualApiaddCustomerUsingMyInfoSG
     */
    customerDataExternalRequestDTO: CustomerDataExternalRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomerUsingMyInfoSG
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiAddCustomerUsingeDocumentVerificationRequest {
    /**
     * clientHashId
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomerUsingeDocumentVerification
     */
    clientHashId: string
    /**
     * requestDTO
     * @type EVerifyCustomerRegistrationRequestDTO
     * @memberof CustomerAccountIndividualApiaddCustomerUsingeDocumentVerification
     */
    eVerifyCustomerRegistrationRequestDTO: EVerifyCustomerRegistrationRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApiaddCustomerUsingeDocumentVerification
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiCustomerUpdateRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApicustomerUpdate
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountIndividualApicustomerUpdate
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApicustomerUpdate
     */
    xRequestId?: string
    /**
     * Customer update request
     * @type UpdateCustomerDTO
     * @memberof CustomerAccountIndividualApicustomerUpdate
     */
    updateCustomerDTO?: UpdateCustomerDTO
}

export interface CustomerAccountIndividualApiFetchIndividualCustomerRFIDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApifetchIndividualCustomerRFIDetails
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountIndividualApifetchIndividualCustomerRFIDetails
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApifetchIndividualCustomerRFIDetails
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiRespondtoRFIRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApirespondtoRFI
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountIndividualApirespondtoRFI
     */
    customerHashId: string
    /**
     * RFI response object
     * @type UploadRfiDocumentRequestDto
     * @memberof CustomerAccountIndividualApirespondtoRFI
     */
    uploadRfiDocumentRequestDto: UploadRfiDocumentRequestDto
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApirespondtoRFI
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiUnifiedAddCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApiunifiedAddCustomer
     */
    clientHashId: string
    /**
     * Add individual customer
     * @type UnifiedAddCustomerRequest
     * @memberof CustomerAccountIndividualApiunifiedAddCustomer
     */
    requestDto: UnifiedAddCustomerRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApiunifiedAddCustomer
     */
    xRequestId?: string
}

export interface CustomerAccountIndividualApiUploadDocumentRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerAccountIndividualApiuploadDocument
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerAccountIndividualApiuploadDocument
     */
    customerHashId: string
    /**
     * Compliance documents
     * @type ComplianceDocumentDTO
     * @memberof CustomerAccountIndividualApiuploadDocument
     */
    complianceDocumentDTO: ComplianceDocumentDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerAccountIndividualApiuploadDocument
     */
    xRequestId?: string
}

export class ObjectCustomerAccountIndividualApi {
    private api: ObservableCustomerAccountIndividualApi

    public constructor(configuration: Configuration, requestFactory?: CustomerAccountIndividualApiRequestFactory, responseProcessor?: CustomerAccountIndividualApiResponseProcessor) {
        this.api = new ObservableCustomerAccountIndividualApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to register a customer with a wallet in NIUM\'s cards platform.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer
     * @param param the request object
     */
    public addCustomerWithHttpInfo(param: CustomerAccountIndividualApiAddCustomerRequest, options?: Configuration): Promise<HttpInfo<CustomerDetailResponseDTO>> {
        return this.api.addCustomerWithHttpInfo(param.clientHashId, param.customerDataRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to register a customer with a wallet in NIUM\'s cards platform.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer
     * @param param the request object
     */
    public addCustomer(param: CustomerAccountIndividualApiAddCustomerRequest, options?: Configuration): Promise<CustomerDetailResponseDTO> {
        return this.api.addCustomer(param.clientHashId, param.customerDataRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will create customers using minimal data, the rest of the partial data will be pulled via MyInfo etc. which is locked and cannot be edited and further rest fields can be updated using Customer Update API.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using MyInfo [SG]
     * @param param the request object
     */
    public addCustomerUsingMyInfoSGWithHttpInfo(param: CustomerAccountIndividualApiAddCustomerUsingMyInfoSGRequest, options?: Configuration): Promise<HttpInfo<CustomerDataExternalResponseDTO>> {
        return this.api.addCustomerUsingMyInfoSGWithHttpInfo(param.clientHashId, param.customerDataExternalRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will create customers using minimal data, the rest of the partial data will be pulled via MyInfo etc. which is locked and cannot be edited and further rest fields can be updated using Customer Update API.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using MyInfo [SG]
     * @param param the request object
     */
    public addCustomerUsingMyInfoSG(param: CustomerAccountIndividualApiAddCustomerUsingMyInfoSGRequest, options?: Configuration): Promise<CustomerDataExternalResponseDTO> {
        return this.api.addCustomerUsingMyInfoSG(param.clientHashId, param.customerDataExternalRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     *   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using e-Document Verification
     * @param param the request object
     */
    public addCustomerUsingeDocumentVerificationWithHttpInfo(param: CustomerAccountIndividualApiAddCustomerUsingeDocumentVerificationRequest, options?: Configuration): Promise<HttpInfo<AddCustomerResponseDTO>> {
        return this.api.addCustomerUsingeDocumentVerificationWithHttpInfo(param.clientHashId, param.eVerifyCustomerRegistrationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     *   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using e-Document Verification
     * @param param the request object
     */
    public addCustomerUsingeDocumentVerification(param: CustomerAccountIndividualApiAddCustomerUsingeDocumentVerificationRequest, options?: Configuration): Promise<AddCustomerResponseDTO> {
        return this.api.addCustomerUsingeDocumentVerification(param.clientHashId, param.eVerifyCustomerRegistrationRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update the customer details subject to the following constraints: 1. If compliance status equals to COMPLETED. You can only update email, mobile, delivery address details, and correspondence address details. You may NOT update the billing address. 2. In other cases, you may update any of the fields. At least one key-value pair is needed in the request body of this API.
     * Customer Update
     * @param param the request object
     */
    public customerUpdateWithHttpInfo(param: CustomerAccountIndividualApiCustomerUpdateRequest, options?: Configuration): Promise<HttpInfo<UpdateCustomerResponseDTO>> {
        return this.api.customerUpdateWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId, param.updateCustomerDTO,  options).toPromise();
    }

    /**
     * This API allows you to update the customer details subject to the following constraints: 1. If compliance status equals to COMPLETED. You can only update email, mobile, delivery address details, and correspondence address details. You may NOT update the billing address. 2. In other cases, you may update any of the fields. At least one key-value pair is needed in the request body of this API.
     * Customer Update
     * @param param the request object
     */
    public customerUpdate(param: CustomerAccountIndividualApiCustomerUpdateRequest, options?: Configuration): Promise<UpdateCustomerResponseDTO> {
        return this.api.customerUpdate(param.clientHashId, param.customerHashId, param.xRequestId, param.updateCustomerDTO,  options).toPromise();
    }

    /**
     * This API allows you to fetch details of RFI raised as part of Individual customer onboarding.
     * Fetch Individual Customer RFI Details
     * @param param the request object
     */
    public fetchIndividualCustomerRFIDetailsWithHttpInfo(param: CustomerAccountIndividualApiFetchIndividualCustomerRFIDetailsRequest, options?: Configuration): Promise<HttpInfo<Array<CustomerRfiDetailsResponse>>> {
        return this.api.fetchIndividualCustomerRFIDetailsWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details of RFI raised as part of Individual customer onboarding.
     * Fetch Individual Customer RFI Details
     * @param param the request object
     */
    public fetchIndividualCustomerRFIDetails(param: CustomerAccountIndividualApiFetchIndividualCustomerRFIDetailsRequest, options?: Configuration): Promise<Array<CustomerRfiDetailsResponse>> {
        return this.api.fetchIndividualCustomerRFIDetails(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised by NIUM compliance team. You may use this API to respond to an RFI for data or documents when the customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI
     * @param param the request object
     */
    public respondtoRFIWithHttpInfo(param: CustomerAccountIndividualApiRespondtoRFIRequest, options?: Configuration): Promise<HttpInfo<UploadRfiDetailsResponseDto>> {
        return this.api.respondtoRFIWithHttpInfo(param.clientHashId, param.customerHashId, param.uploadRfiDocumentRequestDto, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised by NIUM compliance team. You may use this API to respond to an RFI for data or documents when the customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI
     * @param param the request object
     */
    public respondtoRFI(param: CustomerAccountIndividualApiRespondtoRFIRequest, options?: Configuration): Promise<UploadRfiDetailsResponseDto> {
        return this.api.respondtoRFI(param.clientHashId, param.customerHashId, param.uploadRfiDocumentRequestDto, param.xRequestId,  options).toPromise();
    }

    /**
     * This API onboards customers based on their client configuration and preference.   >ℹ️ INFO   The \'childMustHaveParent\' setting can be optionally set to \'true\' for Payroll and Spend and Management clients, and it should be set to \'false\' for all other clients.   For details, see [Parent-child hierarchy](doc:parent-child-hierarchy).
     * Unified Add Customer
     * @param param the request object
     */
    public unifiedAddCustomerWithHttpInfo(param: CustomerAccountIndividualApiUnifiedAddCustomerRequest, options?: Configuration): Promise<HttpInfo<AddCustomerResponseDTO>> {
        return this.api.unifiedAddCustomerWithHttpInfo(param.clientHashId, param.requestDto, param.xRequestId,  options).toPromise();
    }

    /**
     * This API onboards customers based on their client configuration and preference.   >ℹ️ INFO   The \'childMustHaveParent\' setting can be optionally set to \'true\' for Payroll and Spend and Management clients, and it should be set to \'false\' for all other clients.   For details, see [Parent-child hierarchy](doc:parent-child-hierarchy).
     * Unified Add Customer
     * @param param the request object
     */
    public unifiedAddCustomer(param: CustomerAccountIndividualApiUnifiedAddCustomerRequest, options?: Configuration): Promise<AddCustomerResponseDTO> {
        return this.api.unifiedAddCustomer(param.clientHashId, param.requestDto, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows to upload documents necessary for customer onboarding. Refer to the RFI details on required documents.
     * Upload Document
     * @param param the request object
     */
    public uploadDocumentWithHttpInfo(param: CustomerAccountIndividualApiUploadDocumentRequest, options?: Configuration): Promise<HttpInfo<ComplianceDocumentResponseDTO>> {
        return this.api.uploadDocumentWithHttpInfo(param.clientHashId, param.customerHashId, param.complianceDocumentDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows to upload documents necessary for customer onboarding. Refer to the RFI details on required documents.
     * Upload Document
     * @param param the request object
     */
    public uploadDocument(param: CustomerAccountIndividualApiUploadDocumentRequest, options?: Configuration): Promise<ComplianceDocumentResponseDTO> {
        return this.api.uploadDocument(param.clientHashId, param.customerHashId, param.complianceDocumentDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerFeesApi } from "./ObservableAPI";
import { CustomerFeesApiRequestFactory, CustomerFeesApiResponseProcessor} from "../apis/CustomerFeesApi";

export interface CustomerFeesApiChargeFeeRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFeesApichargeFee
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFeesApichargeFee
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerFeesApichargeFee
     */
    walletHashId: string
    /**
     * customFeeRequestDTO
     * @type CustomFeeRequestDTO
     * @memberof CustomerFeesApichargeFee
     */
    customFeeRequestDTO: CustomFeeRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFeesApichargeFee
     */
    xRequestId?: string
}

export class ObjectCustomerFeesApi {
    private api: ObservableCustomerFeesApi

    public constructor(configuration: Configuration, requestFactory?: CustomerFeesApiRequestFactory, responseProcessor?: CustomerFeesApiResponseProcessor) {
        this.api = new ObservableCustomerFeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.
     * Charge Fee
     * @param param the request object
     */
    public chargeFeeWithHttpInfo(param: CustomerFeesApiChargeFeeRequest, options?: Configuration): Promise<HttpInfo<CustomFeeResponseDTO>> {
        return this.api.chargeFeeWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.customFeeRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.
     * Charge Fee
     * @param param the request object
     */
    public chargeFee(param: CustomerFeesApiChargeFeeRequest, options?: Configuration): Promise<CustomFeeResponseDTO> {
        return this.api.chargeFee(param.clientHashId, param.customerHashId, param.walletHashId, param.customFeeRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerFundingApi } from "./ObservableAPI";
import { CustomerFundingApiRequestFactory, CustomerFundingApiResponseProcessor} from "../apis/CustomerFundingApi";

export interface CustomerFundingApiAddFundingInstrumentRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApiaddFundingInstrument
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApiaddFundingInstrument
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerFundingApiaddFundingInstrument
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApiaddFundingInstrument
     */
    xRequestId?: string
    /**
     * Add a new funding instrument
     * @type CustomerLinkAccountRequest
     * @memberof CustomerFundingApiaddFundingInstrument
     */
    customerLinkAccountRequest?: CustomerLinkAccountRequest
}

export interface CustomerFundingApiConfirmFundingInstrumentIdRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApiconfirmFundingInstrumentId
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApiconfirmFundingInstrumentId
     */
    customerHashId: string
    /**
     * This field is the unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit.
     * @type string
     * @memberof CustomerFundingApiconfirmFundingInstrumentId
     */
    fundingInstrumentId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApiconfirmFundingInstrumentId
     */
    xRequestId?: string
    /**
     * Confirm funding instrument
     * @type ConfirmFundingInstrumentRequestDTO
     * @memberof CustomerFundingApiconfirmFundingInstrumentId
     */
    confirmFundingInstrumentRequestDTO?: ConfirmFundingInstrumentRequestDTO
}

export interface CustomerFundingApiDeleteFundinginstrumentRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApideleteFundinginstrument
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApideleteFundinginstrument
     */
    customerHashId: string
    /**
     * The unique 36-character alphanumeric identifier of a funding instrument.
     * @type string
     * @memberof CustomerFundingApideleteFundinginstrument
     */
    fundingInstrumentId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApideleteFundinginstrument
     */
    xRequestId?: string
}

export interface CustomerFundingApiFundWalletRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApifundWallet
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApifundWallet
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerFundingApifundWallet
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApifundWallet
     */
    xRequestId?: string
    /**
     * Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards.
     * @type WalletFundDTO
     * @memberof CustomerFundingApifundWallet
     */
    walletFundDTO?: WalletFundDTO
}

export interface CustomerFundingApiGetFundingInstrumentDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentDetails
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentDetails
     */
    customerHashId: string
    /**
     * Unique 36-character funding instrument identifier.
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentDetails
     */
    fundingInstrumentId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentDetails
     */
    xRequestId?: string
}

export interface CustomerFundingApiGetFundingInstrumentListRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentList
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentList
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerFundingApigetFundingInstrumentList
     */
    xRequestId?: string
}

export class ObjectCustomerFundingApi {
    private api: ObservableCustomerFundingApi

    public constructor(configuration: Configuration, requestFactory?: CustomerFundingApiRequestFactory, responseProcessor?: CustomerFundingApiResponseProcessor) {
        this.api = new ObservableCustomerFundingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to link account
     * Add funding instrument
     * @param param the request object
     */
    public addFundingInstrumentWithHttpInfo(param: CustomerFundingApiAddFundingInstrumentRequest, options?: Configuration): Promise<HttpInfo<LinkAccountResponse>> {
        return this.api.addFundingInstrumentWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId, param.customerLinkAccountRequest,  options).toPromise();
    }

    /**
     * This API allows you to link account
     * Add funding instrument
     * @param param the request object
     */
    public addFundingInstrument(param: CustomerFundingApiAddFundingInstrumentRequest, options?: Configuration): Promise<LinkAccountResponse> {
        return this.api.addFundingInstrument(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId, param.customerLinkAccountRequest,  options).toPromise();
    }

    /**
     * This API allows you to confirm funding instrument id
     * Confirm funding instrument
     * @param param the request object
     */
    public confirmFundingInstrumentIdWithHttpInfo(param: CustomerFundingApiConfirmFundingInstrumentIdRequest, options?: Configuration): Promise<HttpInfo<AccountStatusResponse>> {
        return this.api.confirmFundingInstrumentIdWithHttpInfo(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId, param.confirmFundingInstrumentRequestDTO,  options).toPromise();
    }

    /**
     * This API allows you to confirm funding instrument id
     * Confirm funding instrument
     * @param param the request object
     */
    public confirmFundingInstrumentId(param: CustomerFundingApiConfirmFundingInstrumentIdRequest, options?: Configuration): Promise<AccountStatusResponse> {
        return this.api.confirmFundingInstrumentId(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId, param.confirmFundingInstrumentRequestDTO,  options).toPromise();
    }

    /**
     * This API allows you to delete a specific funding instrument based on the fundingInstrumentId.
     * Delete Funding Instrument
     * @param param the request object
     */
    public deleteFundinginstrumentWithHttpInfo(param: CustomerFundingApiDeleteFundinginstrumentRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfstring>> {
        return this.api.deleteFundinginstrumentWithHttpInfo(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to delete a specific funding instrument based on the fundingInstrumentId.
     * Delete Funding Instrument
     * @param param the request object
     */
    public deleteFundinginstrument(param: CustomerFundingApiDeleteFundinginstrumentRequest, options?: Configuration): Promise<ApiResponseOfstring> {
        return this.api.deleteFundinginstrument(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 
     * Fund Wallet
     * @param param the request object
     */
    public fundWalletWithHttpInfo(param: CustomerFundingApiFundWalletRequest, options?: Configuration): Promise<HttpInfo<WalletFundResponseDTO>> {
        return this.api.fundWalletWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId, param.walletFundDTO,  options).toPromise();
    }

    /**
     * This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 
     * Fund Wallet
     * @param param the request object
     */
    public fundWallet(param: CustomerFundingApiFundWalletRequest, options?: Configuration): Promise<WalletFundResponseDTO> {
        return this.api.fundWallet(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId, param.walletFundDTO,  options).toPromise();
    }

    /**
     * Get Funding instrument details
     * Get Funding instrument details
     * @param param the request object
     */
    public getFundingInstrumentDetailsWithHttpInfo(param: CustomerFundingApiGetFundingInstrumentDetailsRequest, options?: Configuration): Promise<HttpInfo<AccountStatusResponse>> {
        return this.api.getFundingInstrumentDetailsWithHttpInfo(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId,  options).toPromise();
    }

    /**
     * Get Funding instrument details
     * Get Funding instrument details
     * @param param the request object
     */
    public getFundingInstrumentDetails(param: CustomerFundingApiGetFundingInstrumentDetailsRequest, options?: Configuration): Promise<AccountStatusResponse> {
        return this.api.getFundingInstrumentDetails(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the funding instruments that have been registered for a customer.
     * Get Funding Instrument List
     * @param param the request object
     */
    public getFundingInstrumentListWithHttpInfo(param: CustomerFundingApiGetFundingInstrumentListRequest, options?: Configuration): Promise<HttpInfo<Array<WalletFundingInstrumentsResponseDTO>>> {
        return this.api.getFundingInstrumentListWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the funding instruments that have been registered for a customer.
     * Get Funding Instrument List
     * @param param the request object
     */
    public getFundingInstrumentList(param: CustomerFundingApiGetFundingInstrumentListRequest, options?: Configuration): Promise<Array<WalletFundingInstrumentsResponseDTO>> {
        return this.api.getFundingInstrumentList(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerManagementApi } from "./ObservableAPI";
import { CustomerManagementApiRequestFactory, CustomerManagementApiResponseProcessor} from "../apis/CustomerManagementApi";

export interface CustomerManagementApiAccountStatementRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    customerHashId: string
    /**
     * End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    endDate: string
    /**
     * From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    startDate: string
    /**
     * This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    currencies?: string
    /**
     * This field accepts the file type of the account statement to be generated.
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    fileType?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApiaccountStatement
     */
    xRequestId?: string
}

export interface CustomerManagementApiBlockUnblockCustomerRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApiblockUnblockCustomer
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerManagementApiblockUnblockCustomer
     */
    customerHashId: string
    /**
     * blockCustomerRequestDTO
     * @type BlockCustomerRequestDTO
     * @memberof CustomerManagementApiblockUnblockCustomer
     */
    blockCustomerRequestDTO: BlockCustomerRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApiblockUnblockCustomer
     */
    xRequestId?: string
}

export interface CustomerManagementApiCustomerDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApicustomerDetails
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerManagementApicustomerDetails
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApicustomerDetails
     */
    xRequestId?: string
}

export interface CustomerManagementApiCustomerDetailsV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApicustomerDetailsV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerManagementApicustomerDetailsV2
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApicustomerDetailsV2
     */
    xRequestId?: string
}

export interface CustomerManagementApiCustomerListRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    clientHashId: string
    /**
     * This field accepts the email ID of the customer.
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    email?: string
    /**
     * This field accepts the mobile number of a customer--digits only--without the country code.
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    mobile?: string
    /**
     * This field accepts the order which can be ASC or DESC.
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof CustomerManagementApicustomerList
     */
    order?: 'ASC' | 'DESC'
    /**
     * This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    page?: string
    /**
     * This field accepts the number of elements per page.
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    size?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApicustomerList
     */
    xRequestId?: string
}

export interface CustomerManagementApiCustomerListV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    clientHashId: string
    /**
     * This field accepts the business registration number of corporate customer.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    businessRegistrationNumber?: string
    /**
     * This field accepts the email ID of the customer.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    email?: string
    /**
     * This field accepts the mobile number of a customer without the country code.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    mobile?: string
    /**
     * This field accepts the order which can be ASC or DESC.
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof CustomerManagementApicustomerListV2
     */
    order?: 'ASC' | 'DESC'
    /**
     * This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    page?: string
    /**
     * This field accepts the number of elements per page.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    size?: string
    /**
     * This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    tagKey?: string
    /**
     * This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    tagValue?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApicustomerListV2
     */
    xRequestId?: string
}

export interface CustomerManagementApiCustomerListV3Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    clientHashId: string
    /**
     * This field accepts the business registration number of corporate customer.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    businessRegistrationNumber?: string
    /**
     * This field accepts the type of customer.
     * @type &#39;INDIVIDUAL&#39; | &#39;CORPORATE&#39;
     * @memberof CustomerManagementApicustomerListV3
     */
    customerType?: 'INDIVIDUAL' | 'CORPORATE'
    /**
     * This field accepts the email ID of the customer.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    email?: string
    /**
     * This field accepts the mobile number of a customer without the country code.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    mobile?: string
    /**
     * This field accepts the order which can be ASC or DESC.
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof CustomerManagementApicustomerListV3
     */
    order?: 'ASC' | 'DESC'
    /**
     * This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    page?: string
    /**
     * This field contains the unique parent customer identifier generated at the time of customer creation.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    parentCustomerHashId?: string
    /**
     * This field accepts the number of elements per page.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    size?: string
    /**
     * This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    tagKey?: string
    /**
     * This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    tagValue?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApicustomerListV3
     */
    xRequestId?: string
}

export interface CustomerManagementApiManageCustomerTagsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerManagementApimanageCustomerTags
     */
    clientHashId: string
    /**
     * Unique customer identifier generated during customer creation.
     * @type string
     * @memberof CustomerManagementApimanageCustomerTags
     */
    customerHashId: string
    /**
     * tags
     * @type CustomerClientTagsRequestDTO
     * @memberof CustomerManagementApimanageCustomerTags
     */
    customerClientTagsRequestDTO: CustomerClientTagsRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerManagementApimanageCustomerTags
     */
    xRequestId?: string
}

export class ObjectCustomerManagementApi {
    private api: ObservableCustomerManagementApi

    public constructor(configuration: Configuration, requestFactory?: CustomerManagementApiRequestFactory, responseProcessor?: CustomerManagementApiResponseProcessor) {
        this.api = new ObservableCustomerManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to download an account statement.
     * Account Statement
     * @param param the request object
     */
    public accountStatementWithHttpInfo(param: CustomerManagementApiAccountStatementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.accountStatementWithHttpInfo(param.clientHashId, param.customerHashId, param.endDate, param.startDate, param.currencies, param.fileType, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to download an account statement.
     * Account Statement
     * @param param the request object
     */
    public accountStatement(param: CustomerManagementApiAccountStatementRequest, options?: Configuration): Promise<void> {
        return this.api.accountStatement(param.clientHashId, param.customerHashId, param.endDate, param.startDate, param.currencies, param.fileType, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to permanently block or temporarily block/unblock a customer.
     * Block/Unblock Customer
     * @param param the request object
     */
    public blockUnblockCustomerWithHttpInfo(param: CustomerManagementApiBlockUnblockCustomerRequest, options?: Configuration): Promise<HttpInfo<CustomerApiError>> {
        return this.api.blockUnblockCustomerWithHttpInfo(param.clientHashId, param.customerHashId, param.blockCustomerRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to permanently block or temporarily block/unblock a customer.
     * Block/Unblock Customer
     * @param param the request object
     */
    public blockUnblockCustomer(param: CustomerManagementApiBlockUnblockCustomerRequest, options?: Configuration): Promise<CustomerApiError> {
        return this.api.blockUnblockCustomer(param.clientHashId, param.customerHashId, param.blockCustomerRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer Details
     * @param param the request object
     */
    public customerDetailsWithHttpInfo(param: CustomerManagementApiCustomerDetailsRequest, options?: Configuration): Promise<HttpInfo<CustomerDetailResponse>> {
        return this.api.customerDetailsWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer Details
     * @param param the request object
     */
    public customerDetails(param: CustomerManagementApiCustomerDetailsRequest, options?: Configuration): Promise<CustomerDetailResponse> {
        return this.api.customerDetails(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details for a specific customer.
     * Customer Details V2
     * @param param the request object
     */
    public customerDetailsV2WithHttpInfo(param: CustomerManagementApiCustomerDetailsV2Request, options?: Configuration): Promise<HttpInfo<CustomerDetailsResponseV2DTO>> {
        return this.api.customerDetailsV2WithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch details for a specific customer.
     * Customer Details V2
     * @param param the request object
     */
    public customerDetailsV2(param: CustomerManagementApiCustomerDetailsV2Request, options?: Configuration): Promise<CustomerDetailsResponseV2DTO> {
        return this.api.customerDetailsV2(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer List
     * @param param the request object
     */
    public customerListWithHttpInfo(param: CustomerManagementApiCustomerListRequest, options?: Configuration): Promise<HttpInfo<Array<CustomerDetailResponse>>> {
        return this.api.customerListWithHttpInfo(param.clientHashId, param.email, param.mobile, param.order, param.page, param.size, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer List
     * @param param the request object
     */
    public customerList(param: CustomerManagementApiCustomerListRequest, options?: Configuration): Promise<Array<CustomerDetailResponse>> {
        return this.api.customerList(param.clientHashId, param.email, param.mobile, param.order, param.page, param.size, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V2
     * @param param the request object
     */
    public customerListV2WithHttpInfo(param: CustomerManagementApiCustomerListV2Request, options?: Configuration): Promise<HttpInfo<PaginatedCustomerDetailsResponseV2DTO>> {
        return this.api.customerListV2WithHttpInfo(param.clientHashId, param.businessRegistrationNumber, param.email, param.mobile, param.order, param.page, param.size, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V2
     * @param param the request object
     */
    public customerListV2(param: CustomerManagementApiCustomerListV2Request, options?: Configuration): Promise<PaginatedCustomerDetailsResponseV2DTO> {
        return this.api.customerListV2(param.clientHashId, param.businessRegistrationNumber, param.email, param.mobile, param.order, param.page, param.size, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V3
     * @param param the request object
     */
    public customerListV3WithHttpInfo(param: CustomerManagementApiCustomerListV3Request, options?: Configuration): Promise<HttpInfo<PaginatedResponseDTOCustomerDetailsResponseV2DTO>> {
        return this.api.customerListV3WithHttpInfo(param.clientHashId, param.businessRegistrationNumber, param.customerType, param.email, param.mobile, param.order, param.page, param.parentCustomerHashId, param.size, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V3
     * @param param the request object
     */
    public customerListV3(param: CustomerManagementApiCustomerListV3Request, options?: Configuration): Promise<PaginatedResponseDTOCustomerDetailsResponseV2DTO> {
        return this.api.customerListV3(param.clientHashId, param.businessRegistrationNumber, param.customerType, param.email, param.mobile, param.order, param.page, param.parentCustomerHashId, param.size, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, and delete customer tags.
     * Manage Customer Tags
     * @param param the request object
     */
    public manageCustomerTagsWithHttpInfo(param: CustomerManagementApiManageCustomerTagsRequest, options?: Configuration): Promise<HttpInfo<CustomerClientTagsResponseDTO>> {
        return this.api.manageCustomerTagsWithHttpInfo(param.clientHashId, param.customerHashId, param.customerClientTagsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, and delete customer tags.
     * Manage Customer Tags
     * @param param the request object
     */
    public manageCustomerTags(param: CustomerManagementApiManageCustomerTagsRequest, options?: Configuration): Promise<CustomerClientTagsResponseDTO> {
        return this.api.manageCustomerTags(param.clientHashId, param.customerHashId, param.customerClientTagsRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerTermsAndConditionsApi } from "./ObservableAPI";
import { CustomerTermsAndConditionsApiRequestFactory, CustomerTermsAndConditionsApiResponseProcessor} from "../apis/CustomerTermsAndConditionsApi";

export interface CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerTermsAndConditionsApiacceptTermsandConditions
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerTermsAndConditionsApiacceptTermsandConditions
     */
    customerHashId: string
    /**
     * termsAndConditionsRequestDTO
     * @type TermsAndConditionsRequestDTO
     * @memberof CustomerTermsAndConditionsApiacceptTermsandConditions
     */
    termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerTermsAndConditionsApiacceptTermsandConditions
     */
    xRequestId?: string
}

export interface CustomerTermsAndConditionsApiTermsandConditionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerTermsAndConditionsApitermsandConditions
     */
    clientHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerTermsAndConditionsApitermsandConditions
     */
    xRequestId?: string
}

export class ObjectCustomerTermsAndConditionsApi {
    private api: ObservableCustomerTermsAndConditionsApi

    public constructor(configuration: Configuration, requestFactory?: CustomerTermsAndConditionsApiRequestFactory, responseProcessor?: CustomerTermsAndConditionsApiResponseProcessor) {
        this.api = new ObservableCustomerTermsAndConditionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API updates the Terms and Conditions acceptance status for a customer
     * Accept Terms and Conditions
     * @param param the request object
     */
    public acceptTermsandConditionsWithHttpInfo(param: CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest, options?: Configuration): Promise<HttpInfo<TermsAndConditionsAcceptResponseDTO>> {
        return this.api.acceptTermsandConditionsWithHttpInfo(param.clientHashId, param.customerHashId, param.termsAndConditionsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API updates the Terms and Conditions acceptance status for a customer
     * Accept Terms and Conditions
     * @param param the request object
     */
    public acceptTermsandConditions(param: CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest, options?: Configuration): Promise<TermsAndConditionsAcceptResponseDTO> {
        return this.api.acceptTermsandConditions(param.clientHashId, param.customerHashId, param.termsAndConditionsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
     * Terms and Conditions
     * @param param the request object
     */
    public termsandConditionsWithHttpInfo(param: CustomerTermsAndConditionsApiTermsandConditionsRequest, options?: Configuration): Promise<HttpInfo<TermsAndConditionsResponseDTO>> {
        return this.api.termsandConditionsWithHttpInfo(param.clientHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
     * Terms and Conditions
     * @param param the request object
     */
    public termsandConditions(param: CustomerTermsAndConditionsApiTermsandConditionsRequest, options?: Configuration): Promise<TermsAndConditionsResponseDTO> {
        return this.api.termsandConditions(param.clientHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerVirtualAccountsApi } from "./ObservableAPI";
import { CustomerVirtualAccountsApiRequestFactory, CustomerVirtualAccountsApiResponseProcessor} from "../apis/CustomerVirtualAccountsApi";

export interface CustomerVirtualAccountsApiAccountOwnershipCertificateRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApiaccountOwnershipCertificate
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerVirtualAccountsApiaccountOwnershipCertificate
     */
    customerHashId: string
    /**
     * This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer.
     * @type string
     * @memberof CustomerVirtualAccountsApiaccountOwnershipCertificate
     */
    currencies?: string
    /**
     * This field will display the account balance of the customer as on date
     * @type boolean
     * @memberof CustomerVirtualAccountsApiaccountOwnershipCertificate
     */
    currentAccountBalance?: boolean
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof CustomerVirtualAccountsApiaccountOwnershipCertificate
     */
    xRequestId?: string
}

export interface CustomerVirtualAccountsApiAssignPaymentIDRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApiassignPaymentID
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerVirtualAccountsApiassignPaymentID
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerVirtualAccountsApiassignPaymentID
     */
    walletHashId: string
    /**
     * paymentIdRequestDTO2
     * @type PaymentIdRequestDTO2
     * @memberof CustomerVirtualAccountsApiassignPaymentID
     */
    paymentIdRequestDTO2: PaymentIdRequestDTO2
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerVirtualAccountsApiassignPaymentID
     */
    xRequestId?: string
}

export interface CustomerVirtualAccountsApiManageVirtualAccountTagsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApimanageVirtualAccountTags
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerVirtualAccountsApimanageVirtualAccountTags
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerVirtualAccountsApimanageVirtualAccountTags
     */
    walletHashId: string
    /**
     * tags
     * @type PaymentIdTagRequestDTO
     * @memberof CustomerVirtualAccountsApimanageVirtualAccountTags
     */
    paymentIdTagRequestDTO: PaymentIdTagRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerVirtualAccountsApimanageVirtualAccountTags
     */
    xRequestId?: string
}

export interface CustomerVirtualAccountsApiVirtualAccountDetailsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    clientHashId: string
    /**
     * Unique customer identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    walletHashId: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    currencyCode?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    endDate?: string
    /**
     * 
     * @type &#39;DESC&#39; | &#39;ASC&#39;
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    order?: 'DESC' | 'ASC'
    /**
     * 
     * @type number
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    page?: number
    /**
     * 
     * @type &#39;createdAt&#39;
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    property?: 'createdAt'
    /**
     * 
     * @type number
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    tagKey?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    tagValue?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetails
     */
    xRequestId?: string
}

export interface CustomerVirtualAccountsApiVirtualAccountDetailsV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    walletHashId: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    currencyCode?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    endDate?: string
    /**
     * 
     * @type &#39;DESC&#39; | &#39;ASC&#39;
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    order?: 'DESC' | 'ASC'
    /**
     * 
     * @type number
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    page?: number
    /**
     * 
     * @type &#39;createdAt&#39;
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    property?: 'createdAt'
    /**
     * 
     * @type number
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    size?: number
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    startDate?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    tagKey?: string
    /**
     * 
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    tagValue?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerVirtualAccountsApivirtualAccountDetailsV2
     */
    xRequestId?: string
}

export class ObjectCustomerVirtualAccountsApi {
    private api: ObservableCustomerVirtualAccountsApi

    public constructor(configuration: Configuration, requestFactory?: CustomerVirtualAccountsApiRequestFactory, responseProcessor?: CustomerVirtualAccountsApiResponseProcessor) {
        this.api = new ObservableCustomerVirtualAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to download an account ownership certificate.
     * Account Ownership Certificate
     * @param param the request object
     */
    public accountOwnershipCertificateWithHttpInfo(param: CustomerVirtualAccountsApiAccountOwnershipCertificateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.accountOwnershipCertificateWithHttpInfo(param.clientHashId, param.customerHashId, param.currencies, param.currentAccountBalance, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to download an account ownership certificate.
     * Account Ownership Certificate
     * @param param the request object
     */
    public accountOwnershipCertificate(param: CustomerVirtualAccountsApiAccountOwnershipCertificateRequest, options?: Configuration): Promise<void> {
        return this.api.accountOwnershipCertificate(param.clientHashId, param.customerHashId, param.currencies, param.currentAccountBalance, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to assign virtual account numbers to customer for specific source.
     * Assign Payment ID
     * @param param the request object
     */
    public assignPaymentIDWithHttpInfo(param: CustomerVirtualAccountsApiAssignPaymentIDRequest, options?: Configuration): Promise<HttpInfo<PaymentIdResponseDTO2>> {
        return this.api.assignPaymentIDWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.paymentIdRequestDTO2, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to assign virtual account numbers to customer for specific source.
     * Assign Payment ID
     * @param param the request object
     */
    public assignPaymentID(param: CustomerVirtualAccountsApiAssignPaymentIDRequest, options?: Configuration): Promise<PaymentIdResponseDTO2> {
        return this.api.assignPaymentID(param.clientHashId, param.customerHashId, param.walletHashId, param.paymentIdRequestDTO2, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, delete client tags against each virtual account.
     * Manage Virtual Account Tags
     * @param param the request object
     */
    public manageVirtualAccountTagsWithHttpInfo(param: CustomerVirtualAccountsApiManageVirtualAccountTagsRequest, options?: Configuration): Promise<HttpInfo<PaymentIdCientTagsResponseDTO>> {
        return this.api.manageVirtualAccountTagsWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.paymentIdTagRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, delete client tags against each virtual account.
     * Manage Virtual Account Tags
     * @param param the request object
     */
    public manageVirtualAccountTags(param: CustomerVirtualAccountsApiManageVirtualAccountTagsRequest, options?: Configuration): Promise<PaymentIdCientTagsResponseDTO> {
        return this.api.manageVirtualAccountTags(param.clientHashId, param.customerHashId, param.walletHashId, param.paymentIdTagRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.   ⚠️ WARNING   > To access updated functionality and features we recommed using the latest version of this API [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and becomes unsupported.
     * Virtual Account Details
     * @param param the request object
     */
    public virtualAccountDetailsWithHttpInfo(param: CustomerVirtualAccountsApiVirtualAccountDetailsRequest, options?: Configuration): Promise<HttpInfo<Array<WalletPaymentIdsResponseDTO>>> {
        return this.api.virtualAccountDetailsWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.currencyCode, param.endDate, param.order, param.page, param.property, param.size, param.startDate, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.   ⚠️ WARNING   > To access updated functionality and features we recommed using the latest version of this API [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and becomes unsupported.
     * Virtual Account Details
     * @param param the request object
     */
    public virtualAccountDetails(param: CustomerVirtualAccountsApiVirtualAccountDetailsRequest, options?: Configuration): Promise<Array<WalletPaymentIdsResponseDTO>> {
        return this.api.virtualAccountDetails(param.clientHashId, param.customerHashId, param.walletHashId, param.currencyCode, param.endDate, param.order, param.page, param.property, param.size, param.startDate, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.
     * Virtual Account Details V2
     * @param param the request object
     */
    public virtualAccountDetailsV2WithHttpInfo(param: CustomerVirtualAccountsApiVirtualAccountDetailsV2Request, options?: Configuration): Promise<HttpInfo<VirtualAccountResponseDTO>> {
        return this.api.virtualAccountDetailsV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.currencyCode, param.endDate, param.order, param.page, param.property, param.size, param.startDate, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.
     * Virtual Account Details V2
     * @param param the request object
     */
    public virtualAccountDetailsV2(param: CustomerVirtualAccountsApiVirtualAccountDetailsV2Request, options?: Configuration): Promise<VirtualAccountResponseDTO> {
        return this.api.virtualAccountDetailsV2(param.clientHashId, param.customerHashId, param.walletHashId, param.currencyCode, param.endDate, param.order, param.page, param.property, param.size, param.startDate, param.tagKey, param.tagValue, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerWalletBalanceApi } from "./ObservableAPI";
import { CustomerWalletBalanceApiRequestFactory, CustomerWalletBalanceApiResponseProcessor} from "../apis/CustomerWalletBalanceApi";

export interface CustomerWalletBalanceApiWalletBalanceRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletBalanceApiwalletBalance
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletBalanceApiwalletBalance
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletBalanceApiwalletBalance
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletBalanceApiwalletBalance
     */
    xRequestId?: string
}

export class ObjectCustomerWalletBalanceApi {
    private api: ObservableCustomerWalletBalanceApi

    public constructor(configuration: Configuration, requestFactory?: CustomerWalletBalanceApiRequestFactory, responseProcessor?: CustomerWalletBalanceApiResponseProcessor) {
        this.api = new ObservableCustomerWalletBalanceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch balance for a specific wallet.
     * Wallet Balance
     * @param param the request object
     */
    public walletBalanceWithHttpInfo(param: CustomerWalletBalanceApiWalletBalanceRequest, options?: Configuration): Promise<HttpInfo<Array<WalletBalanceResponseDTO>>> {
        return this.api.walletBalanceWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch balance for a specific wallet.
     * Wallet Balance
     * @param param the request object
     */
    public walletBalance(param: CustomerWalletBalanceApiWalletBalanceRequest, options?: Configuration): Promise<Array<WalletBalanceResponseDTO>> {
        return this.api.walletBalance(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableCustomerWalletTransactionsApi } from "./ObservableAPI";
import { CustomerWalletTransactionsApiRequestFactory, CustomerWalletTransactionsApiResponseProcessor} from "../apis/CustomerWalletTransactionsApi";

export interface CustomerWalletTransactionsApiDownloadTransactionReceiptRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApidownloadTransactionReceipt
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApidownloadTransactionReceipt
     */
    customerHashId: string
    /**
     * Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @type string
     * @memberof CustomerWalletTransactionsApidownloadTransactionReceipt
     */
    transactionId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApidownloadTransactionReceipt
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApidownloadTransactionReceipt
     */
    xRequestId?: string
}

export interface CustomerWalletTransactionsApiManageTransactionTagsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    customerHashId: string
    /**
     * Unique transaction Identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    transactionId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    walletHashId: string
    /**
     * tags
     * @type TransactionClientTagsRequestDTO
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    transactionClientTagsRequestDTO: TransactionClientTagsRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApimanageTransactionTags
     */
    xRequestId?: string
}

export interface CustomerWalletTransactionsApiTransactionGeoTaggingRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    customerHashId: string
    /**
     * Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    transactionId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    walletHashId: string
    /**
     * transactionsLocationDTO
     * @type TransactionsLocationDTO
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    transactionsLocationDTO: TransactionsLocationDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApitransactionGeoTagging
     */
    xRequestId?: string
}

export interface CustomerWalletTransactionsApiTransactionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    walletHashId: string
    /**
     * This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    authCode?: string
    /**
     * This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    authCurrency?: string
    /**
     * This parameter can filter the transactions based on businessTransaction flag.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    businessTransaction?: string
    /**
     * This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    cardHashId?: string
    /**
     * This field contains the unique child customer identifier generated when new child customer created.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    childCustomerHashId?: string
    /**
     * End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    endDate?: string
    /**
     * This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    mcc?: string
    /**
     * This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    merchantCategories?: string
    /**
     * This parameter can filter the transactions based on the merchant city field.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    merchantCity?: string
    /**
     * This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    merchantCountries?: string
    /**
     * This parameter can filter the transactions based on the merchant country field.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    merchantCountry?: string
    /**
     * This parameter can filter the transactions based on the merchant name field.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    merchantName?: string
    /**
     * The sort order for the results.
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof CustomerWalletTransactionsApitransactions
     */
    order?: 'ASC' | 'DESC'
    /**
     * This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @type number
     * @memberof CustomerWalletTransactionsApitransactions
     */
    page?: number
    /**
     * This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    paymentInstrumentHashId?: string
    /**
     * The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    property?: string
    /**
     * This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    settlementDate?: string
    /**
     * This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    settlementStatus?: string
    /**
     * This will decide the number of elements per page. Typical values can be 1-20.
     * @type number
     * @memberof CustomerWalletTransactionsApitransactions
     */
    size?: number
    /**
     * From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    startDate?: string
    /**
     * This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @type &#39;NULL&#39; | &#39;IN_PROGRESS&#39; | &#39;ACTION_REQUIRED&#39; | &#39;RFI_REQUESTED&#39; | &#39;RFI_RESPONDED&#39; | &#39;COMPLETED&#39; | &#39;ERROR&#39; | &#39;REJECT&#39; | &#39;EXPIRED&#39;
     * @memberof CustomerWalletTransactionsApitransactions
     */
    status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED'
    /**
     * This parameter can be used to filter the transactions based on the systemReferenceNumber.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    systemReferenceNumber?: string
    /**
     * This parameter can filter the transactions based on systemTraceAuditNumber.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    systemTraceAuditNumber?: string
    /**
     * This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    tagKey?: string
    /**
     * This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    tagValue?: string
    /**
     * This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    transactionCurrency?: string
    /**
     * This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    transactionType?: string
    /**
     * This parameter can filter the transactions based on transactionsLabelsKey.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    transactionsLabelsKey?: string
    /**
     * This parameter can filter the transactions based on transactionsLabelsValue.
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    transactionsLabelsValue?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApitransactions
     */
    xRequestId?: string
}

export interface CustomerWalletTransactionsApiUpdateBusinessTransactionFlagRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    customerHashId: string
    /**
     * Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @type string
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    transactionId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    walletHashId: string
    /**
     * transactionsBusinessDTO
     * @type TransactionsBusinessDTO
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    transactionsBusinessDTO: TransactionsBusinessDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApiupdateBusinessTransactionFlag
     */
    xRequestId?: string
}

export interface CustomerWalletTransactionsApiUploadTransactionReceiptRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    customerHashId: string
    /**
     * Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @type string
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    transactionId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    walletHashId: string
    /**
     * transactionReceipt
     * @type TransactionsReceiptDTO
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    transactionsReceiptDTO: TransactionsReceiptDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof CustomerWalletTransactionsApiuploadTransactionReceipt
     */
    xRequestId?: string
}

export class ObjectCustomerWalletTransactionsApi {
    private api: ObservableCustomerWalletTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: CustomerWalletTransactionsApiRequestFactory, responseProcessor?: CustomerWalletTransactionsApiResponseProcessor) {
        this.api = new ObservableCustomerWalletTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to download a receipt against each transaction.
     * Download Transaction Receipt
     * @param param the request object
     */
    public downloadTransactionReceiptWithHttpInfo(param: CustomerWalletTransactionsApiDownloadTransactionReceiptRequest, options?: Configuration): Promise<HttpInfo<TransactionsReceiptDTO>> {
        return this.api.downloadTransactionReceiptWithHttpInfo(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to download a receipt against each transaction.
     * Download Transaction Receipt
     * @param param the request object
     */
    public downloadTransactionReceipt(param: CustomerWalletTransactionsApiDownloadTransactionReceiptRequest, options?: Configuration): Promise<TransactionsReceiptDTO> {
        return this.api.downloadTransactionReceipt(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, and delete transaction tags.
     * Manage Transaction Tags
     * @param param the request object
     */
    public manageTransactionTagsWithHttpInfo(param: CustomerWalletTransactionsApiManageTransactionTagsRequest, options?: Configuration): Promise<HttpInfo<TransactionClientTagsResponseDTO>> {
        return this.api.manageTransactionTagsWithHttpInfo(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionClientTagsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to add, update, and delete transaction tags.
     * Manage Transaction Tags
     * @param param the request object
     */
    public manageTransactionTags(param: CustomerWalletTransactionsApiManageTransactionTagsRequest, options?: Configuration): Promise<TransactionClientTagsResponseDTO> {
        return this.api.manageTransactionTags(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionClientTagsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a transaction with merchant location.
     * Transaction Geo-Tagging
     * @param param the request object
     */
    public transactionGeoTaggingWithHttpInfo(param: CustomerWalletTransactionsApiTransactionGeoTaggingRequest, options?: Configuration): Promise<HttpInfo<WalletApiError>> {
        return this.api.transactionGeoTaggingWithHttpInfo(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsLocationDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a transaction with merchant location.
     * Transaction Geo-Tagging
     * @param param the request object
     */
    public transactionGeoTagging(param: CustomerWalletTransactionsApiTransactionGeoTaggingRequest, options?: Configuration): Promise<WalletApiError> {
        return this.api.transactionGeoTagging(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsLocationDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch transaction details for a customer.
     * Transactions
     * @param param the request object
     */
    public transactionsWithHttpInfo(param: CustomerWalletTransactionsApiTransactionsRequest, options?: Configuration): Promise<HttpInfo<WalletTransactionsResponseDTO>> {
        return this.api.transactionsWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.authCode, param.authCurrency, param.businessTransaction, param.cardHashId, param.childCustomerHashId, param.endDate, param.mcc, param.merchantCategories, param.merchantCity, param.merchantCountries, param.merchantCountry, param.merchantName, param.order, param.page, param.paymentInstrumentHashId, param.property, param.settlementDate, param.settlementStatus, param.size, param.startDate, param.status, param.systemReferenceNumber, param.systemTraceAuditNumber, param.tagKey, param.tagValue, param.transactionCurrency, param.transactionType, param.transactionsLabelsKey, param.transactionsLabelsValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch transaction details for a customer.
     * Transactions
     * @param param the request object
     */
    public transactions(param: CustomerWalletTransactionsApiTransactionsRequest, options?: Configuration): Promise<WalletTransactionsResponseDTO> {
        return this.api.transactions(param.clientHashId, param.customerHashId, param.walletHashId, param.authCode, param.authCurrency, param.businessTransaction, param.cardHashId, param.childCustomerHashId, param.endDate, param.mcc, param.merchantCategories, param.merchantCity, param.merchantCountries, param.merchantCountry, param.merchantName, param.order, param.page, param.paymentInstrumentHashId, param.property, param.settlementDate, param.settlementStatus, param.size, param.startDate, param.status, param.systemReferenceNumber, param.systemTraceAuditNumber, param.tagKey, param.tagValue, param.transactionCurrency, param.transactionType, param.transactionsLabelsKey, param.transactionsLabelsValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.
     * Update Business Transaction Flag
     * @param param the request object
     */
    public updateBusinessTransactionFlagWithHttpInfo(param: CustomerWalletTransactionsApiUpdateBusinessTransactionFlagRequest, options?: Configuration): Promise<HttpInfo<WalletApiError>> {
        return this.api.updateBusinessTransactionFlagWithHttpInfo(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsBusinessDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.
     * Update Business Transaction Flag
     * @param param the request object
     */
    public updateBusinessTransactionFlag(param: CustomerWalletTransactionsApiUpdateBusinessTransactionFlagRequest, options?: Configuration): Promise<WalletApiError> {
        return this.api.updateBusinessTransactionFlag(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsBusinessDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to upload a receipt against each transaction.
     * Upload Transaction Receipt
     * @param param the request object
     */
    public uploadTransactionReceiptWithHttpInfo(param: CustomerWalletTransactionsApiUploadTransactionReceiptRequest, options?: Configuration): Promise<HttpInfo<WalletApiError>> {
        return this.api.uploadTransactionReceiptWithHttpInfo(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsReceiptDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to upload a receipt against each transaction.
     * Upload Transaction Receipt
     * @param param the request object
     */
    public uploadTransactionReceipt(param: CustomerWalletTransactionsApiUploadTransactionReceiptRequest, options?: Configuration): Promise<WalletApiError> {
        return this.api.uploadTransactionReceipt(param.clientHashId, param.customerHashId, param.transactionId, param.walletHashId, param.transactionsReceiptDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableLifecycleApi } from "./ObservableAPI";
import { LifecycleApiRequestFactory, LifecycleApiResponseProcessor} from "../apis/LifecycleApi";

export interface LifecycleApiActivateCardRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiactivateCard
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiactivateCard
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiactivateCard
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApiactivateCard
     */
    cardHashId: string
    /**
     * Activate card request
     * @type ActivateCardRequestV2DTO
     * @memberof LifecycleApiactivateCard
     */
    activateCardRequestV2DTO: ActivateCardRequestV2DTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiactivateCard
     */
    xRequestId?: string
}

export interface LifecycleApiActivateCard1Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiactivateCard1
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiactivateCard1
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiactivateCard1
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApiactivateCard1
     */
    cardHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiactivateCard1
     */
    xRequestId?: string
}

export interface LifecycleApiAddCardRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiaddCard
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiaddCard
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiaddCard
     */
    walletHashId: string
    /**
     * addCardRequest
     * @type AddCardRequest
     * @memberof LifecycleApiaddCard
     */
    addCardRequest: AddCardRequest
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiaddCard
     */
    xRequestId?: string
}

export interface LifecycleApiAddCardV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiaddCardV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiaddCardV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiaddCardV2
     */
    walletHashId: string
    /**
     * The request body to add a new card.
     * @type AddCardV2Request
     * @memberof LifecycleApiaddCardV2
     */
    addCardV2Request: AddCardV2Request
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiaddCardV2
     */
    xRequestId?: string
}

export interface LifecycleApiAssignCardRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiassignCard
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiassignCard
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiassignCard
     */
    walletHashId: string
    /**
     * assignCardDTO
     * @type AssignCardDTO
     * @memberof LifecycleApiassignCard
     */
    assignCardDTO: AssignCardDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiassignCard
     */
    xRequestId?: string
}

export interface LifecycleApiBlockAndReplaceCardV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    cardHashId: string
    /**
     * A card can be blocked and replaced using the Block And Replace Card API.
     * @type BlockAndReplaceCardRequestDTO
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    blockAndReplaceCardRequestDTO: BlockAndReplaceCardRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiblockAndReplaceCardV2
     */
    xRequestId?: string
}

export interface LifecycleApiBlockUnblockCardsRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApiblockUnblockCards
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiblockUnblockCards
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiblockUnblockCards
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApiblockUnblockCards
     */
    cardHashId: string
    /**
     * blockCode
     * @type BlockCodeDTO
     * @memberof LifecycleApiblockUnblockCards
     */
    blockCodeDTO: BlockCodeDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiblockUnblockCards
     */
    xRequestId?: string
}

export interface LifecycleApiCardDetailsRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApicardDetails
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApicardDetails
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApicardDetails
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApicardDetails
     */
    cardHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApicardDetails
     */
    xRequestId?: string
}

export interface LifecycleApiCardDetailsV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApicardDetailsV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApicardDetailsV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApicardDetailsV2
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApicardDetailsV2
     */
    cardHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof LifecycleApicardDetailsV2
     */
    xRequestId?: string
}

export interface LifecycleApiCardListRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof LifecycleApicardList
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApicardList
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApicardList
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof LifecycleApicardList
     */
    xRequestId?: string
}

export interface LifecycleApiCardListV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApicardListV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApicardListV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApicardListV2
     */
    walletHashId: string
    /**
     * This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\&#39;s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
     * @type string
     * @memberof LifecycleApicardListV2
     */
    childCustomerHashId?: string
    /**
     * This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @type number
     * @memberof LifecycleApicardListV2
     */
    page?: number
    /**
     * This field accepts the number of elements per page.
     * @type number
     * @memberof LifecycleApicardListV2
     */
    size?: number
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApicardListV2
     */
    xRequestId?: string
}

export interface LifecycleApiGetCardWidgetRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof LifecycleApigetCardWidget
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApigetCardWidget
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApigetCardWidget
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApigetCardWidget
     */
    cardHashId: string
    /**
     * 
     * @type CardWidgetTokenRequestDTO
     * @memberof LifecycleApigetCardWidget
     */
    cardWidgetTokenRequestDTO: CardWidgetTokenRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApigetCardWidget
     */
    xRequestId?: string
}

export interface LifecycleApiIssueReplacementCardRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof LifecycleApiissueReplacementCard
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApiissueReplacementCard
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApiissueReplacementCard
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApiissueReplacementCard
     */
    cardHashId: string
    /**
     * A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
     * @type ReplaceCardRequest
     * @memberof LifecycleApiissueReplacementCard
     */
    replaceCardRequest: ReplaceCardRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof LifecycleApiissueReplacementCard
     */
    xRequestId?: string
}

export interface LifecycleApiLockUnlockCardV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApilockUnlockCardV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApilockUnlockCardV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApilockUnlockCardV2
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApilockUnlockCardV2
     */
    cardHashId: string
    /**
     * lockStatusUpdateRequestDTO
     * @type LockStatusUpdateRequestDTO
     * @memberof LifecycleApilockUnlockCardV2
     */
    lockStatusUpdateRequestDTO: LockStatusUpdateRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApilockUnlockCardV2
     */
    xRequestId?: string
}

export interface LifecycleApiRenewCardRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof LifecycleApirenewCard
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof LifecycleApirenewCard
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof LifecycleApirenewCard
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof LifecycleApirenewCard
     */
    cardHashId: string
    /**
     * A card can be renewed using the Renew Card API on or before 45 days from the expiration date.
     * @type RenewCardRequest
     * @memberof LifecycleApirenewCard
     */
    renewCardRequest: RenewCardRequest
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApirenewCard
     */
    xRequestId?: string
}

export interface LifecycleApiUpdateCardDetailsV2Request {
    /**
     * clientHashId
     * @type string
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    clientHashId: string
    /**
     * customerHashId
     * @type string
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    customerHashId: string
    /**
     * walletHashId
     * @type string
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    walletHashId: string
    /**
     * cardHashId
     * @type string
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    cardHashId: string
    /**
     * updateContactInfoRequestDTO
     * @type UpdateContactInfoRequestDTO
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    updateContactInfoRequestDTO: UpdateContactInfoRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof LifecycleApiupdateCardDetailsV2
     */
    xRequestId?: string
}

export class ObjectLifecycleApi {
    private api: ObservableLifecycleApi

    public constructor(configuration: Configuration, requestFactory?: LifecycleApiRequestFactory, responseProcessor?: LifecycleApiResponseProcessor) {
        this.api = new ObservableLifecycleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to activate a card after delivery to the customer.
     * Activate Card V2
     * @param param the request object
     */
    public activateCardWithHttpInfo(param: LifecycleApiActivateCardRequest, options?: Configuration): Promise<HttpInfo<ActivateCardResponseV2DTO>> {
        return this.api.activateCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.activateCardRequestV2DTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to activate a card after delivery to the customer.
     * Activate Card V2
     * @param param the request object
     */
    public activateCard(param: LifecycleApiActivateCardRequest, options?: Configuration): Promise<ActivateCardResponseV2DTO> {
        return this.api.activateCard(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.activateCardRequestV2DTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to activate a card after delivery to a customer.
     * Activate Card
     * @param param the request object
     */
    public activateCard1WithHttpInfo(param: LifecycleApiActivateCard1Request, options?: Configuration): Promise<HttpInfo<ActivateCardResponseDTO>> {
        return this.api.activateCard1WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to activate a card after delivery to a customer.
     * Activate Card
     * @param param the request object
     */
    public activateCard1(param: LifecycleApiActivateCard1Request, options?: Configuration): Promise<ActivateCardResponseDTO> {
        return this.api.activateCard1(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.
     * Add Card
     * @param param the request object
     */
    public addCardWithHttpInfo(param: LifecycleApiAddCardRequest, options?: Configuration): Promise<HttpInfo<AddCardResponseDTO>> {
        return this.api.addCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.addCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.
     * Add Card
     * @param param the request object
     */
    public addCard(param: LifecycleApiAddCardRequest, options?: Configuration): Promise<AddCardResponseDTO> {
        return this.api.addCard(param.clientHashId, param.customerHashId, param.walletHashId, param.addCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to issue a card for a customer.
     * Add Card V2
     * @param param the request object
     */
    public addCardV2WithHttpInfo(param: LifecycleApiAddCardV2Request, options?: Configuration): Promise<HttpInfo<AddCardV2ResponseDTO>> {
        return this.api.addCardV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.addCardV2Request, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to issue a card for a customer.
     * Add Card V2
     * @param param the request object
     */
    public addCardV2(param: LifecycleApiAddCardV2Request, options?: Configuration): Promise<AddCardV2ResponseDTO> {
        return this.api.addCardV2(param.clientHashId, param.customerHashId, param.walletHashId, param.addCardV2Request, param.xRequestId,  options).toPromise();
    }

    /**
     * This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.
     * Assign Card
     * @param param the request object
     */
    public assignCardWithHttpInfo(param: LifecycleApiAssignCardRequest, options?: Configuration): Promise<HttpInfo<CardAssignResponseDTO>> {
        return this.api.assignCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.assignCardDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.
     * Assign Card
     * @param param the request object
     */
    public assignCard(param: LifecycleApiAssignCardRequest, options?: Configuration): Promise<CardAssignResponseDTO> {
        return this.api.assignCard(param.clientHashId, param.customerHashId, param.walletHashId, param.assignCardDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API to block and replace a card.
     * Block and Replace Card
     * @param param the request object
     */
    public blockAndReplaceCardV2WithHttpInfo(param: LifecycleApiBlockAndReplaceCardV2Request, options?: Configuration): Promise<HttpInfo<BlockAndReplaceCardResponseDTO>> {
        return this.api.blockAndReplaceCardV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.blockAndReplaceCardRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API to block and replace a card.
     * Block and Replace Card
     * @param param the request object
     */
    public blockAndReplaceCardV2(param: LifecycleApiBlockAndReplaceCardV2Request, options?: Configuration): Promise<BlockAndReplaceCardResponseDTO> {
        return this.api.blockAndReplaceCardV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.blockAndReplaceCardRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Block/Unblock Cards
     * @param param the request object
     */
    public blockUnblockCardsWithHttpInfo(param: LifecycleApiBlockUnblockCardsRequest, options?: Configuration): Promise<HttpInfo<BlockCodeCardResponseDTO>> {
        return this.api.blockUnblockCardsWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.blockCodeDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Block/Unblock Cards
     * @param param the request object
     */
    public blockUnblockCards(param: LifecycleApiBlockUnblockCardsRequest, options?: Configuration): Promise<BlockCodeCardResponseDTO> {
        return this.api.blockUnblockCards(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.blockCodeDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.
     * Card Details
     * @param param the request object
     */
    public cardDetailsWithHttpInfo(param: LifecycleApiCardDetailsRequest, options?: Configuration): Promise<HttpInfo<CardResponseDTO>> {
        return this.api.cardDetailsWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.
     * Card Details
     * @param param the request object
     */
    public cardDetails(param: LifecycleApiCardDetailsRequest, options?: Configuration): Promise<CardResponseDTO> {
        return this.api.cardDetails(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to get details about a card.
     * Card Details V2
     * @param param the request object
     */
    public cardDetailsV2WithHttpInfo(param: LifecycleApiCardDetailsV2Request, options?: Configuration): Promise<HttpInfo<CardDetails>> {
        return this.api.cardDetailsV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to get details about a card.
     * Card Details V2
     * @param param the request object
     */
    public cardDetailsV2(param: LifecycleApiCardDetailsV2Request, options?: Configuration): Promise<CardDetails> {
        return this.api.cardDetailsV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will return all the cards issued, for a given wallet.
     * Card List
     * @param param the request object
     */
    public cardListWithHttpInfo(param: LifecycleApiCardListRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.cardListWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will return all the cards issued, for a given wallet.
     * Card List
     * @param param the request object
     */
    public cardList(param: LifecycleApiCardListRequest, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.cardList(param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API returns all the cards issued for a given customer wallet.
     * Card List V2
     * @param param the request object
     */
    public cardListV2WithHttpInfo(param: LifecycleApiCardListV2Request, options?: Configuration): Promise<HttpInfo<PageResponseCardDetails>> {
        return this.api.cardListV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.childCustomerHashId, param.page, param.size, param.xRequestId,  options).toPromise();
    }

    /**
     * This API returns all the cards issued for a given customer wallet.
     * Card List V2
     * @param param the request object
     */
    public cardListV2(param: LifecycleApiCardListV2Request, options?: Configuration): Promise<PageResponseCardDetails> {
        return this.api.cardListV2(param.clientHashId, param.customerHashId, param.walletHashId, param.childCustomerHashId, param.page, param.size, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients
     * Get Card Details Widget
     * @param param the request object
     */
    public getCardWidgetWithHttpInfo(param: LifecycleApiGetCardWidgetRequest, options?: Configuration): Promise<HttpInfo<CardWidgetTokenResponse>> {
        return this.api.getCardWidgetWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.cardWidgetTokenRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients
     * Get Card Details Widget
     * @param param the request object
     */
    public getCardWidget(param: LifecycleApiGetCardWidgetRequest, options?: Configuration): Promise<CardWidgetTokenResponse> {
        return this.api.getCardWidget(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.cardWidgetTokenRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Issue Replacement Card
     * @param param the request object
     */
    public issueReplacementCardWithHttpInfo(param: LifecycleApiIssueReplacementCardRequest, options?: Configuration): Promise<HttpInfo<AddCardResponseDTO>> {
        return this.api.issueReplacementCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.replaceCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Issue Replacement Card
     * @param param the request object
     */
    public issueReplacementCard(param: LifecycleApiIssueReplacementCardRequest, options?: Configuration): Promise<AddCardResponseDTO> {
        return this.api.issueReplacementCard(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.replaceCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to temporarily lock or unlock a card.
     * Lock/Unlock Cards
     * @param param the request object
     */
    public lockUnlockCardV2WithHttpInfo(param: LifecycleApiLockUnlockCardV2Request, options?: Configuration): Promise<HttpInfo<LockStatusUpdateResponseDTO>> {
        return this.api.lockUnlockCardV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.lockStatusUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to temporarily lock or unlock a card.
     * Lock/Unlock Cards
     * @param param the request object
     */
    public lockUnlockCardV2(param: LifecycleApiLockUnlockCardV2Request, options?: Configuration): Promise<LockStatusUpdateResponseDTO> {
        return this.api.lockUnlockCardV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.lockStatusUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API for card renewal.
     * Renew Card
     * @param param the request object
     */
    public renewCardWithHttpInfo(param: LifecycleApiRenewCardRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.renewCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.renewCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * Use this API for card renewal.
     * Renew Card
     * @param param the request object
     */
    public renewCard(param: LifecycleApiRenewCardRequest, options?: Configuration): Promise<string> {
        return this.api.renewCard(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.renewCardRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update the contact information of the cardholder.
     * Update Card Details V2
     * @param param the request object
     */
    public updateCardDetailsV2WithHttpInfo(param: LifecycleApiUpdateCardDetailsV2Request, options?: Configuration): Promise<HttpInfo<ApiResponse2>> {
        return this.api.updateCardDetailsV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.updateContactInfoRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to update the contact information of the cardholder.
     * Update Card Details V2
     * @param param the request object
     */
    public updateCardDetailsV2(param: LifecycleApiUpdateCardDetailsV2Request, options?: Configuration): Promise<ApiResponse2> {
        return this.api.updateCardDetailsV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.updateContactInfoRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableOpenBankingOnboardingApi } from "./ObservableAPI";
import { OpenBankingOnboardingApiRequestFactory, OpenBankingOnboardingApiResponseProcessor} from "../apis/OpenBankingOnboardingApi";

export interface OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest {
    /**
     * accountConsentId
     * @type string
     * @memberof OpenBankingOnboardingApiaccountDetailsByCustomerConsentID
     */
    accountConsentId: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof OpenBankingOnboardingApiaccountDetailsByCustomerConsentID
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof OpenBankingOnboardingApiaccountDetailsByCustomerConsentID
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof OpenBankingOnboardingApiaccountDetailsByCustomerConsentID
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof OpenBankingOnboardingApiaccountDetailsByCustomerConsentID
     */
    xRequestId?: string
}

export interface OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof OpenBankingOnboardingApipaymentDetailsbySystemReferenceNumber
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof OpenBankingOnboardingApipaymentDetailsbySystemReferenceNumber
     */
    customerHashId: string
    /**
     * systemReferenceNumber
     * @type string
     * @memberof OpenBankingOnboardingApipaymentDetailsbySystemReferenceNumber
     */
    systemReferenceNumber: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof OpenBankingOnboardingApipaymentDetailsbySystemReferenceNumber
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof OpenBankingOnboardingApipaymentDetailsbySystemReferenceNumber
     */
    xRequestId?: string
}

export class ObjectOpenBankingOnboardingApi {
    private api: ObservableOpenBankingOnboardingApi

    public constructor(configuration: Configuration, requestFactory?: OpenBankingOnboardingApiRequestFactory, responseProcessor?: OpenBankingOnboardingApiResponseProcessor) {
        this.api = new ObservableOpenBankingOnboardingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
     * Account Details By Customer Consent ID.
     * @param param the request object
     */
    public accountDetailsByCustomerConsentIDWithHttpInfo(param: OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest, options?: Configuration): Promise<HttpInfo<ConsentDetailsResponse>> {
        return this.api.accountDetailsByCustomerConsentIDWithHttpInfo(param.accountConsentId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
     * Account Details By Customer Consent ID.
     * @param param the request object
     */
    public accountDetailsByCustomerConsentID(param: OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest, options?: Configuration): Promise<ConsentDetailsResponse> {
        return this.api.accountDetailsByCustomerConsentID(param.accountConsentId, param.clientHashId, param.customerHashId, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
     * Payment Details by System Reference Number
     * @param param the request object
     */
    public paymentDetailsbySystemReferenceNumberWithHttpInfo(param: OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest, options?: Configuration): Promise<HttpInfo<OpenBankingPaymentResponseDTO>> {
        return this.api.paymentDetailsbySystemReferenceNumberWithHttpInfo(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
     * Payment Details by System Reference Number
     * @param param the request object
     */
    public paymentDetailsbySystemReferenceNumber(param: OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest, options?: Configuration): Promise<OpenBankingPaymentResponseDTO> {
        return this.api.paymentDetailsbySystemReferenceNumber(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservablePayinApi } from "./ObservableAPI";
import { PayinApiRequestFactory, PayinApiResponseProcessor} from "../apis/PayinApi";

export interface PayinApiSimulateFundingInstrumentStatusUpdateRequest {
    /**
     * clientHashId
     * @type string
     * @memberof PayinApisimulateFundingInstrumentStatusUpdate
     */
    clientHashId: string
    /**
     * customerHashId
     * @type string
     * @memberof PayinApisimulateFundingInstrumentStatusUpdate
     */
    customerHashId: string
    /**
     * fundingInstrumentId
     * @type string
     * @memberof PayinApisimulateFundingInstrumentStatusUpdate
     */
    fundingInstrumentId: string
    /**
     * fundingInstrumentStatusUpdateRequestDTO
     * @type FundingInstrumentStatusUpdateRequestDTO
     * @memberof PayinApisimulateFundingInstrumentStatusUpdate
     */
    fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof PayinApisimulateFundingInstrumentStatusUpdate
     */
    xRequestId?: string
}

export interface PayinApiSimulatereceivepaymentRequest {
    /**
     * inwardPaymentManualRequestDTO
     * @type InwardPaymentManualRequestDTO
     * @memberof PayinApisimulatereceivepayment
     */
    inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayinApisimulatereceivepayment
     */
    xRequestId?: string
}

export class ObjectPayinApi {
    private api: ObservablePayinApi

    public constructor(configuration: Configuration, requestFactory?: PayinApiRequestFactory, responseProcessor?: PayinApiResponseProcessor) {
        this.api = new ObservablePayinApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Simulate Funding Instrument Status Update (Sandbox Testing)
     * @param param the request object
     */
    public simulateFundingInstrumentStatusUpdateWithHttpInfo(param: PayinApiSimulateFundingInstrumentStatusUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.simulateFundingInstrumentStatusUpdateWithHttpInfo(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.fundingInstrumentStatusUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * Simulate Funding Instrument Status Update (Sandbox Testing)
     * @param param the request object
     */
    public simulateFundingInstrumentStatusUpdate(param: PayinApiSimulateFundingInstrumentStatusUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.simulateFundingInstrumentStatusUpdate(param.clientHashId, param.customerHashId, param.fundingInstrumentId, param.fundingInstrumentStatusUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.
     * Simulate Receive Transaction
     * @param param the request object
     */
    public simulatereceivepaymentWithHttpInfo(param: PayinApiSimulatereceivepaymentRequest, options?: Configuration): Promise<HttpInfo<PayinApiResponse2>> {
        return this.api.simulatereceivepaymentWithHttpInfo(param.inwardPaymentManualRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.
     * Simulate Receive Transaction
     * @param param the request object
     */
    public simulatereceivepayment(param: PayinApiSimulatereceivepaymentRequest, options?: Configuration): Promise<PayinApiResponse2> {
        return this.api.simulatereceivepayment(param.inwardPaymentManualRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservablePayoutApi } from "./ObservableAPI";
import { PayoutApiRequestFactory, PayoutApiResponseProcessor} from "../apis/PayoutApi";

export interface PayoutApiCustomerGetCardWidgetRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApicustomerGetCardWidget
     */
    clientHashId: string
    /**
     * Unique customer identifier generated during customer creation.
     * @type string
     * @memberof PayoutApicustomerGetCardWidget
     */
    customerHashId: string
    /**
     * cardWidgetTokenRequestDTO
     * @type CustomerCardWidgetTokenRequestDTO
     * @memberof PayoutApicustomerGetCardWidget
     */
    customerCardWidgetTokenRequestDTO: CustomerCardWidgetTokenRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApicustomerGetCardWidget
     */
    xRequestId?: string
}

export interface PayoutApiFetchRemittanceLifeCycleStatusRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApifetchRemittanceLifeCycleStatus
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof PayoutApifetchRemittanceLifeCycleStatus
     */
    customerHashId: string
    /**
     * This is a unique system reference number generated by card issuance platform for the transaction.
     * @type string
     * @memberof PayoutApifetchRemittanceLifeCycleStatus
     */
    systemReferenceNumber: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof PayoutApifetchRemittanceLifeCycleStatus
     */
    walletHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApifetchRemittanceLifeCycleStatus
     */
    xRequestId?: string
}

export interface PayoutApiPoPRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApipoP
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof PayoutApipoP
     */
    customerHashId: string
    /**
     * Unique System Reference Number generated on Transfer Money request.
     * @type string
     * @memberof PayoutApipoP
     */
    systemReferenceNumber: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof PayoutApipoP
     */
    walletHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof PayoutApipoP
     */
    xRequestId?: string
}

export interface PayoutApiPurposeofTransferRequest {
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApipurposeofTransfer
     */
    xRequestId?: string
}

export interface PayoutApiRespondtoTransactionRFIRequest {
    /**
     * Authorization code of the transaction.
     * @type string
     * @memberof PayoutApirespondtoTransactionRFI
     */
    authCode: string
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApirespondtoTransactionRFI
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof PayoutApirespondtoTransactionRFI
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof PayoutApirespondtoTransactionRFI
     */
    walletHashId: string
    /**
     * uploadRfiDocumentRequestDTO
     * @type UploadRfiDocumentRequestDTO
     * @memberof PayoutApirespondtoTransactionRFI
     */
    uploadRfiDocumentRequestDTO: UploadRfiDocumentRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApirespondtoTransactionRFI
     */
    xRequestId?: string
}

export interface PayoutApiTransferMoneyRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApitransferMoney
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof PayoutApitransferMoney
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof PayoutApitransferMoney
     */
    walletHashId: string
    /**
     * remittanceTransactionsRequestDTO
     * @type RemittanceTransactionsRequestDTO
     * @memberof PayoutApitransferMoney
     */
    remittanceTransactionsRequestDTO: RemittanceTransactionsRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApitransferMoney
     */
    xRequestId?: string
}

export interface PayoutApiWithdrawFundsFromWalletRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof PayoutApiwithdrawFundsFromWallet
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof PayoutApiwithdrawFundsFromWallet
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof PayoutApiwithdrawFundsFromWallet
     */
    walletHashId: string
    /**
     * walletRefundRequestDTO
     * @type WalletRefundRequestDTO
     * @memberof PayoutApiwithdrawFundsFromWallet
     */
    walletRefundRequestDTO: WalletRefundRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof PayoutApiwithdrawFundsFromWallet
     */
    xRequestId?: string
}

export class ObjectPayoutApi {
    private api: ObservablePayoutApi

    public constructor(configuration: Configuration, requestFactory?: PayoutApiRequestFactory, responseProcessor?: PayoutApiResponseProcessor) {
        this.api = new ObservablePayoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to use NIUM’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.
     * Get Card Widget
     * @param param the request object
     */
    public customerGetCardWidgetWithHttpInfo(param: PayoutApiCustomerGetCardWidgetRequest, options?: Configuration): Promise<HttpInfo<CustomerCardWidgetTokenResponse>> {
        return this.api.customerGetCardWidgetWithHttpInfo(param.clientHashId, param.customerHashId, param.customerCardWidgetTokenRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to use NIUM’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.
     * Get Card Widget
     * @param param the request object
     */
    public customerGetCardWidget(param: PayoutApiCustomerGetCardWidgetRequest, options?: Configuration): Promise<CustomerCardWidgetTokenResponse> {
        return this.api.customerGetCardWidget(param.clientHashId, param.customerHashId, param.customerCardWidgetTokenRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.
     * Fetch Remittance Life Cycle Status
     * @param param the request object
     */
    public fetchRemittanceLifeCycleStatusWithHttpInfo(param: PayoutApiFetchRemittanceLifeCycleStatusRequest, options?: Configuration): Promise<HttpInfo<Array<RemittanceEventsResponseDTO2>>> {
        return this.api.fetchRemittanceLifeCycleStatusWithHttpInfo(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.
     * Fetch Remittance Life Cycle Status
     * @param param the request object
     */
    public fetchRemittanceLifeCycleStatus(param: PayoutApiFetchRemittanceLifeCycleStatusRequest, options?: Configuration): Promise<Array<RemittanceEventsResponseDTO2>> {
        return this.api.fetchRemittanceLifeCycleStatus(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to download a proof of payment receipt against a transaction.
     * Get Proof Of Payment
     * @param param the request object
     */
    public poPWithHttpInfo(param: PayoutApiPoPRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.poPWithHttpInfo(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to download a proof of payment receipt against a transaction.
     * Get Proof Of Payment
     * @param param the request object
     */
    public poP(param: PayoutApiPoPRequest, options?: Configuration): Promise<void> {
        return this.api.poP(param.clientHashId, param.customerHashId, param.systemReferenceNumber, param.walletHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the list of purpose of transfer.
     * Purpose of Transfer
     * @param param the request object
     */
    public purposeofTransferWithHttpInfo(param: PayoutApiPurposeofTransferRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PurposeCodeResponseDTO>>> {
        return this.api.purposeofTransferWithHttpInfo(param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the list of purpose of transfer.
     * Purpose of Transfer
     * @param param the request object
     */
    public purposeofTransfer(param: PayoutApiPurposeofTransferRequest = {}, options?: Configuration): Promise<Array<PurposeCodeResponseDTO>> {
        return this.api.purposeofTransfer(param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised for a transaction.
     * Respond to Transaction RFI
     * @param param the request object
     */
    public respondtoTransactionRFIWithHttpInfo(param: PayoutApiRespondtoTransactionRFIRequest, options?: Configuration): Promise<HttpInfo<UploadRfiDetailsResponseDTO>> {
        return this.api.respondtoTransactionRFIWithHttpInfo(param.authCode, param.clientHashId, param.customerHashId, param.walletHashId, param.uploadRfiDocumentRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to respond to an RFI raised for a transaction.
     * Respond to Transaction RFI
     * @param param the request object
     */
    public respondtoTransactionRFI(param: PayoutApiRespondtoTransactionRFIRequest, options?: Configuration): Promise<UploadRfiDetailsResponseDTO> {
        return this.api.respondtoTransactionRFI(param.authCode, param.clientHashId, param.customerHashId, param.walletHashId, param.uploadRfiDocumentRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to send money to the registered beneficiary.
     * Transfer Money
     * @param param the request object
     */
    public transferMoneyWithHttpInfo(param: PayoutApiTransferMoneyRequest, options?: Configuration): Promise<HttpInfo<RemittanceResponseDTO>> {
        return this.api.transferMoneyWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.remittanceTransactionsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to send money to the registered beneficiary.
     * Transfer Money
     * @param param the request object
     */
    public transferMoney(param: PayoutApiTransferMoneyRequest, options?: Configuration): Promise<RemittanceResponseDTO> {
        return this.api.transferMoney(param.clientHashId, param.customerHashId, param.walletHashId, param.remittanceTransactionsRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to withdraw funds from the customer\'s wallet.
     * Withdraw Funds from Wallet
     * @param param the request object
     */
    public withdrawFundsFromWalletWithHttpInfo(param: PayoutApiWithdrawFundsFromWalletRequest, options?: Configuration): Promise<HttpInfo<ApiResponseOfWalletRefundResponseDTO>> {
        return this.api.withdrawFundsFromWalletWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.walletRefundRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to withdraw funds from the customer\'s wallet.
     * Withdraw Funds from Wallet
     * @param param the request object
     */
    public withdrawFundsFromWallet(param: PayoutApiWithdrawFundsFromWalletRequest, options?: Configuration): Promise<ApiResponseOfWalletRefundResponseDTO> {
        return this.api.withdrawFundsFromWallet(param.clientHashId, param.customerHashId, param.walletHashId, param.walletRefundRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableQuotesApi } from "./ObservableAPI";
import { QuotesApiRequestFactory, QuotesApiResponseProcessor} from "../apis/QuotesApi";

export interface QuotesApiCreateQuoteRequest {
    /**
     * Unique identifier of the client.
     * @type string
     * @memberof QuotesApicreateQuote
     */
    clientHashId: string
    /**
     * quoteCreationRequest
     * @type QuoteCreationRequest
     * @memberof QuotesApicreateQuote
     */
    quoteCreationRequest: QuoteCreationRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof QuotesApicreateQuote
     */
    xRequestId?: string
}

export interface QuotesApiFetchQuoteRequest {
    /**
     * Unique identifier of the client.
     * @type string
     * @memberof QuotesApifetchQuote
     */
    clientHashId: string
    /**
     * 
     * @type string
     * @memberof QuotesApifetchQuote
     */
    quoteId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof QuotesApifetchQuote
     */
    xRequestId?: string
}

export class ObjectQuotesApi {
    private api: ObservableQuotesApi

    public constructor(configuration: Configuration, requestFactory?: QuotesApiRequestFactory, responseProcessor?: QuotesApiResponseProcessor) {
        this.api = new ObservableQuotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * Create Quote
     * @param param the request object
     */
    public createQuoteWithHttpInfo(param: QuotesApiCreateQuoteRequest, options?: Configuration): Promise<HttpInfo<QuoteCreationResponse>> {
        return this.api.createQuoteWithHttpInfo(param.clientHashId, param.quoteCreationRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * Create Quote
     * @param param the request object
     */
    public createQuote(param: QuotesApiCreateQuoteRequest, options?: Configuration): Promise<QuoteCreationResponse> {
        return this.api.createQuote(param.clientHashId, param.quoteCreationRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * Fetch Quote by ID
     * @param param the request object
     */
    public fetchQuoteWithHttpInfo(param: QuotesApiFetchQuoteRequest, options?: Configuration): Promise<HttpInfo<QuoteCreationResponse>> {
        return this.api.fetchQuoteWithHttpInfo(param.clientHashId, param.quoteId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * Fetch Quote by ID
     * @param param the request object
     */
    public fetchQuote(param: QuotesApiFetchQuoteRequest, options?: Configuration): Promise<QuoteCreationResponse> {
        return this.api.fetchQuote(param.clientHashId, param.quoteId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableQuotesPreviousVersionApi } from "./ObservableAPI";
import { QuotesPreviousVersionApiRequestFactory, QuotesPreviousVersionApiResponseProcessor} from "../apis/QuotesPreviousVersionApi";

export interface QuotesPreviousVersionApiExchangeRateLockandHoldRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    customerHashId: string
    /**
     * This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    destinationCurrency: string
    /**
     * This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    sourceCurrency: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    walletHashId: string
    /**
     * This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
     * @type number
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    additionalFxMarkup?: number
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateLockandHold
     */
    xRequestId?: string
}

export interface QuotesPreviousVersionApiExchangeRateWithMarkupRequest {
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    clientHashId: string
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    sourceCurrencyCode: string
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    destinationCurrencyCode: string
    /**
     * An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
     * @type number
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    sourceAmount?: number
    /**
     * An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
     * @type number
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    destinationAmount?: number
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof QuotesPreviousVersionApiexchangeRateWithMarkup
     */
    xRequestId?: string
}

export class ObjectQuotesPreviousVersionApi {
    private api: ObservableQuotesPreviousVersionApi

    public constructor(configuration: Configuration, requestFactory?: QuotesPreviousVersionApiRequestFactory, responseProcessor?: QuotesPreviousVersionApiResponseProcessor) {
        this.api = new ObservableQuotesPreviousVersionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * Exchange Rate Lock and Hold
     * @param param the request object
     */
    public exchangeRateLockandHoldWithHttpInfo(param: QuotesPreviousVersionApiExchangeRateLockandHoldRequest, options?: Configuration): Promise<HttpInfo<FxHoldLockResponseContent>> {
        return this.api.exchangeRateLockandHoldWithHttpInfo(param.clientHashId, param.customerHashId, param.destinationCurrency, param.sourceCurrency, param.walletHashId, param.additionalFxMarkup, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * Exchange Rate Lock and Hold
     * @param param the request object
     */
    public exchangeRateLockandHold(param: QuotesPreviousVersionApiExchangeRateLockandHoldRequest, options?: Configuration): Promise<FxHoldLockResponseContent> {
        return this.api.exchangeRateLockandHold(param.clientHashId, param.customerHashId, param.destinationCurrency, param.sourceCurrency, param.walletHashId, param.additionalFxMarkup, param.xRequestId,  options).toPromise();
    }

    /**
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * Exchange Rate With Markup
     * @param param the request object
     */
    public exchangeRateWithMarkupWithHttpInfo(param: QuotesPreviousVersionApiExchangeRateWithMarkupRequest, options?: Configuration): Promise<HttpInfo<ExchangeRateV2ResponseDto>> {
        return this.api.exchangeRateWithMarkupWithHttpInfo(param.clientHashId, param.sourceCurrencyCode, param.destinationCurrencyCode, param.sourceAmount, param.destinationAmount, param.xRequestId,  options).toPromise();
    }

    /**
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * Exchange Rate With Markup
     * @param param the request object
     */
    public exchangeRateWithMarkup(param: QuotesPreviousVersionApiExchangeRateWithMarkupRequest, options?: Configuration): Promise<ExchangeRateV2ResponseDto> {
        return this.api.exchangeRateWithMarkup(param.clientHashId, param.sourceCurrencyCode, param.destinationCurrencyCode, param.sourceAmount, param.destinationAmount, param.xRequestId,  options).toPromise();
    }

}

import { ObservableRatesApi } from "./ObservableAPI";
import { RatesApiRequestFactory, RatesApiResponseProcessor} from "../apis/RatesApi";

export interface RatesApiAggregatedExchangeRatesRequest {
    /**
     * This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @type string
     * @memberof RatesApiaggregatedExchangeRates
     */
    sourceCurrencyCode: string
    /**
     * This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @type string
     * @memberof RatesApiaggregatedExchangeRates
     */
    destinationCurrencyCode: string
    /**
     * 
     * @type string
     * @memberof RatesApiaggregatedExchangeRates
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof RatesApiaggregatedExchangeRates
     */
    csrfToken?: string
    /**
     * The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @type Date
     * @memberof RatesApiaggregatedExchangeRates
     */
    start?: Date
    /**
     * The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @type Date
     * @memberof RatesApiaggregatedExchangeRates
     */
    end?: Date
    /**
     * Specifies the field by which the results should be grouped.
     * @type Window
     * @memberof RatesApiaggregatedExchangeRates
     */
    window?: Window
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof RatesApiaggregatedExchangeRates
     */
    xRequestId?: string
}

export interface RatesApiExchangeRateV2Request {
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type string
     * @memberof RatesApiexchangeRateV2
     */
    sourceCurrencyCode: string
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type string
     * @memberof RatesApiexchangeRateV2
     */
    destinationCurrencyCode: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof RatesApiexchangeRateV2
     */
    xRequestId?: string
}

export class ObjectRatesApi {
    private api: ObservableRatesApi

    public constructor(configuration: Configuration, requestFactory?: RatesApiRequestFactory, responseProcessor?: RatesApiResponseProcessor) {
        this.api = new ObservableRatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API will retrieve aggregated time series of historical exchange rate.
     * Fetch historic aggregated exchange rates
     * @param param the request object
     */
    public aggregatedExchangeRatesWithHttpInfo(param: RatesApiAggregatedExchangeRatesRequest, options?: Configuration): Promise<HttpInfo<ExchangeRatesGetResponse>> {
        return this.api.aggregatedExchangeRatesWithHttpInfo(param.sourceCurrencyCode, param.destinationCurrencyCode, param.authorization, param.csrfToken, param.start, param.end, param.window, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will retrieve aggregated time series of historical exchange rate.
     * Fetch historic aggregated exchange rates
     * @param param the request object
     */
    public aggregatedExchangeRates(param: RatesApiAggregatedExchangeRatesRequest, options?: Configuration): Promise<ExchangeRatesGetResponse> {
        return this.api.aggregatedExchangeRates(param.sourceCurrencyCode, param.destinationCurrencyCode, param.authorization, param.csrfToken, param.start, param.end, param.window, param.xRequestId,  options).toPromise();
    }

    /**
     * This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.
     * Exchange Rate V2
     * @param param the request object
     */
    public exchangeRateV2WithHttpInfo(param: RatesApiExchangeRateV2Request, options?: Configuration): Promise<HttpInfo<ExchangeRateV2ResponseDto>> {
        return this.api.exchangeRateV2WithHttpInfo(param.sourceCurrencyCode, param.destinationCurrencyCode, param.xRequestId,  options).toPromise();
    }

    /**
     * This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.
     * Exchange Rate V2
     * @param param the request object
     */
    public exchangeRateV2(param: RatesApiExchangeRateV2Request, options?: Configuration): Promise<ExchangeRateV2ResponseDto> {
        return this.api.exchangeRateV2(param.sourceCurrencyCode, param.destinationCurrencyCode, param.xRequestId,  options).toPromise();
    }

}

import { ObservableReferenceDataApi } from "./ObservableAPI";
import { ReferenceDataApiRequestFactory, ReferenceDataApiResponseProcessor} from "../apis/ReferenceDataApi";

export interface ReferenceDataApiFetchBankDetailsusingRoutingCodeRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    clientHashId: string
    /**
     * This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) of a beneficiary.
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    countryCode: string
    /**
     * This field accepts the unique customer identifier generated on customer creation.
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    customerHashId: string
    /**
     * This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    routingCodeType: string
    /**
     * This field accepts the routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes).
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    routingCodeValue: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApifetchBankDetailsusingRoutingCode
     */
    xRequestId?: string
}

export interface ReferenceDataApiFetchSupportedCorridorsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridors
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridors
     */
    customerHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridors
     */
    xRequestId?: string
}

export interface ReferenceDataApiFetchSupportedCorridorsV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    clientHashId: string
    /**
     * This field accepts the beneficiary account type.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    beneficiaryAccountType?: string
    /**
     * This field accepts type of Client e.g. FI, NonFI, default NonFI.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    clientType?: string
    /**
     * This field accepts the type of customer.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    customerType?: string
    /**
     * This field accepts the [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    destinationCountry?: string
    /**
     * This field accepts the [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    destinationCurrency?: string
    /**
     * This field accepts the different modes of payout.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    payoutMethod?: string
    /**
     * This field determines the routing code type for the currency.
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    routingCodeType?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApifetchSupportedCorridorsV2
     */
    xRequestId?: string
}

export interface ReferenceDataApiSearchRoutingCodeUsingBankNameRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    clientHashId: string
    /**
     * This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    countryCode: string
    /**
     * This field determines the routing code type for the search.
     * @type &#39;IFSC&#39; | &#39;SWIFT&#39; | &#39;ACH CODE&#39; | &#39;BSB CODE&#39; | &#39;SORT CODE&#39; | &#39;BANK CODE&#39; | &#39;LOCATION ID&#39; | &#39;BRANCH CODE&#39; | &#39;BRANCH NAME&#39; | &#39;TRANSIT NUMBER&#39;
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER'
    /**
     * This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    searchValue: string
    /**
     * This field can accept the bank code of specified branch and country.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    bankCode?: string
    /**
     * This field can accept the bank name associated with country.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    bankName?: string
    /**
     * This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    currencyCode?: string
    /**
     * This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    payoutMethod?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBankName
     */
    xRequestId?: string
}

export interface ReferenceDataApiSearchRoutingCodeUsingBranchNameRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    clientHashId: string
    /**
     * This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    countryCode: string
    /**
     * This field determines the routing code type for the search.
     * @type &#39;IFSC&#39; | &#39;SWIFT&#39; | &#39;ACH CODE&#39; | &#39;BSB CODE&#39; | &#39;SORT CODE&#39; | &#39;BANK CODE&#39; | &#39;LOCATION ID&#39; | &#39;BRANCH CODE&#39; | &#39;BRANCH NAME&#39; | &#39;TRANSIT NUMBER&#39;
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER'
    /**
     * This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    searchValue: string
    /**
     * This field can accept the bank code of specified branch and country.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    bankCode?: string
    /**
     * This field can accept the bank name associated with country.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    bankName?: string
    /**
     * This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    currencyCode?: string
    /**
     * This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    payoutMethod?: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeUsingBranchName
     */
    xRequestId?: string
}

export interface ReferenceDataApiSearchRoutingCodeusingbanknamebranchnameRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeusingbanknamebranchname
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeusingbanknamebranchname
     */
    customerHashId: string
    /**
     * partialSearchDTO
     * @type PartialSearchDTO
     * @memberof ReferenceDataApisearchRoutingCodeusingbanknamebranchname
     */
    partialSearchDTO: PartialSearchDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof ReferenceDataApisearchRoutingCodeusingbanknamebranchname
     */
    xRequestId?: string
}

export class ObjectReferenceDataApi {
    private api: ObservableReferenceDataApi

    public constructor(configuration: Configuration, requestFactory?: ReferenceDataApiRequestFactory, responseProcessor?: ReferenceDataApiResponseProcessor) {
        this.api = new ObservableReferenceDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch the bank details against the routing information.
     * Fetch Bank Details using Routing Code
     * @param param the request object
     */
    public fetchBankDetailsusingRoutingCodeWithHttpInfo(param: ReferenceDataApiFetchBankDetailsusingRoutingCodeRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.fetchBankDetailsusingRoutingCodeWithHttpInfo(param.clientHashId, param.countryCode, param.customerHashId, param.routingCodeType, param.routingCodeValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the bank details against the routing information.
     * Fetch Bank Details using Routing Code
     * @param param the request object
     */
    public fetchBankDetailsusingRoutingCode(param: ReferenceDataApiFetchBankDetailsusingRoutingCodeRequest, options?: Configuration): Promise<Resource> {
        return this.api.fetchBankDetailsusingRoutingCode(param.clientHashId, param.countryCode, param.customerHashId, param.routingCodeType, param.routingCodeValue, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors
     * @param param the request object
     */
    public fetchSupportedCorridorsWithHttpInfo(param: ReferenceDataApiFetchSupportedCorridorsRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.fetchSupportedCorridorsWithHttpInfo(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors
     * @param param the request object
     */
    public fetchSupportedCorridors(param: ReferenceDataApiFetchSupportedCorridorsRequest, options?: Configuration): Promise<Resource> {
        return this.api.fetchSupportedCorridors(param.clientHashId, param.customerHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors V2
     * @param param the request object
     */
    public fetchSupportedCorridorsV2WithHttpInfo(param: ReferenceDataApiFetchSupportedCorridorsV2Request, options?: Configuration): Promise<HttpInfo<Array<SupportedCorridorsResponseDTO>>> {
        return this.api.fetchSupportedCorridorsV2WithHttpInfo(param.clientHashId, param.beneficiaryAccountType, param.clientType, param.customerType, param.destinationCountry, param.destinationCurrency, param.payoutMethod, param.routingCodeType, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors V2
     * @param param the request object
     */
    public fetchSupportedCorridorsV2(param: ReferenceDataApiFetchSupportedCorridorsV2Request, options?: Configuration): Promise<Array<SupportedCorridorsResponseDTO>> {
        return this.api.fetchSupportedCorridorsV2(param.clientHashId, param.beneficiaryAccountType, param.clientType, param.customerType, param.destinationCountry, param.destinationCurrency, param.payoutMethod, param.routingCodeType, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details using bank name.
     * Search Routing Code Using Bank Name
     * @param param the request object
     */
    public searchRoutingCodeUsingBankNameWithHttpInfo(param: ReferenceDataApiSearchRoutingCodeUsingBankNameRequest, options?: Configuration): Promise<HttpInfo<Array<PartialSearchBankNameResponseDTO>>> {
        return this.api.searchRoutingCodeUsingBankNameWithHttpInfo(param.clientHashId, param.countryCode, param.routingCodeType, param.searchValue, param.bankCode, param.bankName, param.currencyCode, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details using bank name.
     * Search Routing Code Using Bank Name
     * @param param the request object
     */
    public searchRoutingCodeUsingBankName(param: ReferenceDataApiSearchRoutingCodeUsingBankNameRequest, options?: Configuration): Promise<Array<PartialSearchBankNameResponseDTO>> {
        return this.api.searchRoutingCodeUsingBankName(param.clientHashId, param.countryCode, param.routingCodeType, param.searchValue, param.bankCode, param.bankName, param.currencyCode, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details using branch name.
     * Search Routing Code Using Branch Name
     * @param param the request object
     */
    public searchRoutingCodeUsingBranchNameWithHttpInfo(param: ReferenceDataApiSearchRoutingCodeUsingBranchNameRequest, options?: Configuration): Promise<HttpInfo<Array<PartialSearchBranchNameResponseDTO>>> {
        return this.api.searchRoutingCodeUsingBranchNameWithHttpInfo(param.clientHashId, param.countryCode, param.routingCodeType, param.searchValue, param.bankCode, param.bankName, param.currencyCode, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details using branch name.
     * Search Routing Code Using Branch Name
     * @param param the request object
     */
    public searchRoutingCodeUsingBranchName(param: ReferenceDataApiSearchRoutingCodeUsingBranchNameRequest, options?: Configuration): Promise<Array<PartialSearchBranchNameResponseDTO>> {
        return this.api.searchRoutingCodeUsingBranchName(param.clientHashId, param.countryCode, param.routingCodeType, param.searchValue, param.bankCode, param.bankName, param.currencyCode, param.payoutMethod, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.
     * Search Routing Code (using bank name/branch name)
     * @param param the request object
     */
    public searchRoutingCodeusingbanknamebranchnameWithHttpInfo(param: ReferenceDataApiSearchRoutingCodeusingbanknamebranchnameRequest, options?: Configuration): Promise<HttpInfo<Resource>> {
        return this.api.searchRoutingCodeusingbanknamebranchnameWithHttpInfo(param.clientHashId, param.customerHashId, param.partialSearchDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.
     * Search Routing Code (using bank name/branch name)
     * @param param the request object
     */
    public searchRoutingCodeusingbanknamebranchname(param: ReferenceDataApiSearchRoutingCodeusingbanknamebranchnameRequest, options?: Configuration): Promise<Resource> {
        return this.api.searchRoutingCodeusingbanknamebranchname(param.clientHashId, param.customerHashId, param.partialSearchDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableSecurityApi } from "./ObservableAPI";
import { SecurityApiRequestFactory, SecurityApiResponseProcessor} from "../apis/SecurityApi";

export interface SecurityApiFetchATMPinRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof SecurityApifetchATMPin
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApifetchATMPin
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApifetchATMPin
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApifetchATMPin
     */
    cardHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof SecurityApifetchATMPin
     */
    xRequestId?: string
}

export interface SecurityApiFetchCVV2Request {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof SecurityApifetchCVV2
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApifetchCVV2
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApifetchCVV2
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApifetchCVV2
     */
    cardHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof SecurityApifetchCVV2
     */
    xRequestId?: string
}

export interface SecurityApiFetchCardDataEncryptedV2Request {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof SecurityApifetchCardDataEncryptedV2
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApifetchCardDataEncryptedV2
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApifetchCardDataEncryptedV2
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApifetchCardDataEncryptedV2
     */
    cardHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof SecurityApifetchCardDataEncryptedV2
     */
    xRequestId?: string
}

export interface SecurityApiFetchPinStatusRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof SecurityApifetchPinStatus
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApifetchPinStatus
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApifetchPinStatus
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApifetchPinStatus
     */
    cardHashId: string
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof SecurityApifetchPinStatus
     */
    xRequestId?: string
}

export interface SecurityApiSetResetPINRequest {
    /**
     * The unique client identifier generated and shared before the API handshake.
     * @type string
     * @memberof SecurityApisetResetPIN
     */
    clientHashId: string
    /**
     * The unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApisetResetPIN
     */
    customerHashId: string
    /**
     * The unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApisetResetPIN
     */
    walletHashId: string
    /**
     * The unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApisetResetPIN
     */
    cardHashId: string
    /**
     * pinUpdate
     * @type PinUpdateRequestDTO
     * @memberof SecurityApisetResetPIN
     */
    pinUpdateRequestDTO: PinUpdateRequestDTO
    /**
     * Enter a unique UUID value.
     * @type string
     * @memberof SecurityApisetResetPIN
     */
    xRequestId?: string
}

export interface SecurityApiUnblockCardPINRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof SecurityApiunblockCardPIN
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApiunblockCardPIN
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApiunblockCardPIN
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApiunblockCardPIN
     */
    cardHashId: string
    /**
     * Please enter a unique UUID value
     * @type string
     * @memberof SecurityApiunblockCardPIN
     */
    xRequestId?: string
}

export interface SecurityApiUnmaskCardRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof SecurityApiunmaskCard
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof SecurityApiunmaskCard
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof SecurityApiunmaskCard
     */
    walletHashId: string
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type string
     * @memberof SecurityApiunmaskCard
     */
    cardHashId: string
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof SecurityApiunmaskCard
     */
    xRequestId?: string
}

export class ObjectSecurityApi {
    private api: ObservableSecurityApi

    public constructor(configuration: Configuration, requestFactory?: SecurityApiRequestFactory, responseProcessor?: SecurityApiResponseProcessor) {
        this.api = new ObservableSecurityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.
     * Fetch ATM Pin
     * @param param the request object
     */
    public fetchATMPinWithHttpInfo(param: SecurityApiFetchATMPinRequest, options?: Configuration): Promise<HttpInfo<FetchPinResponseDTO>> {
        return this.api.fetchATMPinWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.
     * Fetch ATM Pin
     * @param param the request object
     */
    public fetchATMPin(param: SecurityApiFetchATMPinRequest, options?: Configuration): Promise<FetchPinResponseDTO> {
        return this.api.fetchATMPin(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Fetch CVV2
     * @param param the request object
     */
    public fetchCVV2WithHttpInfo(param: SecurityApiFetchCVV2Request, options?: Configuration): Promise<HttpInfo<CvvResponseDTO>> {
        return this.api.fetchCVV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Fetch CVV2
     * @param param the request object
     */
    public fetchCVV2(param: SecurityApiFetchCVV2Request, options?: Configuration): Promise<CvvResponseDTO> {
        return this.api.fetchCVV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card
     * Fetch card data encrypted
     * @param param the request object
     */
    public fetchCardDataEncryptedV2WithHttpInfo(param: SecurityApiFetchCardDataEncryptedV2Request, options?: Configuration): Promise<HttpInfo<RetrieveCardDetailsResponseDTO>> {
        return this.api.fetchCardDataEncryptedV2WithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card
     * Fetch card data encrypted
     * @param param the request object
     */
    public fetchCardDataEncryptedV2(param: SecurityApiFetchCardDataEncryptedV2Request, options?: Configuration): Promise<RetrieveCardDetailsResponseDTO> {
        return this.api.fetchCardDataEncryptedV2(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the PIN status of an active card.
     * Fetch Pin Status
     * @param param the request object
     */
    public fetchPinStatusWithHttpInfo(param: SecurityApiFetchPinStatusRequest, options?: Configuration): Promise<HttpInfo<FetchPinStatusResponseDTO>> {
        return this.api.fetchPinStatusWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to fetch the PIN status of an active card.
     * Fetch Pin Status
     * @param param the request object
     */
    public fetchPinStatus(param: SecurityApiFetchPinStatusRequest, options?: Configuration): Promise<FetchPinStatusResponseDTO> {
        return this.api.fetchPinStatus(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.
     * Set/Reset PIN
     * @param param the request object
     */
    public setResetPINWithHttpInfo(param: SecurityApiSetResetPINRequest, options?: Configuration): Promise<HttpInfo<PinUpdateResponseDTO>> {
        return this.api.setResetPINWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.pinUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.
     * Set/Reset PIN
     * @param param the request object
     */
    public setResetPIN(param: SecurityApiSetResetPINRequest, options?: Configuration): Promise<PinUpdateResponseDTO> {
        return this.api.setResetPIN(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.pinUpdateRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.
     * Unblock PIN
     * @param param the request object
     */
    public unblockCardPINWithHttpInfo(param: SecurityApiUnblockCardPINRequest, options?: Configuration): Promise<HttpInfo<PinUpdateResponseDTO>> {
        return this.api.unblockCardPINWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.
     * Unblock PIN
     * @param param the request object
     */
    public unblockCardPIN(param: SecurityApiUnblockCardPINRequest, options?: Configuration): Promise<PinUpdateResponseDTO> {
        return this.api.unblockCardPIN(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Unmask Card
     * @param param the request object
     */
    public unmaskCardWithHttpInfo(param: SecurityApiUnmaskCardRequest, options?: Configuration): Promise<HttpInfo<UnmaskCardResponseDTO>> {
        return this.api.unmaskCardWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Unmask Card
     * @param param the request object
     */
    public unmaskCard(param: SecurityApiUnmaskCardRequest, options?: Configuration): Promise<UnmaskCardResponseDTO> {
        return this.api.unmaskCard(param.clientHashId, param.customerHashId, param.walletHashId, param.cardHashId, param.xRequestId,  options).toPromise();
    }

}

import { ObservableSimulatorsApi } from "./ObservableAPI";
import { SimulatorsApiRequestFactory, SimulatorsApiResponseProcessor} from "../apis/SimulatorsApi";

export interface SimulatorsApiSimulateAuthorizationRequest {
    /**
     * message
     * @type LocalIsoRequest
     * @memberof SimulatorsApisimulateAuthorization
     */
    localIsoRequest: LocalIsoRequest
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof SimulatorsApisimulateAuthorization
     */
    xRequestId?: string
}

export interface SimulatorsApiSimulateClearingRequest {
    /**
     * settlementRequestDTO
     * @type SettlementRequestDTO
     * @memberof SimulatorsApisimulateClearing
     */
    settlementRequestDTO: SettlementRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof SimulatorsApisimulateClearing
     */
    xRequestId?: string
}

export class ObjectSimulatorsApi {
    private api: ObservableSimulatorsApi

    public constructor(configuration: Configuration, requestFactory?: SimulatorsApiRequestFactory, responseProcessor?: SimulatorsApiResponseProcessor) {
        this.api = new ObservableSimulatorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
     * Simulate Authorize Card Transaction
     * @param param the request object
     */
    public simulateAuthorizationWithHttpInfo(param: SimulatorsApiSimulateAuthorizationRequest, options?: Configuration): Promise<HttpInfo<void | LocalIsoResponse>> {
        return this.api.simulateAuthorizationWithHttpInfo(param.localIsoRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
     * Simulate Authorize Card Transaction
     * @param param the request object
     */
    public simulateAuthorization(param: SimulatorsApiSimulateAuthorizationRequest, options?: Configuration): Promise<void | LocalIsoResponse> {
        return this.api.simulateAuthorization(param.localIsoRequest, param.xRequestId,  options).toPromise();
    }

    /**
     * This API can be used to run simulation of a given settlement transaction
     * Simulate Settlement Transaction
     * @param param the request object
     */
    public simulateClearingWithHttpInfo(param: SimulatorsApiSimulateClearingRequest, options?: Configuration): Promise<HttpInfo<void | string>> {
        return this.api.simulateClearingWithHttpInfo(param.settlementRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API can be used to run simulation of a given settlement transaction
     * Simulate Settlement Transaction
     * @param param the request object
     */
    public simulateClearing(param: SimulatorsApiSimulateClearingRequest, options?: Configuration): Promise<void | string> {
        return this.api.simulateClearing(param.settlementRequestDTO, param.xRequestId,  options).toPromise();
    }

}

import { ObservableWalletToWalletTransfersApi } from "./ObservableAPI";
import { WalletToWalletTransfersApiRequestFactory, WalletToWalletTransfersApiResponseProcessor} from "../apis/WalletToWalletTransfersApi";

export interface WalletToWalletTransfersApiP2PTransferRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof WalletToWalletTransfersApip2PTransfer
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof WalletToWalletTransfersApip2PTransfer
     */
    customerHashId: string
    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof WalletToWalletTransfersApip2PTransfer
     */
    walletHashId: string
    /**
     * p2pTransferDTO
     * @type P2PTransferDTO
     * @memberof WalletToWalletTransfersApip2PTransfer
     */
    p2PTransferDTO: P2PTransferDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof WalletToWalletTransfersApip2PTransfer
     */
    xRequestId?: string
}

export interface WalletToWalletTransfersApiWalletTransferRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type string
     * @memberof WalletToWalletTransfersApiwalletTransfer
     */
    clientHashId: string
    /**
     * Unique customer identifier generated on customer creation.
     * @type string
     * @memberof WalletToWalletTransfersApiwalletTransfer
     */
    customerHashId: string
    /**
     * Unique source wallet identifier generated simultaneously with customer creation.
     * @type string
     * @memberof WalletToWalletTransfersApiwalletTransfer
     */
    walletHashId: string
    /**
     * fundTransferRequestDTO
     * @type FundTransferRequestDTO
     * @memberof WalletToWalletTransfersApiwalletTransfer
     */
    fundTransferRequestDTO: FundTransferRequestDTO
    /**
     * Enter a unique UUID value
     * @type string
     * @memberof WalletToWalletTransfersApiwalletTransfer
     */
    xRequestId?: string
}

export class ObjectWalletToWalletTransfersApi {
    private api: ObservableWalletToWalletTransfersApi

    public constructor(configuration: Configuration, requestFactory?: WalletToWalletTransfersApiRequestFactory, responseProcessor?: WalletToWalletTransfersApiResponseProcessor) {
        this.api = new ObservableWalletToWalletTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows you to transfer money from one wallet to another wallet within the same client family.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. Use the [Wallet To Wallet Transfer](ref:wallettransfer) API to achieve the same functionality.
     * P2P Transfer
     * @param param the request object
     */
    public p2PTransferWithHttpInfo(param: WalletToWalletTransfersApiP2PTransferRequest, options?: Configuration): Promise<HttpInfo<P2PTransferResponse>> {
        return this.api.p2PTransferWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.p2PTransferDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to transfer money from one wallet to another wallet within the same client family.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. Use the [Wallet To Wallet Transfer](ref:wallettransfer) API to achieve the same functionality.
     * P2P Transfer
     * @param param the request object
     */
    public p2PTransfer(param: WalletToWalletTransfersApiP2PTransferRequest, options?: Configuration): Promise<P2PTransferResponse> {
        return this.api.p2PTransfer(param.clientHashId, param.customerHashId, param.walletHashId, param.p2PTransferDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to transfer the money from one wallet to another wallet for customers belonging to different client.
     * Wallet to Wallet Transfer
     * @param param the request object
     */
    public walletTransferWithHttpInfo(param: WalletToWalletTransfersApiWalletTransferRequest, options?: Configuration): Promise<HttpInfo<FundTransferResponse>> {
        return this.api.walletTransferWithHttpInfo(param.clientHashId, param.customerHashId, param.walletHashId, param.fundTransferRequestDTO, param.xRequestId,  options).toPromise();
    }

    /**
     * This API allows you to transfer the money from one wallet to another wallet for customers belonging to different client.
     * Wallet to Wallet Transfer
     * @param param the request object
     */
    public walletTransfer(param: WalletToWalletTransfersApiWalletTransferRequest, options?: Configuration): Promise<FundTransferResponse> {
        return this.api.walletTransfer(param.clientHashId, param.customerHashId, param.walletHashId, param.fundTransferRequestDTO, param.xRequestId,  options).toPromise();
    }

}
