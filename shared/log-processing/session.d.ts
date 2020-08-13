import * as $protobuf from "protobufjs";
/** Namespace session. */
export namespace session {

    /** Properties of a SessionTotals. */
    interface ISessionTotals {

        /** SessionTotals hits */
        hits?: (number|null);

        /** SessionTotals pageviews */
        pageviews?: (number|null);
    }

    /** Represents a SessionTotals. */
    class SessionTotals implements ISessionTotals {

        /**
         * Constructs a new SessionTotals.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ISessionTotals);

        /** SessionTotals hits. */
        public hits: number;

        /** SessionTotals pageviews. */
        public pageviews: number;

        /**
         * Creates a new SessionTotals instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionTotals instance
         */
        public static create(properties?: session.ISessionTotals): session.SessionTotals;

        /**
         * Encodes the specified SessionTotals message. Does not implicitly {@link session.SessionTotals.verify|verify} messages.
         * @param message SessionTotals message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ISessionTotals, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionTotals message, length delimited. Does not implicitly {@link session.SessionTotals.verify|verify} messages.
         * @param message SessionTotals message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ISessionTotals, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionTotals message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionTotals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.SessionTotals;

        /**
         * Decodes a SessionTotals message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionTotals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.SessionTotals;

        /**
         * Verifies a SessionTotals message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionTotals message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionTotals
         */
        public static fromObject(object: { [k: string]: any }): session.SessionTotals;

        /**
         * Creates a plain object from a SessionTotals message. Also converts values to other types if specified.
         * @param message SessionTotals
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.SessionTotals, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionTotals to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TrafficSource. */
    interface ITrafficSource {

        /** TrafficSource source */
        source?: (string|null);

        /** TrafficSource campaign */
        campaign?: (string|null);

        /** TrafficSource medium */
        medium?: (string|null);

        /** TrafficSource keyword */
        keyword?: (string|null);

        /** TrafficSource content */
        content?: (string|null);

        /** TrafficSource referralPath */
        referralPath?: (string|null);
    }

    /** Represents a TrafficSource. */
    class TrafficSource implements ITrafficSource {

        /**
         * Constructs a new TrafficSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ITrafficSource);

        /** TrafficSource source. */
        public source: string;

        /** TrafficSource campaign. */
        public campaign: string;

        /** TrafficSource medium. */
        public medium: string;

        /** TrafficSource keyword. */
        public keyword: string;

        /** TrafficSource content. */
        public content: string;

        /** TrafficSource referralPath. */
        public referralPath: string;

        /**
         * Creates a new TrafficSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrafficSource instance
         */
        public static create(properties?: session.ITrafficSource): session.TrafficSource;

        /**
         * Encodes the specified TrafficSource message. Does not implicitly {@link session.TrafficSource.verify|verify} messages.
         * @param message TrafficSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrafficSource message, length delimited. Does not implicitly {@link session.TrafficSource.verify|verify} messages.
         * @param message TrafficSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrafficSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrafficSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.TrafficSource;

        /**
         * Decodes a TrafficSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrafficSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.TrafficSource;

        /**
         * Verifies a TrafficSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrafficSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrafficSource
         */
        public static fromObject(object: { [k: string]: any }): session.TrafficSource;

        /**
         * Creates a plain object from a TrafficSource message. Also converts values to other types if specified.
         * @param message TrafficSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.TrafficSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrafficSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Device. */
    interface IDevice {

        /** Device browser */
        browser?: (string|null);

        /** Device browserVersion */
        browserVersion?: (string|null);

        /** Device operatingSystem */
        operatingSystem?: (string|null);

        /** Device operatingSystemVersion */
        operatingSystemVersion?: (string|null);

        /** Device deviceCategory */
        deviceCategory?: (string|null);
    }

    /** Represents a Device. */
    class Device implements IDevice {

        /**
         * Constructs a new Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.IDevice);

        /** Device browser. */
        public browser: string;

        /** Device browserVersion. */
        public browserVersion: string;

        /** Device operatingSystem. */
        public operatingSystem: string;

        /** Device operatingSystemVersion. */
        public operatingSystemVersion: string;

        /** Device deviceCategory. */
        public deviceCategory: string;

        /**
         * Creates a new Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Device instance
         */
        public static create(properties?: session.IDevice): session.Device;

