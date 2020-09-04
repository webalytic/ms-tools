import * as $protobuf from "protobufjs";
/** Namespace custom_definition. */
export namespace custom_definition {

    /** CustomDefinitionType enum. */
    enum CustomDefinitionType {
        EMPTY_TYPE = 0,
        DIMENSION = 1,
        METRIC = 2
    }

    /** CustomDefinitionScope enum. */
    enum CustomDefinitionScope {
        EMPTY_SCOPE = 0,
        HIT = 1,
        SESSION = 2
    }

    /** Properties of a CustomDefinitionProps. */
    interface ICustomDefinitionProps {

        /** CustomDefinitionProps id */
        id?: (string|null);

        /** CustomDefinitionProps resourceId */
        resourceId?: (string|null);

        /** CustomDefinitionProps index */
        index?: (number|null);

        /** CustomDefinitionProps type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CustomDefinitionProps scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** CustomDefinitionProps name */
        name?: (string|null);

        /** CustomDefinitionProps active */
        active?: (boolean|null);
    }

    /** Represents a CustomDefinitionProps. */
    class CustomDefinitionProps implements ICustomDefinitionProps {

        /**
         * Constructs a new CustomDefinitionProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICustomDefinitionProps);

        /** CustomDefinitionProps id. */
        public id: string;

        /** CustomDefinitionProps resourceId. */
        public resourceId: string;

        /** CustomDefinitionProps index. */
        public index: number;

        /** CustomDefinitionProps type. */
        public type: custom_definition.CustomDefinitionType;

        /** CustomDefinitionProps scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** CustomDefinitionProps name. */
        public name: string;

        /** CustomDefinitionProps active. */
        public active: boolean;

        /**
         * Creates a new CustomDefinitionProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomDefinitionProps instance
         */
        public static create(properties?: custom_definition.ICustomDefinitionProps): custom_definition.CustomDefinitionProps;

        /**
         * Encodes the specified CustomDefinitionProps message. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @param message CustomDefinitionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICustomDefinitionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomDefinitionProps message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @param message CustomDefinitionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICustomDefinitionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CustomDefinitionProps;

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CustomDefinitionProps;

        /**
         * Verifies a CustomDefinitionProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomDefinitionProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomDefinitionProps
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CustomDefinitionProps;

        /**
         * Creates a plain object from a CustomDefinitionProps message. Also converts values to other types if specified.
         * @param message CustomDefinitionProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CustomDefinitionProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomDefinitionProps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateCustomDefinitionInput. */
    interface ICreateCustomDefinitionInput {

        /** CreateCustomDefinitionInput resourceId */
        resourceId?: (string|null);

        /** CreateCustomDefinitionInput index */
        index?: (number|null);

        /** CreateCustomDefinitionInput type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CreateCustomDefinitionInput scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** CreateCustomDefinitionInput name */
        name?: (string|null);

        /** CreateCustomDefinitionInput active */
        active?: (boolean|null);
    }

    /** Represents a CreateCustomDefinitionInput. */
    class CreateCustomDefinitionInput implements ICreateCustomDefinitionInput {

        /**
         * Constructs a new CreateCustomDefinitionInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICreateCustomDefinitionInput);

        /** CreateCustomDefinitionInput resourceId. */
        public resourceId: string;

        /** CreateCustomDefinitionInput index. */
        public index: number;

        /** CreateCustomDefinitionInput type. */
        public type: custom_definition.CustomDefinitionType;

        /** CreateCustomDefinitionInput scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** CreateCustomDefinitionInput name. */
        public name: string;

        /** CreateCustomDefinitionInput active. */
        public active: boolean;

        /**
         * Creates a new CreateCustomDefinitionInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateCustomDefinitionInput instance
         */
        public static create(properties?: custom_definition.ICreateCustomDefinitionInput): custom_definition.CreateCustomDefinitionInput;

        /**
         * Encodes the specified CreateCustomDefinitionInput message. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @param message CreateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICreateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @param message CreateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICreateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CreateCustomDefinitionInput;

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CreateCustomDefinitionInput;

        /**
         * Verifies a CreateCustomDefinitionInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateCustomDefinitionInput
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CreateCustomDefinitionInput;

        /**
         * Creates a plain object from a CreateCustomDefinitionInput message. Also converts values to other types if specified.
         * @param message CreateCustomDefinitionInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CreateCustomDefinitionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateCustomDefinitionInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateCustomDefinitionInput. */
    interface IUpdateCustomDefinitionInput {

