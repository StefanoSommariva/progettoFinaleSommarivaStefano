import { Comune } from "./comune";
import { ComuneData } from "./comune-data";

export class Indirizzo {
    id?: number;
    via!: string
    civico!: string;
    cap!: string;
    localita!:  string;
    comune!: Comune

    constructor() {
        this.comune = new Comune()
    }
}
