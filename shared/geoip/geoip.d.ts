import * as $protobuf from "protobufjs";
/** Represents a Geoip */
export class Geoip extends $protobuf.rpc.Service {

    /**
     * Constructs a new Geoip service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Geoip service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Geoip;

    /**
     * Calls LookUp.
     * @param request LookUpRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and LookUpResponse
     */
    public lookUp(request: ILookUpRequest, callback: Geoip.LookUpCallback): void;

    /**
     * Calls LookUp.
     * @param request LookUpRequest message or plain object
     * @returns Promise
     */
    public lookUp(request: ILookUpRequest): Promise<LookUpResponse>;
}

export namespace Geoip {

    /**
     * Callback as used by {@link Geoip#lookUp}.
     * @param error Error, if any
     * @param [response] LookUpResponse
     */
    type LookUpCallback = (error: (Error|null), response?: LookUpResponse) => void;
}

/** Properties of a LookUpRequest. */
export interface ILookUpRequest {

    /** LookUpRequest ip */
    ip?: (string|null);
}

/** Represents a LookUpRequest. */
export class LookUpRequest implements ILookUpRequest {

    /**
     * Constructs a new LookUpRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILookUpRequest);

    /** LookUpRequest ip. */
    public ip: string;

    /**
     * Creates a new LookUpRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LookUpRequest instance
     */
    public static create(properties?: ILookUpRequest): LookUpRequest;

    /**
     * Encodes the specified LookUpRequest message. Does not implicitly {@link LookUpRequest.verify|verify} messages.
     * @param message LookUpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILookUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LookUpRequest message, length delimited. Does not implicitly {@link LookUpRequest.verify|verify} messages.
     * @param message LookUpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILookUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LookUpRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LookUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LookUpRequest;

    /**
     * Decodes a LookUpRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LookUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LookUpRequest;

    /**
     * Verifies a LookUpRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LookUpRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LookUpRequest
     */
    public static fromObject(object: { [k: string]: any }): LookUpRequest;

    /**
     * Creates a plain object from a LookUpRequest message. Also converts values to other types if specified.
     * @param message LookUpRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LookUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LookUpRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LookUpResponse. */
export interface ILookUpResponse {

    /** LookUpResponse country */
    country?: (string|null);

    /** LookUpResponse city */
    city?: (string|null);
}

/** Represents a LookUpResponse. */
export class LookUpResponse implements ILookUpResponse {

    /**
     * Constructs a new LookUpResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILookUpResponse);

    /** LookUpResponse country. */
    public country: string;

    /** LookUpResponse city. */
    public city: string;

    /**
     * Creates a new LookUpResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LookUpResponse instance
     */
    public static create(properties?: ILookUpResponse): LookUpResponse;

    /**
     * Encodes the specified LookUpResponse message. Does not implicitly {@link LookUpResponse.verify|verify} messages.
     * @param message LookUpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILookUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LookUpResponse message, length delimited. Does not implicitly {@link LookUpResponse.verify|verify} messages.
     * @param message LookUpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILookUpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LookUpResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LookUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LookUpResponse;

    /**
     * Decodes a LookUpResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LookUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LookUpResponse;

    /**
     * Verifies a LookUpResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LookUpResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LookUpResponse
     */
    public static fromObject(object: { [k: string]: any }): LookUpResponse;

    /**
     * Creates a plain object from a LookUpResponse message. Also converts values to other types if specified.
     * @param message LookUpResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LookUpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LookUpResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