        /** UpdateCustomDefinitionInput name */
        name?: (string|null);

        /** UpdateCustomDefinitionInput scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** UpdateCustomDefinitionInput active */
        active?: (boolean|null);
    }

    /** Represents an UpdateCustomDefinitionInput. */
    class UpdateCustomDefinitionInput implements IUpdateCustomDefinitionInput {

        /**
         * Constructs a new UpdateCustomDefinitionInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.IUpdateCustomDefinitionInput);

        /** UpdateCustomDefinitionInput name. */
        public name: string;

        /** UpdateCustomDefinitionInput scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** UpdateCustomDefinitionInput active. */
        public active: boolean;

        /**
         * Creates a new UpdateCustomDefinitionInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateCustomDefinitionInput instance
         */
        public static create(properties?: custom_definition.IUpdateCustomDefinitionInput): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Encodes the specified UpdateCustomDefinitionInput message. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @param message UpdateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.IUpdateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @param message UpdateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.IUpdateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Verifies an UpdateCustomDefinitionInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateCustomDefinitionInput
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Creates a plain object from an UpdateCustomDefinitionInput message. Also converts values to other types if specified.
         * @param message UpdateCustomDefinitionInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.UpdateCustomDefinitionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateCustomDefinitionInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CustomDefinitionFilter. */
    interface ICustomDefinitionFilter {

        /** CustomDefinitionFilter id */
        id?: (string|null);

        /** CustomDefinitionFilter name */
        name?: (string|null);

        /** CustomDefinitionFilter type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CustomDefinitionFilter resourceId */
        resourceId?: (string|null);
    }

    /** Represents a CustomDefinitionFilter. */
    class CustomDefinitionFilter implements ICustomDefinitionFilter {

        /**
         * Constructs a new CustomDefinitionFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICustomDefinitionFilter);

        /** CustomDefinitionFilter id. */
        public id: string;

        /** CustomDefinitionFilter name. */
        public name: string;

        /** CustomDefinitionFilter type. */
        public type: custom_definition.CustomDefinitionType;

        /** CustomDefinitionFilter resourceId. */
        public resourceId: string;

        /**
         * Creates a new CustomDefinitionFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomDefinitionFilter instance
         */
        public static create(properties?: custom_definition.ICustomDefinitionFilter): custom_definition.CustomDefinitionFilter;

        /**
         * Encodes the specified CustomDefinitionFilter message. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @param message CustomDefinitionFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICustomDefinitionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomDefinitionFilter message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @param message CustomDefinitionFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICustomDefinitionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CustomDefinitionFilter;

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CustomDefinitionFilter;

        /**
         * Verifies a CustomDefinitionFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomDefinitionFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomDefinitionFilter
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CustomDefinitionFilter;

        /**
         * Creates a plain object from a CustomDefinitionFilter message. Also converts values to other types if specified.
         * @param message CustomDefinitionFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CustomDefinitionFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomDefinitionFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a CustomDefinitionService */
export class CustomDefinitionService extends $protobuf.rpc.Service {

    /**
     * Constructs a new CustomDefinitionService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new CustomDefinitionService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CustomDefinitionService;

    /**
     * Calls ListCustomDefinitions.
     * @param request ListCustomDefinitionsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ListCustomDefinitionsResponse
     */
    public listCustomDefinitions(request: IListCustomDefinitionsRequest, callback: CustomDefinitionService.ListCustomDefinitionsCallback): void;

    /**
     * Calls ListCustomDefinitions.
     * @param request ListCustomDefinitionsRequest message or plain object
     * @returns Promise
     */
    public listCustomDefinitions(request: IListCustomDefinitionsRequest): Promise<ListCustomDefinitionsResponse>;

    /**
     * Calls CreateCustomDefinition.
     * @param request CreateCustomDefinitionRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CreateCustomDefinitionResponse
     */
    public createCustomDefinition(request: ICreateCustomDefinitionRequest, callback: CustomDefinitionService.CreateCustomDefinitionCallback): void;

    /**
     * Calls CreateCustomDefinition.
     * @param request CreateCustomDefinitionRequest message or plain object
     * @returns Promise
     */
    public createCustomDefinition(request: ICreateCustomDefinitionRequest): Promise<CreateCustomDefinitionResponse>;