        /**
         * Encodes the specified Device message. Does not implicitly {@link session.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link session.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.Device;

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.Device;

        /**
         * Verifies a Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Device
         */
        public static fromObject(object: { [k: string]: any }): session.Device;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param message Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Device to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeoNetwork. */
    interface IGeoNetwork {

        /** GeoNetwork country */
        country?: (string|null);

        /** GeoNetwork region */
        region?: (string|null);

        /** GeoNetwork city */
        city?: (string|null);
    }

    /** Represents a GeoNetwork. */
    class GeoNetwork implements IGeoNetwork {

        /**
         * Constructs a new GeoNetwork.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.IGeoNetwork);

        /** GeoNetwork country. */
        public country: string;

        /** GeoNetwork region. */
        public region: string;

        /** GeoNetwork city. */
        public city: string;

        /**
         * Creates a new GeoNetwork instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeoNetwork instance
         */
        public static create(properties?: session.IGeoNetwork): session.GeoNetwork;

        /**
         * Encodes the specified GeoNetwork message. Does not implicitly {@link session.GeoNetwork.verify|verify} messages.
         * @param message GeoNetwork message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.IGeoNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GeoNetwork message, length delimited. Does not implicitly {@link session.GeoNetwork.verify|verify} messages.
         * @param message GeoNetwork message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.IGeoNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeoNetwork message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeoNetwork
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.GeoNetwork;

        /**
         * Decodes a GeoNetwork message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GeoNetwork
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.GeoNetwork;

        /**
         * Verifies a GeoNetwork message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GeoNetwork message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeoNetwork
         */
        public static fromObject(object: { [k: string]: any }): session.GeoNetwork;

        /**
         * Creates a plain object from a GeoNetwork message. Also converts values to other types if specified.
         * @param message GeoNetwork
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.GeoNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeoNetwork to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SessionProps. */
    interface ISessionProps {

        /** SessionProps resourceId */
        resourceId?: (string|null);

        /** SessionProps date */
        date?: (string|null);

        /** SessionProps userId */
        userId?: (string|null);

        /** SessionProps clientId */
        clientId?: (string|null);

        /** SessionProps sessionId */
        sessionId?: (string|null);

        /** SessionProps sessionStartTime */
        sessionStartTime?: (string|null);

        /** SessionProps totals */
        totals?: (session.ISessionTotals|null);

        /** SessionProps trafficSource */
        trafficSource?: (session.ITrafficSource|null);

        /** SessionProps device */
        device?: (session.IDevice|null);

        /** SessionProps geoNetwork */
        geoNetwork?: (session.IGeoNetwork|null);
    }

    /** Represents a SessionProps. */
    class SessionProps implements ISessionProps {

        /**
         * Constructs a new SessionProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ISessionProps);

        /** SessionProps resourceId. */
        public resourceId: string;

        /** SessionProps date. */
        public date: string;

        /** SessionProps userId. */
        public userId: string;

        /** SessionProps clientId. */
        public clientId: string;

        /** SessionProps sessionId. */
        public sessionId: string;

        /** SessionProps sessionStartTime. */
        public sessionStartTime: string;

        /** SessionProps totals. */
        public totals?: (session.ISessionTotals|null);

        /** SessionProps trafficSource. */
        public trafficSource?: (session.ITrafficSource|null);

        /** SessionProps device. */
        public device?: (session.IDevice|null);

        /** SessionProps geoNetwork. */
        public geoNetwork?: (session.IGeoNetwork|null);

        /**
         * Creates a new SessionProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SessionProps instance
         */
        public static create(properties?: session.ISessionProps): session.SessionProps;

        /**
         * Encodes the specified SessionProps message. Does not implicitly {@link session.SessionProps.verify|verify} messages.
         * @param message SessionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ISessionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SessionProps message, length delimited. Does not implicitly {@link session.SessionProps.verify|verify} messages.
         * @param message SessionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ISessionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SessionProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SessionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.SessionProps;

        /**
         * Decodes a SessionProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SessionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.SessionProps;

        /**
         * Verifies a SessionProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SessionProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SessionProps
         */
        public static fromObject(object: { [k: string]: any }): session.SessionProps;

        /**
         * Creates a plain object from a SessionProps message. Also converts values to other types if specified.
         * @param message SessionProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.SessionProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SessionProps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Product. */
    interface IProduct {

