import { Observable } from "rxjs";
import { AcceptedParamsTypes, Dictionary } from "utils/httpUtils";
import { LoginResponse, _login } from "./_login";

export function login( params: Dictionary<AcceptedParamsTypes>  )
    : Observable<LoginResponse> {

    return _login( params );
}