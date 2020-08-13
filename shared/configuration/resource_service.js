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
         * @property {number|Long|null} [createTime] ResourceProps createTime
         * @property {number|Long|null} [updateTime] ResourceProps updateTime
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
         * ResourceProps createTime.
         * @member {number|Long} createTime
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResourceProps updateTime.
         * @member {number|Long} updateTime
         * @memberof resource.ResourceProps
         * @instance
         */
        ResourceProps.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createTime);
            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.updateTime);
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
                    message.createTime = reader.int64();
                    break;
                case 6:
                    message.updateTime = reader.int64();
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
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
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
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = options.enums === String ? $root.resource.ResourceCategory[message.category] : message.category;
            if (message.defaultWebsiteUrl != null && message.hasOwnProperty("defaultWebsiteUrl"))
                object.defaultWebsiteUrl = message.defaultWebsiteUrl;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
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

$root.ResourceService = (function() {

    /**
     * Constructs a new ResourceService service.
     * @exports ResourceService
     * @classdesc Represents a ResourceService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ResourceService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ResourceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ResourceService;

    /**
     * Creates new ResourceService service using the specified rpc implementation.
     * @function create
     * @memberof ResourceService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ResourceService} RPC service. Useful where requests and/or responses are streamed.
     */
    ResourceService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ResourceService#listResources}.
     * @memberof ResourceService
     * @typedef ListResourcesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ListResourcesResponse} [response] ListResourcesResponse
     */

    /**
     * Calls ListResources.
     * @function listResources
     * @memberof ResourceService
     * @instance
     * @param {IListResourcesRequest} request ListResourcesRequest message or plain object
     * @param {ResourceService.ListResourcesCallback} callback Node-style callback called with the error, if any, and ListResourcesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ResourceService.prototype.listResources = function listResources(request, callback) {
        return this.rpcCall(listResources, $root.ListResourcesRequest, $root.ListResourcesResponse, request, callback);
    }, "name", { value: "ListResources" });

    /**
     * Calls ListResources.
     * @function listResources
     * @memberof ResourceService
     * @instance
     * @param {IListResourcesRequest} request ListResourcesRequest message or plain object
     * @returns {Promise<ListResourcesResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ResourceService#createResource}.
     * @memberof ResourceService
     * @typedef CreateResourceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CreateResourceResponse} [response] CreateResourceResponse
     */

    /**
     * Calls CreateResource.
     * @function createResource
     * @memberof ResourceService
     * @instance
     * @param {ICreateResourceRequest} request CreateResourceRequest message or plain object
     * @param {ResourceService.CreateResourceCallback} callback Node-style callback called with the error, if any, and CreateResourceResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ResourceService.prototype.createResource = function createResource(request, callback) {
        return this.rpcCall(createResource, $root.CreateResourceRequest, $root.CreateResourceResponse, request, callback);
    }, "name", { value: "CreateResource" });

    /**
     * Calls CreateResource.
     * @function createResource
     * @memberof ResourceService
     * @instance
     * @param {ICreateResourceRequest} request CreateResourceRequest message or plain object
     * @returns {Promise<CreateResourceResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ResourceService#updateResource}.
     * @memberof ResourceService
     * @typedef UpdateResourceCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {UpdateResourceResponse} [response] UpdateResourceResponse
     */

    /**
     * Calls UpdateResource.
     * @function updateResource
     * @memberof ResourceService
     * @instance
     * @param {IUpdateResourceRequest} request UpdateResourceRequest message or plain object
     * @param {ResourceService.UpdateResourceCallback} callback Node-style callback called with the error, if any, and UpdateResourceResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ResourceService.prototype.updateResource = function updateResource(request, callback) {
        return this.rpcCall(updateResource, $root.UpdateResourceRequest, $root.UpdateResourceResponse, request, callback);
    }, "name", { value: "UpdateResource" });

    /**
     * Calls UpdateResource.
     * @function updateResource
     * @memberof ResourceService
     * @instance
     * @param {IUpdateResourceRequest} request UpdateResourceRequest message or plain object
     * @returns {Promise<UpdateResourceResponse>} Promise
     * @variation 2
     */

    return ResourceService;
})();

