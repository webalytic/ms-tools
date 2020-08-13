import * as $protobuf from "protobufjs";
/** Namespace resource. */
export namespace resource {

    /** Properties of a ResourceProps. */
    interface IResourceProps {

        /** ResourceProps id */
        id?: (string|null);

        /** ResourceProps name */
        name?: (string|null);

        /** ResourceProps category */
        category?: (resource.ResourceCategory|null);

        /** ResourceProps defaultWebsiteUrl */
        defaultWebsiteUrl?: (string|null);

        /** ResourceProps createAt */
        createAt?: (string|null);

        /** ResourceProps updateAt */
        updateAt?: (string|null);
    }

    /** Represents a ResourceProps. */
    class ResourceProps implements IResourceProps {

        /**
         * Constructs a new ResourceProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: resource.IResourceProps);

        /** ResourceProps id. */
        public id: string;

        /** ResourceProps name. */
        public name: string;

        /** ResourceProps category. */
        public category: resource.ResourceCategory;

        /** ResourceProps defaultWebsiteUrl. */
        public defaultWebsiteUrl: string;

        /** ResourceProps createAt. */
        public createAt: string;

        /** ResourceProps updateAt. */
        public updateAt: string;

        /**
         * Creates a new ResourceProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceProps instance
         */
        public static create(properties?: resource.IResourceProps): resource.ResourceProps;

        /**
         * Encodes the specified ResourceProps message. Does not implicitly {@link resource.ResourceProps.verify|verify} messages.
         * @param message ResourceProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: resource.IResourceProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceProps message, length delimited. Does not implicitly {@link resource.ResourceProps.verify|verify} messages.
         * @param message ResourceProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: resource.IResourceProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resource.ResourceProps;

        /**
         * Decodes a ResourceProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resource.ResourceProps;

        /**
         * Verifies a ResourceProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceProps
         */
        public static fromObject(object: { [k: string]: any }): resource.ResourceProps;

        /**
         * Creates a plain object from a ResourceProps message. Also converts values to other types if specified.
         * @param message ResourceProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: resource.ResourceProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceProps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateResourceInput. */
    interface ICreateResourceInput {

        /** CreateResourceInput name */
        name?: (string|null);

        /** CreateResourceInput category */
        category?: (resource.ResourceCategory|null);

        /** CreateResourceInput defaultWebsiteUrl */
        defaultWebsiteUrl?: (string|null);
    }

    /** Represents a CreateResourceInput. */
    class CreateResourceInput implements ICreateResourceInput {

        /**
         * Constructs a new CreateResourceInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: resource.ICreateResourceInput);

        /** CreateResourceInput name. */
        public name: string;

        /** CreateResourceInput category. */
        public category: resource.ResourceCategory;

        /** CreateResourceInput defaultWebsiteUrl. */
        public defaultWebsiteUrl: string;

        /**
         * Creates a new CreateResourceInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateResourceInput instance
         */
        public static create(properties?: resource.ICreateResourceInput): resource.CreateResourceInput;

        /**
         * Encodes the specified CreateResourceInput message. Does not implicitly {@link resource.CreateResourceInput.verify|verify} messages.
         * @param message CreateResourceInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: resource.ICreateResourceInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateResourceInput message, length delimited. Does not implicitly {@link resource.CreateResourceInput.verify|verify} messages.
         * @param message CreateResourceInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: resource.ICreateResourceInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateResourceInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resource.CreateResourceInput;

        /**
         * Decodes a CreateResourceInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resource.CreateResourceInput;

        /**
         * Verifies a CreateResourceInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateResourceInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateResourceInput
         */
        public static fromObject(object: { [k: string]: any }): resource.CreateResourceInput;

        /**
         * Creates a plain object from a CreateResourceInput message. Also converts values to other types if specified.
         * @param message CreateResourceInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: resource.CreateResourceInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateResourceInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateResourceInput. */
    interface IUpdateResourceInput {

