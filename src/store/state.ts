import { AuthState } from "./auth/state"; 
import { ProductsState } from "./products/state";

export type RootState = {
    auth: AuthState;
    products?: ProductsState;
}
export * from "./auth/state";
export * from "./products/state";