$root.ListResourcesRequest = (function() {

    /**
     * Properties of a ListResourcesRequest.
     * @exports IListResourcesRequest
     * @interface IListResourcesRequest
     * @property {resource.IResourceFilter|null} [filter] ListResourcesRequest filter
     * @property {number|null} [limit] ListResourcesRequest limit
     * @property {number|null} [offset] ListResourcesRequest offset
     * @property {string|null} [orderBy] ListResourcesRequest orderBy
     */

    /**
     * Constructs a new ListResourcesRequest.
     * @exports ListResourcesRequest
     * @classdesc Represents a ListResourcesRequest.
     * @implements IListResourcesRequest
     * @constructor
     * @param {IListResourcesRequest=} [properties] Properties to set
     */
    function ListResourcesRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListResourcesRequest filter.
     * @member {resource.IResourceFilter|null|undefined} filter
     * @memberof ListResourcesRequest
     * @instance
     */
    ListResourcesRequest.prototype.filter = null;

    /**
     * ListResourcesRequest limit.
     * @member {number} limit
     * @memberof ListResourcesRequest
     * @instance
     */
    ListResourcesRequest.prototype.limit = 0;

    /**
     * ListResourcesRequest offset.
     * @member {number} offset
     * @memberof ListResourcesRequest
     * @instance
     */
    ListResourcesRequest.prototype.offset = 0;

    /**
     * ListResourcesRequest orderBy.
     * @member {string} orderBy
     * @memberof ListResourcesRequest
     * @instance
     */
    ListResourcesRequest.prototype.orderBy = "";

    /**
     * Creates a new ListResourcesRequest instance using the specified properties.
     * @function create
     * @memberof ListResourcesRequest
     * @static
     * @param {IListResourcesRequest=} [properties] Properties to set
     * @returns {ListResourcesRequest} ListResourcesRequest instance
     */
    ListResourcesRequest.create = function create(properties) {
        return new ListResourcesRequest(properties);
    };

    /**
     * Encodes the specified ListResourcesRequest message. Does not implicitly {@link ListResourcesRequest.verify|verify} messages.
     * @function encode
     * @memberof ListResourcesRequest
     * @static
     * @param {IListResourcesRequest} message ListResourcesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListResourcesRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
            $root.resource.ResourceFilter.encode(message.filter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.offset);
        if (message.orderBy != null && Object.hasOwnProperty.call(message, "orderBy"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderBy);
        return writer;
    };

    /**
     * Encodes the specified ListResourcesRequest message, length delimited. Does not implicitly {@link ListResourcesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListResourcesRequest
     * @static
     * @param {IListResourcesRequest} message ListResourcesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListResourcesRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListResourcesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ListResourcesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListResourcesRequest} ListResourcesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListResourcesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListResourcesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.filter = $root.resource.ResourceFilter.decode(reader, reader.uint32());
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
     * Decodes a ListResourcesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListResourcesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListResourcesRequest} ListResourcesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListResourcesRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListResourcesRequest message.
     * @function verify
     * @memberof ListResourcesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListResourcesRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.filter != null && message.hasOwnProperty("filter")) {
            var error = $root.resource.ResourceFilter.verify(message.filter);
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
     * Creates a ListResourcesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListResourcesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListResourcesRequest} ListResourcesRequest
     */
    ListResourcesRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ListResourcesRequest)
            return object;
        var message = new $root.ListResourcesRequest();
        if (object.filter != null) {
            if (typeof object.filter !== "object")
                throw TypeError(".ListResourcesRequest.filter: object expected");
            message.filter = $root.resource.ResourceFilter.fromObject(object.filter);
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
     * Creates a plain object from a ListResourcesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListResourcesRequest
     * @static
     * @param {ListResourcesRequest} message ListResourcesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListResourcesRequest.toObject = function toObject(message, options) {
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
            object.filter = $root.resource.ResourceFilter.toObject(message.filter, options);
        if (message.limit != null && message.hasOwnProperty("limit"))
            object.limit = message.limit;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.orderBy != null && message.hasOwnProperty("orderBy"))
            object.orderBy = message.orderBy;
        return object;
    };

    /**
     * Converts this ListResourcesRequest to JSON.
     * @function toJSON
     * @memberof ListResourcesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListResourcesRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListResourcesRequest;
})();

$root.ListResourcesResponse = (function() {

    /**
     * Properties of a ListResourcesResponse.
     * @exports IListResourcesResponse
     * @interface IListResourcesResponse
     * @property {Array.<resource.IResourceProps>|null} [resources] ListResourcesResponse resources
     * @property {number|null} [count] ListResourcesResponse count
     */

    /**
     * Constructs a new ListResourcesResponse.
     * @exports ListResourcesResponse
     * @classdesc Represents a ListResourcesResponse.
     * @implements IListResourcesResponse
     * @constructor
     * @param {IListResourcesResponse=} [properties] Properties to set
     */
    function ListResourcesResponse(properties) {
        this.resources = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListResourcesResponse resources.
     * @member {Array.<resource.IResourceProps>} resources
     * @memberof ListResourcesResponse
     * @instance
     */
    ListResourcesResponse.prototype.resources = $util.emptyArray;

    /**
     * ListResourcesResponse count.
     * @member {number} count
     * @memberof ListResourcesResponse
     * @instance
     */
    ListResourcesResponse.prototype.count = 0;

    /**
     * Creates a new ListResourcesResponse instance using the specified properties.
     * @function create
     * @memberof ListResourcesResponse
     * @static
     * @param {IListResourcesResponse=} [properties] Properties to set
     * @returns {ListResourcesResponse} ListResourcesResponse instance
     */
    ListResourcesResponse.create = function create(properties) {
        return new ListResourcesResponse(properties);
    };

    /**
     * Encodes the specified ListResourcesResponse message. Does not implicitly {@link ListResourcesResponse.verify|verify} messages.
     * @function encode
     * @memberof ListResourcesResponse
     * @static
     * @param {IListResourcesResponse} message ListResourcesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListResourcesResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.resources != null && message.resources.length)
            for (var i = 0; i < message.resources.length; ++i)
                $root.resource.ResourceProps.encode(message.resources[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified ListResourcesResponse message, length delimited. Does not implicitly {@link ListResourcesResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListResourcesResponse
     * @static
     * @param {IListResourcesResponse} message ListResourcesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListResourcesResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListResourcesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ListResourcesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListResourcesResponse} ListResourcesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListResourcesResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListResourcesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.resources && message.resources.length))
                    message.resources = [];
                message.resources.push($root.resource.ResourceProps.decode(reader, reader.uint32()));
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
     * Decodes a ListResourcesResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListResourcesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListResourcesResponse} ListResourcesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListResourcesResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListResourcesResponse message.
     * @function verify
     * @memberof ListResourcesResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListResourcesResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.resources != null && message.hasOwnProperty("resources")) {
            if (!Array.isArray(message.resources))
                return "resources: array expected";
            for (var i = 0; i < message.resources.length; ++i) {
                var error = $root.resource.ResourceProps.verify(message.resources[i]);
                if (error)
                    return "resources." + error;
            }
        }
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a ListResourcesResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListResourcesResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListResourcesResponse} ListResourcesResponse
     */
    ListResourcesResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ListResourcesResponse)
            return object;
        var message = new $root.ListResourcesResponse();
        if (object.resources) {
            if (!Array.isArray(object.resources))
                throw TypeError(".ListResourcesResponse.resources: array expected");
            message.resources = [];
            for (var i = 0; i < object.resources.length; ++i) {
                if (typeof object.resources[i] !== "object")
                    throw TypeError(".ListResourcesResponse.resources: object expected");
                message.resources[i] = $root.resource.ResourceProps.fromObject(object.resources[i]);
            }
        }
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a ListResourcesResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListResourcesResponse
     * @static
     * @param {ListResourcesResponse} message ListResourcesResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListResourcesResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.resources = [];
        if (options.defaults)
            object.count = 0;
        if (message.resources && message.resources.length) {
            object.resources = [];
            for (var j = 0; j < message.resources.length; ++j)
                object.resources[j] = $root.resource.ResourceProps.toObject(message.resources[j], options);
        }
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this ListResourcesResponse to JSON.
     * @function toJSON
     * @memberof ListResourcesResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListResourcesResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListResourcesResponse;
})();

