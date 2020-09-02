/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.custom_definition = (function() {

    /**
     * Namespace custom_definition.
     * @exports custom_definition
     * @namespace
     */
    var custom_definition = {};

    /**
     * CustomDefinitionType enum.
     * @name custom_definition.CustomDefinitionType
     * @enum {number}
     * @property {number} EMPTY_TYPE=0 EMPTY_TYPE value
     * @property {number} DIMENSION=1 DIMENSION value
     * @property {number} METRIC=2 METRIC value
     */
    custom_definition.CustomDefinitionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EMPTY_TYPE"] = 0;
        values[valuesById[1] = "DIMENSION"] = 1;
        values[valuesById[2] = "METRIC"] = 2;
        return values;
    })();

    /**
     * CustomDefinitionScope enum.
     * @name custom_definition.CustomDefinitionScope
     * @enum {number}
     * @property {number} EMPTY_SCOPE=0 EMPTY_SCOPE value
     * @property {number} HIT=1 HIT value
     * @property {number} SESSION=2 SESSION value
     */
    custom_definition.CustomDefinitionScope = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EMPTY_SCOPE"] = 0;
        values[valuesById[1] = "HIT"] = 1;
        values[valuesById[2] = "SESSION"] = 2;
        return values;
    })();

    custom_definition.CustomDefinitionProps = (function() {

        /**
         * Properties of a CustomDefinitionProps.
         * @memberof custom_definition
         * @interface ICustomDefinitionProps
         * @property {string|null} [id] CustomDefinitionProps id
         * @property {string|null} [resourceId] CustomDefinitionProps resourceId
         * @property {number|null} [index] CustomDefinitionProps index
         * @property {custom_definition.CustomDefinitionType|null} [type] CustomDefinitionProps type
         * @property {custom_definition.CustomDefinitionScope|null} [scope] CustomDefinitionProps scope
         * @property {string|null} [name] CustomDefinitionProps name
         * @property {boolean|null} [active] CustomDefinitionProps active
         */

        /**
         * Constructs a new CustomDefinitionProps.
         * @memberof custom_definition
         * @classdesc Represents a CustomDefinitionProps.
         * @implements ICustomDefinitionProps
         * @constructor
         * @param {custom_definition.ICustomDefinitionProps=} [properties] Properties to set
         */
        function CustomDefinitionProps(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomDefinitionProps id.
         * @member {string} id
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.id = "";

        /**
         * CustomDefinitionProps resourceId.
         * @member {string} resourceId
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.resourceId = "";

        /**
         * CustomDefinitionProps index.
         * @member {number} index
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.index = 0;

        /**
         * CustomDefinitionProps type.
         * @member {custom_definition.CustomDefinitionType} type
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.type = 0;

        /**
         * CustomDefinitionProps scope.
         * @member {custom_definition.CustomDefinitionScope} scope
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.scope = 0;

        /**
         * CustomDefinitionProps name.
         * @member {string} name
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.name = "";

        /**
         * CustomDefinitionProps active.
         * @member {boolean} active
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         */
        CustomDefinitionProps.prototype.active = false;

        /**
         * Creates a new CustomDefinitionProps instance using the specified properties.
         * @function create
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {custom_definition.ICustomDefinitionProps=} [properties] Properties to set
         * @returns {custom_definition.CustomDefinitionProps} CustomDefinitionProps instance
         */
        CustomDefinitionProps.create = function create(properties) {
            return new CustomDefinitionProps(properties);
        };

        /**
         * Encodes the specified CustomDefinitionProps message. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @function encode
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {custom_definition.ICustomDefinitionProps} message CustomDefinitionProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomDefinitionProps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.index);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.scope);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.active);
            return writer;
        };

        /**
         * Encodes the specified CustomDefinitionProps message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {custom_definition.ICustomDefinitionProps} message CustomDefinitionProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomDefinitionProps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer.
         * @function decode
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {custom_definition.CustomDefinitionProps} CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomDefinitionProps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.custom_definition.CustomDefinitionProps();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.resourceId = reader.string();
                    break;
                case 3:
                    message.index = reader.uint32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.scope = reader.int32();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {custom_definition.CustomDefinitionProps} CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomDefinitionProps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomDefinitionProps message.
         * @function verify
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomDefinitionProps.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };

        /**
         * Creates a CustomDefinitionProps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {custom_definition.CustomDefinitionProps} CustomDefinitionProps
         */
        CustomDefinitionProps.fromObject = function fromObject(object) {
            if (object instanceof $root.custom_definition.CustomDefinitionProps)
                return object;
            var message = new $root.custom_definition.CustomDefinitionProps();
            if (object.id != null)
                message.id = String(object.id);
            if (object.resourceId != null)
                message.resourceId = String(object.resourceId);
            if (object.index != null)
                message.index = object.index >>> 0;
            switch (object.type) {
            case "EMPTY_TYPE":
            case 0:
                message.type = 0;
                break;
            case "DIMENSION":
            case 1:
                message.type = 1;
                break;
            case "METRIC":
            case 2:
                message.type = 2;
                break;
            }
            switch (object.scope) {
            case "EMPTY_SCOPE":
            case 0:
                message.scope = 0;
                break;
            case "HIT":
            case 1:
                message.scope = 1;
                break;
            case "SESSION":
            case 2:
                message.scope = 2;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };

        /**
         * Creates a plain object from a CustomDefinitionProps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof custom_definition.CustomDefinitionProps
         * @static
         * @param {custom_definition.CustomDefinitionProps} message CustomDefinitionProps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomDefinitionProps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.resourceId = "";
                object.index = 0;
                object.type = options.enums === String ? "EMPTY_TYPE" : 0;
                object.scope = options.enums === String ? "EMPTY_SCOPE" : 0;
                object.name = "";
                object.active = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                object.resourceId = message.resourceId;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.custom_definition.CustomDefinitionType[message.type] : message.type;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.custom_definition.CustomDefinitionScope[message.scope] : message.scope;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };

        /**
         * Converts this CustomDefinitionProps to JSON.
         * @function toJSON
         * @memberof custom_definition.CustomDefinitionProps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomDefinitionProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomDefinitionProps;
    })();

    custom_definition.CreateCustomDefinitionInput = (function() {

        /**
         * Properties of a CreateCustomDefinitionInput.
         * @memberof custom_definition
         * @interface ICreateCustomDefinitionInput
         * @property {string|null} [resourceId] CreateCustomDefinitionInput resourceId
         * @property {number|null} [index] CreateCustomDefinitionInput index
         * @property {custom_definition.CustomDefinitionType|null} [type] CreateCustomDefinitionInput type
         * @property {custom_definition.CustomDefinitionScope|null} [scope] CreateCustomDefinitionInput scope
         * @property {string|null} [name] CreateCustomDefinitionInput name
         * @property {boolean|null} [active] CreateCustomDefinitionInput active
         */

        /**
         * Constructs a new CreateCustomDefinitionInput.
         * @memberof custom_definition
         * @classdesc Represents a CreateCustomDefinitionInput.
         * @implements ICreateCustomDefinitionInput
         * @constructor
         * @param {custom_definition.ICreateCustomDefinitionInput=} [properties] Properties to set
         */
        function CreateCustomDefinitionInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateCustomDefinitionInput resourceId.
         * @member {string} resourceId
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.resourceId = "";

        /**
         * CreateCustomDefinitionInput index.
         * @member {number} index
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.index = 0;

        /**
         * CreateCustomDefinitionInput type.
         * @member {custom_definition.CustomDefinitionType} type
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.type = 0;

        /**
         * CreateCustomDefinitionInput scope.
         * @member {custom_definition.CustomDefinitionScope} scope
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.scope = 0;

        /**
         * CreateCustomDefinitionInput name.
         * @member {string} name
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.name = "";

        /**
         * CreateCustomDefinitionInput active.
         * @member {boolean} active
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         */
        CreateCustomDefinitionInput.prototype.active = false;

        /**
         * Creates a new CreateCustomDefinitionInput instance using the specified properties.
         * @function create
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {custom_definition.ICreateCustomDefinitionInput=} [properties] Properties to set
         * @returns {custom_definition.CreateCustomDefinitionInput} CreateCustomDefinitionInput instance
         */
        CreateCustomDefinitionInput.create = function create(properties) {
            return new CreateCustomDefinitionInput(properties);
        };

        /**
         * Encodes the specified CreateCustomDefinitionInput message. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @function encode
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {custom_definition.ICreateCustomDefinitionInput} message CreateCustomDefinitionInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCustomDefinitionInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.scope);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.active);
            return writer;
        };

        /**
         * Encodes the specified CreateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {custom_definition.ICreateCustomDefinitionInput} message CreateCustomDefinitionInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCustomDefinitionInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer.
         * @function decode
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {custom_definition.CreateCustomDefinitionInput} CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCustomDefinitionInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.custom_definition.CreateCustomDefinitionInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.scope = reader.int32();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {custom_definition.CreateCustomDefinitionInput} CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCustomDefinitionInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateCustomDefinitionInput message.
         * @function verify
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateCustomDefinitionInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };

        /**
         * Creates a CreateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {custom_definition.CreateCustomDefinitionInput} CreateCustomDefinitionInput
         */
        CreateCustomDefinitionInput.fromObject = function fromObject(object) {
            if (object instanceof $root.custom_definition.CreateCustomDefinitionInput)
                return object;
            var message = new $root.custom_definition.CreateCustomDefinitionInput();
            if (object.resourceId != null)
                message.resourceId = String(object.resourceId);
            if (object.index != null)
                message.index = object.index >>> 0;
            switch (object.type) {
            case "EMPTY_TYPE":
            case 0:
                message.type = 0;
                break;
            case "DIMENSION":
            case 1:
                message.type = 1;
                break;
            case "METRIC":
            case 2:
                message.type = 2;
                break;
            }
            switch (object.scope) {
            case "EMPTY_SCOPE":
            case 0:
                message.scope = 0;
                break;
            case "HIT":
            case 1:
                message.scope = 1;
                break;
            case "SESSION":
            case 2:
                message.scope = 2;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };

        /**
         * Creates a plain object from a CreateCustomDefinitionInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @static
         * @param {custom_definition.CreateCustomDefinitionInput} message CreateCustomDefinitionInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateCustomDefinitionInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.resourceId = "";
                object.index = 0;
                object.type = options.enums === String ? "EMPTY_TYPE" : 0;
                object.scope = options.enums === String ? "EMPTY_SCOPE" : 0;
                object.name = "";
                object.active = false;
            }
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                object.resourceId = message.resourceId;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.custom_definition.CustomDefinitionType[message.type] : message.type;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.custom_definition.CustomDefinitionScope[message.scope] : message.scope;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };

        /**
         * Converts this CreateCustomDefinitionInput to JSON.
         * @function toJSON
         * @memberof custom_definition.CreateCustomDefinitionInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateCustomDefinitionInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateCustomDefinitionInput;
    })();

    custom_definition.UpdateCustomDefinitionInput = (function() {

        /**
         * Properties of an UpdateCustomDefinitionInput.
         * @memberof custom_definition
         * @interface IUpdateCustomDefinitionInput
         * @property {string|null} [name] UpdateCustomDefinitionInput name
         * @property {custom_definition.CustomDefinitionScope|null} [scope] UpdateCustomDefinitionInput scope
         * @property {boolean|null} [active] UpdateCustomDefinitionInput active
         */

        /**
         * Constructs a new UpdateCustomDefinitionInput.
         * @memberof custom_definition
         * @classdesc Represents an UpdateCustomDefinitionInput.
         * @implements IUpdateCustomDefinitionInput
         * @constructor
         * @param {custom_definition.IUpdateCustomDefinitionInput=} [properties] Properties to set
         */
        function UpdateCustomDefinitionInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateCustomDefinitionInput name.
         * @member {string} name
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @instance
         */
        UpdateCustomDefinitionInput.prototype.name = "";

        /**
         * UpdateCustomDefinitionInput scope.
         * @member {custom_definition.CustomDefinitionScope} scope
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @instance
         */
        UpdateCustomDefinitionInput.prototype.scope = 0;

        /**
         * UpdateCustomDefinitionInput active.
         * @member {boolean} active
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @instance
         */
        UpdateCustomDefinitionInput.prototype.active = false;

        /**
         * Creates a new UpdateCustomDefinitionInput instance using the specified properties.
         * @function create
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {custom_definition.IUpdateCustomDefinitionInput=} [properties] Properties to set
         * @returns {custom_definition.UpdateCustomDefinitionInput} UpdateCustomDefinitionInput instance
         */
        UpdateCustomDefinitionInput.create = function create(properties) {
            return new UpdateCustomDefinitionInput(properties);
        };

        /**
         * Encodes the specified UpdateCustomDefinitionInput message. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @function encode
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {custom_definition.IUpdateCustomDefinitionInput} message UpdateCustomDefinitionInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateCustomDefinitionInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.scope);
            if (message.active != null && Object.hasOwnProperty.call(message, "active"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.active);
            return writer;
        };

        /**
         * Encodes the specified UpdateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {custom_definition.IUpdateCustomDefinitionInput} message UpdateCustomDefinitionInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateCustomDefinitionInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer.
         * @function decode
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {custom_definition.UpdateCustomDefinitionInput} UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateCustomDefinitionInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.custom_definition.UpdateCustomDefinitionInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.scope = reader.int32();
                    break;
                case 3:
                    message.active = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {custom_definition.UpdateCustomDefinitionInput} UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateCustomDefinitionInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateCustomDefinitionInput message.
         * @function verify
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateCustomDefinitionInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.active != null && message.hasOwnProperty("active"))
                if (typeof message.active !== "boolean")
                    return "active: boolean expected";
            return null;
        };

        /**
         * Creates an UpdateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {custom_definition.UpdateCustomDefinitionInput} UpdateCustomDefinitionInput
         */
        UpdateCustomDefinitionInput.fromObject = function fromObject(object) {
            if (object instanceof $root.custom_definition.UpdateCustomDefinitionInput)
                return object;
            var message = new $root.custom_definition.UpdateCustomDefinitionInput();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.scope) {
            case "EMPTY_SCOPE":
            case 0:
                message.scope = 0;
                break;
            case "HIT":
            case 1:
                message.scope = 1;
                break;
            case "SESSION":
            case 2:
                message.scope = 2;
                break;
            }
            if (object.active != null)
                message.active = Boolean(object.active);
            return message;
        };

        /**
         * Creates a plain object from an UpdateCustomDefinitionInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @static
         * @param {custom_definition.UpdateCustomDefinitionInput} message UpdateCustomDefinitionInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateCustomDefinitionInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.scope = options.enums === String ? "EMPTY_SCOPE" : 0;
                object.active = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.custom_definition.CustomDefinitionScope[message.scope] : message.scope;
            if (message.active != null && message.hasOwnProperty("active"))
                object.active = message.active;
            return object;
        };

        /**
         * Converts this UpdateCustomDefinitionInput to JSON.
         * @function toJSON
         * @memberof custom_definition.UpdateCustomDefinitionInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateCustomDefinitionInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateCustomDefinitionInput;
    })();

    custom_definition.CustomDefinitionFilter = (function() {

        /**
         * Properties of a CustomDefinitionFilter.
         * @memberof custom_definition
         * @interface ICustomDefinitionFilter
         * @property {string|null} [id] CustomDefinitionFilter id
         * @property {string|null} [name] CustomDefinitionFilter name
         * @property {custom_definition.CustomDefinitionType|null} [type] CustomDefinitionFilter type
         */

        /**
         * Constructs a new CustomDefinitionFilter.
         * @memberof custom_definition
         * @classdesc Represents a CustomDefinitionFilter.
         * @implements ICustomDefinitionFilter
         * @constructor
         * @param {custom_definition.ICustomDefinitionFilter=} [properties] Properties to set
         */
        function CustomDefinitionFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomDefinitionFilter id.
         * @member {string} id
         * @memberof custom_definition.CustomDefinitionFilter
         * @instance
         */
        CustomDefinitionFilter.prototype.id = "";

        /**
         * CustomDefinitionFilter name.
         * @member {string} name
         * @memberof custom_definition.CustomDefinitionFilter
         * @instance
         */
        CustomDefinitionFilter.prototype.name = "";

        /**
         * CustomDefinitionFilter type.
         * @member {custom_definition.CustomDefinitionType} type
         * @memberof custom_definition.CustomDefinitionFilter
         * @instance
         */
        CustomDefinitionFilter.prototype.type = 0;

        /**
         * Creates a new CustomDefinitionFilter instance using the specified properties.
         * @function create
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {custom_definition.ICustomDefinitionFilter=} [properties] Properties to set
         * @returns {custom_definition.CustomDefinitionFilter} CustomDefinitionFilter instance
         */
        CustomDefinitionFilter.create = function create(properties) {
            return new CustomDefinitionFilter(properties);
        };

        /**
         * Encodes the specified CustomDefinitionFilter message. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @function encode
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {custom_definition.ICustomDefinitionFilter} message CustomDefinitionFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomDefinitionFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified CustomDefinitionFilter message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {custom_definition.ICustomDefinitionFilter} message CustomDefinitionFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomDefinitionFilter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer.
         * @function decode
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {custom_definition.CustomDefinitionFilter} CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomDefinitionFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.custom_definition.CustomDefinitionFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {custom_definition.CustomDefinitionFilter} CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomDefinitionFilter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomDefinitionFilter message.
         * @function verify
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomDefinitionFilter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a CustomDefinitionFilter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {custom_definition.CustomDefinitionFilter} CustomDefinitionFilter
         */
        CustomDefinitionFilter.fromObject = function fromObject(object) {
            if (object instanceof $root.custom_definition.CustomDefinitionFilter)
                return object;
            var message = new $root.custom_definition.CustomDefinitionFilter();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            case "EMPTY_TYPE":
            case 0:
                message.type = 0;
                break;
            case "DIMENSION":
            case 1:
                message.type = 1;
                break;
            case "METRIC":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CustomDefinitionFilter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof custom_definition.CustomDefinitionFilter
         * @static
         * @param {custom_definition.CustomDefinitionFilter} message CustomDefinitionFilter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomDefinitionFilter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "EMPTY_TYPE" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.custom_definition.CustomDefinitionType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this CustomDefinitionFilter to JSON.
         * @function toJSON
         * @memberof custom_definition.CustomDefinitionFilter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomDefinitionFilter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomDefinitionFilter;
    })();

    return custom_definition;
})();

module.exports = $root;
