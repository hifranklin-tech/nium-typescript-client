// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ReferenceRateResponseDto } from '../models/ReferenceRateResponseDto';

/**
 * no description
 */
export class CardsReferenceDataApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to get the reference exchange rate.
     * Reference Exchange Rate
     * @param cardScheme This field accepts the card scheme provider name: Visa Mastercard
     * @param clientHashId Unique customer identifier generated on customer creation.
     * @param fromAmount From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
     * @param fromCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
     * @param toCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
     * @param xRequestId Enter a unique UUID value.
     */
    public async referenceExchangeRate(cardScheme: string, clientHashId: string, fromAmount: number, fromCurrency: string, toCurrency: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cardScheme' is not null or undefined
        if (cardScheme === null || cardScheme === undefined) {
            throw new RequiredError("CardsReferenceDataApi", "referenceExchangeRate", "cardScheme");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CardsReferenceDataApi", "referenceExchangeRate", "clientHashId");
        }


        // verify required parameter 'fromAmount' is not null or undefined
        if (fromAmount === null || fromAmount === undefined) {
            throw new RequiredError("CardsReferenceDataApi", "referenceExchangeRate", "fromAmount");
        }


        // verify required parameter 'fromCurrency' is not null or undefined
        if (fromCurrency === null || fromCurrency === undefined) {
            throw new RequiredError("CardsReferenceDataApi", "referenceExchangeRate", "fromCurrency");
        }


        // verify required parameter 'toCurrency' is not null or undefined
        if (toCurrency === null || toCurrency === undefined) {
            throw new RequiredError("CardsReferenceDataApi", "referenceExchangeRate", "toCurrency");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/referenceRate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cardScheme !== undefined) {
            requestContext.setQueryParam("cardScheme", ObjectSerializer.serialize(cardScheme, "string", ""));
        }

        // Query Params
        if (fromAmount !== undefined) {
            requestContext.setQueryParam("fromAmount", ObjectSerializer.serialize(fromAmount, "number", "double"));
        }

        // Query Params
        if (fromCurrency !== undefined) {
            requestContext.setQueryParam("fromCurrency", ObjectSerializer.serialize(fromCurrency, "string", ""));
        }

        // Query Params
        if (toCurrency !== undefined) {
            requestContext.setQueryParam("toCurrency", ObjectSerializer.serialize(toCurrency, "string", ""));
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

export class CardsReferenceDataApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to referenceExchangeRate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async referenceExchangeRateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferenceRateResponseDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferenceRateResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferenceRateResponseDto", ""
            ) as ReferenceRateResponseDto;
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
            const body: ReferenceRateResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferenceRateResponseDto", ""
            ) as ReferenceRateResponseDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
