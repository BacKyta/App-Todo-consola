import Tarea from './tarea.js';


/**
 * _listado:
 * { nanoid-2323-4342: { id:12, desc:asd, completadoEn: 2234234 }}  
 * { nanoid-2323-4342: { id:12, desc:asd, completadoEn: 2234234 }}  
 * { nanoid-2323-4342: { id:12, desc:asd, completadoEn: 2234234 }}  
  
*/


export default class Tareas{
    _listado = {};


    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{
            listado.push(this._listado[key])
        })
        return listado;
        //* se puede usar el object.values tmb pero en este caso queremos manejar el uid
    } 

    constructor(){
        this._listado = {}    
    }
    

    borrarTarea( id = ''){
        // console.log(this._listado[id] );
        if ( this._listado[id] ) {
            delete this._listado[id]; //esta agarrando el 'id' del _listado no del arraylistado
        }
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log(); //salto de linea
        this.listadoArr.forEach( (tarea, index) =>{

            const idx = `${index + 1}`.green;
            const { desc, completadoEn } = tarea;
            

            const estado = (completadoEn)
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            
            console.log(`${ idx } ${ desc } :: ${ estado } `);
        })
    }

    listarPendientesCompletadas( completadas = true ){

        console.log();
        let contador = 0
        this.listadoArr.forEach(( tarea ) =>{

            const { desc, completadoEn } = tarea;
            
            const estado = (completadoEn)
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${ (contador + '.').green }. ${ desc } :: ${ completadoEn.green } `);
                }
                
            }else{
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${ (contador + '.').green }. ${ desc } :: ${ estado } `);
                }
            }
        })
    }

    toggleCompletadas( ids = [] ){
        ids.forEach( id =>{
            const tarea = this._listado[id]; // extrae todo el objeto con ese id

            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString(); // le asigna un fecha que es como un valor true que si hay algo
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ) {
                const task = this._listado[tarea.id];
                task.completadoEn = null
            }
        })

    }
    
}
