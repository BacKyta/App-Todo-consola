import inquirer from 'inquirer';
import 'colors';


const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value:'2',
                name:`${'2'.green}. Listar tareas`
            },
            {
                value:'3',
                name:`${'3'.green}. Listar tareas completas`
            },
            {
                value:'4',
                name:`${'4'.green}. Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5'.green}. Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6'.green}. Borrar tarea`
            },
            {
                value:'7',
                name:`${'7'.green}. Salir`
            }
        ]
    }
];


export const inquirerMenu = async () =>{
    
    console.clear();
    console.log('===================='.green);
    console.log('   Select a option'.white);
    console.log('===================='.green);

    const { option } = await inquirer.prompt( questions )
    // console.log(option);
    return option;
}

export const pause = async() =>{

    const question = [
        {
            type:'input',
            name:'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt( question )

}


export const leerInput = async( message )=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if ( value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;
}

export const listadoTareasBorrar = async ( tareas = [] ) =>{

    const choices = tareas.map( (tarea, i) =>{

        const idx = `${i + 1}`.green;

        return{
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }` 
        }
    });

    choices.unshift({
        value:'0',
        name:'0.'.green + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            messsages: 'Borrar',
            choices: choices
        }
    ]
    const  { id }  = await inquirer.prompt( preguntas ); //esto genera el prompt y la interface del case 6
    return id;

}

export const MostrarListadoCheckList = async ( tareas = [] ) =>{

    const choices = tareas.map( (tarea, i) =>{

        const idx = `${i + 1}`.green;

        return{
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            messsages: 'Seleciones',
            choices: choices
        }
    ]
    const  { ids }  = await inquirer.prompt( pregunta ); //esto genera el prompt y la interface del case 6
    return ids;

}

export const confirmar = async ( message ) =>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message: message
        }
    ]

    const  { ok }  = await inquirer.prompt( question );
    return ok;
}