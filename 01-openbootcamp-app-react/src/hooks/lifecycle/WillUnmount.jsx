//  ***********************************************************************************
//  **********  /openbootcamp-app-react/src/hooks/lifecycle/WillUnMount.jsx  **********
//  ***********************************************************************************


import React, { Component, useEffect } from 'react';


//  Ejemplo de uso del metodo componentWillUnMount 'ciclo de vida en componente clase'.
//  Y el hook de              componentWillUnMount 'ciclo de vida en componente funcional'.
//  Cuando el componente va ha desaparecer.


//  **********  Componente de tipo 'Clase'  **********

export class WillUnMounthClass extends Component {

	componentWillUnmount() {
		console.log("\n");
		console.log('----- ComponentWillUnMount() ----- Comportamiento antes de que el componente desaparezca');
	}

	render() {
		
		return (
			<div className='componentes'>
				<h2 className='titulo-componente'> ----- WillUnMount ----- </h2>
			</div>
		)
	}
}



//  **********  Componente de tipo 'Función'  **********

export const WillUnMountHook = () => {

	useEffect(() => {

		//  ----------  aqui no ponemos nada  ----------
		return () => {
			console.log("\n");
			console.log('----- WillUnMountHook() ----- Comportamiento antes de que el componente desaparezca');
		}

	}, [])

	return (
		
		<div className='componentes'>
			<h2 className='titulo-componente'> ----- WillUnMountHook ----- </h2>
		</div>
	)
}
