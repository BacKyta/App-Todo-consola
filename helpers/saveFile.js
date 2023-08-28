import * as fs from 'node:fs';

const file = './db/data.json';


export const saveDB = ( data ) =>{

    fs.writeFileSync( file, JSON.stringify( data ) ); // se debe convertir el array a texto para que se guarde en json
}

export const readDB = () =>{
    if ( !fs.existsSync(file) ) return null

    const info = fs.readFileSync( file, { encoding: 'utf-8'} );
    const data = JSON.parse( info );

    // console.log(data);
    
    return data;
}

