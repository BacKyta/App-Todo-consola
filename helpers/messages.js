import 'colors';

const showMenu = async () => {
     return new Promise( resolve => {
        console.clear();
        console.log('===================='.green);
        console.log('   Select a option'.green);
        console.log('===================='.green);

        console.log(`${'1'.green}. Create task`);
        console.log(`${'2'.green}. List task`);
        console.log(`${'3'.green}. List task completed`);
        console.log(`${'4'.green}. List task pending`);
        console.log(`${'5'.green}. Completas tareas(s)`);
        console.log(`${'6'.green}. Delete task`);
        console.log(`${'0'.green}. Exit`);


        const readline = require('node:readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
   
        readline.question('Select a option: ', (opt) =>{
            readline.close();
            resolve(opt)
        });
       
    })
    
}

const pause = () =>{

    return new Promise ( resolve  =>{
        const readline = require('node:readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPress ${'ENTER'.green} to continue:\n`, (opt) =>{
            readline.close();
            resolve();
        });
    })

}



module.exports = {
    showMenu,
    pause
}
