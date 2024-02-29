import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BeneficiaryApiRequestFactory, BeneficiaryApiResponseProcessor} from "../apis/BeneficiaryApi";
export class ObservableBeneficiaryApi {
    private requestFactory: BeneficiaryApiRequestFactory;
    private responseProcessor: BeneficiaryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BeneficiaryApiRequestFactory,
        responseProcessor?: BeneficiaryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BeneficiaryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BeneficiaryApiResponseProcessor();
    }

    /**
     * This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.
     * Account verification (Confirmation of Payee)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param accountValidationRequestDTO accountValidationRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public accountVerificationWithHttpInfo(clientHashId: string, customerHashId: string, accountValidationRequestDTO: AccountValidationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AccountValidationResponseDTO>> {
        const requestContextPromise = this.requestFactory.accountVerification(clientHashId, customerHashId, accountValidationRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountVerificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.
     * Account verification (Confirmation of Payee)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param accountValidationRequestDTO accountValidationRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public accountVerification(clientHashId: string, customerHashId: string, accountValidationRequestDTO: AccountValidationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<AccountValidationResponseDTO> {
        return this.accountVerificationWithHttpInfo(clientHashId, customerHashId, accountValidationRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AccountValidationResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.
     * Add Beneficiary
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequest addBeneficiaryRequest
     * @param xRequestId Enter a unique UUID value
     */
    public addBeneficiaryWithHttpInfo(clientHashId: string, customerHashId: string, addBeneficiaryRequest: AddBeneficiaryRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.addBeneficiary(clientHashId, customerHashId, addBeneficiaryRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.
     * Add Beneficiary
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequest addBeneficiaryRequest
     * @param xRequestId Enter a unique UUID value
     */
    public addBeneficiary(clientHashId: string, customerHashId: string, addBeneficiaryRequest: AddBeneficiaryRequest, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.addBeneficiaryWithHttpInfo(clientHashId, customerHashId, addBeneficiaryRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.
     * Add Beneficiary V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequestDTO addBeneficiaryRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addBeneficiaryV2WithHttpInfo(clientHashId: string, customerHashId: string, addBeneficiaryRequestDTO: AddBeneficiaryRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<BeneficiaryResponseDTO>> {
        const requestContextPromise = this.requestFactory.addBeneficiaryV2(clientHashId, customerHashId, addBeneficiaryRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBeneficiaryV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.
     * Add Beneficiary V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequestDTO addBeneficiaryRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addBeneficiaryV2(clientHashId: string, customerHashId: string, addBeneficiaryRequestDTO: AddBeneficiaryRequestDTO, xRequestId?: string, _options?: Configuration): Observable<BeneficiaryResponseDTO> {
        return this.addBeneficiaryV2WithHttpInfo(clientHashId, customerHashId, addBeneficiaryRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<BeneficiaryResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.
     * Beneficiary Details
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryDetailsWithHttpInfo(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.beneficiaryDetails(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.
     * Beneficiary Details
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryDetails(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.beneficiaryDetailsWithHttpInfo(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.
     * Beneficiary Details V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryDetailsV2WithHttpInfo(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<BeneficiaryResponseDTO>> {
        const requestContextPromise = this.requestFactory.beneficiaryDetailsV2(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryDetailsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch beneficiary details of an individual beneficiary.
     * Beneficiary Details V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryDetailsV2(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<BeneficiaryResponseDTO> {
        return this.beneficiaryDetailsV2WithHttpInfo(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<BeneficiaryResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.
     * Beneficiary List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryListWithHttpInfo(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.beneficiaryList(clientHashId, customerHashId, parameters, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryListWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.
     * Beneficiary List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryList(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.beneficiaryListWithHttpInfo(clientHashId, customerHashId, parameters, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch beneficiary details.
     * Beneficiary List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryListV2WithHttpInfo(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<BeneficiaryResponseDTO>>> {
        const requestContextPromise = this.requestFactory.beneficiaryListV2(clientHashId, customerHashId, parameters, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryListV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch beneficiary details.
     * Beneficiary List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryListV2(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Observable<Array<BeneficiaryResponseDTO>> {
        return this.beneficiaryListV2WithHttpInfo(clientHashId, customerHashId, parameters, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<BeneficiaryResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.
     * Beneficiary Validation Schema
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryValidationSchemaWithHttpInfo(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.beneficiaryValidationSchema(clientHashId, currencyCode, customerHashId, payoutMethod, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryValidationSchemaWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.
     * Beneficiary Validation Schema
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryValidationSchema(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.beneficiaryValidationSchemaWithHttpInfo(clientHashId, currencyCode, customerHashId, payoutMethod, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.
     * Beneficiary Validation Schema V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryValidationSchemaV2WithHttpInfo(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.beneficiaryValidationSchemaV2(clientHashId, currencyCode, customerHashId, payoutMethod, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beneficiaryValidationSchemaV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to fetch the validation schema for beneficiary validation details.
     * Beneficiary Validation Schema V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.
     * @param xRequestId Enter a unique UUID value
     */
    public beneficiaryValidationSchemaV2(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<string> {
        return this.beneficiaryValidationSchemaV2WithHttpInfo(clientHashId, currencyCode, customerHashId, payoutMethod, xRequestId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)
     * Confirmation of Payee (Previous version)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param beneficiaryValidationRequestDTO beneficiaryValidationRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public confirmationofPayeeWithHttpInfo(clientHashId: string, customerHashId: string, beneficiaryValidationRequestDTO: BeneficiaryValidationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<BeneficiaryValidationResponseDTO>> {
        const requestContextPromise = this.requestFactory.confirmationofPayee(clientHashId, customerHashId, beneficiaryValidationRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmationofPayeeWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)
     * Confirmation of Payee (Previous version)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param beneficiaryValidationRequestDTO beneficiaryValidationRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public confirmationofPayee(clientHashId: string, customerHashId: string, beneficiaryValidationRequestDTO: BeneficiaryValidationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<BeneficiaryValidationResponseDTO> {
        return this.confirmationofPayeeWithHttpInfo(clientHashId, customerHashId, beneficiaryValidationRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<BeneficiaryValidationResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to delete a beneficiary.
     * Delete Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public deleteBeneficiaryWithHttpInfo(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.deleteBeneficiary(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to delete a beneficiary.
     * Delete Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public deleteBeneficiary(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.deleteBeneficiaryWithHttpInfo(beneficiaryHashId, clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param addBeneficiaryRequest Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public updateBeneficiaryWithHttpInfo(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, addBeneficiaryRequest?: AddBeneficiaryRequest, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.updateBeneficiary(beneficiaryHashId, clientHashId, customerHashId, xRequestId, addBeneficiaryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBeneficiaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param addBeneficiaryRequest Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public updateBeneficiary(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, addBeneficiaryRequest?: AddBeneficiaryRequest, _options?: Configuration): Observable<Resource> {
        return this.updateBeneficiaryWithHttpInfo(beneficiaryHashId, clientHashId, customerHashId, xRequestId, addBeneficiaryRequest, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param updateBeneficiaryRequestDTO Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public updateBeneficiaryV2WithHttpInfo(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, updateBeneficiaryRequestDTO?: UpdateBeneficiaryRequestDTO, _options?: Configuration): Observable<HttpInfo<BeneficiaryResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateBeneficiaryV2(beneficiaryHashId, clientHashId, customerHashId, xRequestId, updateBeneficiaryRequestDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBeneficiaryV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update beneficiary details.
     * Update Beneficiary V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param updateBeneficiaryRequestDTO Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public updateBeneficiaryV2(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, updateBeneficiaryRequestDTO?: UpdateBeneficiaryRequestDTO, _options?: Configuration): Observable<BeneficiaryResponseDTO> {
        return this.updateBeneficiaryV2WithHttpInfo(beneficiaryHashId, clientHashId, customerHashId, xRequestId, updateBeneficiaryRequestDTO, _options).pipe(map((apiResponse: HttpInfo<BeneficiaryResponseDTO>) => apiResponse.data));
    }

}

import { CardsReferenceDataApiRequestFactory, CardsReferenceDataApiResponseProcessor} from "../apis/CardsReferenceDataApi";
export class ObservableCardsReferenceDataApi {
    private requestFactory: CardsReferenceDataApiRequestFactory;
    private responseProcessor: CardsReferenceDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CardsReferenceDataApiRequestFactory,
        responseProcessor?: CardsReferenceDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CardsReferenceDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CardsReferenceDataApiResponseProcessor();
    }

    /**
     * This API allows you to get the reference exchange rate.
     * Reference Exchange Rate
     * @param cardScheme This field accepts the card scheme provider name: Visa Mastercard
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param fromAmount From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
     * @param fromCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
     * @param toCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
     * @param xRequestId Enter a unique UUID value.
     */
    public referenceExchangeRateWithHttpInfo(cardScheme: string, clientHashId: string, fromAmount: number, fromCurrency: string, toCurrency: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ReferenceRateResponseDto>> {
        const requestContextPromise = this.requestFactory.referenceExchangeRate(cardScheme, clientHashId, fromAmount, fromCurrency, toCurrency, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.referenceExchangeRateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to get the reference exchange rate.
     * Reference Exchange Rate
     * @param cardScheme This field accepts the card scheme provider name: Visa Mastercard
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param fromAmount From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
     * @param fromCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
     * @param toCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
     * @param xRequestId Enter a unique UUID value.
     */
    public referenceExchangeRate(cardScheme: string, clientHashId: string, fromAmount: number, fromCurrency: string, toCurrency: string, xRequestId?: string, _options?: Configuration): Observable<ReferenceRateResponseDto> {
        return this.referenceExchangeRateWithHttpInfo(cardScheme, clientHashId, fromAmount, fromCurrency, toCurrency, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ReferenceRateResponseDto>) => apiResponse.data));
    }

}

import { Class3DSApiRequestFactory, Class3DSApiResponseProcessor} from "../apis/Class3DSApi";
export class ObservableClass3DSApi {
    private requestFactory: Class3DSApiRequestFactory;
    private responseProcessor: Class3DSApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: Class3DSApiRequestFactory,
        responseProcessor?: Class3DSApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new Class3DSApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new Class3DSApiResponseProcessor();
    }

    /**
     * API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`
     * 3DS passcode enrollment status
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public passcodeEnrollmentStatusWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<PasscodeStatusDTO>>> {
        const requestContextPromise = this.requestFactory.passcodeEnrollmentStatus(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.passcodeEnrollmentStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`
     * 3DS passcode enrollment status
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public passcodeEnrollmentStatus(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId?: string, xRequestId?: string, _options?: Configuration): Observable<Array<PasscodeStatusDTO>> {
        return this.passcodeEnrollmentStatusWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<PasscodeStatusDTO>>) => apiResponse.data));
    }

    /**
     * API to notify Nium on success of OOB authentication
     * Process OOB callback
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oOBCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public processOOBcallbackWithHttpInfo(clientHashId: string, oOBCallbackRequestDTO: OOBCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<OOBCallbackResponseDTO>> {
        const requestContextPromise = this.requestFactory.processOOBcallback(clientHashId, oOBCallbackRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.processOOBcallbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * API to notify Nium on success of OOB authentication
     * Process OOB callback
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oOBCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public processOOBcallback(clientHashId: string, oOBCallbackRequestDTO: OOBCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Observable<OOBCallbackResponseDTO> {
        return this.processOOBcallbackWithHttpInfo(clientHashId, oOBCallbackRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<OOBCallbackResponseDTO>) => apiResponse.data));
    }

    /**
     * API to notify Nium on success or failure of OOB authentication
     * 3DS OOB Callback V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oobCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public processOobCallbackV2WithHttpInfo(clientHashId: string, oobCallbackRequestDTO: OobCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.processOobCallbackV2(clientHashId, oobCallbackRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.processOobCallbackV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * API to notify Nium on success or failure of OOB authentication
     * 3DS OOB Callback V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oobCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public processOobCallbackV2(clientHashId: string, oobCallbackRequestDTO: OobCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Observable<void> {
        return this.processOobCallbackV2WithHttpInfo(clientHashId, oobCallbackRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * API to update the 3DS passcode for a specific card.
     * Add or Update passcode
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param passcodeRequestDTO passcodeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public setPasscodeWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, passcodeRequestDTO: PasscodeRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PasscodeResponseDTO>> {
        const requestContextPromise = this.requestFactory.setPasscode(clientHashId, customerHashId, walletHashId, cardHashId, passcodeRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setPasscodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * API to update the 3DS passcode for a specific card.
     * Add or Update passcode
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param passcodeRequestDTO passcodeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public setPasscode(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, passcodeRequestDTO: PasscodeRequestDTO, xRequestId?: string, _options?: Configuration): Observable<PasscodeResponseDTO> {
        return this.setPasscodeWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, passcodeRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PasscodeResponseDTO>) => apiResponse.data));
    }

}

import { ClientPrefundAccountApiRequestFactory, ClientPrefundAccountApiResponseProcessor} from "../apis/ClientPrefundAccountApi";
export class ObservableClientPrefundAccountApi {
    private requestFactory: ClientPrefundAccountApiRequestFactory;
    private responseProcessor: ClientPrefundAccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientPrefundAccountApiRequestFactory,
        responseProcessor?: ClientPrefundAccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientPrefundAccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientPrefundAccountApiResponseProcessor();
    }

    /**
     * This API allows you to fetch the available prefund balance for a client.
     * Client Prefund Balances
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public clientPrefundBalancesWithHttpInfo(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<AccountResponseDTO>>> {
        const requestContextPromise = this.requestFactory.clientPrefundBalances(clientHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientPrefundBalancesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the available prefund balance for a client.
     * Client Prefund Balances
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public clientPrefundBalances(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<AccountResponseDTO>> {
        return this.clientPrefundBalancesWithHttpInfo(clientHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<AccountResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API allows our clients to raise a prefund request in the system.
     * Client Prefund Request
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param prefundRequestDTO prefundRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public clientPrefundRequestWithHttpInfo(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ClientPrefundResponseDTO>> {
        const requestContextPromise = this.requestFactory.clientPrefundRequest(clientHashId, prefundRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientPrefundRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows our clients to raise a prefund request in the system.
     * Client Prefund Request
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param prefundRequestDTO prefundRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public clientPrefundRequest(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, _options?: Configuration): Observable<ClientPrefundResponseDTO> {
        return this.clientPrefundRequestWithHttpInfo(clientHashId, prefundRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ClientPrefundResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the details of client prefund requests.
     * Fetch Client Prefund Request
     * @param clientHashId Unique client Id assigned to the client during the onboarding process.
     * @param amount amount
     * @param bankReferenceNumber bankReferenceNumber
     * @param currency currency
     * @param endDate endDate
     * @param order The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param prefundStatus prefundStatus
     * @param size The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
     * @param startDate startDate
     * @param systemReferenceNumber systemReferenceNumber
     * @param uniquePayerId uniquePayerId
     * @param uniquePaymentId uniquePaymentId
     * @param xRequestId Enter a unique UUID value
     */
    public fetchClientPrefundRequestWithHttpInfo(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.fetchClientPrefundRequest(clientHashId, amount, bankReferenceNumber, currency, endDate, order, page, prefundStatus, size, startDate, systemReferenceNumber, uniquePayerId, uniquePaymentId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchClientPrefundRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the details of client prefund requests.
     * Fetch Client Prefund Request
     * @param clientHashId Unique client Id assigned to the client during the onboarding process.
     * @param amount amount
     * @param bankReferenceNumber bankReferenceNumber
     * @param currency currency
     * @param endDate endDate
     * @param order The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param prefundStatus prefundStatus
     * @param size The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
     * @param startDate startDate
     * @param systemReferenceNumber systemReferenceNumber
     * @param uniquePayerId uniquePayerId
     * @param uniquePaymentId uniquePaymentId
     * @param xRequestId Enter a unique UUID value
     */
    public fetchClientPrefundRequest(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, _options?: Configuration): Observable<any> {
        return this.fetchClientPrefundRequestWithHttpInfo(clientHashId, amount, bankReferenceNumber, currency, endDate, order, page, prefundStatus, size, startDate, systemReferenceNumber, uniquePayerId, uniquePaymentId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { ClientSettingsApiRequestFactory, ClientSettingsApiResponseProcessor} from "../apis/ClientSettingsApi";
export class ObservableClientSettingsApi {
    private requestFactory: ClientSettingsApiRequestFactory;
    private responseProcessor: ClientSettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientSettingsApiRequestFactory,
        responseProcessor?: ClientSettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientSettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientSettingsApiResponseProcessor();
    }

    /**
     * This API will help you to fetch the configuration details of a client.
     * Client Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public clientDetailsWithHttpInfo(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ClientDetailResponseDTO2>> {
        const requestContextPromise = this.requestFactory.clientDetails(clientHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will help you to fetch the configuration details of a client.
     * Client Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public clientDetails(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<ClientDetailResponseDTO2> {
        return this.clientDetailsWithHttpInfo(clientHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ClientDetailResponseDTO2>) => apiResponse.data));
    }

    /**
     * This API provides all the fees that have been set at the client level by NIUM. Refer to the following [Fees User Guide](doc:fees) for the Glossary of Fees for pre-defined fees supported on the system
     * Fee Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public feeDetailsWithHttpInfo(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<ClientFeeDetailsResponseDTO>>> {
        const requestContextPromise = this.requestFactory.feeDetails(clientHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.feeDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API provides all the fees that have been set at the client level by NIUM. Refer to the following [Fees User Guide](doc:fees) for the Glossary of Fees for pre-defined fees supported on the system
     * Fee Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public feeDetails(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<ClientFeeDetailsResponseDTO>> {
        return this.feeDetailsWithHttpInfo(clientHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<ClientFeeDetailsResponseDTO>>) => apiResponse.data));
    }

}

import { ClientTransactionsApiRequestFactory, ClientTransactionsApiResponseProcessor} from "../apis/ClientTransactionsApi";
export class ObservableClientTransactionsApi {
    private requestFactory: ClientTransactionsApiRequestFactory;
    private responseProcessor: ClientTransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientTransactionsApiRequestFactory,
        responseProcessor?: ClientTransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientTransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientTransactionsApiResponseProcessor();
    }

    /**
     * This API allows you to fetch transaction details at the client level.
     * Client Transactions
     * @param clientHashId Unique client identifier generated and shared before API handshake. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned.
     * @param authCode This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @param authCurrency This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param businessTransaction This parameter can filter the transactions based on businessTransaction flag.
     * @param cardHashId This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @param childCustomerHashId This field contains the unique child customer identifier generated when new child customer created.
     * @param customerHashId Unique identifier generated with customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param mcc This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @param merchantCategories This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @param merchantCity This parameter can filter the transactions based on the merchant city field.
     * @param merchantCountries This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @param merchantCountry This parameter can filter the transactions based on the merchant country field.
     * @param merchantName This parameter can filter the transactions based on the merchant name field.
     * @param order The sort order for the results.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param paymentInstrumentHashId This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @param property The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @param settlementDate This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @param settlementStatus This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @param size This will decide the number of elements per page. Typical values can be 1-20.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param status This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @param systemTraceAuditNumber This parameter can filter the transactions based on systemTraceAuditNumber.
     * @param tagKey This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @param transactionCurrency This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @param transactionType This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @param transactionsLabelsKey This parameter can filter the transactions based on transactionsLabelsKey.
     * @param transactionsLabelsValue This parameter can filter the transactions based on transactionsLabelsValue.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public clientTransactionsWithHttpInfo(clientHashId: string, authCode?: string, authCurrency?: string, businessTransaction?: boolean, cardHashId?: string, childCustomerHashId?: string, customerHashId?: string, endDate?: string, mcc?: string, merchantCategories?: string, merchantCity?: string, merchantCountries?: string, merchantCountry?: string, merchantName?: string, order?: 'ASC' | 'DESC', page?: number, paymentInstrumentHashId?: string, property?: string, settlementDate?: string, settlementStatus?: string, size?: number, startDate?: string, status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED', systemTraceAuditNumber?: string, tagKey?: string, tagValue?: string, transactionCurrency?: string, transactionType?: string, transactionsLabelsKey?: string, transactionsLabelsValue?: string, walletHashId?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ClientTransactionsResponseDTO>> {
        const requestContextPromise = this.requestFactory.clientTransactions(clientHashId, authCode, authCurrency, businessTransaction, cardHashId, childCustomerHashId, customerHashId, endDate, mcc, merchantCategories, merchantCity, merchantCountries, merchantCountry, merchantName, order, page, paymentInstrumentHashId, property, settlementDate, settlementStatus, size, startDate, status, systemTraceAuditNumber, tagKey, tagValue, transactionCurrency, transactionType, transactionsLabelsKey, transactionsLabelsValue, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch transaction details at the client level.
     * Client Transactions
     * @param clientHashId Unique client identifier generated and shared before API handshake. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned.
     * @param authCode This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @param authCurrency This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param businessTransaction This parameter can filter the transactions based on businessTransaction flag.
     * @param cardHashId This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @param childCustomerHashId This field contains the unique child customer identifier generated when new child customer created.
     * @param customerHashId Unique identifier generated with customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param mcc This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @param merchantCategories This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @param merchantCity This parameter can filter the transactions based on the merchant city field.
     * @param merchantCountries This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @param merchantCountry This parameter can filter the transactions based on the merchant country field.
     * @param merchantName This parameter can filter the transactions based on the merchant name field.
     * @param order The sort order for the results.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param paymentInstrumentHashId This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @param property The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @param settlementDate This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @param settlementStatus This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @param size This will decide the number of elements per page. Typical values can be 1-20.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param status This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @param systemTraceAuditNumber This parameter can filter the transactions based on systemTraceAuditNumber.
     * @param tagKey This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @param transactionCurrency This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @param transactionType This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @param transactionsLabelsKey This parameter can filter the transactions based on transactionsLabelsKey.
     * @param transactionsLabelsValue This parameter can filter the transactions based on transactionsLabelsValue.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public clientTransactions(clientHashId: string, authCode?: string, authCurrency?: string, businessTransaction?: boolean, cardHashId?: string, childCustomerHashId?: string, customerHashId?: string, endDate?: string, mcc?: string, merchantCategories?: string, merchantCity?: string, merchantCountries?: string, merchantCountry?: string, merchantName?: string, order?: 'ASC' | 'DESC', page?: number, paymentInstrumentHashId?: string, property?: string, settlementDate?: string, settlementStatus?: string, size?: number, startDate?: string, status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED', systemTraceAuditNumber?: string, tagKey?: string, tagValue?: string, transactionCurrency?: string, transactionType?: string, transactionsLabelsKey?: string, transactionsLabelsValue?: string, walletHashId?: string, xRequestId?: string, _options?: Configuration): Observable<ClientTransactionsResponseDTO> {
        return this.clientTransactionsWithHttpInfo(clientHashId, authCode, authCurrency, businessTransaction, cardHashId, childCustomerHashId, customerHashId, endDate, mcc, merchantCategories, merchantCity, merchantCountries, merchantCountry, merchantName, order, page, paymentInstrumentHashId, property, settlementDate, settlementStatus, size, startDate, status, systemTraceAuditNumber, tagKey, tagValue, transactionCurrency, transactionType, transactionsLabelsKey, transactionsLabelsValue, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ClientTransactionsResponseDTO>) => apiResponse.data));
    }

}

import { ControlsApiRequestFactory, ControlsApiResponseProcessor} from "../apis/ControlsApi";
export class ObservableControlsApi {
    private requestFactory: ControlsApiRequestFactory;
    private responseProcessor: ControlsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ControlsApiRequestFactory,
        responseProcessor?: ControlsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ControlsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ControlsApiResponseProcessor();
    }

    /**
     * This API allows you to fetch card limits.
     * Fetch Card Limits
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getCardLimitsWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TransactionLimitsDTO>> {
        const requestContextPromise = this.requestFactory.getCardLimits(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCardLimitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch card limits.
     * Fetch Card Limits
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getCardLimits(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<TransactionLimitsDTO> {
        return this.getCardLimitsWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TransactionLimitsDTO>) => apiResponse.data));
    }

    /**
     * This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.
     * Get Channel Restriction
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getChannelRestrictionWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfTransactionChannelsResponseDTO>> {
        const requestContextPromise = this.requestFactory.getChannelRestriction(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getChannelRestrictionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will get the restriction set at card level for all the channels, for example, instore, online, ATM, cross border, and magnetic stripe.
     * Get Channel Restriction
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getChannelRestriction(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<ApiResponseOfTransactionChannelsResponseDTO> {
        return this.getChannelRestrictionWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfTransactionChannelsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch MCC based channel restrictions at the card level.
     * Get MCC Channel Restrictions
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getMCCChannelRestrictionsWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<MCCRestrictionDTO>> {
        const requestContextPromise = this.requestFactory.getMCCChannelRestrictions(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMCCChannelRestrictionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch MCC based channel restrictions at the card level.
     * Get MCC Channel Restrictions
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getMCCChannelRestrictions(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<MCCRestrictionDTO> {
        return this.getMCCChannelRestrictionsWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<MCCRestrictionDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch card level limits for all cards belonging to a customer.
     * Limits For All Cards For A Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public limitsForAllCardsForACustomerWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TransactionWalletLimitsDTO>> {
        const requestContextPromise = this.requestFactory.limitsForAllCardsForACustomer(clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.limitsForAllCardsForACustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch card level limits for all cards belonging to a customer.
     * Limits For All Cards For A Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public limitsForAllCardsForACustomer(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<TransactionWalletLimitsDTO> {
        return this.limitsForAllCardsForACustomerWithHttpInfo(clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TransactionWalletLimitsDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to set card limits.
     * Card Limits
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionLimitsDTO transactionLimitsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public setCardLimitsWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, transactionLimitsDTO: TransactionLimitsDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiResponse2>> {
        const requestContextPromise = this.requestFactory.setCardLimits(cardHashId, clientHashId, customerHashId, walletHashId, transactionLimitsDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setCardLimitsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to set card limits.
     * Card Limits
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionLimitsDTO transactionLimitsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public setCardLimits(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, transactionLimitsDTO: TransactionLimitsDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiResponse2> {
        return this.setCardLimitsWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, transactionLimitsDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiResponse2>) => apiResponse.data));
    }

    /**
     * This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.
     * Update Channel Restriction
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param channelActionRequestDTO channelActionRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateChannelRestrictionWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, channelActionRequestDTO: ChannelActionRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiResponseOfstring>> {
        const requestContextPromise = this.requestFactory.updateChannelRestriction(cardHashId, clientHashId, customerHashId, walletHashId, channelActionRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateChannelRestrictionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will restrict transaction at card level for a given channel, for example, in instore, online, ATM, cross border and magnetic stripe.
     * Update Channel Restriction
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param channelActionRequestDTO channelActionRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateChannelRestriction(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, channelActionRequestDTO: ChannelActionRequestDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiResponseOfstring> {
        return this.updateChannelRestrictionWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, channelActionRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiResponseOfstring>) => apiResponse.data));
    }

    /**
     * This API allows you to create MCC based channel restrictions at the card level.
     * Update MCC Channel Restrictions
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param mCCRestrictionDTO The API will work as below: • If the status is Active and channelStrategy is WHITE_LIST, then the MCC in the list only gets processed and the rest will be blocked • If the status is Inactive then the MCC whitelist restriction will be Inactive. • If the status is Active and channelStrategy is BLACK_LIST then only the MCC in the list will get blocked and the rest will be allowed. • If the status is Inactive then the MCC blacklist restriction will be Inactive • Either blacklist or whitelist can be enabled at one point in time.
     * @param xRequestId Enter a unique UUID value
     */
    public updateMCCChannelRestrictionsWithHttpInfo(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, mCCRestrictionDTO: MCCRestrictionDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiResponse2>> {
        const requestContextPromise = this.requestFactory.updateMCCChannelRestrictions(cardHashId, clientHashId, customerHashId, walletHashId, mCCRestrictionDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMCCChannelRestrictionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to create MCC based channel restrictions at the card level.
     * Update MCC Channel Restrictions
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param mCCRestrictionDTO The API will work as below: • If the status is Active and channelStrategy is WHITE_LIST, then the MCC in the list only gets processed and the rest will be blocked • If the status is Inactive then the MCC whitelist restriction will be Inactive. • If the status is Active and channelStrategy is BLACK_LIST then only the MCC in the list will get blocked and the rest will be allowed. • If the status is Inactive then the MCC blacklist restriction will be Inactive • Either blacklist or whitelist can be enabled at one point in time.
     * @param xRequestId Enter a unique UUID value
     */
    public updateMCCChannelRestrictions(cardHashId: string, clientHashId: string, customerHashId: string, walletHashId: string, mCCRestrictionDTO: MCCRestrictionDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiResponse2> {
        return this.updateMCCChannelRestrictionsWithHttpInfo(cardHashId, clientHashId, customerHashId, walletHashId, mCCRestrictionDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiResponse2>) => apiResponse.data));
    }

}

import { ConversionsApiRequestFactory, ConversionsApiResponseProcessor} from "../apis/ConversionsApi";
export class ObservableConversionsApi {
    private requestFactory: ConversionsApiRequestFactory;
    private responseProcessor: ConversionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversionsApiRequestFactory,
        responseProcessor?: ConversionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConversionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConversionsApiResponseProcessor();
    }

    /**
     * This API allows you to cancel a conversion prior to the execution time.
     * Cancel Conversion
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionId 
     * @param conversionCancelRequest ConversionCancelRequest
     * @param xRequestId Enter a unique UUID value
     */
    public cancelConversionWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, conversionCancelRequest: ConversionCancelRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ConversionCancelResponse>> {
        const requestContextPromise = this.requestFactory.cancelConversion(clientHashId, customerHashId, walletHashId, conversionId, conversionCancelRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to cancel a conversion prior to the execution time.
     * Cancel Conversion
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionId 
     * @param conversionCancelRequest ConversionCancelRequest
     * @param xRequestId Enter a unique UUID value
     */
    public cancelConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, conversionCancelRequest: ConversionCancelRequest, xRequestId?: string, _options?: Configuration): Observable<ConversionCancelResponse> {
        return this.cancelConversionWithHttpInfo(clientHashId, customerHashId, walletHashId, conversionId, conversionCancelRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ConversionCancelResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.
     * Create Conversion
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionCreationRequest ConversionCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public createConversionWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, conversionCreationRequest: ConversionCreationRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ConversionCreationResponse>> {
        const requestContextPromise = this.requestFactory.createConversion(clientHashId, customerHashId, walletHashId, conversionCreationRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.
     * Create Conversion
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionCreationRequest ConversionCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public createConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionCreationRequest: ConversionCreationRequest, xRequestId?: string, _options?: Configuration): Observable<ConversionCreationResponse> {
        return this.createConversionWithHttpInfo(clientHashId, customerHashId, walletHashId, conversionCreationRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ConversionCreationResponse>) => apiResponse.data));
    }

    /**
     * This API will retrieve an existing conversion with the conversionId.
     * Fetch Conversion by id
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionId 
     * @param xRequestId Enter a unique UUID value
     */
    public fetchConversionWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ConversionCreationResponse>> {
        const requestContextPromise = this.requestFactory.fetchConversion(clientHashId, customerHashId, walletHashId, conversionId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will retrieve an existing conversion with the conversionId.
     * Fetch Conversion by id
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionId 
     * @param xRequestId Enter a unique UUID value
     */
    public fetchConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, xRequestId?: string, _options?: Configuration): Observable<ConversionCreationResponse> {
        return this.fetchConversionWithHttpInfo(clientHashId, customerHashId, walletHashId, conversionId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ConversionCreationResponse>) => apiResponse.data));
    }

}

import { ConversionsPreviousVersionApiRequestFactory, ConversionsPreviousVersionApiResponseProcessor} from "../apis/ConversionsPreviousVersionApi";
export class ObservableConversionsPreviousVersionApi {
    private requestFactory: ConversionsPreviousVersionApiRequestFactory;
    private responseProcessor: ConversionsPreviousVersionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConversionsPreviousVersionApiRequestFactory,
        responseProcessor?: ConversionsPreviousVersionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConversionsPreviousVersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConversionsPreviousVersionApiResponseProcessor();
    }

    /**
     * This API allows you to transfer the balance from one currency to another within the same customer wallet.
     * Balance Transfer within Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param walletTransferDto 
     * @param xRequestId Enter a unique UUID value
     */
    public balanceTransferwithinWalletWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, walletTransferDto: WalletTransferDto, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletTransferResponseDto>> {
        const requestContextPromise = this.requestFactory.balanceTransferwithinWallet(clientHashId, customerHashId, walletHashId, walletTransferDto, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.balanceTransferwithinWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to transfer the balance from one currency to another within the same customer wallet.
     * Balance Transfer within Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param walletTransferDto 
     * @param xRequestId Enter a unique UUID value
     */
    public balanceTransferwithinWallet(clientHashId: string, customerHashId: string, walletHashId: string, walletTransferDto: WalletTransferDto, xRequestId?: string, _options?: Configuration): Observable<WalletTransferResponseDto> {
        return this.balanceTransferwithinWalletWithHttpInfo(clientHashId, customerHashId, walletHashId, walletTransferDto, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletTransferResponseDto>) => apiResponse.data));
    }

}

import { CustomerAccountCorporateApiRequestFactory, CustomerAccountCorporateApiResponseProcessor} from "../apis/CustomerAccountCorporateApi";
export class ObservableCustomerAccountCorporateApi {
    private requestFactory: CustomerAccountCorporateApiRequestFactory;
    private responseProcessor: CustomerAccountCorporateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerAccountCorporateApiRequestFactory,
        responseProcessor?: CustomerAccountCorporateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerAccountCorporateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerAccountCorporateApiResponseProcessor();
    }

    /**
     * This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).
     * Exhaustive Corporate Details using Business ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer.
     * @param searchReferenceId This field accepts the search reference id of the corporate customer as received in response of public corporate details api.
     * @param xRequestId Enter a unique UUID value
     */
    public exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(clientHashId: string, countryCode: string, searchReferenceId?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CorporateEnrichedDetailResponseDTO>> {
        const requestContextPromise = this.requestFactory.exhaustiveCorporateDetailsUsingBusinessID(clientHashId, countryCode, searchReferenceId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).
     * Exhaustive Corporate Details using Business ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer.
     * @param searchReferenceId This field accepts the search reference id of the corporate customer as received in response of public corporate details api.
     * @param xRequestId Enter a unique UUID value
     */
    public exhaustiveCorporateDetailsUsingBusinessID(clientHashId: string, countryCode: string, searchReferenceId?: string, xRequestId?: string, _options?: Configuration): Observable<CorporateEnrichedDetailResponseDTO> {
        return this.exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(clientHashId, countryCode, searchReferenceId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CorporateEnrichedDetailResponseDTO>) => apiResponse.data));
    }

    /**
     * This API returns the acceptable values for the `category` query param to be used as input in the corporate onboarding flow. Refer to the [Fetch Corporate Constants](doc:fetch-corporate-constants-api) user guide for details on usage instructions on this API.
     * Fetch corporate constants
     * @param category This field is used to select one of the category used during corporate customer onboarding. The API response will return list of allowed values for the selected category.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param region The response will be filtered based on the value selected in this field for regulatory region of the customer.
     * @param type Type of Customer being onboarded.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCorporateConstantsUsingGETWithHttpInfo(category: 'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation', clientHashId: string, region: 'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA', type: 'INDIVIDUAL' | 'CORPORATE', xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCategoryResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchCorporateConstantsUsingGET(category, clientHashId, region, type, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchCorporateConstantsUsingGETWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API returns the acceptable values for the `category` query param to be used as input in the corporate onboarding flow. Refer to the [Fetch Corporate Constants](doc:fetch-corporate-constants-api) user guide for details on usage instructions on this API.
     * Fetch corporate constants
     * @param category This field is used to select one of the category used during corporate customer onboarding. The API response will return list of allowed values for the selected category.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param region The response will be filtered based on the value selected in this field for regulatory region of the customer.
     * @param type Type of Customer being onboarded.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCorporateConstantsUsingGET(category: 'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation', clientHashId: string, region: 'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA', type: 'INDIVIDUAL' | 'CORPORATE', xRequestId?: string, _options?: Configuration): Observable<AddCategoryResponseDTO> {
        return this.fetchCorporateConstantsUsingGETWithHttpInfo(category, clientHashId, region, type, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCategoryResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch details of RFI raised as part of corporate customer onboarding.
     * Fetch Corporate Customer RFI Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param caseId This field contains unique case ID generated and returned in Onboard API response.
     * @param clientId This field contains unique client ID generated and returned in Onboard API response.
     * @param customerHashId This field contains the customerHashId, For example, 909ffc5f-c8ab-4df0-bcb2-111fcdd6f735.
     * @param region This field contains the region code for which onboarding has been triggered, For example, AU, EU, UK, SG.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCorporateCustomerRFIDetailsWithHttpInfo(clientHashId: string, caseId?: string, clientId?: string, customerHashId?: string, region?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ComplianceRFITemplateMetadataResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchCorporateCustomerRFIDetails(clientHashId, caseId, clientId, customerHashId, region, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchCorporateCustomerRFIDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch details of RFI raised as part of corporate customer onboarding.
     * Fetch Corporate Customer RFI Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param caseId This field contains unique case ID generated and returned in Onboard API response.
     * @param clientId This field contains unique client ID generated and returned in Onboard API response.
     * @param customerHashId This field contains the customerHashId, For example, 909ffc5f-c8ab-4df0-bcb2-111fcdd6f735.
     * @param region This field contains the region code for which onboarding has been triggered, For example, AU, EU, UK, SG.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCorporateCustomerRFIDetails(clientHashId: string, caseId?: string, clientId?: string, customerHashId?: string, region?: string, xRequestId?: string, _options?: Configuration): Observable<ComplianceRFITemplateMetadataResponseDTO> {
        return this.fetchCorporateCustomerRFIDetailsWithHttpInfo(clientHashId, caseId, clientId, customerHashId, region, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ComplianceRFITemplateMetadataResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to onboard a corporate customer under existing client.
     * Onboard Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param corporateCustomerRequestsDTO corporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public onboardCorporateCustomerWithHttpInfo(clientHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ProductCorporateCustomerResponseDTO>> {
        const requestContextPromise = this.requestFactory.onboardCorporateCustomer(clientHashId, corporateCustomerRequestsDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.onboardCorporateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to onboard a corporate customer under existing client.
     * Onboard Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param corporateCustomerRequestsDTO corporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public onboardCorporateCustomer(clientHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Observable<ProductCorporateCustomerResponseDTO> {
        return this.onboardCorporateCustomerWithHttpInfo(clientHashId, corporateCustomerRequestsDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ProductCorporateCustomerResponseDTO>) => apiResponse.data));
    }

    /**
     * This API will help you to fetch the publicly available corporate details using business Id.
     * Public Corporate Details using Business ID
     * @param businessRegistrationNumber This field contains the business registration number of the entity.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes).
     * @param xRequestId Enter a unique UUID value
     */
    public publicCorporateDetailsUsingBusinessIDWithHttpInfo(businessRegistrationNumber: string, clientHashId: string, countryCode: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CorporateDetailResponseDTO>> {
        const requestContextPromise = this.requestFactory.publicCorporateDetailsUsingBusinessID(businessRegistrationNumber, clientHashId, countryCode, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publicCorporateDetailsUsingBusinessIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will help you to fetch the publicly available corporate details using business Id.
     * Public Corporate Details using Business ID
     * @param businessRegistrationNumber This field contains the business registration number of the entity.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes).
     * @param xRequestId Enter a unique UUID value
     */
    public publicCorporateDetailsUsingBusinessID(businessRegistrationNumber: string, clientHashId: string, countryCode: string, xRequestId?: string, _options?: Configuration): Observable<CorporateDetailResponseDTO> {
        return this.publicCorporateDetailsUsingBusinessIDWithHttpInfo(businessRegistrationNumber, clientHashId, countryCode, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CorporateDetailResponseDTO>) => apiResponse.data));
    }

    /**
     * This api will be used to regenerate kyc url
     * Regenerate KYC URL
     * @param clientHashId The unique client hash id of customer
     * @param customerHashId The unique customer hash id of customer
     * @param xRequestId Enter a unique UUID value.
     */
    public regenerateKYCURLWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<RegenerateUrlResponse>> {
        const requestContextPromise = this.requestFactory.regenerateKYCURL(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.regenerateKYCURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * This api will be used to regenerate kyc url
     * Regenerate KYC URL
     * @param clientHashId The unique client hash id of customer
     * @param customerHashId The unique customer hash id of customer
     * @param xRequestId Enter a unique UUID value.
     */
    public regenerateKYCURL(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<RegenerateUrlResponse> {
        return this.regenerateKYCURLWithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<RegenerateUrlResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param respondRfiRequestDTO respondRfiRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoRFIforCorporateCustomerWithHttpInfo(clientHashId: string, respondRfiRequestDTO: RespondRfiRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<RespondRfiResponseDTO>> {
        const requestContextPromise = this.requestFactory.respondtoRFIforCorporateCustomer(clientHashId, respondRfiRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.respondtoRFIforCorporateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param respondRfiRequestDTO respondRfiRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoRFIforCorporateCustomer(clientHashId: string, respondRfiRequestDTO: RespondRfiRequestDTO, xRequestId?: string, _options?: Configuration): Observable<RespondRfiResponseDTO> {
        return this.respondtoRFIforCorporateCustomerWithHttpInfo(clientHashId, respondRfiRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<RespondRfiResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to update a corporate customer under existing client.
     * Update Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateCustomerRequestsDTO updateCorporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateCorporateCustomerUsingPOSTWithHttpInfo(clientHashId: string, customerHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<UpdateCorporateKybResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateCorporateCustomerUsingPOST(clientHashId, customerHashId, corporateCustomerRequestsDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCorporateCustomerUsingPOSTWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update a corporate customer under existing client.
     * Update Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateCustomerRequestsDTO updateCorporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateCorporateCustomerUsingPOST(clientHashId: string, customerHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Observable<UpdateCorporateKybResponseDTO> {
        return this.updateCorporateCustomerUsingPOSTWithHttpInfo(clientHashId, customerHashId, corporateCustomerRequestsDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<UpdateCorporateKybResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to upload document for corporate customers.
     * Upload Document for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateComplianceDocumentRequestDTO corporateComplianceDocumentRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public uploadDocumentforCorporateCustomerWithHttpInfo(clientHashId: string, customerHashId: string, corporateComplianceDocumentRequestDTO: CorporateComplianceDocumentRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CorporateComplianceDocumentResponseDTO>> {
        const requestContextPromise = this.requestFactory.uploadDocumentforCorporateCustomer(clientHashId, customerHashId, corporateComplianceDocumentRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadDocumentforCorporateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to upload document for corporate customers.
     * Upload Document for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateComplianceDocumentRequestDTO corporateComplianceDocumentRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public uploadDocumentforCorporateCustomer(clientHashId: string, customerHashId: string, corporateComplianceDocumentRequestDTO: CorporateComplianceDocumentRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CorporateComplianceDocumentResponseDTO> {
        return this.uploadDocumentforCorporateCustomerWithHttpInfo(clientHashId, customerHashId, corporateComplianceDocumentRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CorporateComplianceDocumentResponseDTO>) => apiResponse.data));
    }

}

import { CustomerAccountIndividualApiRequestFactory, CustomerAccountIndividualApiResponseProcessor} from "../apis/CustomerAccountIndividualApi";
export class ObservableCustomerAccountIndividualApi {
    private requestFactory: CustomerAccountIndividualApiRequestFactory;
    private responseProcessor: CustomerAccountIndividualApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerAccountIndividualApiRequestFactory,
        responseProcessor?: CustomerAccountIndividualApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerAccountIndividualApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerAccountIndividualApiResponseProcessor();
    }

    /**
     * This API allows you to register a customer with a wallet in NIUM\'s cards platform.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerDataRequestDTO customerDataRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomerWithHttpInfo(clientHashId: string, customerDataRequestDTO: CustomerDataRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerDetailResponseDTO>> {
        const requestContextPromise = this.requestFactory.addCustomer(clientHashId, customerDataRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to register a customer with a wallet in NIUM\'s cards platform.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerDataRequestDTO customerDataRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomer(clientHashId: string, customerDataRequestDTO: CustomerDataRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomerDetailResponseDTO> {
        return this.addCustomerWithHttpInfo(clientHashId, customerDataRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerDetailResponseDTO>) => apiResponse.data));
    }

    /**
     * This API will create customers using minimal data, the rest of the partial data will be pulled via MyInfo etc. which is locked and cannot be edited and further rest fields can be updated using Customer Update API.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using MyInfo [SG]
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerDataExternalRequestDTO customerDataExternalRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomerUsingMyInfoSGWithHttpInfo(clientHashId: string, customerDataExternalRequestDTO: CustomerDataExternalRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerDataExternalResponseDTO>> {
        const requestContextPromise = this.requestFactory.addCustomerUsingMyInfoSG(clientHashId, customerDataExternalRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCustomerUsingMyInfoSGWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will create customers using minimal data, the rest of the partial data will be pulled via MyInfo etc. which is locked and cannot be edited and further rest fields can be updated using Customer Update API.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using MyInfo [SG]
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerDataExternalRequestDTO customerDataExternalRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomerUsingMyInfoSG(clientHashId: string, customerDataExternalRequestDTO: CustomerDataExternalRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomerDataExternalResponseDTO> {
        return this.addCustomerUsingMyInfoSGWithHttpInfo(clientHashId, customerDataExternalRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerDataExternalResponseDTO>) => apiResponse.data));
    }

    /**
     *   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using e-Document Verification
     * @param clientHashId clientHashId
     * @param eVerifyCustomerRegistrationRequestDTO requestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomerUsingeDocumentVerificationWithHttpInfo(clientHashId: string, eVerifyCustomerRegistrationRequestDTO: EVerifyCustomerRegistrationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCustomerResponseDTO>> {
        const requestContextPromise = this.requestFactory.addCustomerUsingeDocumentVerification(clientHashId, eVerifyCustomerRegistrationRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCustomerUsingeDocumentVerificationWithHttpInfo(rsp)));
            }));
    }

    /**
     *   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Unified Add Customer](ref:unifiedaddcustomer) is the latest version of this API.
     * Add Customer Using e-Document Verification
     * @param clientHashId clientHashId
     * @param eVerifyCustomerRegistrationRequestDTO requestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public addCustomerUsingeDocumentVerification(clientHashId: string, eVerifyCustomerRegistrationRequestDTO: EVerifyCustomerRegistrationRequestDTO, xRequestId?: string, _options?: Configuration): Observable<AddCustomerResponseDTO> {
        return this.addCustomerUsingeDocumentVerificationWithHttpInfo(clientHashId, eVerifyCustomerRegistrationRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCustomerResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to update the customer details subject to the following constraints: 1. If compliance status equals to COMPLETED. You can only update email, mobile, delivery address details, and correspondence address details. You may NOT update the billing address. 2. In other cases, you may update any of the fields. At least one key-value pair is needed in the request body of this API.
     * Customer Update
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param updateCustomerDTO Customer update request
     */
    public customerUpdateWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, updateCustomerDTO?: UpdateCustomerDTO, _options?: Configuration): Observable<HttpInfo<UpdateCustomerResponseDTO>> {
        const requestContextPromise = this.requestFactory.customerUpdate(clientHashId, customerHashId, xRequestId, updateCustomerDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update the customer details subject to the following constraints: 1. If compliance status equals to COMPLETED. You can only update email, mobile, delivery address details, and correspondence address details. You may NOT update the billing address. 2. In other cases, you may update any of the fields. At least one key-value pair is needed in the request body of this API.
     * Customer Update
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param updateCustomerDTO Customer update request
     */
    public customerUpdate(clientHashId: string, customerHashId: string, xRequestId?: string, updateCustomerDTO?: UpdateCustomerDTO, _options?: Configuration): Observable<UpdateCustomerResponseDTO> {
        return this.customerUpdateWithHttpInfo(clientHashId, customerHashId, xRequestId, updateCustomerDTO, _options).pipe(map((apiResponse: HttpInfo<UpdateCustomerResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch details of RFI raised as part of Individual customer onboarding.
     * Fetch Individual Customer RFI Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchIndividualCustomerRFIDetailsWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<CustomerRfiDetailsResponse>>> {
        const requestContextPromise = this.requestFactory.fetchIndividualCustomerRFIDetails(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchIndividualCustomerRFIDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch details of RFI raised as part of Individual customer onboarding.
     * Fetch Individual Customer RFI Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchIndividualCustomerRFIDetails(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<CustomerRfiDetailsResponse>> {
        return this.fetchIndividualCustomerRFIDetailsWithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<CustomerRfiDetailsResponse>>) => apiResponse.data));
    }

    /**
     * This API allows you to respond to an RFI raised by NIUM compliance team. You may use this API to respond to an RFI for data or documents when the customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param uploadRfiDocumentRequestDto RFI response object
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoRFIWithHttpInfo(clientHashId: string, customerHashId: string, uploadRfiDocumentRequestDto: UploadRfiDocumentRequestDto, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<UploadRfiDetailsResponseDto>> {
        const requestContextPromise = this.requestFactory.respondtoRFI(clientHashId, customerHashId, uploadRfiDocumentRequestDto, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.respondtoRFIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to respond to an RFI raised by NIUM compliance team. You may use this API to respond to an RFI for data or documents when the customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param uploadRfiDocumentRequestDto RFI response object
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoRFI(clientHashId: string, customerHashId: string, uploadRfiDocumentRequestDto: UploadRfiDocumentRequestDto, xRequestId?: string, _options?: Configuration): Observable<UploadRfiDetailsResponseDto> {
        return this.respondtoRFIWithHttpInfo(clientHashId, customerHashId, uploadRfiDocumentRequestDto, xRequestId, _options).pipe(map((apiResponse: HttpInfo<UploadRfiDetailsResponseDto>) => apiResponse.data));
    }

    /**
     * This API onboards customers based on their client configuration and preference.   >ℹ️ INFO   The \'childMustHaveParent\' setting can be optionally set to \'true\' for Payroll and Spend and Management clients, and it should be set to \'false\' for all other clients.   For details, see [Parent-child hierarchy](doc:parent-child-hierarchy).
     * Unified Add Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param requestDto Add individual customer
     * @param xRequestId Enter a unique UUID value
     */
    public unifiedAddCustomerWithHttpInfo(clientHashId: string, requestDto: UnifiedAddCustomerRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCustomerResponseDTO>> {
        const requestContextPromise = this.requestFactory.unifiedAddCustomer(clientHashId, requestDto, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unifiedAddCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API onboards customers based on their client configuration and preference.   >ℹ️ INFO   The \'childMustHaveParent\' setting can be optionally set to \'true\' for Payroll and Spend and Management clients, and it should be set to \'false\' for all other clients.   For details, see [Parent-child hierarchy](doc:parent-child-hierarchy).
     * Unified Add Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param requestDto Add individual customer
     * @param xRequestId Enter a unique UUID value
     */
    public unifiedAddCustomer(clientHashId: string, requestDto: UnifiedAddCustomerRequest, xRequestId?: string, _options?: Configuration): Observable<AddCustomerResponseDTO> {
        return this.unifiedAddCustomerWithHttpInfo(clientHashId, requestDto, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCustomerResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows to upload documents necessary for customer onboarding. Refer to the RFI details on required documents.
     * Upload Document
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param complianceDocumentDTO Compliance documents
     * @param xRequestId Enter a unique UUID value
     */
    public uploadDocumentWithHttpInfo(clientHashId: string, customerHashId: string, complianceDocumentDTO: ComplianceDocumentDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ComplianceDocumentResponseDTO>> {
        const requestContextPromise = this.requestFactory.uploadDocument(clientHashId, customerHashId, complianceDocumentDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows to upload documents necessary for customer onboarding. Refer to the RFI details on required documents.
     * Upload Document
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param complianceDocumentDTO Compliance documents
     * @param xRequestId Enter a unique UUID value
     */
    public uploadDocument(clientHashId: string, customerHashId: string, complianceDocumentDTO: ComplianceDocumentDTO, xRequestId?: string, _options?: Configuration): Observable<ComplianceDocumentResponseDTO> {
        return this.uploadDocumentWithHttpInfo(clientHashId, customerHashId, complianceDocumentDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ComplianceDocumentResponseDTO>) => apiResponse.data));
    }

}

import { CustomerFeesApiRequestFactory, CustomerFeesApiResponseProcessor} from "../apis/CustomerFeesApi";
export class ObservableCustomerFeesApi {
    private requestFactory: CustomerFeesApiRequestFactory;
    private responseProcessor: CustomerFeesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerFeesApiRequestFactory,
        responseProcessor?: CustomerFeesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerFeesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerFeesApiResponseProcessor();
    }

    /**
     * This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.
     * Charge Fee
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param customFeeRequestDTO customFeeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public chargeFeeWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, customFeeRequestDTO: CustomFeeRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomFeeResponseDTO>> {
        const requestContextPromise = this.requestFactory.chargeFee(clientHashId, customerHashId, walletHashId, customFeeRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.chargeFeeWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.
     * Charge Fee
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param customFeeRequestDTO customFeeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public chargeFee(clientHashId: string, customerHashId: string, walletHashId: string, customFeeRequestDTO: CustomFeeRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomFeeResponseDTO> {
        return this.chargeFeeWithHttpInfo(clientHashId, customerHashId, walletHashId, customFeeRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomFeeResponseDTO>) => apiResponse.data));
    }

}

import { CustomerFundingApiRequestFactory, CustomerFundingApiResponseProcessor} from "../apis/CustomerFundingApi";
export class ObservableCustomerFundingApi {
    private requestFactory: CustomerFundingApiRequestFactory;
    private responseProcessor: CustomerFundingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerFundingApiRequestFactory,
        responseProcessor?: CustomerFundingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerFundingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerFundingApiResponseProcessor();
    }

    /**
     * This API allows you to link account
     * Add funding instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param customerLinkAccountRequest Add a new funding instrument
     */
    public addFundingInstrumentWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, customerLinkAccountRequest?: CustomerLinkAccountRequest, _options?: Configuration): Observable<HttpInfo<LinkAccountResponse>> {
        const requestContextPromise = this.requestFactory.addFundingInstrument(clientHashId, customerHashId, walletHashId, xRequestId, customerLinkAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addFundingInstrumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to link account
     * Add funding instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param customerLinkAccountRequest Add a new funding instrument
     */
    public addFundingInstrument(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, customerLinkAccountRequest?: CustomerLinkAccountRequest, _options?: Configuration): Observable<LinkAccountResponse> {
        return this.addFundingInstrumentWithHttpInfo(clientHashId, customerHashId, walletHashId, xRequestId, customerLinkAccountRequest, _options).pipe(map((apiResponse: HttpInfo<LinkAccountResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to confirm funding instrument id
     * Confirm funding instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId This field is the unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit.
     * @param xRequestId Enter a unique UUID value
     * @param confirmFundingInstrumentRequestDTO Confirm funding instrument
     */
    public confirmFundingInstrumentIdWithHttpInfo(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, confirmFundingInstrumentRequestDTO?: ConfirmFundingInstrumentRequestDTO, _options?: Configuration): Observable<HttpInfo<AccountStatusResponse>> {
        const requestContextPromise = this.requestFactory.confirmFundingInstrumentId(clientHashId, customerHashId, fundingInstrumentId, xRequestId, confirmFundingInstrumentRequestDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmFundingInstrumentIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to confirm funding instrument id
     * Confirm funding instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId This field is the unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit.
     * @param xRequestId Enter a unique UUID value
     * @param confirmFundingInstrumentRequestDTO Confirm funding instrument
     */
    public confirmFundingInstrumentId(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, confirmFundingInstrumentRequestDTO?: ConfirmFundingInstrumentRequestDTO, _options?: Configuration): Observable<AccountStatusResponse> {
        return this.confirmFundingInstrumentIdWithHttpInfo(clientHashId, customerHashId, fundingInstrumentId, xRequestId, confirmFundingInstrumentRequestDTO, _options).pipe(map((apiResponse: HttpInfo<AccountStatusResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to delete a specific funding instrument based on the fundingInstrumentId.
     * Delete Funding Instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId The unique 36-character alphanumeric identifier of a funding instrument.
     * @param xRequestId Enter a unique UUID value
     */
    public deleteFundinginstrumentWithHttpInfo(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfstring>> {
        const requestContextPromise = this.requestFactory.deleteFundinginstrument(clientHashId, customerHashId, fundingInstrumentId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFundinginstrumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to delete a specific funding instrument based on the fundingInstrumentId.
     * Delete Funding Instrument
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId The unique 36-character alphanumeric identifier of a funding instrument.
     * @param xRequestId Enter a unique UUID value
     */
    public deleteFundinginstrument(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, _options?: Configuration): Observable<ApiResponseOfstring> {
        return this.deleteFundinginstrumentWithHttpInfo(clientHashId, customerHashId, fundingInstrumentId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfstring>) => apiResponse.data));
    }

    /**
     * This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 
     * Fund Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param walletFundDTO Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards.
     */
    public fundWalletWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, walletFundDTO?: WalletFundDTO, _options?: Configuration): Observable<HttpInfo<WalletFundResponseDTO>> {
        const requestContextPromise = this.requestFactory.fundWallet(clientHashId, customerHashId, walletHashId, xRequestId, walletFundDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fundWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to top-up into the customer\'s wallet. Refer to the [Fund wallet user guide](/docs/fund-wallet) for details on usage instructions on this API.  >ℹ️ INFO   >**Guidelines for Fund Wallet.** >1. Cards and direct_debit funding channels are restricted by default. Reach out to your Nium support specialist to enable this functionality. >2. Source and destination should be in the same currency when funding channel is bank_transfer, cards, or direct_debit. >3. No restriction on source or destination currency if funding channel is prefund. 
     * Fund Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param walletFundDTO Guidelines for Fund Wallet  1.cards as a funding channel is restricted by default. It may be enabled for a client on request. 2.Source and destination currencies should be same if funding channel is bankTransfer or cards 3.No restriction on source or destination currency if funding channel is prefund.  Fund Wallet with a Card  Customer onboarded and KYCed successfully [through Manual or eKYC flow] with e-KYC calls Fund Wallet API with funding channel as cards.
     */
    public fundWallet(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, walletFundDTO?: WalletFundDTO, _options?: Configuration): Observable<WalletFundResponseDTO> {
        return this.fundWalletWithHttpInfo(clientHashId, customerHashId, walletHashId, xRequestId, walletFundDTO, _options).pipe(map((apiResponse: HttpInfo<WalletFundResponseDTO>) => apiResponse.data));
    }

    /**
     * Get Funding instrument details
     * Get Funding instrument details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId Unique 36-character funding instrument identifier.
     * @param xRequestId Enter a unique UUID value
     */
    public getFundingInstrumentDetailsWithHttpInfo(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AccountStatusResponse>> {
        const requestContextPromise = this.requestFactory.getFundingInstrumentDetails(clientHashId, customerHashId, fundingInstrumentId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFundingInstrumentDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Funding instrument details
     * Get Funding instrument details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param fundingInstrumentId Unique 36-character funding instrument identifier.
     * @param xRequestId Enter a unique UUID value
     */
    public getFundingInstrumentDetails(clientHashId: string, customerHashId: string, fundingInstrumentId: string, xRequestId?: string, _options?: Configuration): Observable<AccountStatusResponse> {
        return this.getFundingInstrumentDetailsWithHttpInfo(clientHashId, customerHashId, fundingInstrumentId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AccountStatusResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the funding instruments that have been registered for a customer.
     * Get Funding Instrument List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getFundingInstrumentListWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<WalletFundingInstrumentsResponseDTO>>> {
        const requestContextPromise = this.requestFactory.getFundingInstrumentList(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFundingInstrumentListWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the funding instruments that have been registered for a customer.
     * Get Funding Instrument List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public getFundingInstrumentList(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<WalletFundingInstrumentsResponseDTO>> {
        return this.getFundingInstrumentListWithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<WalletFundingInstrumentsResponseDTO>>) => apiResponse.data));
    }

}

import { CustomerManagementApiRequestFactory, CustomerManagementApiResponseProcessor} from "../apis/CustomerManagementApi";
export class ObservableCustomerManagementApi {
    private requestFactory: CustomerManagementApiRequestFactory;
    private responseProcessor: CustomerManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerManagementApiRequestFactory,
        responseProcessor?: CustomerManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerManagementApiResponseProcessor();
    }

    /**
     * This API allows you to download an account statement.
     * Account Statement
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer.
     * @param fileType This field accepts the file type of the account statement to be generated.
     * @param xRequestId Enter a unique UUID value
     */
    public accountStatementWithHttpInfo(clientHashId: string, customerHashId: string, endDate: string, startDate: string, currencies?: string, fileType?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.accountStatement(clientHashId, customerHashId, endDate, startDate, currencies, fileType, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountStatementWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to download an account statement.
     * Account Statement
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer.
     * @param fileType This field accepts the file type of the account statement to be generated.
     * @param xRequestId Enter a unique UUID value
     */
    public accountStatement(clientHashId: string, customerHashId: string, endDate: string, startDate: string, currencies?: string, fileType?: string, xRequestId?: string, _options?: Configuration): Observable<void> {
        return this.accountStatementWithHttpInfo(clientHashId, customerHashId, endDate, startDate, currencies, fileType, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API allows you to permanently block or temporarily block/unblock a customer.
     * Block/Unblock Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param blockCustomerRequestDTO blockCustomerRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public blockUnblockCustomerWithHttpInfo(clientHashId: string, customerHashId: string, blockCustomerRequestDTO: BlockCustomerRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerApiError>> {
        const requestContextPromise = this.requestFactory.blockUnblockCustomer(clientHashId, customerHashId, blockCustomerRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockUnblockCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to permanently block or temporarily block/unblock a customer.
     * Block/Unblock Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param blockCustomerRequestDTO blockCustomerRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public blockUnblockCustomer(clientHashId: string, customerHashId: string, blockCustomerRequestDTO: BlockCustomerRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomerApiError> {
        return this.blockUnblockCustomerWithHttpInfo(clientHashId, customerHashId, blockCustomerRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerApiError>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public customerDetailsWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerDetailResponse>> {
        const requestContextPromise = this.requestFactory.customerDetails(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public customerDetails(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<CustomerDetailResponse> {
        return this.customerDetailsWithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerDetailResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch details for a specific customer.
     * Customer Details V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public customerDetailsV2WithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerDetailsResponseV2DTO>> {
        const requestContextPromise = this.requestFactory.customerDetailsV2(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDetailsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch details for a specific customer.
     * Customer Details V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public customerDetailsV2(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<CustomerDetailsResponseV2DTO> {
        return this.customerDetailsV2WithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerDetailsResponseV2DTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer--digits only--without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value
     */
    public customerListWithHttpInfo(clientHashId: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<CustomerDetailResponse>>> {
        const requestContextPromise = this.requestFactory.customerList(clientHashId, email, mobile, order, page, size, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer--digits only--without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value
     */
    public customerList(clientHashId: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, xRequestId?: string, _options?: Configuration): Observable<Array<CustomerDetailResponse>> {
        return this.customerListWithHttpInfo(clientHashId, email, mobile, order, page, size, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<CustomerDetailResponse>>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public customerListV2WithHttpInfo(clientHashId: string, businessRegistrationNumber?: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PaginatedCustomerDetailsResponseV2DTO>> {
        const requestContextPromise = this.requestFactory.customerListV2(clientHashId, businessRegistrationNumber, email, mobile, order, page, size, tagKey, tagValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public customerListV2(clientHashId: string, businessRegistrationNumber?: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<PaginatedCustomerDetailsResponseV2DTO> {
        return this.customerListV2WithHttpInfo(clientHashId, businessRegistrationNumber, email, mobile, order, page, size, tagKey, tagValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PaginatedCustomerDetailsResponseV2DTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V3
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param customerType This field accepts the type of customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param parentCustomerHashId This field contains the unique parent customer identifier generated at the time of customer creation.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public customerListV3WithHttpInfo(clientHashId: string, businessRegistrationNumber?: string, customerType?: 'INDIVIDUAL' | 'CORPORATE', email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, parentCustomerHashId?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PaginatedResponseDTOCustomerDetailsResponseV2DTO>> {
        const requestContextPromise = this.requestFactory.customerListV3(clientHashId, businessRegistrationNumber, customerType, email, mobile, order, page, parentCustomerHashId, size, tagKey, tagValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListV3WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V3
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param customerType This field accepts the type of customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param parentCustomerHashId This field contains the unique parent customer identifier generated at the time of customer creation.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public customerListV3(clientHashId: string, businessRegistrationNumber?: string, customerType?: 'INDIVIDUAL' | 'CORPORATE', email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, parentCustomerHashId?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<PaginatedResponseDTOCustomerDetailsResponseV2DTO> {
        return this.customerListV3WithHttpInfo(clientHashId, businessRegistrationNumber, customerType, email, mobile, order, page, parentCustomerHashId, size, tagKey, tagValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PaginatedResponseDTOCustomerDetailsResponseV2DTO>) => apiResponse.data));
    }

    /**
     * This API allows you to add, update, and delete customer tags.
     * Manage Customer Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated during customer creation.
     * @param customerClientTagsRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageCustomerTagsWithHttpInfo(clientHashId: string, customerHashId: string, customerClientTagsRequestDTO: CustomerClientTagsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerClientTagsResponseDTO>> {
        const requestContextPromise = this.requestFactory.manageCustomerTags(clientHashId, customerHashId, customerClientTagsRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.manageCustomerTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to add, update, and delete customer tags.
     * Manage Customer Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated during customer creation.
     * @param customerClientTagsRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageCustomerTags(clientHashId: string, customerHashId: string, customerClientTagsRequestDTO: CustomerClientTagsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomerClientTagsResponseDTO> {
        return this.manageCustomerTagsWithHttpInfo(clientHashId, customerHashId, customerClientTagsRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerClientTagsResponseDTO>) => apiResponse.data));
    }

}

import { CustomerTermsAndConditionsApiRequestFactory, CustomerTermsAndConditionsApiResponseProcessor} from "../apis/CustomerTermsAndConditionsApi";
export class ObservableCustomerTermsAndConditionsApi {
    private requestFactory: CustomerTermsAndConditionsApiRequestFactory;
    private responseProcessor: CustomerTermsAndConditionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerTermsAndConditionsApiRequestFactory,
        responseProcessor?: CustomerTermsAndConditionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerTermsAndConditionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerTermsAndConditionsApiResponseProcessor();
    }

    /**
     * This API updates the Terms and Conditions acceptance status for a customer
     * Accept Terms and Conditions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param termsAndConditionsRequestDTO termsAndConditionsRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public acceptTermsandConditionsWithHttpInfo(clientHashId: string, customerHashId: string, termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TermsAndConditionsAcceptResponseDTO>> {
        const requestContextPromise = this.requestFactory.acceptTermsandConditions(clientHashId, customerHashId, termsAndConditionsRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.acceptTermsandConditionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API updates the Terms and Conditions acceptance status for a customer
     * Accept Terms and Conditions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param termsAndConditionsRequestDTO termsAndConditionsRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public acceptTermsandConditions(clientHashId: string, customerHashId: string, termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<TermsAndConditionsAcceptResponseDTO> {
        return this.acceptTermsandConditionsWithHttpInfo(clientHashId, customerHashId, termsAndConditionsRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TermsAndConditionsAcceptResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
     * Terms and Conditions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public termsandConditionsWithHttpInfo(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TermsAndConditionsResponseDTO>> {
        const requestContextPromise = this.requestFactory.termsandConditions(clientHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.termsandConditionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
     * Terms and Conditions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public termsandConditions(clientHashId: string, xRequestId?: string, _options?: Configuration): Observable<TermsAndConditionsResponseDTO> {
        return this.termsandConditionsWithHttpInfo(clientHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TermsAndConditionsResponseDTO>) => apiResponse.data));
    }

}

import { CustomerVirtualAccountsApiRequestFactory, CustomerVirtualAccountsApiResponseProcessor} from "../apis/CustomerVirtualAccountsApi";
export class ObservableCustomerVirtualAccountsApi {
    private requestFactory: CustomerVirtualAccountsApiRequestFactory;
    private responseProcessor: CustomerVirtualAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerVirtualAccountsApiRequestFactory,
        responseProcessor?: CustomerVirtualAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerVirtualAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerVirtualAccountsApiResponseProcessor();
    }

    /**
     * This API allows you to download an account ownership certificate.
     * Account Ownership Certificate
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer.
     * @param currentAccountBalance This field will display the account balance of the customer as on date
     * @param xRequestId Enter a unique UUID value.
     */
    public accountOwnershipCertificateWithHttpInfo(clientHashId: string, customerHashId: string, currencies?: string, currentAccountBalance?: boolean, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.accountOwnershipCertificate(clientHashId, customerHashId, currencies, currentAccountBalance, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountOwnershipCertificateWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to download an account ownership certificate.
     * Account Ownership Certificate
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer.
     * @param currentAccountBalance This field will display the account balance of the customer as on date
     * @param xRequestId Enter a unique UUID value.
     */
    public accountOwnershipCertificate(clientHashId: string, customerHashId: string, currencies?: string, currentAccountBalance?: boolean, xRequestId?: string, _options?: Configuration): Observable<void> {
        return this.accountOwnershipCertificateWithHttpInfo(clientHashId, customerHashId, currencies, currentAccountBalance, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API allows you to assign virtual account numbers to customer for specific source.
     * Assign Payment ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdRequestDTO2 paymentIdRequestDTO2
     * @param xRequestId Enter a unique UUID value
     */
    public assignPaymentIDWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdRequestDTO2: PaymentIdRequestDTO2, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PaymentIdResponseDTO2>> {
        const requestContextPromise = this.requestFactory.assignPaymentID(clientHashId, customerHashId, walletHashId, paymentIdRequestDTO2, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignPaymentIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to assign virtual account numbers to customer for specific source.
     * Assign Payment ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdRequestDTO2 paymentIdRequestDTO2
     * @param xRequestId Enter a unique UUID value
     */
    public assignPaymentID(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdRequestDTO2: PaymentIdRequestDTO2, xRequestId?: string, _options?: Configuration): Observable<PaymentIdResponseDTO2> {
        return this.assignPaymentIDWithHttpInfo(clientHashId, customerHashId, walletHashId, paymentIdRequestDTO2, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PaymentIdResponseDTO2>) => apiResponse.data));
    }

    /**
     * This API allows you to add, update, delete client tags against each virtual account.
     * Manage Virtual Account Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdTagRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageVirtualAccountTagsWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdTagRequestDTO: PaymentIdTagRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PaymentIdCientTagsResponseDTO>> {
        const requestContextPromise = this.requestFactory.manageVirtualAccountTags(clientHashId, customerHashId, walletHashId, paymentIdTagRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.manageVirtualAccountTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to add, update, delete client tags against each virtual account.
     * Manage Virtual Account Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdTagRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageVirtualAccountTags(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdTagRequestDTO: PaymentIdTagRequestDTO, xRequestId?: string, _options?: Configuration): Observable<PaymentIdCientTagsResponseDTO> {
        return this.manageVirtualAccountTagsWithHttpInfo(clientHashId, customerHashId, walletHashId, paymentIdTagRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PaymentIdCientTagsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.   ⚠️ WARNING   > To access updated functionality and features we recommed using the latest version of this API [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and becomes unsupported.
     * Virtual Account Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated and shared before API handshake.
     * @param currencyCode 
     * @param endDate 
     * @param order 
     * @param page 
     * @param property 
     * @param size 
     * @param startDate 
     * @param tagKey 
     * @param tagValue 
     * @param xRequestId Enter a unique UUID value
     */
    public virtualAccountDetailsWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<WalletPaymentIdsResponseDTO>>> {
        const requestContextPromise = this.requestFactory.virtualAccountDetails(clientHashId, customerHashId, walletHashId, currencyCode, endDate, order, page, property, size, startDate, tagKey, tagValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.virtualAccountDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.   ⚠️ WARNING   > To access updated functionality and features we recommed using the latest version of this API [Virtual Account Details V2](/apis/reference/virtualaccountdetailsv2). Eventually, this API version will be deprecated and becomes unsupported.
     * Virtual Account Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated and shared before API handshake.
     * @param currencyCode 
     * @param endDate 
     * @param order 
     * @param page 
     * @param property 
     * @param size 
     * @param startDate 
     * @param tagKey 
     * @param tagValue 
     * @param xRequestId Enter a unique UUID value
     */
    public virtualAccountDetails(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<Array<WalletPaymentIdsResponseDTO>> {
        return this.virtualAccountDetailsWithHttpInfo(clientHashId, customerHashId, walletHashId, currencyCode, endDate, order, page, property, size, startDate, tagKey, tagValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<WalletPaymentIdsResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.
     * Virtual Account Details V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated and shared before API handshake.
     * @param currencyCode 
     * @param endDate 
     * @param order 
     * @param page 
     * @param property 
     * @param size 
     * @param startDate 
     * @param tagKey 
     * @param tagValue 
     * @param xRequestId Enter a unique UUID value
     */
    public virtualAccountDetailsV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<VirtualAccountResponseDTO>> {
        const requestContextPromise = this.requestFactory.virtualAccountDetailsV2(clientHashId, customerHashId, walletHashId, currencyCode, endDate, order, page, property, size, startDate, tagKey, tagValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.virtualAccountDetailsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch virtual accounts assigned to a customer\'s wallet.
     * Virtual Account Details V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated and shared before API handshake.
     * @param currencyCode 
     * @param endDate 
     * @param order 
     * @param page 
     * @param property 
     * @param size 
     * @param startDate 
     * @param tagKey 
     * @param tagValue 
     * @param xRequestId Enter a unique UUID value
     */
    public virtualAccountDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Observable<VirtualAccountResponseDTO> {
        return this.virtualAccountDetailsV2WithHttpInfo(clientHashId, customerHashId, walletHashId, currencyCode, endDate, order, page, property, size, startDate, tagKey, tagValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<VirtualAccountResponseDTO>) => apiResponse.data));
    }

}

import { CustomerWalletBalanceApiRequestFactory, CustomerWalletBalanceApiResponseProcessor} from "../apis/CustomerWalletBalanceApi";
export class ObservableCustomerWalletBalanceApi {
    private requestFactory: CustomerWalletBalanceApiRequestFactory;
    private responseProcessor: CustomerWalletBalanceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerWalletBalanceApiRequestFactory,
        responseProcessor?: CustomerWalletBalanceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerWalletBalanceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerWalletBalanceApiResponseProcessor();
    }

    /**
     * This API allows you to fetch balance for a specific wallet.
     * Wallet Balance
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public walletBalanceWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<WalletBalanceResponseDTO>>> {
        const requestContextPromise = this.requestFactory.walletBalance(clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.walletBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch balance for a specific wallet.
     * Wallet Balance
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public walletBalance(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<WalletBalanceResponseDTO>> {
        return this.walletBalanceWithHttpInfo(clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<WalletBalanceResponseDTO>>) => apiResponse.data));
    }

}

import { CustomerWalletTransactionsApiRequestFactory, CustomerWalletTransactionsApiResponseProcessor} from "../apis/CustomerWalletTransactionsApi";
export class ObservableCustomerWalletTransactionsApi {
    private requestFactory: CustomerWalletTransactionsApiRequestFactory;
    private responseProcessor: CustomerWalletTransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerWalletTransactionsApiRequestFactory,
        responseProcessor?: CustomerWalletTransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerWalletTransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerWalletTransactionsApiResponseProcessor();
    }

    /**
     * This API allows you to download a receipt against each transaction.
     * Download Transaction Receipt
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public downloadTransactionReceiptWithHttpInfo(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TransactionsReceiptDTO>> {
        const requestContextPromise = this.requestFactory.downloadTransactionReceipt(clientHashId, customerHashId, transactionId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadTransactionReceiptWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to download a receipt against each transaction.
     * Download Transaction Receipt
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public downloadTransactionReceipt(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<TransactionsReceiptDTO> {
        return this.downloadTransactionReceiptWithHttpInfo(clientHashId, customerHashId, transactionId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TransactionsReceiptDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to add, update, and delete transaction tags.
     * Manage Transaction Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Unique transaction Identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionClientTagsRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageTransactionTagsWithHttpInfo(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionClientTagsRequestDTO: TransactionClientTagsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<TransactionClientTagsResponseDTO>> {
        const requestContextPromise = this.requestFactory.manageTransactionTags(clientHashId, customerHashId, transactionId, walletHashId, transactionClientTagsRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.manageTransactionTagsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to add, update, and delete transaction tags.
     * Manage Transaction Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Unique transaction Identifier generated and shared before API handshake.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionClientTagsRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public manageTransactionTags(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionClientTagsRequestDTO: TransactionClientTagsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<TransactionClientTagsResponseDTO> {
        return this.manageTransactionTagsWithHttpInfo(clientHashId, customerHashId, transactionId, walletHashId, transactionClientTagsRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<TransactionClientTagsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to update a transaction with merchant location.
     * Transaction Geo-Tagging
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsLocationDTO transactionsLocationDTO
     * @param xRequestId Enter a unique UUID value
     */
    public transactionGeoTaggingWithHttpInfo(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsLocationDTO: TransactionsLocationDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiError>> {
        const requestContextPromise = this.requestFactory.transactionGeoTagging(clientHashId, customerHashId, transactionId, walletHashId, transactionsLocationDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionGeoTaggingWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update a transaction with merchant location.
     * Transaction Geo-Tagging
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsLocationDTO transactionsLocationDTO
     * @param xRequestId Enter a unique UUID value
     */
    public transactionGeoTagging(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsLocationDTO: TransactionsLocationDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiError> {
        return this.transactionGeoTaggingWithHttpInfo(clientHashId, customerHashId, transactionId, walletHashId, transactionsLocationDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiError>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch transaction details for a customer.
     * Transactions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param authCode This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @param authCurrency This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param businessTransaction This parameter can filter the transactions based on businessTransaction flag.
     * @param cardHashId This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @param childCustomerHashId This field contains the unique child customer identifier generated when new child customer created.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param mcc This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @param merchantCategories This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @param merchantCity This parameter can filter the transactions based on the merchant city field.
     * @param merchantCountries This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @param merchantCountry This parameter can filter the transactions based on the merchant country field.
     * @param merchantName This parameter can filter the transactions based on the merchant name field.
     * @param order The sort order for the results.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param paymentInstrumentHashId This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @param property The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @param settlementDate This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @param settlementStatus This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @param size This will decide the number of elements per page. Typical values can be 1-20.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param status This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @param systemReferenceNumber This parameter can be used to filter the transactions based on the systemReferenceNumber.
     * @param systemTraceAuditNumber This parameter can filter the transactions based on systemTraceAuditNumber.
     * @param tagKey This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @param transactionCurrency This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @param transactionType This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @param transactionsLabelsKey This parameter can filter the transactions based on transactionsLabelsKey.
     * @param transactionsLabelsValue This parameter can filter the transactions based on transactionsLabelsValue.
     * @param xRequestId Enter a unique UUID value
     */
    public transactionsWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, authCode?: string, authCurrency?: string, businessTransaction?: string, cardHashId?: string, childCustomerHashId?: string, endDate?: string, mcc?: string, merchantCategories?: string, merchantCity?: string, merchantCountries?: string, merchantCountry?: string, merchantName?: string, order?: 'ASC' | 'DESC', page?: number, paymentInstrumentHashId?: string, property?: string, settlementDate?: string, settlementStatus?: string, size?: number, startDate?: string, status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED', systemReferenceNumber?: string, systemTraceAuditNumber?: string, tagKey?: string, tagValue?: string, transactionCurrency?: string, transactionType?: string, transactionsLabelsKey?: string, transactionsLabelsValue?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletTransactionsResponseDTO>> {
        const requestContextPromise = this.requestFactory.transactions(clientHashId, customerHashId, walletHashId, authCode, authCurrency, businessTransaction, cardHashId, childCustomerHashId, endDate, mcc, merchantCategories, merchantCity, merchantCountries, merchantCountry, merchantName, order, page, paymentInstrumentHashId, property, settlementDate, settlementStatus, size, startDate, status, systemReferenceNumber, systemTraceAuditNumber, tagKey, tagValue, transactionCurrency, transactionType, transactionsLabelsKey, transactionsLabelsValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch transaction details for a customer.
     * Transactions
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param authCode This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @param authCurrency This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param businessTransaction This parameter can filter the transactions based on businessTransaction flag.
     * @param cardHashId This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @param childCustomerHashId This field contains the unique child customer identifier generated when new child customer created.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param mcc This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @param merchantCategories This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @param merchantCity This parameter can filter the transactions based on the merchant city field.
     * @param merchantCountries This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @param merchantCountry This parameter can filter the transactions based on the merchant country field.
     * @param merchantName This parameter can filter the transactions based on the merchant name field.
     * @param order The sort order for the results.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param paymentInstrumentHashId This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @param property The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @param settlementDate This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @param settlementStatus This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @param size This will decide the number of elements per page. Typical values can be 1-20.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param status This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @param systemReferenceNumber This parameter can be used to filter the transactions based on the systemReferenceNumber.
     * @param systemTraceAuditNumber This parameter can filter the transactions based on systemTraceAuditNumber.
     * @param tagKey This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @param transactionCurrency This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @param transactionType This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @param transactionsLabelsKey This parameter can filter the transactions based on transactionsLabelsKey.
     * @param transactionsLabelsValue This parameter can filter the transactions based on transactionsLabelsValue.
     * @param xRequestId Enter a unique UUID value
     */
    public transactions(clientHashId: string, customerHashId: string, walletHashId: string, authCode?: string, authCurrency?: string, businessTransaction?: string, cardHashId?: string, childCustomerHashId?: string, endDate?: string, mcc?: string, merchantCategories?: string, merchantCity?: string, merchantCountries?: string, merchantCountry?: string, merchantName?: string, order?: 'ASC' | 'DESC', page?: number, paymentInstrumentHashId?: string, property?: string, settlementDate?: string, settlementStatus?: string, size?: number, startDate?: string, status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED', systemReferenceNumber?: string, systemTraceAuditNumber?: string, tagKey?: string, tagValue?: string, transactionCurrency?: string, transactionType?: string, transactionsLabelsKey?: string, transactionsLabelsValue?: string, xRequestId?: string, _options?: Configuration): Observable<WalletTransactionsResponseDTO> {
        return this.transactionsWithHttpInfo(clientHashId, customerHashId, walletHashId, authCode, authCurrency, businessTransaction, cardHashId, childCustomerHashId, endDate, mcc, merchantCategories, merchantCity, merchantCountries, merchantCountry, merchantName, order, page, paymentInstrumentHashId, property, settlementDate, settlementStatus, size, startDate, status, systemReferenceNumber, systemTraceAuditNumber, tagKey, tagValue, transactionCurrency, transactionType, transactionsLabelsKey, transactionsLabelsValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletTransactionsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.
     * Update Business Transaction Flag
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsBusinessDTO transactionsBusinessDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateBusinessTransactionFlagWithHttpInfo(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsBusinessDTO: TransactionsBusinessDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiError>> {
        const requestContextPromise = this.requestFactory.updateBusinessTransactionFlag(clientHashId, customerHashId, transactionId, walletHashId, transactionsBusinessDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBusinessTransactionFlagWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update a flag against each transaction signifying that the transaction is a business transaction.
     * Update Business Transaction Flag
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsBusinessDTO transactionsBusinessDTO
     * @param xRequestId Enter a unique UUID value
     */
    public updateBusinessTransactionFlag(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsBusinessDTO: TransactionsBusinessDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiError> {
        return this.updateBusinessTransactionFlagWithHttpInfo(clientHashId, customerHashId, transactionId, walletHashId, transactionsBusinessDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiError>) => apiResponse.data));
    }

    /**
     * This API allows you to upload a receipt against each transaction.
     * Upload Transaction Receipt
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsReceiptDTO transactionReceipt
     * @param xRequestId Enter a unique UUID value
     */
    public uploadTransactionReceiptWithHttpInfo(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsReceiptDTO: TransactionsReceiptDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<WalletApiError>> {
        const requestContextPromise = this.requestFactory.uploadTransactionReceipt(clientHashId, customerHashId, transactionId, walletHashId, transactionsReceiptDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadTransactionReceiptWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to upload a receipt against each transaction.
     * Upload Transaction Receipt
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param transactionId Transaction Id is NIUM generated 36 character UUID which is unique, per transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param transactionsReceiptDTO transactionReceipt
     * @param xRequestId Enter a unique UUID value
     */
    public uploadTransactionReceipt(clientHashId: string, customerHashId: string, transactionId: string, walletHashId: string, transactionsReceiptDTO: TransactionsReceiptDTO, xRequestId?: string, _options?: Configuration): Observable<WalletApiError> {
        return this.uploadTransactionReceiptWithHttpInfo(clientHashId, customerHashId, transactionId, walletHashId, transactionsReceiptDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<WalletApiError>) => apiResponse.data));
    }

}

import { LifecycleApiRequestFactory, LifecycleApiResponseProcessor} from "../apis/LifecycleApi";
export class ObservableLifecycleApi {
    private requestFactory: LifecycleApiRequestFactory;
    private responseProcessor: LifecycleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LifecycleApiRequestFactory,
        responseProcessor?: LifecycleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LifecycleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LifecycleApiResponseProcessor();
    }

    /**
     * This API allows you to activate a card after delivery to the customer.
     * Activate Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param activateCardRequestV2DTO Activate card request
     * @param xRequestId Enter a unique UUID value.
     */
    public activateCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, activateCardRequestV2DTO: ActivateCardRequestV2DTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ActivateCardResponseV2DTO>> {
        const requestContextPromise = this.requestFactory.activateCard(clientHashId, customerHashId, walletHashId, cardHashId, activateCardRequestV2DTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activateCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to activate a card after delivery to the customer.
     * Activate Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param activateCardRequestV2DTO Activate card request
     * @param xRequestId Enter a unique UUID value.
     */
    public activateCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, activateCardRequestV2DTO: ActivateCardRequestV2DTO, xRequestId?: string, _options?: Configuration): Observable<ActivateCardResponseV2DTO> {
        return this.activateCardWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, activateCardRequestV2DTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ActivateCardResponseV2DTO>) => apiResponse.data));
    }

    /**
     * This API allows you to activate a card after delivery to a customer.
     * Activate Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public activateCard1WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ActivateCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.activateCard1(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activateCard1WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to activate a card after delivery to a customer.
     * Activate Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public activateCard1(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<ActivateCardResponseDTO> {
        return this.activateCard1WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ActivateCardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.
     * Add Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardRequest addCardRequest
     * @param xRequestId Enter a unique UUID value.
     */
    public addCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, addCardRequest: AddCardRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.addCard(clientHashId, customerHashId, walletHashId, addCardRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.
     * Add Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardRequest addCardRequest
     * @param xRequestId Enter a unique UUID value.
     */
    public addCard(clientHashId: string, customerHashId: string, walletHashId: string, addCardRequest: AddCardRequest, xRequestId?: string, _options?: Configuration): Observable<AddCardResponseDTO> {
        return this.addCardWithHttpInfo(clientHashId, customerHashId, walletHashId, addCardRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to issue a card for a customer.
     * Add Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardV2Request The request body to add a new card.
     * @param xRequestId Enter a unique UUID value.
     */
    public addCardV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, addCardV2Request: AddCardV2Request, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCardV2ResponseDTO>> {
        const requestContextPromise = this.requestFactory.addCardV2(clientHashId, customerHashId, walletHashId, addCardV2Request, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCardV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to issue a card for a customer.
     * Add Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardV2Request The request body to add a new card.
     * @param xRequestId Enter a unique UUID value.
     */
    public addCardV2(clientHashId: string, customerHashId: string, walletHashId: string, addCardV2Request: AddCardV2Request, xRequestId?: string, _options?: Configuration): Observable<AddCardV2ResponseDTO> {
        return this.addCardV2WithHttpInfo(clientHashId, customerHashId, walletHashId, addCardV2Request, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCardV2ResponseDTO>) => apiResponse.data));
    }

    /**
     * This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.
     * Assign Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param assignCardDTO assignCardDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public assignCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, assignCardDTO: AssignCardDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CardAssignResponseDTO>> {
        const requestContextPromise = this.requestFactory.assignCard(clientHashId, customerHashId, walletHashId, assignCardDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.
     * Assign Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param assignCardDTO assignCardDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public assignCard(clientHashId: string, customerHashId: string, walletHashId: string, assignCardDTO: AssignCardDTO, xRequestId?: string, _options?: Configuration): Observable<CardAssignResponseDTO> {
        return this.assignCardWithHttpInfo(clientHashId, customerHashId, walletHashId, assignCardDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CardAssignResponseDTO>) => apiResponse.data));
    }

    /**
     * Use this API to block and replace a card.
     * Block and Replace Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockAndReplaceCardRequestDTO A card can be blocked and replaced using the Block And Replace Card API.
     * @param xRequestId Enter a unique UUID value.
     */
    public blockAndReplaceCardV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockAndReplaceCardRequestDTO: BlockAndReplaceCardRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<BlockAndReplaceCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.blockAndReplaceCardV2(clientHashId, customerHashId, walletHashId, cardHashId, blockAndReplaceCardRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockAndReplaceCardV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this API to block and replace a card.
     * Block and Replace Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockAndReplaceCardRequestDTO A card can be blocked and replaced using the Block And Replace Card API.
     * @param xRequestId Enter a unique UUID value.
     */
    public blockAndReplaceCardV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockAndReplaceCardRequestDTO: BlockAndReplaceCardRequestDTO, xRequestId?: string, _options?: Configuration): Observable<BlockAndReplaceCardResponseDTO> {
        return this.blockAndReplaceCardV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, blockAndReplaceCardRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<BlockAndReplaceCardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Block/Unblock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockCodeDTO blockCode
     * @param xRequestId Enter a unique UUID value.
     */
    public blockUnblockCardsWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockCodeDTO: BlockCodeDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<BlockCodeCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.blockUnblockCards(clientHashId, customerHashId, walletHashId, cardHashId, blockCodeDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockUnblockCardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Block/Unblock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockCodeDTO blockCode
     * @param xRequestId Enter a unique UUID value.
     */
    public blockUnblockCards(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockCodeDTO: BlockCodeDTO, xRequestId?: string, _options?: Configuration): Observable<BlockCodeCardResponseDTO> {
        return this.blockUnblockCardsWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, blockCodeDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<BlockCodeCardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.
     * Card Details
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public cardDetailsWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CardResponseDTO>> {
        const requestContextPromise = this.requestFactory.cardDetails(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cardDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.
     * Card Details
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public cardDetails(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<CardResponseDTO> {
        return this.cardDetailsWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to get details about a card.
     * Card Details V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public cardDetailsV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CardDetails>> {
        const requestContextPromise = this.requestFactory.cardDetailsV2(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cardDetailsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to get details about a card.
     * Card Details V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public cardDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<CardDetails> {
        return this.cardDetailsV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CardDetails>) => apiResponse.data));
    }

    /**
     * This API will return all the cards issued, for a given wallet.
     * Card List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public cardListWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.cardList(clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cardListWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will return all the cards issued, for a given wallet.
     * Card List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public cardList(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.cardListWithHttpInfo(clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * This API returns all the cards issued for a given customer wallet.
     * Card List V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param childCustomerHashId This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\&#39;s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value.
     */
    public cardListV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, childCustomerHashId?: string, page?: number, size?: number, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PageResponseCardDetails>> {
        const requestContextPromise = this.requestFactory.cardListV2(clientHashId, customerHashId, walletHashId, childCustomerHashId, page, size, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cardListV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API returns all the cards issued for a given customer wallet.
     * Card List V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param childCustomerHashId This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\&#39;s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value.
     */
    public cardListV2(clientHashId: string, customerHashId: string, walletHashId: string, childCustomerHashId?: string, page?: number, size?: number, xRequestId?: string, _options?: Configuration): Observable<PageResponseCardDetails> {
        return this.cardListV2WithHttpInfo(clientHashId, customerHashId, walletHashId, childCustomerHashId, page, size, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PageResponseCardDetails>) => apiResponse.data));
    }

    /**
     * Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients
     * Get Card Details Widget
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param cardWidgetTokenRequestDTO 
     * @param xRequestId Enter a unique UUID value.
     */
    public getCardWidgetWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, cardWidgetTokenRequestDTO: CardWidgetTokenRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CardWidgetTokenResponse>> {
        const requestContextPromise = this.requestFactory.getCardWidget(clientHashId, customerHashId, walletHashId, cardHashId, cardWidgetTokenRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCardWidgetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients
     * Get Card Details Widget
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param cardWidgetTokenRequestDTO 
     * @param xRequestId Enter a unique UUID value.
     */
    public getCardWidget(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, cardWidgetTokenRequestDTO: CardWidgetTokenRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CardWidgetTokenResponse> {
        return this.getCardWidgetWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, cardWidgetTokenRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CardWidgetTokenResponse>) => apiResponse.data));
    }

    /**
     * Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Issue Replacement Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param replaceCardRequest A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
     * @param xRequestId Enter a unique UUID value
     */
    public issueReplacementCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, replaceCardRequest: ReplaceCardRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<AddCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.issueReplacementCard(clientHashId, customerHashId, walletHashId, cardHashId, replaceCardRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.issueReplacementCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Issue Replacement Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param replaceCardRequest A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
     * @param xRequestId Enter a unique UUID value
     */
    public issueReplacementCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, replaceCardRequest: ReplaceCardRequest, xRequestId?: string, _options?: Configuration): Observable<AddCardResponseDTO> {
        return this.issueReplacementCardWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, replaceCardRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<AddCardResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to temporarily lock or unlock a card.
     * Lock/Unlock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param lockStatusUpdateRequestDTO lockStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public lockUnlockCardV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, lockStatusUpdateRequestDTO: LockStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<LockStatusUpdateResponseDTO>> {
        const requestContextPromise = this.requestFactory.lockUnlockCardV2(clientHashId, customerHashId, walletHashId, cardHashId, lockStatusUpdateRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.lockUnlockCardV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to temporarily lock or unlock a card.
     * Lock/Unlock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param lockStatusUpdateRequestDTO lockStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public lockUnlockCardV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, lockStatusUpdateRequestDTO: LockStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<LockStatusUpdateResponseDTO> {
        return this.lockUnlockCardV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, lockStatusUpdateRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<LockStatusUpdateResponseDTO>) => apiResponse.data));
    }

    /**
     * Use this API for card renewal.
     * Renew Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param renewCardRequest A card can be renewed using the Renew Card API on or before 45 days from the expiration date.
     * @param xRequestId Enter a unique UUID value.
     */
    public renewCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, renewCardRequest: RenewCardRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.renewCard(clientHashId, customerHashId, walletHashId, cardHashId, renewCardRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renewCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this API for card renewal.
     * Renew Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param renewCardRequest A card can be renewed using the Renew Card API on or before 45 days from the expiration date.
     * @param xRequestId Enter a unique UUID value.
     */
    public renewCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, renewCardRequest: RenewCardRequest, xRequestId?: string, _options?: Configuration): Observable<string> {
        return this.renewCardWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, renewCardRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * This API allows you to update the contact information of the cardholder.
     * Update Card Details V2
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param walletHashId walletHashId
     * @param cardHashId cardHashId
     * @param updateContactInfoRequestDTO updateContactInfoRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public updateCardDetailsV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, updateContactInfoRequestDTO: UpdateContactInfoRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ApiResponse2>> {
        const requestContextPromise = this.requestFactory.updateCardDetailsV2(clientHashId, customerHashId, walletHashId, cardHashId, updateContactInfoRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCardDetailsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to update the contact information of the cardholder.
     * Update Card Details V2
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param walletHashId walletHashId
     * @param cardHashId cardHashId
     * @param updateContactInfoRequestDTO updateContactInfoRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public updateCardDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, updateContactInfoRequestDTO: UpdateContactInfoRequestDTO, xRequestId?: string, _options?: Configuration): Observable<ApiResponse2> {
        return this.updateCardDetailsV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, updateContactInfoRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ApiResponse2>) => apiResponse.data));
    }

}

import { OpenBankingOnboardingApiRequestFactory, OpenBankingOnboardingApiResponseProcessor} from "../apis/OpenBankingOnboardingApi";
export class ObservableOpenBankingOnboardingApi {
    private requestFactory: OpenBankingOnboardingApiRequestFactory;
    private responseProcessor: OpenBankingOnboardingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OpenBankingOnboardingApiRequestFactory,
        responseProcessor?: OpenBankingOnboardingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OpenBankingOnboardingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OpenBankingOnboardingApiResponseProcessor();
    }

    /**
     * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
     * Account Details By Customer Consent ID.
     * @param accountConsentId accountConsentId
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public accountDetailsByCustomerConsentIDWithHttpInfo(accountConsentId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ConsentDetailsResponse>> {
        const requestContextPromise = this.requestFactory.accountDetailsByCustomerConsentID(accountConsentId, clientHashId, customerHashId, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountDetailsByCustomerConsentIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
     * Account Details By Customer Consent ID.
     * @param accountConsentId accountConsentId
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public accountDetailsByCustomerConsentID(accountConsentId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<ConsentDetailsResponse> {
        return this.accountDetailsByCustomerConsentIDWithHttpInfo(accountConsentId, clientHashId, customerHashId, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ConsentDetailsResponse>) => apiResponse.data));
    }

    /**
     * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
     * Payment Details by System Reference Number
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber systemReferenceNumber
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public paymentDetailsbySystemReferenceNumberWithHttpInfo(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<OpenBankingPaymentResponseDTO>> {
        const requestContextPromise = this.requestFactory.paymentDetailsbySystemReferenceNumber(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentDetailsbySystemReferenceNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
     * Payment Details by System Reference Number
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber systemReferenceNumber
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public paymentDetailsbySystemReferenceNumber(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<OpenBankingPaymentResponseDTO> {
        return this.paymentDetailsbySystemReferenceNumberWithHttpInfo(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<OpenBankingPaymentResponseDTO>) => apiResponse.data));
    }

}

import { PayinApiRequestFactory, PayinApiResponseProcessor} from "../apis/PayinApi";
export class ObservablePayinApi {
    private requestFactory: PayinApiRequestFactory;
    private responseProcessor: PayinApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayinApiRequestFactory,
        responseProcessor?: PayinApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayinApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayinApiResponseProcessor();
    }

    /**
     * Simulate Funding Instrument Status Update (Sandbox Testing)
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param fundingInstrumentId fundingInstrumentId
     * @param fundingInstrumentStatusUpdateRequestDTO fundingInstrumentStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public simulateFundingInstrumentStatusUpdateWithHttpInfo(clientHashId: string, customerHashId: string, fundingInstrumentId: string, fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.simulateFundingInstrumentStatusUpdate(clientHashId, customerHashId, fundingInstrumentId, fundingInstrumentStatusUpdateRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateFundingInstrumentStatusUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Simulate Funding Instrument Status Update (Sandbox Testing)
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param fundingInstrumentId fundingInstrumentId
     * @param fundingInstrumentStatusUpdateRequestDTO fundingInstrumentStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public simulateFundingInstrumentStatusUpdate(clientHashId: string, customerHashId: string, fundingInstrumentId: string, fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<void> {
        return this.simulateFundingInstrumentStatusUpdateWithHttpInfo(clientHashId, customerHashId, fundingInstrumentId, fundingInstrumentStatusUpdateRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.
     * Simulate Receive Transaction
     * @param inwardPaymentManualRequestDTO inwardPaymentManualRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public simulatereceivepaymentWithHttpInfo(inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PayinApiResponse2>> {
        const requestContextPromise = this.requestFactory.simulatereceivepayment(inwardPaymentManualRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulatereceivepaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.
     * Simulate Receive Transaction
     * @param inwardPaymentManualRequestDTO inwardPaymentManualRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public simulatereceivepayment(inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO, xRequestId?: string, _options?: Configuration): Observable<PayinApiResponse2> {
        return this.simulatereceivepaymentWithHttpInfo(inwardPaymentManualRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PayinApiResponse2>) => apiResponse.data));
    }

}

import { PayoutApiRequestFactory, PayoutApiResponseProcessor} from "../apis/PayoutApi";
export class ObservablePayoutApi {
    private requestFactory: PayoutApiRequestFactory;
    private responseProcessor: PayoutApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutApiRequestFactory,
        responseProcessor?: PayoutApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayoutApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayoutApiResponseProcessor();
    }

    /**
     * This API allows you to use NIUM’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.
     * Get Card Widget
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated during customer creation.
     * @param customerCardWidgetTokenRequestDTO cardWidgetTokenRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public customerGetCardWidgetWithHttpInfo(clientHashId: string, customerHashId: string, customerCardWidgetTokenRequestDTO: CustomerCardWidgetTokenRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CustomerCardWidgetTokenResponse>> {
        const requestContextPromise = this.requestFactory.customerGetCardWidget(clientHashId, customerHashId, customerCardWidgetTokenRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGetCardWidgetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to use NIUM’s card widget to tokenize beneficiary card details. Non-PCI DSS compliant Clients are expected to integrate with this new API to get beneficiary’s encrypted card token number. This token number needs to be passed in field encryptedBeneficiaryCardToken while adding a beneficiary to make a payout to card.
     * Get Card Widget
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated during customer creation.
     * @param customerCardWidgetTokenRequestDTO cardWidgetTokenRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public customerGetCardWidget(clientHashId: string, customerHashId: string, customerCardWidgetTokenRequestDTO: CustomerCardWidgetTokenRequestDTO, xRequestId?: string, _options?: Configuration): Observable<CustomerCardWidgetTokenResponse> {
        return this.customerGetCardWidgetWithHttpInfo(clientHashId, customerHashId, customerCardWidgetTokenRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CustomerCardWidgetTokenResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.
     * Fetch Remittance Life Cycle Status
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber This is a unique system reference number generated by card issuance platform for the transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchRemittanceLifeCycleStatusWithHttpInfo(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<RemittanceEventsResponseDTO2>>> {
        const requestContextPromise = this.requestFactory.fetchRemittanceLifeCycleStatus(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchRemittanceLifeCycleStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the Remittance Life Cycle Status along with Payment Reference Number, Partner Reference Number, System Reference Number, Date and Time of the Remittance status based on the System Reference Number provided in the input.
     * Fetch Remittance Life Cycle Status
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber This is a unique system reference number generated by card issuance platform for the transaction.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchRemittanceLifeCycleStatus(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<Array<RemittanceEventsResponseDTO2>> {
        return this.fetchRemittanceLifeCycleStatusWithHttpInfo(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<RemittanceEventsResponseDTO2>>) => apiResponse.data));
    }

    /**
     * This API allows you to download a proof of payment receipt against a transaction.
     * Get Proof Of Payment
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber Unique System Reference Number generated on Transfer Money request.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value.
     */
    public poPWithHttpInfo(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.poP(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.poPWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to download a proof of payment receipt against a transaction.
     * Get Proof Of Payment
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param systemReferenceNumber Unique System Reference Number generated on Transfer Money request.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value.
     */
    public poP(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Observable<void> {
        return this.poPWithHttpInfo(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This API will allow you to fetch the list of purpose of transfer.
     * Purpose of Transfer
     * @param xRequestId Enter a unique UUID value
     */
    public purposeofTransferWithHttpInfo(xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<PurposeCodeResponseDTO>>> {
        const requestContextPromise = this.requestFactory.purposeofTransfer(xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purposeofTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to fetch the list of purpose of transfer.
     * Purpose of Transfer
     * @param xRequestId Enter a unique UUID value
     */
    public purposeofTransfer(xRequestId?: string, _options?: Configuration): Observable<Array<PurposeCodeResponseDTO>> {
        return this.purposeofTransferWithHttpInfo(xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<PurposeCodeResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API allows you to respond to an RFI raised for a transaction.
     * Respond to Transaction RFI
     * @param authCode Authorization code of the transaction.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param uploadRfiDocumentRequestDTO uploadRfiDocumentRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoTransactionRFIWithHttpInfo(authCode: string, clientHashId: string, customerHashId: string, walletHashId: string, uploadRfiDocumentRequestDTO: UploadRfiDocumentRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<UploadRfiDetailsResponseDTO>> {
        const requestContextPromise = this.requestFactory.respondtoTransactionRFI(authCode, clientHashId, customerHashId, walletHashId, uploadRfiDocumentRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.respondtoTransactionRFIWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to respond to an RFI raised for a transaction.
     * Respond to Transaction RFI
     * @param authCode Authorization code of the transaction.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param uploadRfiDocumentRequestDTO uploadRfiDocumentRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public respondtoTransactionRFI(authCode: string, clientHashId: string, customerHashId: string, walletHashId: string, uploadRfiDocumentRequestDTO: UploadRfiDocumentRequestDTO, xRequestId?: string, _options?: Configuration): Observable<UploadRfiDetailsResponseDTO> {
        return this.respondtoTransactionRFIWithHttpInfo(authCode, clientHashId, customerHashId, walletHashId, uploadRfiDocumentRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<UploadRfiDetailsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API will allow you to send money to the registered beneficiary.
     * Transfer Money
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param remittanceTransactionsRequestDTO remittanceTransactionsRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public transferMoneyWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, remittanceTransactionsRequestDTO: RemittanceTransactionsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<RemittanceResponseDTO>> {
        const requestContextPromise = this.requestFactory.transferMoney(clientHashId, customerHashId, walletHashId, remittanceTransactionsRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transferMoneyWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to send money to the registered beneficiary.
     * Transfer Money
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param remittanceTransactionsRequestDTO remittanceTransactionsRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public transferMoney(clientHashId: string, customerHashId: string, walletHashId: string, remittanceTransactionsRequestDTO: RemittanceTransactionsRequestDTO, xRequestId?: string, _options?: Configuration): Observable<RemittanceResponseDTO> {
        return this.transferMoneyWithHttpInfo(clientHashId, customerHashId, walletHashId, remittanceTransactionsRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<RemittanceResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to withdraw funds from the customer\'s wallet.
     * Withdraw Funds from Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param walletRefundRequestDTO walletRefundRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public withdrawFundsFromWalletWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, walletRefundRequestDTO: WalletRefundRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ApiResponseOfWalletRefundResponseDTO>> {
        const requestContextPromise = this.requestFactory.withdrawFundsFromWallet(clientHashId, customerHashId, walletHashId, walletRefundRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.withdrawFundsFromWalletWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to withdraw funds from the customer\'s wallet.
     * Withdraw Funds from Wallet
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param walletRefundRequestDTO walletRefundRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public withdrawFundsFromWallet(clientHashId: string, customerHashId: string, walletHashId: string, walletRefundRequestDTO: WalletRefundRequestDTO, xRequestId?: string, _options?: Configuration): Observable<ApiResponseOfWalletRefundResponseDTO> {
        return this.withdrawFundsFromWalletWithHttpInfo(clientHashId, customerHashId, walletHashId, walletRefundRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ApiResponseOfWalletRefundResponseDTO>) => apiResponse.data));
    }

}

import { QuotesApiRequestFactory, QuotesApiResponseProcessor} from "../apis/QuotesApi";
export class ObservableQuotesApi {
    private requestFactory: QuotesApiRequestFactory;
    private responseProcessor: QuotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QuotesApiRequestFactory,
        responseProcessor?: QuotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QuotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QuotesApiResponseProcessor();
    }

    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * Create Quote
     * @param clientHashId Unique identifier of the client.
     * @param quoteCreationRequest quoteCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public createQuoteWithHttpInfo(clientHashId: string, quoteCreationRequest: QuoteCreationRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<QuoteCreationResponse>> {
        const requestContextPromise = this.requestFactory.createQuote(clientHashId, quoteCreationRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createQuoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * Create Quote
     * @param clientHashId Unique identifier of the client.
     * @param quoteCreationRequest quoteCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public createQuote(clientHashId: string, quoteCreationRequest: QuoteCreationRequest, xRequestId?: string, _options?: Configuration): Observable<QuoteCreationResponse> {
        return this.createQuoteWithHttpInfo(clientHashId, quoteCreationRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<QuoteCreationResponse>) => apiResponse.data));
    }

    /**
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * Fetch Quote by ID
     * @param clientHashId Unique identifier of the client.
     * @param quoteId 
     * @param xRequestId Enter a unique UUID value
     */
    public fetchQuoteWithHttpInfo(clientHashId: string, quoteId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<QuoteCreationResponse>> {
        const requestContextPromise = this.requestFactory.fetchQuote(clientHashId, quoteId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchQuoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * Fetch Quote by ID
     * @param clientHashId Unique identifier of the client.
     * @param quoteId 
     * @param xRequestId Enter a unique UUID value
     */
    public fetchQuote(clientHashId: string, quoteId: string, xRequestId?: string, _options?: Configuration): Observable<QuoteCreationResponse> {
        return this.fetchQuoteWithHttpInfo(clientHashId, quoteId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<QuoteCreationResponse>) => apiResponse.data));
    }

}

import { QuotesPreviousVersionApiRequestFactory, QuotesPreviousVersionApiResponseProcessor} from "../apis/QuotesPreviousVersionApi";
export class ObservableQuotesPreviousVersionApi {
    private requestFactory: QuotesPreviousVersionApiRequestFactory;
    private responseProcessor: QuotesPreviousVersionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QuotesPreviousVersionApiRequestFactory,
        responseProcessor?: QuotesPreviousVersionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QuotesPreviousVersionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QuotesPreviousVersionApiResponseProcessor();
    }

    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * Exchange Rate Lock and Hold
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param destinationCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @param sourceCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param additionalFxMarkup This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateLockandHoldWithHttpInfo(clientHashId: string, customerHashId: string, destinationCurrency: string, sourceCurrency: string, walletHashId: string, additionalFxMarkup?: number, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<FxHoldLockResponseContent>> {
        const requestContextPromise = this.requestFactory.exchangeRateLockandHold(clientHashId, customerHashId, destinationCurrency, sourceCurrency, walletHashId, additionalFxMarkup, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangeRateLockandHoldWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * Exchange Rate Lock and Hold
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param destinationCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @param sourceCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param additionalFxMarkup This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateLockandHold(clientHashId: string, customerHashId: string, destinationCurrency: string, sourceCurrency: string, walletHashId: string, additionalFxMarkup?: number, xRequestId?: string, _options?: Configuration): Observable<FxHoldLockResponseContent> {
        return this.exchangeRateLockandHoldWithHttpInfo(clientHashId, customerHashId, destinationCurrency, sourceCurrency, walletHashId, additionalFxMarkup, xRequestId, _options).pipe(map((apiResponse: HttpInfo<FxHoldLockResponseContent>) => apiResponse.data));
    }

    /**
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * Exchange Rate With Markup
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param sourceAmount An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
     * @param destinationAmount An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateWithMarkupWithHttpInfo(clientHashId: string, sourceCurrencyCode: string, destinationCurrencyCode: string, sourceAmount?: number, destinationAmount?: number, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ExchangeRateV2ResponseDto>> {
        const requestContextPromise = this.requestFactory.exchangeRateWithMarkup(clientHashId, sourceCurrencyCode, destinationCurrencyCode, sourceAmount, destinationAmount, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangeRateWithMarkupWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * Exchange Rate With Markup
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param sourceAmount An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
     * @param destinationAmount An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateWithMarkup(clientHashId: string, sourceCurrencyCode: string, destinationCurrencyCode: string, sourceAmount?: number, destinationAmount?: number, xRequestId?: string, _options?: Configuration): Observable<ExchangeRateV2ResponseDto> {
        return this.exchangeRateWithMarkupWithHttpInfo(clientHashId, sourceCurrencyCode, destinationCurrencyCode, sourceAmount, destinationAmount, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ExchangeRateV2ResponseDto>) => apiResponse.data));
    }

}

import { RatesApiRequestFactory, RatesApiResponseProcessor} from "../apis/RatesApi";
export class ObservableRatesApi {
    private requestFactory: RatesApiRequestFactory;
    private responseProcessor: RatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RatesApiRequestFactory,
        responseProcessor?: RatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RatesApiResponseProcessor();
    }

    /**
     * This API will retrieve aggregated time series of historical exchange rate.
     * Fetch historic aggregated exchange rates
     * @param sourceCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param destinationCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param authorization 
     * @param csrfToken 
     * @param start The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param end The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param window Specifies the field by which the results should be grouped.
     * @param xRequestId Enter a unique UUID value.
     */
    public aggregatedExchangeRatesWithHttpInfo(sourceCurrencyCode: string, destinationCurrencyCode: string, authorization?: string, csrfToken?: string, start?: Date, end?: Date, window?: Window, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ExchangeRatesGetResponse>> {
        const requestContextPromise = this.requestFactory.aggregatedExchangeRates(sourceCurrencyCode, destinationCurrencyCode, authorization, csrfToken, start, end, window, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aggregatedExchangeRatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will retrieve aggregated time series of historical exchange rate.
     * Fetch historic aggregated exchange rates
     * @param sourceCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param destinationCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param authorization 
     * @param csrfToken 
     * @param start The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param end The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param window Specifies the field by which the results should be grouped.
     * @param xRequestId Enter a unique UUID value.
     */
    public aggregatedExchangeRates(sourceCurrencyCode: string, destinationCurrencyCode: string, authorization?: string, csrfToken?: string, start?: Date, end?: Date, window?: Window, xRequestId?: string, _options?: Configuration): Observable<ExchangeRatesGetResponse> {
        return this.aggregatedExchangeRatesWithHttpInfo(sourceCurrencyCode, destinationCurrencyCode, authorization, csrfToken, start, end, window, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ExchangeRatesGetResponse>) => apiResponse.data));
    }

    /**
     * This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.
     * Exchange Rate V2
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateV2WithHttpInfo(sourceCurrencyCode: string, destinationCurrencyCode: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<ExchangeRateV2ResponseDto>> {
        const requestContextPromise = this.requestFactory.exchangeRateV2(sourceCurrencyCode, destinationCurrencyCode, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangeRateV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.
     * Exchange Rate V2
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param xRequestId Enter a unique UUID value
     */
    public exchangeRateV2(sourceCurrencyCode: string, destinationCurrencyCode: string, xRequestId?: string, _options?: Configuration): Observable<ExchangeRateV2ResponseDto> {
        return this.exchangeRateV2WithHttpInfo(sourceCurrencyCode, destinationCurrencyCode, xRequestId, _options).pipe(map((apiResponse: HttpInfo<ExchangeRateV2ResponseDto>) => apiResponse.data));
    }

}

import { ReferenceDataApiRequestFactory, ReferenceDataApiResponseProcessor} from "../apis/ReferenceDataApi";
export class ObservableReferenceDataApi {
    private requestFactory: ReferenceDataApiRequestFactory;
    private responseProcessor: ReferenceDataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferenceDataApiRequestFactory,
        responseProcessor?: ReferenceDataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferenceDataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferenceDataApiResponseProcessor();
    }

    /**
     * This API allows you to fetch the bank details against the routing information.
     * Fetch Bank Details using Routing Code
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) of a beneficiary.
     * @param customerHashId This field accepts the unique customer identifier generated on customer creation.
     * @param routingCodeType This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE
     * @param routingCodeValue This field accepts the routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes).
     * @param xRequestId Enter a unique UUID value
     */
    public fetchBankDetailsusingRoutingCodeWithHttpInfo(clientHashId: string, countryCode: string, customerHashId: string, routingCodeType: string, routingCodeValue: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.fetchBankDetailsusingRoutingCode(clientHashId, countryCode, customerHashId, routingCodeType, routingCodeValue, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchBankDetailsusingRoutingCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the bank details against the routing information.
     * Fetch Bank Details using Routing Code
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) of a beneficiary.
     * @param customerHashId This field accepts the unique customer identifier generated on customer creation.
     * @param routingCodeType This field accepts the routing code type 1. The possible values are: SWIFT for all cases where SWIFT is applicable IFSC (relevant for India) ACH CODE (relevant for USA) BSB CODE (relevant for Australia) SORT CODE (relevant for the UK) LOCATION ID (relevant for Nepal) BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more) TRANSIT NUMBER (relevant for Canada) BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more) Given that the routing_code_type_1 is a PATH parameter, apply URL encoding. For example, when you want to pass ACH CODE, after URL encoding you will pass it as ACH%20CODE
     * @param routingCodeValue This field accepts the routing code value 1. Refer to the [Examples of Routing Codes](/apis/docs/routing-codes#examples-of-routing-codes).
     * @param xRequestId Enter a unique UUID value
     */
    public fetchBankDetailsusingRoutingCode(clientHashId: string, countryCode: string, customerHashId: string, routingCodeType: string, routingCodeValue: string, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.fetchBankDetailsusingRoutingCodeWithHttpInfo(clientHashId, countryCode, customerHashId, routingCodeType, routingCodeValue, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchSupportedCorridorsWithHttpInfo(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.fetchSupportedCorridors(clientHashId, customerHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchSupportedCorridorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchSupportedCorridors(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.fetchSupportedCorridorsWithHttpInfo(clientHashId, customerHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param beneficiaryAccountType This field accepts the beneficiary account type.
     * @param clientType This field accepts type of Client e.g. FI, NonFI, default NonFI.
     * @param customerType This field accepts the type of customer.
     * @param destinationCountry This field accepts the [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param destinationCurrency This field accepts the [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method.
     * @param payoutMethod This field accepts the different modes of payout.
     * @param routingCodeType This field determines the routing code type for the currency.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchSupportedCorridorsV2WithHttpInfo(clientHashId: string, beneficiaryAccountType?: string, clientType?: string, customerType?: string, destinationCountry?: string, destinationCurrency?: string, payoutMethod?: string, routingCodeType?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<SupportedCorridorsResponseDTO>>> {
        const requestContextPromise = this.requestFactory.fetchSupportedCorridorsV2(clientHashId, beneficiaryAccountType, clientType, customerType, destinationCountry, destinationCurrency, payoutMethod, routingCodeType, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchSupportedCorridorsV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param beneficiaryAccountType This field accepts the beneficiary account type.
     * @param clientType This field accepts type of Client e.g. FI, NonFI, default NonFI.
     * @param customerType This field accepts the type of customer.
     * @param destinationCountry This field accepts the [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param destinationCurrency This field accepts the [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method.
     * @param payoutMethod This field accepts the different modes of payout.
     * @param routingCodeType This field determines the routing code type for the currency.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchSupportedCorridorsV2(clientHashId: string, beneficiaryAccountType?: string, clientType?: string, customerType?: string, destinationCountry?: string, destinationCurrency?: string, payoutMethod?: string, routingCodeType?: string, xRequestId?: string, _options?: Configuration): Observable<Array<SupportedCorridorsResponseDTO>> {
        return this.fetchSupportedCorridorsV2WithHttpInfo(clientHashId, beneficiaryAccountType, clientType, customerType, destinationCountry, destinationCurrency, payoutMethod, routingCodeType, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<SupportedCorridorsResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API will allow you to search the routing code details using bank name.
     * Search Routing Code Using Bank Name
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @param routingCodeType This field determines the routing code type for the search.
     * @param searchValue This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @param bankCode This field can accept the bank code of specified branch and country.
     * @param bankName This field can accept the bank name associated with country.
     * @param currencyCode This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @param payoutMethod This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeUsingBankNameWithHttpInfo(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<PartialSearchBankNameResponseDTO>>> {
        const requestContextPromise = this.requestFactory.searchRoutingCodeUsingBankName(clientHashId, countryCode, routingCodeType, searchValue, bankCode, bankName, currencyCode, payoutMethod, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchRoutingCodeUsingBankNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to search the routing code details using bank name.
     * Search Routing Code Using Bank Name
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @param routingCodeType This field determines the routing code type for the search.
     * @param searchValue This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @param bankCode This field can accept the bank code of specified branch and country.
     * @param bankName This field can accept the bank name associated with country.
     * @param currencyCode This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @param payoutMethod This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeUsingBankName(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<Array<PartialSearchBankNameResponseDTO>> {
        return this.searchRoutingCodeUsingBankNameWithHttpInfo(clientHashId, countryCode, routingCodeType, searchValue, bankCode, bankName, currencyCode, payoutMethod, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<PartialSearchBankNameResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API will allow you to search the routing code details using branch name.
     * Search Routing Code Using Branch Name
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @param routingCodeType This field determines the routing code type for the search.
     * @param searchValue This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @param bankCode This field can accept the bank code of specified branch and country.
     * @param bankName This field can accept the bank name associated with country.
     * @param currencyCode This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @param payoutMethod This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeUsingBranchNameWithHttpInfo(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Array<PartialSearchBranchNameResponseDTO>>> {
        const requestContextPromise = this.requestFactory.searchRoutingCodeUsingBranchName(clientHashId, countryCode, routingCodeType, searchValue, bankCode, bankName, currencyCode, payoutMethod, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchRoutingCodeUsingBranchNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to search the routing code details using branch name.
     * Search Routing Code Using Branch Name
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) for which routing code search is initiated.
     * @param routingCodeType This field determines the routing code type for the search.
     * @param searchValue This field accepts the partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS.
     * @param bankCode This field can accept the bank code of specified branch and country.
     * @param bankName This field can accept the bank name associated with country.
     * @param currencyCode This field accepts the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for which routing code search is to be initiated.
     * @param payoutMethod This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeUsingBranchName(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Observable<Array<PartialSearchBranchNameResponseDTO>> {
        return this.searchRoutingCodeUsingBranchNameWithHttpInfo(clientHashId, countryCode, routingCodeType, searchValue, bankCode, bankName, currencyCode, payoutMethod, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Array<PartialSearchBranchNameResponseDTO>>) => apiResponse.data));
    }

    /**
     * This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.
     * Search Routing Code (using bank name/branch name)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param partialSearchDTO partialSearchDTO
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeusingbanknamebranchnameWithHttpInfo(clientHashId: string, customerHashId: string, partialSearchDTO: PartialSearchDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<Resource>> {
        const requestContextPromise = this.requestFactory.searchRoutingCodeusingbanknamebranchname(clientHashId, customerHashId, partialSearchDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchRoutingCodeusingbanknamebranchnameWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.
     * Search Routing Code (using bank name/branch name)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param partialSearchDTO partialSearchDTO
     * @param xRequestId Enter a unique UUID value
     */
    public searchRoutingCodeusingbanknamebranchname(clientHashId: string, customerHashId: string, partialSearchDTO: PartialSearchDTO, xRequestId?: string, _options?: Configuration): Observable<Resource> {
        return this.searchRoutingCodeusingbanknamebranchnameWithHttpInfo(clientHashId, customerHashId, partialSearchDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<Resource>) => apiResponse.data));
    }

}

import { SecurityApiRequestFactory, SecurityApiResponseProcessor} from "../apis/SecurityApi";
export class ObservableSecurityApi {
    private requestFactory: SecurityApiRequestFactory;
    private responseProcessor: SecurityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecurityApiRequestFactory,
        responseProcessor?: SecurityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecurityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecurityApiResponseProcessor();
    }

    /**
     * This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.
     * Fetch ATM Pin
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public fetchATMPinWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<FetchPinResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchATMPin(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchATMPinWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.
     * Fetch ATM Pin
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public fetchATMPin(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<FetchPinResponseDTO> {
        return this.fetchATMPinWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<FetchPinResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Fetch CVV2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCVV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<CvvResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchCVV2(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchCVV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Fetch CVV2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCVV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<CvvResponseDTO> {
        return this.fetchCVV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<CvvResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card
     * Fetch card data encrypted
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCardDataEncryptedV2WithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<RetrieveCardDetailsResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchCardDataEncryptedV2(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchCardDataEncryptedV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card
     * Fetch card data encrypted
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public fetchCardDataEncryptedV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<RetrieveCardDetailsResponseDTO> {
        return this.fetchCardDataEncryptedV2WithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<RetrieveCardDetailsResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to fetch the PIN status of an active card.
     * Fetch Pin Status
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public fetchPinStatusWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<FetchPinStatusResponseDTO>> {
        const requestContextPromise = this.requestFactory.fetchPinStatus(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fetchPinStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to fetch the PIN status of an active card.
     * Fetch Pin Status
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public fetchPinStatus(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<FetchPinStatusResponseDTO> {
        return this.fetchPinStatusWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<FetchPinStatusResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.
     * Set/Reset PIN
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param pinUpdateRequestDTO pinUpdate
     * @param xRequestId Enter a unique UUID value.
     */
    public setResetPINWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, pinUpdateRequestDTO: PinUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PinUpdateResponseDTO>> {
        const requestContextPromise = this.requestFactory.setResetPIN(clientHashId, customerHashId, walletHashId, cardHashId, pinUpdateRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setResetPINWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.
     * Set/Reset PIN
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param pinUpdateRequestDTO pinUpdate
     * @param xRequestId Enter a unique UUID value.
     */
    public setResetPIN(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, pinUpdateRequestDTO: PinUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Observable<PinUpdateResponseDTO> {
        return this.setResetPINWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, pinUpdateRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PinUpdateResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.
     * Unblock PIN
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public unblockCardPINWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<PinUpdateResponseDTO>> {
        const requestContextPromise = this.requestFactory.unblockCardPIN(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unblockCardPINWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.
     * Unblock PIN
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public unblockCardPIN(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<PinUpdateResponseDTO> {
        return this.unblockCardPINWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<PinUpdateResponseDTO>) => apiResponse.data));
    }

    /**
     * This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Unmask Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public unmaskCardWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<UnmaskCardResponseDTO>> {
        const requestContextPromise = this.requestFactory.unmaskCard(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unmaskCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Unmask Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public unmaskCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Observable<UnmaskCardResponseDTO> {
        return this.unmaskCardWithHttpInfo(clientHashId, customerHashId, walletHashId, cardHashId, xRequestId, _options).pipe(map((apiResponse: HttpInfo<UnmaskCardResponseDTO>) => apiResponse.data));
    }

}

import { SimulatorsApiRequestFactory, SimulatorsApiResponseProcessor} from "../apis/SimulatorsApi";
export class ObservableSimulatorsApi {
    private requestFactory: SimulatorsApiRequestFactory;
    private responseProcessor: SimulatorsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SimulatorsApiRequestFactory,
        responseProcessor?: SimulatorsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SimulatorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SimulatorsApiResponseProcessor();
    }

    /**
     * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
     * Simulate Authorize Card Transaction
     * @param localIsoRequest message
     * @param xRequestId Enter a unique UUID value
     */
    public simulateAuthorizationWithHttpInfo(localIsoRequest: LocalIsoRequest, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void | LocalIsoResponse>> {
        const requestContextPromise = this.requestFactory.simulateAuthorization(localIsoRequest, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateAuthorizationWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
     * Simulate Authorize Card Transaction
     * @param localIsoRequest message
     * @param xRequestId Enter a unique UUID value
     */
    public simulateAuthorization(localIsoRequest: LocalIsoRequest, xRequestId?: string, _options?: Configuration): Observable<void | LocalIsoResponse> {
        return this.simulateAuthorizationWithHttpInfo(localIsoRequest, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void | LocalIsoResponse>) => apiResponse.data));
    }

    /**
     * This API can be used to run simulation of a given settlement transaction
     * Simulate Settlement Transaction
     * @param settlementRequestDTO settlementRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public simulateClearingWithHttpInfo(settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<void | string>> {
        const requestContextPromise = this.requestFactory.simulateClearing(settlementRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simulateClearingWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API can be used to run simulation of a given settlement transaction
     * Simulate Settlement Transaction
     * @param settlementRequestDTO settlementRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public simulateClearing(settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, _options?: Configuration): Observable<void | string> {
        return this.simulateClearingWithHttpInfo(settlementRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<void | string>) => apiResponse.data));
    }

}

import { WalletToWalletTransfersApiRequestFactory, WalletToWalletTransfersApiResponseProcessor} from "../apis/WalletToWalletTransfersApi";
export class ObservableWalletToWalletTransfersApi {
    private requestFactory: WalletToWalletTransfersApiRequestFactory;
    private responseProcessor: WalletToWalletTransfersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletToWalletTransfersApiRequestFactory,
        responseProcessor?: WalletToWalletTransfersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletToWalletTransfersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletToWalletTransfersApiResponseProcessor();
    }

    /**
     * This API allows you to transfer money from one wallet to another wallet within the same client family.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. Use the [Wallet To Wallet Transfer](ref:wallettransfer) API to achieve the same functionality.
     * P2P Transfer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param p2PTransferDTO p2pTransferDTO
     * @param xRequestId Enter a unique UUID value
     */
    public p2PTransferWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, p2PTransferDTO: P2PTransferDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<P2PTransferResponse>> {
        const requestContextPromise = this.requestFactory.p2PTransfer(clientHashId, customerHashId, walletHashId, p2PTransferDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.p2PTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to transfer money from one wallet to another wallet within the same client family.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. Use the [Wallet To Wallet Transfer](ref:wallettransfer) API to achieve the same functionality.
     * P2P Transfer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param p2PTransferDTO p2pTransferDTO
     * @param xRequestId Enter a unique UUID value
     */
    public p2PTransfer(clientHashId: string, customerHashId: string, walletHashId: string, p2PTransferDTO: P2PTransferDTO, xRequestId?: string, _options?: Configuration): Observable<P2PTransferResponse> {
        return this.p2PTransferWithHttpInfo(clientHashId, customerHashId, walletHashId, p2PTransferDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<P2PTransferResponse>) => apiResponse.data));
    }

    /**
     * This API allows you to transfer the money from one wallet to another wallet for customers belonging to different client.
     * Wallet to Wallet Transfer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique source wallet identifier generated simultaneously with customer creation.
     * @param fundTransferRequestDTO fundTransferRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public walletTransferWithHttpInfo(clientHashId: string, customerHashId: string, walletHashId: string, fundTransferRequestDTO: FundTransferRequestDTO, xRequestId?: string, _options?: Configuration): Observable<HttpInfo<FundTransferResponse>> {
        const requestContextPromise = this.requestFactory.walletTransfer(clientHashId, customerHashId, walletHashId, fundTransferRequestDTO, xRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.walletTransferWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows you to transfer the money from one wallet to another wallet for customers belonging to different client.
     * Wallet to Wallet Transfer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique source wallet identifier generated simultaneously with customer creation.
     * @param fundTransferRequestDTO fundTransferRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public walletTransfer(clientHashId: string, customerHashId: string, walletHashId: string, fundTransferRequestDTO: FundTransferRequestDTO, xRequestId?: string, _options?: Configuration): Observable<FundTransferResponse> {
        return this.walletTransferWithHttpInfo(clientHashId, customerHashId, walletHashId, fundTransferRequestDTO, xRequestId, _options).pipe(map((apiResponse: HttpInfo<FundTransferResponse>) => apiResponse.data));
    }

}
