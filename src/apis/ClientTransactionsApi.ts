// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ClientTransactionsResponseDTO } from '../models/ClientTransactionsResponseDTO';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class ClientTransactionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to fetch transaction details at the client level.
     * Client Transactions
     * @param clientHashId Unique client identifier generated and shared before API handshake. &gt;ℹ️ INFO  &gt;Query parameters are optional. If query parameters are not passed then by default three months transactions will be returned.
     * @param authCode This parameter can be used to filter the transactions based on the authorization code. In case of fund wallet transactions you can provide the systemReferenceNumber as value.
     * @param authCurrency This parameter can filter the transactions based on auth currency and accepts 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes).
     * @param businessTransaction This parameter can filter the transactions based on businessTransaction flag.
     * @param cardHashId This field can apply the filter based on the unique card identifier generated during new/add-on card issuance.
     * @param childCustomerHashId This field contains the unique child customer identifier generated when new child customer created.
     * @param customerHashId Unique identifier generated with customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param mcc This parameter can filter the transactions based on 4-digit Merchant Category Codes.
     * @param merchantCategories This parameter describes the merchant\&#39;s type of business product or service, also known as the Merchant Category Code (MCC) such as Airlines, Restaurants etc.
     * @param merchantCity This parameter can filter the transactions based on the merchant city field.
     * @param merchantCountries This parameter can filter the transactions based on comma-separated list of 2-letter ISO merchant countries.
     * @param merchantCountry This parameter can filter the transactions based on the merchant country field.
     * @param merchantName This parameter can filter the transactions based on the merchant name field.
     * @param order The sort order for the results.
     * @param page This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param paymentInstrumentHashId This parameter can filter the transactions based on comma-separated paymentInstrumentHashId.
     * @param property The field indicates the response parameter used to sort paginated data, with \&#39;createdAt\&#39; as the default parameter.
     * @param settlementDate This parameter can filter the transactions based on the settlement date of the transaction in format yyyyMMdd.
     * @param settlementStatus This parameter can filter the transactions based on settlement status. The detailed list of possible values is available in the response of this API.
     * @param size This will decide the number of elements per page. Typical values can be 1-20.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param status This parameter can filter the transactions based on status. The detailed list of possible values is available in the response of this API.
     * @param systemTraceAuditNumber This parameter can filter the transactions based on systemTraceAuditNumber.
     * @param tagKey This parameter can filter the transactions, based on the exact value of tagKey defined against transactions. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the transactions, based on the approximating value of tagValue(that may be mapped for a tagKey defined against transactions). This can be used as an independent search parameter.
     * @param transactionCurrency This field contains the 3-letter [ISO-4217 transaction currency code](https://www.iso.org/iso-4217-currency-codes.html).
     * @param transactionType This field contains the transaction can be one of the complete list of transactions mentioned in [Glossary of Transaction Types](https://docs.nium.com/baas/get-transactions#glossary-of-transaction-types).
     * @param transactionsLabelsKey This parameter can filter the transactions based on transactionsLabelsKey.
     * @param transactionsLabelsValue This parameter can filter the transactions based on transactionsLabelsValue.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async clientTransactions(clientHashId: string, authCode?: string, authCurrency?: string, businessTransaction?: boolean, cardHashId?: string, childCustomerHashId?: string, customerHashId?: string, endDate?: string, mcc?: string, merchantCategories?: string, merchantCity?: string, merchantCountries?: string, merchantCountry?: string, merchantName?: string, order?: 'ASC' | 'DESC', page?: number, paymentInstrumentHashId?: string, property?: string, settlementDate?: string, settlementStatus?: string, size?: number, startDate?: string, status?: 'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED', systemTraceAuditNumber?: string, tagKey?: string, tagValue?: string, transactionCurrency?: string, transactionType?: string, transactionsLabelsKey?: string, transactionsLabelsValue?: string, walletHashId?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("ClientTransactionsApi", "clientTransactions", "clientHashId");
        }

































        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/transactions'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (authCode !== undefined) {
            requestContext.setQueryParam("authCode", ObjectSerializer.serialize(authCode, "string", ""));
        }

        // Query Params
        if (authCurrency !== undefined) {
            requestContext.setQueryParam("authCurrency", ObjectSerializer.serialize(authCurrency, "string", ""));
        }

        // Query Params
        if (businessTransaction !== undefined) {
            requestContext.setQueryParam("businessTransaction", ObjectSerializer.serialize(businessTransaction, "boolean", ""));
        }

        // Query Params
        if (cardHashId !== undefined) {
            requestContext.setQueryParam("cardHashId", ObjectSerializer.serialize(cardHashId, "string", ""));
        }

        // Query Params
        if (childCustomerHashId !== undefined) {
            requestContext.setQueryParam("childCustomerHashId", ObjectSerializer.serialize(childCustomerHashId, "string", ""));
        }

        // Query Params
        if (customerHashId !== undefined) {
            requestContext.setQueryParam("customerHashId", ObjectSerializer.serialize(customerHashId, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (mcc !== undefined) {
            requestContext.setQueryParam("mcc", ObjectSerializer.serialize(mcc, "string", ""));
        }

        // Query Params
        if (merchantCategories !== undefined) {
            requestContext.setQueryParam("merchantCategories", ObjectSerializer.serialize(merchantCategories, "string", ""));
        }

        // Query Params
        if (merchantCity !== undefined) {
            requestContext.setQueryParam("merchantCity", ObjectSerializer.serialize(merchantCity, "string", ""));
        }

        // Query Params
        if (merchantCountries !== undefined) {
            requestContext.setQueryParam("merchantCountries", ObjectSerializer.serialize(merchantCountries, "string", ""));
        }

        // Query Params
        if (merchantCountry !== undefined) {
            requestContext.setQueryParam("merchantCountry", ObjectSerializer.serialize(merchantCountry, "string", ""));
        }

        // Query Params
        if (merchantName !== undefined) {
            requestContext.setQueryParam("merchantName", ObjectSerializer.serialize(merchantName, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ASC' | 'DESC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (paymentInstrumentHashId !== undefined) {
            requestContext.setQueryParam("paymentInstrumentHashId", ObjectSerializer.serialize(paymentInstrumentHashId, "string", ""));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Query Params
        if (settlementDate !== undefined) {
            requestContext.setQueryParam("settlementDate", ObjectSerializer.serialize(settlementDate, "string", ""));
        }

        // Query Params
        if (settlementStatus !== undefined) {
            requestContext.setQueryParam("settlementStatus", ObjectSerializer.serialize(settlementStatus, "string", ""));
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
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'NULL' | 'IN_PROGRESS' | 'ACTION_REQUIRED' | 'RFI_REQUESTED' | 'RFI_RESPONDED' | 'COMPLETED' | 'ERROR' | 'REJECT' | 'EXPIRED'", ""));
        }

        // Query Params
        if (systemTraceAuditNumber !== undefined) {
            requestContext.setQueryParam("systemTraceAuditNumber", ObjectSerializer.serialize(systemTraceAuditNumber, "string", ""));
        }

        // Query Params
        if (tagKey !== undefined) {
            requestContext.setQueryParam("tagKey", ObjectSerializer.serialize(tagKey, "string", ""));
        }

        // Query Params
        if (tagValue !== undefined) {
            requestContext.setQueryParam("tagValue", ObjectSerializer.serialize(tagValue, "string", ""));
        }

        // Query Params
        if (transactionCurrency !== undefined) {
            requestContext.setQueryParam("transactionCurrency", ObjectSerializer.serialize(transactionCurrency, "string", ""));
        }

        // Query Params
        if (transactionType !== undefined) {
            requestContext.setQueryParam("transactionType", ObjectSerializer.serialize(transactionType, "string", ""));
        }

        // Query Params
        if (transactionsLabelsKey !== undefined) {
            requestContext.setQueryParam("transactionsLabelsKey", ObjectSerializer.serialize(transactionsLabelsKey, "string", ""));
        }

        // Query Params
        if (transactionsLabelsValue !== undefined) {
            requestContext.setQueryParam("transactionsLabelsValue", ObjectSerializer.serialize(transactionsLabelsValue, "string", ""));
        }

        // Query Params
        if (walletHashId !== undefined) {
            requestContext.setQueryParam("walletHashId", ObjectSerializer.serialize(walletHashId, "string", ""));
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

export class ClientTransactionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to clientTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async clientTransactionsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ClientTransactionsResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ClientTransactionsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientTransactionsResponseDTO", ""
            ) as ClientTransactionsResponseDTO;
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
            const body: ClientTransactionsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ClientTransactionsResponseDTO", ""
            ) as ClientTransactionsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
