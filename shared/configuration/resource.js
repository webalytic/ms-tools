/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.resource = (function() {

    /**
     * Namespace resource.
     * @exports resource
     * @namespace
     */
    var resource = {};

    resource.ResourceProps = (function() {

        /**
         * Properties of a ResourceProps.
         * @memberof resource
         * @interface IResourceProps
         * @property {string|null} [id] ResourceProps id
         * @property {string|null} [name] ResourceProps name
         * @property {resource.ResourceCategory|null} [category] ResourceProps category
         * @property {string|null} [defaultWebsiteUrl] ResourceProps defaultWebsiteUrl
         * @property {string|null} [createAt] ResourceProps createAt
         * @property {string|null} [updateAt] ResourceProps updateAt
         */

        /**
         * Constructs a new ResourceProps.
         * @memberof resource
         * @classdesc Represents a ResourceProps.
         * @implements IResourceProps
         * @constructor
         * @param {resource.IResourceProps=} [properties] Properties to set
         */
        function ResourceProps(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResourceProps id.
         * @member {string} id
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.id = "";

        /**
         * ResourceProps name.
         * @member {string} name
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.name = "";

        /**
         * ResourceProps category.
         * @member {resource.ResourceCategory} category
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.category = 0;

        /**
         * ResourceProps defaultWebsiteUrl.
         * @member {string} defaultWebsiteUrl
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.defaultWebsiteUrl = "";

        /**
         * ResourceProps createAt.
         * @member {string} createAt
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.createAt = "";

        /**
         * ResourceProps updateAt.
         * @member {string} updateAt
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.updateAt = "";

        /**
         * Creates a new ResourceProps instance using the specified properties.
         * @function create
         * @memberof resource.ResourceProps
         * @static
         * @param {resource.IResourceProps=} [properties] Properties to set
         * @returns {resource.ResourceProps} ResourceProps instance
         */
        ResourceProps.create = function create(properties) {
            return new ResourceProps(properties);
        };

        /**
         * Encodes the specified ResourceProps message. Does not implicitly {@link resource.ResourceProps.verify|verify} messages.
         * @function encode
         * @memberof resource.ResourceProps
         * @static
         * @param {resource.IResourceProps} message ResourceProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResourceProps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.category);
            if (message.defaultWebsiteUrl != null && Object.hasOwnProperty.call(message, "defaultWebsiteUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.defaultWebsiteUrl);
            if (message.createAt != null && Object.hasOwnProperty.call(message, "createAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createAt);
            if (message.updateAt != null && Object.hasOwnProperty.call(message, "updateAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updateAt);
            return writer;
        };

        /**
         * Encodes the specified ResourceProps message, length delimited. Does not implicitly {@link resource.ResourceProps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof resource.ResourceProps
         * @static
         * @param {resource.IResourceProps} message ResourceProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResourceProps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResourceProps message from the specified reader or buffer.
         * @function decode
         * @memberof resource.ResourceProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {resource.ResourceProps} ResourceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResourceProps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.resource.ResourceProps();
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
                    message.category = reader.int32();
                    break;
                case 4:
                    message.defaultWebsiteUrl = reader.string();
                    break;
                case 5:
                    message.createAt = reader.string();
                    break;
                case 6:
                    message.updateAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResourceProps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof resource.ResourceProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {resource.ResourceProps} ResourceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResourceProps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResourceProps message.
         * @function verify
         * @memberof resource.ResourceProps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResourceProps.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                switch (message.category) {
                default:
                    return "category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                    break;
                }
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                if (!$util.isString(message.defaultWebsiteUrl))
                    return "defaultWebsiteUrl: string expected";
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                if (!$util.isString(message.createAt))
                    return "createAt: string expected";
            if (message.updateAt != null && message.hasOwnProperty("updateAt"))
                if (!$util.isString(message.updateAt))
                    return "updateAt: string expected";
            return null;
        };

        /**
         * Creates a ResourceProps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof resource.ResourceProps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {resource.ResourceProps} ResourceProps
         */
        ResourceProps.fromObject = function fromObject(object) {
            if (object instanceof $root.resource.ResourceProps)
                return object;
            var message = new $root.resource.ResourceProps();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.category) {
            case "UNSPECIFIED":
            case 0:
                message.category = 0;
                break;
            case "ARTS_AND_ENTERTAINMENT":
            case 1:
                message.category = 1;
                break;
            case "AUTOMOTIVE":
            case 2:
                message.category = 2;
                break;
            case "BEAUTY_AND_FITNESS":
            case 3:
                message.category = 3;
                break;
            case "BOOKS_AND_LITERATURE":
            case 4:
                message.category = 4;
                break;
            case "BUSINESS_AND_INDUSTRIAL_MARKETS":
            case 5:
                message.category = 5;
                break;
            case "TECHNOLOGY":
            case 6:
                message.category = 6;
                break;
            case "FINANCE":
            case 7:
                message.category = 7;
                break;
            case "FOOD_AND_DRINK":
            case 8:
                message.category = 8;
                break;
            case "GAMES":
            case 9:
                message.category = 9;
                break;
            case "HEALTHCARE":
            case 10:
                message.category = 10;
                break;
            case "HOBBIES_AND_LEISURE":
            case 11:
                message.category = 11;
                break;
            case "HOME_AND_GARDEN":
            case 12:
                message.category = 12;
                break;
            case "INTERNET_AND_TELECOM":
            case 13:
                message.category = 13;
                break;
            case "JOBS_AND_EDUCATION":
            case 14:
                message.category = 14;
                break;
            case "LAW_AND_GOVERNMENT":
            case 15:
                message.category = 15;
                break;
            case "NEWS":
            case 16:
                message.category = 16;
                break;
            case "ONLINE_COMMUNITIES":
            case 17:
                message.category = 17;
                break;
            case "PEOPLE_AND_SOCIETY":
            case 18:
                message.category = 18;
                break;
            case "PETS_AND_ANIMALS":
            case 19:
                message.category = 19;
                break;
            case "REAL_ESTATE":
            case 20:
                message.category = 20;
                break;
            case "REFERENCE":
            case 21:
                message.category = 21;
                break;
            case "SCIENCE":
            case 22:
                message.category = 22;
                break;
            case "SHOPPING":
            case 23:
                message.category = 23;
                break;
            case "SPORTS":
            case 24:
                message.category = 24;
                break;
            case "TRAVEL":
            case 25:
                message.category = 25;
                break;
            case "OTHER":
            case 26:
                message.category = 26;
                break;
            }
            if (object.defaultWebsiteUrl != null)
                message.defaultWebsiteUrl = String(object.defaultWebsiteUrl);
            if (object.createAt != null)
                message.createAt = String(object.createAt);
            if (object.updateAt != null)
                message.updateAt = String(object.updateAt);
            return message;
        };

        /**
         * Creates a plain object from a ResourceProps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof resource.ResourceProps
         * @static
         * @param {resource.ResourceProps} message ResourceProps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResourceProps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.category = options.enums === String ? "UNSPECIFIED" : 0;
                object.defaultWebsiteUrl = "";
                object.createAt = "";
                object.updateAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.resource.ResourceCategory[message.category] : message.category;
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                object.defaultWebsiteUrl = message.defaultWebsiteUrl;
            if (message.createAt != null && message.hasOwnProperty("createAt"))
                object.createAt = message.createAt;
            if (message.updateAt != null && message.hasOwnProperty("updateAt"))
                object.updateAt = message.updateAt;
            return object;
        };

        /**
         * Converts this ResourceProps to JSON.
         * @function toJSON
         * @memberof resource.ResourceProps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResourceProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResourceProps;
    })();

    resource.CreateResourceInput = (function() {

        /**
         * Properties of a CreateResourceInput.
         * @memberof resource
         * @interface ICreateResourceInput
         * @property {string|null} [name] CreateResourceInput name
         * @property {resource.ResourceCategory|null} [category] CreateResourceInput category
         * @property {string|null} [defaultWebsiteUrl] CreateResourceInput defaultWebsiteUrl
         */

        /**
         * Constructs a new CreateResourceInput.
         * @memberof resource
         * @classdesc Represents a CreateResourceInput.
         * @implements ICreateResourceInput
         * @constructor
         * @param {resource.ICreateResourceInput=} [properties] Properties to set
         */
        function CreateResourceInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateResourceInput name.
         * @member {string} name
         * @memberof resource.CreateResourceInput
         * @instance
         */
        CreateResourceInput.prototype.name = "";

        /**
         * CreateResourceInput category.
         * @member {resource.ResourceCategory} category
         * @memberof resource.CreateResourceInput
         * @instance
         */
        CreateResourceInput.prototype.category = 0;

        /**
         * CreateResourceInput defaultWebsiteUrl.
         * @member {string} defaultWebsiteUrl
         * @memberof resource.CreateResourceInput
         * @instance
         */
        CreateResourceInput.prototype.defaultWebsiteUrl = "";

        /**
         * Creates a new CreateResourceInput instance using the specified properties.
         * @function create
         * @memberof resource.CreateResourceInput
         * @static
         * @param {resource.ICreateResourceInput=} [properties] Properties to set
         * @returns {resource.CreateResourceInput} CreateResourceInput instance
         */
        CreateResourceInput.create = function create(properties) {
            return new CreateResourceInput(properties);
        };

        /**
         * Encodes the specified CreateResourceInput message. Does not implicitly {@link resource.CreateResourceInput.verify|verify} messages.
         * @function encode
         * @memberof resource.CreateResourceInput
         * @static
         * @param {resource.ICreateResourceInput} message CreateResourceInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResourceInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.category);
            if (message.defaultWebsiteUrl != null && Object.hasOwnProperty.call(message, "defaultWebsiteUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.defaultWebsiteUrl);
            return writer;
        };

        /**
         * Encodes the specified CreateResourceInput message, length delimited. Does not implicitly {@link resource.CreateResourceInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof resource.CreateResourceInput
         * @static
         * @param {resource.ICreateResourceInput} message CreateResourceInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResourceInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateResourceInput message from the specified reader or buffer.
         * @function decode
         * @memberof resource.CreateResourceInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {resource.CreateResourceInput} CreateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResourceInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.resource.CreateResourceInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.category = reader.int32();
                    break;
                case 3:
                    message.defaultWebsiteUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateResourceInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof resource.CreateResourceInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {resource.CreateResourceInput} CreateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResourceInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateResourceInput message.
         * @function verify
         * @memberof resource.CreateResourceInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateResourceInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                switch (message.category) {
                default:
                    return "category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                    break;
                }
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                if (!$util.isString(message.defaultWebsiteUrl))
                    return "defaultWebsiteUrl: string expected";
            return null;
        };

        /**
         * Creates a CreateResourceInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof resource.CreateResourceInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {resource.CreateResourceInput} CreateResourceInput
         */
        CreateResourceInput.fromObject = function fromObject(object) {
            if (object instanceof $root.resource.CreateResourceInput)
                return object;
            var message = new $root.resource.CreateResourceInput();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.category) {
            case "UNSPECIFIED":
            case 0:
                message.category = 0;
                break;
            case "ARTS_AND_ENTERTAINMENT":
            case 1:
                message.category = 1;
                break;
            case "AUTOMOTIVE":
            case 2:
                message.category = 2;
                break;
            case "BEAUTY_AND_FITNESS":
            case 3:
                message.category = 3;
                break;
            case "BOOKS_AND_LITERATURE":
            case 4:
                message.category = 4;
                break;
            case "BUSINESS_AND_INDUSTRIAL_MARKETS":
            case 5:
                message.category = 5;
                break;
            case "TECHNOLOGY":
            case 6:
                message.category = 6;
                break;
            case "FINANCE":
            case 7:
                message.category = 7;
                break;
            case "FOOD_AND_DRINK":
            case 8:
                message.category = 8;
                break;
            case "GAMES":
            case 9:
                message.category = 9;
                break;
            case "HEALTHCARE":
            case 10:
                message.category = 10;
                break;
            case "HOBBIES_AND_LEISURE":
            case 11:
                message.category = 11;
                break;
            case "HOME_AND_GARDEN":
            case 12:
                message.category = 12;
                break;
            case "INTERNET_AND_TELECOM":
            case 13:
                message.category = 13;
                break;
            case "JOBS_AND_EDUCATION":
            case 14:
                message.category = 14;
                break;
            case "LAW_AND_GOVERNMENT":
            case 15:
                message.category = 15;
                break;
            case "NEWS":
            case 16:
                message.category = 16;
                break;
            case "ONLINE_COMMUNITIES":
            case 17:
                message.category = 17;
                break;
            case "PEOPLE_AND_SOCIETY":
            case 18:
                message.category = 18;
                break;
            case "PETS_AND_ANIMALS":
            case 19:
                message.category = 19;
                break;
            case "REAL_ESTATE":
            case 20:
                message.category = 20;
                break;
            case "REFERENCE":
            case 21:
                message.category = 21;
                break;
            case "SCIENCE":
            case 22:
                message.category = 22;
                break;
            case "SHOPPING":
            case 23:
                message.category = 23;
                break;
            case "SPORTS":
            case 24:
                message.category = 24;
                break;
            case "TRAVEL":
            case 25:
                message.category = 25;
                break;
            case "OTHER":
            case 26:
                message.category = 26;
                break;
            }
            if (object.defaultWebsiteUrl != null)
                message.defaultWebsiteUrl = String(object.defaultWebsiteUrl);
            return message;
        };

        /**
         * Creates a plain object from a CreateResourceInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof resource.CreateResourceInput
         * @static
         * @param {resource.CreateResourceInput} message CreateResourceInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateResourceInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.category = options.enums === String ? "UNSPECIFIED" : 0;
                object.defaultWebsiteUrl = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.resource.ResourceCategory[message.category] : message.category;
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                object.defaultWebsiteUrl = message.defaultWebsiteUrl;
            return object;
        };

        /**
         * Converts this CreateResourceInput to JSON.
         * @function toJSON
         * @memberof resource.CreateResourceInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateResourceInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateResourceInput;
    })();

    resource.UpdateResourceInput = (function() {

        /**
         * Properties of an UpdateResourceInput.
         * @memberof resource
         * @interface IUpdateResourceInput
         * @property {string|null} [name] UpdateResourceInput name
         * @property {resource.ResourceCategory|null} [category] UpdateResourceInput category
         * @property {string|null} [defaultWebsiteUrl] UpdateResourceInput defaultWebsiteUrl
         */

        /**
         * Constructs a new UpdateResourceInput.
         * @memberof resource
         * @classdesc Represents an UpdateResourceInput.
         * @implements IUpdateResourceInput
         * @constructor
         * @param {resource.IUpdateResourceInput=} [properties] Properties to set
         */
        function UpdateResourceInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateResourceInput name.
         * @member {string} name
         * @memberof resource.UpdateResourceInput
         * @instance
         */
        UpdateResourceInput.prototype.name = "";

        /**
         * UpdateResourceInput category.
         * @member {resource.ResourceCategory} category
         * @memberof resource.UpdateResourceInput
         * @instance
         */
        UpdateResourceInput.prototype.category = 0;

        /**
         * UpdateResourceInput defaultWebsiteUrl.
         * @member {string} defaultWebsiteUrl
         * @memberof resource.UpdateResourceInput
         * @instance
         */
        UpdateResourceInput.prototype.defaultWebsiteUrl = "";

        /**
         * Creates a new UpdateResourceInput instance using the specified properties.
         * @function create
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {resource.IUpdateResourceInput=} [properties] Properties to set
         * @returns {resource.UpdateResourceInput} UpdateResourceInput instance
         */
        UpdateResourceInput.create = function create(properties) {
            return new UpdateResourceInput(properties);
        };

        /**
         * Encodes the specified UpdateResourceInput message. Does not implicitly {@link resource.UpdateResourceInput.verify|verify} messages.
         * @function encode
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {resource.IUpdateResourceInput} message UpdateResourceInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResourceInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.category);
            if (message.defaultWebsiteUrl != null && Object.hasOwnProperty.call(message, "defaultWebsiteUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.defaultWebsiteUrl);
            return writer;
        };

        /**
         * Encodes the specified UpdateResourceInput message, length delimited. Does not implicitly {@link resource.UpdateResourceInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {resource.IUpdateResourceInput} message UpdateResourceInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResourceInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateResourceInput message from the specified reader or buffer.
         * @function decode
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {resource.UpdateResourceInput} UpdateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResourceInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.resource.UpdateResourceInput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.category = reader.int32();
                    break;
                case 3:
                    message.defaultWebsiteUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateResourceInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {resource.UpdateResourceInput} UpdateResourceInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResourceInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateResourceInput message.
         * @function verify
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateResourceInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.category != null && message.hasOwnProperty("category"))
                switch (message.category) {
                default:
                    return "category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                    break;
                }
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                if (!$util.isString(message.defaultWebsiteUrl))
                    return "defaultWebsiteUrl: string expected";
            return null;
        };

        /**
         * Creates an UpdateResourceInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {resource.UpdateResourceInput} UpdateResourceInput
         */
        UpdateResourceInput.fromObject = function fromObject(object) {
            if (object instanceof $root.resource.UpdateResourceInput)
                return object;
            var message = new $root.resource.UpdateResourceInput();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.category) {
            case "UNSPECIFIED":
            case 0:
                message.category = 0;
                break;
            case "ARTS_AND_ENTERTAINMENT":
            case 1:
                message.category = 1;
                break;
            case "AUTOMOTIVE":
            case 2:
                message.category = 2;
                break;
            case "BEAUTY_AND_FITNESS":
            case 3:
                message.category = 3;
                break;
            case "BOOKS_AND_LITERATURE":
            case 4:
                message.category = 4;
                break;
            case "BUSINESS_AND_INDUSTRIAL_MARKETS":
            case 5:
                message.category = 5;
                break;
            case "TECHNOLOGY":
            case 6:
                message.category = 6;
                break;
            case "FINANCE":
            case 7:
                message.category = 7;
                break;
            case "FOOD_AND_DRINK":
            case 8:
                message.category = 8;
                break;
            case "GAMES":
            case 9:
                message.category = 9;
                break;
            case "HEALTHCARE":
            case 10:
                message.category = 10;
                break;
            case "HOBBIES_AND_LEISURE":
            case 11:
                message.category = 11;
                break;
            case "HOME_AND_GARDEN":
            case 12:
                message.category = 12;
                break;
            case "INTERNET_AND_TELECOM":
            case 13:
                message.category = 13;
                break;
            case "JOBS_AND_EDUCATION":
            case 14:
                message.category = 14;
                break;
            case "LAW_AND_GOVERNMENT":
            case 15:
                message.category = 15;
                break;
            case "NEWS":
            case 16:
                message.category = 16;
                break;
            case "ONLINE_COMMUNITIES":
            case 17:
                message.category = 17;
                break;
            case "PEOPLE_AND_SOCIETY":
            case 18:
                message.category = 18;
                break;
            case "PETS_AND_ANIMALS":
            case 19:
                message.category = 19;
                break;
            case "REAL_ESTATE":
            case 20:
                message.category = 20;
                break;
            case "REFERENCE":
            case 21:
                message.category = 21;
                break;
            case "SCIENCE":
            case 22:
                message.category = 22;
                break;
            case "SHOPPING":
            case 23:
                message.category = 23;
                break;
            case "SPORTS":
            case 24:
                message.category = 24;
                break;
            case "TRAVEL":
            case 25:
                message.category = 25;
                break;
            case "OTHER":
            case 26:
                message.category = 26;
                break;
            }
            if (object.defaultWebsiteUrl != null)
                message.defaultWebsiteUrl = String(object.defaultWebsiteUrl);
            return message;
        };

        /**
         * Creates a plain object from an UpdateResourceInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof resource.UpdateResourceInput
         * @static
         * @param {resource.UpdateResourceInput} message UpdateResourceInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateResourceInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.category = options.enums === String ? "UNSPECIFIED" : 0;
                object.defaultWebsiteUrl = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.resource.ResourceCategory[message.category] : message.category;
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                object.defaultWebsiteUrl = message.defaultWebsiteUrl;
            return object;
        };

        /**
         * Converts this UpdateResourceInput to JSON.
         * @function toJSON
         * @memberof resource.UpdateResourceInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateResourceInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateResourceInput;
    })();

    resource.ResourceFilter = (function() {

        /**
         * Properties of a ResourceFilter.
         * @memberof resource
         * @interface IResourceFilter
         * @property {string|null} [id] ResourceFilter id
         * @property {string|null} [name] ResourceFilter name
         */

        /**
         * Constructs a new ResourceFilter.
         * @memberof resource
         * @classdesc Represents a ResourceFilter.
         * @implements IResourceFilter
         * @constructor
         * @param {resource.IResourceFilter=} [properties] Properties to set
         */
        function ResourceFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResourceFilter id.
         * @member {string} id
         * @memberof resource.ResourceFilter
         * @instance
         */
        ResourceFilter.prototype.id = "";

        /**
         * ResourceFilter name.
         * @member {string} name
         * @memberof resource.ResourceFilter
         * @instance
         */
        ResourceFilter.prototype.name = "";

        /**
         * Creates a new ResourceFilter instance using the specified properties.
         * @function create
         * @memberof resource.ResourceFilter
         * @static
         * @param {resource.IResourceFilter=} [properties] Properties to set
         * @returns {resource.ResourceFilter} ResourceFilter instance
         */
        ResourceFilter.create = function create(properties) {
            return new ResourceFilter(properties);
        };

        /**
         * Encodes the specified ResourceFilter message. Does not implicitly {@link resource.ResourceFilter.verify|verify} messages.
         * @function encode
         * @memberof resource.ResourceFilter
         * @static
         * @param {resource.IResourceFilter} message ResourceFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResourceFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ResourceFilter message, length delimited. Does not implicitly {@link resource.ResourceFilter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof resource.ResourceFilter
         * @static
         * @param {resource.IResourceFilter} message ResourceFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResourceFilter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResourceFilter message from the specified reader or buffer.
         * @function decode
         * @memberof resource.ResourceFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {resource.ResourceFilter} ResourceFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResourceFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.resource.ResourceFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResourceFilter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof resource.ResourceFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {resource.ResourceFilter} ResourceFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResourceFilter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResourceFilter message.
         * @function verify
         * @memberof resource.ResourceFilter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResourceFilter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ResourceFilter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof resource.ResourceFilter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {resource.ResourceFilter} ResourceFilter
         */
        ResourceFilter.fromObject = function fromObject(object) {
            if (object instanceof $root.resource.ResourceFilter)
                return object;
            var message = new $root.resource.ResourceFilter();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ResourceFilter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof resource.ResourceFilter
         * @static
         * @param {resource.ResourceFilter} message ResourceFilter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResourceFilter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ResourceFilter to JSON.
         * @function toJSON
         * @memberof resource.ResourceFilter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResourceFilter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResourceFilter;
    })();

    /**
     * ResourceCategory enum.
     * @name resource.ResourceCategory
     * @enum {number}
     * @property {number} UNSPECIFIED=0 UNSPECIFIED value
     * @property {number} ARTS_AND_ENTERTAINMENT=1 ARTS_AND_ENTERTAINMENT value
     * @property {number} AUTOMOTIVE=2 AUTOMOTIVE value
     * @property {number} BEAUTY_AND_FITNESS=3 BEAUTY_AND_FITNESS value
     * @property {number} BOOKS_AND_LITERATURE=4 BOOKS_AND_LITERATURE value
     * @property {number} BUSINESS_AND_INDUSTRIAL_MARKETS=5 BUSINESS_AND_INDUSTRIAL_MARKETS value
     * @property {number} TECHNOLOGY=6 TECHNOLOGY value
     * @property {number} FINANCE=7 FINANCE value
     * @property {number} FOOD_AND_DRINK=8 FOOD_AND_DRINK value
     * @property {number} GAMES=9 GAMES value
     * @property {number} HEALTHCARE=10 HEALTHCARE value
     * @property {number} HOBBIES_AND_LEISURE=11 HOBBIES_AND_LEISURE value
     * @property {number} HOME_AND_GARDEN=12 HOME_AND_GARDEN value
     * @property {number} INTERNET_AND_TELECOM=13 INTERNET_AND_TELECOM value
     * @property {number} JOBS_AND_EDUCATION=14 JOBS_AND_EDUCATION value
     * @property {number} LAW_AND_GOVERNMENT=15 LAW_AND_GOVERNMENT value
     * @property {number} NEWS=16 NEWS value
     * @property {number} ONLINE_COMMUNITIES=17 ONLINE_COMMUNITIES value
     * @property {number} PEOPLE_AND_SOCIETY=18 PEOPLE_AND_SOCIETY value
     * @property {number} PETS_AND_ANIMALS=19 PETS_AND_ANIMALS value
     * @property {number} REAL_ESTATE=20 REAL_ESTATE value
     * @property {number} REFERENCE=21 REFERENCE value
     * @property {number} SCIENCE=22 SCIENCE value
     * @property {number} SHOPPING=23 SHOPPING value
     * @property {number} SPORTS=24 SPORTS value
     * @property {number} TRAVEL=25 TRAVEL value
     * @property {number} OTHER=26 OTHER value
     */
    resource.ResourceCategory = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED"] = 0;
        values[valuesById[1] = "ARTS_AND_ENTERTAINMENT"] = 1;
        values[valuesById[2] = "AUTOMOTIVE"] = 2;
        values[valuesById[3] = "BEAUTY_AND_FITNESS"] = 3;
        values[valuesById[4] = "BOOKS_AND_LITERATURE"] = 4;
        values[valuesById[5] = "BUSINESS_AND_INDUSTRIAL_MARKETS"] = 5;
        values[valuesById[6] = "TECHNOLOGY"] = 6;
        values[valuesById[7] = "FINANCE"] = 7;
        values[valuesById[8] = "FOOD_AND_DRINK"] = 8;
        values[valuesById[9] = "GAMES"] = 9;
        values[valuesById[10] = "HEALTHCARE"] = 10;
        values[valuesById[11] = "HOBBIES_AND_LEISURE"] = 11;
        values[valuesById[12] = "HOME_AND_GARDEN"] = 12;
        values[valuesById[13] = "INTERNET_AND_TELECOM"] = 13;
        values[valuesById[14] = "JOBS_AND_EDUCATION"] = 14;
        values[valuesById[15] = "LAW_AND_GOVERNMENT"] = 15;
        values[valuesById[16] = "NEWS"] = 16;
        values[valuesById[17] = "ONLINE_COMMUNITIES"] = 17;
        values[valuesById[18] = "PEOPLE_AND_SOCIETY"] = 18;
        values[valuesById[19] = "PETS_AND_ANIMALS"] = 19;
        values[valuesById[20] = "REAL_ESTATE"] = 20;
        values[valuesById[21] = "REFERENCE"] = 21;
        values[valuesById[22] = "SCIENCE"] = 22;
        values[valuesById[23] = "SHOPPING"] = 23;
        values[valuesById[24] = "SPORTS"] = 24;
        values[valuesById[25] = "TRAVEL"] = 25;
        values[valuesById[26] = "OTHER"] = 26;
        return values;
    })();

    return resource;
})();

module.exports = $root;
