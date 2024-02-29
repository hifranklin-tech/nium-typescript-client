// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountResponseDTO } from '../models/AccountResponseDTO';
import { ClientPrefundResponseDTO } from '../models/ClientPrefundResponseDTO';
import { PayinApiError } from '../models/PayinApiError';
import { PrefundRequestDTO } from '../models/PrefundRequestDTO';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class ClientPrefundAccountApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to fetch the available prefund balance for a client.
     * Client Prefund Balances
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param xRequestId Enter a unique UUID value
     */
    public async clientPrefundBalances(clientHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ClientPrefundAccountApi", "clientPrefundBalances", "clientHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/balances'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

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
     * This API allows our clients to raise a prefund request in the system.
     * Client Prefund Request
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param prefundRequestDTO prefundRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async clientPrefundRequest(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ClientPrefundAccountApi", "clientPrefundRequest", "clientHashId");
        }


        // verify required parameter 'prefundRequestDTO' is not null or undefined
        if (prefundRequestDTO === null || prefundRequestDTO === undefined) {
            throw new RequiredError("ClientPrefundAccountApi", "clientPrefundRequest", "prefundRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/prefund'
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
            ObjectSerializer.serialize(prefundRequestDTO, "PrefundRequestDTO", ""),
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
    public async fetchClientPrefundRequest(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ClientPrefundAccountApi", "fetchClientPrefundRequest", "clientHashId");
        }















        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/prefundList'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (amount !== undefined) {
            requestContext.setQueryParam("amount", ObjectSerializer.serialize(amount, "string", ""));
        }

        // Query Params
        if (bankReferenceNumber !== undefined) {
            requestContext.setQueryParam("bankReferenceNumber", ObjectSerializer.serialize(bankReferenceNumber, "string", ""));
        }

        // Query Params
        if (currency !== undefined) {
            requestContext.setQueryParam("currency", ObjectSerializer.serialize(currency, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (prefundStatus !== undefined) {
            requestContext.setQueryParam("prefundStatus", ObjectSerializer.serialize(prefundStatus, "string", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (systemReferenceNumber !== undefined) {
            requestContext.setQueryParam("systemReferenceNumber", ObjectSerializer.serialize(systemReferenceNumber, "string", ""));
        }

        // Query Params
        if (uniquePayerId !== undefined) {
            requestContext.setQueryParam("uniquePayerId", ObjectSerializer.serialize(uniquePayerId, "string", ""));
        }

        // Query Params
        if (uniquePaymentId !== undefined) {
            requestContext.setQueryParam("uniquePaymentId", ObjectSerializer.serialize(uniquePaymentId, "string", ""));
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

}

export class ClientPrefundAccountApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clientPrefundBalances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clientPrefundBalancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AccountResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AccountResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AccountResponseDTO>", ""
            ) as Array<AccountResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: WalletApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WalletApiError", ""
            ) as WalletApiError;
            throw new ApiException<WalletApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: WalletApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WalletApiError", ""
            ) as WalletApiError;
            throw new ApiException<WalletApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: WalletApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WalletApiError", ""
            ) as WalletApiError;
            throw new ApiException<WalletApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AccountResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AccountResponseDTO>", ""
            ) as Array<AccountResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clientPrefundRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clientPrefundRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ClientPrefundResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClientPrefundResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientPrefundResponseDTO", ""
            ) as ClientPrefundResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ClientPrefundResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientPrefundResponseDTO", ""
            ) as ClientPrefundResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchClientPrefundRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchClientPrefundRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayinApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiError", ""
            ) as PayinApiError;
            throw new ApiException<PayinApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
