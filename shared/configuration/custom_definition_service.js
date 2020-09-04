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
         * @property {string|null} [resourceId] CustomDefinitionFilter resourceId
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
         * CustomDefinitionFilter resourceId.
         * @member {string} resourceId
         * @memberof custom_definition.CustomDefinitionFilter
         * @instance
         */
        CustomDefinitionFilter.prototype.resourceId = "";

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
            if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.resourceId);
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
                case 4:
                    message.resourceId = reader.string();
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
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
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
            if (object.resourceId != null)
                message.resourceId = String(object.resourceId);
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
                object.resourceId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.custom_definition.CustomDefinitionType[message.type] : message.type;
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                object.resourceId = message.resourceId;
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

$root.CustomDefinitionService = (function() {

    /**
     * Constructs a new CustomDefinitionService service.
     * @exports CustomDefinitionService
     * @classdesc Represents a CustomDefinitionService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function CustomDefinitionService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (CustomDefinitionService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CustomDefinitionService;

    /**
     * Creates new CustomDefinitionService service using the specified rpc implementation.
     * @function create
     * @memberof CustomDefinitionService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {CustomDefinitionService} RPC service. Useful where requests and/or responses are streamed.
     */
    CustomDefinitionService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link CustomDefinitionService#listCustomDefinitions}.
     * @memberof CustomDefinitionService
     * @typedef ListCustomDefinitionsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ListCustomDefinitionsResponse} [response] ListCustomDefinitionsResponse
     */

    /**
     * Calls ListCustomDefinitions.
     * @function listCustomDefinitions
     * @memberof CustomDefinitionService
     * @instance
     * @param {IListCustomDefinitionsRequest} request ListCustomDefinitionsRequest message or plain object
     * @param {CustomDefinitionService.ListCustomDefinitionsCallback} callback Node-style callback called with the error, if any, and ListCustomDefinitionsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CustomDefinitionService.prototype.listCustomDefinitions = function listCustomDefinitions(request, callback) {
        return this.rpcCall(listCustomDefinitions, $root.ListCustomDefinitionsRequest, $root.ListCustomDefinitionsResponse, request, callback);
    }, "name", { value: "ListCustomDefinitions" });

    /**
     * Calls ListCustomDefinitions.
     * @function listCustomDefinitions
     * @memberof CustomDefinitionService
     * @instance
     * @param {IListCustomDefinitionsRequest} request ListCustomDefinitionsRequest message or plain object
     * @returns {Promise<ListCustomDefinitionsResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CustomDefinitionService#createCustomDefinition}.
     * @memberof CustomDefinitionService
     * @typedef CreateCustomDefinitionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CreateCustomDefinitionResponse} [response] CreateCustomDefinitionResponse
     */

    /**
     * Calls CreateCustomDefinition.
     * @function createCustomDefinition
     * @memberof CustomDefinitionService
     * @instance
     * @param {ICreateCustomDefinitionRequest} request CreateCustomDefinitionRequest message or plain object
     * @param {CustomDefinitionService.CreateCustomDefinitionCallback} callback Node-style callback called with the error, if any, and CreateCustomDefinitionResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CustomDefinitionService.prototype.createCustomDefinition = function createCustomDefinition(request, callback) {
        return this.rpcCall(createCustomDefinition, $root.CreateCustomDefinitionRequest, $root.CreateCustomDefinitionResponse, request, callback);
    }, "name", { value: "CreateCustomDefinition" });

    /**
     * Calls CreateCustomDefinition.
     * @function createCustomDefinition
     * @memberof CustomDefinitionService
     * @instance
     * @param {ICreateCustomDefinitionRequest} request CreateCustomDefinitionRequest message or plain object
     * @returns {Promise<CreateCustomDefinitionResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CustomDefinitionService#updateCustomDefinition}.
     * @memberof CustomDefinitionService
     * @typedef UpdateCustomDefinitionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UpdateCustomDefinitionResponse} [response] UpdateCustomDefinitionResponse
     */

    /**
     * Calls UpdateCustomDefinition.
     * @function updateCustomDefinition
     * @memberof CustomDefinitionService
     * @instance
     * @param {IUpdateCustomDefinitionRequest} request UpdateCustomDefinitionRequest message or plain object
     * @param {CustomDefinitionService.UpdateCustomDefinitionCallback} callback Node-style callback called with the error, if any, and UpdateCustomDefinitionResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CustomDefinitionService.prototype.updateCustomDefinition = function updateCustomDefinition(request, callback) {
        return this.rpcCall(updateCustomDefinition, $root.UpdateCustomDefinitionRequest, $root.UpdateCustomDefinitionResponse, request, callback);
    }, "name", { value: "UpdateCustomDefinition" });

    /**
     * Calls UpdateCustomDefinition.
     * @function updateCustomDefinition
     * @memberof CustomDefinitionService
     * @instance
     * @param {IUpdateCustomDefinitionRequest} request UpdateCustomDefinitionRequest message or plain object
     * @returns {Promise<UpdateCustomDefinitionResponse>} Promise
     * @variation 2
     */

    return CustomDefinitionService;
})();

