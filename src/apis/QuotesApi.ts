// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateQuoteErrorResponse } from '../models/CreateQuoteErrorResponse';
import { FXStandard401Error } from '../models/FXStandard401Error';
import { FXStandard403Error } from '../models/FXStandard403Error';
import { FXStandard500Error } from '../models/FXStandard500Error';
import { FetchQuoteErrorResponse } from '../models/FetchQuoteErrorResponse';
import { QuoteCreationRequest } from '../models/QuoteCreationRequest';
import { QuoteCreationResponse } from '../models/QuoteCreationResponse';
import { Standard404Error } from '../models/Standard404Error';

/**
 * no description
 */
export class QuotesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * Create Quote
     * @param clientHashId Unique identifier of the client.
     * @param quoteCreationRequest quoteCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public async createQuote(clientHashId: string, quoteCreationRequest: QuoteCreationRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("QuotesApi", "createQuote", "clientHashId");
        }


        // verify required parameter 'quoteCreationRequest' is not null or undefined
        if (quoteCreationRequest === null || quoteCreationRequest === undefined) {
            throw new RequiredError("QuotesApi", "createQuote", "quoteCreationRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/quotes'
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
            ObjectSerializer.serialize(quoteCreationRequest, "QuoteCreationRequest", ""),
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
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * Fetch Quote by ID
     * @param clientHashId Unique identifier of the client.
     * @param quoteId 
     * @param xRequestId Enter a unique UUID value
     */
    public async fetchQuote(clientHashId: string, quoteId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("QuotesApi", "fetchQuote", "clientHashId");
        }


        // verify required parameter 'quoteId' is not null or undefined
        if (quoteId === null || quoteId === undefined) {
            throw new RequiredError("QuotesApi", "fetchQuote", "quoteId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/quotes/{quoteId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'quoteId' + '}', encodeURIComponent(String(quoteId)));

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

}

export class QuotesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createQuote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createQuoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<QuoteCreationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QuoteCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteCreationResponse", ""
            ) as QuoteCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CreateQuoteErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateQuoteErrorResponse", ""
            ) as CreateQuoteErrorResponse;
            throw new ApiException<CreateQuoteErrorResponse>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: FXStandard401Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard401Error", ""
            ) as FXStandard401Error;
            throw new ApiException<FXStandard401Error>(response.httpStatusCode, "Error response when the request is unauthorized.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: FXStandard403Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard403Error", ""
            ) as FXStandard403Error;
            throw new ApiException<FXStandard403Error>(response.httpStatusCode, "Error response when the requested resource is forbidden.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Standard404Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Standard404Error", ""
            ) as Standard404Error;
            throw new ApiException<Standard404Error>(response.httpStatusCode, "Error response when the requested resource cannot be found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: FXStandard500Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard500Error", ""
            ) as FXStandard500Error;
            throw new ApiException<FXStandard500Error>(response.httpStatusCode, "Error response when service has internal error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: QuoteCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteCreationResponse", ""
            ) as QuoteCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchQuote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchQuoteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<QuoteCreationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QuoteCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteCreationResponse", ""
            ) as QuoteCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: FetchQuoteErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchQuoteErrorResponse", ""
            ) as FetchQuoteErrorResponse;
            throw new ApiException<FetchQuoteErrorResponse>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: FXStandard401Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard401Error", ""
            ) as FXStandard401Error;
            throw new ApiException<FXStandard401Error>(response.httpStatusCode, "Error response when the request is unauthorized.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: FXStandard403Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard403Error", ""
            ) as FXStandard403Error;
            throw new ApiException<FXStandard403Error>(response.httpStatusCode, "Error response when the requested resource is forbidden.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Standard404Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Standard404Error", ""
            ) as Standard404Error;
            throw new ApiException<Standard404Error>(response.httpStatusCode, "Error response when the requested resource cannot be found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: FXStandard500Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FXStandard500Error", ""
            ) as FXStandard500Error;
            throw new ApiException<FXStandard500Error>(response.httpStatusCode, "Error response when service has internal error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: QuoteCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QuoteCreationResponse", ""
            ) as QuoteCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
