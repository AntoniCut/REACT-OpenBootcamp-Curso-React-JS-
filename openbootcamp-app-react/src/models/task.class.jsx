//  ***************************************************************
//  **********  /openbootcamp/src/models/task.class.jsx  **********
//  ***************************************************************


import { LEVELS } from "./levels.enum";


//  **********  Componente de Clase con las propiedades de una 'tarea'  **********
export class Task {

    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;
    
    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }

}