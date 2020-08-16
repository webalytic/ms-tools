/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.session = (function() {

    /**
     * Namespace session.
     * @exports session
     * @namespace
     */
    var session = {};

    session.SessionTotals = (function() {

        /**
         * Properties of a SessionTotals.
         * @memberof session
         * @interface ISessionTotals
         * @property {number|null} [hits] SessionTotals hits
         * @property {number|null} [pageviews] SessionTotals pageviews
         * @property {number|null} [events] SessionTotals events
         */

        /**
         * Constructs a new SessionTotals.
         * @memberof session
         * @classdesc Represents a SessionTotals.
         * @implements ISessionTotals
         * @constructor
         * @param {session.ISessionTotals=} [properties] Properties to set
         */
        function SessionTotals(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionTotals hits.
         * @member {number} hits
         * @memberof session.SessionTotals
         * @instance
         */
        SessionTotals.prototype.hits = 0;

        /**
         * SessionTotals pageviews.
         * @member {number} pageviews
         * @memberof session.SessionTotals
         * @instance
         */
        SessionTotals.prototype.pageviews = 0;

        /**
         * SessionTotals events.
         * @member {number} events
         * @memberof session.SessionTotals
         * @instance
         */
        SessionTotals.prototype.events = 0;

        /**
         * Creates a new SessionTotals instance using the specified properties.
         * @function create
         * @memberof session.SessionTotals
         * @static
         * @param {session.ISessionTotals=} [properties] Properties to set
         * @returns {session.SessionTotals} SessionTotals instance
         */
        SessionTotals.create = function create(properties) {
            return new SessionTotals(properties);
        };

        /**
         * Encodes the specified SessionTotals message. Does not implicitly {@link session.SessionTotals.verify|verify} messages.
         * @function encode
         * @memberof session.SessionTotals
         * @static
         * @param {session.ISessionTotals} message SessionTotals message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionTotals.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hits != null && Object.hasOwnProperty.call(message, "hits"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hits);
            if (message.pageviews != null && Object.hasOwnProperty.call(message, "pageviews"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageviews);
            if (message.events != null && Object.hasOwnProperty.call(message, "events"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.events);
            return writer;
        };

        /**
         * Encodes the specified SessionTotals message, length delimited. Does not implicitly {@link session.SessionTotals.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.SessionTotals
         * @static
         * @param {session.ISessionTotals} message SessionTotals message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionTotals.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionTotals message from the specified reader or buffer.
         * @function decode
         * @memberof session.SessionTotals
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.SessionTotals} SessionTotals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionTotals.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.SessionTotals();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hits = reader.int32();
                    break;
                case 2:
                    message.pageviews = reader.int32();
                    break;
                case 3:
                    message.events = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionTotals message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.SessionTotals
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.SessionTotals} SessionTotals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionTotals.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionTotals message.
         * @function verify
         * @memberof session.SessionTotals
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionTotals.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hits != null && message.hasOwnProperty("hits"))
                if (!$util.isInteger(message.hits))
                    return "hits: integer expected";
            if (message.pageviews != null && message.hasOwnProperty("pageviews"))
                if (!$util.isInteger(message.pageviews))
                    return "pageviews: integer expected";
            if (message.events != null && message.hasOwnProperty("events"))
                if (!$util.isInteger(message.events))
                    return "events: integer expected";
            return null;
        };

        /**
         * Creates a SessionTotals message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.SessionTotals
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.SessionTotals} SessionTotals
         */
        SessionTotals.fromObject = function fromObject(object) {
            if (object instanceof $root.session.SessionTotals)
                return object;
            var message = new $root.session.SessionTotals();
            if (object.hits != null)
                message.hits = object.hits | 0;
            if (object.pageviews != null)
                message.pageviews = object.pageviews | 0;
            if (object.events != null)
                message.events = object.events | 0;
            return message;
        };

        /**
         * Creates a plain object from a SessionTotals message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.SessionTotals
         * @static
         * @param {session.SessionTotals} message SessionTotals
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionTotals.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hits = 0;
                object.pageviews = 0;
                object.events = 0;
            }
            if (message.hits != null && message.hasOwnProperty("hits"))
                object.hits = message.hits;
            if (message.pageviews != null && message.hasOwnProperty("pageviews"))
                object.pageviews = message.pageviews;
            if (message.events != null && message.hasOwnProperty("events"))
                object.events = message.events;
            return object;
        };

        /**
         * Converts this SessionTotals to JSON.
         * @function toJSON
         * @memberof session.SessionTotals
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionTotals.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionTotals;
    })();

    session.TrafficSource = (function() {

        /**
         * Properties of a TrafficSource.
         * @memberof session
         * @interface ITrafficSource
         * @property {string|null} [source] TrafficSource source
         * @property {string|null} [campaign] TrafficSource campaign
         * @property {string|null} [medium] TrafficSource medium
         * @property {string|null} [keyword] TrafficSource keyword
         * @property {string|null} [content] TrafficSource content
         * @property {string|null} [referralPath] TrafficSource referralPath
         */

        /**
         * Constructs a new TrafficSource.
         * @memberof session
         * @classdesc Represents a TrafficSource.
         * @implements ITrafficSource
         * @constructor
         * @param {session.ITrafficSource=} [properties] Properties to set
         */
        function TrafficSource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TrafficSource source.
         * @member {string} source
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.source = "";

        /**
         * TrafficSource campaign.
         * @member {string} campaign
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.campaign = "";

        /**
         * TrafficSource medium.
         * @member {string} medium
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.medium = "";

        /**
         * TrafficSource keyword.
         * @member {string} keyword
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.keyword = "";

        /**
         * TrafficSource content.
         * @member {string} content
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.content = "";

        /**
         * TrafficSource referralPath.
         * @member {string} referralPath
         * @memberof session.TrafficSource
         * @instance
         */
        TrafficSource.prototype.referralPath = "";

        /**
         * Creates a new TrafficSource instance using the specified properties.
         * @function create
         * @memberof session.TrafficSource
         * @static
         * @param {session.ITrafficSource=} [properties] Properties to set
         * @returns {session.TrafficSource} TrafficSource instance
         */
        TrafficSource.create = function create(properties) {
            return new TrafficSource(properties);
        };

        /**
         * Encodes the specified TrafficSource message. Does not implicitly {@link session.TrafficSource.verify|verify} messages.
         * @function encode
         * @memberof session.TrafficSource
         * @static
         * @param {session.ITrafficSource} message TrafficSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TrafficSource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.source);
            if (message.campaign != null && Object.hasOwnProperty.call(message, "campaign"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.campaign);
            if (message.medium != null && Object.hasOwnProperty.call(message, "medium"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.medium);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.keyword);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.referralPath != null && Object.hasOwnProperty.call(message, "referralPath"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.referralPath);
            return writer;
        };

        /**
         * Encodes the specified TrafficSource message, length delimited. Does not implicitly {@link session.TrafficSource.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.TrafficSource
         * @static
         * @param {session.ITrafficSource} message TrafficSource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TrafficSource.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TrafficSource message from the specified reader or buffer.
         * @function decode
         * @memberof session.TrafficSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.TrafficSource} TrafficSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TrafficSource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.TrafficSource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.source = reader.string();
                    break;
                case 2:
                    message.campaign = reader.string();
                    break;
                case 3:
                    message.medium = reader.string();
                    break;
                case 4:
                    message.keyword = reader.string();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    message.referralPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TrafficSource message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.TrafficSource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.TrafficSource} TrafficSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TrafficSource.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TrafficSource message.
         * @function verify
         * @memberof session.TrafficSource
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TrafficSource.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.campaign != null && message.hasOwnProperty("campaign"))
                if (!$util.isString(message.campaign))
                    return "campaign: string expected";
            if (message.medium != null && message.hasOwnProperty("medium"))
                if (!$util.isString(message.medium))
                    return "medium: string expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.referralPath != null && message.hasOwnProperty("referralPath"))
                if (!$util.isString(message.referralPath))
                    return "referralPath: string expected";
            return null;
        };

        /**
         * Creates a TrafficSource message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.TrafficSource
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.TrafficSource} TrafficSource
         */
        TrafficSource.fromObject = function fromObject(object) {
            if (object instanceof $root.session.TrafficSource)
                return object;
            var message = new $root.session.TrafficSource();
            if (object.source != null)
                message.source = String(object.source);
            if (object.campaign != null)
                message.campaign = String(object.campaign);
            if (object.medium != null)
                message.medium = String(object.medium);
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.content != null)
                message.content = String(object.content);
            if (object.referralPath != null)
                message.referralPath = String(object.referralPath);
            return message;
        };

        /**
         * Creates a plain object from a TrafficSource message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.TrafficSource
         * @static
         * @param {session.TrafficSource} message TrafficSource
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TrafficSource.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.source = "";
                object.campaign = "";
                object.medium = "";
                object.keyword = "";
                object.content = "";
                object.referralPath = "";
            }
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.campaign != null && message.hasOwnProperty("campaign"))
                object.campaign = message.campaign;
            if (message.medium != null && message.hasOwnProperty("medium"))
                object.medium = message.medium;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.referralPath != null && message.hasOwnProperty("referralPath"))
                object.referralPath = message.referralPath;
            return object;
        };

        /**
         * Converts this TrafficSource to JSON.
         * @function toJSON
         * @memberof session.TrafficSource
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TrafficSource.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TrafficSource;
    })();

    session.Device = (function() {

        /**
         * Properties of a Device.
         * @memberof session
         * @interface IDevice
         * @property {string|null} [browser] Device browser
         * @property {string|null} [browserVersion] Device browserVersion
         * @property {string|null} [operatingSystem] Device operatingSystem
         * @property {string|null} [operatingSystemVersion] Device operatingSystemVersion
         * @property {string|null} [deviceCategory] Device deviceCategory
         */

        /**
         * Constructs a new Device.
         * @memberof session
         * @classdesc Represents a Device.
         * @implements IDevice
         * @constructor
         * @param {session.IDevice=} [properties] Properties to set
         */
        function Device(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Device browser.
         * @member {string} browser
         * @memberof session.Device
         * @instance
         */
        Device.prototype.browser = "";

        /**
         * Device browserVersion.
         * @member {string} browserVersion
         * @memberof session.Device
         * @instance
         */
        Device.prototype.browserVersion = "";

        /**
         * Device operatingSystem.
         * @member {string} operatingSystem
         * @memberof session.Device
         * @instance
         */
        Device.prototype.operatingSystem = "";

        /**
         * Device operatingSystemVersion.
         * @member {string} operatingSystemVersion
         * @memberof session.Device
         * @instance
         */
        Device.prototype.operatingSystemVersion = "";

        /**
         * Device deviceCategory.
         * @member {string} deviceCategory
         * @memberof session.Device
         * @instance
         */
        Device.prototype.deviceCategory = "";

        /**
         * Creates a new Device instance using the specified properties.
         * @function create
         * @memberof session.Device
         * @static
         * @param {session.IDevice=} [properties] Properties to set
         * @returns {session.Device} Device instance
         */
        Device.create = function create(properties) {
            return new Device(properties);
        };

        /**
         * Encodes the specified Device message. Does not implicitly {@link session.Device.verify|verify} messages.
         * @function encode
         * @memberof session.Device
         * @static
         * @param {session.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.browser != null && Object.hasOwnProperty.call(message, "browser"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.browser);
            if (message.browserVersion != null && Object.hasOwnProperty.call(message, "browserVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.browserVersion);
            if (message.operatingSystem != null && Object.hasOwnProperty.call(message, "operatingSystem"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.operatingSystem);
            if (message.operatingSystemVersion != null && Object.hasOwnProperty.call(message, "operatingSystemVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.operatingSystemVersion);
            if (message.deviceCategory != null && Object.hasOwnProperty.call(message, "deviceCategory"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceCategory);
            return writer;
        };

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link session.Device.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.Device
         * @static
         * @param {session.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @function decode
         * @memberof session.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.Device();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.browser = reader.string();
                    break;
                case 2:
                    message.browserVersion = reader.string();
                    break;
                case 3:
                    message.operatingSystem = reader.string();
                    break;
                case 4:
                    message.operatingSystemVersion = reader.string();
                    break;
                case 5:
                    message.deviceCategory = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Device message.
         * @function verify
         * @memberof session.Device
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Device.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.browser != null && message.hasOwnProperty("browser"))
                if (!$util.isString(message.browser))
                    return "browser: string expected";
            if (message.browserVersion != null && message.hasOwnProperty("browserVersion"))
                if (!$util.isString(message.browserVersion))
                    return "browserVersion: string expected";
            if (message.operatingSystem != null && message.hasOwnProperty("operatingSystem"))
                if (!$util.isString(message.operatingSystem))
                    return "operatingSystem: string expected";
            if (message.operatingSystemVersion != null && message.hasOwnProperty("operatingSystemVersion"))
                if (!$util.isString(message.operatingSystemVersion))
                    return "operatingSystemVersion: string expected";
            if (message.deviceCategory != null && message.hasOwnProperty("deviceCategory"))
                if (!$util.isString(message.deviceCategory))
                    return "deviceCategory: string expected";
            return null;
        };

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.Device
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.Device} Device
         */
        Device.fromObject = function fromObject(object) {
            if (object instanceof $root.session.Device)
                return object;
            var message = new $root.session.Device();
            if (object.browser != null)
                message.browser = String(object.browser);
            if (object.browserVersion != null)
                message.browserVersion = String(object.browserVersion);
            if (object.operatingSystem != null)
                message.operatingSystem = String(object.operatingSystem);
            if (object.operatingSystemVersion != null)
                message.operatingSystemVersion = String(object.operatingSystemVersion);
            if (object.deviceCategory != null)
                message.deviceCategory = String(object.deviceCategory);
            return message;
        };

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.Device
         * @static
         * @param {session.Device} message Device
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Device.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.browser = "";
                object.browserVersion = "";
                object.operatingSystem = "";
                object.operatingSystemVersion = "";
                object.deviceCategory = "";
            }
            if (message.browser != null && message.hasOwnProperty("browser"))
                object.browser = message.browser;
            if (message.browserVersion != null && message.hasOwnProperty("browserVersion"))
                object.browserVersion = message.browserVersion;
            if (message.operatingSystem != null && message.hasOwnProperty("operatingSystem"))
                object.operatingSystem = message.operatingSystem;
            if (message.operatingSystemVersion != null && message.hasOwnProperty("operatingSystemVersion"))
                object.operatingSystemVersion = message.operatingSystemVersion;
            if (message.deviceCategory != null && message.hasOwnProperty("deviceCategory"))
                object.deviceCategory = message.deviceCategory;
            return object;
        };

        /**
         * Converts this Device to JSON.
         * @function toJSON
         * @memberof session.Device
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Device.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Device;
    })();

    session.GeoNetwork = (function() {

        /**
         * Properties of a GeoNetwork.
         * @memberof session
         * @interface IGeoNetwork
         * @property {string|null} [country] GeoNetwork country
         * @property {string|null} [region] GeoNetwork region
         * @property {string|null} [city] GeoNetwork city
         */

        /**
         * Constructs a new GeoNetwork.
         * @memberof session
         * @classdesc Represents a GeoNetwork.
         * @implements IGeoNetwork
         * @constructor
         * @param {session.IGeoNetwork=} [properties] Properties to set
         */
        function GeoNetwork(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GeoNetwork country.
         * @member {string} country
         * @memberof session.GeoNetwork
         * @instance
         */
        GeoNetwork.prototype.country = "";

        /**
         * GeoNetwork region.
         * @member {string} region
         * @memberof session.GeoNetwork
         * @instance
         */
        GeoNetwork.prototype.region = "";

        /**
         * GeoNetwork city.
         * @member {string} city
         * @memberof session.GeoNetwork
         * @instance
         */
        GeoNetwork.prototype.city = "";

        /**
         * Creates a new GeoNetwork instance using the specified properties.
         * @function create
         * @memberof session.GeoNetwork
         * @static
         * @param {session.IGeoNetwork=} [properties] Properties to set
         * @returns {session.GeoNetwork} GeoNetwork instance
         */
        GeoNetwork.create = function create(properties) {
            return new GeoNetwork(properties);
        };

        /**
         * Encodes the specified GeoNetwork message. Does not implicitly {@link session.GeoNetwork.verify|verify} messages.
         * @function encode
         * @memberof session.GeoNetwork
         * @static
         * @param {session.IGeoNetwork} message GeoNetwork message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeoNetwork.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.country);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.region);
            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.city);
            return writer;
        };

        /**
         * Encodes the specified GeoNetwork message, length delimited. Does not implicitly {@link session.GeoNetwork.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.GeoNetwork
         * @static
         * @param {session.IGeoNetwork} message GeoNetwork message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GeoNetwork.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GeoNetwork message from the specified reader or buffer.
         * @function decode
         * @memberof session.GeoNetwork
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.GeoNetwork} GeoNetwork
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeoNetwork.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.GeoNetwork();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.country = reader.string();
                    break;
                case 2:
                    message.region = reader.string();
                    break;
                case 3:
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
         * Decodes a GeoNetwork message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.GeoNetwork
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.GeoNetwork} GeoNetwork
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GeoNetwork.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GeoNetwork message.
         * @function verify
         * @memberof session.GeoNetwork
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GeoNetwork.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.region != null && message.hasOwnProperty("region"))
                if (!$util.isString(message.region))
                    return "region: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            return null;
        };

        /**
         * Creates a GeoNetwork message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.GeoNetwork
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.GeoNetwork} GeoNetwork
         */
        GeoNetwork.fromObject = function fromObject(object) {
            if (object instanceof $root.session.GeoNetwork)
                return object;
            var message = new $root.session.GeoNetwork();
            if (object.country != null)
                message.country = String(object.country);
            if (object.region != null)
                message.region = String(object.region);
            if (object.city != null)
                message.city = String(object.city);
            return message;
        };

        /**
         * Creates a plain object from a GeoNetwork message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.GeoNetwork
         * @static
         * @param {session.GeoNetwork} message GeoNetwork
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GeoNetwork.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.country = "";
                object.region = "";
                object.city = "";
            }
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.region != null && message.hasOwnProperty("region"))
                object.region = message.region;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            return object;
        };

        /**
         * Converts this GeoNetwork to JSON.
         * @function toJSON
         * @memberof session.GeoNetwork
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GeoNetwork.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GeoNetwork;
    })();

    session.SessionProps = (function() {

        /**
         * Properties of a SessionProps.
         * @memberof session
         * @interface ISessionProps
         * @property {string|null} [resourceId] SessionProps resourceId
         * @property {string|null} [date] SessionProps date
         * @property {string|null} [userId] SessionProps userId
         * @property {string|null} [clientId] SessionProps clientId
         * @property {string|null} [sessionId] SessionProps sessionId
         * @property {string|null} [sessionStartTime] SessionProps sessionStartTime
         * @property {session.ISessionTotals|null} [totals] SessionProps totals
         * @property {session.ITrafficSource|null} [trafficSource] SessionProps trafficSource
         * @property {session.IDevice|null} [device] SessionProps device
         * @property {session.IGeoNetwork|null} [geoNetwork] SessionProps geoNetwork
         * @property {number|null} [duration] SessionProps duration
         */

        /**
         * Constructs a new SessionProps.
         * @memberof session
         * @classdesc Represents a SessionProps.
         * @implements ISessionProps
         * @constructor
         * @param {session.ISessionProps=} [properties] Properties to set
         */
        function SessionProps(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionProps resourceId.
         * @member {string} resourceId
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.resourceId = "";

        /**
         * SessionProps date.
         * @member {string} date
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.date = "";

        /**
         * SessionProps userId.
         * @member {string} userId
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.userId = "";

        /**
         * SessionProps clientId.
         * @member {string} clientId
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.clientId = "";

        /**
         * SessionProps sessionId.
         * @member {string} sessionId
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.sessionId = "";

        /**
         * SessionProps sessionStartTime.
         * @member {string} sessionStartTime
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.sessionStartTime = "";

        /**
         * SessionProps totals.
         * @member {session.ISessionTotals|null|undefined} totals
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.totals = null;

        /**
         * SessionProps trafficSource.
         * @member {session.ITrafficSource|null|undefined} trafficSource
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.trafficSource = null;

        /**
         * SessionProps device.
         * @member {session.IDevice|null|undefined} device
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.device = null;

        /**
         * SessionProps geoNetwork.
         * @member {session.IGeoNetwork|null|undefined} geoNetwork
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.geoNetwork = null;

        /**
         * SessionProps duration.
         * @member {number} duration
         * @memberof session.SessionProps
         * @instance
         */
        SessionProps.prototype.duration = 0;

        /**
         * Creates a new SessionProps instance using the specified properties.
         * @function create
         * @memberof session.SessionProps
         * @static
         * @param {session.ISessionProps=} [properties] Properties to set
         * @returns {session.SessionProps} SessionProps instance
         */
        SessionProps.create = function create(properties) {
            return new SessionProps(properties);
        };

        /**
         * Encodes the specified SessionProps message. Does not implicitly {@link session.SessionProps.verify|verify} messages.
         * @function encode
         * @memberof session.SessionProps
         * @static
         * @param {session.ISessionProps} message SessionProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionProps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.date);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clientId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sessionId);
            if (message.sessionStartTime != null && Object.hasOwnProperty.call(message, "sessionStartTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sessionStartTime);
            if (message.totals != null && Object.hasOwnProperty.call(message, "totals"))
                $root.session.SessionTotals.encode(message.totals, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.trafficSource != null && Object.hasOwnProperty.call(message, "trafficSource"))
                $root.session.TrafficSource.encode(message.trafficSource, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                $root.session.Device.encode(message.device, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.geoNetwork != null && Object.hasOwnProperty.call(message, "geoNetwork"))
                $root.session.GeoNetwork.encode(message.geoNetwork, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.duration);
            return writer;
        };

        /**
         * Encodes the specified SessionProps message, length delimited. Does not implicitly {@link session.SessionProps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.SessionProps
         * @static
         * @param {session.ISessionProps} message SessionProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionProps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionProps message from the specified reader or buffer.
         * @function decode
         * @memberof session.SessionProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.SessionProps} SessionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionProps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.SessionProps();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resourceId = reader.string();
                    break;
                case 2:
                    message.date = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.clientId = reader.string();
                    break;
                case 5:
                    message.sessionId = reader.string();
                    break;
                case 6:
                    message.sessionStartTime = reader.string();
                    break;
                case 7:
                    message.totals = $root.session.SessionTotals.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.trafficSource = $root.session.TrafficSource.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.device = $root.session.Device.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.geoNetwork = $root.session.GeoNetwork.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.duration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionProps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.SessionProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.SessionProps} SessionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionProps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionProps message.
         * @function verify
         * @memberof session.SessionProps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionProps.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.sessionStartTime != null && message.hasOwnProperty("sessionStartTime"))
                if (!$util.isString(message.sessionStartTime))
                    return "sessionStartTime: string expected";
            if (message.totals != null && message.hasOwnProperty("totals")) {
                var error = $root.session.SessionTotals.verify(message.totals);
                if (error)
                    return "totals." + error;
            }
            if (message.trafficSource != null && message.hasOwnProperty("trafficSource")) {
                var error = $root.session.TrafficSource.verify(message.trafficSource);
                if (error)
                    return "trafficSource." + error;
            }
            if (message.device != null && message.hasOwnProperty("device")) {
                var error = $root.session.Device.verify(message.device);
                if (error)
                    return "device." + error;
            }
            if (message.geoNetwork != null && message.hasOwnProperty("geoNetwork")) {
                var error = $root.session.GeoNetwork.verify(message.geoNetwork);
                if (error)
                    return "geoNetwork." + error;
            }
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            return null;
        };

        /**
         * Creates a SessionProps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.SessionProps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.SessionProps} SessionProps
         */
        SessionProps.fromObject = function fromObject(object) {
            if (object instanceof $root.session.SessionProps)
                return object;
            var message = new $root.session.SessionProps();
            if (object.resourceId != null)
                message.resourceId = String(object.resourceId);
            if (object.date != null)
                message.date = String(object.date);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.sessionStartTime != null)
                message.sessionStartTime = String(object.sessionStartTime);
            if (object.totals != null) {
                if (typeof object.totals !== "object")
                    throw TypeError(".session.SessionProps.totals: object expected");
                message.totals = $root.session.SessionTotals.fromObject(object.totals);
            }
            if (object.trafficSource != null) {
                if (typeof object.trafficSource !== "object")
                    throw TypeError(".session.SessionProps.trafficSource: object expected");
                message.trafficSource = $root.session.TrafficSource.fromObject(object.trafficSource);
            }
            if (object.device != null) {
                if (typeof object.device !== "object")
                    throw TypeError(".session.SessionProps.device: object expected");
                message.device = $root.session.Device.fromObject(object.device);
            }
            if (object.geoNetwork != null) {
                if (typeof object.geoNetwork !== "object")
                    throw TypeError(".session.SessionProps.geoNetwork: object expected");
                message.geoNetwork = $root.session.GeoNetwork.fromObject(object.geoNetwork);
            }
            if (object.duration != null)
                message.duration = object.duration | 0;
            return message;
        };

        /**
         * Creates a plain object from a SessionProps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.SessionProps
         * @static
         * @param {session.SessionProps} message SessionProps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionProps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.resourceId = "";
                object.date = "";
                object.userId = "";
                object.clientId = "";
                object.sessionId = "";
                object.sessionStartTime = "";
                object.totals = null;
                object.trafficSource = null;
                object.device = null;
                object.geoNetwork = null;
                object.duration = 0;
            }
            if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                object.resourceId = message.resourceId;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.sessionStartTime != null && message.hasOwnProperty("sessionStartTime"))
                object.sessionStartTime = message.sessionStartTime;
            if (message.totals != null && message.hasOwnProperty("totals"))
                object.totals = $root.session.SessionTotals.toObject(message.totals, options);
            if (message.trafficSource != null && message.hasOwnProperty("trafficSource"))
                object.trafficSource = $root.session.TrafficSource.toObject(message.trafficSource, options);
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = $root.session.Device.toObject(message.device, options);
            if (message.geoNetwork != null && message.hasOwnProperty("geoNetwork"))
                object.geoNetwork = $root.session.GeoNetwork.toObject(message.geoNetwork, options);
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            return object;
        };

        /**
         * Converts this SessionProps to JSON.
         * @function toJSON
         * @memberof session.SessionProps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionProps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SessionProps;
    })();

    session.Product = (function() {

        /**
         * Properties of a Product.
         * @memberof session
         * @interface IProduct
         * @property {string|null} [productSku] Product productSku
         * @property {string|null} [productName] Product productName
         * @property {string|null} [productBrand] Product productBrand
         * @property {string|null} [productCategory] Product productCategory
         * @property {string|null} [productVariant] Product productVariant
         * @property {number|null} [productPrice] Product productPrice
         * @property {number|null} [productQuantity] Product productQuantity
         * @property {string|null} [productCouponCode] Product productCouponCode
         */

        /**
         * Constructs a new Product.
         * @memberof session
         * @classdesc Represents a Product.
         * @implements IProduct
         * @constructor
         * @param {session.IProduct=} [properties] Properties to set
         */
        function Product(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Product productSku.
         * @member {string} productSku
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productSku = "";

        /**
         * Product productName.
         * @member {string} productName
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productName = "";

        /**
         * Product productBrand.
         * @member {string} productBrand
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productBrand = "";

        /**
         * Product productCategory.
         * @member {string} productCategory
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productCategory = "";

        /**
         * Product productVariant.
         * @member {string} productVariant
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productVariant = "";

        /**
         * Product productPrice.
         * @member {number} productPrice
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productPrice = 0;

        /**
         * Product productQuantity.
         * @member {number} productQuantity
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productQuantity = 0;

        /**
         * Product productCouponCode.
         * @member {string} productCouponCode
         * @memberof session.Product
         * @instance
         */
        Product.prototype.productCouponCode = "";

        /**
         * Creates a new Product instance using the specified properties.
         * @function create
         * @memberof session.Product
         * @static
         * @param {session.IProduct=} [properties] Properties to set
         * @returns {session.Product} Product instance
         */
        Product.create = function create(properties) {
            return new Product(properties);
        };

        /**
         * Encodes the specified Product message. Does not implicitly {@link session.Product.verify|verify} messages.
         * @function encode
         * @memberof session.Product
         * @static
         * @param {session.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.productSku != null && Object.hasOwnProperty.call(message, "productSku"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.productSku);
            if (message.productName != null && Object.hasOwnProperty.call(message, "productName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.productName);
            if (message.productBrand != null && Object.hasOwnProperty.call(message, "productBrand"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.productBrand);
            if (message.productCategory != null && Object.hasOwnProperty.call(message, "productCategory"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.productCategory);
            if (message.productVariant != null && Object.hasOwnProperty.call(message, "productVariant"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.productVariant);
            if (message.productPrice != null && Object.hasOwnProperty.call(message, "productPrice"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.productPrice);
            if (message.productQuantity != null && Object.hasOwnProperty.call(message, "productQuantity"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.productQuantity);
            if (message.productCouponCode != null && Object.hasOwnProperty.call(message, "productCouponCode"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.productCouponCode);
            return writer;
        };

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link session.Product.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.Product
         * @static
         * @param {session.IProduct} message Product message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Product.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @function decode
         * @memberof session.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.Product();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.productSku = reader.string();
                    break;
                case 2:
                    message.productName = reader.string();
                    break;
                case 3:
                    message.productBrand = reader.string();
                    break;
                case 4:
                    message.productCategory = reader.string();
                    break;
                case 5:
                    message.productVariant = reader.string();
                    break;
                case 6:
                    message.productPrice = reader.int32();
                    break;
                case 7:
                    message.productQuantity = reader.int32();
                    break;
                case 8:
                    message.productCouponCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.Product
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.Product} Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Product.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Product message.
         * @function verify
         * @memberof session.Product
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Product.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.productSku != null && message.hasOwnProperty("productSku"))
                if (!$util.isString(message.productSku))
                    return "productSku: string expected";
            if (message.productName != null && message.hasOwnProperty("productName"))
                if (!$util.isString(message.productName))
                    return "productName: string expected";
            if (message.productBrand != null && message.hasOwnProperty("productBrand"))
                if (!$util.isString(message.productBrand))
                    return "productBrand: string expected";
            if (message.productCategory != null && message.hasOwnProperty("productCategory"))
                if (!$util.isString(message.productCategory))
                    return "productCategory: string expected";
            if (message.productVariant != null && message.hasOwnProperty("productVariant"))
                if (!$util.isString(message.productVariant))
                    return "productVariant: string expected";
            if (message.productPrice != null && message.hasOwnProperty("productPrice"))
                if (!$util.isInteger(message.productPrice))
                    return "productPrice: integer expected";
            if (message.productQuantity != null && message.hasOwnProperty("productQuantity"))
                if (!$util.isInteger(message.productQuantity))
                    return "productQuantity: integer expected";
            if (message.productCouponCode != null && message.hasOwnProperty("productCouponCode"))
                if (!$util.isString(message.productCouponCode))
                    return "productCouponCode: string expected";
            return null;
        };

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.Product
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.Product} Product
         */
        Product.fromObject = function fromObject(object) {
            if (object instanceof $root.session.Product)
                return object;
            var message = new $root.session.Product();
            if (object.productSku != null)
                message.productSku = String(object.productSku);
            if (object.productName != null)
                message.productName = String(object.productName);
            if (object.productBrand != null)
                message.productBrand = String(object.productBrand);
            if (object.productCategory != null)
                message.productCategory = String(object.productCategory);
            if (object.productVariant != null)
                message.productVariant = String(object.productVariant);
            if (object.productPrice != null)
                message.productPrice = object.productPrice | 0;
            if (object.productQuantity != null)
                message.productQuantity = object.productQuantity | 0;
            if (object.productCouponCode != null)
                message.productCouponCode = String(object.productCouponCode);
            return message;
        };

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.Product
         * @static
         * @param {session.Product} message Product
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Product.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.productSku = "";
                object.productName = "";
                object.productBrand = "";
                object.productCategory = "";
                object.productVariant = "";
                object.productPrice = 0;
                object.productQuantity = 0;
                object.productCouponCode = "";
            }
            if (message.productSku != null && message.hasOwnProperty("productSku"))
                object.productSku = message.productSku;
            if (message.productName != null && message.hasOwnProperty("productName"))
                object.productName = message.productName;
            if (message.productBrand != null && message.hasOwnProperty("productBrand"))
                object.productBrand = message.productBrand;
            if (message.productCategory != null && message.hasOwnProperty("productCategory"))
                object.productCategory = message.productCategory;
            if (message.productVariant != null && message.hasOwnProperty("productVariant"))
                object.productVariant = message.productVariant;
            if (message.productPrice != null && message.hasOwnProperty("productPrice"))
                object.productPrice = message.productPrice;
            if (message.productQuantity != null && message.hasOwnProperty("productQuantity"))
                object.productQuantity = message.productQuantity;
            if (message.productCouponCode != null && message.hasOwnProperty("productCouponCode"))
                object.productCouponCode = message.productCouponCode;
            return object;
        };

        /**
         * Converts this Product to JSON.
         * @function toJSON
         * @memberof session.Product
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Product.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Product;
    })();

    session.Hit = (function() {

        /**
         * Properties of a Hit.
         * @memberof session
         * @interface IHit
         * @property {string|null} [time] Hit time
         * @property {string|null} [type] Hit type
         * @property {string|null} [dataSource] Hit dataSource
         * @property {string|null} [pageUrl] Hit pageUrl
         * @property {string|null} [eventCategory] Hit eventCategory
         * @property {string|null} [eventAction] Hit eventAction
         * @property {string|null} [eventLabel] Hit eventLabel
         * @property {number|null} [eventValue] Hit eventValue
         * @property {string|null} [transactionId] Hit transactionId
         * @property {string|null} [transactionAffiliation] Hit transactionAffiliation
         * @property {number|null} [transactionRevenue] Hit transactionRevenue
         * @property {string|null} [productAction] Hit productAction
         * @property {Array.<session.IProduct>|null} [productsList] Hit productsList
         */

        /**
         * Constructs a new Hit.
         * @memberof session
         * @classdesc Represents a Hit.
         * @implements IHit
         * @constructor
         * @param {session.IHit=} [properties] Properties to set
         */
        function Hit(properties) {
            this.productsList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hit time.
         * @member {string} time
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.time = "";

        /**
         * Hit type.
         * @member {string} type
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.type = "";

        /**
         * Hit dataSource.
         * @member {string} dataSource
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.dataSource = "";

        /**
         * Hit pageUrl.
         * @member {string} pageUrl
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.pageUrl = "";

        /**
         * Hit eventCategory.
         * @member {string} eventCategory
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.eventCategory = "";

        /**
         * Hit eventAction.
         * @member {string} eventAction
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.eventAction = "";

        /**
         * Hit eventLabel.
         * @member {string} eventLabel
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.eventLabel = "";

        /**
         * Hit eventValue.
         * @member {number} eventValue
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.eventValue = 0;

        /**
         * Hit transactionId.
         * @member {string} transactionId
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.transactionId = "";

        /**
         * Hit transactionAffiliation.
         * @member {string} transactionAffiliation
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.transactionAffiliation = "";

        /**
         * Hit transactionRevenue.
         * @member {number} transactionRevenue
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.transactionRevenue = 0;

        /**
         * Hit productAction.
         * @member {string} productAction
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.productAction = "";

        /**
         * Hit productsList.
         * @member {Array.<session.IProduct>} productsList
         * @memberof session.Hit
         * @instance
         */
        Hit.prototype.productsList = $util.emptyArray;

        /**
         * Creates a new Hit instance using the specified properties.
         * @function create
         * @memberof session.Hit
         * @static
         * @param {session.IHit=} [properties] Properties to set
         * @returns {session.Hit} Hit instance
         */
        Hit.create = function create(properties) {
            return new Hit(properties);
        };

        /**
         * Encodes the specified Hit message. Does not implicitly {@link session.Hit.verify|verify} messages.
         * @function encode
         * @memberof session.Hit
         * @static
         * @param {session.IHit} message Hit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.time);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.dataSource != null && Object.hasOwnProperty.call(message, "dataSource"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.dataSource);
            if (message.pageUrl != null && Object.hasOwnProperty.call(message, "pageUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pageUrl);
            if (message.eventCategory != null && Object.hasOwnProperty.call(message, "eventCategory"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.eventCategory);
            if (message.eventAction != null && Object.hasOwnProperty.call(message, "eventAction"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.eventAction);
            if (message.eventLabel != null && Object.hasOwnProperty.call(message, "eventLabel"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.eventLabel);
            if (message.eventValue != null && Object.hasOwnProperty.call(message, "eventValue"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.eventValue);
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.transactionId);
            if (message.transactionAffiliation != null && Object.hasOwnProperty.call(message, "transactionAffiliation"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.transactionAffiliation);
            if (message.transactionRevenue != null && Object.hasOwnProperty.call(message, "transactionRevenue"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.transactionRevenue);
            if (message.productAction != null && Object.hasOwnProperty.call(message, "productAction"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.productAction);
            if (message.productsList != null && message.productsList.length)
                for (var i = 0; i < message.productsList.length; ++i)
                    $root.session.Product.encode(message.productsList[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Hit message, length delimited. Does not implicitly {@link session.Hit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.Hit
         * @static
         * @param {session.IHit} message Hit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hit message from the specified reader or buffer.
         * @function decode
         * @memberof session.Hit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.Hit} Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.Hit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.dataSource = reader.string();
                    break;
                case 4:
                    message.pageUrl = reader.string();
                    break;
                case 5:
                    message.eventCategory = reader.string();
                    break;
                case 6:
                    message.eventAction = reader.string();
                    break;
                case 7:
                    message.eventLabel = reader.string();
                    break;
                case 8:
                    message.eventValue = reader.int32();
                    break;
                case 9:
                    message.transactionId = reader.string();
                    break;
                case 10:
                    message.transactionAffiliation = reader.string();
                    break;
                case 11:
                    message.transactionRevenue = reader.int32();
                    break;
                case 12:
                    message.productAction = reader.string();
                    break;
                case 13:
                    if (!(message.productsList && message.productsList.length))
                        message.productsList = [];
                    message.productsList.push($root.session.Product.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.Hit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.Hit} Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hit message.
         * @function verify
         * @memberof session.Hit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.dataSource != null && message.hasOwnProperty("dataSource"))
                if (!$util.isString(message.dataSource))
                    return "dataSource: string expected";
            if (message.pageUrl != null && message.hasOwnProperty("pageUrl"))
                if (!$util.isString(message.pageUrl))
                    return "pageUrl: string expected";
            if (message.eventCategory != null && message.hasOwnProperty("eventCategory"))
                if (!$util.isString(message.eventCategory))
                    return "eventCategory: string expected";
            if (message.eventAction != null && message.hasOwnProperty("eventAction"))
                if (!$util.isString(message.eventAction))
                    return "eventAction: string expected";
            if (message.eventLabel != null && message.hasOwnProperty("eventLabel"))
                if (!$util.isString(message.eventLabel))
                    return "eventLabel: string expected";
            if (message.eventValue != null && message.hasOwnProperty("eventValue"))
                if (!$util.isInteger(message.eventValue))
                    return "eventValue: integer expected";
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isString(message.transactionId))
                    return "transactionId: string expected";
            if (message.transactionAffiliation != null && message.hasOwnProperty("transactionAffiliation"))
                if (!$util.isString(message.transactionAffiliation))
                    return "transactionAffiliation: string expected";
            if (message.transactionRevenue != null && message.hasOwnProperty("transactionRevenue"))
                if (!$util.isInteger(message.transactionRevenue))
                    return "transactionRevenue: integer expected";
            if (message.productAction != null && message.hasOwnProperty("productAction"))
                if (!$util.isString(message.productAction))
                    return "productAction: string expected";
            if (message.productsList != null && message.hasOwnProperty("productsList")) {
                if (!Array.isArray(message.productsList))
                    return "productsList: array expected";
                for (var i = 0; i < message.productsList.length; ++i) {
                    var error = $root.session.Product.verify(message.productsList[i]);
                    if (error)
                        return "productsList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Hit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.Hit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.Hit} Hit
         */
        Hit.fromObject = function fromObject(object) {
            if (object instanceof $root.session.Hit)
                return object;
            var message = new $root.session.Hit();
            if (object.time != null)
                message.time = String(object.time);
            if (object.type != null)
                message.type = String(object.type);
            if (object.dataSource != null)
                message.dataSource = String(object.dataSource);
            if (object.pageUrl != null)
                message.pageUrl = String(object.pageUrl);
            if (object.eventCategory != null)
                message.eventCategory = String(object.eventCategory);
            if (object.eventAction != null)
                message.eventAction = String(object.eventAction);
            if (object.eventLabel != null)
                message.eventLabel = String(object.eventLabel);
            if (object.eventValue != null)
                message.eventValue = object.eventValue | 0;
            if (object.transactionId != null)
                message.transactionId = String(object.transactionId);
            if (object.transactionAffiliation != null)
                message.transactionAffiliation = String(object.transactionAffiliation);
            if (object.transactionRevenue != null)
                message.transactionRevenue = object.transactionRevenue | 0;
            if (object.productAction != null)
                message.productAction = String(object.productAction);
            if (object.productsList) {
                if (!Array.isArray(object.productsList))
                    throw TypeError(".session.Hit.productsList: array expected");
                message.productsList = [];
                for (var i = 0; i < object.productsList.length; ++i) {
                    if (typeof object.productsList[i] !== "object")
                        throw TypeError(".session.Hit.productsList: object expected");
                    message.productsList[i] = $root.session.Product.fromObject(object.productsList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Hit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.Hit
         * @static
         * @param {session.Hit} message Hit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.productsList = [];
            if (options.defaults) {
                object.time = "";
                object.type = "";
                object.dataSource = "";
                object.pageUrl = "";
                object.eventCategory = "";
                object.eventAction = "";
                object.eventLabel = "";
                object.eventValue = 0;
                object.transactionId = "";
                object.transactionAffiliation = "";
                object.transactionRevenue = 0;
                object.productAction = "";
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.dataSource != null && message.hasOwnProperty("dataSource"))
                object.dataSource = message.dataSource;
            if (message.pageUrl != null && message.hasOwnProperty("pageUrl"))
                object.pageUrl = message.pageUrl;
            if (message.eventCategory != null && message.hasOwnProperty("eventCategory"))
                object.eventCategory = message.eventCategory;
            if (message.eventAction != null && message.hasOwnProperty("eventAction"))
                object.eventAction = message.eventAction;
            if (message.eventLabel != null && message.hasOwnProperty("eventLabel"))
                object.eventLabel = message.eventLabel;
            if (message.eventValue != null && message.hasOwnProperty("eventValue"))
                object.eventValue = message.eventValue;
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.transactionAffiliation != null && message.hasOwnProperty("transactionAffiliation"))
                object.transactionAffiliation = message.transactionAffiliation;
            if (message.transactionRevenue != null && message.hasOwnProperty("transactionRevenue"))
                object.transactionRevenue = message.transactionRevenue;
            if (message.productAction != null && message.hasOwnProperty("productAction"))
                object.productAction = message.productAction;
            if (message.productsList && message.productsList.length) {
                object.productsList = [];
                for (var j = 0; j < message.productsList.length; ++j)
                    object.productsList[j] = $root.session.Product.toObject(message.productsList[j], options);
            }
            return object;
        };

        /**
         * Converts this Hit to JSON.
         * @function toJSON
         * @memberof session.Hit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hit;
    })();

    return session;
})();

$root.LogCollectedEventPayload = (function() {

    /**
     * Properties of a LogCollectedEventPayload.
     * @exports ILogCollectedEventPayload
     * @interface ILogCollectedEventPayload
     * @property {string|null} [resourceId] LogCollectedEventPayload resourceId
     * @property {string|null} [clientId] LogCollectedEventPayload clientId
     * @property {string|null} [userId] LogCollectedEventPayload userId
     * @property {string|null} [sessionControl] LogCollectedEventPayload sessionControl
     * @property {string|null} [ip] LogCollectedEventPayload ip
     * @property {string|null} [userAgent] LogCollectedEventPayload userAgent
     * @property {string|null} [documentReferrer] LogCollectedEventPayload documentReferrer
     * @property {string|null} [campaignName] LogCollectedEventPayload campaignName
     * @property {string|null} [campaignSource] LogCollectedEventPayload campaignSource
     * @property {string|null} [campaignMedium] LogCollectedEventPayload campaignMedium
     * @property {string|null} [campaignKeyword] LogCollectedEventPayload campaignKeyword
     * @property {string|null} [campaignContent] LogCollectedEventPayload campaignContent
     * @property {string|null} [campaignId] LogCollectedEventPayload campaignId
     * @property {string|null} [screenResolution] LogCollectedEventPayload screenResolution
     * @property {string|null} [viewportSize] LogCollectedEventPayload viewportSize
     * @property {string|null} [documentLocation] LogCollectedEventPayload documentLocation
     * @property {session.IHit|null} [hit] LogCollectedEventPayload hit
     */

    /**
     * Constructs a new LogCollectedEventPayload.
     * @exports LogCollectedEventPayload
     * @classdesc Represents a LogCollectedEventPayload.
     * @implements ILogCollectedEventPayload
     * @constructor
     * @param {ILogCollectedEventPayload=} [properties] Properties to set
     */
    function LogCollectedEventPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LogCollectedEventPayload resourceId.
     * @member {string} resourceId
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.resourceId = "";

    /**
     * LogCollectedEventPayload clientId.
     * @member {string} clientId
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.clientId = "";

    /**
     * LogCollectedEventPayload userId.
     * @member {string} userId
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.userId = "";

    /**
     * LogCollectedEventPayload sessionControl.
     * @member {string} sessionControl
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.sessionControl = "";

    /**
     * LogCollectedEventPayload ip.
     * @member {string} ip
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.ip = "";

    /**
     * LogCollectedEventPayload userAgent.
     * @member {string} userAgent
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.userAgent = "";

    /**
     * LogCollectedEventPayload documentReferrer.
     * @member {string} documentReferrer
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.documentReferrer = "";

    /**
     * LogCollectedEventPayload campaignName.
     * @member {string} campaignName
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignName = "";

    /**
     * LogCollectedEventPayload campaignSource.
     * @member {string} campaignSource
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignSource = "";

    /**
     * LogCollectedEventPayload campaignMedium.
     * @member {string} campaignMedium
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignMedium = "";

    /**
     * LogCollectedEventPayload campaignKeyword.
     * @member {string} campaignKeyword
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignKeyword = "";

    /**
     * LogCollectedEventPayload campaignContent.
     * @member {string} campaignContent
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignContent = "";

    /**
     * LogCollectedEventPayload campaignId.
     * @member {string} campaignId
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.campaignId = "";

    /**
     * LogCollectedEventPayload screenResolution.
     * @member {string} screenResolution
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.screenResolution = "";

    /**
     * LogCollectedEventPayload viewportSize.
     * @member {string} viewportSize
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.viewportSize = "";

    /**
     * LogCollectedEventPayload documentLocation.
     * @member {string} documentLocation
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.documentLocation = "";

    /**
     * LogCollectedEventPayload hit.
     * @member {session.IHit|null|undefined} hit
     * @memberof LogCollectedEventPayload
     * @instance
     */
    LogCollectedEventPayload.prototype.hit = null;

    /**
     * Creates a new LogCollectedEventPayload instance using the specified properties.
     * @function create
     * @memberof LogCollectedEventPayload
     * @static
     * @param {ILogCollectedEventPayload=} [properties] Properties to set
     * @returns {LogCollectedEventPayload} LogCollectedEventPayload instance
     */
    LogCollectedEventPayload.create = function create(properties) {
        return new LogCollectedEventPayload(properties);
    };

    /**
     * Encodes the specified LogCollectedEventPayload message. Does not implicitly {@link LogCollectedEventPayload.verify|verify} messages.
     * @function encode
     * @memberof LogCollectedEventPayload
     * @static
     * @param {ILogCollectedEventPayload} message LogCollectedEventPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogCollectedEventPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
        if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
        if (message.sessionControl != null && Object.hasOwnProperty.call(message, "sessionControl"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionControl);
        if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.ip);
        if (message.userAgent != null && Object.hasOwnProperty.call(message, "userAgent"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.userAgent);
        if (message.documentReferrer != null && Object.hasOwnProperty.call(message, "documentReferrer"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.documentReferrer);
        if (message.campaignName != null && Object.hasOwnProperty.call(message, "campaignName"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.campaignName);
        if (message.campaignSource != null && Object.hasOwnProperty.call(message, "campaignSource"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.campaignSource);
        if (message.campaignMedium != null && Object.hasOwnProperty.call(message, "campaignMedium"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.campaignMedium);
        if (message.campaignKeyword != null && Object.hasOwnProperty.call(message, "campaignKeyword"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.campaignKeyword);
        if (message.campaignContent != null && Object.hasOwnProperty.call(message, "campaignContent"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.campaignContent);
        if (message.campaignId != null && Object.hasOwnProperty.call(message, "campaignId"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.campaignId);
        if (message.screenResolution != null && Object.hasOwnProperty.call(message, "screenResolution"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.screenResolution);
        if (message.viewportSize != null && Object.hasOwnProperty.call(message, "viewportSize"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.viewportSize);
        if (message.documentLocation != null && Object.hasOwnProperty.call(message, "documentLocation"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.documentLocation);
        if (message.hit != null && Object.hasOwnProperty.call(message, "hit"))
            $root.session.Hit.encode(message.hit, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LogCollectedEventPayload message, length delimited. Does not implicitly {@link LogCollectedEventPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LogCollectedEventPayload
     * @static
     * @param {ILogCollectedEventPayload} message LogCollectedEventPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogCollectedEventPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LogCollectedEventPayload message from the specified reader or buffer.
     * @function decode
     * @memberof LogCollectedEventPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LogCollectedEventPayload} LogCollectedEventPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogCollectedEventPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LogCollectedEventPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.resourceId = reader.string();
                break;
            case 2:
                message.clientId = reader.string();
                break;
            case 3:
                message.userId = reader.string();
                break;
            case 4:
                message.sessionControl = reader.string();
                break;
            case 5:
                message.ip = reader.string();
                break;
            case 6:
                message.userAgent = reader.string();
                break;
            case 7:
                message.documentReferrer = reader.string();
                break;
            case 8:
                message.campaignName = reader.string();
                break;
            case 9:
                message.campaignSource = reader.string();
                break;
            case 10:
                message.campaignMedium = reader.string();
                break;
            case 11:
                message.campaignKeyword = reader.string();
                break;
            case 12:
                message.campaignContent = reader.string();
                break;
            case 13:
                message.campaignId = reader.string();
                break;
            case 14:
                message.screenResolution = reader.string();
                break;
            case 15:
                message.viewportSize = reader.string();
                break;
            case 16:
                message.documentLocation = reader.string();
                break;
            case 17:
                message.hit = $root.session.Hit.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LogCollectedEventPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LogCollectedEventPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LogCollectedEventPayload} LogCollectedEventPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogCollectedEventPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LogCollectedEventPayload message.
     * @function verify
     * @memberof LogCollectedEventPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LogCollectedEventPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.resourceId != null && message.hasOwnProperty("resourceId"))
            if (!$util.isString(message.resourceId))
                return "resourceId: string expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.sessionControl != null && message.hasOwnProperty("sessionControl"))
            if (!$util.isString(message.sessionControl))
                return "sessionControl: string expected";
        if (message.ip != null && message.hasOwnProperty("ip"))
            if (!$util.isString(message.ip))
                return "ip: string expected";
        if (message.userAgent != null && message.hasOwnProperty("userAgent"))
            if (!$util.isString(message.userAgent))
                return "userAgent: string expected";
        if (message.documentReferrer != null && message.hasOwnProperty("documentReferrer"))
            if (!$util.isString(message.documentReferrer))
                return "documentReferrer: string expected";
        if (message.campaignName != null && message.hasOwnProperty("campaignName"))
            if (!$util.isString(message.campaignName))
                return "campaignName: string expected";
        if (message.campaignSource != null && message.hasOwnProperty("campaignSource"))
            if (!$util.isString(message.campaignSource))
                return "campaignSource: string expected";
        if (message.campaignMedium != null && message.hasOwnProperty("campaignMedium"))
            if (!$util.isString(message.campaignMedium))
                return "campaignMedium: string expected";
        if (message.campaignKeyword != null && message.hasOwnProperty("campaignKeyword"))
            if (!$util.isString(message.campaignKeyword))
                return "campaignKeyword: string expected";
        if (message.campaignContent != null && message.hasOwnProperty("campaignContent"))
            if (!$util.isString(message.campaignContent))
                return "campaignContent: string expected";
        if (message.campaignId != null && message.hasOwnProperty("campaignId"))
            if (!$util.isString(message.campaignId))
                return "campaignId: string expected";
        if (message.screenResolution != null && message.hasOwnProperty("screenResolution"))
            if (!$util.isString(message.screenResolution))
                return "screenResolution: string expected";
        if (message.viewportSize != null && message.hasOwnProperty("viewportSize"))
            if (!$util.isString(message.viewportSize))
                return "viewportSize: string expected";
        if (message.documentLocation != null && message.hasOwnProperty("documentLocation"))
            if (!$util.isString(message.documentLocation))
                return "documentLocation: string expected";
        if (message.hit != null && message.hasOwnProperty("hit")) {
            var error = $root.session.Hit.verify(message.hit);
            if (error)
                return "hit." + error;
        }
        return null;
    };

    /**
     * Creates a LogCollectedEventPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LogCollectedEventPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LogCollectedEventPayload} LogCollectedEventPayload
     */
    LogCollectedEventPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.LogCollectedEventPayload)
            return object;
        var message = new $root.LogCollectedEventPayload();
        if (object.resourceId != null)
            message.resourceId = String(object.resourceId);
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.sessionControl != null)
            message.sessionControl = String(object.sessionControl);
        if (object.ip != null)
            message.ip = String(object.ip);
        if (object.userAgent != null)
            message.userAgent = String(object.userAgent);
        if (object.documentReferrer != null)
            message.documentReferrer = String(object.documentReferrer);
        if (object.campaignName != null)
            message.campaignName = String(object.campaignName);
        if (object.campaignSource != null)
            message.campaignSource = String(object.campaignSource);
        if (object.campaignMedium != null)
            message.campaignMedium = String(object.campaignMedium);
        if (object.campaignKeyword != null)
            message.campaignKeyword = String(object.campaignKeyword);
        if (object.campaignContent != null)
            message.campaignContent = String(object.campaignContent);
        if (object.campaignId != null)
            message.campaignId = String(object.campaignId);
        if (object.screenResolution != null)
            message.screenResolution = String(object.screenResolution);
        if (object.viewportSize != null)
            message.viewportSize = String(object.viewportSize);
        if (object.documentLocation != null)
            message.documentLocation = String(object.documentLocation);
        if (object.hit != null) {
            if (typeof object.hit !== "object")
                throw TypeError(".LogCollectedEventPayload.hit: object expected");
            message.hit = $root.session.Hit.fromObject(object.hit);
        }
        return message;
    };

    /**
     * Creates a plain object from a LogCollectedEventPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LogCollectedEventPayload
     * @static
     * @param {LogCollectedEventPayload} message LogCollectedEventPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LogCollectedEventPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.resourceId = "";
            object.clientId = "";
            object.userId = "";
            object.sessionControl = "";
            object.ip = "";
            object.userAgent = "";
            object.documentReferrer = "";
            object.campaignName = "";
            object.campaignSource = "";
            object.campaignMedium = "";
            object.campaignKeyword = "";
            object.campaignContent = "";
            object.campaignId = "";
            object.screenResolution = "";
            object.viewportSize = "";
            object.documentLocation = "";
            object.hit = null;
        }
        if (message.resourceId != null && message.hasOwnProperty("resourceId"))
            object.resourceId = message.resourceId;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.sessionControl != null && message.hasOwnProperty("sessionControl"))
            object.sessionControl = message.sessionControl;
        if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
        if (message.userAgent != null && message.hasOwnProperty("userAgent"))
            object.userAgent = message.userAgent;
        if (message.documentReferrer != null && message.hasOwnProperty("documentReferrer"))
            object.documentReferrer = message.documentReferrer;
        if (message.campaignName != null && message.hasOwnProperty("campaignName"))
            object.campaignName = message.campaignName;
        if (message.campaignSource != null && message.hasOwnProperty("campaignSource"))
            object.campaignSource = message.campaignSource;
        if (message.campaignMedium != null && message.hasOwnProperty("campaignMedium"))
            object.campaignMedium = message.campaignMedium;
        if (message.campaignKeyword != null && message.hasOwnProperty("campaignKeyword"))
            object.campaignKeyword = message.campaignKeyword;
        if (message.campaignContent != null && message.hasOwnProperty("campaignContent"))
            object.campaignContent = message.campaignContent;
        if (message.campaignId != null && message.hasOwnProperty("campaignId"))
            object.campaignId = message.campaignId;
        if (message.screenResolution != null && message.hasOwnProperty("screenResolution"))
            object.screenResolution = message.screenResolution;
        if (message.viewportSize != null && message.hasOwnProperty("viewportSize"))
            object.viewportSize = message.viewportSize;
        if (message.documentLocation != null && message.hasOwnProperty("documentLocation"))
            object.documentLocation = message.documentLocation;
        if (message.hit != null && message.hasOwnProperty("hit"))
            object.hit = $root.session.Hit.toObject(message.hit, options);
        return object;
    };

    /**
     * Converts this LogCollectedEventPayload to JSON.
     * @function toJSON
     * @memberof LogCollectedEventPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LogCollectedEventPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LogCollectedEventPayload;
})();

module.exports = $root;
