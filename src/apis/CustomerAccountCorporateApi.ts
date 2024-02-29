// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddCategoryResponseDTO } from '../models/AddCategoryResponseDTO';
import { CommonResponse } from '../models/CommonResponse';
import { ComplianceRFITemplateMetadataResponseDTO } from '../models/ComplianceRFITemplateMetadataResponseDTO';
import { CorporateComplianceDocumentRequestDTO } from '../models/CorporateComplianceDocumentRequestDTO';
import { CorporateComplianceDocumentResponseDTO } from '../models/CorporateComplianceDocumentResponseDTO';
import { CorporateCustomerRequestsDTO } from '../models/CorporateCustomerRequestsDTO';
import { CorporateDetailResponseDTO } from '../models/CorporateDetailResponseDTO';
import { CorporateEnrichedDetailResponseDTO } from '../models/CorporateEnrichedDetailResponseDTO';
import { CustomerApiError } from '../models/CustomerApiError';
import { ProductApiError } from '../models/ProductApiError';
import { ProductCorporateCustomerResponseDTO } from '../models/ProductCorporateCustomerResponseDTO';
import { RegenerateKYCURL400Response } from '../models/RegenerateKYCURL400Response';
import { RegenerateUrlResponse } from '../models/RegenerateUrlResponse';
import { RespondRfiRequestDTO } from '../models/RespondRfiRequestDTO';
import { RespondRfiResponseDTO } from '../models/RespondRfiResponseDTO';
import { UpdateCorporateKybResponseDTO } from '../models/UpdateCorporateKybResponseDTO';

/**
 * no description
 */
