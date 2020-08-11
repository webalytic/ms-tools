/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.error = (function() {

    /**
     * Namespace error.
     * @exports error
     * @namespace
     */
    var error = {};

    error.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof error
         * @interface IError
         * @property {number|null} [code] Error code
         * @property {string|null} [message] Error message
         * @property {error.Code|null} [status] Error status
         * @property {Array.<google.protobuf.IAny>|null} [details] Error details
         */

        /**
         * Constructs a new Error.
         * @memberof error
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {error.IError=} [properties] Properties to set
         */
        function Error(properties) {
            this.details = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error code.
         * @member {number} code
         * @memberof error.Error
         * @instance
         */
        Error.prototype.code = 0;

        /**
         * Error message.
         * @member {string} message
         * @memberof error.Error
         * @instance
         */
        Error.prototype.message = "";

        /**
         * Error status.
         * @member {error.Code} status
         * @memberof error.Error
         * @instance
         */
        Error.prototype.status = 0;

        /**
         * Error details.
         * @member {Array.<google.protobuf.IAny>} details
         * @memberof error.Error
         * @instance
         */
        Error.prototype.details = $util.emptyArray;

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof error.Error
         * @static
         * @param {error.IError=} [properties] Properties to set
         * @returns {error.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link error.Error.verify|verify} messages.
         * @function encode
         * @memberof error.Error
         * @static
         * @param {error.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.details != null && message.details.length)
                for (var i = 0; i < message.details.length; ++i)
                    $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link error.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.Error
         * @static
         * @param {error.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof error.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    if (!(message.details && message.details.length))
                        message.details = [];
                    message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof error.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 16:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                    break;
                }
            if (message.details != null && message.hasOwnProperty("details")) {
                if (!Array.isArray(message.details))
                    return "details: array expected";
                for (var i = 0; i < message.details.length; ++i) {
                    var error = $root.google.protobuf.Any.verify(message.details[i]);
                    if (error)
                        return "details." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.error.Error)
                return object;
            var message = new $root.error.Error();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            switch (object.status) {
            case "OK":
            case 0:
                message.status = 0;
                break;
            case "CANCELLED":
            case 1:
                message.status = 1;
                break;
            case "UNKNOWN":
            case 2:
                message.status = 2;
                break;
            case "INVALID_ARGUMENT":
            case 3:
                message.status = 3;
                break;
            case "DEADLINE_EXCEEDED":
            case 4:
                message.status = 4;
                break;
            case "NOT_FOUND":
            case 5:
                message.status = 5;
                break;
            case "ALREADY_EXISTS":
            case 6:
                message.status = 6;
                break;
            case "PERMISSION_DENIED":
            case 7:
                message.status = 7;
                break;
            case "UNAUTHENTICATED":
            case 16:
                message.status = 16;
                break;
            case "RESOURCE_EXHAUSTED":
            case 8:
                message.status = 8;
                break;
            case "FAILED_PRECONDITION":
            case 9:
                message.status = 9;
                break;
            case "ABORTED":
            case 10:
                message.status = 10;
                break;
            case "OUT_OF_RANGE":
            case 11:
                message.status = 11;
                break;
            case "UNIMPLEMENTED":
            case 12:
                message.status = 12;
                break;
            case "INTERNAL":
            case 13:
                message.status = 13;
                break;
            case "UNAVAILABLE":
            case 14:
                message.status = 14;
                break;
            case "DATA_LOSS":
            case 15:
                message.status = 15;
                break;
            }
            if (object.details) {
                if (!Array.isArray(object.details))
                    throw TypeError(".error.Error.details: array expected");
                message.details = [];
                for (var i = 0; i < object.details.length; ++i) {
                    if (typeof object.details[i] !== "object")
                        throw TypeError(".error.Error.details: object expected");
                    message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.Error
         * @static
         * @param {error.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.details = [];
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.status = options.enums === String ? "OK" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.error.Code[message.status] : message.status;
            if (message.details && message.details.length) {
                object.details = [];
                for (var j = 0; j < message.details.length; ++j)
                    object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
            }
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof error.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    /**
     * Code enum.
     * @name error.Code
     * @enum {number}
     * @property {number} OK=0 OK value
     * @property {number} CANCELLED=1 CANCELLED value
     * @property {number} UNKNOWN=2 UNKNOWN value
     * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
     * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
     * @property {number} NOT_FOUND=5 NOT_FOUND value
     * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
     * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
     * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
     * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
     * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
     * @property {number} ABORTED=10 ABORTED value
     * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
     * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
     * @property {number} INTERNAL=13 INTERNAL value
     * @property {number} UNAVAILABLE=14 UNAVAILABLE value
     * @property {number} DATA_LOSS=15 DATA_LOSS value
     */
    error.Code = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "CANCELLED"] = 1;
        values[valuesById[2] = "UNKNOWN"] = 2;
        values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
        values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
        values[valuesById[5] = "NOT_FOUND"] = 5;
        values[valuesById[6] = "ALREADY_EXISTS"] = 6;
        values[valuesById[7] = "PERMISSION_DENIED"] = 7;
        values[valuesById[16] = "UNAUTHENTICATED"] = 16;
        values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
        values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
        values[valuesById[10] = "ABORTED"] = 10;
        values[valuesById[11] = "OUT_OF_RANGE"] = 11;
        values[valuesById[12] = "UNIMPLEMENTED"] = 12;
        values[valuesById[13] = "INTERNAL"] = 13;
        values[valuesById[14] = "UNAVAILABLE"] = 14;
        values[valuesById[15] = "DATA_LOSS"] = 15;
        return values;
    })();

    return error;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
