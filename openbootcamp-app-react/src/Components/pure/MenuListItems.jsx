//  ************************************************************************************
//  **********  openbootcamp-app-react/src/components/pure/MenuListItems.jsx  **********
//  ************************************************************************************


//  -----  Material UI Components  -----
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, SettingsIcon, Task } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


//  -----  devuelve los iconos  -----
const getIcons = (icon) => {

    switch (icon) {
        case 'HOME':
            return <Home />
        case 'TASK':
            return <Task />
        case 'SETTINGS':
            return <SettingsIcon />
        default:
            return <Home />
    };
}


export const MenuListItems = ({ list }) => {

    const navigate = useNavigate(); // Inicializar useNavigate
    const navigateTo = ruta => navigate(ruta); // Redirigir a la ruta especificada

    return (

        <List>
            {
                list.map(({ text, ruta, icon }, index) => {

                    <ListItem key={index} button onClick={navigateTo(ruta)} >
                        <ListItemIcon> {getIcons(icon)} </ListItemIcon>
                        <ListItemText primary={text}>  </ListItemText>
                    </ListItem>
                })
            }
        </List>
    )
}