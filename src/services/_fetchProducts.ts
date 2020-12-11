import {
    createRequest,
    createServiceSuccessResponse,
    HttpMethod,
    ServiceResponse
} from "../utils/httpUtils";
import { executeRequest } from "../http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AjaxError, AjaxResponse } from "rxjs/ajax";
import { ProductsResponse } from "../store";

export interface FetchProductsResponse extends ServiceResponse<ProductsResponse> {}

export function _fetchProducts():
    Observable<FetchProductsResponse> {

    const url = `https://join-tsh-api-staging.herokuapp.com/product`;
    const request = createRequest(
            url,
            HttpMethod.GET,
            undefined,
            undefined,
            undefined,
            undefined,
    );

    return executeRequest( request )
        .pipe (
            map( ( response: AjaxResponse | AjaxError ) =>
                createServiceSuccessResponse<ProductsResponse, FetchProductsResponse >( response, request )
            )
        );
}