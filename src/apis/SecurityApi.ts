// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { CvvResponseDTO } from '../models/CvvResponseDTO';
import { FetchPinResponseDTO } from '../models/FetchPinResponseDTO';
import { FetchPinStatusResponseDTO } from '../models/FetchPinStatusResponseDTO';
import { PinUpdateRequestDTO } from '../models/PinUpdateRequestDTO';
import { PinUpdateResponseDTO } from '../models/PinUpdateResponseDTO';
import { RetrieveCardDetailsResponseDTO } from '../models/RetrieveCardDetailsResponseDTO';
import { UnmaskCardResponseDTO } from '../models/UnmaskCardResponseDTO';

/**
 * no description
 */
export class SecurityApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to fetch the base-64 encoded ATM PIN for physical cards and virtual upgrade to physical in the production environment. This API does not work for virtual cards. This is allowed only for the EU and UK cards.
     * Fetch ATM Pin
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public async fetchATMPin(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchATMPin", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchATMPin", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchATMPin", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchATMPin", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to fetch the base-64 encoded CVV2 and expiry for a card.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Fetch CVV2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public async fetchCVV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCVV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCVV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCVV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCVV2", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/cvv'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to fetch the unmasked card number, CVV2 and expiry (encrypted) for a card
     * Fetch card data encrypted
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public async fetchCardDataEncryptedV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCardDataEncryptedV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCardDataEncryptedV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCardDataEncryptedV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchCardDataEncryptedV2", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/retrieve'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to fetch the PIN status of an active card.
     * Fetch Pin Status
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public async fetchPinStatus(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchPinStatus", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchPinStatus", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchPinStatus", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "fetchPinStatus", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/status'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to set a new PIN or change the PIN for a card in the production environment. This API only applies to a physical card or a virtual card upgraded to a physical card. This is allowed only for cards issued in APAC, not for EU/UK cards.
     * Set/Reset PIN
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param pinUpdateRequestDTO pinUpdate
     * @param xRequestId Enter a unique UUID value.
     */
    public async setResetPIN(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, pinUpdateRequestDTO: PinUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "setResetPIN", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "setResetPIN", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "setResetPIN", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "setResetPIN", "cardHashId");
        }


        // verify required parameter 'pinUpdateRequestDTO' is not null or undefined
        if (pinUpdateRequestDTO === null || pinUpdateRequestDTO === undefined) {
            throw new RequiredError("SecurityApi", "setResetPIN", "pinUpdateRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
            ObjectSerializer.serialize(pinUpdateRequestDTO, "PinUpdateRequestDTO", ""),
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
     * This API allows you to unblock PIN and reset retry count for a card. This API is only applicable for the APAC region.
     * Unblock PIN
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public async unblockCardPIN(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "unblockCardPIN", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "unblockCardPIN", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "unblockCardPIN", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "unblockCardPIN", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/pin/unblock'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to unmask a card number before using it for an e-commerce transaction.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Fetch Card Data Encrypted](ref:fetchcarddataencryptedv2) is the latest version of this API.
     * Unmask Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public async unmaskCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("SecurityApi", "unmaskCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("SecurityApi", "unmaskCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("SecurityApi", "unmaskCard", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("SecurityApi", "unmaskCard", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/unmask'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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

export class SecurityApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchATMPin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchATMPinWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FetchPinResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FetchPinResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchPinResponseDTO", ""
            ) as FetchPinResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FetchPinResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchPinResponseDTO", ""
            ) as FetchPinResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchCVV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchCVV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CvvResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CvvResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CvvResponseDTO", ""
            ) as CvvResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CvvResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CvvResponseDTO", ""
            ) as CvvResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchCardDataEncryptedV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchCardDataEncryptedV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<RetrieveCardDetailsResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveCardDetailsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCardDetailsResponseDTO", ""
            ) as RetrieveCardDetailsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetrieveCardDetailsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCardDetailsResponseDTO", ""
            ) as RetrieveCardDetailsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fetchPinStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fetchPinStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FetchPinStatusResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FetchPinStatusResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchPinStatusResponseDTO", ""
            ) as FetchPinStatusResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FetchPinStatusResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FetchPinStatusResponseDTO", ""
            ) as FetchPinStatusResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setResetPIN
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setResetPINWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PinUpdateResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PinUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinUpdateResponseDTO", ""
            ) as PinUpdateResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PinUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinUpdateResponseDTO", ""
            ) as PinUpdateResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unblockCardPIN
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unblockCardPINWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PinUpdateResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PinUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinUpdateResponseDTO", ""
            ) as PinUpdateResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PinUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PinUpdateResponseDTO", ""
            ) as PinUpdateResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unmaskCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unmaskCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UnmaskCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UnmaskCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnmaskCardResponseDTO", ""
            ) as UnmaskCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UnmaskCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnmaskCardResponseDTO", ""
            ) as UnmaskCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
