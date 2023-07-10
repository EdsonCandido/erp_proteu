import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../databases/PrismaClients";

export class IndexUserService {
    private conn: PrismaClient;

    constructor() {
        this.conn = prismaClient;
    }
    public async handler() {
        const result = await this.conn.user.findMany({
            select: {
                id: true,
                email: true,
                login: true,
                active: true,
                createdAt: true
            }
        });

        return result;
    }
}