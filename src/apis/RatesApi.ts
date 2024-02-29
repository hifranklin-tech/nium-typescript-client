// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ErrorResponse400 } from '../models/ErrorResponse400';
import { ErrorResponse401 } from '../models/ErrorResponse401';
import { ErrorResponse403 } from '../models/ErrorResponse403';
import { ErrorResponse500 } from '../models/ErrorResponse500';
import { ExchangeRateV2ResponseDto } from '../models/ExchangeRateV2ResponseDto';
import { ExchangeRatesGetResponse } from '../models/ExchangeRatesGetResponse';
import { Window } from '../models/Window';

/**
 * no description
 */
export class RatesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API will retrieve aggregated time series of historical exchange rate.
     * Fetch historic aggregated exchange rates
     * @param sourceCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param destinationCurrencyCode This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param authorization 
     * @param csrfToken 
     * @param start The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param end The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;.
     * @param window Specifies the field by which the results should be grouped.
     * @param xRequestId Enter a unique UUID value.
     */
    public async aggregatedExchangeRates(sourceCurrencyCode: string, destinationCurrencyCode: string, authorization?: string, csrfToken?: string, start?: Date, end?: Date, window?: Window, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sourceCurrencyCode' is not null or undefined
        if (sourceCurrencyCode === null || sourceCurrencyCode === undefined) {
            throw new RequiredError("RatesApi", "aggregatedExchangeRates", "sourceCurrencyCode");
        }


        // verify required parameter 'destinationCurrencyCode' is not null or undefined
        if (destinationCurrencyCode === null || destinationCurrencyCode === undefined) {
            throw new RequiredError("RatesApi", "aggregatedExchangeRates", "destinationCurrencyCode");
        }








        // Path Params
        const localVarPath = '/api/v1/exchangeRates/aggregate';

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
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "Date", "date-time"));
        }

        // Query Params
        if (window !== undefined) {
            requestContext.setQueryParam("window", ObjectSerializer.serialize(window, "Window", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("csrf_token", ObjectSerializer.serialize(csrfToken, "string", ""));

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
     * This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.
     * Exchange Rate V2
     * @param sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @param destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @param xRequestId Enter a unique UUID value
     */
    public async exchangeRateV2(sourceCurrencyCode: string, destinationCurrencyCode: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sourceCurrencyCode' is not null or undefined
        if (sourceCurrencyCode === null || sourceCurrencyCode === undefined) {
            throw new RequiredError("RatesApi", "exchangeRateV2", "sourceCurrencyCode");
        }


        // verify required parameter 'destinationCurrencyCode' is not null or undefined
        if (destinationCurrencyCode === null || destinationCurrencyCode === undefined) {
            throw new RequiredError("RatesApi", "exchangeRateV2", "destinationCurrencyCode");
        }



        // Path Params
        const localVarPath = '/api/v2/exchangeRate';

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

export class RatesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to aggregatedExchangeRates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async aggregatedExchangeRatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExchangeRatesGetResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExchangeRatesGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExchangeRatesGetResponse", ""
            ) as ExchangeRatesGetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse400 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse400", ""
            ) as ErrorResponse400;
            throw new ApiException<ErrorResponse400>(response.httpStatusCode, "Error response when the request format is invalid.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ErrorResponse401 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse401", ""
            ) as ErrorResponse401;
            throw new ApiException<ErrorResponse401>(response.httpStatusCode, "Error response when the request is unauthorized.", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ErrorResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse403", ""
            ) as ErrorResponse403;
            throw new ApiException<ErrorResponse403>(response.httpStatusCode, "Error response when the requested resource is forbidden.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ErrorResponse500 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse500", ""
            ) as ErrorResponse500;
            throw new ApiException<ErrorResponse500>(response.httpStatusCode, "Error response when service has internal error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExchangeRatesGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExchangeRatesGetResponse", ""
            ) as ExchangeRatesGetResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangeRateV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeRateV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ExchangeRateV2ResponseDto >> {
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
