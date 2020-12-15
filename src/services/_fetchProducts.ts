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
import { ProductsData, ProductsResponse } from "../store";

export interface FetchProductsResponse extends ServiceResponse<ProductsData> {}

export function _fetchProducts( params: Dictionary<AcceptedParamsTypes>  ):
    Observable<FetchProductsResponse> {

    const url = getUrl( '/product', params );
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
            map( ( response: AjaxResponse ) =>
                createServiceSuccessResponse<ProductsData, FetchProductsResponse >( response, request )
            )
        );
}