// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ExchangeRateV2ResponseDto } from '../models/ExchangeRateV2ResponseDto';
import { FxHoldLockResponseContent } from '../models/FxHoldLockResponseContent';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class QuotesPreviousVersionApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * Exchange Rate Lock and Hold
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param destinationCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @param sourceCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param additionalFxMarkup This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
     * @param xRequestId Enter a unique UUID value
     */
    public async exchangeRateLockandHold(clientHashId: string, customerHashId: string, destinationCurrency: string, sourceCurrency: string, walletHashId: string, additionalFxMarkup?: number, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateLockandHold", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateLockandHold", "customerHashId");
        }


        // verify required parameter 'destinationCurrency' is not null or undefined
        if (destinationCurrency === null || destinationCurrency === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateLockandHold", "destinationCurrency");
        }


        // verify required parameter 'sourceCurrency' is not null or undefined
        if (sourceCurrency === null || sourceCurrency === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateLockandHold", "sourceCurrency");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateLockandHold", "walletHashId");
        }




        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/lockExchangeRate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (additionalFxMarkup !== undefined) {
            requestContext.setQueryParam("additionalFxMarkup", ObjectSerializer.serialize(additionalFxMarkup, "number", "double"));
        }

        // Query Params
        if (destinationCurrency !== undefined) {
            requestContext.setQueryParam("destinationCurrency", ObjectSerializer.serialize(destinationCurrency, "string", ""));
        }

        // Query Params
        if (sourceCurrency !== undefined) {
            requestContext.setQueryParam("sourceCurrency", ObjectSerializer.serialize(sourceCurrency, "string", ""));
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
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * Exchange Rate With Markup
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param sourceAmount An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
     * @param destinationAmount An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
     * @param xRequestId Enter a unique UUID value
     */
    public async exchangeRateWithMarkup(clientHashId: string, sourceCurrencyCode: string, destinationCurrencyCode: string, sourceAmount?: number, destinationAmount?: number, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateWithMarkup", "clientHashId");
        }


        // verify required parameter 'sourceCurrencyCode' is not null or undefined
        if (sourceCurrencyCode === null || sourceCurrencyCode === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateWithMarkup", "sourceCurrencyCode");
        }


        // verify required parameter 'destinationCurrencyCode' is not null or undefined
        if (destinationCurrencyCode === null || destinationCurrencyCode === undefined) {
            throw new RequiredError("QuotesPreviousVersionApi", "exchangeRateWithMarkup", "destinationCurrencyCode");
        }





        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/exchangeRate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sourceCurrencyCode !== undefined) {
            requestContext.setQueryParam("sourceCurrencyCode", ObjectSerializer.serialize(sourceCurrencyCode, "string", ""));
        }

        // Query Params
        if (destinationCurrencyCode !== undefined) {
            requestContext.setQueryParam("destinationCurrencyCode", ObjectSerializer.serialize(destinationCurrencyCode, "string", ""));
        }

        // Query Params
        if (sourceAmount !== undefined) {
            requestContext.setQueryParam("sourceAmount", ObjectSerializer.serialize(sourceAmount, "number", "double"));
        }

        // Query Params
        if (destinationAmount !== undefined) {
            requestContext.setQueryParam("destinationAmount", ObjectSerializer.serialize(destinationAmount, "number", "double"));
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

export class QuotesPreviousVersionApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeRateLockandHold
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeRateLockandHoldWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FxHoldLockResponseContent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FxHoldLockResponseContent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FxHoldLockResponseContent", ""
            ) as FxHoldLockResponseContent;
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
            const body: FxHoldLockResponseContent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FxHoldLockResponseContent", ""
            ) as FxHoldLockResponseContent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeRateWithMarkup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeRateWithMarkupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExchangeRateV2ResponseDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExchangeRateV2ResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExchangeRateV2ResponseDto", ""
            ) as ExchangeRateV2ResponseDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExchangeRateV2ResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExchangeRateV2ResponseDto", ""
            ) as ExchangeRateV2ResponseDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
