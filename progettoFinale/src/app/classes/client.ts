import { Comune } from "./comune";
import { IndirizzoLegale } from "./indirizzo-legale";
import { IndirizzoOperativo } from "./indirizzo-operativo";
import { Provincia } from "./provincia";

export class Client {
    id?: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string
    cognomeContatto!: string
    telefonoContatto!: string
    emailContatto!: string;
    indirizzoSedeOperativa!: IndirizzoOperativo
    indirizzoSedeLegale!: IndirizzoLegale
    dataInserimento!: Date
    dataUltimoContatto!: Date
    fatturatoAnnuale?: number

    constructor () {
        this.indirizzoSedeOperativa = new IndirizzoOperativo(),
        this.indirizzoSedeLegale = new IndirizzoLegale()
    }
}
