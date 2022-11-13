import jwt_decode from "jwt-decode";

export interface JWT {
    exp: string
    iat: string
    userId: string
}

const getToken = (): JWT | null => {
    try {
        const token = localStorage.getItem('token');
        return jwt_decode(token as string)
    } catch(error) {
        return null
    }
}

export default getToken