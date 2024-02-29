// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AccountValidationRequestDTO } from '../models/AccountValidationRequestDTO';
import { AccountValidationResponseDTO } from '../models/AccountValidationResponseDTO';
import { AddBeneficiaryRequest } from '../models/AddBeneficiaryRequest';
import { AddBeneficiaryRequestDTO } from '../models/AddBeneficiaryRequestDTO';
import { BeneficiaryResponseDTO } from '../models/BeneficiaryResponseDTO';
import { BeneficiaryValidationRequestDTO } from '../models/BeneficiaryValidationRequestDTO';
import { BeneficiaryValidationResponseDTO } from '../models/BeneficiaryValidationResponseDTO';
import { PayoutCustomerApiError } from '../models/PayoutCustomerApiError';
import { Resource } from '../models/Resource';
import { UpdateBeneficiaryRequestDTO } from '../models/UpdateBeneficiaryRequestDTO';
import { WalletApiError } from '../models/WalletApiError';

/**
 * no description
 */
export class BeneficiaryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to verify a beneficiary account details. > > ℹ️ INFO   >This API only supports account verification for certain destination corridors. >Refer to the   [Account verification user guide](/apis/docs/account-verification#supported-corridors-for-account-verification) for details.
     * Account verification (Confirmation of Payee)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param accountValidationRequestDTO accountValidationRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async accountVerification(clientHashId: string, customerHashId: string, accountValidationRequestDTO: AccountValidationRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "accountVerification", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "accountVerification", "customerHashId");
        }


        // verify required parameter 'accountValidationRequestDTO' is not null or undefined
        if (accountValidationRequestDTO === null || accountValidationRequestDTO === undefined) {
            throw new RequiredError("BeneficiaryApi", "accountVerification", "accountValidationRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/accountVerification'
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
            ObjectSerializer.serialize(accountValidationRequestDTO, "AccountValidationRequestDTO", ""),
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
     * This API allows you to add a beneficiary to transfer funds.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Beneficiary V2](/apis/reference/addbeneficiaryv2) is the latest version of this API.
     * Add Beneficiary
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequest addBeneficiaryRequest
     * @param xRequestId Enter a unique UUID value
     */
    public async addBeneficiary(clientHashId: string, customerHashId: string, addBeneficiaryRequest: AddBeneficiaryRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiary", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiary", "customerHashId");
        }


        // verify required parameter 'addBeneficiaryRequest' is not null or undefined
        if (addBeneficiaryRequest === null || addBeneficiaryRequest === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiary", "addBeneficiaryRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries'
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
            ObjectSerializer.serialize(addBeneficiaryRequest, "AddBeneficiaryRequest", ""),
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
     * This API allows you to add a beneficiary to transfer funds.   > ⚠️ IMPORTANT    Some fields are conditional based on corridors. Use the [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) with the currency code and payout method to determine if a field is required or not.
     * Add Beneficiary V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param addBeneficiaryRequestDTO addBeneficiaryRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async addBeneficiaryV2(clientHashId: string, customerHashId: string, addBeneficiaryRequestDTO: AddBeneficiaryRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiaryV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiaryV2", "customerHashId");
        }


        // verify required parameter 'addBeneficiaryRequestDTO' is not null or undefined
        if (addBeneficiaryRequestDTO === null || addBeneficiaryRequestDTO === undefined) {
            throw new RequiredError("BeneficiaryApi", "addBeneficiaryV2", "addBeneficiaryRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries'
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
            ObjectSerializer.serialize(addBeneficiaryRequestDTO, "AddBeneficiaryRequestDTO", ""),
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
     * This API allows you to fetch beneficiary details of an individual beneficiary.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Details V2](/apis/reference/beneficiarydetailsv2) is the latest version of this API.
     * Beneficiary Details
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryDetails(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryHashId' is not null or undefined
        if (beneficiaryHashId === null || beneficiaryHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetails", "beneficiaryHashId");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetails", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetails", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId}'
            .replace('{' + 'beneficiaryHashId' + '}', encodeURIComponent(String(beneficiaryHashId)))
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
     * This API allows you to fetch beneficiary details of an individual beneficiary.
     * Beneficiary Details V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryDetailsV2(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryHashId' is not null or undefined
        if (beneficiaryHashId === null || beneficiaryHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetailsV2", "beneficiaryHashId");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetailsV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryDetailsV2", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId}'
            .replace('{' + 'beneficiaryHashId' + '}', encodeURIComponent(String(beneficiaryHashId)))
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
     * This API allows you to fetch beneficiary details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary List V2](/apis/reference/beneficiarylistv2) is the latest version of this API.
     * Beneficiary List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryList(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryList", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryList", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (parameters !== undefined) {
            requestContext.setQueryParam("parameters", ObjectSerializer.serialize(parameters, "Array<{ [key: string]: string; }>", ""));
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
     * This API allows you to fetch beneficiary details.
     * Beneficiary List V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param parameters parameters
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryListV2(clientHashId: string, customerHashId: string, parameters?: Array<{ [key: string]: string; }>, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryListV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryListV2", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (parameters !== undefined) {
            requestContext.setQueryParam("parameters", ObjectSerializer.serialize(parameters, "Array<{ [key: string]: string; }>", ""));
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
     * This API will allow you to fetch the validation schema for beneficiary validation details.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Beneficiary Validation Schema V2](/apis/reference/beneficiaryvalidationschemav2) is the latest version of this API.
     * Beneficiary Validation Schema
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.This field can accept one of the following values: 1.LOCAL 2.SWIFT 3.WALLET Default value of the parameter is LOCAL.
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryValidationSchema(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchema", "clientHashId");
        }


        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchema", "currencyCode");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchema", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'currencyCode' + '}', encodeURIComponent(String(currencyCode)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (payoutMethod !== undefined) {
            requestContext.setQueryParam("payoutMethod", ObjectSerializer.serialize(payoutMethod, "string", ""));
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
     * This API will allow you to fetch the validation schema for beneficiary validation details.
     * Beneficiary Validation Schema V2
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param currencyCode This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param payoutMethod This field can accept the different modes of payout.
     * @param xRequestId Enter a unique UUID value
     */
    public async beneficiaryValidationSchemaV2(clientHashId: string, currencyCode: string, customerHashId: string, payoutMethod?: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchemaV2", "clientHashId");
        }


        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchemaV2", "currencyCode");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "beneficiaryValidationSchemaV2", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/currency/{currencyCode}/validationSchemas'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'currencyCode' + '}', encodeURIComponent(String(currencyCode)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (payoutMethod !== undefined) {
            requestContext.setQueryParam("payoutMethod", ObjectSerializer.serialize(payoutMethod, "string", ""));
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
     * This API allows you to Validate Beneficiary Details.  >ℹ️ INFO   >This API only supports account verification for below destination corridors. >**For LOCAL payment method:** Vietnam (VN), Thailand (TH), India (IN), Pakistan(PK), Malaysia(MY), Indonesia (ID) >**For PROXY payment method:** Singapore (SG), India (IN), Malaysia(MY)
     * Confirmation of Payee (Previous version)
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param beneficiaryValidationRequestDTO beneficiaryValidationRequestDTO
     * @param xRequestId Enter a unique UUID value
     */
    public async confirmationofPayee(clientHashId: string, customerHashId: string, beneficiaryValidationRequestDTO: BeneficiaryValidationRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "confirmationofPayee", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "confirmationofPayee", "customerHashId");
        }


        // verify required parameter 'beneficiaryValidationRequestDTO' is not null or undefined
        if (beneficiaryValidationRequestDTO === null || beneficiaryValidationRequestDTO === undefined) {
            throw new RequiredError("BeneficiaryApi", "confirmationofPayee", "beneficiaryValidationRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/validate'
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
            ObjectSerializer.serialize(beneficiaryValidationRequestDTO, "BeneficiaryValidationRequestDTO", ""),
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
     * This API allows you to delete a beneficiary.
     * Delete Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async deleteBeneficiary(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryHashId' is not null or undefined
        if (beneficiaryHashId === null || beneficiaryHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "deleteBeneficiary", "beneficiaryHashId");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "deleteBeneficiary", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "deleteBeneficiary", "customerHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId}'
            .replace('{' + 'beneficiaryHashId' + '}', encodeURIComponent(String(beneficiaryHashId)))
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * This API allows you to update beneficiary details.
     * Update Beneficiary
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param addBeneficiaryRequest Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public async updateBeneficiary(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, addBeneficiaryRequest?: AddBeneficiaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryHashId' is not null or undefined
        if (beneficiaryHashId === null || beneficiaryHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiary", "beneficiaryHashId");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiary", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiary", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId}'
            .replace('{' + 'beneficiaryHashId' + '}', encodeURIComponent(String(beneficiaryHashId)))
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
            ObjectSerializer.serialize(addBeneficiaryRequest, "AddBeneficiaryRequest", ""),
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
     * This API allows you to update beneficiary details.
     * Update Beneficiary V2
     * @param beneficiaryHashId Unique beneficiary hash ID.
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param xRequestId Enter a unique UUID value
     * @param updateBeneficiaryRequestDTO Info:  Update Beneficiary API will be restricted when a remittance transaction for the beneficiary is Pending.
     */
    public async updateBeneficiaryV2(beneficiaryHashId: string, clientHashId: string, customerHashId: string, xRequestId?: string, updateBeneficiaryRequestDTO?: UpdateBeneficiaryRequestDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'beneficiaryHashId' is not null or undefined
        if (beneficiaryHashId === null || beneficiaryHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiaryV2", "beneficiaryHashId");
        }


        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiaryV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("BeneficiaryApi", "updateBeneficiaryV2", "customerHashId");
        }




        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/beneficiaries/{beneficiaryHashId}'
            .replace('{' + 'beneficiaryHashId' + '}', encodeURIComponent(String(beneficiaryHashId)))
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
            ObjectSerializer.serialize(updateBeneficiaryRequestDTO, "UpdateBeneficiaryRequestDTO", ""),
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

export class BeneficiaryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountVerification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountVerificationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AccountValidationResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountValidationResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountValidationResponseDTO", ""
            ) as AccountValidationResponseDTO;
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
            const body: AccountValidationResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountValidationResponseDTO", ""
            ) as AccountValidationResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addBeneficiaryV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addBeneficiaryV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<BeneficiaryResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryDetailsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryDetailsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<BeneficiaryResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryListV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryListV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<BeneficiaryResponseDTO> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<BeneficiaryResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BeneficiaryResponseDTO>", ""
            ) as Array<BeneficiaryResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<BeneficiaryResponseDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<BeneficiaryResponseDTO>", ""
            ) as Array<BeneficiaryResponseDTO>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryValidationSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryValidationSchemaWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to beneficiaryValidationSchemaV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async beneficiaryValidationSchemaV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmationofPayee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmationofPayeeWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BeneficiaryValidationResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BeneficiaryValidationResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryValidationResponseDTO", ""
            ) as BeneficiaryValidationResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BeneficiaryValidationResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryValidationResponseDTO", ""
            ) as BeneficiaryValidationResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBeneficiary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBeneficiaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Resource >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Resource = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Resource", ""
            ) as Resource;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBeneficiaryV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBeneficiaryV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<BeneficiaryResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "BadRequest", body, response.headers);
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
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: PayoutCustomerApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PayoutCustomerApiError", ""
            ) as PayoutCustomerApiError;
            throw new ApiException<PayoutCustomerApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BeneficiaryResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BeneficiaryResponseDTO", ""
            ) as BeneficiaryResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
