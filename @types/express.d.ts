declare namespace Express{
    export interface Request{
        user: {
            id: number;
            nome: string;
            email: string;
            login: string;
            active: number;
        };
    }
}