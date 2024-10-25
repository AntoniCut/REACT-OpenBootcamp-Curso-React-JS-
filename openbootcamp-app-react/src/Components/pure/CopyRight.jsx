//  ********************************************************************************
//  **********  openbootcamp-app-react/src/components/pure/CopyRight.jsx  **********
//  ********************************************************************************


//  -----  Material UI Components  -----
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export const CopyRight = () => {


    return (

        <Typography variant='body2' color='WhiteText' align='center'>
            
            { 'Copyright (C)' } 
            &nbsp; &nbsp;
            <Link color='inherit' href='https://imaginaformacion.com' target='_blank'> Imagina Formacion </Link>
            &nbsp; &nbsp;
            {new Date().getFullYear()}

        </Typography>

    )
}