        /** UpdateResourceInput name */
        name?: (string|null);

        /** UpdateResourceInput category */
        category?: (resource.ResourceCategory|null);

        /** UpdateResourceInput defaultWebsiteUrl */
        defaultWebsiteUrl?: (string|null);
    }

    /** Represents an UpdateResourceInput. */
    class UpdateResourceInput implements IUpdateResourceInput {

        /**
         * Constructs a new UpdateResourceInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: resource.IUpdateResourceInput);

        /** UpdateResourceInput name. */
        public name: string;

        /** UpdateResourceInput category. */
        public category: resource.ResourceCategory;

        /** UpdateResourceInput defaultWebsiteUrl. */
        public defaultWebsiteUrl: string;

        /**
         * Creates a new UpdateResourceInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateResourceInput instance
         */
        public static create(properties?: resource.IUpdateResourceInput): resource.UpdateResourceInput;

        /**
         * Encodes the specified UpdateResourceInput message. Does not implicitly {@link resource.UpdateResourceInput.verify|verify} messages.
         * @param message UpdateResourceInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: resource.IUpdateResourceInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateResourceInput message, length delimited. Does not implicitly {@link resource.UpdateResourceInput.verify|verify} messages.
         * @param message UpdateResourceInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: resource.IUpdateResourceInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateResourceInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resource.UpdateResourceInput;

        /**
         * Decodes an UpdateResourceInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resource.UpdateResourceInput;

        /**
         * Verifies an UpdateResourceInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateResourceInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateResourceInput
         */
        public static fromObject(object: { [k: string]: any }): resource.UpdateResourceInput;

        /**
         * Creates a plain object from an UpdateResourceInput message. Also converts values to other types if specified.
         * @param message UpdateResourceInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: resource.UpdateResourceInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateResourceInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResourceFilter. */
    interface IResourceFilter {

        /** ResourceFilter id */
        id?: (string|null);

        /** ResourceFilter name */
        name?: (string|null);
    }

    /** Represents a ResourceFilter. */
    class ResourceFilter implements IResourceFilter {

        /**
         * Constructs a new ResourceFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: resource.IResourceFilter);

        /** ResourceFilter id. */
        public id: string;

        /** ResourceFilter name. */
        public name: string;

        /**
         * Creates a new ResourceFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceFilter instance
         */
        public static create(properties?: resource.IResourceFilter): resource.ResourceFilter;

        /**
         * Encodes the specified ResourceFilter message. Does not implicitly {@link resource.ResourceFilter.verify|verify} messages.
         * @param message ResourceFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: resource.IResourceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceFilter message, length delimited. Does not implicitly {@link resource.ResourceFilter.verify|verify} messages.
         * @param message ResourceFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: resource.IResourceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): resource.ResourceFilter;

        /**
         * Decodes a ResourceFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): resource.ResourceFilter;

        /**
         * Verifies a ResourceFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceFilter
         */
        public static fromObject(object: { [k: string]: any }): resource.ResourceFilter;

        /**
         * Creates a plain object from a ResourceFilter message. Also converts values to other types if specified.
         * @param message ResourceFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: resource.ResourceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ResourceCategory enum. */
    enum ResourceCategory {
        UNSPECIFIED = 0,
        ARTS_AND_ENTERTAINMENT = 1,
        AUTOMOTIVE = 2,
        BEAUTY_AND_FITNESS = 3,
        BOOKS_AND_LITERATURE = 4,
        BUSINESS_AND_INDUSTRIAL_MARKETS = 5,
        TECHNOLOGY = 6,
        FINANCE = 7,
        FOOD_AND_DRINK = 8,
        GAMES = 9,
        HEALTHCARE = 10,
        HOBBIES_AND_LEISURE = 11,
        HOME_AND_GARDEN = 12,
        INTERNET_AND_TELECOM = 13,
        JOBS_AND_EDUCATION = 14,
        LAW_AND_GOVERNMENT = 15,
        NEWS = 16,
        ONLINE_COMMUNITIES = 17,
        PEOPLE_AND_SOCIETY = 18,
        PETS_AND_ANIMALS = 19,
        REAL_ESTATE = 20,
        REFERENCE = 21,
        SCIENCE = 22,
        SHOPPING = 23,
        SPORTS = 24,
        TRAVEL = 25,
        OTHER = 26
    }
}

/** Represents a ResourceService */
export class ResourceService extends $protobuf.rpc.Service {

