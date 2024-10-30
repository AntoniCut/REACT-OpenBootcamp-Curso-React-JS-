//  *********************************************************************************
//  **********  openbootcamp-app-react/src/components/container/child.jsx  **********
//  *********************************************************************************


import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import '../../App.css';


//  **********  Componente Hijo se comunica con el Padre mediante Eventos  **********
export const Child = ({ name, send, update }) => {

    //  -----  useRef  -----
    const messageRef = useRef('');      //  -----  Referencia al Input  -----
    const nameRef = useRef('');         //  -----  Referencia al Input del Formulario  -----
    const infoRef = useRef('');         //  -----  Referencia al div de la Informacion de los resultados de los eventos  -----


    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text in Input: ${text}`);
        infoRef.current.innerText = `Text in Input: ${text}`; // Mostramos el texto en el div
    };


    const pressButtonParam = (text) => {
        alert(`Text: ${text}`);
        infoRef.current.innerText = `Button 3 pressed with text: ${text}`; // Mostramos el evento en el div
    };

    
    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value);
        infoRef.current.innerText = `Name updated to: ${nameRef.current.value}`;
    }


    return (

        <Draggable >

            <div style={{ color: 'black', backgroundColor: 'cyan', padding: '30px' }}>

                {/* *****  NAME  ***** */}
                <h3> Hello <strong> {name} </strong> </h3>


                {/* *****  3 BOTONES  ***** */}
                <div className='btn-container'>

                    <button
                        onClick={() => {
                            alert('Botón 1 pulsado');
                            infoRef.current.innerText = 'Button 1 clicked';
                        }}
                    >
                        Button 1
                    </button>

                    <button onClick={pressButton}>Button 2</button>

                    <button onClick={() => pressButtonParam('Hello')}>Button 3</button>
                </div>


                {/* *****  INPUT y BOTÓN Enviar mensaje al Padre  ***** */}
                <div className='btn-container'>

                    <input

                        placeholder='Send a text to your father'

                        onFocus={() => {
                            console.log('input focused');
                            infoRef.current.innerText = 'input focused';
                        }}

                        onBlur={() => {
                            console.log('input blured');
                            infoRef.current.innerText = 'input blured';
                        }}


                        onChange={(e) => {
                            console.log('input changed', e.target.value);
                            infoRef.current.innerText = 'input changed';
                        }}

                        onCopy={() => {
                            console.log('copied text from Input');
                            infoRef.current.innerText = 'copied text from input';
                        }}

                        ref={messageRef}
                    />

                    <button
                        
                        onClick={() => {
                            send(messageRef.current.value);
                            infoRef.current.innerText = 'Mensaje Enviado al Padre ' + messageRef.current.value ;
                        }}

                    > Send Message To Parent </button>

                </div>


                {/* *****  FORMULARIO - INPUT y BOTÓN  ***** */}
                <form className='btn-container' onSubmit={submitName}>

                    <input ref={nameRef} placeholder='New Name'

                        onFocus={() => {
                            console.log('input form focused');
                            infoRef.current.innerText = 'input form focused';
                        }}

                        onBlur={() => {
                            console.log('input blured');
                            infoRef.current.innerText = 'input form blured';
                        }}


                        onChange={(e) => {
                            console.log('input changed', e.target.value);
                            infoRef.current.innerText = 'input form changed';
                        }}

                    />

                    <button type="submit"> Update Name </button>

                </form>


                {/* *****  RESULTADOS de los EVENTOS  ***** */}
                <div>
                    <h3> Resultado de Evento </h3>
                    <h4> <strong ref={infoRef}> </strong> </h4>
                </div>

            </div>

        </Draggable>
    );
};
