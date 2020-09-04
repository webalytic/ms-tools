import * as $protobuf from "protobufjs";
/** Namespace custom_definition. */
export namespace custom_definition {

    /** CustomDefinitionType enum. */
    enum CustomDefinitionType {
        EMPTY_TYPE = 0,
        DIMENSION = 1,
        METRIC = 2
    }

    /** CustomDefinitionScope enum. */
    enum CustomDefinitionScope {
        EMPTY_SCOPE = 0,
        HIT = 1,
        SESSION = 2
    }

    /** Properties of a CustomDefinitionProps. */
    interface ICustomDefinitionProps {

        /** CustomDefinitionProps id */
        id?: (string|null);

        /** CustomDefinitionProps resourceId */
        resourceId?: (string|null);

        /** CustomDefinitionProps index */
        index?: (number|null);

        /** CustomDefinitionProps type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CustomDefinitionProps scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** CustomDefinitionProps name */
        name?: (string|null);

        /** CustomDefinitionProps active */
        active?: (boolean|null);
    }

    /** Represents a CustomDefinitionProps. */
    class CustomDefinitionProps implements ICustomDefinitionProps {

        /**
         * Constructs a new CustomDefinitionProps.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICustomDefinitionProps);

        /** CustomDefinitionProps id. */
        public id: string;

        /** CustomDefinitionProps resourceId. */
        public resourceId: string;

        /** CustomDefinitionProps index. */
        public index: number;

        /** CustomDefinitionProps type. */
        public type: custom_definition.CustomDefinitionType;

        /** CustomDefinitionProps scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** CustomDefinitionProps name. */
        public name: string;

        /** CustomDefinitionProps active. */
        public active: boolean;

        /**
         * Creates a new CustomDefinitionProps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomDefinitionProps instance
         */
        public static create(properties?: custom_definition.ICustomDefinitionProps): custom_definition.CustomDefinitionProps;

        /**
         * Encodes the specified CustomDefinitionProps message. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @param message CustomDefinitionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICustomDefinitionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomDefinitionProps message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionProps.verify|verify} messages.
         * @param message CustomDefinitionProps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICustomDefinitionProps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CustomDefinitionProps;

        /**
         * Decodes a CustomDefinitionProps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomDefinitionProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CustomDefinitionProps;

        /**
         * Verifies a CustomDefinitionProps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomDefinitionProps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomDefinitionProps
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CustomDefinitionProps;

        /**
         * Creates a plain object from a CustomDefinitionProps message. Also converts values to other types if specified.
         * @param message CustomDefinitionProps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CustomDefinitionProps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomDefinitionProps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateCustomDefinitionInput. */
    interface ICreateCustomDefinitionInput {

        /** CreateCustomDefinitionInput resourceId */
        resourceId?: (string|null);

        /** CreateCustomDefinitionInput index */
        index?: (number|null);

        /** CreateCustomDefinitionInput type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CreateCustomDefinitionInput scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** CreateCustomDefinitionInput name */
        name?: (string|null);

        /** CreateCustomDefinitionInput active */
        active?: (boolean|null);
    }

    /** Represents a CreateCustomDefinitionInput. */
    class CreateCustomDefinitionInput implements ICreateCustomDefinitionInput {

        /**
         * Constructs a new CreateCustomDefinitionInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICreateCustomDefinitionInput);

        /** CreateCustomDefinitionInput resourceId. */
        public resourceId: string;

        /** CreateCustomDefinitionInput index. */
        public index: number;

        /** CreateCustomDefinitionInput type. */
        public type: custom_definition.CustomDefinitionType;

        /** CreateCustomDefinitionInput scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** CreateCustomDefinitionInput name. */
        public name: string;

        /** CreateCustomDefinitionInput active. */
        public active: boolean;

        /**
         * Creates a new CreateCustomDefinitionInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateCustomDefinitionInput instance
         */
        public static create(properties?: custom_definition.ICreateCustomDefinitionInput): custom_definition.CreateCustomDefinitionInput;