    /**
     * Constructs a new ResourceService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new ResourceService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ResourceService;

    /**
     * Calls ListResources.
     * @param request ListResourcesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ListResourcesResponse
     */
    public listResources(request: IListResourcesRequest, callback: ResourceService.ListResourcesCallback): void;

    /**
     * Calls ListResources.
     * @param request ListResourcesRequest message or plain object
     * @returns Promise
     */
    public listResources(request: IListResourcesRequest): Promise<ListResourcesResponse>;

    /**
     * Calls CreateResource.
     * @param request CreateResourceRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ResourceProps
     */
    public createResource(request: ICreateResourceRequest, callback: ResourceService.CreateResourceCallback): void;

    /**
     * Calls CreateResource.
     * @param request CreateResourceRequest message or plain object
     * @returns Promise
     */
    public createResource(request: ICreateResourceRequest): Promise<resource.ResourceProps>;

    /**
     * Calls UpdateResource.
     * @param request UpdateResourceRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ResourceProps
     */
    public updateResource(request: IUpdateResourceRequest, callback: ResourceService.UpdateResourceCallback): void;

    /**
     * Calls UpdateResource.
     * @param request UpdateResourceRequest message or plain object
     * @returns Promise
     */
    public updateResource(request: IUpdateResourceRequest): Promise<resource.ResourceProps>;
}

export namespace ResourceService {

    /**
     * Callback as used by {@link ResourceService#listResources}.
     * @param error Error, if any
     * @param [response] ListResourcesResponse
     */
    type ListResourcesCallback = (error: (Error|null), response?: ListResourcesResponse) => void;

    /**
     * Callback as used by {@link ResourceService#createResource}.
     * @param error Error, if any
     * @param [response] ResourceProps
     */
    type CreateResourceCallback = (error: (Error|null), response?: resource.ResourceProps) => void;

    /**
     * Callback as used by {@link ResourceService#updateResource}.
     * @param error Error, if any
     * @param [response] ResourceProps
     */
    type UpdateResourceCallback = (error: (Error|null), response?: resource.ResourceProps) => void;
}

/** Properties of a ListResourcesRequest. */
export interface IListResourcesRequest {

    /** ListResourcesRequest filter */
    filter?: (resource.IResourceFilter|null);

    /** ListResourcesRequest limit */
    limit?: (number|null);

    /** ListResourcesRequest cursor */
    cursor?: (string|null);

    /** ListResourcesRequest orderBy */
    orderBy?: (string|null);
}

/** Represents a ListResourcesRequest. */
export class ListResourcesRequest implements IListResourcesRequest {

    /**
     * Constructs a new ListResourcesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListResourcesRequest);

    /** ListResourcesRequest filter. */
    public filter?: (resource.IResourceFilter|null);

    /** ListResourcesRequest limit. */
    public limit: number;

    /** ListResourcesRequest cursor. */
    public cursor: string;

    /** ListResourcesRequest orderBy. */
    public orderBy: string;

    /**
     * Creates a new ListResourcesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListResourcesRequest instance
     */
    public static create(properties?: IListResourcesRequest): ListResourcesRequest;

