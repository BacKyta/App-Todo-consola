import { nanoid } from 'nanoid'

export default class Tarea{
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        this.desc = desc;
        this.id = nanoid();
        this.completadoEn = null;
    }

}


