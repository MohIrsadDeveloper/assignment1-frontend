export class Ilogin {
    constructor(
        public email: string,
        public password: string
    ) { }
};

export class LoginRes {
    constructor(
        public auth: boolean,
        public token: string
    ) { }
};