    /**
     * Encodes the specified ListResourcesRequest message. Does not implicitly {@link ListResourcesRequest.verify|verify} messages.
     * @param message ListResourcesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListResourcesRequest message, length delimited. Does not implicitly {@link ListResourcesRequest.verify|verify} messages.
     * @param message ListResourcesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListResourcesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListResourcesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListResourcesRequest;

    /**
     * Decodes a ListResourcesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListResourcesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListResourcesRequest;

    /**
     * Verifies a ListResourcesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListResourcesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListResourcesRequest
     */
    public static fromObject(object: { [k: string]: any }): ListResourcesRequest;

    /**
     * Creates a plain object from a ListResourcesRequest message. Also converts values to other types if specified.
     * @param message ListResourcesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListResourcesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListResourcesResponse. */
export interface IListResourcesResponse {

    /** ListResourcesResponse resources */
    resources?: (resource.IResourceProps[]|null);

    /** ListResourcesResponse count */
    count?: (string|null);

    /** ListResourcesResponse cursor */
    cursor?: (string|null);
}

/** Represents a ListResourcesResponse. */
export class ListResourcesResponse implements IListResourcesResponse {

    /**
     * Constructs a new ListResourcesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListResourcesResponse);

    /** ListResourcesResponse resources. */
    public resources: resource.IResourceProps[];

    /** ListResourcesResponse count. */
    public count: string;

    /** ListResourcesResponse cursor. */
    public cursor: string;

    /**
     * Creates a new ListResourcesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListResourcesResponse instance
     */
    public static create(properties?: IListResourcesResponse): ListResourcesResponse;

    /**
     * Encodes the specified ListResourcesResponse message. Does not implicitly {@link ListResourcesResponse.verify|verify} messages.
     * @param message ListResourcesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListResourcesResponse message, length delimited. Does not implicitly {@link ListResourcesResponse.verify|verify} messages.
     * @param message ListResourcesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListResourcesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListResourcesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListResourcesResponse;

    /**
     * Decodes a ListResourcesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListResourcesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListResourcesResponse;

    /**
     * Verifies a ListResourcesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListResourcesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListResourcesResponse
     */
    public static fromObject(object: { [k: string]: any }): ListResourcesResponse;

    /**
     * Creates a plain object from a ListResourcesResponse message. Also converts values to other types if specified.
     * @param message ListResourcesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListResourcesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateResourceRequest. */
export interface ICreateResourceRequest {

    /** CreateResourceRequest data */
    data?: (resource.ICreateResourceInput|null);
}

/** Represents a CreateResourceRequest. */
export class CreateResourceRequest implements ICreateResourceRequest {

    /**
     * Constructs a new CreateResourceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateResourceRequest);

    /** CreateResourceRequest data. */
    public data?: (resource.ICreateResourceInput|null);

    /**
     * Creates a new CreateResourceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateResourceRequest instance
     */
    public static create(properties?: ICreateResourceRequest): CreateResourceRequest;

    /**
     * Encodes the specified CreateResourceRequest message. Does not implicitly {@link CreateResourceRequest.verify|verify} messages.
     * @param message CreateResourceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateResourceRequest message, length delimited. Does not implicitly {@link CreateResourceRequest.verify|verify} messages.
     * @param message CreateResourceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateResourceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateResourceRequest;

    /**
     * Decodes a CreateResourceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateResourceRequest;

    /**
     * Verifies a CreateResourceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateResourceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateResourceRequest
     */
    public static fromObject(object: { [k: string]: any }): CreateResourceRequest;

    /**
     * Creates a plain object from a CreateResourceRequest message. Also converts values to other types if specified.
     * @param message CreateResourceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateResourceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateResourceResponse. */
export interface ICreateResourceResponse {

    /** CreateResourceResponse instance */
    instance?: (resource.IResourceProps|null);
}

/** Represents a CreateResourceResponse. */
export class CreateResourceResponse implements ICreateResourceResponse {

    /**
     * Constructs a new CreateResourceResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateResourceResponse);

    /** CreateResourceResponse instance. */
    public instance?: (resource.IResourceProps|null);

