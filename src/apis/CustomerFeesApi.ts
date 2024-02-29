// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CustomFeeRequestDTO } from '../models/CustomFeeRequestDTO';
import { CustomFeeResponseDTO } from '../models/CustomFeeResponseDTO';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class CustomerFeesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to levy custom fee.   >⚠️ WARNING   >Consult with the Nium legal & compliance team and receive approval prior to charging any customer fees. Do not use this API to charge fees without explicit approval from Nium. Reach out to your Customer Success, Sales and Solution Engineering teams at Nium for further guidance. Any fees charged must be disclosed in the required customer terms and conditions as determined by Nium legal & compliance.
     * Charge Fee
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param customFeeRequestDTO customFeeRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async chargeFee(clientHashId: string, customerHashId: string, walletHashId: string, customFeeRequestDTO: CustomFeeRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerFeesApi", "chargeFee", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerFeesApi", "chargeFee", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("CustomerFeesApi", "chargeFee", "walletHashId");
        }


        // verify required parameter 'customFeeRequestDTO' is not null or undefined
        if (customFeeRequestDTO === null || customFeeRequestDTO === undefined) {
            throw new RequiredError("CustomerFeesApi", "chargeFee", "customFeeRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fees'
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
            ObjectSerializer.serialize(customFeeRequestDTO, "CustomFeeRequestDTO", ""),
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

export class CustomerFeesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to chargeFee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async chargeFeeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomFeeResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomFeeResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomFeeResponseDTO", ""
            ) as CustomFeeResponseDTO;
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
            const body: CustomFeeResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomFeeResponseDTO", ""
            ) as CustomFeeResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
