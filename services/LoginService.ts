import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../databases/PrismaClients";

import { compare } from 'bcryptjs';
interface IRequest {
    login: string;
    password: string;
}

export class LoginService {
    private repository: PrismaClient;

    constructor() {
        this.repository = prismaClient;
    }

    public async handler({ login, password }: IRequest) {
        if (!login || !password) throw new Error("Dados incompletos");

        const userExist = await this.repository.user.findFirst({
            where: { login }
        });

        if (!userExist) throw new Error("Usuário não encontrado!");

        const passwordVerify = await compare(password, userExist.password);

        if (!passwordVerify) throw new Error("Senha incorreta, tente novamente!");

        if(!userExist.active) throw new Error("login desativado!");
        
        const userReturn = {
            id: userExist.id,
            nome: userExist.nome,
            email: userExist.email,
            login: userExist.login,
            active: userExist.active,
            createdAt: userExist.createdAt,
        }

        return {
            user: userReturn
        }
    }
}