    /**
     * Calls UpdateCustomDefinition.
     * @param request UpdateCustomDefinitionRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and UpdateCustomDefinitionResponse
     */
    public updateCustomDefinition(request: IUpdateCustomDefinitionRequest, callback: CustomDefinitionService.UpdateCustomDefinitionCallback): void;

    /**
     * Calls UpdateCustomDefinition.
     * @param request UpdateCustomDefinitionRequest message or plain object
     * @returns Promise
     */
    public updateCustomDefinition(request: IUpdateCustomDefinitionRequest): Promise<UpdateCustomDefinitionResponse>;
}

export namespace CustomDefinitionService {

    /**
     * Callback as used by {@link CustomDefinitionService#listCustomDefinitions}.
     * @param error Error, if any
     * @param [response] ListCustomDefinitionsResponse
     */
    type ListCustomDefinitionsCallback = (error: (Error|null), response?: ListCustomDefinitionsResponse) => void;

    /**
     * Callback as used by {@link CustomDefinitionService#createCustomDefinition}.
     * @param error Error, if any
     * @param [response] CreateCustomDefinitionResponse
     */
    type CreateCustomDefinitionCallback = (error: (Error|null), response?: CreateCustomDefinitionResponse) => void;

    /**
     * Callback as used by {@link CustomDefinitionService#updateCustomDefinition}.
     * @param error Error, if any
     * @param [response] UpdateCustomDefinitionResponse
     */
    type UpdateCustomDefinitionCallback = (error: (Error|null), response?: UpdateCustomDefinitionResponse) => void;
}

/** Properties of a ListCustomDefinitionsRequest. */
export interface IListCustomDefinitionsRequest {

    /** ListCustomDefinitionsRequest filter */
    filter?: (custom_definition.ICustomDefinitionFilter|null);

    /** ListCustomDefinitionsRequest limit */
    limit?: (number|null);

    /** ListCustomDefinitionsRequest offset */
    offset?: (number|null);

    /** ListCustomDefinitionsRequest orderBy */
    orderBy?: (string|null);
}

/** Represents a ListCustomDefinitionsRequest. */
export class ListCustomDefinitionsRequest implements IListCustomDefinitionsRequest {

    /**
     * Constructs a new ListCustomDefinitionsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListCustomDefinitionsRequest);

    /** ListCustomDefinitionsRequest filter. */
    public filter?: (custom_definition.ICustomDefinitionFilter|null);

    /** ListCustomDefinitionsRequest limit. */
    public limit: number;

    /** ListCustomDefinitionsRequest offset. */
    public offset: number;

    /** ListCustomDefinitionsRequest orderBy. */
    public orderBy: string;

    /**
     * Creates a new ListCustomDefinitionsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListCustomDefinitionsRequest instance
     */
    public static create(properties?: IListCustomDefinitionsRequest): ListCustomDefinitionsRequest;

    /**
     * Encodes the specified ListCustomDefinitionsRequest message. Does not implicitly {@link ListCustomDefinitionsRequest.verify|verify} messages.
     * @param message ListCustomDefinitionsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListCustomDefinitionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListCustomDefinitionsRequest message, length delimited. Does not implicitly {@link ListCustomDefinitionsRequest.verify|verify} messages.
     * @param message ListCustomDefinitionsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListCustomDefinitionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListCustomDefinitionsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListCustomDefinitionsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListCustomDefinitionsRequest;

    /**
     * Decodes a ListCustomDefinitionsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListCustomDefinitionsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListCustomDefinitionsRequest;

    /**
     * Verifies a ListCustomDefinitionsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListCustomDefinitionsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListCustomDefinitionsRequest
     */
    public static fromObject(object: { [k: string]: any }): ListCustomDefinitionsRequest;

    /**
     * Creates a plain object from a ListCustomDefinitionsRequest message. Also converts values to other types if specified.
     * @param message ListCustomDefinitionsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListCustomDefinitionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListCustomDefinitionsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListCustomDefinitionsResponse. */
export interface IListCustomDefinitionsResponse {

    /** ListCustomDefinitionsResponse customDefinitions */
    customDefinitions?: (custom_definition.ICustomDefinitionProps[]|null);

    /** ListCustomDefinitionsResponse count */
    count?: (number|null);
}

/** Represents a ListCustomDefinitionsResponse. */
export class ListCustomDefinitionsResponse implements IListCustomDefinitionsResponse {

    /**
     * Constructs a new ListCustomDefinitionsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListCustomDefinitionsResponse);

    /** ListCustomDefinitionsResponse customDefinitions. */
    public customDefinitions: custom_definition.ICustomDefinitionProps[];

