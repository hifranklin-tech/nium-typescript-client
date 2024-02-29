// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ActivateCardRequestV2DTO } from '../models/ActivateCardRequestV2DTO';
import { ActivateCardResponseDTO } from '../models/ActivateCardResponseDTO';
import { ActivateCardResponseV2DTO } from '../models/ActivateCardResponseV2DTO';
import { AddCardRequest } from '../models/AddCardRequest';
import { AddCardResponseDTO } from '../models/AddCardResponseDTO';
import { AddCardV2Request } from '../models/AddCardV2Request';
import { AddCardV2ResponseDTO } from '../models/AddCardV2ResponseDTO';
import { ApiError } from '../models/ApiError';
import { ApiResponse2 } from '../models/ApiResponse2';
import { AssignCardDTO } from '../models/AssignCardDTO';
import { BlockAndReplaceCardRequestDTO } from '../models/BlockAndReplaceCardRequestDTO';
import { BlockAndReplaceCardResponseDTO } from '../models/BlockAndReplaceCardResponseDTO';
import { BlockCodeCardResponseDTO } from '../models/BlockCodeCardResponseDTO';
import { BlockCodeDTO } from '../models/BlockCodeDTO';
import { CardAssignResponseDTO } from '../models/CardAssignResponseDTO';
import { CardDetails } from '../models/CardDetails';
import { CardResponseDTO } from '../models/CardResponseDTO';
import { CardWidgetTokenRequestDTO } from '../models/CardWidgetTokenRequestDTO';
import { CardWidgetTokenResponse } from '../models/CardWidgetTokenResponse';
import { LockStatusUpdateRequestDTO } from '../models/LockStatusUpdateRequestDTO';
import { LockStatusUpdateResponseDTO } from '../models/LockStatusUpdateResponseDTO';
import { NewErrorResponse } from '../models/NewErrorResponse';
import { PageResponseCardDetails } from '../models/PageResponseCardDetails';
import { RenewCardRequest } from '../models/RenewCardRequest';
import { ReplaceCardRequest } from '../models/ReplaceCardRequest';
import { Standard401Error } from '../models/Standard401Error';
import { Standard403Error } from '../models/Standard403Error';
import { Standard500Error } from '../models/Standard500Error';
import { UpdateContactInfoRequestDTO } from '../models/UpdateContactInfoRequestDTO';

/**
 * no description
 */
