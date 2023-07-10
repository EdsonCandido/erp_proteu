import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class SessionController{
    async login (req: Request, res: Response): Promise<Response>{
        try {
            const {login, password} = req.body;
            const service = new LoginService();
            const result = await service.handler({login, password});
            return res.status(200).json({ data: result, message: 'OK!' });
        } catch (error) {
            return res.status(400).json({ data: null, message: (error as Error).message });
        }
    }
}