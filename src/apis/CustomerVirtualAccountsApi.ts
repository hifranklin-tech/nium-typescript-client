// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError2 } from '../models/ApiError2';
import { PaymentIdCientTagsResponseDTO } from '../models/PaymentIdCientTagsResponseDTO';
import { PaymentIdRequestDTO2 } from '../models/PaymentIdRequestDTO2';
import { PaymentIdResponseDTO2 } from '../models/PaymentIdResponseDTO2';
import { PaymentIdTagRequestDTO } from '../models/PaymentIdTagRequestDTO';
import { VirtualAccountResponseDTO } from '../models/VirtualAccountResponseDTO';
import { WalletApiError } from '../models/WalletApiError';
import { WalletPaymentIdsResponseDTO } from '../models/WalletPaymentIdsResponseDTO';

/**
 * no description
 */
export class CustomerVirtualAccountsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to download an account ownership certificate.
     * Account Ownership Certificate
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account ownership certificate to be generated. If no currencies are being sent in query param then account ownership certificate will be generated for all the currencies enabled to the customer.
     * @param currentAccountBalance This field will display the account balance of the customer as on date
     * @param xRequestId Enter a unique UUID value.
     */
    public async accountOwnershipCertificate(clientHashId: string, customerHashId: string, currencies?: string, currentAccountBalance?: boolean, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "accountOwnershipCertificate", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "accountOwnershipCertificate", "customerHashId");
        }





        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/accountOwnershipCertificate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (currencies !== undefined) {
            requestContext.setQueryParam("currencies", ObjectSerializer.serialize(currencies, "string", ""));
        }

        // Query Params
        if (currentAccountBalance !== undefined) {
            requestContext.setQueryParam("currentAccountBalance", ObjectSerializer.serialize(currentAccountBalance, "boolean", ""));
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
     * This API allows you to assign virtual account numbers to customer for specific source.
     * Assign Payment ID
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdRequestDTO2 paymentIdRequestDTO2
     * @param xRequestId Enter a unique UUID value
     */
    public async assignPaymentID(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdRequestDTO2: PaymentIdRequestDTO2, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "assignPaymentID", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "assignPaymentID", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "assignPaymentID", "walletHashId");
        }


        // verify required parameter 'paymentIdRequestDTO2' is not null or undefined
        if (paymentIdRequestDTO2 === null || paymentIdRequestDTO2 === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "assignPaymentID", "paymentIdRequestDTO2");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId'
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
            ObjectSerializer.serialize(paymentIdRequestDTO2, "PaymentIdRequestDTO2", ""),
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
     * This API allows you to add, update, delete client tags against each virtual account.
     * Manage Virtual Account Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param paymentIdTagRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public async manageVirtualAccountTags(clientHashId: string, customerHashId: string, walletHashId: string, paymentIdTagRequestDTO: PaymentIdTagRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "manageVirtualAccountTags", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "manageVirtualAccountTags", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "manageVirtualAccountTags", "walletHashId");
        }


        // verify required parameter 'paymentIdTagRequestDTO' is not null or undefined
        if (paymentIdTagRequestDTO === null || paymentIdTagRequestDTO === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "manageVirtualAccountTags", "paymentIdTagRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentId/tags'
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
            ObjectSerializer.serialize(paymentIdTagRequestDTO, "PaymentIdTagRequestDTO", ""),
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
    public async virtualAccountDetails(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetails", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetails", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetails", "walletHashId");
        }












        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (currencyCode !== undefined) {
            requestContext.setQueryParam("currencyCode", ObjectSerializer.serialize(currencyCode, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'DESC' | 'ASC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "'createdAt'", ""));
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
        if (tagKey !== undefined) {
            requestContext.setQueryParam("tagKey", ObjectSerializer.serialize(tagKey, "string", ""));
        }

        // Query Params
        if (tagValue !== undefined) {
            requestContext.setQueryParam("tagValue", ObjectSerializer.serialize(tagValue, "string", ""));
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
    public async virtualAccountDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, currencyCode?: string, endDate?: string, order?: 'DESC' | 'ASC', page?: number, property?: 'createdAt', size?: number, startDate?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetailsV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetailsV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("CustomerVirtualAccountsApi", "virtualAccountDetailsV2", "walletHashId");
        }












        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/paymentIds'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (currencyCode !== undefined) {
            requestContext.setQueryParam("currencyCode", ObjectSerializer.serialize(currencyCode, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'DESC' | 'ASC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "'createdAt'", ""));
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
        if (tagKey !== undefined) {
            requestContext.setQueryParam("tagKey", ObjectSerializer.serialize(tagKey, "string", ""));
        }

        // Query Params
        if (tagValue !== undefined) {
            requestContext.setQueryParam("tagValue", ObjectSerializer.serialize(tagValue, "string", ""));
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

export class CustomerVirtualAccountsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountOwnershipCertificate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountOwnershipCertificateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError2", ""
            ) as ApiError2;
            throw new ApiException<ApiError2>(response.httpStatusCode, "Bad Request", body, response.headers);
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
            const body: ApiError2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError2", ""
            ) as ApiError2;
            throw new ApiException<ApiError2>(response.httpStatusCode, "Not Found", body, response.headers);
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
     * @params response Response returned by the server for a request to assignPaymentID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assignPaymentIDWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentIdResponseDTO2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaymentIdResponseDTO2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentIdResponseDTO2", ""
            ) as PaymentIdResponseDTO2;
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
            const body: PaymentIdResponseDTO2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentIdResponseDTO2", ""
            ) as PaymentIdResponseDTO2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manageVirtualAccountTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manageVirtualAccountTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaymentIdCientTagsResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaymentIdCientTagsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentIdCientTagsResponseDTO", ""
            ) as PaymentIdCientTagsResponseDTO;
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
            const body: PaymentIdCientTagsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaymentIdCientTagsResponseDTO", ""
            ) as PaymentIdCientTagsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to virtualAccountDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async virtualAccountDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<WalletPaymentIdsResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<WalletPaymentIdsResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WalletPaymentIdsResponseDTO>", ""
            ) as Array<WalletPaymentIdsResponseDTO>;
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
            const body: Array<WalletPaymentIdsResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WalletPaymentIdsResponseDTO>", ""
            ) as Array<WalletPaymentIdsResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to virtualAccountDetailsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async virtualAccountDetailsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<VirtualAccountResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VirtualAccountResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VirtualAccountResponseDTO", ""
            ) as VirtualAccountResponseDTO;
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
            const body: VirtualAccountResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VirtualAccountResponseDTO", ""
            ) as VirtualAccountResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
