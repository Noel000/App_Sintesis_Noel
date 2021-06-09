export class Practiques {

    private _id: number;
    private _titul: string;
    private _profecreado: string;
    private _descripcio: string;
    private _explicacio: string;
    private _categoria: number;
    private _materialpractiques: string;
    private _tipusrecurs: string;
    private _datacreacio: string;


    constructor() {
        this._id = 0;
        this._titul = "";
        this._profecreado = "";
        this._descripcio = "";
        this._explicacio = "";
        this._categoria = 0;
        this._materialpractiques = "";
        this._tipusrecurs = "";
        this._datacreacio = "";
    }

    get id(): number {
        return this._id;
    }
    get titul(): string {
        return this._titul;
    }
    get profecreado(): string {
        return this._profecreado;
    }
    get descripcio(): string {
        return this._descripcio;
    }
    get explicacio(): string {
        return this._explicacio;
    }
    get categoria(): number {
        return this._categoria;
    }
    get materialpractiques(): string {
        return this._materialpractiques;
    }
    get tipusrecurs(): string {
        return this._tipusrecurs;
    }
    get datacreacio(): string {
        return this._datacreacio;
    }

    set id(id: number) {
        this._id = id;
    }
    set titul(titul: string) {
        this._titul = titul;
    }
    set profecreado(profecreado: string) {
        this._profecreado = profecreado;
    }
    set descripcio(descripcio: string) {
        this._descripcio = descripcio;
    }
    set explicacio(explicacio: string) {
        this._explicacio = explicacio;
    }
    set categoria(categoria: number) {
        this._categoria = categoria;
    }
    set materialpractiques(materialpractiques: string) {
        this._materialpractiques = materialpractiques;
    }
    set tipusrecurs(tipusrecurs: string) {
        this._tipusrecurs = tipusrecurs;
    }
    set datacreacio(datacreacio: string) {
        this._datacreacio = datacreacio;
    }

}