$root.ListCustomDefinitionsRequest = (function() {

    /**
     * Properties of a ListCustomDefinitionsRequest.
     * @exports IListCustomDefinitionsRequest
     * @interface IListCustomDefinitionsRequest
     * @property {custom_definition.ICustomDefinitionFilter|null} [filter] ListCustomDefinitionsRequest filter
     * @property {number|null} [limit] ListCustomDefinitionsRequest limit
     * @property {number|null} [offset] ListCustomDefinitionsRequest offset
     * @property {string|null} [orderBy] ListCustomDefinitionsRequest orderBy
     */

    /**
     * Constructs a new ListCustomDefinitionsRequest.
     * @exports ListCustomDefinitionsRequest
     * @classdesc Represents a ListCustomDefinitionsRequest.
     * @implements IListCustomDefinitionsRequest
     * @constructor
     * @param {IListCustomDefinitionsRequest=} [properties] Properties to set
     */
    function ListCustomDefinitionsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListCustomDefinitionsRequest filter.
     * @member {custom_definition.ICustomDefinitionFilter|null|undefined} filter
     * @memberof ListCustomDefinitionsRequest
     * @instance
     */
    ListCustomDefinitionsRequest.prototype.filter = null;

    /**
     * ListCustomDefinitionsRequest limit.
     * @member {number} limit
     * @memberof ListCustomDefinitionsRequest
     * @instance
     */
    ListCustomDefinitionsRequest.prototype.limit = 0;

    /**
     * ListCustomDefinitionsRequest offset.
     * @member {number} offset
     * @memberof ListCustomDefinitionsRequest
     * @instance
     */
    ListCustomDefinitionsRequest.prototype.offset = 0;

    /**
     * ListCustomDefinitionsRequest orderBy.
     * @member {string} orderBy
     * @memberof ListCustomDefinitionsRequest
     * @instance
     */
    ListCustomDefinitionsRequest.prototype.orderBy = "";

    /**
     * Creates a new ListCustomDefinitionsRequest instance using the specified properties.
     * @function create
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {IListCustomDefinitionsRequest=} [properties] Properties to set
     * @returns {ListCustomDefinitionsRequest} ListCustomDefinitionsRequest instance
     */
    ListCustomDefinitionsRequest.create = function create(properties) {
        return new ListCustomDefinitionsRequest(properties);
    };

    /**
     * Encodes the specified ListCustomDefinitionsRequest message. Does not implicitly {@link ListCustomDefinitionsRequest.verify|verify} messages.
     * @function encode
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {IListCustomDefinitionsRequest} message ListCustomDefinitionsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListCustomDefinitionsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
            $root.custom_definition.CustomDefinitionFilter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.offset);
        if (message.orderBy != null && Object.hasOwnProperty.call(message, "orderBy"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderBy);
        return writer;
    };

    /**
     * Encodes the specified ListCustomDefinitionsRequest message, length delimited. Does not implicitly {@link ListCustomDefinitionsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {IListCustomDefinitionsRequest} message ListCustomDefinitionsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListCustomDefinitionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListCustomDefinitionsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListCustomDefinitionsRequest} ListCustomDefinitionsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListCustomDefinitionsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListCustomDefinitionsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.filter = $root.custom_definition.CustomDefinitionFilter.decode(reader, reader.uint32());
                break;
            case 2:
                message.limit = reader.int32();
                break;
            case 3:
                message.offset = reader.int32();
                break;
            case 4:
                message.orderBy = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListCustomDefinitionsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListCustomDefinitionsRequest} ListCustomDefinitionsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListCustomDefinitionsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListCustomDefinitionsRequest message.
     * @function verify
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListCustomDefinitionsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.filter != null && message.hasOwnProperty("filter")) {
            var error = $root.custom_definition.CustomDefinitionFilter.verify(message.filter);
            if (error)
                return "filter." + error;
        }
        if (message.limit != null && message.hasOwnProperty("limit"))
            if (!$util.isInteger(message.limit))
                return "limit: integer expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.orderBy != null && message.hasOwnProperty("orderBy"))
            if (!$util.isString(message.orderBy))
                return "orderBy: string expected";
        return null;
    };

    /**
     * Creates a ListCustomDefinitionsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListCustomDefinitionsRequest} ListCustomDefinitionsRequest
     */
    ListCustomDefinitionsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ListCustomDefinitionsRequest)
            return object;
        var message = new $root.ListCustomDefinitionsRequest();
        if (object.filter != null) {
            if (typeof object.filter !== "object")
                throw TypeError(".ListCustomDefinitionsRequest.filter: object expected");
            message.filter = $root.custom_definition.CustomDefinitionFilter.fromObject(object.filter);
        }
        if (object.limit != null)
            message.limit = object.limit | 0;
        if (object.offset != null)
            message.offset = object.offset | 0;
        if (object.orderBy != null)
            message.orderBy = String(object.orderBy);
        return message;
    };

    /**
     * Creates a plain object from a ListCustomDefinitionsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListCustomDefinitionsRequest
     * @static
     * @param {ListCustomDefinitionsRequest} message ListCustomDefinitionsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListCustomDefinitionsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.filter = null;
            object.limit = 0;
            object.offset = 0;
            object.orderBy = "";
        }
        if (message.filter != null && message.hasOwnProperty("filter"))
            object.filter = $root.custom_definition.CustomDefinitionFilter.toObject(message.filter, options);
        if (message.limit != null && message.hasOwnProperty("limit"))
            object.limit = message.limit;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.orderBy != null && message.hasOwnProperty("orderBy"))
            object.orderBy = message.orderBy;
        return object;
    };

    /**
     * Converts this ListCustomDefinitionsRequest to JSON.
     * @function toJSON
     * @memberof ListCustomDefinitionsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListCustomDefinitionsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListCustomDefinitionsRequest;
})();

$root.ListCustomDefinitionsResponse = (function() {

    /**
     * Properties of a ListCustomDefinitionsResponse.
     * @exports IListCustomDefinitionsResponse
     * @interface IListCustomDefinitionsResponse
     * @property {Array.<custom_definition.ICustomDefinitionProps>|null} [customDefinitions] ListCustomDefinitionsResponse customDefinitions
     * @property {number|null} [count] ListCustomDefinitionsResponse count
     */

    /**
     * Constructs a new ListCustomDefinitionsResponse.
     * @exports ListCustomDefinitionsResponse
     * @classdesc Represents a ListCustomDefinitionsResponse.
     * @implements IListCustomDefinitionsResponse
     * @constructor
     * @param {IListCustomDefinitionsResponse=} [properties] Properties to set
     */
    function ListCustomDefinitionsResponse(properties) {
        this.customDefinitions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListCustomDefinitionsResponse customDefinitions.
     * @member {Array.<custom_definition.ICustomDefinitionProps>} customDefinitions
     * @memberof ListCustomDefinitionsResponse
     * @instance
     */
    ListCustomDefinitionsResponse.prototype.customDefinitions = $util.emptyArray;

    /**
     * ListCustomDefinitionsResponse count.
     * @member {number} count
     * @memberof ListCustomDefinitionsResponse
     * @instance
     */
    ListCustomDefinitionsResponse.prototype.count = 0;

    /**
     * Creates a new ListCustomDefinitionsResponse instance using the specified properties.
     * @function create
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {IListCustomDefinitionsResponse=} [properties] Properties to set
     * @returns {ListCustomDefinitionsResponse} ListCustomDefinitionsResponse instance
     */
    ListCustomDefinitionsResponse.create = function create(properties) {
        return new ListCustomDefinitionsResponse(properties);
    };

    /**
     * Encodes the specified ListCustomDefinitionsResponse message. Does not implicitly {@link ListCustomDefinitionsResponse.verify|verify} messages.
     * @function encode
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {IListCustomDefinitionsResponse} message ListCustomDefinitionsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListCustomDefinitionsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.customDefinitions != null && message.customDefinitions.length)
            for (var i = 0; i < message.customDefinitions.length; ++i)
                $root.custom_definition.CustomDefinitionProps.encode(message.customDefinitions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified ListCustomDefinitionsResponse message, length delimited. Does not implicitly {@link ListCustomDefinitionsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {IListCustomDefinitionsResponse} message ListCustomDefinitionsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListCustomDefinitionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListCustomDefinitionsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListCustomDefinitionsResponse} ListCustomDefinitionsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListCustomDefinitionsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListCustomDefinitionsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.customDefinitions && message.customDefinitions.length))
                    message.customDefinitions = [];
                message.customDefinitions.push($root.custom_definition.CustomDefinitionProps.decode(reader, reader.uint32()));
                break;
            case 2:
                message.count = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListCustomDefinitionsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListCustomDefinitionsResponse} ListCustomDefinitionsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListCustomDefinitionsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListCustomDefinitionsResponse message.
     * @function verify
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListCustomDefinitionsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.customDefinitions != null && message.hasOwnProperty("customDefinitions")) {
            if (!Array.isArray(message.customDefinitions))
                return "customDefinitions: array expected";
            for (var i = 0; i < message.customDefinitions.length; ++i) {
                var error = $root.custom_definition.CustomDefinitionProps.verify(message.customDefinitions[i]);
                if (error)
                    return "customDefinitions." + error;
            }
        }
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a ListCustomDefinitionsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListCustomDefinitionsResponse} ListCustomDefinitionsResponse
     */
    ListCustomDefinitionsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ListCustomDefinitionsResponse)
            return object;
        var message = new $root.ListCustomDefinitionsResponse();
        if (object.customDefinitions) {
            if (!Array.isArray(object.customDefinitions))
                throw TypeError(".ListCustomDefinitionsResponse.customDefinitions: array expected");
            message.customDefinitions = [];
            for (var i = 0; i < object.customDefinitions.length; ++i) {
                if (typeof object.customDefinitions[i] !== "object")
                    throw TypeError(".ListCustomDefinitionsResponse.customDefinitions: object expected");
                message.customDefinitions[i] = $root.custom_definition.CustomDefinitionProps.fromObject(object.customDefinitions[i]);
            }
        }
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a ListCustomDefinitionsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListCustomDefinitionsResponse
     * @static
     * @param {ListCustomDefinitionsResponse} message ListCustomDefinitionsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListCustomDefinitionsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.customDefinitions = [];
        if (options.defaults)
            object.count = 0;
        if (message.customDefinitions && message.customDefinitions.length) {
            object.customDefinitions = [];
            for (var j = 0; j < message.customDefinitions.length; ++j)
                object.customDefinitions[j] = $root.custom_definition.CustomDefinitionProps.toObject(message.customDefinitions[j], options);
        }
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this ListCustomDefinitionsResponse to JSON.
     * @function toJSON
     * @memberof ListCustomDefinitionsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListCustomDefinitionsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListCustomDefinitionsResponse;
})();

