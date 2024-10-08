//  ***************************************************************
//  **********  /openbootcamp/src/models/user.class.jsx  **********
//  ***************************************************************


import { ROLES } from "./roles.enum";


//  **********  Componente de Clase con los usuarios  **********
export class User {

    userName = '';
    email = '';
    password = '';
    role = ROLES.USER;


    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}