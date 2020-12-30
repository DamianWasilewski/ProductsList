import { Observable } from "rxjs";
import { AcceptedParamsTypes, Dictionary } from "utils/httpUtils";
import { FetchProductsResponse, _fetchProducts } from "./_fetchProducts";

export function fetchProducts( params: Dictionary<AcceptedParamsTypes>  )
    : Observable<FetchProductsResponse> {

    return _fetchProducts( params );
}