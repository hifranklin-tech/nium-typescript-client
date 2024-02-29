// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { OOBCallbackRequestDTO } from '../models/OOBCallbackRequestDTO';
import { OOBCallbackResponseDTO } from '../models/OOBCallbackResponseDTO';
import { OobCallbackRequestDTO } from '../models/OobCallbackRequestDTO';
import { PasscodeRequestDTO } from '../models/PasscodeRequestDTO';
import { PasscodeResponseDTO } from '../models/PasscodeResponseDTO';
import { PasscodeStatusDTO } from '../models/PasscodeStatusDTO';

/**
 * no description
 */
export class Class3DSApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * API allows to retrieve the status of passcode enrollments for all cards associated with wallet. Results can be filtered by `cardHashId`
     * 3DS passcode enrollment status
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Please enter a unique UUID value
     */
    public async passcodeEnrollmentStatus(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("Class3DSApi", "passcodeEnrollmentStatus", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("Class3DSApi", "passcodeEnrollmentStatus", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("Class3DSApi", "passcodeEnrollmentStatus", "walletHashId");
        }




        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/3ds/passcode/status'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cardHashId !== undefined) {
            requestContext.setQueryParam("cardHashId", ObjectSerializer.serialize(cardHashId, "string", ""));
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
     * API to notify Nium on success of OOB authentication
     * Process OOB callback
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oOBCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async processOOBcallback(clientHashId: string, oOBCallbackRequestDTO: OOBCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("Class3DSApi", "processOOBcallback", "clientHashId");
        }


        // verify required parameter 'oOBCallbackRequestDTO' is not null or undefined
        if (oOBCallbackRequestDTO === null || oOBCallbackRequestDTO === undefined) {
            throw new RequiredError("Class3DSApi", "processOOBcallback", "oOBCallbackRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/notifications/3ds/oob/callback'
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
            ObjectSerializer.serialize(oOBCallbackRequestDTO, "OOBCallbackRequestDTO", ""),
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
     * API to notify Nium on success or failure of OOB authentication
     * 3DS OOB Callback V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param oobCallbackRequestDTO oobCallbackRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async processOobCallbackV2(clientHashId: string, oobCallbackRequestDTO: OobCallbackRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("Class3DSApi", "processOobCallbackV2", "clientHashId");
        }


        // verify required parameter 'oobCallbackRequestDTO' is not null or undefined
        if (oobCallbackRequestDTO === null || oobCallbackRequestDTO === undefined) {
            throw new RequiredError("Class3DSApi", "processOobCallbackV2", "oobCallbackRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/3ds/oob/callback'
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
            ObjectSerializer.serialize(oobCallbackRequestDTO, "OobCallbackRequestDTO", ""),
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
     * API to update the 3DS passcode for a specific card.
     * Add or Update passcode
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param passcodeRequestDTO passcodeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async setPasscode(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, passcodeRequestDTO: PasscodeRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("Class3DSApi", "setPasscode", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("Class3DSApi", "setPasscode", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("Class3DSApi", "setPasscode", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("Class3DSApi", "setPasscode", "cardHashId");
        }


        // verify required parameter 'passcodeRequestDTO' is not null or undefined
        if (passcodeRequestDTO === null || passcodeRequestDTO === undefined) {
            throw new RequiredError("Class3DSApi", "setPasscode", "passcodeRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/3ds/passcode'
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
            ObjectSerializer.serialize(passcodeRequestDTO, "PasscodeRequestDTO", ""),
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

export class Class3DSApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to passcodeEnrollmentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async passcodeEnrollmentStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PasscodeStatusDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PasscodeStatusDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PasscodeStatusDTO>", ""
            ) as Array<PasscodeStatusDTO>;
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
            const body: Array<PasscodeStatusDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PasscodeStatusDTO>", ""
            ) as Array<PasscodeStatusDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to processOOBcallback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async processOOBcallbackWithHttpInfo(response: ResponseContext): Promise<HttpInfo<OOBCallbackResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OOBCallbackResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OOBCallbackResponseDTO", ""
            ) as OOBCallbackResponseDTO;
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
            const body: OOBCallbackResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OOBCallbackResponseDTO", ""
            ) as OOBCallbackResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to processOobCallbackV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async processOobCallbackV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setPasscode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setPasscodeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PasscodeResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PasscodeResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PasscodeResponseDTO", ""
            ) as PasscodeResponseDTO;
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
            const body: PasscodeResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PasscodeResponseDTO", ""
            ) as PasscodeResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