    /** ListCustomDefinitionsResponse count. */
    public count: number;

    /**
     * Creates a new ListCustomDefinitionsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListCustomDefinitionsResponse instance
     */
    public static create(properties?: IListCustomDefinitionsResponse): ListCustomDefinitionsResponse;

    /**
     * Encodes the specified ListCustomDefinitionsResponse message. Does not implicitly {@link ListCustomDefinitionsResponse.verify|verify} messages.
     * @param message ListCustomDefinitionsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListCustomDefinitionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListCustomDefinitionsResponse message, length delimited. Does not implicitly {@link ListCustomDefinitionsResponse.verify|verify} messages.
     * @param message ListCustomDefinitionsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListCustomDefinitionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListCustomDefinitionsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListCustomDefinitionsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListCustomDefinitionsResponse;

    /**
     * Decodes a ListCustomDefinitionsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListCustomDefinitionsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListCustomDefinitionsResponse;

    /**
     * Verifies a ListCustomDefinitionsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListCustomDefinitionsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListCustomDefinitionsResponse
     */
    public static fromObject(object: { [k: string]: any }): ListCustomDefinitionsResponse;

    /**
     * Creates a plain object from a ListCustomDefinitionsResponse message. Also converts values to other types if specified.
     * @param message ListCustomDefinitionsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListCustomDefinitionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListCustomDefinitionsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateCustomDefinitionRequest. */
export interface ICreateCustomDefinitionRequest {

    /** CreateCustomDefinitionRequest data */
    data?: (custom_definition.ICreateCustomDefinitionInput|null);
}

/** Represents a CreateCustomDefinitionRequest. */
export class CreateCustomDefinitionRequest implements ICreateCustomDefinitionRequest {

    /**
     * Constructs a new CreateCustomDefinitionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateCustomDefinitionRequest);

    /** CreateCustomDefinitionRequest data. */
    public data?: (custom_definition.ICreateCustomDefinitionInput|null);

    /**
     * Creates a new CreateCustomDefinitionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateCustomDefinitionRequest instance
     */
    public static create(properties?: ICreateCustomDefinitionRequest): CreateCustomDefinitionRequest;

    /**
     * Encodes the specified CreateCustomDefinitionRequest message. Does not implicitly {@link CreateCustomDefinitionRequest.verify|verify} messages.
     * @param message CreateCustomDefinitionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateCustomDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateCustomDefinitionRequest message, length delimited. Does not implicitly {@link CreateCustomDefinitionRequest.verify|verify} messages.
     * @param message CreateCustomDefinitionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateCustomDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateCustomDefinitionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateCustomDefinitionRequest;

    /**
     * Decodes a CreateCustomDefinitionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateCustomDefinitionRequest;

    /**
     * Verifies a CreateCustomDefinitionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateCustomDefinitionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateCustomDefinitionRequest
     */
    public static fromObject(object: { [k: string]: any }): CreateCustomDefinitionRequest;

    /**
     * Creates a plain object from a CreateCustomDefinitionRequest message. Also converts values to other types if specified.
     * @param message CreateCustomDefinitionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateCustomDefinitionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateCustomDefinitionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateCustomDefinitionResponse. */
export interface ICreateCustomDefinitionResponse {

    /** CreateCustomDefinitionResponse instance */
    instance?: (custom_definition.ICustomDefinitionProps|null);
}

/** Represents a CreateCustomDefinitionResponse. */
export class CreateCustomDefinitionResponse implements ICreateCustomDefinitionResponse {

    /**
     * Constructs a new CreateCustomDefinitionResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateCustomDefinitionResponse);

    /** CreateCustomDefinitionResponse instance. */
    public instance?: (custom_definition.ICustomDefinitionProps|null);

    /**
     * Creates a new CreateCustomDefinitionResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateCustomDefinitionResponse instance
     */
    public static create(properties?: ICreateCustomDefinitionResponse): CreateCustomDefinitionResponse;

    /**
     * Encodes the specified CreateCustomDefinitionResponse message. Does not implicitly {@link CreateCustomDefinitionResponse.verify|verify} messages.
     * @param message CreateCustomDefinitionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateCustomDefinitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateCustomDefinitionResponse message, length delimited. Does not implicitly {@link CreateCustomDefinitionResponse.verify|verify} messages.
     * @param message CreateCustomDefinitionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateCustomDefinitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateCustomDefinitionResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateCustomDefinitionResponse;

    /**
     * Decodes a CreateCustomDefinitionResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateCustomDefinitionResponse;

    /**
     * Verifies a CreateCustomDefinitionResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateCustomDefinitionResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateCustomDefinitionResponse
     */
    public static fromObject(object: { [k: string]: any }): CreateCustomDefinitionResponse;