        /**
         * Encodes the specified CreateCustomDefinitionInput message. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @param message CreateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICreateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.CreateCustomDefinitionInput.verify|verify} messages.
         * @param message CreateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICreateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CreateCustomDefinitionInput;

        /**
         * Decodes a CreateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CreateCustomDefinitionInput;

        /**
         * Verifies a CreateCustomDefinitionInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateCustomDefinitionInput
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CreateCustomDefinitionInput;

        /**
         * Creates a plain object from a CreateCustomDefinitionInput message. Also converts values to other types if specified.
         * @param message CreateCustomDefinitionInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CreateCustomDefinitionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateCustomDefinitionInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateCustomDefinitionInput. */
    interface IUpdateCustomDefinitionInput {

        /** UpdateCustomDefinitionInput name */
        name?: (string|null);

        /** UpdateCustomDefinitionInput scope */
        scope?: (custom_definition.CustomDefinitionScope|null);

        /** UpdateCustomDefinitionInput active */
        active?: (boolean|null);
    }

    /** Represents an UpdateCustomDefinitionInput. */
    class UpdateCustomDefinitionInput implements IUpdateCustomDefinitionInput {

        /**
         * Constructs a new UpdateCustomDefinitionInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.IUpdateCustomDefinitionInput);

        /** UpdateCustomDefinitionInput name. */
        public name: string;

        /** UpdateCustomDefinitionInput scope. */
        public scope: custom_definition.CustomDefinitionScope;

        /** UpdateCustomDefinitionInput active. */
        public active: boolean;

        /**
         * Creates a new UpdateCustomDefinitionInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateCustomDefinitionInput instance
         */
        public static create(properties?: custom_definition.IUpdateCustomDefinitionInput): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Encodes the specified UpdateCustomDefinitionInput message. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @param message UpdateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.IUpdateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateCustomDefinitionInput message, length delimited. Does not implicitly {@link custom_definition.UpdateCustomDefinitionInput.verify|verify} messages.
         * @param message UpdateCustomDefinitionInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.IUpdateCustomDefinitionInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Decodes an UpdateCustomDefinitionInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateCustomDefinitionInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Verifies an UpdateCustomDefinitionInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateCustomDefinitionInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateCustomDefinitionInput
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.UpdateCustomDefinitionInput;

        /**
         * Creates a plain object from an UpdateCustomDefinitionInput message. Also converts values to other types if specified.
         * @param message UpdateCustomDefinitionInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.UpdateCustomDefinitionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateCustomDefinitionInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CustomDefinitionFilter. */
    interface ICustomDefinitionFilter {

        /** CustomDefinitionFilter id */
        id?: (string|null);

        /** CustomDefinitionFilter name */
        name?: (string|null);

        /** CustomDefinitionFilter type */
        type?: (custom_definition.CustomDefinitionType|null);

        /** CustomDefinitionFilter resourceId */
        resourceId?: (string|null);
    }

    /** Represents a CustomDefinitionFilter. */
    class CustomDefinitionFilter implements ICustomDefinitionFilter {

        /**
         * Constructs a new CustomDefinitionFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: custom_definition.ICustomDefinitionFilter);

        /** CustomDefinitionFilter id. */
        public id: string;

        /** CustomDefinitionFilter name. */
        public name: string;

        /** CustomDefinitionFilter type. */
        public type: custom_definition.CustomDefinitionType;

        /** CustomDefinitionFilter resourceId. */
        public resourceId: string;

        /**
         * Creates a new CustomDefinitionFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomDefinitionFilter instance
         */
        public static create(properties?: custom_definition.ICustomDefinitionFilter): custom_definition.CustomDefinitionFilter;

        /**
         * Encodes the specified CustomDefinitionFilter message. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @param message CustomDefinitionFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: custom_definition.ICustomDefinitionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomDefinitionFilter message, length delimited. Does not implicitly {@link custom_definition.CustomDefinitionFilter.verify|verify} messages.
         * @param message CustomDefinitionFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: custom_definition.ICustomDefinitionFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): custom_definition.CustomDefinitionFilter;

        /**
         * Decodes a CustomDefinitionFilter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomDefinitionFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): custom_definition.CustomDefinitionFilter;

        /**
         * Verifies a CustomDefinitionFilter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomDefinitionFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomDefinitionFilter
         */
        public static fromObject(object: { [k: string]: any }): custom_definition.CustomDefinitionFilter;

        /**
         * Creates a plain object from a CustomDefinitionFilter message. Also converts values to other types if specified.
         * @param message CustomDefinitionFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: custom_definition.CustomDefinitionFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomDefinitionFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
