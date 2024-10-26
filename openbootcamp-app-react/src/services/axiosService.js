//  ************************************************************************
//  **********  openbootcamp-app-react/src/utils/axiosService.js  **********
//  ************************************************************************


import APIRequest from "../utils/config/axios.config";


//  ----------  Obtener usuarios aleatorios  ----------
export function getRandomUser() {

    
    //  -----  Devuelve https://randomuser.me/api/  -----
    return APIRequest.get('/', {

        validateStatus: function(status) {
            return status < 500;
        }
   


    })
}