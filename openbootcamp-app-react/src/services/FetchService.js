//  ***************************************************************************
//  **********  openbootcamp-app-react/src/services/FetchService.js  **********
//  ***************************************************************************


//  -----  Obtener todos los usuarios  -----
export const getAllUsers = async () => {
    
    const response = await fetch('https://reqres.in/api/users');
    
    console.log('\n\n\n');
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log("Response ==> ", response);
    console.log("Status ==> ", response.status);
    console.log("OK? ==> ", response.ok);
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log('\n\n\n');
    
    //  -----  devolvemos el JSON de los datos  -----
    return response.json();
}


//  -----  Obtener todos los usuarios por página  -----
export const getAllPagedUsers = async (page) => {
    
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    
    console.log('\n\n\n');
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log("Response ==> ", response);
    console.log("Status ==> ", response.status);
    console.log("OK? ==> ", response.ok);
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log('\n\n\n');
    
    //  -----  devolvemos el JSON de los datos  -----
    return response.json();
}


//  -----  Obtener los detalles de un usuario por id  -----
export const getUsersDetailsById = async (id) => {
    
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    
    console.log('\n\n\n');
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log("Response ==> ", response);
    console.log("Status ==> ", response.status);
    console.log("OK? ==> ", response.ok);
    console.warn('*****  Peticiones HTTP con FETCH  *****');
    console.log('\n\n\n');
    
    //  -----  devolvemos el JSON de los datos  -----
    return response.json();
}