$root.CreateCustomDefinitionRequest = (function() {

    /**
     * Properties of a CreateCustomDefinitionRequest.
     * @exports ICreateCustomDefinitionRequest
     * @interface ICreateCustomDefinitionRequest
     * @property {custom_definition.ICreateCustomDefinitionInput|null} [data] CreateCustomDefinitionRequest data
     */

    /**
     * Constructs a new CreateCustomDefinitionRequest.
     * @exports CreateCustomDefinitionRequest
     * @classdesc Represents a CreateCustomDefinitionRequest.
     * @implements ICreateCustomDefinitionRequest
     * @constructor
     * @param {ICreateCustomDefinitionRequest=} [properties] Properties to set
     */
    function CreateCustomDefinitionRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateCustomDefinitionRequest data.
     * @member {custom_definition.ICreateCustomDefinitionInput|null|undefined} data
     * @memberof CreateCustomDefinitionRequest
     * @instance
     */
    CreateCustomDefinitionRequest.prototype.data = null;

    /**
     * Creates a new CreateCustomDefinitionRequest instance using the specified properties.
     * @function create
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {ICreateCustomDefinitionRequest=} [properties] Properties to set
     * @returns {CreateCustomDefinitionRequest} CreateCustomDefinitionRequest instance
     */
    CreateCustomDefinitionRequest.create = function create(properties) {
        return new CreateCustomDefinitionRequest(properties);
    };

    /**
     * Encodes the specified CreateCustomDefinitionRequest message. Does not implicitly {@link CreateCustomDefinitionRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {ICreateCustomDefinitionRequest} message CreateCustomDefinitionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateCustomDefinitionRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.custom_definition.CreateCustomDefinitionInput.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateCustomDefinitionRequest message, length delimited. Does not implicitly {@link CreateCustomDefinitionRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {ICreateCustomDefinitionRequest} message CreateCustomDefinitionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateCustomDefinitionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateCustomDefinitionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateCustomDefinitionRequest} CreateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateCustomDefinitionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateCustomDefinitionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = $root.custom_definition.CreateCustomDefinitionInput.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateCustomDefinitionRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateCustomDefinitionRequest} CreateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateCustomDefinitionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateCustomDefinitionRequest message.
     * @function verify
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateCustomDefinitionRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.custom_definition.CreateCustomDefinitionInput.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a CreateCustomDefinitionRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateCustomDefinitionRequest} CreateCustomDefinitionRequest
     */
    CreateCustomDefinitionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateCustomDefinitionRequest)
            return object;
        var message = new $root.CreateCustomDefinitionRequest();
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".CreateCustomDefinitionRequest.data: object expected");
            message.data = $root.custom_definition.CreateCustomDefinitionInput.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateCustomDefinitionRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateCustomDefinitionRequest
     * @static
     * @param {CreateCustomDefinitionRequest} message CreateCustomDefinitionRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateCustomDefinitionRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.data = null;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.custom_definition.CreateCustomDefinitionInput.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this CreateCustomDefinitionRequest to JSON.
     * @function toJSON
     * @memberof CreateCustomDefinitionRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateCustomDefinitionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateCustomDefinitionRequest;
})();

