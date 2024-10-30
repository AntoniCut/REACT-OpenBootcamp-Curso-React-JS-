//  ****************************************************************************************
//  **********  openbootcamp-app-react/src/components/pure/ObservableExample.jsx  **********
//  ****************************************************************************************


import { useState } from "react";
import { getNumber } from "../../services/observableService";


//  -----------------------------------
//  ----------  OBSERVABLES  ----------
//  -----------------------------------
export const ObservableExample = () => {


    const [number, setNumber] = useState(0);
    
    const obteinNewNumbers = () => {

        alert('Subscription to Observable');

        getNumber.subscribe({

            //  -----  se ejecuta varias veces  -----
            next(newNumber) {
                alert('New Number: ' + newNumber);
                console.log('New Number: ', newNumber);
                setNumber(newNumber);
            },
            error(error) {
                alert(`Something went wrong: ${error}`)
                console.log('Error in observable', error);
            },
            complete() {
                alert(`Finished with: ${number} `);
                console.log('Done with the observable');
            }

        });

        alert('Finished receiving numbers');
    }


    return (

        <div className="componentes">

            <h2 className='titulo-componente'> -----  Observables  ----- </h2>
            <h3> Number: {number} </h3>
            
            <div className="btn-container">
                <button onClick={obteinNewNumbers}> Obtein new Numbers </button>
            </div>

        </div>
    )
}