    /**
     * Creates a plain object from a CreateCustomDefinitionResponse message. Also converts values to other types if specified.
     * @param message CreateCustomDefinitionResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateCustomDefinitionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateCustomDefinitionResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateCustomDefinitionRequest. */
export interface IUpdateCustomDefinitionRequest {

    /** UpdateCustomDefinitionRequest id */
    id?: (string|null);

    /** UpdateCustomDefinitionRequest data */
    data?: (custom_definition.IUpdateCustomDefinitionInput|null);
}

/** Represents an UpdateCustomDefinitionRequest. */
export class UpdateCustomDefinitionRequest implements IUpdateCustomDefinitionRequest {

    /**
     * Constructs a new UpdateCustomDefinitionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateCustomDefinitionRequest);

    /** UpdateCustomDefinitionRequest id. */
    public id: string;

    /** UpdateCustomDefinitionRequest data. */
    public data?: (custom_definition.IUpdateCustomDefinitionInput|null);

    /**
     * Creates a new UpdateCustomDefinitionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateCustomDefinitionRequest instance
     */
    public static create(properties?: IUpdateCustomDefinitionRequest): UpdateCustomDefinitionRequest;

    /**
     * Encodes the specified UpdateCustomDefinitionRequest message. Does not implicitly {@link UpdateCustomDefinitionRequest.verify|verify} messages.
     * @param message UpdateCustomDefinitionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateCustomDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateCustomDefinitionRequest message, length delimited. Does not implicitly {@link UpdateCustomDefinitionRequest.verify|verify} messages.
     * @param message UpdateCustomDefinitionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateCustomDefinitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateCustomDefinitionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateCustomDefinitionRequest;

    /**
     * Decodes an UpdateCustomDefinitionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateCustomDefinitionRequest;

    /**
     * Verifies an UpdateCustomDefinitionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateCustomDefinitionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateCustomDefinitionRequest
     */
    public static fromObject(object: { [k: string]: any }): UpdateCustomDefinitionRequest;

    /**
     * Creates a plain object from an UpdateCustomDefinitionRequest message. Also converts values to other types if specified.
     * @param message UpdateCustomDefinitionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateCustomDefinitionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateCustomDefinitionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateCustomDefinitionResponse. */
export interface IUpdateCustomDefinitionResponse {

    /** UpdateCustomDefinitionResponse instance */
    instance?: (custom_definition.ICustomDefinitionProps|null);
}

/** Represents an UpdateCustomDefinitionResponse. */
export class UpdateCustomDefinitionResponse implements IUpdateCustomDefinitionResponse {

    /**
     * Constructs a new UpdateCustomDefinitionResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateCustomDefinitionResponse);

    /** UpdateCustomDefinitionResponse instance. */
    public instance?: (custom_definition.ICustomDefinitionProps|null);

    /**
     * Creates a new UpdateCustomDefinitionResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateCustomDefinitionResponse instance
     */
    public static create(properties?: IUpdateCustomDefinitionResponse): UpdateCustomDefinitionResponse;

    /**
     * Encodes the specified UpdateCustomDefinitionResponse message. Does not implicitly {@link UpdateCustomDefinitionResponse.verify|verify} messages.
     * @param message UpdateCustomDefinitionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateCustomDefinitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateCustomDefinitionResponse message, length delimited. Does not implicitly {@link UpdateCustomDefinitionResponse.verify|verify} messages.
     * @param message UpdateCustomDefinitionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateCustomDefinitionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateCustomDefinitionResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateCustomDefinitionResponse;

    /**
     * Decodes an UpdateCustomDefinitionResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateCustomDefinitionResponse;

    /**
     * Verifies an UpdateCustomDefinitionResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateCustomDefinitionResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateCustomDefinitionResponse
     */
    public static fromObject(object: { [k: string]: any }): UpdateCustomDefinitionResponse;

    /**
     * Creates a plain object from an UpdateCustomDefinitionResponse message. Also converts values to other types if specified.
     * @param message UpdateCustomDefinitionResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateCustomDefinitionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateCustomDefinitionResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
