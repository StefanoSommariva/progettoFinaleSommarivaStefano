import { Comune } from "./comune";

export class IndirizzoOperativo {
    id?:number;
    via?:string;
    civico!:string;
    cap!:string;
    localita!:string;
    comune!:Comune

    constructor() {
        this.comune = new Comune()
    }
}
