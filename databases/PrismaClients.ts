import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
    errorFormat: 'pretty',
    log: ['warn', 'error'] //query | info | warn | error
});

export {prismaClient};