$root.CreateCustomDefinitionResponse = (function() {

    /**
     * Properties of a CreateCustomDefinitionResponse.
     * @exports ICreateCustomDefinitionResponse
     * @interface ICreateCustomDefinitionResponse
     * @property {custom_definition.ICustomDefinitionProps|null} [instance] CreateCustomDefinitionResponse instance
     */

    /**
     * Constructs a new CreateCustomDefinitionResponse.
     * @exports CreateCustomDefinitionResponse
     * @classdesc Represents a CreateCustomDefinitionResponse.
     * @implements ICreateCustomDefinitionResponse
     * @constructor
     * @param {ICreateCustomDefinitionResponse=} [properties] Properties to set
     */
    function CreateCustomDefinitionResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateCustomDefinitionResponse instance.
     * @member {custom_definition.ICustomDefinitionProps|null|undefined} instance
     * @memberof CreateCustomDefinitionResponse
     * @instance
     */
    CreateCustomDefinitionResponse.prototype.instance = null;

    /**
     * Creates a new CreateCustomDefinitionResponse instance using the specified properties.
     * @function create
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {ICreateCustomDefinitionResponse=} [properties] Properties to set
     * @returns {CreateCustomDefinitionResponse} CreateCustomDefinitionResponse instance
     */
    CreateCustomDefinitionResponse.create = function create(properties) {
        return new CreateCustomDefinitionResponse(properties);
    };

    /**
     * Encodes the specified CreateCustomDefinitionResponse message. Does not implicitly {@link CreateCustomDefinitionResponse.verify|verify} messages.
     * @function encode
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {ICreateCustomDefinitionResponse} message CreateCustomDefinitionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateCustomDefinitionResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.instance != null && Object.hasOwnProperty.call(message, "instance"))
            $root.custom_definition.CustomDefinitionProps.encode(message.instance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateCustomDefinitionResponse message, length delimited. Does not implicitly {@link CreateCustomDefinitionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {ICreateCustomDefinitionResponse} message CreateCustomDefinitionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateCustomDefinitionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateCustomDefinitionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateCustomDefinitionResponse} CreateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateCustomDefinitionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateCustomDefinitionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.instance = $root.custom_definition.CustomDefinitionProps.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateCustomDefinitionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateCustomDefinitionResponse} CreateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateCustomDefinitionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateCustomDefinitionResponse message.
     * @function verify
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateCustomDefinitionResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.instance != null && message.hasOwnProperty("instance")) {
            var error = $root.custom_definition.CustomDefinitionProps.verify(message.instance);
            if (error)
                return "instance." + error;
        }
        return null;
    };

    /**
     * Creates a CreateCustomDefinitionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateCustomDefinitionResponse} CreateCustomDefinitionResponse
     */
    CreateCustomDefinitionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateCustomDefinitionResponse)
            return object;
        var message = new $root.CreateCustomDefinitionResponse();
        if (object.instance != null) {
            if (typeof object.instance !== "object")
                throw TypeError(".CreateCustomDefinitionResponse.instance: object expected");
            message.instance = $root.custom_definition.CustomDefinitionProps.fromObject(object.instance);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateCustomDefinitionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateCustomDefinitionResponse
     * @static
     * @param {CreateCustomDefinitionResponse} message CreateCustomDefinitionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateCustomDefinitionResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.instance = null;
        if (message.instance != null && message.hasOwnProperty("instance"))
            object.instance = $root.custom_definition.CustomDefinitionProps.toObject(message.instance, options);
        return object;
    };

    /**
     * Converts this CreateCustomDefinitionResponse to JSON.
     * @function toJSON
     * @memberof CreateCustomDefinitionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateCustomDefinitionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateCustomDefinitionResponse;
})();

$root.UpdateCustomDefinitionRequest = (function() {

    /**
     * Properties of an UpdateCustomDefinitionRequest.
     * @exports IUpdateCustomDefinitionRequest
     * @interface IUpdateCustomDefinitionRequest
     * @property {string|null} [id] UpdateCustomDefinitionRequest id
     * @property {custom_definition.IUpdateCustomDefinitionInput|null} [data] UpdateCustomDefinitionRequest data
     */

    /**
     * Constructs a new UpdateCustomDefinitionRequest.
     * @exports UpdateCustomDefinitionRequest
     * @classdesc Represents an UpdateCustomDefinitionRequest.
     * @implements IUpdateCustomDefinitionRequest
     * @constructor
     * @param {IUpdateCustomDefinitionRequest=} [properties] Properties to set
     */
    function UpdateCustomDefinitionRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateCustomDefinitionRequest id.
     * @member {string} id
     * @memberof UpdateCustomDefinitionRequest
     * @instance
     */
    UpdateCustomDefinitionRequest.prototype.id = "";

    /**
     * UpdateCustomDefinitionRequest data.
     * @member {custom_definition.IUpdateCustomDefinitionInput|null|undefined} data
     * @memberof UpdateCustomDefinitionRequest
     * @instance
     */
    UpdateCustomDefinitionRequest.prototype.data = null;

    /**
     * Creates a new UpdateCustomDefinitionRequest instance using the specified properties.
     * @function create
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {IUpdateCustomDefinitionRequest=} [properties] Properties to set
     * @returns {UpdateCustomDefinitionRequest} UpdateCustomDefinitionRequest instance
     */
    UpdateCustomDefinitionRequest.create = function create(properties) {
        return new UpdateCustomDefinitionRequest(properties);
    };

    /**
     * Encodes the specified UpdateCustomDefinitionRequest message. Does not implicitly {@link UpdateCustomDefinitionRequest.verify|verify} messages.
     * @function encode
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {IUpdateCustomDefinitionRequest} message UpdateCustomDefinitionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateCustomDefinitionRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.custom_definition.UpdateCustomDefinitionInput.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateCustomDefinitionRequest message, length delimited. Does not implicitly {@link UpdateCustomDefinitionRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {IUpdateCustomDefinitionRequest} message UpdateCustomDefinitionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateCustomDefinitionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateCustomDefinitionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateCustomDefinitionRequest} UpdateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateCustomDefinitionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateCustomDefinitionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.data = $root.custom_definition.UpdateCustomDefinitionInput.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateCustomDefinitionRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateCustomDefinitionRequest} UpdateCustomDefinitionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateCustomDefinitionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateCustomDefinitionRequest message.
     * @function verify
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateCustomDefinitionRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.custom_definition.UpdateCustomDefinitionInput.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates an UpdateCustomDefinitionRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateCustomDefinitionRequest} UpdateCustomDefinitionRequest
     */
    UpdateCustomDefinitionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateCustomDefinitionRequest)
            return object;
        var message = new $root.UpdateCustomDefinitionRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".UpdateCustomDefinitionRequest.data: object expected");
            message.data = $root.custom_definition.UpdateCustomDefinitionInput.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateCustomDefinitionRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateCustomDefinitionRequest
     * @static
     * @param {UpdateCustomDefinitionRequest} message UpdateCustomDefinitionRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateCustomDefinitionRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.data = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.custom_definition.UpdateCustomDefinitionInput.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this UpdateCustomDefinitionRequest to JSON.
     * @function toJSON
     * @memberof UpdateCustomDefinitionRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateCustomDefinitionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateCustomDefinitionRequest;
})();