        /** Product productSku */
        productSku?: (string|null);

        /** Product productName */
        productName?: (string|null);

        /** Product productBrand */
        productBrand?: (string|null);

        /** Product productCategory */
        productCategory?: (string|null);

        /** Product productVariant */
        productVariant?: (string|null);

        /** Product productPrice */
        productPrice?: (number|null);

        /** Product productQuantity */
        productQuantity?: (number|null);

        /** Product productCouponCode */
        productCouponCode?: (string|null);
    }

    /** Represents a Product. */
    class Product implements IProduct {

        /**
         * Constructs a new Product.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.IProduct);

        /** Product productSku. */
        public productSku: string;

        /** Product productName. */
        public productName: string;

        /** Product productBrand. */
        public productBrand: string;

        /** Product productCategory. */
        public productCategory: string;

        /** Product productVariant. */
        public productVariant: string;

        /** Product productPrice. */
        public productPrice: number;

        /** Product productQuantity. */
        public productQuantity: number;

        /** Product productCouponCode. */
        public productCouponCode: string;

        /**
         * Creates a new Product instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Product instance
         */
        public static create(properties?: session.IProduct): session.Product;

        /**
         * Encodes the specified Product message. Does not implicitly {@link session.Product.verify|verify} messages.
         * @param message Product message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Product message, length delimited. Does not implicitly {@link session.Product.verify|verify} messages.
         * @param message Product message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Product message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.Product;

        /**
         * Decodes a Product message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Product
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.Product;

        /**
         * Verifies a Product message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Product message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Product
         */
        public static fromObject(object: { [k: string]: any }): session.Product;

        /**
         * Creates a plain object from a Product message. Also converts values to other types if specified.
         * @param message Product
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Product to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hit. */
    interface IHit {

        /** Hit time */
        time?: (string|null);

        /** Hit type */
        type?: (string|null);

        /** Hit dataSource */
        dataSource?: (string|null);

        /** Hit pageUrl */
        pageUrl?: (string|null);

        /** Hit eventCategory */
        eventCategory?: (string|null);

        /** Hit eventAction */
        eventAction?: (string|null);

        /** Hit eventLabel */
        eventLabel?: (string|null);

        /** Hit eventValue */
        eventValue?: (number|null);

        /** Hit transactionId */
        transactionId?: (string|null);

        /** Hit transactionAffiliation */
        transactionAffiliation?: (string|null);

        /** Hit transactionRevenue */
        transactionRevenue?: (number|null);

        /** Hit productAction */
        productAction?: (string|null);

        /** Hit productsList */
        productsList?: (session.IProduct[]|null);
    }

    /** Represents a Hit. */
    class Hit implements IHit {

        /**
         * Constructs a new Hit.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.IHit);

        /** Hit time. */
        public time: string;

        /** Hit type. */
        public type: string;

        /** Hit dataSource. */
        public dataSource: string;

        /** Hit pageUrl. */
        public pageUrl: string;

        /** Hit eventCategory. */
        public eventCategory: string;

        /** Hit eventAction. */
        public eventAction: string;

        /** Hit eventLabel. */
        public eventLabel: string;

        /** Hit eventValue. */
        public eventValue: number;

        /** Hit transactionId. */
        public transactionId: string;

        /** Hit transactionAffiliation. */
        public transactionAffiliation: string;

        /** Hit transactionRevenue. */
        public transactionRevenue: number;

        /** Hit productAction. */
        public productAction: string;

        /** Hit productsList. */
        public productsList: session.IProduct[];

        /**
         * Creates a new Hit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hit instance
         */
        public static create(properties?: session.IHit): session.Hit;

        /**
         * Encodes the specified Hit message. Does not implicitly {@link session.Hit.verify|verify} messages.
         * @param message Hit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.IHit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hit message, length delimited. Does not implicitly {@link session.Hit.verify|verify} messages.
         * @param message Hit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.IHit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.Hit;

        /**
         * Decodes a Hit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.Hit;

        /**
         * Verifies a Hit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hit
         */
        public static fromObject(object: { [k: string]: any }): session.Hit;

        /**
         * Creates a plain object from a Hit message. Also converts values to other types if specified.
         * @param message Hit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.Hit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
