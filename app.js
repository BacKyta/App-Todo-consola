import 'colors';
import { inquirerMenu, pause, leerInput, listadoTareasBorrar, confirmar,MostrarListadoCheckList } from './helpers/inquirer.js';
// import { Tarea } from './models/tarea.js';
import Tareas from './models/tareas.js';
import { readDB, saveDB } from './helpers/saveFile.js';


console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = readDB();

    if ( tareasDB ) {
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB)
    }

    // await pause();

    do {

       opt = await inquirerMenu()
        // console.log({ opt });

       switch ( opt ) {
        case '1':
            const desc = await leerInput('Descripcion:');
            tareas.crearTarea( desc );
            break;

        case '2':
            tareas.listadoCompleto()
            break;

        case '3':
            tareas.listarPendientesCompletadas(true)
            break;
        
        case '4':
            tareas.listarPendientesCompletadas(false)
            break;

        case '5':
            const ids = await MostrarListadoCheckList(tareas.listadoArr)
            tareas.toggleCompletadas( ids );
        break;

        case '6':
            const id = await listadoTareasBorrar( tareas.listadoArr )
            if ( id !== '0') {
                const ok = await confirmar('Estas seguro que desaeas borrarlo?')
                if ( ok ) {
                    tareas.borrarTarea(id);
                    console.log('tarea borrada');
                }
            }
            // console.log({id});
          break;
            
        default:
            break;
       }

       saveDB( tareas.listadoArr )

       if (opt !== '7') await pause();

    } while ( opt !== '7' );

}

main();