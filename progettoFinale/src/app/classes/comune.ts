import { Provincia } from "./provincia";
import { ProvinciaData } from "./provincia-data";

export class Comune {
    id?:number;
    nome!:string;
    provincia!:  Provincia

    constructor () {
        this.provincia = new Provincia()
    }

}