export class CustomerAccountCorporateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to fetch both public and non-public exhaustive corporate details using business ID.  >ℹ️ INFO   >Every call for this API incurs a fee. Contact your Nium account manager to use it. This API only supports the corporate customer onboarding process. Avoid unnecessary API calls by using the throttling and debouncing techniques. This API should only be called after getting a successful response from [Public Corporate Details using Business ID API](/apis/reference/publiccorporatedetailsusingbusinessid).
     * Exhaustive Corporate Details using Business ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field accepts the 2-letter [ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the corporate customer.
     * @param searchReferenceId This field accepts the search reference id of the corporate customer as received in response of public corporate details api.
     * @param xRequestId Enter a unique UUID value
     */
    public async exhaustiveCorporateDetailsUsingBusinessID(clientHashId: string, countryCode: string, searchReferenceId?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "exhaustiveCorporateDetailsUsingBusinessID", "clientHashId");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "exhaustiveCorporateDetailsUsingBusinessID", "countryCode");
        }




        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/corporate/lookup'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("countryCode", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Query Params
        if (searchReferenceId !== undefined) {
            requestContext.setQueryParam("searchReferenceId", ObjectSerializer.serialize(searchReferenceId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async fetchCorporateConstantsUsingGET(category: 'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation', clientHashId: string, region: 'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA', type: 'INDIVIDUAL' | 'CORPORATE', xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "fetchCorporateConstantsUsingGET", "category");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "fetchCorporateConstantsUsingGET", "clientHashId");
        }


        // verify required parameter 'region' is not null or undefined
        if (region === null || region === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "fetchCorporateConstantsUsingGET", "region");
        }


        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "fetchCorporateConstantsUsingGET", "type");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/onboarding/constants'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (category !== undefined) {
            requestContext.setQueryParam("category", ObjectSerializer.serialize(category, "'annualTurnover' | 'businessType' | 'countryName' | 'countryOfOperation' | 'documentType' | 'intendedUseOfAccount' | 'industrySector' | 'listedExchange' | 'position' | 'regulatedTrustType' | 'restrictedCountries' | 'state' | 'streetType' | 'totalEmployees' | 'unregulatedTrustType' | 'rfiTemplates' | 'estimatedMonthlyFunding' | 'occupation'", ""));
        }

        // Query Params
        if (region !== undefined) {
            requestContext.setQueryParam("region", ObjectSerializer.serialize(region, "'AU' | 'EU' | 'SG' | 'HK' | 'UK' | 'US' | 'CA'", ""));
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'INDIVIDUAL' | 'CORPORATE'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async fetchCorporateCustomerRFIDetails(clientHashId: string, caseId?: string, clientId?: string, customerHashId?: string, region?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "fetchCorporateCustomerRFIDetails", "clientHashId");
        }







        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/corporate/rfi'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (caseId !== undefined) {
            requestContext.setQueryParam("caseId", ObjectSerializer.serialize(caseId, "string", ""));
        }

        // Query Params
        if (clientId !== undefined) {
            requestContext.setQueryParam("clientId", ObjectSerializer.serialize(clientId, "string", ""));
        }

        // Query Params
        if (customerHashId !== undefined) {
            requestContext.setQueryParam("customerHashId", ObjectSerializer.serialize(customerHashId, "string", ""));
        }

        // Query Params
        if (region !== undefined) {
            requestContext.setQueryParam("region", ObjectSerializer.serialize(region, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API allows you to onboard a corporate customer under existing client.
     * Onboard Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param corporateCustomerRequestsDTO corporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async onboardCorporateCustomer(clientHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "onboardCorporateCustomer", "clientHashId");
        }


        // verify required parameter 'corporateCustomerRequestsDTO' is not null or undefined
        if (corporateCustomerRequestsDTO === null || corporateCustomerRequestsDTO === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "onboardCorporateCustomer", "corporateCustomerRequestsDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/corporate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(corporateCustomerRequestsDTO, "CorporateCustomerRequestsDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API will help you to fetch the publicly available corporate details using business Id.
     * Public Corporate Details using Business ID
     * @param businessRegistrationNumber This field contains the business registration number of the entity.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param countryCode This field contains the 2-letter [ISO-2 country code](doc:currency-and-country-codes).
     * @param xRequestId Enter a unique UUID value
     */
    public async publicCorporateDetailsUsingBusinessID(businessRegistrationNumber: string, clientHashId: string, countryCode: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'businessRegistrationNumber' is not null or undefined
        if (businessRegistrationNumber === null || businessRegistrationNumber === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "publicCorporateDetailsUsingBusinessID", "businessRegistrationNumber");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "publicCorporateDetailsUsingBusinessID", "clientHashId");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "publicCorporateDetailsUsingBusinessID", "countryCode");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/corporate/lookup'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (businessRegistrationNumber !== undefined) {
            requestContext.setQueryParam("businessRegistrationNumber", ObjectSerializer.serialize(businessRegistrationNumber, "string", ""));
        }

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("countryCode", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This api will be used to regenerate kyc url
     * Regenerate KYC URL
     * @param clientHashId The unique client hash id of customer
     * @param customerHashId The unique customer hash id of customer
     * @param xRequestId Enter a unique UUID value.
     */
    public async regenerateKYCURL(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "regenerateKYCURL", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "regenerateKYCURL", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/regenerateKYCURL'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API allows you to respond to an RFI raised for a corporate customer. You may use this API to respond to an RFI for data or documents when the corporate customer\'s compliance status is RFI_REQUESTED.
     * Respond to RFI for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param respondRfiRequestDTO respondRfiRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async respondtoRFIforCorporateCustomer(clientHashId: string, respondRfiRequestDTO: RespondRfiRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "respondtoRFIforCorporateCustomer", "clientHashId");
        }


        // verify required parameter 'respondRfiRequestDTO' is not null or undefined
        if (respondRfiRequestDTO === null || respondRfiRequestDTO === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "respondtoRFIforCorporateCustomer", "respondRfiRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/corporate/rfi'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(respondRfiRequestDTO, "RespondRfiRequestDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API allows you to update a corporate customer under existing client.
     * Update Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateCustomerRequestsDTO updateCorporateCustomerRequestsDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async updateCorporateCustomerUsingPOST(clientHashId: string, customerHashId: string, corporateCustomerRequestsDTO: CorporateCustomerRequestsDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "updateCorporateCustomerUsingPOST", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "updateCorporateCustomerUsingPOST", "customerHashId");
        }


        // verify required parameter 'corporateCustomerRequestsDTO' is not null or undefined
        if (corporateCustomerRequestsDTO === null || corporateCustomerRequestsDTO === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "updateCorporateCustomerUsingPOST", "corporateCustomerRequestsDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(corporateCustomerRequestsDTO, "CorporateCustomerRequestsDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This API allows you to upload document for corporate customers.
     * Upload Document for Corporate Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param corporateComplianceDocumentRequestDTO corporateComplianceDocumentRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async uploadDocumentforCorporateCustomer(clientHashId: string, customerHashId: string, corporateComplianceDocumentRequestDTO: CorporateComplianceDocumentRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "uploadDocumentforCorporateCustomer", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "uploadDocumentforCorporateCustomer", "customerHashId");
        }


        // verify required parameter 'corporateComplianceDocumentRequestDTO' is not null or undefined
        if (corporateComplianceDocumentRequestDTO === null || corporateComplianceDocumentRequestDTO === undefined) {
            throw new RequiredError("CustomerAccountCorporateApi", "uploadDocumentforCorporateCustomer", "corporateComplianceDocumentRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/corporate/documents'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(corporateComplianceDocumentRequestDTO, "CorporateComplianceDocumentRequestDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["default"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CustomerAccountCorporateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exhaustiveCorporateDetailsUsingBusinessID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exhaustiveCorporateDetailsUsingBusinessIDWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CorporateEnrichedDetailResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CorporateEnrichedDetailResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateEnrichedDetailResponseDTO", ""
            ) as CorporateEnrichedDetailResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CorporateEnrichedDetailResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateEnrichedDetailResponseDTO", ""
            ) as CorporateEnrichedDetailResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchCorporateConstantsUsingGET
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchCorporateConstantsUsingGETWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddCategoryResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddCategoryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCategoryResponseDTO", ""
            ) as AddCategoryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddCategoryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCategoryResponseDTO", ""
            ) as AddCategoryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchCorporateCustomerRFIDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchCorporateCustomerRFIDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ComplianceRFITemplateMetadataResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ComplianceRFITemplateMetadataResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ComplianceRFITemplateMetadataResponseDTO", ""
            ) as ComplianceRFITemplateMetadataResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ComplianceRFITemplateMetadataResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ComplianceRFITemplateMetadataResponseDTO", ""
            ) as ComplianceRFITemplateMetadataResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to onboardCorporateCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async onboardCorporateCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ProductCorporateCustomerResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProductCorporateCustomerResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCorporateCustomerResponseDTO", ""
            ) as ProductCorporateCustomerResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProductCorporateCustomerResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductCorporateCustomerResponseDTO", ""
            ) as ProductCorporateCustomerResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publicCorporateDetailsUsingBusinessID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async publicCorporateDetailsUsingBusinessIDWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CorporateDetailResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CorporateDetailResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateDetailResponseDTO", ""
            ) as CorporateDetailResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CorporateDetailResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateDetailResponseDTO", ""
            ) as CorporateDetailResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to regenerateKYCURL
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async regenerateKYCURLWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RegenerateUrlResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RegenerateUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegenerateUrlResponse", ""
            ) as RegenerateUrlResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: RegenerateKYCURL400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegenerateKYCURL400Response", ""
            ) as RegenerateKYCURL400Response;
            throw new ApiException<RegenerateKYCURL400Response>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CommonResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CommonResponse", ""
            ) as CommonResponse;
            throw new ApiException<CommonResponse>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RegenerateUrlResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RegenerateUrlResponse", ""
            ) as RegenerateUrlResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to respondtoRFIforCorporateCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async respondtoRFIforCorporateCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RespondRfiResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RespondRfiResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RespondRfiResponseDTO", ""
            ) as RespondRfiResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RespondRfiResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RespondRfiResponseDTO", ""
            ) as RespondRfiResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCorporateCustomerUsingPOST
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCorporateCustomerUsingPOSTWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateCorporateKybResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateCorporateKybResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCorporateKybResponseDTO", ""
            ) as UpdateCorporateKybResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ProductApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProductApiError", ""
            ) as ProductApiError;
            throw new ApiException<ProductApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateCorporateKybResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateCorporateKybResponseDTO", ""
            ) as UpdateCorporateKybResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadDocumentforCorporateCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadDocumentforCorporateCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CorporateComplianceDocumentResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CorporateComplianceDocumentResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateComplianceDocumentResponseDTO", ""
            ) as CorporateComplianceDocumentResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CorporateComplianceDocumentResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CorporateComplianceDocumentResponseDTO", ""
            ) as CorporateComplianceDocumentResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
