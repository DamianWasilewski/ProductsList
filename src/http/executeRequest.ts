import { Observable, throwError } from "rxjs";
import { ajax, AjaxError, AjaxRequest, AjaxResponse } from "rxjs/ajax";
import { catchError } from "rxjs/operators";
import { ContentTypes, createServiceFailedResponse, HttpHeaders, HttpMethod, ServiceRequest } from "../utils/httpUtils";

export const defaultHeaders = {
    [ HttpHeaders.accept ]: ContentTypes.applicationJson,
    [ HttpHeaders.contentType ]: ContentTypes.applicationJson,
};

export function executeRequest<TRequestData = undefined>( request: ServiceRequest<TRequestData> ): Observable<AjaxResponse | AjaxError> {

    let headers: Record<string, string | undefined> = { ...defaultHeaders, ...request.headers };

    const requestBody = request.method !== HttpMethod.GET ? request.data : undefined;

    const requestConfig: AjaxRequest = {
        method: request.method,
        url: request.url,
        headers,
        body: requestBody,
    };

    if ( request.responseType ) {
        requestConfig.responseType = request.responseType;
    }

    return ajax( requestConfig ).pipe(
        catchError( ( error: AjaxError ) => throwError( createServiceFailedResponse( error, request ) ) ),
    );
}