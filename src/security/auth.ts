import jwt from 'jsonwebtoken';

export const getUser = (token: string): String => {
    try {
        let decodedToken = jwt.verify(token, 'todo');
        console.log(decodedToken);
        return decodedToken.toString();
    } catch (err) {
        return "null";
    }
}