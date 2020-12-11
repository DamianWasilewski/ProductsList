import { FetchProductsResponse } from "services/_fetchProducts";

export interface ProductsState {
    data: any,
    isLoading: boolean;
    error: boolean;
    pageNumber: number | null;
    limit: number | null;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
}

export interface ProductsResponse {
    items: Product[];
    itemCount: number;
    total: number;
    pageCount: number;
    next: string;
    previous: string;
}

export interface FetchProductsParams {
    page: number;
    limit: number;
}

export const productsInitState: ProductsState = {
    data: [],
    isLoading: false,
    error: false,
    pageNumber: null,
    limit: null,
}