export class LifecycleApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows you to activate a card after delivery to the customer.
     * Activate Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param activateCardRequestV2DTO Activate card request
     * @param xRequestId Enter a unique UUID value.
     */
    public async activateCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, activateCardRequestV2DTO: ActivateCardRequestV2DTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard", "cardHashId");
        }


        // verify required parameter 'activateCardRequestV2DTO' is not null or undefined
        if (activateCardRequestV2DTO === null || activateCardRequestV2DTO === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard", "activateCardRequestV2DTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate'
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
            ObjectSerializer.serialize(activateCardRequestV2DTO, "ActivateCardRequestV2DTO", ""),
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
     * This API allows you to activate a card after delivery to a customer.
     * Activate Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public async activateCard1(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard1", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard1", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard1", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "activateCard1", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/activate'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * This API allows you to issue a card for a customer.   >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Add Card V2](ref:addcardv2) is the latest version of this API.
     * Add Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardRequest addCardRequest
     * @param xRequestId Enter a unique UUID value.
     */
    public async addCard(clientHashId: string, customerHashId: string, walletHashId: string, addCardRequest: AddCardRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCard", "walletHashId");
        }


        // verify required parameter 'addCardRequest' is not null or undefined
        if (addCardRequest === null || addCardRequest === undefined) {
            throw new RequiredError("LifecycleApi", "addCard", "addCardRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card'
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
            ObjectSerializer.serialize(addCardRequest, "AddCardRequest", ""),
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
     * This API allows you to issue a card for a customer.
     * Add Card V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param addCardV2Request The request body to add a new card.
     * @param xRequestId Enter a unique UUID value.
     */
    public async addCardV2(clientHashId: string, customerHashId: string, walletHashId: string, addCardV2Request: AddCardV2Request, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCardV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCardV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "addCardV2", "walletHashId");
        }


        // verify required parameter 'addCardV2Request' is not null or undefined
        if (addCardV2Request === null || addCardV2Request === undefined) {
            throw new RequiredError("LifecycleApi", "addCardV2", "addCardV2Request");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card'
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
            ObjectSerializer.serialize(addCardV2Request, "AddCardV2Request", ""),
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
     * This API is used to assign a card to a customer. In this use case, the client has an unassigned card with him/her. The client hands over the card to the customer and assigns it to him/her.
     * Assign Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param assignCardDTO assignCardDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async assignCard(clientHashId: string, customerHashId: string, walletHashId: string, assignCardDTO: AssignCardDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "assignCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "assignCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "assignCard", "walletHashId");
        }


        // verify required parameter 'assignCardDTO' is not null or undefined
        if (assignCardDTO === null || assignCardDTO === undefined) {
            throw new RequiredError("LifecycleApi", "assignCard", "assignCardDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/assignCard'
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
            ObjectSerializer.serialize(assignCardDTO, "AssignCardDTO", ""),
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
     * Use this API to block and replace a card.
     * Block and Replace Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockAndReplaceCardRequestDTO A card can be blocked and replaced using the Block And Replace Card API.
     * @param xRequestId Enter a unique UUID value.
     */
    public async blockAndReplaceCardV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockAndReplaceCardRequestDTO: BlockAndReplaceCardRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockAndReplaceCardV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockAndReplaceCardV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockAndReplaceCardV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockAndReplaceCardV2", "cardHashId");
        }


        // verify required parameter 'blockAndReplaceCardRequestDTO' is not null or undefined
        if (blockAndReplaceCardRequestDTO === null || blockAndReplaceCardRequestDTO === undefined) {
            throw new RequiredError("LifecycleApi", "blockAndReplaceCardV2", "blockAndReplaceCardRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/blockAndReplace'
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
            ObjectSerializer.serialize(blockAndReplaceCardRequestDTO, "BlockAndReplaceCardRequestDTO", ""),
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
     * This API helps you perform the following operations: Permanent block card Temporary block card Unblock card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a temporary lock and unlock, [Lock/Unlock Card API](ref:lockunlockcardv2) is the latest version of this API. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Block/Unblock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param blockCodeDTO blockCode
     * @param xRequestId Enter a unique UUID value.
     */
    public async blockUnblockCards(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, blockCodeDTO: BlockCodeDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockUnblockCards", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockUnblockCards", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockUnblockCards", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "blockUnblockCards", "cardHashId");
        }


        // verify required parameter 'blockCodeDTO' is not null or undefined
        if (blockCodeDTO === null || blockCodeDTO === undefined) {
            throw new RequiredError("LifecycleApi", "blockUnblockCards", "blockCodeDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/cardAction'
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
            ObjectSerializer.serialize(blockCodeDTO, "BlockCodeDTO", ""),
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
     * This API allows you to fetch the card details of a particular card.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. [Card Details V2](ref:carddetailsv2) is the latest version of this API.
     * Card Details
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value.
     */
    public async cardDetails(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetails", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetails", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetails", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetails", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API allows you to get details about a card.
     * Card Details V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param xRequestId Enter a unique UUID value
     */
    public async cardDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetailsV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetailsV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetailsV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardDetailsV2", "cardHashId");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
     * This API will return all the cards issued, for a given wallet.
     * Card List
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param xRequestId Enter a unique UUID value
     */
    public async cardList(clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardList", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardList", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardList", "walletHashId");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

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
     * This API returns all the cards issued for a given customer wallet.
     * Card List V2
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param childCustomerHashId This field refers to a unique identifier, known as the customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier distinguishes and tracks the child-level customer within a given client\&#39;s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
     * @param page This field accepts the page number to be returned. The acceptable values are 0-N.  This field works with size field such that total number of records/size of each page &#x3D; number of pages(N).  This field can then give a particular page.
     * @param size This field accepts the number of elements per page.
     * @param xRequestId Enter a unique UUID value.
     */
    public async cardListV2(clientHashId: string, customerHashId: string, walletHashId: string, childCustomerHashId?: string, page?: number, size?: number, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardListV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardListV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "cardListV2", "walletHashId");
        }






        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/cards'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (childCustomerHashId !== undefined) {
            requestContext.setQueryParam("childCustomerHashId", ObjectSerializer.serialize(childCustomerHashId, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
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
     * Use this API to fetch card widget url and token for Non-PCI DSS compliant Clients
     * Get Card Details Widget
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param cardWidgetTokenRequestDTO 
     * @param xRequestId Enter a unique UUID value.
     */
    public async getCardWidget(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, cardWidgetTokenRequestDTO: CardWidgetTokenRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "getCardWidget", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "getCardWidget", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "getCardWidget", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "getCardWidget", "cardHashId");
        }


        // verify required parameter 'cardWidgetTokenRequestDTO' is not null or undefined
        if (cardWidgetTokenRequestDTO === null || cardWidgetTokenRequestDTO === undefined) {
            throw new RequiredError("LifecycleApi", "getCardWidget", "cardWidgetTokenRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/widget/showCardDetails'
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
            ObjectSerializer.serialize(cardWidgetTokenRequestDTO, "CardWidgetTokenRequestDTO", ""),
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
     * Use this API for issuing a card replacement.  >⚠️ WARNING   >This API version is deprecated. Eventually, a deprecated API version becomes unsupported. For a permanent block and replacing the card, [Block and Replace API](ref:blockandreplacecardv2) is the latest version of this API.
     * Issue Replacement Card
     * @param clientHashId Unique client identifier generated and shared before API handshake.
     * @param customerHashId Unique customer identifier generated on customer creation.
     * @param walletHashId Unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId Unique card identifier generated while new/add-on card issuance.
     * @param replaceCardRequest A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
     * @param xRequestId Enter a unique UUID value
     */
    public async issueReplacementCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, replaceCardRequest: ReplaceCardRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "issueReplacementCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "issueReplacementCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "issueReplacementCard", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "issueReplacementCard", "cardHashId");
        }


        // verify required parameter 'replaceCardRequest' is not null or undefined
        if (replaceCardRequest === null || replaceCardRequest === undefined) {
            throw new RequiredError("LifecycleApi", "issueReplacementCard", "replaceCardRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/replaceCard'
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
            ObjectSerializer.serialize(replaceCardRequest, "ReplaceCardRequest", ""),
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
     * This API allows you to temporarily lock or unlock a card.
     * Lock/Unlock Cards
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param lockStatusUpdateRequestDTO lockStatusUpdateRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async lockUnlockCardV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, lockStatusUpdateRequestDTO: LockStatusUpdateRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "lockUnlockCardV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "lockUnlockCardV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "lockUnlockCardV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "lockUnlockCardV2", "cardHashId");
        }


        // verify required parameter 'lockStatusUpdateRequestDTO' is not null or undefined
        if (lockStatusUpdateRequestDTO === null || lockStatusUpdateRequestDTO === undefined) {
            throw new RequiredError("LifecycleApi", "lockUnlockCardV2", "lockStatusUpdateRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/lockAction'
            .replace('{' + 'clientHashId' + '}', encodeURIComponent(String(clientHashId)))
            .replace('{' + 'customerHashId' + '}', encodeURIComponent(String(customerHashId)))
            .replace('{' + 'walletHashId' + '}', encodeURIComponent(String(walletHashId)))
            .replace('{' + 'cardHashId' + '}', encodeURIComponent(String(cardHashId)));

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
            ObjectSerializer.serialize(lockStatusUpdateRequestDTO, "LockStatusUpdateRequestDTO", ""),
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
     * Use this API for card renewal.
     * Renew Card
     * @param clientHashId The unique client identifier generated and shared before the API handshake.
     * @param customerHashId The unique customer identifier generated on customer creation.
     * @param walletHashId The unique wallet identifier generated simultaneously with customer creation.
     * @param cardHashId The unique card identifier generated while new/add-on card issuance.
     * @param renewCardRequest A card can be renewed using the Renew Card API on or before 45 days from the expiration date.
     * @param xRequestId Enter a unique UUID value.
     */
    public async renewCard(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, renewCardRequest: RenewCardRequest, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "renewCard", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "renewCard", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "renewCard", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "renewCard", "cardHashId");
        }


        // verify required parameter 'renewCardRequest' is not null or undefined
        if (renewCardRequest === null || renewCardRequest === undefined) {
            throw new RequiredError("LifecycleApi", "renewCard", "renewCardRequest");
        }



        // Path Params
        const localVarPath = '/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}/renewCard'
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
            ObjectSerializer.serialize(renewCardRequest, "RenewCardRequest", ""),
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
     * This API allows you to update the contact information of the cardholder.
     * Update Card Details V2
     * @param clientHashId clientHashId
     * @param customerHashId customerHashId
     * @param walletHashId walletHashId
     * @param cardHashId cardHashId
     * @param updateContactInfoRequestDTO updateContactInfoRequestDTO
     * @param xRequestId Enter a unique UUID value.
     */
    public async updateCardDetailsV2(clientHashId: string, customerHashId: string, walletHashId: string, cardHashId: string, updateContactInfoRequestDTO: UpdateContactInfoRequestDTO, xRequestId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'clientHashId' is not null or undefined
        if (clientHashId === null || clientHashId === undefined) {
            throw new RequiredError("LifecycleApi", "updateCardDetailsV2", "clientHashId");
        }


        // verify required parameter 'customerHashId' is not null or undefined
        if (customerHashId === null || customerHashId === undefined) {
            throw new RequiredError("LifecycleApi", "updateCardDetailsV2", "customerHashId");
        }


        // verify required parameter 'walletHashId' is not null or undefined
        if (walletHashId === null || walletHashId === undefined) {
            throw new RequiredError("LifecycleApi", "updateCardDetailsV2", "walletHashId");
        }


        // verify required parameter 'cardHashId' is not null or undefined
        if (cardHashId === null || cardHashId === undefined) {
            throw new RequiredError("LifecycleApi", "updateCardDetailsV2", "cardHashId");
        }


        // verify required parameter 'updateContactInfoRequestDTO' is not null or undefined
        if (updateContactInfoRequestDTO === null || updateContactInfoRequestDTO === undefined) {
            throw new RequiredError("LifecycleApi", "updateCardDetailsV2", "updateContactInfoRequestDTO");
        }



        // Path Params
        const localVarPath = '/api/v2/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/card/{cardHashId}'
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
            ObjectSerializer.serialize(updateContactInfoRequestDTO, "UpdateContactInfoRequestDTO", ""),
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

export class LifecycleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async activateCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivateCardResponseV2DTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActivateCardResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivateCardResponseV2DTO", ""
            ) as ActivateCardResponseV2DTO;
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
            const body: ActivateCardResponseV2DTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivateCardResponseV2DTO", ""
            ) as ActivateCardResponseV2DTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activateCard1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async activateCard1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ActivateCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActivateCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivateCardResponseDTO", ""
            ) as ActivateCardResponseDTO;
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
            const body: ActivateCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivateCardResponseDTO", ""
            ) as ActivateCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardResponseDTO", ""
            ) as AddCardResponseDTO;
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
            const body: AddCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardResponseDTO", ""
            ) as AddCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addCardV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addCardV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddCardV2ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddCardV2ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardV2ResponseDTO", ""
            ) as AddCardV2ResponseDTO;
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
            const body: AddCardV2ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardV2ResponseDTO", ""
            ) as AddCardV2ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assignCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardAssignResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CardAssignResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardAssignResponseDTO", ""
            ) as CardAssignResponseDTO;
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
            const body: CardAssignResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardAssignResponseDTO", ""
            ) as CardAssignResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockAndReplaceCardV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockAndReplaceCardV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<BlockAndReplaceCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockAndReplaceCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockAndReplaceCardResponseDTO", ""
            ) as BlockAndReplaceCardResponseDTO;
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
            const body: BlockAndReplaceCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockAndReplaceCardResponseDTO", ""
            ) as BlockAndReplaceCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockUnblockCards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockUnblockCardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BlockCodeCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockCodeCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCodeCardResponseDTO", ""
            ) as BlockCodeCardResponseDTO;
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
            const body: BlockCodeCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCodeCardResponseDTO", ""
            ) as BlockCodeCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cardDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cardDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardResponseDTO", ""
            ) as CardResponseDTO;
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
            const body: CardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardResponseDTO", ""
            ) as CardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cardDetailsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cardDetailsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CardDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardDetails", ""
            ) as CardDetails;
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
            const body: CardDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardDetails", ""
            ) as CardDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cardList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cardListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<{ [key: string]: any; } >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
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
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cardListV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cardListV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PageResponseCardDetails >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageResponseCardDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageResponseCardDetails", ""
            ) as PageResponseCardDetails;
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
            const body: PageResponseCardDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageResponseCardDetails", ""
            ) as PageResponseCardDetails;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCardWidget
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCardWidgetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardWidgetTokenResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CardWidgetTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardWidgetTokenResponse", ""
            ) as CardWidgetTokenResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: NewErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NewErrorResponse", ""
            ) as NewErrorResponse;
            throw new ApiException<NewErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: Standard401Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Standard401Error", ""
            ) as Standard401Error;
            throw new ApiException<Standard401Error>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Standard403Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Standard403Error", ""
            ) as Standard403Error;
            throw new ApiException<Standard403Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: Standard500Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Standard500Error", ""
            ) as Standard500Error;
            throw new ApiException<Standard500Error>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CardWidgetTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardWidgetTokenResponse", ""
            ) as CardWidgetTokenResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to issueReplacementCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async issueReplacementCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddCardResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardResponseDTO", ""
            ) as AddCardResponseDTO;
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
            const body: AddCardResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddCardResponseDTO", ""
            ) as AddCardResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lockUnlockCardV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lockUnlockCardV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<LockStatusUpdateResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LockStatusUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LockStatusUpdateResponseDTO", ""
            ) as LockStatusUpdateResponseDTO;
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
            const body: LockStatusUpdateResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LockStatusUpdateResponseDTO", ""
            ) as LockStatusUpdateResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to renewCard
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async renewCardWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
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
     * @params response Response returned by the server for a request to updateCardDetailsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCardDetailsV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiResponse2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiResponse2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponse2", ""
            ) as ApiResponse2;
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
            const body: ApiResponse2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiResponse2", ""
            ) as ApiResponse2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
