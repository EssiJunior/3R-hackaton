
import {jwtDecode} from "jwt-decode";

export const AccessTokenDecode = () => {
    
    
    if (localStorage.getItem('access')!==undefined) {
        const decodedToken = jwtDecode(localStorage.getItem('access')!);
        return decodedToken;
    }

    return null;
};