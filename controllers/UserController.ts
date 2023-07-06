import { Request, Response } from "express";

export class UserController {
    async index(req: Request, res: Response): Promise<Response> {
        try {

            return res.status(200).json({ data: [], message: 'OK!' });
        } catch (error) {
            return res.status(400).json({ data: null, message: (error as Error).message });
        }
    }
}