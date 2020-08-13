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

        /** ResourceProps createTime */
        createTime?: (number|Long|null);

        /** ResourceProps updateTime */
        updateTime?: (number|Long|null);
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

        /** ResourceProps createTime. */
        public createTime: (number|Long);

        /** ResourceProps updateTime. */
        public updateTime: (number|Long);

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
