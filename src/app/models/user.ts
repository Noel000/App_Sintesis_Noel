export class User {

    private _username: string;
    private _password: string;
    private _name: string;
    private _email: string;
    private _token: string;

    constructor() {
        this._username = "";
        this._password = "";
        this._name = "";
        this._email = "";
        this._token = "";
    }

    get username(): string {
        return this._username;
    }
    get password(): string {
        return this._password;
    }
    get name(): string {
        return this._name;
    }
    get email(): string {
        return this._email;
    }
    get token(): string {
        return this._token;
    }

    set username(username: string) {
        this._username = username;
    }
    set password(password: string) {
        this._password = password;
    }
    set name(name: string) {
        this._name = name;
    }
    set email(email: string) {
        this._email = email;
    }
    set token(token: string) {
        this._token = token;
    }
}
