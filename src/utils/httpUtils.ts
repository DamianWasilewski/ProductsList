import { AjaxError, AjaxResponse } from "rxjs/ajax";
import config from "../config";

export enum HttpMethod {
    DELETE = "DELETE",
    GET = "GET",
    PATCH = "PATCH",
    POST = "POST",
    PUT = "PUT",
}

export const HttpHeaders = {
    accept: "Accept",
    authentication: "Authentication",
    contentType: "Content-Type",
    authorization: "Authorization",
};

export const ContentTypes = {
    multipartFormData: "multipart/form-data",
    formUrlEncoded: "application/x-www-form-urlencoded",
    applicationJson: "application/json",
};

export interface ReadonlyDictionary<T = any> {
    readonly [ key: string ]: Readonly<T>;
}

export interface Dictionary<T = any> {
    [ key: string ]: Readonly<T>;
}

export interface ServiceMetaData {
    readonly contentType: string | null;
    readonly status: number;
    readonly isError: boolean;
}

export interface ServiceResponse<TMappedResponse> {
    readonly metaData: ServiceMetaData;
    readonly data: TMappedResponse;
    readonly request: ServiceRequest;
    readonly error: boolean;
}

export interface ServiceResponseError {
    readonly status: number;
    readonly response: any;
    readonly request: ServiceRequest;
    readonly responseType: string;
    readonly type: any;
}

export interface ServiceRequest<TRequestData = any> {
    readonly url: string;
    readonly method: HttpMethod;
    readonly data?: TRequestData;
    readonly headers?: ReadonlyDictionary<string>;
    readonly withCredentials?: boolean;
    readonly parameters?: ReadonlyDictionary;
    readonly responseType?: string;
}

export function createRequest<TRequestData>(
    url: string,
    method: HttpMethod = HttpMethod.GET,
    data?: TRequestData,
    headers: Record<string, string> = {},
    params: ReadonlyDictionary = {},
    responseType?: string,
): ServiceRequest<TRequestData> {

    return {
        url,
        method,
        headers,
        data,
        parameters: params,
        responseType,
    };
}

export function mapAjaxResponse<TMappedResponse>( response: AjaxResponse, isError?: boolean ): TMappedResponse {
    return response.response;
}

export function mapAjaxError( error: AjaxError, request: ServiceRequest ): ServiceResponseError {
    return {
        status: error.status,
        response: error.response,
        request,
        responseType: error.responseType,
        type: error.name,
    };
}

export function mapMetaData( response: AjaxResponse | AjaxError, isError: boolean = false ): ServiceMetaData {
    return {
        status: response.status,
        isError,
        contentType: response.xhr.getResponseHeader( HttpHeaders.contentType ),
    };
}

export type ResponseMapperDelegate = <TMappedResponse>( response: AjaxResponse, isError?: boolean ) => TMappedResponse;
export type MetaDataMapperDelegate = ( response: AjaxResponse, isError?: boolean ) => ServiceMetaData;

export function createServiceSuccessResponse<TMappedResponse, TServiceResponse extends ServiceResponse<TMappedResponse>>(
    response: AjaxResponse,
    request: ServiceRequest,
    responseMapper: ResponseMapperDelegate = mapAjaxResponse,
    metaDataMapper: MetaDataMapperDelegate = mapMetaData
): TServiceResponse {

    let metaData = {} as ServiceMetaData;
    let data = {} as TMappedResponse;

    try {
        metaData = metaDataMapper( response, false );
        data = responseMapper( response, false );
    } catch ( err ) {
    }

    return {
        metaData,
        data,
        request,
        error: false,
    } as TServiceResponse;
}

export type ErrorResponseMapperDelegate = ( error: AjaxError, request: ServiceRequest ) => ServiceResponseError;
export type ErrorMetaDataMapperDelegate = ( error: AjaxError, isError?: boolean ) => ServiceMetaData ;

export function createServiceFailedResponse(
    error: AjaxError,
    request: ServiceRequest,
    errorMapper: ErrorResponseMapperDelegate = mapAjaxError,
    metaDataMapper: ErrorMetaDataMapperDelegate = mapMetaData
): ServiceResponse<ServiceResponseError> {

    let metaData = {} as ServiceMetaData;
    let data = {} as ServiceResponseError;

    try {
        metaData = metaDataMapper( error, true );
        data = errorMapper( error, request );
    } catch ( err ) {
    }

    return {
        metaData,
        data,
        request,
        error: true,
    };
}

export function getUrl( path: string, queryParams?: Dictionary<AcceptedParamsTypes> ): string {
    const url = config.url + path;
    return queryParams ? url + getUrlQueryString( queryParams ) : url;
}

export function getUrlQueryString<TParams>( parameters: Dictionary<AcceptedParamsTypes> ): string {

    if ( typeof parameters === "undefined" || Object.keys( parameters ).length <= 0 ) {
        return "";
    }
    const query: string[] = [];
    for ( const key in parameters ) {
        if ( parameters[ key ] === undefined ) {
            continue;
        }

        const value = parameters[ key ];
        if ( Array.isArray( value ) ) {
            query.push( `${ key }=${ encodeURIComponent( value.join( "," ) ) }` );
        } else if ( value instanceof Date ) {
            query.push( `${ key }=${ value.toJSON() }` );
        } else if ( typeof value === "object" ) {
            const objValue = value as Dictionary;
            for ( const k in objValue ) {
                if ( objValue[ k ] === undefined ) {
                    continue;
                }
                query.push( `${ key }[${ k }]=${ encodeURIComponent( objValue[ k ].toString() ) }` );
            }
        } else {
            query.push( `${ key }=${ encodeURIComponent( value!.toString() ) }` );
        }
    }

    if ( query.length <= 0 ) {
        return "";
    }

    return "?" + query.join( "&" );
}

export type AcceptedParamsTypes = Date | string | number | boolean | string[] | ReadonlyArray<string> | number[] | ReadonlyArray<number> | boolean[] | ReadonlyArray<boolean>
    | Dictionary<string | number | boolean | string[] | number[] | boolean[]> | undefined;