import { Observable } from "rxjs";
import { FetchProductsResponse, _fetchProducts } from "./_fetchProducts";

export function fetchProducts()
    : Observable<FetchProductsResponse> {

    return _fetchProducts();
}