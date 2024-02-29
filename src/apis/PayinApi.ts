// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { FundingInstrumentStatusUpdateRequestDTO } from '../models/FundingInstrumentStatusUpdateRequestDTO';
import { InwardPaymentManualRequestDTO } from '../models/InwardPaymentManualRequestDTO';
import { PayinApiError } from '../models/PayinApiError';
import { PayinApiResponse2 } from '../models/PayinApiResponse2';

/**
 * no description
 */
export class PayinApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Simulate Funding Instrument Status Update (Sandbox Testing)
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param fundingInstrumentId fundingInstrumentId
     * @param fundingInstrumentStatusUpdateRequestDTO fundingInstrumentStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async simulateFundingInstrumentStatusUpdate(clientHashId: string, customerHashId: string, fundingInstrumentId: string, fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("PayinApi", "simulateFundingInstrumentStatusUpdate", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("PayinApi", "simulateFundingInstrumentStatusUpdate", "customerHashId");
        }


        // verify required parameter 'fundingInstrumentId' is not null or undefined
        if (fundingInstrumentId === null || fundingInstrumentId === undefined) {
            throw new RequiredError("PayinApi", "simulateFundingInstrumentStatusUpdate", "fundingInstrumentId");
        }


        // verify required parameter 'fundingInstrumentStatusUpdateRequestDTO' is not null or undefined
        if (fundingInstrumentStatusUpdateRequestDTO === null || fundingInstrumentStatusUpdateRequestDTO === undefined) {
            throw new RequiredError("PayinApi", "simulateFundingInstrumentStatusUpdate", "fundingInstrumentStatusUpdateRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/updateStatus'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'fundingInstrumentId' + '}', encodeURIComponent(String(fundingInstrumentId)));

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
            ObjectSerializer.serialize(fundingInstrumentStatusUpdateRequestDTO, "FundingInstrumentStatusUpdateRequestDTO", ""),
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
     * This API can be used in \'Sandbox testing\' to simulate inward receive transaction and credit funds into the wallet for testing purposes.  >ℹ️ INFO  >This API is for testing purpose only and not to be used in production. >Use a unique bankReferenceNumber for every new simulated receive payment transaction request.
     * Simulate Receive Transaction
     * @param inwardPaymentManualRequestDTO inwardPaymentManualRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async simulatereceivepayment(inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'inwardPaymentManualRequestDTO' is not null or undefined
        if (inwardPaymentManualRequestDTO === null || inwardPaymentManualRequestDTO === undefined) {
            throw new RequiredError("PayinApi", "simulatereceivepayment", "inwardPaymentManualRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/inward/payment/manual';

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
            ObjectSerializer.serialize(inwardPaymentManualRequestDTO, "InwardPaymentManualRequestDTO", ""),
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

export class PayinApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simulateFundingInstrumentStatusUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulateFundingInstrumentStatusUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to simulatereceivepayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simulatereceivepaymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PayinApiResponse2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PayinApiResponse2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiResponse2", ""
            ) as PayinApiResponse2;
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
            const body: PayinApiResponse2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayinApiResponse2", ""
            ) as PayinApiResponse2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
