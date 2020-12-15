import {
    AcceptedParamsTypes,
    createRequest,
    createServiceSuccessResponse,
    Dictionary,
    getUrl,
    HttpMethod,
    ServiceResponse
} from "../utils/httpUtils";
import { executeRequest } from "../http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AjaxError, AjaxResponse } from "rxjs/ajax";
import { ProductsResponse } from "../store";

export interface LoginResponse extends ServiceResponse<ProductsResponse> {}

export function _login( params: Dictionary<AcceptedParamsTypes>  ):
    Observable<LoginResponse> {

    const url = getUrl( '/user/login' );
    const request = createRequest(
            url,
            HttpMethod.POST,
            params,
            undefined,
            undefined,
            undefined,
    );

    return executeRequest( request )
        .pipe (
            map( ( response: AjaxResponse ) =>
                createServiceSuccessResponse<ProductsResponse, LoginResponse >( response, request )
            )
        );
}