    /**
     * Creates a new CreateResourceResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateResourceResponse instance
     */
    public static create(properties?: ICreateResourceResponse): CreateResourceResponse;

    /**
     * Encodes the specified CreateResourceResponse message. Does not implicitly {@link CreateResourceResponse.verify|verify} messages.
     * @param message CreateResourceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateResourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateResourceResponse message, length delimited. Does not implicitly {@link CreateResourceResponse.verify|verify} messages.
     * @param message CreateResourceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateResourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateResourceResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateResourceResponse;

    /**
     * Decodes a CreateResourceResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateResourceResponse;

    /**
     * Verifies a CreateResourceResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateResourceResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateResourceResponse
     */
    public static fromObject(object: { [k: string]: any }): CreateResourceResponse;

    /**
     * Creates a plain object from a CreateResourceResponse message. Also converts values to other types if specified.
     * @param message CreateResourceResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateResourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateResourceResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateResourceRequest. */
export interface IUpdateResourceRequest {

    /** UpdateResourceRequest id */
    id?: (string|null);

    /** UpdateResourceRequest data */
    data?: (resource.IUpdateResourceInput|null);
}

/** Represents an UpdateResourceRequest. */
export class UpdateResourceRequest implements IUpdateResourceRequest {

    /**
     * Constructs a new UpdateResourceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateResourceRequest);

    /** UpdateResourceRequest id. */
    public id: string;

    /** UpdateResourceRequest data. */
    public data?: (resource.IUpdateResourceInput|null);

    /**
     * Creates a new UpdateResourceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateResourceRequest instance
     */
    public static create(properties?: IUpdateResourceRequest): UpdateResourceRequest;

    /**
     * Encodes the specified UpdateResourceRequest message. Does not implicitly {@link UpdateResourceRequest.verify|verify} messages.
     * @param message UpdateResourceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateResourceRequest message, length delimited. Does not implicitly {@link UpdateResourceRequest.verify|verify} messages.
     * @param message UpdateResourceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateResourceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateResourceRequest;

    /**
     * Decodes an UpdateResourceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateResourceRequest;

    /**
     * Verifies an UpdateResourceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateResourceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateResourceRequest
     */
    public static fromObject(object: { [k: string]: any }): UpdateResourceRequest;

    /**
     * Creates a plain object from an UpdateResourceRequest message. Also converts values to other types if specified.
     * @param message UpdateResourceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateResourceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UpdateResourceResponse. */
export interface IUpdateResourceResponse {

    /** UpdateResourceResponse instance */
    instance?: (resource.IResourceProps|null);
}

/** Represents an UpdateResourceResponse. */
export class UpdateResourceResponse implements IUpdateResourceResponse {

    /**
     * Constructs a new UpdateResourceResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateResourceResponse);

    /** UpdateResourceResponse instance. */
    public instance?: (resource.IResourceProps|null);

    /**
     * Creates a new UpdateResourceResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateResourceResponse instance
     */
    public static create(properties?: IUpdateResourceResponse): UpdateResourceResponse;

    /**
     * Encodes the specified UpdateResourceResponse message. Does not implicitly {@link UpdateResourceResponse.verify|verify} messages.
     * @param message UpdateResourceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateResourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateResourceResponse message, length delimited. Does not implicitly {@link UpdateResourceResponse.verify|verify} messages.
     * @param message UpdateResourceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateResourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateResourceResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateResourceResponse;

    /**
     * Decodes an UpdateResourceResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateResourceResponse;

    /**
     * Verifies an UpdateResourceResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateResourceResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateResourceResponse
     */
    public static fromObject(object: { [k: string]: any }): UpdateResourceResponse;

    /**
     * Creates a plain object from an UpdateResourceResponse message. Also converts values to other types if specified.
     * @param message UpdateResourceResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateResourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateResourceResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
