// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BlockCustomerRequestDTO } from '../models/BlockCustomerRequestDTO';
import { CustomerApiError } from '../models/CustomerApiError';
import { CustomerClientTagsRequestDTO } from '../models/CustomerClientTagsRequestDTO';
import { CustomerClientTagsResponseDTO } from '../models/CustomerClientTagsResponseDTO';
import { CustomerDetailResponse } from '../models/CustomerDetailResponse';
import { CustomerDetailsResponseV2DTO } from '../models/CustomerDetailsResponseV2DTO';
import { PaginatedCustomerDetailsResponseV2DTO } from '../models/PaginatedCustomerDetailsResponseV2DTO';
import { PaginatedResponseDTOCustomerDetailsResponseV2DTO } from '../models/PaginatedResponseDTOCustomerDetailsResponseV2DTO';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class CustomerManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to download an account statement.
     * Account Statement
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param endDate End date for fetching the transaction details. The format for endDate is YYYY-MM-DD.
     * @param startDate From date for fetching the transaction details. The format for startDate is YYYY-MM-DD.
     * @param currencies This field accepts the list of currencies in 3-letter [ISO-4217 transaction currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for which the account statement to be generated. If no currencies are being sent in query param then statement will be generated for all the currencies enabled to the customer.
     * @param fileType This field accepts the file type of the account statement to be generated.
     * @param xRequestId Enter a unique UUID value
     */
    public async accountStatement(clientHashId: string, customerHashId: string, endDate: string, startDate: string, currencies?: string, fileType?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "accountStatement", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "accountStatement", "customerHashId");
        }


        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new RequiredError("CustomerManagementApi", "accountStatement", "endDate");
        }


        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new RequiredError("CustomerManagementApi", "accountStatement", "startDate");
        }





        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/accounts/statement'
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
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (fileType !== undefined) {
            requestContext.setQueryParam("fileType", ObjectSerializer.serialize(fileType, "string", ""));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", ""));
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
     * This API allows you to permanently block or temporarily block/unblock a customer.
     * Block/Unblock Customer
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param blockCustomerRequestDTO blockCustomerRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async blockUnblockCustomer(clientHashId: string, customerHashId: string, blockCustomerRequestDTO: BlockCustomerRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "blockUnblockCustomer", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "blockUnblockCustomer", "customerHashId");
        }


        // verify required parameter 'blockCustomerRequestDTO' is not null or undefined
        if (blockCustomerRequestDTO === null || blockCustomerRequestDTO === undefined) {
            throw new RequiredError("CustomerManagementApi", "blockUnblockCustomer", "blockCustomerRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/block'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("x-request-id", ObjectSerializer.serialize(xRequestId, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(blockCustomerRequestDTO, "BlockCustomerRequestDTO", ""),
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
     * This API allows you to fetch details for a specific customer.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer Details V2](/apis/reference/customerdetailsv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer Details
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async customerDetails(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerDetails", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerDetails", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

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
     * This API allows you to fetch details for a specific customer.
     * Customer Details V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async customerDetailsV2(clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerDetailsV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerDetailsV2", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

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
     * This API allows you to fetch the customers for the client. It also supports query parameters based filtering to fetch details of a customer with email or mobile.   >⚠️ WARNING   To access updated functionality and features we recommed using the latest version of this API [Customer List V2](/apis/reference/customerlistv2). In December 2023, this API version will be deprecated and becomes unsupported.
     * Customer List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer--digits only--without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value
     */
    public async customerList(clientHashId: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerList", "clientHashId");
        }








        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customers'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (mobile !== undefined) {
            requestContext.setQueryParam("mobile", ObjectSerializer.serialize(mobile, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ASC' | 'DESC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "string", ""));
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
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public async customerListV2(clientHashId: string, businessRegistrationNumber?: string, email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerListV2", "clientHashId");
        }











        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customers'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (businessRegistrationNumber !== undefined) {
            requestContext.setQueryParam("businessRegistrationNumber", ObjectSerializer.serialize(businessRegistrationNumber, "string", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (mobile !== undefined) {
            requestContext.setQueryParam("mobile", ObjectSerializer.serialize(mobile, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ASC' | 'DESC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "string", ""));
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
     * This API allows you to fetch customer lists under a client with optional search parameters.
     * Customer List V3
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param businessRegistrationNumber This field accepts the business registration number of corporate customer.
     * @param customerType This field accepts the type of customer.
     * @param email This field accepts the email ID of the customer.
     * @param mobile This field accepts the mobile number of a customer without the country code.
     * @param order This field accepts the order which can be ASC or DESC.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param parentCustomerHashId This field contains the unique parent customer identifier generated at the time of customer creation.
     * @param size This field accepts the number of elements per page.
     * @param tagKey This parameter can filter the customers, based on the exact value of tagKey defined against customers. This can be used as an independent search parameter.
     * @param tagValue This parameter can filter the customers, based on the approximating value of tagValue(that may be mapped for a tagKey defined against customers). This can be used as an independent search parameter.
     * @param xRequestId Enter a unique UUID value
     */
    public async customerListV3(clientHashId: string, businessRegistrationNumber?: string, customerType?: 'INDIVIDUAL' | 'CORPORATE', email?: string, mobile?: string, order?: 'ASC' | 'DESC', page?: string, parentCustomerHashId?: string, size?: string, tagKey?: string, tagValue?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "customerListV3", "clientHashId");
        }













        // Path Params
        const localVarPath = '/api/v3/client/{clientHashId}/customers'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (businessRegistrationNumber !== undefined) {
            requestContext.setQueryParam("businessRegistrationNumber", ObjectSerializer.serialize(businessRegistrationNumber, "string", ""));
        }

        // Query Params
        if (customerType !== undefined) {
            requestContext.setQueryParam("customerType", ObjectSerializer.serialize(customerType, "'INDIVIDUAL' | 'CORPORATE'", ""));
        }

        // Query Params
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }

        // Query Params
        if (mobile !== undefined) {
            requestContext.setQueryParam("mobile", ObjectSerializer.serialize(mobile, "string", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "'ASC' | 'DESC'", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }

        // Query Params
        if (parentCustomerHashId !== undefined) {
            requestContext.setQueryParam("parentCustomerHashId", ObjectSerializer.serialize(parentCustomerHashId, "string", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "string", ""));
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
     * This API allows you to add, update, and delete customer tags.
     * Manage Customer Tags
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated during customer creation.
     * @param customerClientTagsRequestDTO tags
     * @param xRequestId Enter a unique UUID value
     */
    public async manageCustomerTags(clientHashId: string, customerHashId: string, customerClientTagsRequestDTO: CustomerClientTagsRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "manageCustomerTags", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("CustomerManagementApi", "manageCustomerTags", "customerHashId");
        }


        // verify required parameter 'customerClientTagsRequestDTO' is not null or undefined
        if (customerClientTagsRequestDTO === null || customerClientTagsRequestDTO === undefined) {
            throw new RequiredError("CustomerManagementApi", "manageCustomerTags", "customerClientTagsRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/tags'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

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
            ObjectSerializer.serialize(customerClientTagsRequestDTO, "CustomerClientTagsRequestDTO", ""),
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

export class CustomerManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountStatement
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountStatementWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
     * @params response Response returned by the server for a request to blockUnblockCustomer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockUnblockCustomerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerApiError >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to customerDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async customerDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerDetailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomerDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDetailResponse", ""
            ) as CustomerDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDetailResponse", ""
            ) as CustomerDetailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to customerDetailsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async customerDetailsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerDetailsResponseV2DTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDetailsResponseV2DTO", ""
            ) as CustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerDetailsResponseV2DTO", ""
            ) as CustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to customerList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async customerListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<CustomerDetailResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CustomerDetailResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CustomerDetailResponse>", ""
            ) as Array<CustomerDetailResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CustomerDetailResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CustomerDetailResponse>", ""
            ) as Array<CustomerDetailResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to customerListV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async customerListV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedCustomerDetailsResponseV2DTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedCustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedCustomerDetailsResponseV2DTO", ""
            ) as PaginatedCustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedCustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedCustomerDetailsResponseV2DTO", ""
            ) as PaginatedCustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to customerListV3
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async customerListV3WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedResponseDTOCustomerDetailsResponseV2DTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedResponseDTOCustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedResponseDTOCustomerDetailsResponseV2DTO", ""
            ) as PaginatedResponseDTOCustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedResponseDTOCustomerDetailsResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedResponseDTOCustomerDetailsResponseV2DTO", ""
            ) as PaginatedResponseDTOCustomerDetailsResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to manageCustomerTags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async manageCustomerTagsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CustomerClientTagsResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CustomerClientTagsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerClientTagsResponseDTO", ""
            ) as CustomerClientTagsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: CustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerApiError", ""
            ) as CustomerApiError;
            throw new ApiException<CustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CustomerClientTagsResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CustomerClientTagsResponseDTO", ""
            ) as CustomerClientTagsResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
