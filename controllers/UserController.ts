import { Request, Response } from "express";
import { IndexUserService } from "../services/IndexUserService";

export class UserController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            // const FK_USER = req.user.id;

            const  findUsers = new IndexUserService();

            const result = await findUsers.handler();

            return res.status(200).json({ data: result, message: 'OK!' });
        } catch (error) {
            return res.status(400).json({ data: null, message: (error as Error).message });
        }
    }
    async create(req: Request, res: Response): Promise<Response>{
        try {
            const FK_USER = req.user.id;
            const result = {};
            return res.status(200).json({ data: result, message: 'OK!' });
        } catch (err) {
            return res.status(400).json({ data: null, message: (err as Error).message });
        }
    }
}