$root.UpdateCustomDefinitionResponse = (function() {

    /**
     * Properties of an UpdateCustomDefinitionResponse.
     * @exports IUpdateCustomDefinitionResponse
     * @interface IUpdateCustomDefinitionResponse
     * @property {custom_definition.ICustomDefinitionProps|null} [instance] UpdateCustomDefinitionResponse instance
     */

    /**
     * Constructs a new UpdateCustomDefinitionResponse.
     * @exports UpdateCustomDefinitionResponse
     * @classdesc Represents an UpdateCustomDefinitionResponse.
     * @implements IUpdateCustomDefinitionResponse
     * @constructor
     * @param {IUpdateCustomDefinitionResponse=} [properties] Properties to set
     */
    function UpdateCustomDefinitionResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateCustomDefinitionResponse instance.
     * @member {custom_definition.ICustomDefinitionProps|null|undefined} instance
     * @memberof UpdateCustomDefinitionResponse
     * @instance
     */
    UpdateCustomDefinitionResponse.prototype.instance = null;

    /**
     * Creates a new UpdateCustomDefinitionResponse instance using the specified properties.
     * @function create
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {IUpdateCustomDefinitionResponse=} [properties] Properties to set
     * @returns {UpdateCustomDefinitionResponse} UpdateCustomDefinitionResponse instance
     */
    UpdateCustomDefinitionResponse.create = function create(properties) {
        return new UpdateCustomDefinitionResponse(properties);
    };

    /**
     * Encodes the specified UpdateCustomDefinitionResponse message. Does not implicitly {@link UpdateCustomDefinitionResponse.verify|verify} messages.
     * @function encode
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {IUpdateCustomDefinitionResponse} message UpdateCustomDefinitionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateCustomDefinitionResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.instance != null && Object.hasOwnProperty.call(message, "instance"))
            $root.custom_definition.CustomDefinitionProps.encode(message.instance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateCustomDefinitionResponse message, length delimited. Does not implicitly {@link UpdateCustomDefinitionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {IUpdateCustomDefinitionResponse} message UpdateCustomDefinitionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateCustomDefinitionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateCustomDefinitionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateCustomDefinitionResponse} UpdateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateCustomDefinitionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateCustomDefinitionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.instance = $root.custom_definition.CustomDefinitionProps.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateCustomDefinitionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateCustomDefinitionResponse} UpdateCustomDefinitionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateCustomDefinitionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateCustomDefinitionResponse message.
     * @function verify
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateCustomDefinitionResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.instance != null && message.hasOwnProperty("instance")) {
            var error = $root.custom_definition.CustomDefinitionProps.verify(message.instance);
            if (error)
                return "instance." + error;
        }
        return null;
    };

    /**
     * Creates an UpdateCustomDefinitionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateCustomDefinitionResponse} UpdateCustomDefinitionResponse
     */
    UpdateCustomDefinitionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateCustomDefinitionResponse)
            return object;
        var message = new $root.UpdateCustomDefinitionResponse();
        if (object.instance != null) {
            if (typeof object.instance !== "object")
                throw TypeError(".UpdateCustomDefinitionResponse.instance: object expected");
            message.instance = $root.custom_definition.CustomDefinitionProps.fromObject(object.instance);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateCustomDefinitionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateCustomDefinitionResponse
     * @static
     * @param {UpdateCustomDefinitionResponse} message UpdateCustomDefinitionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateCustomDefinitionResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.instance = null;
        if (message.instance != null && message.hasOwnProperty("instance"))
            object.instance = $root.custom_definition.CustomDefinitionProps.toObject(message.instance, options);
        return object;
    };

    /**
     * Converts this UpdateCustomDefinitionResponse to JSON.
     * @function toJSON
     * @memberof UpdateCustomDefinitionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateCustomDefinitionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateCustomDefinitionResponse;
})();

module.exports = $root;
