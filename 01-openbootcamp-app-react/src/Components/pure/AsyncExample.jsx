//  ***********************************************************************************
//  **********  openbootcamp-app-react/src/components/pure/AsyncExample.jsx  **********
//  ***********************************************************************************


//  -------------------------------------------
//  ----------  PROCESOS ASYNCRONOS  ----------
//  -------------------------------------------
export const AsyncExample = () => {


    //  ----------  Procesos asyncronos con function  ----------

    //  -----  funcion asincrona  -----   
    async function generateNumber() {
        return 1;
    }

    //  -----  Promesa  -----
    async function generatePromiseNumber() {

        //  -----  devuelve un valor  -----
        return Promise.resolve(2)
    }

    //  -----  funcion asincrona  -----
    function obtainNumber() {

        generateNumber()
            .then(response => alert(`response: ${response}`))
            .catch(error => alert(`Algo ha ido mal ${error}`))
    }

    //  -----  Promesa  -----
    function obtainPromiseNumber() {

        generatePromiseNumber()
            .then((response) => alert(`Response ${response}`))
            .catch(error => alert(`Algo ha ido mal ${error}`))

    }


    //  -----  Session Storage  -----

    async function saveSessionStorage(key, value) {

        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {

        saveSessionStorage('name', 'Antonio')
            .then(response => {
                const value = response;
                alert(`Saved Name: ${value}`);
            })
            .catch(error => alert(`Algo ha ido mal ${error}`))
            .finally(() => alert('Name saved and retreived success 😊 !!!'))
    }


    //  -----  Promise y Await  -----
    async function obtainMessage() {

        const promise = new Promise((resolve, reject) => setTimeout(() => resolve('Hello World 😊'), 2000))
        const message = await promise;
        await alert(`Message received: ${message}`);
    }


    //  ----------  Procesos asyncronos con const  ----------

    const returnError = async () => {
        await Promise.reject(new Error('Ooooops'));
    }

    //  -----  ejecutar el catch  -----
    const consumeError = () => {

        returnError()
            .then(response => alert(`Everything is OK: ${response}`))
            .catch(error => alert(`Algo ha ido mal ${error}`))
            .finally(() => alert('Finally executed 😊 !!!'))
    }

    //  -----  try-catch  -----
    const urlNotFound = async () => {

        try {
            const response = await fetch('https://invalidUrl');
            alert(`Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Algo ha ido mal con la URL - ${error} - (check your console)`)
        }
    }


    //  -----  Gestionar varias promesas a la vez  -----
    const multiplePromise = async () => {

        const results = await Promise.all([
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2')
        ])
            .then(results => alert(results))
            .catch(error => alert(`Algo ha ido mal con las URLs - ${error} - (check your console)`))
    }


    //  ----------  OBSERVABLES  ----------
    //  -  Como las promesas pero devuelven multiples valores.
    //  -  hay que instalar la libreria rxjs



    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Procesos Asyncronos  ----- </h2>

            <div className="btn-container">
                <button onClick={obtainNumber}> Obtain Number </button>
                <button onClick={obtainPromiseNumber}> Obtain Promise Number </button>
                <button onClick={showStorage}> Save Name and Show </button>
                <button onClick={obtainMessage}> Receive Message in 2 secons </button>
                <button onClick={consumeError}> Obtain Error </button>
                <button onClick={urlNotFound}> Request to Unknown URL </button>
                <button onClick={multiplePromise}> Multiple Promise </button>
            </div>

        </div>
    )
}