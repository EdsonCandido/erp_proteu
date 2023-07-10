import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';
import {auth} from '../configs';

interface IPayload{
    user: {
        id: number;
        nome: string;
        email: string;
        active: number;
        login: string;
    }
}

const IsLogged = (request: Request, response: Response, next: NextFunction) => {
    try {
        const authorization = request.headers.authorization;

        if(!authorization) throw new Error("Não foi encontrado o token authorization");

        const token = authorization.split(' ');

        if(token.length < 2) throw new Error("token de forma incorreta ");

        const decoded = verify(token[1], auth.jwt.secret);

        const {user} = decoded as IPayload;

        if(user.active == 0) throw new Error("Usuário inativo");

        request.user = user;

        return next();
         
    } catch (err) {
        return response.status(401).json({message: (err as Error).message});
    }
}


export default IsLogged;