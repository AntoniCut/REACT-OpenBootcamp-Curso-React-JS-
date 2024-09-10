//  ************************************************************************************************
//  **********  /openbootcamp/src/ComponentsMain/CursoComponent/TituloCapitulosCurso.jsx  **********
//  ************************************************************************************************


import './CursoComponent.css';


//  **********  Componente Principal de los Ejercicios del Curso  **********
export const TituloCapitulosCurso = ({titulo}) => {

    return (

        <section className='componentes color'>
            <h2 className='titulo-componente'> {titulo} </h2>
       </section>

    )
}