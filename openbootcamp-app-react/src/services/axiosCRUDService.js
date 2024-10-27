//  ****************************************************************************
//  **********  openbootcamp-app-react/src/utils/axiosCRUDService.js  **********
//  ****************************************************************************


import axios from "axios";


/**
    **********  Login Method to ReqRes endpoint   **********
 * @param { string } email 
 * @param { string } password 
 * @returns { Promise }
 */
export const loginAxios = (email, password) => {

    //  -----  data  -----
    const body = {
        email: email,
        password: password
    }

    //  -----  Returns the response with a Promise  -----
    return axios.post('https://reqres.in/api/login', body)
}


/**
 **********  get all users  **********
 * @returns { Promise }
 */
export const getAllUsers = () => {

    //  -----  Returns the response with a Promise  -----
    return axios.get('https://reqres.in/api/users')
}


/**
 **********  get all paged users  **********
 * @param { number } page 
 * @returns { Promise } 
 */
export const getAllPagedUsers = (page) => {

    //  -----  Returns the response with a Promise  -----
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}


/**
 * **********  get user by id  **********
 * @param { number} id 
 * @returns { Promise }
 */
export const getUserById = (id) => {

    //  -----  Returns the response with a Promise  -----
    return axios.get(`https://reqres.in/api/users/${id}`)

}



/**
 **********  create user  **********
 * @param { number } id 
 * @param { string } name 
 * @param { string } job 
 * @returns { Promise }
 */
export const createUser = (id, name, job) => {

     //  -----  data  -----
     const body = {
        id: id,
        name: name,
        job: job
    }

    //  -----  Returns the response with a Promise  -----
    return axios.post('https://reqres.in/api/users', body)
}



/**
 **********  update user by id  **********
 * @param { number } id 
 * @param { string } name 
 * @param { string } job 
 * @returns { Promise}
 */
export const updateUserById = (id, name, job) => {

    //  -----  data  -----
    const body = {
        name: name,
        job: job
    }

    //  -----  Returns the response with a Promise  -----
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}



/**
 * 
 * @param { number } id 
 * @returns { Promise }
 */
export const deleteUserById = (id) => {

    //  -----  Returns the response with a Promise  -----
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
