import { AcceptedParamsTypes, Dictionary } from "utils/httpUtils";

export interface ProductsState {
    data: ProductsData;
    isLoading: boolean;
    error: boolean;
    searchParams: Dictionary<AcceptedParamsTypes>;
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

export interface ProductsData {
    items?: Array<ProductsItem>;
    meta?: ProductsMeta;
    links?: ProductsLinks;
}

export interface ProductsItem {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
}

export interface ProductsMeta {
    totalItems: number;
    itemsCount: number;
    itemsPerPage: string;
    totalPages: number;
    currentPage: string;
}

export interface ProductsLinks {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export const productsInitState: ProductsState = {
    data: {},
    isLoading: false,
    error: false,
    searchParams: {
        page: 1,
        limit: 12,
    },
}

