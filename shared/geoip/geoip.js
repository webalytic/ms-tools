/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Geoip = (function() {

    /**
     * Constructs a new Geoip service.
     * @exports Geoip
     * @classdesc Represents a Geoip
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Geoip(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Geoip.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Geoip;

    /**
     * Creates new Geoip service using the specified rpc implementation.
     * @function create
     * @memberof Geoip
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Geoip} RPC service. Useful where requests and/or responses are streamed.
     */
    Geoip.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Geoip#lookUp}.
     * @memberof Geoip
     * @typedef LookUpCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {LookUpResponse} [response] LookUpResponse
     */

    /**
     * Calls LookUp.
     * @function lookUp
     * @memberof Geoip
     * @instance
     * @param {ILookUpRequest} request LookUpRequest message or plain object
     * @param {Geoip.LookUpCallback} callback Node-style callback called with the error, if any, and LookUpResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Geoip.prototype.lookUp = function lookUp(request, callback) {
        return this.rpcCall(lookUp, $root.LookUpRequest, $root.LookUpResponse, request, callback);
    }, "name", { value: "LookUp" });

    /**
     * Calls LookUp.
     * @function lookUp
     * @memberof Geoip
     * @instance
     * @param {ILookUpRequest} request LookUpRequest message or plain object
     * @returns {Promise<LookUpResponse>} Promise
     * @variation 2
     */

    return Geoip;
})();

$root.LookUpRequest = (function() {

    /**
     * Properties of a LookUpRequest.
     * @exports ILookUpRequest
     * @interface ILookUpRequest
     * @property {string|null} [ip] LookUpRequest ip
     */

    /**
     * Constructs a new LookUpRequest.
     * @exports LookUpRequest
     * @classdesc Represents a LookUpRequest.
     * @implements ILookUpRequest
     * @constructor
     * @param {ILookUpRequest=} [properties] Properties to set
     */
    function LookUpRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LookUpRequest ip.
     * @member {string} ip
     * @memberof LookUpRequest
     * @instance
     */
    LookUpRequest.prototype.ip = "";

    /**
     * Creates a new LookUpRequest instance using the specified properties.
     * @function create
     * @memberof LookUpRequest
     * @static
     * @param {ILookUpRequest=} [properties] Properties to set
     * @returns {LookUpRequest} LookUpRequest instance
     */
    LookUpRequest.create = function create(properties) {
        return new LookUpRequest(properties);
    };

    /**
     * Encodes the specified LookUpRequest message. Does not implicitly {@link LookUpRequest.verify|verify} messages.
     * @function encode
     * @memberof LookUpRequest
     * @static
     * @param {ILookUpRequest} message LookUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LookUpRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
        return writer;
    };

    /**
     * Encodes the specified LookUpRequest message, length delimited. Does not implicitly {@link LookUpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LookUpRequest
     * @static
     * @param {ILookUpRequest} message LookUpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LookUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LookUpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LookUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LookUpRequest} LookUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LookUpRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LookUpRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ip = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LookUpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LookUpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LookUpRequest} LookUpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LookUpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LookUpRequest message.
     * @function verify
     * @memberof LookUpRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LookUpRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        return null;
    };

    /**
     * Creates a LookUpRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LookUpRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LookUpRequest} LookUpRequest
     */
    LookUpRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LookUpRequest)
            return object;
        var message = new $root.LookUpRequest();
        if (object.ip != null)
            message.ip = String(object.ip);
        return message;
    };

    /**
     * Creates a plain object from a LookUpRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LookUpRequest
     * @static
     * @param {LookUpRequest} message LookUpRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LookUpRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ip = "";
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        return object;
    };

    /**
     * Converts this LookUpRequest to JSON.
     * @function toJSON
     * @memberof LookUpRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LookUpRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LookUpRequest;
})();

$root.LookUpResponse = (function() {

    /**
     * Properties of a LookUpResponse.
     * @exports ILookUpResponse
     * @interface ILookUpResponse
     * @property {string|null} [country] LookUpResponse country
     * @property {string|null} [city] LookUpResponse city
     */

    /**
     * Constructs a new LookUpResponse.
     * @exports LookUpResponse
     * @classdesc Represents a LookUpResponse.
     * @implements ILookUpResponse
     * @constructor
     * @param {ILookUpResponse=} [properties] Properties to set
     */
    function LookUpResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LookUpResponse country.
     * @member {string} country
     * @memberof LookUpResponse
     * @instance
     */
    LookUpResponse.prototype.country = "";

    /**
     * LookUpResponse city.
     * @member {string} city
     * @memberof LookUpResponse
     * @instance
     */
    LookUpResponse.prototype.city = "";

    /**
     * Creates a new LookUpResponse instance using the specified properties.
     * @function create
     * @memberof LookUpResponse
     * @static
     * @param {ILookUpResponse=} [properties] Properties to set
     * @returns {LookUpResponse} LookUpResponse instance
     */
    LookUpResponse.create = function create(properties) {
        return new LookUpResponse(properties);
    };

    /**
     * Encodes the specified LookUpResponse message. Does not implicitly {@link LookUpResponse.verify|verify} messages.
     * @function encode
     * @memberof LookUpResponse
     * @static
     * @param {ILookUpResponse} message LookUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LookUpResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.country != null && Object.hasOwnProperty.call(message, "country"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.country);
        if (message.city != null && Object.hasOwnProperty.call(message, "city"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.city);
        return writer;
    };

    /**
     * Encodes the specified LookUpResponse message, length delimited. Does not implicitly {@link LookUpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LookUpResponse
     * @static
     * @param {ILookUpResponse} message LookUpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LookUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LookUpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LookUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LookUpResponse} LookUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LookUpResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LookUpResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.country = reader.string();
                break;
            case 2:
                message.city = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LookUpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LookUpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LookUpResponse} LookUpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LookUpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LookUpResponse message.
     * @function verify
     * @memberof LookUpResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LookUpResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.country != null && message.hasOwnProperty("country"))
            if (!$util.isString(message.country))
                return "country: string expected";
        if (message.city != null && message.hasOwnProperty("city"))
            if (!$util.isString(message.city))
                return "city: string expected";
        return null;
    };

    /**
     * Creates a LookUpResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LookUpResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LookUpResponse} LookUpResponse
     */
    LookUpResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LookUpResponse)
            return object;
        var message = new $root.LookUpResponse();
        if (object.country != null)
            message.country = String(object.country);
        if (object.city != null)
            message.city = String(object.city);
        return message;
    };

    /**
     * Creates a plain object from a LookUpResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LookUpResponse
     * @static
     * @param {LookUpResponse} message LookUpResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LookUpResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.country = "";
            object.city = "";
        }
        if (message.country != null && message.hasOwnProperty("country"))
            object.country = message.country;
        if (message.city != null && message.hasOwnProperty("city"))
            object.city = message.city;
        return object;
    };

    /**
     * Converts this LookUpResponse to JSON.
     * @function toJSON
     * @memberof LookUpResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LookUpResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LookUpResponse;
})();

module.exports = $root;
