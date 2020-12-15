import { HttpMethod } from "utils/httpUtils";
import { productsInitState } from "../state";

export function mockPayload() {
    return {
        data: {
            items: [
                {
                    id: 1,
                    name: "test",
                    description: "test",
                    rating: 3,
                    image: "test",
                    promo: false,
                    active: true
                }
            ],
            meta: {
                totalItems: 500,
                itemsCount: 12,
                itemsPerPage: "12",
                totalPages: 42,
                currentPage: "1",
            },
            links: {
                first: "test",
                previous: "test",
                next: "test",
                last: "test",
            }
        },
        error: false,
        metaData: {
            contentType: "test",
            isError: false,
            status: 200
        },
        request: {
            data: undefined,
            headers: {},
            method: HttpMethod.GET,
            parameters: {},
            responseType: undefined,
            url: "test",
        }
    }
};

export function mockFailedPayload() {
    return {
        data: {
            items: [
                {
                    id: 1,
                    name: "test",
                    description: "test",
                    rating: 3,
                    image: "test",
                    promo: false,
                    active: true
                }
            ],
            meta: {
                totalItems: 500,
                itemsCount: 12,
                itemsPerPage: "12",
                totalPages: 42,
                currentPage: "1",
            },
            links: {
                first: "test",
                previous: "test",
                next: "test",
                last: "test",
            }
        },
        error: false,
        metaData: {
            contentType: "test",
            isError: false,
            status: 200
        },
        request: {
            data: undefined,
            headers: {},
            method: HttpMethod.GET,
            parameters: {},
            responseType: undefined,
            url: "test",
        }
    }
};

export function mockProductsState() {
    return {
        ...productsInitState,
        data: {
            items: [
                {
                    id: 1,
                    name: "test",
                    description: "test",
                    rating: 3,
                    image: "test",
                    promo: false,
                    active: true 
                }
            ],
            meta: {
                totalItems: 500,
                itemsCount: 12,
                itemsPerPage: "12",
                totalPages: 42,
                currentPage: "1",
            },
            links: {
                first: "test",
                previous: "test",
                next: "test",
                last: "test",
            }
        },
        isLoading: false,
        error: false,
    }
};

export function mockFailedProductsFetchState() {
    return {
        ...productsInitState,
        data: {},
        isLoading: false,
        error: true,
    }
};