$root.CreateResourceRequest = (function() {

    /**
     * Properties of a CreateResourceRequest.
     * @exports ICreateResourceRequest
     * @interface ICreateResourceRequest
     * @property {resource.ICreateResourceInput|null} [data] CreateResourceRequest data
     */

    /**
     * Constructs a new CreateResourceRequest.
     * @exports CreateResourceRequest
     * @classdesc Represents a CreateResourceRequest.
     * @implements ICreateResourceRequest
     * @constructor
     * @param {ICreateResourceRequest=} [properties] Properties to set
     */
    function CreateResourceRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateResourceRequest data.
     * @member {resource.ICreateResourceInput|null|undefined} data
     * @memberof CreateResourceRequest
     * @instance
     */
    CreateResourceRequest.prototype.data = null;

    /**
     * Creates a new CreateResourceRequest instance using the specified properties.
     * @function create
     * @memberof CreateResourceRequest
     * @static
     * @param {ICreateResourceRequest=} [properties] Properties to set
     * @returns {CreateResourceRequest} CreateResourceRequest instance
     */
    CreateResourceRequest.create = function create(properties) {
        return new CreateResourceRequest(properties);
    };

    /**
     * Encodes the specified CreateResourceRequest message. Does not implicitly {@link CreateResourceRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateResourceRequest
     * @static
     * @param {ICreateResourceRequest} message CreateResourceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateResourceRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.resource.CreateResourceInput.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateResourceRequest message, length delimited. Does not implicitly {@link CreateResourceRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateResourceRequest
     * @static
     * @param {ICreateResourceRequest} message CreateResourceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateResourceRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateResourceRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateResourceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateResourceRequest} CreateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateResourceRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateResourceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = $root.resource.CreateResourceInput.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateResourceRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateResourceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateResourceRequest} CreateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateResourceRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateResourceRequest message.
     * @function verify
     * @memberof CreateResourceRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateResourceRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.resource.CreateResourceInput.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates a CreateResourceRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateResourceRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateResourceRequest} CreateResourceRequest
     */
    CreateResourceRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateResourceRequest)
            return object;
        var message = new $root.CreateResourceRequest();
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".CreateResourceRequest.data: object expected");
            message.data = $root.resource.CreateResourceInput.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateResourceRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateResourceRequest
     * @static
     * @param {CreateResourceRequest} message CreateResourceRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateResourceRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.data = null;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.resource.CreateResourceInput.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this CreateResourceRequest to JSON.
     * @function toJSON
     * @memberof CreateResourceRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateResourceRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateResourceRequest;
})();

