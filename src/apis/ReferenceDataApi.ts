// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PartialSearchBankNameResponseDTO } from '../models/PartialSearchBankNameResponseDTO';
import { PartialSearchBranchNameResponseDTO } from '../models/PartialSearchBranchNameResponseDTO';
import { PartialSearchDTO } from '../models/PartialSearchDTO';
import { PayoutCustomerApiError } from '../models/PayoutCustomerApiError';
import { Resource } from '../models/Resource';
import { SupportedCorridorsResponseDTO } from '../models/SupportedCorridorsResponseDTO';

/**
 * no description
 */
export class ReferenceDataApiRequestFactory extends BaseAPIRequestFactory {

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
    public async fetchBankDetailsusingRoutingCode(clientHashId: string, countryCode: string, customerHashId: string, routingCodeType: string, routingCodeValue: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchBankDetailsusingRoutingCode", "clientHashId");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchBankDetailsusingRoutingCode", "countryCode");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchBankDetailsusingRoutingCode", "customerHashId");
        }


        // verify required parameter 'routingCodeType' is not null or undefined
        if (routingCodeType === null || routingCodeType === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchBankDetailsusingRoutingCode", "routingCodeType");
        }


        // verify required parameter 'routingCodeValue' is not null or undefined
        if (routingCodeValue === null || routingCodeValue === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchBankDetailsusingRoutingCode", "routingCodeValue");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/country/{countryCode}/routingCodeType/{routingCodeType}/routingCodeValue/{routingCodeValue}/routingCode'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'countryCode' + '}', encodeURIComponent(String(countryCode)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'routingCodeType' + '}', encodeURIComponent(String(routingCodeType)))
            .replace('{' + 'routingCodeValue' + '}', encodeURIComponent(String(routingCodeValue)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * This API will allow you to fetch the supported corridors for remittance with details.
     * Fetch Supported Corridors
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async fetchSupportedCorridors(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchSupportedCorridors", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchSupportedCorridors", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/supportedCorridors'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
    public async fetchSupportedCorridorsV2(clientHashId: string, beneficiaryAccountType?: string, clientType?: string, customerType?: string, destinationCountry?: string, destinationCurrency?: string, payoutMethod?: string, routingCodeType?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "fetchSupportedCorridorsV2", "clientHashId");
        }










        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/supportedCorridors'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (beneficiaryAccountType !== undefined) {
            requestContext.setQueryParam("beneficiaryAccountType", ObjectSerializer.serialize(beneficiaryAccountType, "string", ""));
        }

        // Query Params
        if (clientType !== undefined) {
            requestContext.setQueryParam("clientType", ObjectSerializer.serialize(clientType, "string", ""));
        }

        // Query Params
        if (customerType !== undefined) {
            requestContext.setQueryParam("customerType", ObjectSerializer.serialize(customerType, "string", ""));
        }

        // Query Params
        if (destinationCountry !== undefined) {
            requestContext.setQueryParam("destinationCountry", ObjectSerializer.serialize(destinationCountry, "string", ""));
        }

        // Query Params
        if (destinationCurrency !== undefined) {
            requestContext.setQueryParam("destinationCurrency", ObjectSerializer.serialize(destinationCurrency, "string", ""));
        }

        // Query Params
        if (payoutMethod !== undefined) {
            requestContext.setQueryParam("payoutMethod", ObjectSerializer.serialize(payoutMethod, "string", ""));
        }

        // Query Params
        if (routingCodeType !== undefined) {
            requestContext.setQueryParam("routingCodeType", ObjectSerializer.serialize(routingCodeType, "string", ""));
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
    public async searchRoutingCodeUsingBankName(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBankName", "clientHashId");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBankName", "countryCode");
        }


        // verify required parameter 'routingCodeType' is not null or undefined
        if (routingCodeType === null || routingCodeType === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBankName", "routingCodeType");
        }


        // verify required parameter 'searchValue' is not null or undefined
        if (searchValue === null || searchValue === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBankName", "searchValue");
        }







        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/payout/banks'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (bankCode !== undefined) {
            requestContext.setQueryParam("bankCode", ObjectSerializer.serialize(bankCode, "string", ""));
        }

        // Query Params
        if (bankName !== undefined) {
            requestContext.setQueryParam("bankName", ObjectSerializer.serialize(bankName, "string", ""));
        }

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("countryCode", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Query Params
        if (currencyCode !== undefined) {
            requestContext.setQueryParam("currencyCode", ObjectSerializer.serialize(currencyCode, "string", ""));
        }

        // Query Params
        if (payoutMethod !== undefined) {
            requestContext.setQueryParam("payoutMethod", ObjectSerializer.serialize(payoutMethod, "string", ""));
        }

        // Query Params
        if (routingCodeType !== undefined) {
            requestContext.setQueryParam("routingCodeType", ObjectSerializer.serialize(routingCodeType, "'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER'", ""));
        }

        // Query Params
        if (searchValue !== undefined) {
            requestContext.setQueryParam("searchValue", ObjectSerializer.serialize(searchValue, "string", ""));
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
    public async searchRoutingCodeUsingBranchName(clientHashId: string, countryCode: string, routingCodeType: 'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER', searchValue: string, bankCode?: string, bankName?: string, currencyCode?: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBranchName", "clientHashId");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBranchName", "countryCode");
        }


        // verify required parameter 'routingCodeType' is not null or undefined
        if (routingCodeType === null || routingCodeType === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBranchName", "routingCodeType");
        }


        // verify required parameter 'searchValue' is not null or undefined
        if (searchValue === null || searchValue === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeUsingBranchName", "searchValue");
        }







        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/payout/branches'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (bankCode !== undefined) {
            requestContext.setQueryParam("bankCode", ObjectSerializer.serialize(bankCode, "string", ""));
        }

        // Query Params
        if (bankName !== undefined) {
            requestContext.setQueryParam("bankName", ObjectSerializer.serialize(bankName, "string", ""));
        }

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("countryCode", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Query Params
        if (currencyCode !== undefined) {
            requestContext.setQueryParam("currencyCode", ObjectSerializer.serialize(currencyCode, "string", ""));
        }

        // Query Params
        if (payoutMethod !== undefined) {
            requestContext.setQueryParam("payoutMethod", ObjectSerializer.serialize(payoutMethod, "string", ""));
        }

        // Query Params
        if (routingCodeType !== undefined) {
            requestContext.setQueryParam("routingCodeType", ObjectSerializer.serialize(routingCodeType, "'IFSC' | 'SWIFT' | 'ACH CODE' | 'BSB CODE' | 'SORT CODE' | 'BANK CODE' | 'LOCATION ID' | 'BRANCH CODE' | 'BRANCH NAME' | 'TRANSIT NUMBER'", ""));
        }

        // Query Params
        if (searchValue !== undefined) {
            requestContext.setQueryParam("searchValue", ObjectSerializer.serialize(searchValue, "string", ""));
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
     * This API will allow you to search the routing code details of a bank based on certain parameters - i.e., by using bank name or branch name. This API will help you to build a user experience where you can help your users to locate a specific routing code (that could be SWIFT, IFSC, SORT CODE, ACH CODE, etc., - see the list below) by using full or partial name search of bank name or branch name. For example, if your user is looking for SWIFT CODE for HSBC in the UK, then this API can be used to search for the SORT CODE by searching using the bank name.
     * Search Routing Code (using bank name/branch name)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param partialSearchDTO partialSearchDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async searchRoutingCodeusingbanknamebranchname(clientHashId: string, customerHashId: string, partialSearchDTO: PartialSearchDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeusingbanknamebranchname", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeusingbanknamebranchname", "customerHashId");
        }


        // verify required parameter 'partialSearchDTO' is not null or undefined
        if (partialSearchDTO === null || partialSearchDTO === undefined) {
            throw new RequiredError("ReferenceDataApi", "searchRoutingCodeusingbanknamebranchname", "partialSearchDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/partialSearch'
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
            ObjectSerializer.serialize(partialSearchDTO, "PartialSearchDTO", ""),
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

export class ReferenceDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchBankDetailsusingRoutingCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchBankDetailsusingRoutingCodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchSupportedCorridors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchSupportedCorridorsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchSupportedCorridorsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchSupportedCorridorsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SupportedCorridorsResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SupportedCorridorsResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SupportedCorridorsResponseDTO>", ""
            ) as Array<SupportedCorridorsResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SupportedCorridorsResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SupportedCorridorsResponseDTO>", ""
            ) as Array<SupportedCorridorsResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchRoutingCodeUsingBankName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchRoutingCodeUsingBankNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PartialSearchBankNameResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PartialSearchBankNameResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialSearchBankNameResponseDTO>", ""
            ) as Array<PartialSearchBankNameResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PartialSearchBankNameResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialSearchBankNameResponseDTO>", ""
            ) as Array<PartialSearchBankNameResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchRoutingCodeUsingBranchName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchRoutingCodeUsingBranchNameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PartialSearchBranchNameResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PartialSearchBranchNameResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialSearchBranchNameResponseDTO>", ""
            ) as Array<PartialSearchBranchNameResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PartialSearchBranchNameResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PartialSearchBranchNameResponseDTO>", ""
            ) as Array<PartialSearchBranchNameResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchRoutingCodeusingbanknamebranchname
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchRoutingCodeusingbanknamebranchnameWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
