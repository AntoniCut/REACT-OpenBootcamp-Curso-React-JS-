//  ********************************************************
//  **********  02/openbootcamp-app-react-redux/  **********
//  **********  /src/components/pure/  *********************
//  **********  /FilterOptions.jsx  ************************
//  ********************************************************


import React from 'react';
import FilterContainer from '../containers/FilterContainer';

export const FilterOptions = () => {

    return (
        
        <div className='filters'>
            
            <br />
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'> ALL </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'> ACTIVE </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'> COMPLETED </FilterContainer>

        </div>
    )
}