$root.CreateResourceResponse = (function() {

    /**
     * Properties of a CreateResourceResponse.
     * @exports ICreateResourceResponse
     * @interface ICreateResourceResponse
     * @property {resource.IResourceProps|null} [instance] CreateResourceResponse instance
     */

    /**
     * Constructs a new CreateResourceResponse.
     * @exports CreateResourceResponse
     * @classdesc Represents a CreateResourceResponse.
     * @implements ICreateResourceResponse
     * @constructor
     * @param {ICreateResourceResponse=} [properties] Properties to set
     */
    function CreateResourceResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateResourceResponse instance.
     * @member {resource.IResourceProps|null|undefined} instance
     * @memberof CreateResourceResponse
     * @instance
     */
    CreateResourceResponse.prototype.instance = null;

    /**
     * Creates a new CreateResourceResponse instance using the specified properties.
     * @function create
     * @memberof CreateResourceResponse
     * @static
     * @param {ICreateResourceResponse=} [properties] Properties to set
     * @returns {CreateResourceResponse} CreateResourceResponse instance
     */
    CreateResourceResponse.create = function create(properties) {
        return new CreateResourceResponse(properties);
    };

    /**
     * Encodes the specified CreateResourceResponse message. Does not implicitly {@link CreateResourceResponse.verify|verify} messages.
     * @function encode
     * @memberof CreateResourceResponse
     * @static
     * @param {ICreateResourceResponse} message CreateResourceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateResourceResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.instance != null && Object.hasOwnProperty.call(message, "instance"))
            $root.resource.ResourceProps.encode(message.instance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateResourceResponse message, length delimited. Does not implicitly {@link CreateResourceResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateResourceResponse
     * @static
     * @param {ICreateResourceResponse} message CreateResourceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateResourceResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateResourceResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreateResourceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateResourceResponse} CreateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateResourceResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateResourceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.instance = $root.resource.ResourceProps.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateResourceResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateResourceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateResourceResponse} CreateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateResourceResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateResourceResponse message.
     * @function verify
     * @memberof CreateResourceResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateResourceResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.instance != null && message.hasOwnProperty("instance")) {
            var error = $root.resource.ResourceProps.verify(message.instance);
            if (error)
                return "instance." + error;
        }
        return null;
    };

    /**
     * Creates a CreateResourceResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateResourceResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateResourceResponse} CreateResourceResponse
     */
    CreateResourceResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateResourceResponse)
            return object;
        var message = new $root.CreateResourceResponse();
        if (object.instance != null) {
            if (typeof object.instance !== "object")
                throw TypeError(".CreateResourceResponse.instance: object expected");
            message.instance = $root.resource.ResourceProps.fromObject(object.instance);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateResourceResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateResourceResponse
     * @static
     * @param {CreateResourceResponse} message CreateResourceResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateResourceResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.instance = null;
        if (message.instance != null && message.hasOwnProperty("instance"))
            object.instance = $root.resource.ResourceProps.toObject(message.instance, options);
        return object;
    };

    /**
     * Converts this CreateResourceResponse to JSON.
     * @function toJSON
     * @memberof CreateResourceResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateResourceResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateResourceResponse;
})();

$root.UpdateResourceRequest = (function() {

    /**
     * Properties of an UpdateResourceRequest.
     * @exports IUpdateResourceRequest
     * @interface IUpdateResourceRequest
     * @property {string|null} [id] UpdateResourceRequest id
     * @property {resource.IUpdateResourceInput|null} [data] UpdateResourceRequest data
     */

    /**
     * Constructs a new UpdateResourceRequest.
     * @exports UpdateResourceRequest
     * @classdesc Represents an UpdateResourceRequest.
     * @implements IUpdateResourceRequest
     * @constructor
     * @param {IUpdateResourceRequest=} [properties] Properties to set
     */
    function UpdateResourceRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateResourceRequest id.
     * @member {string} id
     * @memberof UpdateResourceRequest
     * @instance
     */
    UpdateResourceRequest.prototype.id = "";

    /**
     * UpdateResourceRequest data.
     * @member {resource.IUpdateResourceInput|null|undefined} data
     * @memberof UpdateResourceRequest
     * @instance
     */
    UpdateResourceRequest.prototype.data = null;

    /**
     * Creates a new UpdateResourceRequest instance using the specified properties.
     * @function create
     * @memberof UpdateResourceRequest
     * @static
     * @param {IUpdateResourceRequest=} [properties] Properties to set
     * @returns {UpdateResourceRequest} UpdateResourceRequest instance
     */
    UpdateResourceRequest.create = function create(properties) {
        return new UpdateResourceRequest(properties);
    };

    /**
     * Encodes the specified UpdateResourceRequest message. Does not implicitly {@link UpdateResourceRequest.verify|verify} messages.
     * @function encode
     * @memberof UpdateResourceRequest
     * @static
     * @param {IUpdateResourceRequest} message UpdateResourceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateResourceRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.resource.UpdateResourceInput.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateResourceRequest message, length delimited. Does not implicitly {@link UpdateResourceRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateResourceRequest
     * @static
     * @param {IUpdateResourceRequest} message UpdateResourceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateResourceRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateResourceRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateResourceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateResourceRequest} UpdateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateResourceRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateResourceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.data = $root.resource.UpdateResourceInput.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateResourceRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateResourceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateResourceRequest} UpdateResourceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateResourceRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateResourceRequest message.
     * @function verify
     * @memberof UpdateResourceRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateResourceRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.resource.UpdateResourceInput.verify(message.data);
            if (error)
                return "data." + error;
        }
        return null;
    };

    /**
     * Creates an UpdateResourceRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateResourceRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateResourceRequest} UpdateResourceRequest
     */
    UpdateResourceRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateResourceRequest)
            return object;
        var message = new $root.UpdateResourceRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".UpdateResourceRequest.data: object expected");
            message.data = $root.resource.UpdateResourceInput.fromObject(object.data);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateResourceRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateResourceRequest
     * @static
     * @param {UpdateResourceRequest} message UpdateResourceRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateResourceRequest.toObject = function toObject(message, options) {
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
            object.data = $root.resource.UpdateResourceInput.toObject(message.data, options);
        return object;
    };

    /**
     * Converts this UpdateResourceRequest to JSON.
     * @function toJSON
     * @memberof UpdateResourceRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateResourceRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateResourceRequest;
})();

$root.UpdateResourceResponse = (function() {

    /**
     * Properties of an UpdateResourceResponse.
     * @exports IUpdateResourceResponse
     * @interface IUpdateResourceResponse
     * @property {resource.IResourceProps|null} [instance] UpdateResourceResponse instance
     */

    /**
     * Constructs a new UpdateResourceResponse.
     * @exports UpdateResourceResponse
     * @classdesc Represents an UpdateResourceResponse.
     * @implements IUpdateResourceResponse
     * @constructor
     * @param {IUpdateResourceResponse=} [properties] Properties to set
     */
    function UpdateResourceResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateResourceResponse instance.
     * @member {resource.IResourceProps|null|undefined} instance
     * @memberof UpdateResourceResponse
     * @instance
     */
    UpdateResourceResponse.prototype.instance = null;

    /**
     * Creates a new UpdateResourceResponse instance using the specified properties.
     * @function create
     * @memberof UpdateResourceResponse
     * @static
     * @param {IUpdateResourceResponse=} [properties] Properties to set
     * @returns {UpdateResourceResponse} UpdateResourceResponse instance
     */
    UpdateResourceResponse.create = function create(properties) {
        return new UpdateResourceResponse(properties);
    };

    /**
     * Encodes the specified UpdateResourceResponse message. Does not implicitly {@link UpdateResourceResponse.verify|verify} messages.
     * @function encode
     * @memberof UpdateResourceResponse
     * @static
     * @param {IUpdateResourceResponse} message UpdateResourceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateResourceResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.instance != null && Object.hasOwnProperty.call(message, "instance"))
            $root.resource.ResourceProps.encode(message.instance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UpdateResourceResponse message, length delimited. Does not implicitly {@link UpdateResourceResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateResourceResponse
     * @static
     * @param {IUpdateResourceResponse} message UpdateResourceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateResourceResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateResourceResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateResourceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateResourceResponse} UpdateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateResourceResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateResourceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.instance = $root.resource.ResourceProps.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateResourceResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateResourceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateResourceResponse} UpdateResourceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateResourceResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateResourceResponse message.
     * @function verify
     * @memberof UpdateResourceResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateResourceResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.instance != null && message.hasOwnProperty("instance")) {
            var error = $root.resource.ResourceProps.verify(message.instance);
            if (error)
                return "instance." + error;
        }
        return null;
    };

    /**
     * Creates an UpdateResourceResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateResourceResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateResourceResponse} UpdateResourceResponse
     */
    UpdateResourceResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateResourceResponse)
            return object;
        var message = new $root.UpdateResourceResponse();
        if (object.instance != null) {
            if (typeof object.instance !== "object")
                throw TypeError(".UpdateResourceResponse.instance: object expected");
            message.instance = $root.resource.ResourceProps.fromObject(object.instance);
        }
        return message;
    };

    /**
     * Creates a plain object from an UpdateResourceResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateResourceResponse
     * @static
     * @param {UpdateResourceResponse} message UpdateResourceResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateResourceResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.instance = null;
        if (message.instance != null && message.hasOwnProperty("instance"))
            object.instance = $root.resource.ResourceProps.toObject(message.instance, options);
        return object;
    };

    /**
     * Converts this UpdateResourceResponse to JSON.
     * @function toJSON
     * @memberof UpdateResourceResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateResourceResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UpdateResourceResponse;
})();

module.exports = $root;
