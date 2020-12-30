export interface BaseActionWithoutPayload<TType> {
    readonly type: TType;
}

export interface BaseActionWithPayload<TType, TPayload> {
    readonly type: TType;
    readonly payload: TPayload;
}

export interface BaseActionWithPayloadAndMeta<TType, TPayload, TMeta> {
    readonly type: TType;
    readonly payload: TPayload;
    readonly meta: TMeta;
    readonly error?: boolean;
}

export type BaseAction<TType, TPayload = any, TMeta = any> =
    TPayload extends never
        ? BaseActionWithoutPayload<TType>
        : TMeta extends never
        ? BaseActionWithPayload<TType, TPayload>
        : BaseActionWithPayloadAndMeta<TType, TPayload, TMeta>;
