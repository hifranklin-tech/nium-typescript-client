// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CancelConversionErrorResponse } from '../models/CancelConversionErrorResponse';
import { ConversionCancelRequest } from '../models/ConversionCancelRequest';
import { ConversionCancelResponse } from '../models/ConversionCancelResponse';
import { ConversionCreationRequest } from '../models/ConversionCreationRequest';
import { ConversionCreationResponse } from '../models/ConversionCreationResponse';
import { CreateConversionErrorResponse } from '../models/CreateConversionErrorResponse';
import { FXStandard401Error } from '../models/FXStandard401Error';
import { FXStandard403Error } from '../models/FXStandard403Error';
import { FXStandard500Error } from '../models/FXStandard500Error';
import { FetchConversionErrorResponse } from '../models/FetchConversionErrorResponse';
import { Standard404Error } from '../models/Standard404Error';

/**
 * no description
 */
export class ConversionsApiRequestFactory extends BaseAPIRequestFactory {

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
    public async cancelConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, conversionCancelRequest: ConversionCancelRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ConversionsApi", "cancelConversion", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ConversionsApi", "cancelConversion", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("ConversionsApi", "cancelConversion", "walletHashId");
        }


        // verify required parameter 'conversionId' is not null or undefined
        if (conversionId === null || conversionId === undefined) {
            throw new RequiredError("ConversionsApi", "cancelConversion", "conversionId");
        }


        // verify required parameter 'conversionCancelRequest' is not null or undefined
        if (conversionCancelRequest === null || conversionCancelRequest === undefined) {
            throw new RequiredError("ConversionsApi", "cancelConversion", "conversionCancelRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/cancel'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'conversionId' + '}', encodeURIComponent(String(conversionId)));

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
            ObjectSerializer.serialize(conversionCancelRequest, "ConversionCancelRequest", ""),
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
     * This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.
     * Create Conversion
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionCreationRequest ConversionCreationRequest
     * @param xRequestId Enter a unique UUID value
     */
    public async createConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionCreationRequest: ConversionCreationRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ConversionsApi", "createConversion", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ConversionsApi", "createConversion", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("ConversionsApi", "createConversion", "walletHashId");
        }


        // verify required parameter 'conversionCreationRequest' is not null or undefined
        if (conversionCreationRequest === null || conversionCreationRequest === undefined) {
            throw new RequiredError("ConversionsApi", "createConversion", "conversionCreationRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

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
            ObjectSerializer.serialize(conversionCreationRequest, "ConversionCreationRequest", ""),
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
     * This API will retrieve an existing conversion with the conversionId.
     * Fetch Conversion by id
     * @param clientHashId Unique identifier of the client.
     * @param customerHashId Unique identifier of the customer.
     * @param walletHashId Unique identifier of the wallet.
     * @param conversionId 
     * @param xRequestId Enter a unique UUID value
     */
    public async fetchConversion(clientHashId: string, customerHashId: string, walletHashId: string, conversionId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ConversionsApi", "fetchConversion", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("ConversionsApi", "fetchConversion", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("ConversionsApi", "fetchConversion", "walletHashId");
        }


        // verify required parameter 'conversionId' is not null or undefined
        if (conversionId === null || conversionId === undefined) {
            throw new RequiredError("ConversionsApi", "fetchConversion", "conversionId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'conversionId' + '}', encodeURIComponent(String(conversionId)));

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

export class ConversionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelConversion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelConversionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversionCancelResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConversionCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCancelResponse", ""
            ) as ConversionCancelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CancelConversionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelConversionErrorResponse", ""
            ) as CancelConversionErrorResponse;
            throw new ApiException<CancelConversionErrorResponse>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
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
            const body: ConversionCancelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCancelResponse", ""
            ) as ConversionCancelResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createConversion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createConversionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversionCreationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConversionCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCreationResponse", ""
            ) as ConversionCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CreateConversionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateConversionErrorResponse", ""
            ) as CreateConversionErrorResponse;
            throw new ApiException<CreateConversionErrorResponse>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
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
            const body: ConversionCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCreationResponse", ""
            ) as ConversionCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchConversion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchConversionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ConversionCreationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConversionCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCreationResponse", ""
            ) as ConversionCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: FetchConversionErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchConversionErrorResponse", ""
            ) as FetchConversionErrorResponse;
            throw new ApiException<FetchConversionErrorResponse>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
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
            const body: ConversionCreationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConversionCreationResponse", ""
            ) as ConversionCreationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
