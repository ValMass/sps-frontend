export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    token: string;
    tokencreationdate: string;
    usercreationdate: string;
    role: ROLE;

    //     id: number;
    //     username: string;
    //     password: string;
    //     firstName: string;
    //     lastName: string;
    //     token?: string;
}

export enum ROLE {
    User = "0",
    Admin = "1"
}