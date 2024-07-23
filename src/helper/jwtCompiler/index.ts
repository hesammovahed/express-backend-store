import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY!

interface Payload {
    token: string
}

export const encodeJwt = (payload: Payload,): string => {
    return jwt.sign(payload, secretKey, {expiresIn: '30d'});
};

export const decodeJwt = ({token}: Payload) => {
    try {
        return jwt.verify(token, secretKey) as Payload;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};